import { Heading, Text, Grid, GridColumn } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const benefits = [
  {
    title: "Speed",
    description: "New pages launch faster.",
  },
  {
    title: "Consistency",
    description: "Design patterns stay uniform across the site.",
  },
  {
    title: "Scalability",
    description: "Large sites stay maintainable.",
  },
  {
    title: "Flexibility",
    description: "Marketing teams can create new layouts.",
  },
  {
    title: "Performance",
    description: "Reusable components reduce technical debt.",
  },
];

export function SlideBenefits() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="relative z-10 flex h-full flex-col px-16 pt-16 pb-24">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Why It Matters
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          Why companies adopt modular design
        </Heading>

        <Grid columns={5} gap="condensed" className="mt-8">
          {benefits.map((b, i) => (
            <GridColumn key={b.title}>
              <div className="flex flex-col bg-white/[0.04] border border-white/10 p-6">
                <Text as="span" size={200} className="font-mono opacity-50">
                  {String(i + 1).padStart(2, "0")}
                </Text>
                <Heading as="h3" size={5} className="mt-4">
                  {b.title}
                </Heading>
                <Text size={300} className="opacity-70 mt-2">
                  {b.description}
                </Text>
              </div>
            </GridColumn>
          ))}
        </Grid>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
