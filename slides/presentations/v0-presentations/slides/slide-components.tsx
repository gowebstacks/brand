import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const components = [
  { name: "TitleSlide", use: "Opening/cover slides with team members" },
  { name: "ContentSlide", use: "General content with text and optional images" },
  { name: "SectionSlide", use: "Dividers between major sections" },
  { name: "StatSlide", use: "Highlight key metrics and numbers" },
  { name: "QuoteSlide", use: "Customer testimonials and quotes" },
  { name: "ComparisonSlide", use: "Side-by-side comparisons" },
  { name: "AgendaSlide", use: "Outline and table of contents" },
  { name: "CTASlide", use: "Closing call-to-action" },
];

export function SlideSlideComponents() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/stacked-blocks.png"
        alt=""
        className="pointer-events-none absolute -right-[10%] -bottom-[20%] w-[40%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Component Library
        </Text>
        <Heading as="h2" size={2} className="mt-4">
          Pre-built slide components
        </Heading>
        <Text size={400} className="mt-2 max-w-[55%] opacity-70">
          Start with these ready-to-use templates for consistent, branded decks.
        </Text>

        <div className="mt-8 grid grid-cols-2 gap-3">
          {components.map((comp) => (
            <div
              key={comp.name}
              className="flex items-center gap-4 bg-white/[0.04] px-5 py-3"
            >
              <Text as="span" size={300} className="font-mono text-foreground">
                {comp.name}
              </Text>
              <Text as="span" size={200} className="opacity-50">
                {comp.use}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
