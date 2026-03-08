import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const foundations = [
  { title: "Typography", desc: "Saans + TT Interphases Pro Mono, locked to the brand" },
  { title: "Color", desc: "Semantic tokens, not hex values" },
  { title: "Layout", desc: "Consistent spacing, grids, and safe areas" },
  { title: "Components", desc: "TitleSlide, ContentSlide, CTASlide, and more" },
];

export function SlideDesignSystem() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="relative z-10 flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          The Foundation
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          A shared system ensures every deck looks right.
        </Heading>

        <div className="mt-8 grid grid-cols-2 gap-3">
          {foundations.map((item) => (
            <div
              key={item.title}
              className="bg-white/[0.04] px-6 py-4"
            >
              <Text as="span" size={400}>
                {item.title}
              </Text>
              <Text size={300} className="mt-2 opacity-60">
                {item.desc}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
