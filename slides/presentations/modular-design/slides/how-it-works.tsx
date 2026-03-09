import { Heading, Text, Grid, GridColumn } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const steps = [
  { number: "01", title: "Design a component library" },
  { number: "02", title: "Build reusable frontend components" },
  { number: "03", title: "Model content structures in the CMS" },
  { number: "04", title: "Enable editors to assemble pages from modules" },
];

export function SlideHowItWorks() {
  return (
    <SlideBase theme="light" className="!p-0">
      <div className="relative z-10 flex h-full flex-col justify-center gap-6 px-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest text-muted-foreground"
        >
          Process
        </Text>
        <Heading as="h2" size={3}>
          How Modular Design Works
        </Heading>
        <Text size={400} className="text-muted-foreground">
          Step-by-step workflow:
        </Text>

        <Grid columns={4} gap="spacious" className="mt-4">
          {steps.map((step) => (
            <GridColumn key={step.number}>
              <div className="flex flex-col gap-3 h-full">
                <Text
                  as="span"
                  size={600}
                  weight="medium"
                  className="font-mono text-primary"
                >
                  {step.number}
                </Text>
                <div className="w-full h-px bg-border" />
                <Text size={400}>
                  {step.title}
                </Text>
              </div>
            </GridColumn>
          ))}
        </Grid>

        <div className="mt-8 bg-primary/5 border border-primary/20 px-6 py-5">
          <Text size={300} className="text-muted-foreground mb-1">
            Result:
          </Text>
          <Text size={500} weight="medium" className="text-primary">
            Pages become configurations of modules, not custom builds.
          </Text>
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
