import { Heading, Text, Stack, Grid, GridColumn } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const cmsPlatforms = ["Sanity", "Contentful", "Storyblok", "Builder.io"];

const capabilities = [
  "Structured content",
  "Page builders",
  "Reusable blocks",
  "API-first architecture",
];

export function SlideModernCMS() {
  return (
    <SlideBase theme="light" className="!p-0">
      <div className="h-full flex flex-col px-16 py-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest text-muted-foreground"
        >
          CMS Platforms
        </Text>
        <Heading as="h2" size={2} className="mt-4">
          Modular design works best with modern CMS platforms
        </Heading>

        <Grid columns={2} gap="extra-spacious" className="mt-10 flex-1">
          <GridColumn>
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest text-muted-foreground"
            >
              Examples
            </Text>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {cmsPlatforms.map((cms) => (
                <div key={cms} className="bg-muted border border-border px-6 py-4 flex items-center justify-center">
                  <Text size={400} weight="medium">{cms}</Text>
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
              Key Capabilities
            </Text>
            <Stack direction="vertical" gap="condensed" className="mt-4">
              {capabilities.map((item) => (
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
