import { Heading, Text, Grid, GridColumn } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const marketingNeeds = [
  "Faster publishing",
  "Consistent design systems",
  "Flexible content structures",
  "Ability to scale globally",
  "Integration with many tools",
];

export function SlideShift() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="relative z-10 flex h-full flex-col justify-center gap-6 px-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          The Evolution
        </Text>
        <Heading as="h2" size={3}>
          The Shift in Modern Web Development
        </Heading>

        <Grid columns={2} gap="extra-spacious" className="mt-4">
          <GridColumn>
            <div className="flex flex-col gap-4">
              <Text size={400} weight="medium" className="opacity-80">
                Marketing teams today need:
              </Text>
              <div className="flex flex-col gap-2">
                {marketingNeeds.map((need) => (
                  <div key={need} className="flex items-center gap-3">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="shrink-0 text-primary"
                    >
                      <path
                        d="M3 8.5L6.5 12L13 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <Text as="span" size={400} className="opacity-70">
                      {need}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          </GridColumn>
          <GridColumn>
            <div className="flex flex-col gap-4 bg-white/[0.04] p-6">
              <Text size={400} className="opacity-60">
                This shift has led to:
              </Text>
              <Text size={600} weight="medium">
                Modular design + composable architecture
              </Text>
            </div>
          </GridColumn>
        </Grid>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
