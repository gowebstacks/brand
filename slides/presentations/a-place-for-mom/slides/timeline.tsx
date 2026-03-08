import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const timeline = [
  { module: "A", label: "Design Audit & Figma System", duration: "2–3 weeks" },
  { module: "B", label: "Program Management", duration: "3–5 months" },
  { module: "C", label: "Sanity Studio & Schema Ownership", duration: "2–4 weeks" },
  { module: "D", label: "Storybook Component Documentation", duration: "3–5 weeks" },
];

export function SlideTimeline() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/ridged-cylinder.png"
        alt=""
        className="pointer-events-none absolute -right-[10%] bottom-[5%] w-[28%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col px-16 pt-16 pb-24">
        <div className="flex flex-col gap-3">
          <Text as="span" size={200} className="font-mono uppercase tracking-widest opacity-50">
            Rough Timeline
          </Text>
          <Heading as="h2" size={3}>
            Estimated Duration by Module
          </Heading>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          {/* Header */}
          <div className="grid grid-cols-[48px_1fr_200px] gap-3 px-6 pb-2 border-b border-white/[0.08]">
            <Text size={200} className="font-mono uppercase tracking-widest opacity-40">
              #
            </Text>
            <Text size={200} className="font-mono uppercase tracking-widest opacity-40">
              Module
            </Text>
            <Text size={200} className="font-mono uppercase tracking-widest opacity-40 text-right">
              Duration
            </Text>
          </div>

          {timeline.map((row) => (
            <div
              key={row.module}
              className="grid grid-cols-[48px_1fr_200px] items-center gap-3 bg-white/[0.04] px-6 py-4"
            >
              <div className="flex h-8 w-8 items-center justify-center bg-white/[0.08]">
                <Text as="span" size={300} className="opacity-80">
                  {row.module}
                </Text>
              </div>
              <Text size={400} className="opacity-90">{row.label}</Text>
              <Text size={400} className="text-right opacity-60">{row.duration}</Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
