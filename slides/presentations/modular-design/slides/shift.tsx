import { Heading, Text, Stack, Grid, GridColumn } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const points = [
  "Reusable building blocks replace one-off designs",
  "Designers create patterns instead of pages",
  "Developers build flexible components",
  "Content teams assemble pages using modules",
];

export function SlideShift() {
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
            The Shift
          </Text>
          <Heading as="h2" size={3} className="mt-4">
            Modern websites are built as systems
          </Heading>

          <Stack direction="vertical" gap="condensed" className="mt-8">
            {points.map((item) => (
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

          <div className="mt-8 border-l-2 border-primary/50 pl-6">
            <Text size={500} weight="medium">
              Design once. Reuse everywhere.
            </Text>
          </div>
        </GridColumn>

        {/* Right visual - pages to components transition */}
        <GridColumn span={5} className="relative flex items-center justify-center bg-white/[0.02]">
          <div className="flex items-center gap-6">
            {/* Stacked pages (before) */}
            <div className="relative w-20 opacity-40">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="absolute bg-white/[0.04] border border-white/10 w-20 h-28"
                  style={{
                    top: i * 6,
                    left: i * 6,
                    zIndex: 3 - i,
                  }}
                />
              ))}
            </div>

            {/* Arrow */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-foreground">
              <path
                d="M8 20H32M32 20L24 12M32 20L24 28"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Components (after) */}
            <div className="flex flex-col gap-2">
              <div className="bg-white/[0.04] border border-white/10 px-4 py-2 w-28">
                <div className="h-2 bg-white/20 w-full" />
              </div>
              <div className="bg-white/[0.04] border border-white/10 px-4 py-3 w-28">
                <div className="h-1.5 bg-white/20 w-3/4 mb-1" />
                <div className="h-1.5 bg-white/10 w-full" />
              </div>
              <div className="bg-white/[0.04] border border-white/10 px-4 py-2 w-28">
                <div className="h-2 bg-white/20 w-2/3" />
              </div>
            </div>
          </div>
        </GridColumn>
      </Grid>

      <SlideFooter />
    </SlideBase>
  );
}
