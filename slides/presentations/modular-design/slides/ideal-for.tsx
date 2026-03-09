import { Heading, Text, Grid, GridColumn } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const idealCriteria = [
  "Launch new pages frequently",
  "Have multiple product lines",
  "Operate globally",
  "Run marketing experiments",
  "Need fast content updates",
];

const adopters = [
  "SaaS companies",
  "Developer tools companies",
  "High-growth startups",
];

export function SlideIdealFor() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/triple-pyramids.png"
        alt=""
        className="pointer-events-none absolute -right-[12%] -bottom-[25%] w-[40%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col justify-center gap-6 px-16 max-w-[65%]">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Best Fit
        </Text>
        <Heading as="h2" size={3}>
          When Modular Design Makes the Most Sense
        </Heading>
        <Text size={400} className="opacity-70">
          Ideal for organizations that:
        </Text>

        <div className="flex flex-col gap-2 mt-2">
          {idealCriteria.map((criterion) => (
            <div
              key={criterion}
              className="flex items-center gap-3 bg-white/[0.04] px-5 py-3"
            >
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
              <Text as="span" size={400} className="opacity-80">
                {criterion}
              </Text>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <Text size={300} className="opacity-50 mb-3">
            Common adopters:
          </Text>
          <Grid columns={3} gap="normal">
            {adopters.map((adopter) => (
              <GridColumn key={adopter}>
                <div className="bg-primary/20 px-4 py-2 text-center">
                  <Text as="span" size={300} weight="medium">
                    {adopter}
                  </Text>
                </div>
              </GridColumn>
            ))}
          </Grid>
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
