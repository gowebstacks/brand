import { Heading, Text, Grid, GridColumn } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const misconceptions = [
  "Limited creativity",
  "Generic layouts",
  "Design restrictions",
];

export function SlideMisconceptions() {
  return (
    <SlideBase theme="light" className="!p-0">
      <div className="relative z-10 flex h-full flex-col justify-center gap-6 px-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest text-muted-foreground"
        >
          Myth vs Reality
        </Text>
        <Heading as="h2" size={3}>
          Common Misconceptions
        </Heading>

        <Grid columns={2} gap="extra-spacious" className="mt-4">
          <GridColumn>
            <div className="h-full">
              <Text size={400} weight="medium" className="text-muted-foreground mb-4">
                Modular does NOT mean:
              </Text>
              <div className="flex flex-col gap-2">
                {misconceptions.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-muted px-5 py-3"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="shrink-0 text-muted-foreground"
                    >
                      <path
                        d="M4 4L12 12M12 4L4 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    <Text as="span" size={400} className="text-muted-foreground">
                      {item}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          </GridColumn>
          <GridColumn>
            <div className="bg-primary/5 border border-primary/20 p-6 h-full flex flex-col justify-center">
              <Text size={300} className="text-muted-foreground mb-2">
                In reality:
              </Text>
              <Text size={500} weight="medium" className="text-primary">
                Modules allow more creativity at scale because designers focus on crafting high-quality reusable components.
              </Text>
            </div>
          </GridColumn>
        </Grid>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
