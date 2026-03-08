import { TitleSlide } from "../../../components";

export function SlideTitle() {
  return (
    <TitleSlide
      date="March 07, 2026"
      eyebrow="v0 Tutorial"
      title="Presentations, Reimagined"
      subtitle="How we replaced static slides with code — and why it matters."
      heroImage="/images/3d-shapes/layered-diamonds.png"
      teamMembers={[
        { name: "Nikan Shahidi", role: "Presenter", avatarSrc: "/images/headshots/leadership/nikan-shahidi.png" },
      ]}
      theme="dark"
    />
  );
}
