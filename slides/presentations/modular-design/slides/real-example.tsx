import { Heading, Text, Stack, Grid, GridColumn } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const pageModules = [
  { name: "Hero", height: "h-14" },
  { name: "Product Benefits", height: "h-12" },
  { name: "Video Section", height: "h-10" },
  { name: "Customer Logos", height: "h-6" },
  { name: "Testimonials", height: "h-10" },
  { name: "Pricing", height: "h-12" },
  { name: "CTA", height: "h-8" },
];

export function SlideRealExample() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <Grid columns={12} gap="extra-spacious" align="stretch" className="h-full">
        {/* Left content */}
        <GridColumn span={6} className="flex flex-col px-16 pt-16 pb-24">
          <Text
            as="span"
            size={200}
            className="font-mono uppercase tracking-widest opacity-60"
          >
            Example
          </Text>
          <Heading as="h2" size={3} className="mt-4">
            Example landing page built with modules
          </Heading>

          <div className="mt-8 bg-white/[0.04] border border-white/10 p-6">
            <Text size={400} className="opacity-70">
              None of these sections were built specifically for this page.
            </Text>
            <Text size={500} weight="medium" className="mt-4">
              They already existed in the module library.
            </Text>
          </div>
        </GridColumn>

        {/* Right visual - example page layout */}
        <GridColumn span={6} className="relative bg-white/[0.02] pt-16 pr-16">
          <Text size={100} className="font-mono uppercase tracking-widest opacity-50 mb-4">
            SaaS Product Landing Page
          </Text>
          <div className="bg-white/[0.04] border border-white/10 p-3">
            <Stack direction="vertical" gap="condensed">
              {pageModules.map((mod) => (
                <div
                  key={mod.name}
                  className={`${mod.height} bg-white/[0.04] border border-white/10 px-3 flex items-center`}
                >
                  <Text size={200} className="opacity-70">{mod.name}</Text>
                </div>
              ))}
            </Stack>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <div className="w-2 h-2 bg-primary/50" />
            <Text size={200} className="opacity-50">7 modules from library</Text>
          </div>
        </GridColumn>
      </Grid>

      <SlideFooter />
    </SlideBase>
  );
}
