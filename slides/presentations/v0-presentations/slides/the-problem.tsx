import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const painPoints = [
  "Brand inconsistency across decks",
  "Copy-pasting between PowerPoint files",
  "No version history or collaboration",
  "Design bottleneck for every new pitch",
];

export function SlideTheProblem() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="flex h-full pb-12">
        {/* Left column — photo */}
        <div className="relative w-[50%] overflow-hidden">
          <img
            src="/images/photography/two-women-whiteboard-strategy-session.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        {/* Right column — content */}
        <div className="flex w-[50%] flex-col px-16 pt-16">
          <Text
            as="span"
            size={200}
            className="font-mono uppercase tracking-widest opacity-60"
          >
            The Problem
          </Text>
          <Heading as="h2" size={3} className="mt-4">
            Static slides don&apos;t scale.
          </Heading>

          <div className="mt-8 flex flex-col gap-3">
            {painPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 bg-white/[0.04] px-6 py-4"
              >
                <Text as="span" size={400} className="opacity-50">
                  &rarr;
                </Text>
                <Text as="span" size={400} className="opacity-70">
                  {point}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
