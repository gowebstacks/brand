import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const benefits = [
  "Launch landing pages quickly",
  "Reuse components across campaigns",
  "Test messaging and layouts",
  "Publish without engineering support",
];

export function SlideMarketerBenefits() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/split-ring.png"
        alt=""
        className="pointer-events-none absolute -right-[15%] top-1/2 -translate-y-1/2 w-[40%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col justify-center gap-6 px-16 max-w-[60%]">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          For Marketing Teams
        </Text>
        <Heading as="h2" size={3}>
          How Marketers Use Modular Websites
        </Heading>
        <Text size={400} className="opacity-70">
          With modular architecture, marketing teams can:
        </Text>

        <div className="flex flex-col gap-3 mt-2">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-3 bg-white/[0.04] px-5 py-3"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="shrink-0 text-primary"
              >
                <path
                  d="M3 8.5L6.5 12L13 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Text as="span" size={400} className="opacity-80">
                {benefit}
              </Text>
            </div>
          ))}
        </div>

        <div className="mt-4 border-l-2 border-primary pl-4">
          <Text size={500} weight="medium">
            Instead of waiting weeks, pages can launch in hours.
          </Text>
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
