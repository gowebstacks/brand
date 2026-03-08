import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const useCases = [
  "Client proposals",
  "Sales pitch decks",
  "Internal presentations",
  "Onboarding materials",
  "Case studies",
  "Quarterly reviews",
];

export function SlideWhatYouCanBuild() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="relative z-10 flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          The Output
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          From sales decks to internal training.
        </Heading>

        <div className="mt-8 grid grid-cols-3 gap-3">
          {useCases.map((useCase) => (
            <div
              key={useCase}
              className="bg-white/[0.04] px-6 py-4"
            >
              <Text size={400} className="opacity-70">
                {useCase}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
