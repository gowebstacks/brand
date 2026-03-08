import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const objectives = [
  "Establish clarity and consistency in design and content patterns",
  "Support your internal team with structured schema decisions",
  "Provide documentation and tooling for long-term scalability",
  "Deliver a coordinated, predictable migration to Sanity",
];

export function SlideObjectives() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/stacked-discs.png"
        alt=""
        className="pointer-events-none absolute -bottom-[10%] -right-[8%] w-[35%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col px-16 pt-16 pb-24">
        <div className="flex flex-col gap-3">
          <Text as="span" size={200} className="font-mono uppercase tracking-widest opacity-50">
            Engagement Objectives
          </Text>
          <Heading as="h2" size={3} className="max-w-[70%]">
            What we aim to achieve together.
          </Heading>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          {objectives.map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.06]">
                <Text as="span" size={200} className="opacity-60">
                  {String(i + 1).padStart(2, "0")}
                </Text>
              </div>
              <Text size={500} className="pt-0.5 opacity-90">
                {item}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
