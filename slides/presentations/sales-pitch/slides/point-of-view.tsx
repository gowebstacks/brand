import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const evolvesItems = [
  "the business evolves",
  "the brand matures",
  "new products launch",
  "campaigns change",
  "conversion goals shift",
  "internal teams grow",
];

export function SlidePointOfView() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/spiral-band.png"
        alt=""
        className="pointer-events-none absolute -left-[18%] -bottom-[25%] w-[45%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col justify-center gap-6 px-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Our Point of View
        </Text>
        <Heading as="h2" size={3}>
          We believe the website is a product
        </Heading>
        <Text size={500} className="opacity-70">
          It should evolve as:
        </Text>

        <div className="mt-2 grid grid-cols-3 gap-3">
          {evolvesItems.map((item) => (
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

        <Text size={400} className="mt-2 opacity-50">
          A website should not sit still.
        </Text>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
