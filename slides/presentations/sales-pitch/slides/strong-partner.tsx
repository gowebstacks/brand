import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const partnerActions = [
  { title: "Stabilize", description: "what is slowing the team down" },
  { title: "Systemize", description: "how the site is designed, built, and managed" },
  { title: "Prioritize", description: "what matters most next" },
  { title: "Improve", description: "the website continuously over time" },
];

export function SlideStrongPartner() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <img
        src="/images/3d-shapes/stacked-blocks.png"
        alt=""
        className="pointer-events-none absolute -left-[15%] -top-[25%] w-[40%] object-contain select-none"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          The Role
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          A strong partner should help you do four things
        </Heading>

        <div className="mt-auto mb-20 grid grid-cols-4 gap-3">
          {partnerActions.map((a, i) => (
            <div
              key={a.title}
              className="flex flex-col gap-3 bg-white/[0.04] p-8"
            >
              <Text
                as="span"
                size={200}
                className="font-mono opacity-50"
              >
                {String(i + 1).padStart(2, "0")}
              </Text>
              <Heading as="h3" size={4}>
                {a.title}
              </Heading>
              <Text size={400} className="opacity-70">
                {a.description}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
