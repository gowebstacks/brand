import { Heading, Text, Stack, Grid, GridColumn } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const workflow = [
  "Open CMS",
  "Add modules to page",
  "Populate content fields",
  "Publish",
];

const benefits = [
  "Faster campaign launches",
  "Landing pages created in minutes",
  "Reduced developer dependency",
  "Consistent brand presentation",
];

export function SlideMarketingUse() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="relative z-10 flex h-full flex-col px-16 pt-16 pb-24">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          For Marketing
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          Marketing teams build pages without code
        </Heading>

        <Grid columns={2} gap="extra-spacious" className="mt-8">
          <GridColumn>
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest opacity-60"
            >
              Workflow
            </Text>
            <Stack direction="vertical" gap="condensed" className="mt-4">
              {workflow.map((step, i) => (
                <Stack key={step} direction="horizontal" gap="normal" align="center">
                  <Text as="span" size={200} className="font-mono opacity-50">
                    {String(i + 1).padStart(2, "0")}
                  </Text>
                  <Text size={400} className="opacity-70">{step}</Text>
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
              Benefits
            </Text>
            <Stack direction="vertical" gap="condensed" className="mt-4">
              {benefits.map((item) => (
                <Stack key={item} direction="horizontal" gap="normal" align="start">
                  <Text size={400} className="text-foreground shrink-0">
                    &#10003;
                  </Text>
                  <Text size={400} className="opacity-70">{item}</Text>
                </Stack>
              ))}
            </Stack>
          </GridColumn>
        </Grid>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
