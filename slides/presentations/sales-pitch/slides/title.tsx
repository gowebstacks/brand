import { useState, useEffect } from "react";
import { TitleSlide } from "../../../components";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityClient, urlFor } from "../../../lib/sanity";
import { companiesWithLogosQuery } from "../../../lib/queries";

export function SlideTitle({ clientLogoSrc, clientLogoNeedsInvert }: { clientLogoSrc?: string; clientLogoNeedsInvert?: boolean } = {}) {
  const [logo, setLogo] = useState<{ src: string; needsInvert: boolean } | null>(null);

  useEffect(() => {
    if (clientLogoSrc !== undefined) return;
    sanityClient
      .fetch(companiesWithLogosQuery)
      .then((results: Array<{ _id: string; name: string; logoOnDark?: SanityImageSource; logoOnLight?: SanityImageSource }>) => {
        const braze = results.find((c) => c.name === "Braze");
        if (!braze) return;
        const useDark = !!braze.logoOnDark;
        const source = (useDark ? braze.logoOnDark : braze.logoOnLight)!;
        setLogo({ src: urlFor(source).height(64).url(), needsInvert: !useDark });
      })
      .catch(() => {});
  }, [clientLogoSrc]);

  const resolvedSrc = clientLogoSrc ?? logo?.src;
  const resolvedInvert = clientLogoNeedsInvert ?? logo?.needsInvert;

  return (
    <TitleSlide
      date="March 04, 2026"
      eyebrow="Webstacks"
      title="Exploring an Agency Partnership"
      subtitle="Accelerating the evolution of your brand and web presence for your next phase of growth."
      heroImage="/images/3d-shapes/layered-diamonds.png"
      clientLogoSrc={resolvedSrc}
      clientLogoNeedsInvert={resolvedInvert}
      clientLogoAlt="Braze"
      teamMembers={[
        { name: "Nikan Shahidi", role: "CEO", avatarSrc: "/images/headshots/leadership/nikan-shahidi.png" },
        { name: "Jesse Schor", role: "Head of Growth", avatarSrc: "/images/headshots/leadership/jesse-schor.png" },
        { name: "Emily Winsauer", role: "Head of Strategy", avatarSrc: "/images/headshots/leadership/emily-winsauer.png" },
        { name: "Hunter McLean", role: "Head of Design", avatarSrc: "/images/headshots/leadership/hunter-mcclean.png" },
        { name: "Tori Wolski", role: "Head of PMO", avatarSrc: "/images/headshots/leadership/tori-wolski.png" },
      ]}
      theme="dark"
    />
  );
}
