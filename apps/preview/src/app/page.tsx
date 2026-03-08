"use client";

import Link from "next/link";
import { Text } from "@webstacks/ui";
import { presentations } from "../../../../slides/presentations";

const SLIDE_W = 1280;
const SLIDE_H = 720;
const SCALE = 0.25;
const THUMB_W = SLIDE_W * SCALE; // 320
const THUMB_H = SLIDE_H * SCALE; // 180

export default function PreviewPage() {
  return (
    <div className="min-h-screen px-8 py-10 text-foreground">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
        {presentations.map(({ meta, slides }) => {
          const FirstSlide = slides[0]?.Component;
          return (
            <Link
              key={meta.id}
              href={`/${meta.id}`}
              className="group rounded-lg border border-white/10 bg-white/[0.02] no-underline transition-colors hover:border-white/20 hover:bg-white/[0.04]"
            >
              {/* Thumbnail preview of first slide */}
              <div
                className="overflow-hidden rounded-t-lg"
                style={{ width: "100%", height: THUMB_H, position: "relative" }}
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
                  {FirstSlide && <FirstSlide />}
                </div>
              </div>

              {/* Label area */}
              <div className="border-t border-white/10 px-4 py-3">
                <Text as="span" size={300} className="text-foreground">
                  {meta.label}
                </Text>
                <Text as="span" size={100} className="mt-0.5 block opacity-40">
                  {meta.count} slides
                </Text>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
