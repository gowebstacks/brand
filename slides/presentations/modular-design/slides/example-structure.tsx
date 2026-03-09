import { Heading, Text, Grid, GridColumn } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const pageModules = [
  { name: "Hero Section", color: "bg-primary" },
  { name: "Customer Logos", color: "bg-primary/80" },
  { name: "Product Features", color: "bg-primary/60" },
  { name: "Video Module", color: "bg-primary/50" },
  { name: "Case Study", color: "bg-primary/40" },
  { name: "CTA", color: "bg-primary/30" },
];

export function SlideExampleStructure() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="relative z-10 flex h-full flex-col justify-center gap-6 px-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          In Practice
        </Text>
        <Heading as="h2" size={3}>
          Example Page Structure
        </Heading>
        <Text size={400} className="opacity-70">
          Example page assembled with modules:
        </Text>

        <Grid columns={2} gap="extra-spacious" className="mt-4">
          <GridColumn>
            <div className="flex flex-col gap-2">
              {pageModules.map((module, i) => (
                <div
                  key={module.name}
                  className={`${module.color} px-5 py-4 flex items-center gap-3`}
                >
                  <Text as="span" size={200} className="font-mono opacity-60">
                    {String(i + 1).padStart(2, "0")}
                  </Text>
                  <Text as="span" size={400} weight="medium" className="text-primary-foreground">
                    {module.name}
                  </Text>
                </div>
              ))}
            </div>
          </GridColumn>
          <GridColumn>
            <div className="flex flex-col justify-center h-full">
              <div className="bg-white/[0.04] p-6">
                <Text size={500} className="opacity-80">
                  Instead of designing a page from scratch, teams compose the page from existing modules.
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
