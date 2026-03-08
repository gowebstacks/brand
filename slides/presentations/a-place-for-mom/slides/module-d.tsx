import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const moduleDDeliverables = [
  "Storybook setup and configuration",
  "Documentation for all major components",
  "Integration examples",
  "Stories for states, variations, and edge cases",
];

const moduleDOutcomes = [
  "A source of truth for developers and designers alike",
  "Reduced onboarding overhead",
  "A bridge between design and code",
];

export function SlideModuleD() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/stacked-blocks.png"
        alt=""
        className="pointer-events-none absolute -bottom-[10%] -right-[8%] w-[30%] object-contain opacity-20 select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col gap-8 px-16 pt-16 pb-24">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center bg-white/[0.08]">
            <Text as="span" size={300} className="opacity-80">D</Text>
          </div>
          <Text as="span" size={200} className="font-mono uppercase tracking-widest opacity-50">
            Storybook Component Documentation
          </Text>
        </div>

        <Heading as="h2" size={4} className="max-w-[75%]">
          Create a living component library using Storybook to document how the UI is assembled.
        </Heading>

        <div className="grid grid-cols-2 gap-8 flex-1">
          <div className="flex flex-col gap-4">
            <Text size={300} className="font-mono uppercase tracking-widest opacity-40">
              Deliverables
            </Text>
            <div className="flex flex-col gap-3">
              {moduleDDeliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Text as="span" size={300} className="shrink-0 opacity-40">&#10003;</Text>
                  <Text size={400} className="opacity-80">{item}</Text>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Text size={300} className="font-mono uppercase tracking-widest opacity-40">
              Outcomes
            </Text>
            <div className="flex flex-col gap-3">
              {moduleDOutcomes.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Text as="span" size={300} className="shrink-0 opacity-40">&#10003;</Text>
                  <Text size={400} className="opacity-80">{item}</Text>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
