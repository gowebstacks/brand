import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const addOns = [
  "Training sessions for your editorial and engineering teams",
  "Content strategy consulting",
  "QA and UAT support",
  "Performance and SEO benchmarking",
];

export function SlideAddOns() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/scattered-discs.png"
        alt=""
        className="pointer-events-none absolute -right-[8%] -top-[10%] w-[30%] object-contain opacity-20 select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col gap-10 px-16 pt-16 pb-24">
        <div className="flex flex-col gap-3">
          <Text as="span" size={200} className="font-mono uppercase tracking-widest opacity-50">
            Optional Add-Ons
          </Text>
          <Heading as="h2" size={3} className="max-w-[70%]">
            Can be scoped later as needs evolve.
          </Heading>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {addOns.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white/[0.04] px-6 py-5"
            >
              <Text as="span" size={300} className="shrink-0 opacity-40">+</Text>
              <Text size={400} className="opacity-80">{item}</Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
