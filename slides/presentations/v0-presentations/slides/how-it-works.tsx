import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const steps = [
  { num: "01", text: "Describe what you need in plain English" },
  { num: "02", text: "v0 generates slides using our component library" },
  { num: "03", text: "Review, refine, and push via GitHub" },
];

export function SlideHowItWorks() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="relative z-10 flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          The Workflow
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          From prompt to presentation in minutes.
        </Heading>

        <div className="mt-8 flex flex-col gap-3">
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex items-center gap-6 bg-white/[0.04] px-6 py-4"
            >
              <Text
                as="span"
                size={200}
                className="font-mono uppercase tracking-widest opacity-50"
              >
                {step.num}
              </Text>
              <Text as="span" size={400} className="opacity-70">
                {step.text}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
