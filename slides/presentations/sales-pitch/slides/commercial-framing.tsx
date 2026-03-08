import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const commercialPoints = [
  { label: "Minimum Engagement", value: "6 Months" },
  { label: "Blended Hourly Rate", value: "$200/hr" },
  { label: "Recommended Start", value: "100+ hrs/mo" },
];

export function SlideCommercialFraming() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Commercials
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          How we typically structure engagements
        </Heading>

        <div className="mt-8 grid grid-cols-3 gap-3">
          {commercialPoints.map((c) => (
            <div
              key={c.label}
              className="flex flex-col justify-between bg-white/[0.04] p-8"
              style={{ minHeight: 180 }}
            >
              <Heading as="h3" size={1}>
                {c.value}
              </Heading>
              <Text
                as="span"
                size={200}
                className="font-mono uppercase tracking-widest opacity-50"
              >
                {c.label}
              </Text>
            </div>
          ))}
        </div>

        <div className="mt-auto mb-6 max-w-[70%]">
          <Text size={400} className="opacity-50">
            Capacity scales based on goals, pace, and complexity. If the
            capacity is too low, the work becomes too reactive and the value
            drops quickly.
          </Text>
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
