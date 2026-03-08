import { Heading, Text, Stack, Grid, GridColumn } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const components = [
  "HeroSection.tsx",
  "LogoCloudSection.tsx",
  "TestimonialSection.tsx",
];

export function SlideDevelopersWork() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="h-full flex flex-col px-16 py-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          For Developers
        </Text>
        <Heading as="h2" size={2} className="mt-4">
          Developers implement reusable components
        </Heading>

        <Grid columns={2} gap="extra-spacious" className="mt-10 flex-1">
          <GridColumn>
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest opacity-60"
            >
              Frontend
            </Text>
            <div className="mt-4 bg-white/5 border border-white/10 p-4">
              <Text size={300} className="opacity-70">React / Next.js components</Text>
            </div>

            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest opacity-60 mt-8 block"
            >
              Example Files
            </Text>
            <Stack direction="vertical" gap="condensed" className="mt-4">
              {components.map((comp) => (
                <div key={comp} className="bg-white/[0.03] border border-white/10 px-4 py-2">
                  <Text size={300} className="font-mono text-emerald-400">
                    {comp}
                  </Text>
                </div>
              ))}
            </Stack>
          </GridColumn>

          <GridColumn>
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest opacity-60"
            >
              CMS Integration
            </Text>
            <Stack direction="vertical" gap="condensed" className="mt-4">
              <Stack direction="horizontal" gap="condensed" align="start">
                <Text size={400} className="text-primary shrink-0">&#8226;</Text>
                <Text size={400} className="opacity-80">
                  Content fields defined in schema
                </Text>
              </Stack>
              <Stack direction="horizontal" gap="condensed" align="start">
                <Text size={400} className="text-primary shrink-0">&#8226;</Text>
                <Text size={400} className="opacity-80">
                  Modules appear in page builder
                </Text>
              </Stack>
            </Stack>
          </GridColumn>
        </Grid>

        <div className="mt-auto pt-6 border-t border-white/10">
          <Text size={400} className="opacity-70">
            Outcome: <span className="text-foreground font-medium">Reusable components connected to content</span>
          </Text>
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
