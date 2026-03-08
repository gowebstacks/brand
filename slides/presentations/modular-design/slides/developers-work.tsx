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
      <div className="relative z-10 flex h-full flex-col px-16 pt-16 pb-24">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          For Developers
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          Developers implement reusable components
        </Heading>

        <Grid columns={2} gap="extra-spacious" className="mt-8">
          <GridColumn>
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest opacity-60"
            >
              Frontend
            </Text>
            <div className="mt-4 bg-white/[0.04] border border-white/10 px-6 py-4">
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
                <div key={comp} className="bg-white/[0.04] border border-white/10 px-6 py-4">
                  <Text size={300} className="font-mono opacity-80">
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
                <Text size={400} className="text-foreground shrink-0">&#8226;</Text>
                <Text size={400} className="opacity-70">
                  Content fields defined in schema
                </Text>
              </Stack>
              <Stack direction="horizontal" gap="condensed" align="start">
                <Text size={400} className="text-foreground shrink-0">&#8226;</Text>
                <Text size={400} className="opacity-70">
                  Modules appear in page builder
                </Text>
              </Stack>
            </Stack>
          </GridColumn>
        </Grid>

        <div className="mt-8 pt-6 border-t border-white/10">
          <Text size={400} className="opacity-60">
            Outcome: <span className="text-foreground opacity-100 font-medium">Reusable components connected to content</span>
          </Text>
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
