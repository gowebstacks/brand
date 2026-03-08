import { useState, useEffect } from "react";
import { TitleSlide } from "../../../components";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityClient, urlFor } from "../../../lib/sanity";

const clientLogoQuery = `
  *[_type == "company" && name == "A Place for Mom" && (defined(logoOnDark) || defined(logoOnLight))][0] {
    _id, name, logoOnDark, logoOnLight
  }
`;

export function SlideTitle() {
  const [logo, setLogo] = useState<{ src: string; needsInvert: boolean } | null>(null);

  useEffect(() => {
    sanityClient
      .fetch(clientLogoQuery)
      .then((result: { _id: string; name: string; logoOnDark?: SanityImageSource; logoOnLight?: SanityImageSource } | null) => {
        if (!result) return;
        const useDark = !!result.logoOnDark;
        const source = (useDark ? result.logoOnDark : result.logoOnLight)!;
        setLogo({ src: urlFor(source).height(64).url(), needsInvert: !useDark });
      })
      .catch(() => {});
  }, []);

  return (
    <TitleSlide
      date="March 07, 2026"
      eyebrow="Webstacks"
      title="Modular Engagement Proposal"
      subtitle="Design systems, program management, Sanity migration, and component documentation — scoped to your priorities."
      heroImage="/images/3d-shapes/layered-diamonds.png"
      clientLogoSrc={logo?.src}
      clientLogoNeedsInvert={logo?.needsInvert}
      clientLogoAlt="A Place for Mom"
      teamMembers={[
        { name: "Nikan Shahidi", role: "CEO", avatarSrc: "/images/headshots/leadership/nikan-shahidi.png" },
        { name: "Jesse Schor", role: "Head of Growth", avatarSrc: "/images/headshots/leadership/jesse-schor.png" },
        { name: "Emily Winsauer", role: "Head of Strategy", avatarSrc: "/images/headshots/leadership/emily-winsauer.png" },
      ]}
      theme="dark"
    />
  );
}
