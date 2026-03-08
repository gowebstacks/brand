import { Heading, Text, Stack, Grid, GridColumn } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const benefits = [
  "Fast performance",
  "Scalable architecture",
  "Reusable UI components",
];

export function SlideModernFrontend() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="relative z-10 flex h-full flex-col px-16 pt-16 pb-24">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Frontend Stack
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          Modules map directly to frontend components
        </Heading>

        <Grid columns={2} gap="extra-spacious" className="mt-8">
          <GridColumn>
            <div className="space-y-6">
              <div>
                <Text
                  as="span"
                  size={200}
                  className="font-mono uppercase tracking-widest opacity-60"
                >
                  Frontend
                </Text>
                <div className="mt-4 flex gap-3">
                  <div className="bg-white/[0.04] border border-white/10 px-6 py-4">
                    <Text size={400} weight="medium">Next.js</Text>
                  </div>
                  <div className="bg-white/[0.04] border border-white/10 px-6 py-4">
                    <Text size={400} weight="medium">React</Text>
                  </div>
                </div>
              </div>

              <div>
                <Text
                  as="span"
                  size={200}
                  className="font-mono uppercase tracking-widest opacity-60"
                >
                  Hosting
                </Text>
                <div className="mt-4">
                  <div className="bg-white/[0.04] border border-white/10 px-6 py-4 inline-block">
                    <Text size={400} weight="medium">Vercel</Text>
                  </div>
                </div>
              </div>
            </div>
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
                  <Text size={400} className="opacity-70">
                    {item}
                  </Text>
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
