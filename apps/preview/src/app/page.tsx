"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { presentations } from "../../../../slides/presentations";

const SLIDE_W = 1280;
const SLIDE_H = 720;

function CoverThumbnail({ children }: { children: React.ReactNode }) {
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
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#111]"
      style={{ aspectRatio: "16/9" }}
    >
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
    </div>
  );
}

export default function PreviewPage() {
  return (
    <div className="noise-bg relative min-h-screen bg-[#0a0a0a] text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <img src="/logos/full_logo-lockup-ondark.svg" alt="Webstacks" className="h-5" />
            <span className="h-4 w-px bg-white/[0.12]" />
            <span className="text-xs text-white/40">Presentations</span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12">
        <p className="text-xs uppercase tracking-widest text-white/30">Brand Library</p>
        <h1 className="mt-3 text-3xl tracking-tight text-white">Presentations</h1>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/40">
          Browse, preview, and present branded slide decks. Select a deck below to get started.
        </p>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="border-t border-white/[0.06]" />
      </div>

      {/* Grid */}
      <main className="mx-auto max-w-7xl px-6 pt-10 pb-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {presentations.map(({ meta, slides }) => {
            const FirstSlide = slides[0]?.Component;
            return (
              <Link
                key={meta.id}
                href={`/${meta.id}`}
                className="group relative flex flex-col overflow-hidden border border-white/[0.06] bg-white/[0.02] transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]"
              >
                {/* Thumbnail */}
                <div className="relative">
                  <CoverThumbnail>
                    {FirstSlide && <FirstSlide />}
                  </CoverThumbnail>

                  {/* Gradient fade at bottom of thumbnail */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/50 group-hover:opacity-100">
                    <span className="flex items-center gap-2 border border-white/[0.16] bg-white/[0.08] px-4 py-2 text-xs text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-100 scale-95">
                      Open presentation
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex flex-1 flex-col justify-between border-t border-white/[0.06] px-5 py-4">
                  <span className="text-sm text-white/90 leading-snug">{meta.label}</span>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[11px] text-white/30">
                      {meta.count} {meta.count === 1 ? "slide" : "slides"}
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-white/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white/50"
                    >
                      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
