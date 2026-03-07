import * as React from "react";
import { Heading, Text, Stack } from "@webstacks/ui";
import { SlideBase } from "./SlideBase";

export interface ImageSlideProps {
  /** Background image URL */
  imageSrc: string;
  /** Image alt text */
  imageAlt?: string;
  /** Heading text overlaid on the image */
  title?: string;
  /** Subtitle text */
  subtitle?: string;
  /** Overlay style — controls text readability */
  overlay?: "gradient" | "dark" | "brand";
}

const overlayClasses: Record<string, string> = {
  gradient: "bg-gradient-to-r from-foreground/70 via-foreground/50 to-transparent",
  dark: "bg-foreground/60",
  brand: "bg-primary/80",
};

/**
 * Image slide — full-bleed background image with text overlay.
 */
export function ImageSlide({
  imageSrc,
  imageAlt = "",
  title,
  subtitle,
  overlay = "gradient",
}: ImageSlideProps) {
  return (
    <SlideBase theme="dark">
      {/* Background image */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
      {/* Content */}
      <Stack
        direction="vertical"
        gap="spacious"
        justify="end"
        className="relative h-full z-10"
      >
        {title && (
          <Heading as="h2" size={2} className="text-primary-foreground max-w-2xl">
            {title}
          </Heading>
        )}
        {subtitle && (
          <Text size={500} className="text-primary-foreground/90 max-w-xl">
            {subtitle}
          </Text>
        )}
      </Stack>
    </SlideBase>
  );
}
