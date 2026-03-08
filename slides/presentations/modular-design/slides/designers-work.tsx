import { Heading, Text, Stack, Grid, GridColumn } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const workflow = [
  "Identify repeatable patterns",
  "Design components in Figma",
  "Define variations and states",
  "Establish spacing and layout rules",
];

const variations = [
  "Light / dark",
  "Left / right layouts",
  "Image vs video",
  "2-column vs 3-column",
];

export function SlideDesignersWork() {
  return (
    <SlideBase theme="light" className="!p-0">
      <div className="h-full flex flex-col px-16 py-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest text-muted-foreground"
        >
          For Designers
        </Text>
        <Heading as="h2" size={2} className="mt-4">
          Designers create systems instead of pages
        </Heading>

        <Grid columns={2} gap="extra-spacious" className="mt-10 flex-1">
          <GridColumn>
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest text-muted-foreground"
            >
              Design Workflow
            </Text>
            <Stack direction="vertical" gap="normal" className="mt-4">
              {workflow.map((item, i) => (
                <Stack key={item} direction="horizontal" gap="normal" align="start">
                  <div className="w-6 h-6 bg-primary flex items-center justify-center shrink-0">
                    <Text size={200} className="text-primary-foreground font-medium">
                      {i + 1}
                    </Text>
                  </div>
                  <Text size={400}>{item}</Text>
                </Stack>
              ))}
            </Stack>
          </GridColumn>

          <GridColumn>
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest text-muted-foreground"
            >
              Examples of Variations
            </Text>
            <Stack direction="vertical" gap="condensed" className="mt-4">
              {variations.map((item) => (
                <Stack key={item} direction="horizontal" gap="condensed" align="center">
                  <div className="w-2 h-2 bg-muted-foreground/50" />
                  <Text size={400}>{item}</Text>
                </Stack>
              ))}
            </Stack>
          </GridColumn>
        </Grid>

        <div className="mt-auto pt-6 border-t border-border">
          <Text size={400} className="text-muted-foreground">
            Outcome: <span className="text-foreground font-medium">A scalable design system</span>
          </Text>
        </div>
      </div>
    </SlideBase>
  );
}
