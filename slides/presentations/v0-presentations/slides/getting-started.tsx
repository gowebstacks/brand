import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const steps = [
  { num: "01", title: "Clone the brand repo", desc: "Start with the Webstacks brand repository as your foundation" },
  { num: "02", title: "Open in v0", desc: "Connect your GitHub repo and start building with AI assistance" },
  { num: "03", title: "Create your deck", desc: "Add a new presentation folder under slides/presentations/" },
  { num: "04", title: "Build slides", desc: "Use existing components or create custom layouts" },
];

export function SlideGettingStarted() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Getting Started
        </Text>
        <Heading as="h2" size={2} className="mt-4">
          Four steps to your first deck
        </Heading>

        <div className="mt-10 grid grid-cols-2 gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="flex flex-col gap-3 bg-white/[0.04] p-6"
            >
              <Text
                as="span"
                size={200}
                className="font-mono opacity-50"
              >
                {step.num}
              </Text>
              <Heading as="h3" size={5}>
                {step.title}
              </Heading>
              <Text size={300} className="opacity-60">
                {step.desc}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
