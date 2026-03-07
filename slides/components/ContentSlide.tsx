import * as React from "react";
import { Heading, Text, Stack, Grid, GridColumn } from "@webstacks/ui";
import { SlideBase, type SlideBaseProps } from "./SlideBase";

export interface ContentSlideProps {
  /** Slide title */
  title: string;
  /** Body content — string, bullet list, or React nodes */
  children: React.ReactNode;
  /** Optional eyebrow label above title */
  eyebrow?: string;
  /** Optional image URL displayed on the right side */
  imageSrc?: string;
  /** Image alt text */
  imageAlt?: string;
  /** Background theme */
  theme?: SlideBaseProps["theme"];
}

/**
 * Content slide — the most common slide type.
 * Text content with an optional image on the right.
 */
export function ContentSlide({
  title,
  children,
  eyebrow,
  imageSrc,
  imageAlt = "",
  theme = "light",
}: ContentSlideProps) {
  if (imageSrc) {
    return (
      <SlideBase theme={theme}>
        <Grid columns={12} gap="extra-spacious" align="center" className="h-full">
          <GridColumn span={7}>
            <Stack direction="vertical" gap="spacious">
              {eyebrow && (
                <Text
                  as="span"
                  size={200}
                  className="font-mono uppercase tracking-widest text-muted-foreground"
                >
                  {eyebrow}
                </Text>
              )}
              <Heading as="h2" size={3}>
                {title}
              </Heading>
              <div className="space-y-3">{children}</div>
            </Stack>
          </GridColumn>
          <GridColumn span={5}>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover rounded-lg"
            />
          </GridColumn>
        </Grid>
      </SlideBase>
    );
  }

  return (
    <SlideBase theme={theme}>
      <Stack direction="vertical" gap="spacious" className="h-full">
        {eyebrow && (
          <Text
            as="span"
            size={200}
            className="font-mono uppercase tracking-widest text-muted-foreground"
          >
            {eyebrow}
          </Text>
        )}
        <Heading as="h2" size={3}>
          {title}
        </Heading>
        <div className="space-y-3 max-w-3xl">{children}</div>
      </Stack>
    </SlideBase>
  );
}
