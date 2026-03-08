import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const philosophyItems = [
  "Brand Matures",
  "Messaging Changes",
  "Products Expand",
  "Campaigns Launch",
  "Conversion Goals Shift",
  "Teams Grow",
];

export function SlidePhilosophy() {
  return (
    <SlideBase theme="dark" className="!p-0">
      {/* 3D accent shapes — top corners */}
      <img
        src="/images/3d-shapes/glass-panels.png"
        alt=""
        className="pointer-events-none absolute -left-[18%] -top-[30%] w-[45%] -rotate-12 object-contain select-none"
        aria-hidden="true"
      />
      <img
        src="/images/3d-shapes/glass-cubes.png"
        alt=""
        className="pointer-events-none absolute -right-[15%] -top-[30%] w-[50%] object-contain select-none"
        aria-hidden="true"
      />

      {/* Centered content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Our Philosophy
        </Text>
        <Heading as="h2" size={1} align="center">
          Your website is a product, not a project.
        </Heading>

        {/* Bullet row */}
        <div className="mt-4 flex items-center gap-6 bg-white/5 px-8 py-4">
          {philosophyItems.map((item) => (
            <div key={item} className="flex items-center gap-2 whitespace-nowrap">
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
              <Text as="span" size={300} className="opacity-70">
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
