"use client";

import * as React from "react";
import { useRef, useEffect, useState } from "react";

interface SlideThumbnailProps {
  index: number;
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const SLIDE_W = 1280;
const SLIDE_H = 720;

export function SlideThumbnail({ index, isActive, onClick, children }: SlideThumbnailProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / SLIDE_W);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group flex w-full items-start gap-2.5 rounded-lg p-2 text-left
        transition-all duration-150 overflow-hidden
        ${isActive
          ? "bg-white/[0.08]"
          : "hover:bg-white/[0.04]"
        }
      `}
    >
      {/* Slide number */}
      <span
        className={`
          mt-1 w-5 shrink-0 text-right font-mono text-[10px] tabular-nums
          transition-colors
          ${isActive ? "text-white/60" : "text-white/30"}
        `}
      >
        {index + 1}
      </span>

      {/* Thumbnail container — fills available width, maintains 16:9 */}
      <div
        ref={containerRef}
        className={`
          relative min-w-0 flex-1 overflow-hidden rounded-[4px]
          ring-1 ring-inset transition-all duration-150
          ${isActive
            ? "ring-white/20 shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_2px_8px_rgba(0,0,0,0.3)]"
            : "ring-white/[0.08] group-hover:ring-white/[0.12]"
          }
        `}
        style={{ aspectRatio: "16/9" }}
      >
        {/* Scaled slide content */}
        {scale > 0 && (
          <div
            style={{
              width: SLIDE_W,
              height: SLIDE_H,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
            className="pointer-events-none select-none"
          >
            {children}
          </div>
        )}

        {/* Active indicator overlay */}
        {isActive && (
          <div className="absolute inset-0 rounded-[4px] ring-2 ring-inset ring-blue-500/50" />
        )}
      </div>
    </button>
  );
}
