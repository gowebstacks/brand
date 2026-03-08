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
        <GridColumn span={5} className="relative bg-white/[0.02] pt-16 pr-16">
          <div className="flex flex-col gap-6">
            {/* Before - Stacked pages */}
            <div>
              <Text size={100} className="font-mono uppercase tracking-widest opacity-50 mb-3">
                Before: One-off pages
              </Text>
              <div className="flex gap-2">
                {["Page A", "Page B", "Page C"].map((page) => (
                  <div
                    key={page}
                    className="bg-white/[0.04] border border-white/10 w-20 h-24 p-2"
                  >
                    <div className="h-3 bg-white/20 w-full mb-1" />
                    <div className="h-2 bg-white/10 w-3/4 mb-1" />
                    <div className="h-2 bg-white/10 w-full" />
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center gap-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-foreground opacity-50">
                <path
                  d="M12 5V19M12 19L5 12M12 19L19 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <Text size={200} className="opacity-50">Transforms to</Text>
            </div>

            {/* After - Components */}
            <div>
              <Text size={100} className="font-mono uppercase tracking-widest opacity-50 mb-3">
                After: Reusable modules
              </Text>
              <Stack direction="vertical" gap="condensed">
                {["Hero", "Features", "Testimonial", "CTA"].map((mod) => (
                  <div
                    key={mod}
                    className="bg-white/[0.04] border border-white/10 px-4 py-2"
                  >
                    <Text size={200} className="opacity-70">{mod}</Text>
                  </div>
                ))}
              </Stack>
            </div>
          </div>
        </GridColumn>
      </Grid>

      <SlideFooter />
    </SlideBase>
  );
}
