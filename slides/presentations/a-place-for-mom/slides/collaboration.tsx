import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const collaborationPrinciples = [
  {
    title: "Involved in Decisions",
    description: "Your team participates in all architectural and design decisions — nothing happens in isolation.",
  },
  {
    title: "No Black Boxes",
    description: "Work in progress is always visible. You see what we're building as we build it.",
  },
  {
    title: "Confidence in the Approach",
    description: "We emphasize collaborative ownership, not handoffs that leave your team unsure.",
  },
];

export function SlideCollaboration() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/glass-cubes.png"
        alt=""
        className="pointer-events-none absolute -left-[12%] -top-[20%] w-[35%] -rotate-12 object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col px-16 pt-16 pb-24">
        <div className="flex flex-col gap-3">
          <Text as="span" size={200} className="font-mono uppercase tracking-widest opacity-50">
            How We Work Together
          </Text>
          <Heading as="h2" size={3} className="max-w-[70%]">
            Collaboration and Transparency
          </Heading>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3">
          {collaborationPrinciples.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 bg-white/[0.04] p-6"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.08]">
                <Text as="span" size={200} className="opacity-60">
                  {String(i + 1).padStart(2, "0")}
                </Text>
              </div>
              <Text size={400}>{item.title}</Text>
              <Text size={300} className="opacity-60">
                {item.description}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
