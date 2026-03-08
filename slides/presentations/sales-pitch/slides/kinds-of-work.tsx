import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const workTypes = [
  "Ongoing website optimization",
  "New page and template creation",
  "Campaign and launch support",
  "CMS and editor experience improvements",
  "Technical cleanup and enhancements",
  "Design system expansion",
  "Experimentation and conversion work",
  "Roadmap planning and prioritization",
];

export function SlideKindsOfWork() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="relative z-10 flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Scope
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          What this model is built to support
        </Heading>

        <div className="mt-8 grid grid-cols-2 gap-3">
          {workTypes.map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 bg-white/[0.04] px-6 py-4"
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
              <Text as="span" size={400} className="opacity-70">
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
