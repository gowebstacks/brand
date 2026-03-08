import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const roadmapInitiatives = [
  "CRO improvements",
  "New landing pages",
  "Technical enhancements",
  "CMS and UX improvements",
];

const adHocRequests = [
  "Campaign launches",
  "Content updates",
  "Quick fixes",
  "Small experiments",
];

export function SlideMonthlyCapacity() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="flex h-full flex-col px-16 pt-16">
        <Text
          as="span"
          size={200}
          className="font-mono uppercase tracking-widest opacity-60"
        >
          Capacity
        </Text>
        <Heading as="h2" size={3} className="mt-4">
          Monthly capacity enables both speed and strategic progress
        </Heading>

        <div className="mt-6 flex items-start gap-6">
          {/* Minimum engagement */}
          <div className="flex flex-col gap-2 bg-white/[0.04] p-6" style={{ minWidth: 200 }}>
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest opacity-50"
            >
              Minimum Engagement
            </Text>
            <Heading as="h3" size={2}>
              100+ hrs
            </Heading>
            <Text size={300} className="opacity-50">
              per month
            </Text>
          </div>

          {/* Roadmap initiatives */}
          <div className="flex flex-1 flex-col gap-3">
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest opacity-50"
            >
              Roadmap Initiatives — 60–70%
            </Text>
            <div className="grid grid-cols-2 gap-2">
              {roadmapInitiatives.map((item) => (
                <div key={item} className="bg-white/[0.04] px-4 py-3">
                  <Text size={300} className="opacity-70">{item}</Text>
                </div>
              ))}
            </div>
          </div>

          {/* Ad hoc */}
          <div className="flex flex-1 flex-col gap-3">
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest opacity-50"
            >
              Ad Hoc Requests — 30–40%
            </Text>
            <div className="grid grid-cols-2 gap-2">
              {adHocRequests.map((item) => (
                <div key={item} className="bg-white/[0.04] px-4 py-3">
                  <Text size={300} className="opacity-70">{item}</Text>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-auto mb-6">
          <Text size={300} className="opacity-50">
            Executed across: Strategy | Design | Development | Program Management
          </Text>
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
