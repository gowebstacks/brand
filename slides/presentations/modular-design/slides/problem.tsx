import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const challenges = [
  "Hard to update quickly",
  "Small changes require developers",
  "Redesigns every 2-3 years",
  "Inconsistent components across pages",
  "Slow marketing velocity",
];

export function SlideProblem() {
  return (
    <SlideBase theme="light" className="!p-0">
      <img
        src="/images/3d-shapes/stacked-blocks.png"
        alt=""
        className="pointer-events-none absolute -right-[15%] -bottom-[20%] w-[45%] object-contain select-none opacity-20"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col justify-center gap-6 px-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest text-muted-foreground"
        >
          The Challenge
        </Text>
        <Heading as="h2" size={3}>
          The Problem With Traditional Websites
        </Heading>
        <Text size={500} className="text-muted-foreground max-w-2xl">
          Traditional websites are built like one large monolithic project.
        </Text>

        <div className="mt-4 flex flex-col gap-3 max-w-xl">
          {challenges.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 bg-muted px-5 py-3"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="shrink-0 text-destructive"
              >
                <path
                  d="M4 4L12 12M12 4L4 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <Text as="span" size={400}>
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
