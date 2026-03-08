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
    <aside 
      className={`
        relative flex h-full shrink-0 flex-col border-r border-white/[0.06] bg-[#0a0a0a]
        transition-[width] duration-200 ease-out
        ${collapsed ? "w-12" : "w-[260px]"}
      `}
    >
      {/* Header with toggle */}
      <div className="flex h-12 shrink-0 items-center justify-between border-b border-white/[0.06] px-3">
        {!collapsed && (
          <span className="text-[11px] font-medium uppercase tracking-wider text-white/30">
            Slides
          </span>
        )}
        <button
          type="button"
          onClick={onToggle}
          className={`
            flex h-7 w-7 items-center justify-center rounded-md text-white/40 
            transition-colors hover:bg-white/[0.06] hover:text-white/70
            ${collapsed ? "mx-auto" : ""}
          `}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <svg 
            width="14" 
            height="14" 
            viewBox="0 0 16 16" 
            fill="none" 
            className={`transition-transform duration-200 ${collapsed ? "rotate-180" : ""}`}
          >
            <path 
              d="M10 4L6 8L10 12" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
            />
          </svg>
        </button>
      </div>

      {/* Thumbnail list */}
      {!collapsed && (
        <div
          ref={listRef}
          className="flex min-h-0 flex-1 flex-col gap-1.5 overflow-y-auto overscroll-contain p-3"
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

      {/* Collapsed state: just show numbers */}
      {collapsed && (
        <div className="flex flex-1 flex-col gap-1 overflow-y-auto p-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onSelect(i)}
              className={`
                flex h-8 w-8 items-center justify-center rounded-md text-xs font-medium tabular-nums
                transition-colors
                ${i === activeIndex 
                  ? "bg-white/10 text-white" 
                  : "text-white/40 hover:bg-white/[0.06] hover:text-white/60"
                }
              `}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </aside>
  );
}
