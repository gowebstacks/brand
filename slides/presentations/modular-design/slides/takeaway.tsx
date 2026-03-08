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
      {/* Decorative accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 -top-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-16 py-16 text-center">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Key Takeaway
        </Text>
        
        <Heading as="h2" size={1} className="mt-6 max-w-4xl">
          Modular design turns a website into a platform
        </Heading>

        <Text size={500} className="opacity-70 mt-8">
          Instead of a collection of pages, you get:
        </Text>

        <div className="flex items-center gap-6 mt-8">
          {outcomes.map((item, i) => (
            <div key={item} className="flex items-center gap-4">
              <Stack direction="horizontal" gap="condensed" align="center">
                <div className="w-2 h-2 bg-primary" />
                <Text size={400}>{item}</Text>
              </Stack>
              {i < outcomes.length - 1 && (
                <div className="w-px h-6 bg-white/20" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 border border-primary/30 bg-primary/10 px-12 py-6">
          <Heading as="h3" size={3} className="text-primary">
            Design once. Build once. Scale everywhere.
          </Heading>
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
