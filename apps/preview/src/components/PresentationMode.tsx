"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import type { SlideEntry } from "../../../../slides/presentations";

const SLIDE_W = 1280;
const SLIDE_H = 720;

interface PresentationModeProps {
  slides: SlideEntry[];
  initialIndex: number;
  mode: "slides-only" | "with-notes";
  onExit: (index: number) => void;
}

export function PresentationMode({ slides, initialIndex, mode, onExit }: PresentationModeProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [scale, setScale] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // ResizeObserver to compute scale factor
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setScale(Math.min(width / SLIDE_W, height / SLIDE_H, 1));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onExit(currentIndex);
        return;
      }
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        setCurrentIndex((i) => Math.min(i + 1, slides.length - 1));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        setCurrentIndex((i) => Math.max(i - 1, 0));
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [currentIndex, slides.length, onExit]);

  const handleClick = useCallback(() => {
    setCurrentIndex((i) => Math.min(i + 1, slides.length - 1));
  }, [slides.length]);

  const Slide = slides[currentIndex]?.Component;

  return (
    <div className="fixed inset-0 z-50 flex bg-black">
      {/* Slide area */}
      <div
        className={`relative flex items-center justify-center ${mode === "with-notes" ? "w-[70%]" : "w-full"}`}
        onClick={handleClick}
      >
        <div ref={containerRef} className="absolute inset-4 flex items-center justify-center">
          {scale > 0 && Slide && (
            <div
              style={{
                width: SLIDE_W,
                height: SLIDE_H,
                transform: `scale(${scale})`,
                transformOrigin: "center center",
                flexShrink: 0,
              }}
            >
              <Slide />
            </div>
          )}
        </div>
      </div>

      {/* Notes panel */}
      {mode === "with-notes" && (
        <div className="flex w-[30%] flex-col border-l border-white/[0.08] bg-[#111]">
          <div className="shrink-0 border-b border-white/[0.08] px-5 py-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
              Presenter Notes
            </span>
          </div>
          <div className="flex-1 overflow-y-auto px-5 py-4">
            <div className="prose-notes text-sm leading-relaxed text-white/60">
              <ReactMarkdown>
                {slides[currentIndex]?.notes || "*No notes for this slide.*"}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      )}

      {/* Slide counter */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 flex justify-center">
        <span className="font-mono text-xs tabular-nums text-white/30">
          {currentIndex + 1} / {slides.length}
        </span>
      </div>

      {/* ESC hint */}
      <div className="pointer-events-none absolute right-4 top-4">
        <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">
          ESC to exit
        </span>
      </div>
    </div>
  );
}
