import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const painPoints = [
  "Marketing needs to move faster than internal resources allow",
  "The site becomes harder to manage as it grows",
  "New launches and campaigns create constant demand",
  "Teams start assembling pages instead of building a system",
  "Strategy gets crowded out by production work",
  "The website becomes reactive instead of intentional",
];

export function SlideWhyTeamsBringUsIn() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          The Challenge
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          What usually breaks down internally
        </Heading>

        <div className="mt-8 grid grid-cols-2 gap-3">
          {painPoints.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white/[0.04] px-6 py-5"
            >
              <Text
                as="span"
                size={200}
                className="mt-0.5 shrink-0 font-mono opacity-50"
              >
                {String(i + 1).padStart(2, "0")}
              </Text>
              <Text size={400} className="opacity-70">{item}</Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
