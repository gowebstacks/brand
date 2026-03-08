import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const advancedItems = [
  "Fetch live data from APIs or CMS",
  "Add interactive elements with React state",
  "Create custom slide layouts when needed",
  "Use 3D shapes for visual interest",
  "Integrate with Sanity for dynamic content",
  "Deploy as a standalone presentation app",
];

export function SlideAdvancedTechniques() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/twisted-torus.png"
        alt=""
        className="pointer-events-none absolute -right-[12%] top-[10%] w-[38%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col justify-center gap-6 px-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Going Further
        </Text>
        <Heading as="h2" size={2}>
          Advanced techniques
        </Heading>
        <Text size={500} className="max-w-[55%] opacity-70">
          Take your presentations to the next level.
        </Text>

        <div className="mt-4 flex flex-col gap-3 max-w-[55%]">
          {advancedItems.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 bg-white/[0.04] px-5 py-3"
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
