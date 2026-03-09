import { Heading, Text, Grid, GridColumn } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const stackLayers = [
  { category: "Frontend", tool: "Next.js" },
  { category: "CMS", tool: "Sanity" },
  { category: "Hosting", tool: "Vercel" },
  { category: "Search", tool: "Algolia" },
  { category: "Analytics", tool: "Segment + GA4" },
];

export function SlideExampleStack() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/stacked-discs.png"
        alt=""
        className="pointer-events-none absolute -left-[10%] -bottom-[20%] w-[35%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col justify-center gap-6 px-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Real Example
        </Text>
        <Heading as="h2" size={3}>
          Real Example of a Composable Stack
        </Heading>

        <Grid columns={2} gap="extra-spacious" className="mt-4">
          <GridColumn>
            <div className="flex flex-col gap-0">
              {stackLayers.map((layer, i) => (
                <div
                  key={layer.category}
                  className={`flex items-center justify-between px-5 py-4 border-b border-foreground/10 ${i === 0 ? "bg-primary text-primary-foreground" : "bg-white/[0.04]"}`}
                >
                  <Text as="span" size={300} className={`font-mono ${i === 0 ? "opacity-80" : "opacity-50"}`}>
                    {layer.category}
                  </Text>
                  <Text as="span" size={400} weight="medium">
                    {layer.tool}
                  </Text>
                </div>
              ))}
            </div>
          </GridColumn>
          <GridColumn>
            <div className="flex flex-col justify-center h-full">
              <div className="bg-white/[0.04] p-6">
                <Text size={500} className="opacity-80">
                  This approach allows teams to evolve individual pieces independently.
                </Text>
              </div>
            </div>
          </GridColumn>
        </Grid>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
