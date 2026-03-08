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
    <SlideBase theme="light" className="!p-0">
      <div className="h-full flex flex-col px-16 py-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest text-muted-foreground"
        >
          For Marketing
        </Text>
        <Heading as="h2" size={2} className="mt-4">
          Marketing teams build pages without code
        </Heading>

        <Grid columns={2} gap="extra-spacious" className="mt-10 flex-1">
          <GridColumn>
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest text-muted-foreground"
            >
              Workflow
            </Text>
            <div className="mt-4 flex items-center gap-4">
              {workflow.map((step, i) => (
                <div key={step} className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary flex items-center justify-center">
                    <Text size={300} className="text-primary-foreground font-medium">
                      {i + 1}
                    </Text>
                  </div>
                  <Text size={300}>{step}</Text>
                  {i < workflow.length - 1 && (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-muted-foreground ml-2">
                      <path
                        d="M4 10H16M16 10L12 6M16 10L12 14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </GridColumn>

          <GridColumn>
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest text-muted-foreground"
            >
              Benefits
            </Text>
            <Stack direction="vertical" gap="condensed" className="mt-4">
              {benefits.map((item) => (
                <Stack key={item} direction="horizontal" gap="normal" align="start">
                  <Text size={400} className="text-emerald-600 shrink-0">
                    &#10003;
                  </Text>
                  <Text size={400}>{item}</Text>
                </Stack>
              ))}
            </Stack>
          </GridColumn>
        </Grid>
      </div>
    </SlideBase>
  );
}
