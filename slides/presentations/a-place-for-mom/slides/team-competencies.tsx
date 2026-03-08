import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const roles = [
  { title: "Design", level: "Sr. Designer or Designer" },
  { title: "Technical Lead", level: "Engineering Manager or Sr. Engineer" },
  { title: "Project Management", level: "Sr. Project Manager or Project Manager" },
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
            Resourcing
          </Text>
          <Heading as="h2" size={3} className="mt-4">
            Staffed to the requirements of the project.
          </Heading>
          <Text size={400} className="mt-4 opacity-60">
            Specific team members are allocated closer to kickoff. Here are the key roles involved.
          </Text>

          <div className="mt-8 flex flex-col">
            {roles.map((r, i) => (
              <div
                key={r.title}
                className={`flex items-baseline justify-between py-4 ${i < roles.length - 1 ? "border-b border-white/[0.08]" : ""}`}
              >
                <Text size={400}>{r.title}</Text>
                <Text size={200} className="font-mono uppercase tracking-widest opacity-50">{r.level}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
