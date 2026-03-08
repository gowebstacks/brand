import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const moduleCDeliverables = [
  "Content model architecture aligned to business needs",
  "Sanity schema design and implementation",
  "Performance and validation checks",
  "Review and refinement sessions with your engineers",
];

const moduleCOutcomes = [
  "A well-structured Sanity implementation",
  "Transferable knowledge and patterns your team can own long-term",
];

export function SlideModuleC() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="flex h-full flex-col px-16 pt-16 pb-24">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center bg-white/[0.08]">
            <Text as="span" size={300} className="opacity-80">C</Text>
          </div>
          <Text as="span" size={200} className="font-mono uppercase tracking-widest opacity-50">
            Sanity Studio &amp; Schema Ownership
          </Text>
        </div>

        <Heading as="h2" size={4} className="mt-4 max-w-[75%]">
          Lead content and schema modeling with a focus on scalability, flexibility, and editorial clarity.
        </Heading>

        <div className="mt-8 grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-3">
            <Text size={300} className="font-mono uppercase tracking-widest opacity-40">
              Deliverables
            </Text>
            {moduleCDeliverables.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Text as="span" size={300} className="shrink-0 opacity-40">&#10003;</Text>
                <Text size={400} className="opacity-80">{item}</Text>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <Text size={300} className="font-mono uppercase tracking-widest opacity-40">
              Outcomes
            </Text>
            {moduleCOutcomes.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Text as="span" size={300} className="shrink-0 opacity-40">&#10003;</Text>
                <Text size={400} className="opacity-80">{item}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
