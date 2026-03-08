import { Heading, Text, Stack } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const outcomes = [
  "A reusable component library",
  "A scalable design system",
  "Faster marketing velocity",
  "Long-term maintainability",
];

export function SlideTakeaway() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-16 pt-16 pb-24 text-center">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Key Takeaway
        </Text>
        
        <Heading as="h2" size={1} className="mt-4 max-w-4xl">
          Modular design turns a website into a platform
        </Heading>

        <Text size={500} className="opacity-70 mt-8">
          Instead of a collection of pages, you get:
        </Text>

        <div className="flex items-center gap-6 mt-8">
          {outcomes.map((item, i) => (
            <div key={item} className="flex items-center gap-4">
              <Stack direction="horizontal" gap="condensed" align="center">
                <div className="w-2 h-2 bg-foreground/50" />
                <Text size={400} className="opacity-70">{item}</Text>
              </Stack>
              {i < outcomes.length - 1 && (
                <div className="w-px h-6 bg-white/20" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 border border-white/20 bg-white/[0.04] px-12 py-6">
          <Heading as="h3" size={3}>
            Design once. Build once. Scale everywhere.
          </Heading>
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
