import { Heading, Text, Grid, GridColumn } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const benefits = [
  {
    title: "Speed",
    description: "New pages built faster",
  },
  {
    title: "Consistency",
    description: "Design system keeps branding cohesive",
  },
  {
    title: "Scalability",
    description: "Easy to expand across regions and products",
  },
  {
    title: "Future-proofing",
    description: "Swap tools without rebuilding the entire site",
  },
];

export function SlideBenefits() {
  return (
    <SlideBase theme="light" className="!p-0">
      <div className="relative z-10 flex h-full flex-col justify-center gap-6 px-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest text-muted-foreground"
        >
          Why It Matters
        </Text>
        <Heading as="h2" size={3}>
          Benefits of Modular & Composable Websites
        </Heading>

        <Grid columns={2} gap="spacious" className="mt-4">
          {benefits.map((benefit) => (
            <GridColumn key={benefit.title}>
              <div className="bg-muted p-6 h-full">
                <Text size={600} weight="medium" className="text-primary mb-2">
                  {benefit.title}
                </Text>
                <Text size={400} className="text-muted-foreground">
                  {benefit.description}
                </Text>
              </div>
            </GridColumn>
          ))}
        </Grid>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
