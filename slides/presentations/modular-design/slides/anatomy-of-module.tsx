import { Heading, Text, Stack, Grid, GridColumn } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const layers = [
  {
    title: "Design",
    items: ["Layout", "Spacing", "Visual rules", "Responsive behavior"],
  },
  {
    title: "Development",
    items: ["Frontend component", "Reusable code", "Performance optimization"],
  },
  {
    title: "Content",
    items: ["Fields in the CMS", "Images, text, buttons", "Variations"],
  },
];

export function SlideAnatomyOfModule() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="relative z-10 flex h-full flex-col px-16 pt-16 pb-24">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Anatomy
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          Each module contains three layers
        </Heading>

        {/* Diagram */}
        <div className="flex items-center gap-4 mt-8">
          <div className="bg-white/[0.04] border border-white/10 px-6 py-4">
            <Text size={400} weight="medium">Module</Text>
          </div>
          <Text size={400} className="opacity-50">=</Text>
          <div className="flex items-center gap-2">
            <div className="bg-white/[0.04] border border-white/10 px-4 py-2">
              <Text size={300} className="opacity-80">Design</Text>
            </div>
            <Text size={400} className="opacity-50">+</Text>
            <div className="bg-white/[0.04] border border-white/10 px-4 py-2">
              <Text size={300} className="opacity-80">Code</Text>
            </div>
            <Text size={400} className="opacity-50">+</Text>
            <div className="bg-white/[0.04] border border-white/10 px-4 py-2">
              <Text size={300} className="opacity-80">Content</Text>
            </div>
          </div>
        </div>

        <Grid columns={3} gap="condensed" className="mt-8">
          {layers.map((layer) => (
            <GridColumn key={layer.title}>
              <div className="h-full bg-white/[0.04] border border-white/10 p-6">
                <Text size={500} weight="medium">
                  {layer.title}
                </Text>
                <Stack direction="vertical" gap="condensed" className="mt-4">
                  {layer.items.map((item) => (
                    <Text key={item} size={300} className="opacity-70">
                      {item}
                    </Text>
                  ))}
                </Stack>
              </div>
            </GridColumn>
          ))}
        </Grid>

        <div className="mt-8">
          <Text size={400} className="opacity-60 italic">
            A module is a self-contained UI system
          </Text>
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
