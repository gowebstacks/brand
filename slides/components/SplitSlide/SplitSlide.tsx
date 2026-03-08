import * as React from "react";
import { Heading, Text, Stack, Grid, GridColumn } from "@webstacks/ui";
import { SlideBase, type SlideBaseProps } from "../SlideBase";

export interface SplitSlideProps {
  /** Slide title */
  title: string;
  /** Body content */
  children: React.ReactNode;
  /** Eyebrow label above the title */
  eyebrow?: string;
  /** Content for the right panel — image URL or React node */
  media: React.ReactNode | string;
  /** Split ratio — defaults to "50/50" */
  split?: "50/50" | "60/40" | "40/60";
  /** Flip layout (media on left, content on right) */
  reversed?: boolean;
  /** Background theme */
  theme?: SlideBaseProps["theme"];
}

const splitSpans: Record<string, [number, number]> = {
  "50/50": [6, 6],
  "60/40": [7, 5],
  "40/60": [5, 7],
};

/**
 * Split slide — two-panel layout with content on one side and media on the other.
 */
export function SplitSlide({
  title,
  children,
  eyebrow,
  media,
  split = "50/50",
  reversed = false,
  theme = "light",
}: SplitSlideProps) {
  const [contentSpan, mediaSpan] = splitSpans[split] as [1|2|3|4|5|6|7|8|9|10|11|12, 1|2|3|4|5|6|7|8|9|10|11|12];

  const contentPanel = (
    <GridColumn span={reversed ? mediaSpan : contentSpan}>
      <Stack direction="vertical" gap="spacious" justify="center" className="h-full">
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
  );

  const mediaPanel = (
    <GridColumn span={reversed ? contentSpan : mediaSpan}>
      {typeof media === "string" ? (
        <img
          src={media}
          alt=""
          className="w-full h-full object-cover"
        />
      ) : (
        media
      )}
    </GridColumn>
  );

  return (
    <SlideBase theme={theme}>
      <Grid columns={12} gap="extra-spacious" align="center" className="h-full">
        {reversed ? (
          <>
            {mediaPanel}
            {contentPanel}
          </>
        ) : (
          <>
            {contentPanel}
            {mediaPanel}
          </>
        )}
      </Grid>
    </SlideBase>
  );
}
