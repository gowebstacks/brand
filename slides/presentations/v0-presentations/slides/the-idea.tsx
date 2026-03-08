import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const concepts = [
  "React Components",
  "Design Tokens",
  "Git History",
  "AI-Assisted",
  "Live Preview",
];

export function SlideTheIdea() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-6 px-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          The Idea
        </Text>
        <Heading as="h2" size={1} align="center">
          What if slides were components?
        </Heading>
        <Text size={500} align="center" className="max-w-[60%] opacity-70">
          Reusable. Versioned. On-brand by default.
        </Text>

        <div className="mt-8 flex gap-3">
          {concepts.map((concept) => (
            <div
              key={concept}
              className="bg-white/[0.04] px-6 py-4"
            >
              <Text as="span" size={300} className="opacity-70">
                {concept}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
