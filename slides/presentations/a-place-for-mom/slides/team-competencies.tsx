import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const roles = [
  { title: "Strategist", detail: "Roadmap, migration sequencing, stakeholder alignment" },
  { title: "Designer", detail: "UX/UI audit, design systems, component architecture" },
  { title: "Engineer", detail: "Frontend, CMS integration, schema modeling" },
  { title: "Project Manager", detail: "Planning, coordination, visibility, delivery" },
];


export function SlideTeamCompetencies() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="flex h-full">
        {/* Left: photo — stops at footer top edge */}
        <div className="relative mb-[58px] w-[45%] overflow-hidden">
          <img
            src="/images/photography/three-teammates-standing-laptops-huddle.jpg"
            alt="Team collaborating around laptops"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right: content */}
        <div className="flex w-[55%] flex-col justify-center px-16 pb-24">
          <Text as="span" size={200} className="font-mono uppercase tracking-widest opacity-60">
            Your Team
          </Text>
          <Heading as="h2" size={3} className="mt-4">
            Strategy, design, and engineering — one cross-functional unit.
          </Heading>

          <div className="mt-8 flex flex-col gap-3">
            {roles.map((r) => (
              <div key={r.title} className="bg-white/[0.04] px-6 py-4">
                <Text size={400}>{r.title}</Text>
                <Text size={300} className="mt-1 opacity-60">{r.detail}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
