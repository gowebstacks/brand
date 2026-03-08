"use client";

import Link from "next/link";
import { presentations } from "../../../../slides/presentations";

const SLIDE_W = 1280;
const SLIDE_H = 720;
const SCALE = 0.28;
const THUMB_H = SLIDE_H * SCALE;

export default function PreviewPage() {
  return (
    <div className="noise-bg relative min-h-screen bg-[#0a0a0a] text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-sm font-semibold text-white">Webstacks Brand</span>
            <span className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px] font-medium text-white/40">
              Preview
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/40">{presentations.length} presentations</span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight text-white">Presentations</h1>
          <p className="mt-1 text-sm text-white/50">Select a presentation to preview</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {presentations.map(({ meta, slides }) => {
            const FirstSlide = slides[0]?.Component;
            return (
              <Link
                key={meta.id}
                href={`/${meta.id}`}
                className="group relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] transition-all duration-200 hover:border-white/[0.12] hover:bg-white/[0.04]"
              >
                {/* Thumbnail preview of first slide */}
                <div
                  className="relative overflow-hidden bg-[#111]"
                  style={{ height: THUMB_H }}
                >
                  <div
                    style={{
                      width: SLIDE_W,
                      height: SLIDE_H,
                      transform: `scale(${SCALE})`,
                      transformOrigin: "top left",
                    }}
                    className="pointer-events-none select-none"
                  >
                    {FirstSlide && <FirstSlide />}
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/40 group-hover:opacity-100">
                    <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-black">
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      View
                    </span>
                  </div>
                </div>

                {/* Label area */}
                <div className="border-t border-white/[0.06] px-4 py-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white/90">{meta.label}</span>
                    <span className="rounded-md bg-white/[0.06] px-2 py-0.5 text-[10px] font-medium tabular-nums text-white/40">
                      {meta.count}
                    </span>
                  </div>
                  <span className="mt-1 block text-xs text-white/40">
                    {meta.count} {meta.count === 1 ? "slide" : "slides"}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
