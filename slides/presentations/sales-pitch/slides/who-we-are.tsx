import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const whoWeAreItems = [
  "a serious growth channel",
  "a scalable content and campaign engine",
  "a strong product and brand experience",
  "a system their teams can actually manage",
];

export function SlideWhoWeAre() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="flex h-full">
        {/* Left column */}
        <div className="flex w-[50%] flex-col gap-4 pl-16 pt-16">
          <Text
            as="span"
            size={200}
            className="font-mono uppercase tracking-widest opacity-60"
          >
            Who We Are
          </Text>
          <Heading as="h2" size={3}>
            A web agency, by design
          </Heading>
          <Text size={500} className="opacity-70">
            We focus on one thing: websites.
          </Text>
          <Text size={400} className="max-w-[90%] opacity-70">
            We partner with B2B companies that need a website to function as:
          </Text>
        </div>

        {/* Right column — list cards */}
        <div className="flex w-[50%] flex-col justify-center gap-3 pr-16">
          {whoWeAreItems.map((item) => (
            <div
              key={item}
              className="bg-white/[0.04] px-6 py-4"
            >
              <Text size={400} className="opacity-70">{item}</Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
