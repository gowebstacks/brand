import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const podBenefits = [
  "Multiple specialists can contribute when needed",
  "Work can accelerate around priority initiatives",
  "Competency leads provide continuity and context",
  "You get depth without hiring a full internal team",
];

export function SlidePodModel() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Team Structure
        </Text>
        <Heading as="h2" size={3} className="mt-4 max-w-[70%]">
          You are not buying one person. You are getting a pod.
        </Heading>

        <div className="mt-8 grid grid-cols-2 gap-3">
          {podBenefits.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white/[0.04] px-6 py-5"
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

      <SlideFooter />
    </SlideBase>
  );
}
