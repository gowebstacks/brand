"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Text } from "@webstacks/ui";
import { presentations } from "../../../../../slides/presentations";
import { SlideNavSidebar } from "../../components/SlideNavSidebar";

export default function PresentationPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const entry = presentations.find((p) => p.meta.id === id);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const ratioMap = useRef<Map<number, number>>(new Map());
  const isScrollingTo = useRef<number | null>(null);

  // IntersectionObserver to track which slide is visible
  useEffect(() => {
    const container = mainRef.current;
    if (!container || !entry) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Accumulate ratios for all observed slides
        for (const e of entries) {
          const idx = Number((e.target as HTMLElement).dataset.slideIndex);
          if (!isNaN(idx)) {
            ratioMap.current.set(idx, e.intersectionRatio);
          }
        }

        // Skip observer updates during programmatic scroll
        if (isScrollingTo.current !== null) return;

        // Pick the slide with the highest visibility
        let bestIdx = 0;
        let bestRatio = 0;
        for (const [idx, ratio] of ratioMap.current) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestIdx = idx;
          }
        }

        setActiveIndex(bestIdx);
      },
      {
        root: container,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    const slideEls = container.querySelectorAll("[data-slide-index]");
    slideEls.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      ratioMap.current.clear();
    };
  }, [entry]);

  const handleSelect = useCallback((index: number) => {
    const container = mainRef.current;
    if (!container) return;
    const target = container.querySelector(`[data-slide-index="${index}"]`) as HTMLElement | null;
    if (target) {
      // Set active index immediately for responsive feedback
      setActiveIndex(index);
      // Suppress observer updates during the smooth scroll animation
      isScrollingTo.current = index;
      // Scroll vertically only — avoids any horizontal shift
      container.scrollTo({
        top: target.offsetTop - container.offsetTop,
        behavior: "smooth",
      });
      setTimeout(() => {
        isScrollingTo.current = null;
      }, 800);
    }
  }, []);

  if (!entry) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#0a0a0a]">
        <div className="text-center">
          <Text size={500} className="text-white/60">Presentation not found</Text>
          <Link 
            href="/" 
            className="mt-4 inline-flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white/70"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to presentations
          </Link>
        </div>
      </div>
    );
  }

  const { meta, Component } = entry;

  return (
    <div className="noise-bg relative flex h-screen bg-[#0a0a0a] text-foreground">
      {/* Left sidebar */}
      <SlideNavSidebar
        slides={entry.slides}
        activeIndex={activeIndex}
        collapsed={sidebarCollapsed}
        onSelect={handleSelect}
        onToggle={() => setSidebarCollapsed((v) => !v)}
      />

      {/* Main scrollable area */}
      <div className="flex flex-1 flex-col">
        {/* Header toolbar */}
        <header className="relative z-20 flex h-12 shrink-0 items-center gap-4 border-b border-white/[0.06] bg-[#0a0a0a]/80 px-4 backdrop-blur-xl">
          <Link 
            href="/" 
            className="flex items-center gap-2 rounded-md px-2 py-1 text-white/50 transition-colors hover:bg-white/[0.04] hover:text-white/80"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs font-medium">Back</span>
          </Link>
          
          <div className="h-4 w-px bg-white/[0.08]" />
          
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-white/90">{meta.label}</span>
            <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px] font-medium text-white/40">
              {meta.count} slides
            </span>
          </div>
          
          <div className="ml-auto flex items-center gap-3">
            <div className="flex items-center gap-1.5 rounded-md bg-white/[0.04] px-2.5 py-1">
              <span className="text-xs font-medium tabular-nums text-white/70">{activeIndex + 1}</span>
              <span className="text-xs text-white/30">/</span>
              <span className="text-xs tabular-nums text-white/40">{meta.count}</span>
            </div>
          </div>
        </header>

        {/* Slide content */}
        <div 
          ref={mainRef} 
          className="flex-1 overflow-x-hidden overflow-y-auto"
        >
          <div className="mx-auto max-w-[1400px] px-8 py-6">
            <div className="origin-top">
              <Component />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
