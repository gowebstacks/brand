import { Heading, Text, Stack, Grid, GridColumn } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const layers = [
  {
    title: "Design",
    items: ["Layout", "Spacing", "Visual rules", "Responsive behavior"],
    color: "bg-blue-500/20 border-blue-500/40",
    textColor: "text-blue-400",
  },
  {
    title: "Development",
    items: ["Frontend component", "Reusable code", "Performance optimization"],
    color: "bg-emerald-500/20 border-emerald-500/40",
    textColor: "text-emerald-400",
  },
  {
    title: "Content",
    items: ["Fields in the CMS", "Images, text, buttons", "Variations"],
    color: "bg-amber-500/20 border-amber-500/40",
    textColor: "text-amber-400",
  },
];

export function SlideAnatomyOfModule() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="h-full flex flex-col px-16 py-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Anatomy
        </Text>
        <Heading as="h2" size={2} className="mt-4">
          Each module contains three layers
        </Heading>

        {/* Diagram */}
        <div className="flex items-center gap-4 mt-8">
          <div className="bg-white/10 border border-white/20 px-6 py-3">
            <Text size={400} weight="medium">Module</Text>
          </div>
          <Text size={400} className="opacity-50">=</Text>
          <div className="flex items-center gap-2">
            <div className="bg-blue-500/20 border border-blue-500/40 px-4 py-2">
              <Text size={300} className="text-blue-400">Design</Text>
            </div>
            <Text size={400} className="opacity-50">+</Text>
            <div className="bg-emerald-500/20 border border-emerald-500/40 px-4 py-2">
              <Text size={300} className="text-emerald-400">Code</Text>
            </div>
            <Text size={400} className="opacity-50">+</Text>
            <div className="bg-amber-500/20 border border-amber-500/40 px-4 py-2">
              <Text size={300} className="text-amber-400">Content</Text>
            </div>
          </div>
        </div>

        <Grid columns={3} gap="normal" className="mt-10 flex-1">
          {layers.map((layer) => (
            <GridColumn key={layer.title}>
              <div className={`h-full ${layer.color} border p-6`}>
                <Text size={500} weight="medium" className={layer.textColor}>
                  {layer.title}
                </Text>
                <Stack direction="vertical" gap="condensed" className="mt-4">
                  {layer.items.map((item) => (
                    <Text key={item} size={300} className="opacity-80">
                      {item}
                    </Text>
                  ))}
                </Stack>
              </div>
            </GridColumn>
          ))}
        </Grid>

        <div className="mt-6">
          <Text size={400} className="opacity-70 italic">
            A module is a self-contained UI system
          </Text>
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
