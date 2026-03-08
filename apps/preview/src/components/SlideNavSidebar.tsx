"use client";

import * as React from "react";
import { useRef, useEffect } from "react";
import { SlideThumbnail } from "./SlideThumbnail";
import type { SlideEntry } from "../../../../slides/presentations";

interface SlideNavSidebarProps {
  slides: SlideEntry[];
  activeIndex: number;
  collapsed: boolean;
  onSelect: (index: number) => void;
  onToggle: () => void;
}

export function SlideNavSidebar({ slides, activeIndex, collapsed, onSelect, onToggle }: SlideNavSidebarProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Auto-scroll sidebar to keep active thumbnail visible
  useEffect(() => {
    if (collapsed) return;
    const el = itemRefs.current[activeIndex];
    if (el && listRef.current) {
      el.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }
  }, [activeIndex, collapsed]);

  return (
    <div className={`relative flex h-full shrink-0 flex-col border-r border-white/10 bg-black/40 transition-[width] duration-200 ${collapsed ? "w-10" : "w-[240px]"}`}>
      {/* Toggle button */}
      <button
        type="button"
        onClick={onToggle}
        className="flex h-10 w-full shrink-0 items-center justify-center border-b border-white/10 text-white/50 hover:text-white/80 transition-colors"
        title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`transition-transform ${collapsed ? "rotate-180" : ""}`}>
          <path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Thumbnail list */}
      {!collapsed && (
        <div
          ref={listRef}
          className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto overscroll-contain p-2"
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              ref={(el) => { itemRefs.current[i] = el; }}
            >
              <SlideThumbnail
                index={i}
                isActive={i === activeIndex}
                onClick={() => onSelect(i)}
              >
                <slide.Component />
              </SlideThumbnail>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
