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
        <GridColumn span={7} className="flex flex-col justify-center pl-16 py-16">
          <Text
            as="span"
            size={200}
            className="font-mono uppercase tracking-widest opacity-60"
          >
            Assembly
          </Text>
          <Heading as="h2" size={2} className="mt-4">
            Pages are assembled using modules
          </Heading>

          <div className="mt-8 bg-white/5 border border-white/10 p-6 max-w-lg">
            <Text size={400} className="opacity-80">
              Content teams can assemble pages by selecting modules from the library.
            </Text>
          </div>

          <Text
            as="span"
            size={200}
            className="font-mono uppercase tracking-widest opacity-60 mt-10"
          >
            Benefits
          </Text>
          <Stack direction="vertical" gap="condensed" className="mt-4">
            {benefits.map((item) => (
              <Stack key={item} direction="horizontal" gap="normal" align="start">
                <Text size={400} className="text-emerald-400 shrink-0">
                  &#10003;
                </Text>
                <Text size={400} className="opacity-80">
                  {item}
                </Text>
              </Stack>
            ))}
          </Stack>
        </GridColumn>

        {/* Right visual - CMS page builder */}
        <GridColumn span={5} className="relative flex items-center justify-center bg-white/[0.02]">
          <div className="bg-white/5 border border-white/20 p-4 w-64">
            <Text size={100} className="font-mono uppercase opacity-50 mb-3">
              Page Builder
            </Text>
            <Stack direction="vertical" gap="condensed">
              {pageStack.map((mod) => (
                <div
                  key={mod.name}
                  className={`${mod.height} bg-primary/20 border border-primary/40 px-3 flex items-center`}
                >
                  <Text size={200} className="text-primary-foreground/80">
                    {mod.name}
                  </Text>
                </div>
              ))}
            </Stack>
          </div>
        </GridColumn>
      </Grid>

      <SlideFooter />
    </SlideBase>
  );
}
