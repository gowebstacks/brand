import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const assumptions = [
  "There will be no full visual redesign at this time",
  "Your internal engineering team will own day-to-day development",
  "We will co-plan schema decisions; your engineers will help validate",
  "Content strategy and SEO will be handled by your internal team or scoped separately",
];

export function SlideAssumptions() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="flex h-full flex-col px-16 pt-16 pb-24">
        <div className="flex flex-col gap-3">
          <Text as="span" size={200} className="font-mono uppercase tracking-widest opacity-50">
            Assumptions
          </Text>
          <Heading as="h2" size={3} className="max-w-[70%]">
            What we&apos;re building on.
          </Heading>
        </div>

        <div className="mt-8 flex flex-col gap-3 max-w-[80%]">
          {assumptions.map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-white/[0.04] px-6 py-4">
              <Text as="span" size={300} className="shrink-0 opacity-40 pt-0.5">
                {String(i + 1).padStart(2, "0")}
              </Text>
              <Text size={400} className="opacity-80">{item}</Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
