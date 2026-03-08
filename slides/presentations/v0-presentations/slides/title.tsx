import { TitleSlide } from "../../../components";

export function SlideTitle() {
  return (
    <TitleSlide
      date="March 07, 2026"
      eyebrow="v0 Tutorial"
      title="Creating Presentations with v0"
      subtitle="Learn how to build beautiful, branded slide decks using AI-powered development."
      heroImage="/images/3d-shapes/layered-diamonds.png"
      teamMembers={[
        { name: "Nikan Shahidi", role: "Presenter", avatarSrc: "/images/headshots/leadership/nikan-shahidi.png" },
      ]}
      theme="dark"
    />
  );
}
