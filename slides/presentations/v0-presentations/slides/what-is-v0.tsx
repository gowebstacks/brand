import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const v0Features = [
  { title: "AI-Powered", desc: "Generate code through natural language prompts" },
  { title: "React & Next.js", desc: "Built on modern web technologies" },
  { title: "Real-Time Preview", desc: "See changes instantly as you build" },
  { title: "Production Ready", desc: "Deploy directly to Vercel" },
];

export function SlideWhatIsV0() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/glass-cubes.png"
        alt=""
        className="pointer-events-none absolute -right-[15%] -top-[25%] w-[45%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Introduction
        </Text>
        <Heading as="h2" size={2} className="mt-4">
          What is v0?
        </Heading>
        <Text size={500} className="mt-4 max-w-[60%] opacity-70">
          v0 is Vercel&apos;s AI-powered development platform that transforms natural language into production-ready code.
        </Text>

        <div className="mt-10 grid grid-cols-2 gap-4">
          {v0Features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-2 bg-white/[0.04] p-6"
            >
              <Heading as="h3" size={5}>
                {feature.title}
              </Heading>
              <Text size={300} className="opacity-60">
                {feature.desc}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
