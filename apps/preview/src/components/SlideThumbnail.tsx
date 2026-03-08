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
const SCALE = 0.15;
const THUMB_W = SLIDE_W * SCALE; // 192
const THUMB_H = SLIDE_H * SCALE; // 108

export function SlideThumbnail({ index, isActive, onClick, children }: SlideThumbnailProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group flex w-full items-start gap-2 rounded-md p-1.5 text-left transition-colors ${
        isActive
          ? "bg-white/10"
          : "hover:bg-white/[0.06]"
      }`}
    >
      <span className="mt-1 shrink-0 text-[10px] font-mono tabular-nums opacity-40 w-5 text-right">
        {index + 1}
      </span>
      <div
        className={`shrink-0 overflow-hidden rounded-sm border-2 transition-colors ${
          isActive ? "border-blue-500" : "border-transparent"
        }`}
        style={{ width: THUMB_W, height: THUMB_H }}
      >
        <div
          style={{
            width: SLIDE_W,
            height: SLIDE_H,
            transform: `scale(${SCALE})`,
            transformOrigin: "top left",
          }}
          className="pointer-events-none"
        >
          {children}
        </div>
      </div>
    </button>
  );
}
