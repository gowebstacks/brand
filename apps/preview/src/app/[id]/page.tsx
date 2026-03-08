"use client";

import { useState, useEffect, useRef, useCallback, use } from "react";
import Link from "next/link";
import { Heading, Text } from "@webstacks/ui";
import { presentations } from "../../../../../slides/presentations";
import { SlideNavSidebar } from "../../components/SlideNavSidebar";

export default function PresentationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const entry = presentations.find((p) => p.meta.id === id);
  const [activeIndex, setActiveIndex] = useState(0);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver to track which slide is visible
  useEffect(() => {
    const container = mainRef.current;
    if (!container || !entry) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let best: IntersectionObserverEntry | null = null;
        for (const e of entries) {
          if (e.isIntersecting && (!best || e.intersectionRatio > best.intersectionRatio)) {
            best = e;
          }
        }
        if (best) {
          const idx = Number((best.target as HTMLElement).dataset.slideIndex);
          if (!isNaN(idx)) setActiveIndex(idx);
        }
      },
      {
        root: container,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    const slideEls = container.querySelectorAll("[data-slide-index]");
    slideEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [entry]);

  const handleSelect = useCallback((index: number) => {
    const container = mainRef.current;
    if (!container) return;
    const target = container.querySelector(`[data-slide-index="${index}"]`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  if (!entry) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16 text-foreground">
        <Link href="/" className="text-foreground opacity-50 no-underline">
          <Text as="span" size={300}>&larr; Back</Text>
        </Link>
        <Text size={500} className="mt-8">Presentation not found.</Text>
      </div>
    );
  }

  const { meta, Component, slides } = entry;

  return (
    <div className="flex h-screen text-foreground">
      {/* Left sidebar */}
      <SlideNavSidebar
        slides={slides}
        activeIndex={activeIndex}
        collapsed={sidebarCollapsed}
        onSelect={handleSelect}
        onToggle={() => setSidebarCollapsed((v) => !v)}
      />

      {/* Main scrollable area */}
      <div ref={mainRef} className="flex-1 overflow-y-auto">
        {/* macOS-style toolbar */}
        <div className="sticky top-0 z-20 flex h-9 items-center gap-3 border-b border-white/10 bg-white/[0.03] px-3 backdrop-blur-md">
          <Link href="/" className="text-white/40 no-underline transition-colors hover:text-white/70">
            <Text as="span" size={100}>&larr; Back</Text>
          </Link>
          <div className="h-3 w-px bg-white/10" />
          <Text as="span" size={200} className="opacity-80">
            {meta.label}
          </Text>
          <Text as="span" size={100} className="opacity-30">
            {meta.count} slides
          </Text>
          <div className="ml-auto">
            <Text as="span" size={100} className="tabular-nums opacity-30">
              {activeIndex + 1} / {meta.count}
            </Text>
          </div>
        </div>

        <div className="mx-auto max-w-[1360px] px-6 pt-4 pb-8">
          <div className="origin-top scale-95">
            <Component />
          </div>
        </div>
      </div>
    </div>
  );
}
