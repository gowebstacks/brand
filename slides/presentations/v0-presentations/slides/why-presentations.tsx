import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const benefitItems = [
  "Consistent brand styling across all slides",
  "Reusable component library",
  "Version control with Git",
  "Collaborative editing",
  "Deploy and share instantly",
  "Interactive elements possible",
];

export function SlideWhyPresentations() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/spiral-band.png"
        alt=""
        className="pointer-events-none absolute -right-[15%] -bottom-[20%] w-[45%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col justify-center gap-6 px-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          The Opportunity
        </Text>
        <Heading as="h2" size={2}>
          Why build presentations in v0?
        </Heading>
        <Text size={500} className="max-w-[55%] opacity-70">
          Move beyond static slides to dynamic, on-brand decks.
        </Text>

        <div className="mt-4 grid max-w-[75%] grid-cols-2 gap-3">
          {benefitItems.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 bg-white/[0.04] px-5 py-4"
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
