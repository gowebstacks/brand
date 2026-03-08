import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const startingSteps = [
  "Review the current website, workflows, and systems",
  "Identify immediate blockers and areas of friction",
  "Align on goals and roadmap priorities",
  "Recommend the right starting capacity",
  "Begin execution with clear ownership and cadence",
];

export function SlideHowWeStart() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/layered-pebbles.png"
        alt=""
        className="pointer-events-none absolute -right-[12%] -bottom-[20%] w-[40%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Getting Started
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          A typical starting path
        </Heading>

        <div className="mt-8 flex flex-col gap-3">
          {startingSteps.map((step, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white/[0.04] px-6 py-4"
            >
              <Text
                as="span"
                size={200}
                className="shrink-0 font-mono opacity-50"
              >
                {String(i + 1).padStart(2, "0")}
              </Text>
              <Text as="span" size={400} className="opacity-70">
                {step}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
