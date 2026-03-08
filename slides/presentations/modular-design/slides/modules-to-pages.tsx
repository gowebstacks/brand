import { Heading, Text, Stack, Grid, GridColumn } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const pageStack = [
  { name: "Hero", height: "h-12" },
  { name: "Feature Grid", height: "h-10" },
  { name: "Customer Logos", height: "h-6" },
  { name: "Product Section", height: "h-10" },
  { name: "Testimonial", height: "h-8" },
  { name: "CTA", height: "h-6" },
];

const benefits = [
  "Faster page creation",
  "Consistent design",
  "No developer required",
];

export function SlideModulesToPages() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <Grid columns={12} gap="extra-spacious" align="stretch" className="h-full">
        {/* Left content */}
        <GridColumn span={7} className="flex flex-col px-16 pt-16 pb-24">
          <Text
            as="span"
            size={200}
            className="font-mono uppercase tracking-widest opacity-60"
          >
            Assembly
          </Text>
          <Heading as="h2" size={3} className="mt-4">
            Pages are assembled using modules
          </Heading>

          <div className="mt-8 bg-white/[0.04] border border-white/10 p-6 max-w-lg">
            <Text size={400} className="opacity-70">
              Content teams can assemble pages by selecting modules from the library.
            </Text>
          </div>

          <Text
            as="span"
            size={200}
            className="font-mono uppercase tracking-widest opacity-60 mt-8"
          >
            Benefits
          </Text>
          <Stack direction="vertical" gap="condensed" className="mt-4">
            {benefits.map((item) => (
              <Stack key={item} direction="horizontal" gap="normal" align="start">
                <Text size={400} className="text-foreground shrink-0">
                  &#10003;
                </Text>
                <Text size={400} className="opacity-70">
                  {item}
                </Text>
              </Stack>
            ))}
          </Stack>
        </GridColumn>

        {/* Right visual - CMS page builder */}
        <GridColumn span={5} className="relative bg-white/[0.02] pt-16 pr-16">
          <Text size={100} className="font-mono uppercase tracking-widest opacity-50 mb-4">
            CMS Page Builder
          </Text>
          <div className="bg-white/[0.04] border border-white/10 p-4">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
              <Text size={200} className="font-mono uppercase tracking-widest opacity-70">
                Homepage
              </Text>
              <div className="flex gap-2">
                <div className="w-6 h-6 bg-white/[0.04] border border-white/10" />
                <div className="w-6 h-6 bg-white/[0.04] border border-white/10" />
              </div>
            </div>
            <Stack direction="vertical" gap="condensed">
              {pageStack.map((mod) => (
                <div
                  key={mod.name}
                  className={`${mod.height} bg-white/[0.04] border border-white/10 px-3 flex items-center justify-between`}
                >
                  <Text size={200} className="opacity-70">
                    {mod.name}
                  </Text>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 bg-white/[0.04] border border-white/10" />
                    <div className="w-4 h-4 bg-white/[0.04] border border-white/10" />
                  </div>
                </div>
              ))}
            </Stack>
            <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-2">
              <div className="w-5 h-5 bg-white/[0.04] border border-white/10 flex items-center justify-center">
                <Text size={100} className="opacity-50">+</Text>
              </div>
              <Text size={200} className="opacity-50">Add module</Text>
            </div>
          </div>
        </GridColumn>
      </Grid>

      <SlideFooter />
    </SlideBase>
  );
}
