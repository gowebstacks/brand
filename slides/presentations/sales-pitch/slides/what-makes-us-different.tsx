import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const opinions = [
  "Empowering marketing teams to own the website more effectively",
  "Building systems, not one-off pages",
  "Designing for reuse, consistency, and composability",
  "Making CMS experiences more intuitive for non-technical teams",
  "Pairing execution with real website strategy",
  "Acting like a partner, not a ticket queue",
];

export function SlideWhatMakesUsDifferent() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/glass-cubes.png"
        alt=""
        className="pointer-events-none absolute -right-[15%] -bottom-[25%] w-[45%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Our Difference
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          What we are opinionated about
        </Heading>

        <div className="mt-8 flex flex-col gap-3">
          {opinions.map((item) => (
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
