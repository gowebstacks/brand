import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const before = [
  "Copy-paste from old decks",
  "Inconsistent formatting",
  "Email attachments",
  "No review process",
];

const after = [
  "Reusable branded components",
  "Design system enforced",
  "Live URL, always current",
  "PR review before publishing",
];

export function SlideBeforeAfter() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="relative z-10 flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          The Difference
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          What changes.
        </Heading>

        <div className="mt-8 grid grid-cols-2 gap-3">
          {/* Before column */}
          <div className="flex flex-col gap-3">
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest opacity-50"
            >
              Before
            </Text>
            {before.map((item) => (
              <div
                key={item}
                className="bg-white/[0.04] px-6 py-4"
              >
                <Text size={400} className="opacity-70">
                  {item}
                </Text>
              </div>
            ))}
          </div>

          {/* After column */}
          <div className="flex flex-col gap-3">
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest opacity-50"
            >
              After
            </Text>
            {after.map((item) => (
              <div
                key={item}
                className="bg-white/[0.04] px-6 py-4"
              >
                <Text size={400} className="opacity-70">
                  {item}
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
