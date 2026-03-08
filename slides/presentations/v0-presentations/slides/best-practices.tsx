import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const bestPractices = [
  { title: "Keep it visual", desc: "Use images, 3D shapes, and whitespace to create breathing room" },
  { title: "Limit text per slide", desc: "Maximum 6-8 bullet points or one key message" },
  { title: "Use the grid system", desc: "Leverage 2×2, 3×2, and column layouts for structure" },
  { title: "Maintain brand consistency", desc: "Use design tokens and the component library" },
  { title: "Add section dividers", desc: "Break up content with SectionSlide components" },
  { title: "Test at full screen", desc: "Preview at 1280×720 to check proportions" },
];

export function SlideBestPractices() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/glass-panels.png"
        alt=""
        className="pointer-events-none absolute -left-[15%] -top-[25%] w-[40%] -rotate-12 object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Tips & Tricks
        </Text>
        <Heading as="h2" size={2} className="mt-4">
          Best practices for great decks
        </Heading>

        <div className="mt-8 grid grid-cols-2 gap-4">
          {bestPractices.map((practice) => (
            <div
              key={practice.title}
              className="flex flex-col gap-2 bg-white/[0.04] p-5"
            >
              <Heading as="h3" size={6}>
                {practice.title}
              </Heading>
              <Text size={200} className="opacity-60">
                {practice.desc}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
