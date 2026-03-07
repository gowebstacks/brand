import * as React from "react";
import { Heading, Text, Stack } from "@webstacks/ui";
import { SlideBase, type SlideBaseProps } from "../SlideBase";

export interface SectionSlideProps {
  /** Section title */
  title: string;
  /** Optional eyebrow label */
  eyebrow?: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Optional background image URL for full-bleed divider */
  imageSrc?: string;
  /** Background theme */
  theme?: SlideBaseProps["theme"];
}

/**
 * Section divider slide — marks a transition between deck sections.
 * Can be text-only (bold heading centered) or have a full-bleed background image.
 */
export function SectionSlide({
  title,
  eyebrow,
  subtitle,
  imageSrc,
  theme = "dark",
}: SectionSlideProps) {
  return (
    <SlideBase theme={theme}>
      {imageSrc && (
        <>
          <img
            src={imageSrc}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/50" />
        </>
      )}
      <Stack
        direction="vertical"
        gap="spacious"
        justify="center"
        align="center"
        className="relative h-full text-center z-10"
      >
        {eyebrow && (
          <Text
            as="span"
            size={200}
            className={`font-mono uppercase tracking-widest ${imageSrc ? "text-primary-foreground/70" : "text-muted-foreground"}`}
          >
            {eyebrow}
          </Text>
        )}
        <Heading as="h2" size={1} className={imageSrc ? "text-primary-foreground" : ""}>
          {title}
        </Heading>
        {subtitle && (
          <Text
            size={500}
            className={imageSrc ? "text-primary-foreground/80 max-w-2xl" : "text-muted-foreground max-w-2xl"}
          >
            {subtitle}
          </Text>
        )}
      </Stack>
    </SlideBase>
  );
}
