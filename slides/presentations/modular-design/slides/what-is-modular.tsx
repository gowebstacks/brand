import { Heading, Text, Stack, Grid, GridColumn } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const modules = [
  "Hero section",
  "Product showcase",
  "Logo cloud",
  "Feature grid",
  "Testimonial carousel",
  "Call-to-action banner",
];

export function SlideWhatIsModular() {
  return (
    <SlideBase theme="light" className="!p-0">
      <div className="h-full flex flex-col px-16 py-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest text-muted-foreground"
        >
          Definition
        </Text>
        <Heading as="h2" size={2} className="mt-4">
          Modular design = reusable building blocks
        </Heading>

        <div className="mt-8 bg-muted/50 border border-border p-8 max-w-3xl">
          <Text size={500}>
            Modular design breaks a website into independent, reusable components
            that can be combined to create any page layout.
          </Text>
        </div>

        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest text-muted-foreground mt-10"
        >
          Examples of Modules
        </Text>

        <Grid columns={3} gap="normal" className="mt-4">
          {modules.map((mod) => (
            <GridColumn key={mod}>
              <Stack direction="horizontal" gap="condensed" align="center">
                <div className="w-2 h-2 bg-primary" />
                <Text size={400}>{mod}</Text>
              </Stack>
            </GridColumn>
          ))}
        </Grid>

        <div className="mt-auto pt-8 border-t border-border">
          <Text size={400} className="text-muted-foreground italic">
            Each module is designed once and reused many times
          </Text>
        </div>
      </div>
    </SlideBase>
  );
}
