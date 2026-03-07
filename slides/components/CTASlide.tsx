import * as React from "react";
import { Heading, Text, Stack, Button } from "@webstacks/ui";
import { SlideBase, type SlideBaseProps } from "./SlideBase";

export interface CTASlideProps {
  /** Main heading (e.g. "Let's Build Something Great") */
  title: string;
  /** Supporting text */
  subtitle?: string;
  /** Primary CTA button text */
  ctaText?: string;
  /** CTA link */
  ctaHref?: string;
  /** Secondary CTA text */
  secondaryCtaText?: string;
  /** Contact info line (e.g. email or phone) */
  contactInfo?: string;
  /** Background theme */
  theme?: SlideBaseProps["theme"];
}

/**
 * CTA / closing slide — the final slide with a clear call to action.
 */
export function CTASlide({
  title,
  subtitle,
  ctaText = "Get Started",
  ctaHref,
  secondaryCtaText,
  contactInfo,
  theme = "dark",
}: CTASlideProps) {
  const isDark = theme === "dark";

  return (
    <SlideBase theme={theme}>
      <Stack
        direction="vertical"
        gap="extra-spacious"
        align="center"
        justify="center"
        className="h-full text-center"
      >
        <Heading as="h2" size={1}>
          {title}
        </Heading>
        {subtitle && (
          <Text size={600} className="opacity-90 max-w-2xl">
            {subtitle}
          </Text>
        )}
        <Stack direction="horizontal" gap="normal" align="center">
          <Button
            size="lg"
            mode={isDark ? "stroke" : "filled"}
            tone="primary"
            className={isDark ? "border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" : ""}
          >
            {ctaHref ? <a href={ctaHref}>{ctaText}</a> : ctaText}
          </Button>
          {secondaryCtaText && (
            <Button
              size="lg"
              mode="link"
              className={isDark ? "text-primary-foreground/80" : ""}
            >
              {secondaryCtaText}
            </Button>
          )}
        </Stack>
        {contactInfo && (
          <Text size={300} className="opacity-60 mt-4">
            {contactInfo}
          </Text>
        )}
      </Stack>
    </SlideBase>
  );
}
