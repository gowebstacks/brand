import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const modules = [
  {
    letter: "A",
    title: "Design System Foundation",
    description: "Audit and formalize existing UI into reusable patterns in Figma.",
  },
  {
    letter: "B",
    title: "Program Management",
    description: "Lead coordination of the full end-to-end migration to Sanity.",
  },
  {
    letter: "C",
    title: "Sanity Schema & Studio",
    description: "Lead content modeling and studio configuration for scalability.",
  },
  {
    letter: "D",
    title: "Component Documentation",
    description: "Establish Storybook as a shared source of truth for design and code.",
  },
];

export function SlideExecutiveSummary() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/glass-panels.png"
        alt=""
        className="pointer-events-none absolute -right-[15%] -top-[20%] w-[40%] object-contain opacity-30 select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col gap-10 px-16 pt-16 pb-24">
        <div className="flex flex-col gap-3">
          <Text as="span" size={200} className="font-mono uppercase tracking-widest opacity-50">
            Executive Summary
          </Text>
          <Heading as="h2" size={3} className="max-w-[70%]">
            Four independent modules — choose what fits your priorities and budget.
          </Heading>
        </div>

        <div className="grid grid-cols-2 gap-4 flex-1">
          {modules.map((m) => (
            <div
              key={m.letter}
              className="flex gap-4 bg-white/[0.04] p-6"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-white/[0.08]">
                <Text as="span" size={300} className="opacity-80">
                  {m.letter}
                </Text>
              </div>
              <div className="flex flex-col gap-2">
                <Text size={400}>{m.title}</Text>
                <Text size={300} className="opacity-60">
                  {m.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
