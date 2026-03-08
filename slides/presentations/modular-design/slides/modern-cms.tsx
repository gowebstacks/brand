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
    <SlideBase theme="dark" className="!p-0">
      <div className="relative z-10 flex h-full flex-col px-16 pt-16 pb-24">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          CMS Platforms
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          Modular design works best with modern CMS platforms
        </Heading>

        <Grid columns={2} gap="extra-spacious" className="mt-8">
          <GridColumn>
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest opacity-60"
            >
              Examples
            </Text>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {cmsPlatforms.map((cms) => (
                <div key={cms} className="bg-white/[0.04] border border-white/10 px-6 py-4 flex items-center justify-center">
                  <Text size={400} weight="medium">{cms}</Text>
                </div>
              ))}
            </div>
          </GridColumn>

          <GridColumn>
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest opacity-60"
            >
              Key Capabilities
            </Text>
            <Stack direction="vertical" gap="condensed" className="mt-4">
              {capabilities.map((item) => (
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
