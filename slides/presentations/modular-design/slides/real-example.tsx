import { Heading, Text, Stack, Grid, GridColumn } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const pageModules = [
  "Hero",
  "Product Benefits",
  "Video Section",
  "Customer Logos",
  "Testimonials",
  "Pricing",
  "CTA",
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
        <GridColumn span={6} className="relative flex items-center justify-center bg-white/[0.02]">
          <div className="bg-white/[0.04] border border-white/10 p-4 w-72">
            <Text size={100} className="font-mono uppercase tracking-widest opacity-50 mb-3">
              Landing Page
            </Text>
            <Stack direction="vertical" gap="condensed">
              {pageModules.map((mod) => (
                <div
                  key={mod}
                  className="bg-white/[0.04] border border-white/10 px-3 py-2 flex items-center"
                >
                  <Text size={200} className="opacity-70">{mod}</Text>
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
