import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";

const glancePillars = [
  { label: "Website-first", image: "/images/3d-shapes/split-ring.png" },
  { label: "Fast & Flexible", image: "/images/3d-shapes/glass-cubes.png" },
  { label: "Strategic Focus", image: "/images/3d-shapes/glass-panels.png" },
  { label: "Enterprise-ready", image: "/images/3d-shapes/twisted-torus.png" },
  { label: "Platform Agnostic", image: "/images/3d-shapes/layered-diamonds.png" },
];

export function SlideAtAGlance() {
  return (
    <SlideBase theme="dark" className="!p-0">
      <div className="relative z-10 flex h-full flex-col px-16 pt-16 pb-24">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <Text
            as="span"
            size={200}
            className="font-mono uppercase tracking-widest opacity-60"
          >
            Webstacks at a Glance
          </Text>
          <Heading as="h2" size={1}>
            How to think of us as a partner.
          </Heading>
        </div>

        {/* Pillar tiles */}
        <div className="mt-8 grid grid-cols-5 gap-3">
          {glancePillars.map((pillar, i) => (
            <div key={pillar.label} className="flex flex-col gap-4">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={pillar.image}
                  alt=""
                  className="h-full w-full object-cover"
                  aria-hidden="true"
                  style={i === 4 ? { transform: "scale(2)", transformOrigin: "50% 70%" } : { transform: "scale(1.5)", transformOrigin: "80% 120%" }}
                />
              </div>
              <Text as="span" size={500} className="text-center opacity-90">
                {pillar.label}
              </Text>
            </div>
          ))}
        </div>
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
