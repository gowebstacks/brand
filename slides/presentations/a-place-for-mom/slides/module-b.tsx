import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const moduleBDeliverables = [
  "Master migration roadmap and milestone plan",
  "Cross-functional stakeholder coordination",
  "Risk identification and mitigation planning",
  "Dependency management across engineering, content, and marketing",
  "Weekly executive-level reporting and alignment",
  "Launch readiness planning and go-live coordination",
];

export function SlideModuleB() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/spiral-band.png"
        alt=""
        className="pointer-events-none absolute -right-[10%] -top-[15%] w-[35%] object-contain opacity-20 select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col gap-8 px-16 pt-16 pb-24">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center bg-white/[0.08]">
            <Text as="span" size={300} className="opacity-80">B</Text>
          </div>
          <Text as="span" size={200} className="font-mono uppercase tracking-widest opacity-50">
            Program Management &amp; Delivery Support
          </Text>
        </div>

        <Heading as="h2" size={4} className="max-w-[80%]">
          Comprehensive program leadership across the entire Sanity migration.
        </Heading>

        <Text size={400} className="max-w-[75%] opacity-60">
          This module governs all workstreams — design system development, schema modeling, internal engineering, content migration, QA, and launch readiness.
        </Text>

        <div className="grid grid-cols-2 gap-x-8 gap-y-3 flex-1">
          {moduleBDeliverables.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <Text as="span" size={300} className="shrink-0 opacity-40">&#10003;</Text>
              <Text size={400} className="opacity-80">{item}</Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
