import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const agendaItems = [
  "Executive Summary",
  "Engagement Objectives",
  "Scope of Work — Modules A–D",
  "Collaboration & Transparency",
  "Assumptions",
  "Timeline & Investment",
];

export function SlideAgenda() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="flex h-full flex-col px-16 pt-16 pb-24">
        <Heading as="h2" size={1}>
          Agenda
        </Heading>

        <div className="mt-auto grid grid-cols-2">
          {agendaItems.map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-4 py-4 ${i < agendaItems.length - 2 ? "border-b border-white/[0.08]" : ""}`}
            >
              <Text as="span" size={400} className="font-mono leading-none opacity-40">
                {String(i + 1).padStart(2, "0")}
              </Text>
              <Text size={500} className="leading-none opacity-90">
                {item}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
