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
    <SlideBase theme="dark" className="!p-0">
      <div className="relative z-10 flex h-full flex-col px-16 pt-16 pb-24">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          For Designers
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          Designers create systems instead of pages
        </Heading>

        <Grid columns={2} gap="extra-spacious" className="mt-8">
          <GridColumn>
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest opacity-60"
            >
              Design Workflow
            </Text>
            <Stack direction="vertical" gap="condensed" className="mt-4">
              {workflow.map((item, i) => (
                <Stack key={item} direction="horizontal" gap="normal" align="start">
                  <Text as="span" size={200} className="font-mono opacity-50">
                    {String(i + 1).padStart(2, "0")}
                  </Text>
                  <Text size={400} className="opacity-70">{item}</Text>
                </Stack>
              ))}
            </Stack>
          </GridColumn>

          <GridColumn>
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest opacity-60"
            >
              Examples of Variations
            </Text>
            <Stack direction="vertical" gap="condensed" className="mt-4">
              {variations.map((item) => (
                <Stack key={item} direction="horizontal" gap="condensed" align="center">
                  <div className="w-2 h-2 bg-foreground/50" />
                  <Text size={400} className="opacity-70">{item}</Text>
                </Stack>
              ))}
            </Stack>
          </GridColumn>
        </Grid>

        <div className="mt-8 pt-6 border-t border-white/10">
          <Text size={400} className="opacity-60">
            Outcome: <span className="text-foreground opacity-100 font-medium">A scalable design system</span>
          </Text>
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
