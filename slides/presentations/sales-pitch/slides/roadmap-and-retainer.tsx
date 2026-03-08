import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const roadmapDefines = [
  "What to prioritize",
  "What to sequence",
  "What outcomes matter",
];

const retainerProvides = [
  "Monthly capacity",
  "Cross-functional execution",
  "Flexibility across priorities",
  "Continuity over time",
];

export function SlideRoadmapAndRetainer() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="relative z-10 flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          The Model
        </Text>
        <Heading as="h2" size={3} className="mt-4 max-w-[80%]">
          The roadmap sets direction. The retainer creates momentum.
        </Heading>

        <div className="mt-8 grid grid-cols-2 gap-6">
          {/* Roadmap column */}
          <div className="flex flex-col gap-3">
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest opacity-50"
            >
              The Roadmap Defines
            </Text>
            {roadmapDefines.map((item) => (
              <div
                key={item}
                className="bg-white/[0.04] px-6 py-4"
              >
                <Text size={400} className="opacity-70">
                  {item}
                </Text>
              </div>
            ))}
          </div>

          {/* Retainer column */}
          <div className="flex flex-col gap-3">
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest opacity-50"
            >
              The Retainer Provides
            </Text>
            {retainerProvides.map((item) => (
              <div
                key={item}
                className="bg-white/[0.04] px-6 py-4"
              >
                <Text size={400} className="opacity-70">
                  {item}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
