import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const moduleADeliverables = [
  "UX/UI audit with actionable recommendations",
  "Component inventory",
  "Figma Design System: tokens, component library, usage guidelines",
  "Variant states and accessibility notes",
];

const moduleAOutcomes = [
  "A baseline system that aligns visual and interaction patterns",
  "Reuse-ready Figma assets your team can extend",
];

export function SlideModuleA() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="flex h-full flex-col gap-8 px-16 pt-16 pb-24">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center bg-white/[0.08]">
            <Text as="span" size={300} className="opacity-80">A</Text>
          </div>
          <Text as="span" size={200} className="font-mono uppercase tracking-widest opacity-50">
            Design Audit &amp; Design System Foundation
          </Text>
        </div>

        <Heading as="h2" size={4} className="max-w-[75%]">
          Review current UI/UX, extract reusable patterns, and formalize a design system in Figma.
        </Heading>

        <div className="grid grid-cols-2 gap-8 flex-1">
          <div className="flex flex-col gap-4">
            <Text size={300} className="font-mono uppercase tracking-widest opacity-40">
              Deliverables
            </Text>
            <div className="flex flex-col gap-3">
              {moduleADeliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Text as="span" size={300} className="shrink-0 opacity-40">&#10003;</Text>
                  <Text size={400} className="opacity-80">{item}</Text>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Text size={300} className="font-mono uppercase tracking-widest opacity-40">
              Outcomes
            </Text>
            <div className="flex flex-col gap-3">
              {moduleAOutcomes.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Text as="span" size={300} className="shrink-0 opacity-40">&#10003;</Text>
                  <Text size={400} className="opacity-80">{item}</Text>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
