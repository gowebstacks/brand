import { Heading, Text, Stack, Grid, GridColumn } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const pageModules = [
  { name: "Hero", color: "bg-blue-500/30 border-blue-500/50" },
  { name: "Product Benefits", color: "bg-emerald-500/30 border-emerald-500/50" },
  { name: "Video Section", color: "bg-purple-500/30 border-purple-500/50" },
  { name: "Customer Logos", color: "bg-amber-500/30 border-amber-500/50" },
  { name: "Testimonials", color: "bg-rose-500/30 border-rose-500/50" },
  { name: "Pricing", color: "bg-cyan-500/30 border-cyan-500/50" },
  { name: "CTA", color: "bg-orange-500/30 border-orange-500/50" },
];

export function SlideRealExample() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <Grid columns={12} gap="extra-spacious" align="stretch" className="h-full">
        {/* Left content */}
        <GridColumn span={6} className="flex flex-col justify-center pl-16 py-16">
          <Text
            as="span"
            size={200}
            className="font-mono uppercase tracking-widest opacity-60"
          >
            Example
          </Text>
          <Heading as="h2" size={2} className="mt-4">
            Example landing page built with modules
          </Heading>

          <div className="mt-10 bg-white/5 border border-white/10 p-6">
            <Text size={400} className="opacity-80">
              None of these sections were built specifically for this page.
            </Text>
            <Text size={500} weight="medium" className="mt-4 text-primary">
              They already existed in the module library.
            </Text>
          </div>
        </GridColumn>

        {/* Right visual - example page layout */}
        <GridColumn span={6} className="relative flex items-center justify-center bg-white/[0.02] py-8">
          <div className="bg-white/5 border border-white/20 p-4 w-72">
            <Text size={100} className="font-mono uppercase opacity-50 mb-3">
              Landing Page
            </Text>
            <Stack direction="vertical" gap="condensed">
              {pageModules.map((mod) => (
                <div
                  key={mod.name}
                  className={`${mod.color} border px-3 py-2 flex items-center`}
                >
                  <Text size={200}>{mod.name}</Text>
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
