import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const disciplines = [
  {
    title: "Web Strategy",
    description: "Roadmap, priorities, testing, goals, recommendations",
  },
  {
    title: "Design",
    description: "UX, systems, reusable components, consistency",
  },
  {
    title: "Development",
    description: "Frontend, backend, CMS, integrations, new functionality",
  },
  {
    title: "Program Management",
    description: "Visibility, planning, coordination, momentum",
  },
];

export function SlideCoreDisciplines() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Our Capabilities
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          How we show up as a web partner
        </Heading>

        <div className="mt-8 grid grid-cols-4 gap-3">
          {disciplines.map((d) => (
            <div
              key={d.title}
              className="flex flex-col justify-between bg-white/[0.04] p-8"
              style={{ minHeight: 240 }}
            >
              <Heading as="h3" size={4}>
                {d.title}
              </Heading>
              <Text size={400} className="opacity-70">
                {d.description}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
