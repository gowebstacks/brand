import { Heading, Text, Stack, Grid, GridColumn } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const problems = [
  "Each page is designed individually",
  "Repeated UI patterns are rebuilt multiple times",
  "Design inconsistencies emerge",
  "Marketing teams depend on developers for updates",
  "Websites become difficult to scale",
];

export function SlideProblem() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <Grid columns={12} gap="extra-spacious" align="stretch" className="h-full">
        {/* Left content */}
        <GridColumn span={7} className="flex flex-col px-16 pt-16 pb-24">
          <Text
            as="span"
            size={200}
            className="font-mono uppercase tracking-widest opacity-60"
          >
            The Problem
          </Text>
          <Heading as="h2" size={3} className="mt-4">
            Most websites are built page-by-page
          </Heading>

          <Stack direction="vertical" gap="condensed" className="mt-8">
            {problems.map((item) => (
              <Stack key={item} direction="horizontal" gap="normal" align="start">
                <Text size={400} className="text-foreground shrink-0">
                  &times;
                </Text>
                <Text size={400} className="opacity-70">
                  {item}
                </Text>
              </Stack>
            ))}
          </Stack>

          <div className="mt-8 border-l-2 border-white/20 pl-6">
            <Text size={400} className="italic opacity-60">
              The site becomes harder to maintain over time
            </Text>
          </div>
        </GridColumn>

        {/* Right visual - stacked pages */}
        <GridColumn span={5} className="relative flex items-center justify-center bg-white/[0.02]">
          <div className="relative w-48">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="absolute bg-white/[0.04] border border-white/10 w-48 h-64"
                style={{
                  top: i * 12,
                  left: i * 12,
                  zIndex: 5 - i,
                }}
              >
                <div className="p-3 space-y-2">
                  <div className="h-2 bg-white/20 w-3/4" />
                  <div className="h-2 bg-white/10 w-full" />
                  <div className="h-2 bg-white/10 w-2/3" />
                  <div className="h-8 bg-white/5 w-full mt-4" />
                  <div className="h-8 bg-white/5 w-full" />
                </div>
              </div>
            ))}
          </div>
        </GridColumn>
      </Grid>

      <SlideFooter />
    </SlideBase>
  );
}
