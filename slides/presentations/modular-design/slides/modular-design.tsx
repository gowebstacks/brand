import { Heading, Text, Grid, GridColumn } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const modules = [
  "Hero sections",
  "Logo bars",
  "Feature grids",
  "Testimonials",
  "CTAs",
  "Pricing tables",
];

export function SlideModularDesign() {
  return (
    <SlideBase theme="light" className="!p-0">
      <img
        src="/images/3d-shapes/glass-cubes.png"
        alt=""
        className="pointer-events-none absolute -right-[10%] top-1/2 -translate-y-1/2 w-[35%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col justify-center gap-6 px-16 max-w-[65%]">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest text-muted-foreground"
        >
          Core Concept
        </Text>
        <Heading as="h2" size={3}>
          What Is Modular Design?
        </Heading>
        <Text size={500} className="text-muted-foreground">
          Modular design means building websites from reusable content blocks (modules) instead of unique page layouts.
        </Text>

        <div className="mt-4">
          <Text size={400} weight="medium" className="mb-4">
            Examples of modules:
          </Text>
          <Grid columns={3} gap="normal">
            {modules.map((module) => (
              <GridColumn key={module}>
                <div className="flex items-center gap-2 bg-muted px-4 py-3">
                  <div className="w-2 h-2 bg-primary shrink-0" />
                  <Text as="span" size={300}>
                    {module}
                  </Text>
                </div>
              </GridColumn>
            ))}
          </Grid>
        </div>

        <div className="mt-4 bg-primary/5 border border-primary/20 px-5 py-4">
          <Text size={400} className="text-primary">
            Each module is designed and developed once, then reused everywhere.
          </Text>
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
