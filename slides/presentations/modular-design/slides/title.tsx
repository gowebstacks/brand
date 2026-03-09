import { TitleSlide } from "../../../components";

export function SlideTitle() {
  return (
    <TitleSlide
      title="Modular Design & Composable Websites"
      subtitle="Building flexible, scalable digital experiences"
      heroImage="/images/3d-shapes/cube-grid.png"
      theme="dark"
      teamMembers={[
        {
          name: "Nikan Shahidi",
          role: "Presenter",
        },
      ]}
    />
  );
}
