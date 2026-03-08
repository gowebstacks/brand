"use client";

import * as React from "react";

interface SlideThumbnailProps {
  index: number;
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const SLIDE_W = 1280;
const SLIDE_H = 720;
const SCALE = 0.165;
const THUMB_W = SLIDE_W * SCALE;
const THUMB_H = SLIDE_H * SCALE;

export function SlideThumbnail({ index, isActive, onClick, children }: SlideThumbnailProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        group flex w-full items-start gap-2.5 rounded-lg p-2 text-left 
        transition-all duration-150
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
      
      {/* Thumbnail container */}
      <div
        className={`
          relative shrink-0 overflow-hidden rounded-[4px] 
          ring-1 ring-inset transition-all duration-150
          ${isActive 
            ? "ring-white/20 shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_2px_8px_rgba(0,0,0,0.3)]" 
            : "ring-white/[0.08] group-hover:ring-white/[0.12]"
          }
        `}
        style={{ width: THUMB_W, height: THUMB_H }}
      >
        {/* Scaled slide content */}
        <div
          style={{
            width: SLIDE_W,
            height: SLIDE_H,
            transform: `scale(${SCALE})`,
            transformOrigin: "top left",
          }}
          className="pointer-events-none select-none"
        >
          {children}
        </div>
        
        {/* Active indicator overlay */}
        {isActive && (
          <div className="absolute inset-0 rounded-[4px] ring-2 ring-inset ring-blue-500/50" />
        )}
      </div>
    </button>
  );
}
