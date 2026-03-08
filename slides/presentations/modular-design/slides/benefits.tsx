import { Heading, Text, Stack, Grid, GridColumn } from "@webstacks/ui";
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
      <div className="h-full flex flex-col px-16 py-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Why It Matters
        </Text>
        <Heading as="h2" size={2} className="mt-4">
          Why companies adopt modular design
        </Heading>

        <div className="mt-10 grid grid-cols-5 gap-4 flex-1">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="flex flex-col justify-between bg-white/[0.04] border border-white/10 p-6"
            >
              <div className="w-10 h-10 bg-primary/20 border border-primary/40 flex items-center justify-center mb-4">
                <Text size={400} weight="medium" className="text-primary">
                  {i + 1}
                </Text>
              </div>
              <div className="mt-auto">
                <Heading as="h3" size={5}>
                  {b.title}
                </Heading>
                <Text size={300} className="opacity-70 mt-2">
                  {b.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
