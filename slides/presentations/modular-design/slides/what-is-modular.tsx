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
    <SlideBase theme="dark" className="!p-0">
      <div className="relative z-10 flex h-full flex-col px-16 pt-16 pb-24">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Definition
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          Modular design = reusable building blocks
        </Heading>

        <div className="mt-8 bg-white/[0.04] border border-white/10 p-6 max-w-3xl">
          <Text size={500} className="opacity-80">
            Modular design breaks a website into independent, reusable components
            that can be combined to create any page layout.
          </Text>
        </div>

        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60 mt-8"
        >
          Examples of Modules
        </Text>

        <Grid columns={3} gap="condensed" className="mt-4">
          {modules.map((mod) => (
            <GridColumn key={mod}>
              <Stack direction="horizontal" gap="condensed" align="center">
                <div className="w-2 h-2 bg-foreground/50" />
                <Text size={400} className="opacity-70">{mod}</Text>
              </Stack>
            </GridColumn>
          ))}
        </Grid>

        <div className="mt-8 pt-6 border-t border-white/10">
          <Text size={400} className="opacity-60 italic">
            Each module is designed once and reused many times
          </Text>
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
