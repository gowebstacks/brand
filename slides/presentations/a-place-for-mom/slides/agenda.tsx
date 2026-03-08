import { AgendaSlide } from "../../../components";

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
    <AgendaSlide
      title="Agenda"
      items={agendaItems}
      theme="dark"
    />
  );
}
