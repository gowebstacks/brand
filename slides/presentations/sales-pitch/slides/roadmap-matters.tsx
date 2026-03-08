import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const withoutRoadmap = [
  "Work becomes reactive",
  "Priorities get fuzzy",
  "Urgent requests crowd out meaningful progress",
];

const withRoadmap = [
  "The team has direction",
  "Initiatives ladder up to goals",
  "Capacity can be used intentionally",
  "Progress compounds over time",
];

export function SlideRoadmapMatters() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Strategy
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          The roadmap is what keeps the work strategic
        </Heading>

        <div className="mt-8 grid grid-cols-2 gap-6">
          {/* Without */}
          <div className="flex flex-col gap-3">
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest opacity-50"
            >
              Without a Roadmap
            </Text>
            {withoutRoadmap.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white/[0.04] px-6 py-4"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="shrink-0 opacity-50"
                >
                  <path
                    d="M4 8h8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <Text size={400} className="opacity-70">{item}</Text>
              </div>
            ))}
          </div>

          {/* With */}
          <div className="flex flex-col gap-3">
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest opacity-50"
            >
              With a Roadmap
            </Text>
            {withRoadmap.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white/[0.04] px-6 py-4"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="shrink-0 text-foreground"
                >
                  <path
                    d="M3 8.5L6.5 12L13 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <Text size={400} className="opacity-70">{item}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
