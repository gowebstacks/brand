import * as React from "react";
import { Text, Stack } from "@webstacks/ui";
import { SlideBase, type SlideBaseProps } from "../SlideBase";

export interface QuoteSlideProps {
  /** The quote text (without quotation marks — they are added automatically) */
  quote: string;
  /** Person's name */
  authorName: string;
  /** Person's title/role */
  authorTitle: string;
  /** Company name */
  authorCompany?: string;
  /** Optional avatar image URL */
  avatarSrc?: string;
  /** Background theme */
  theme?: SlideBaseProps["theme"];
}

/**
 * Quote/testimonial slide — features a customer or team quote.
 */
export function QuoteSlide({
  quote,
  authorName,
  authorTitle,
  authorCompany,
  avatarSrc,
  theme = "light",
}: QuoteSlideProps) {
  return (
    <SlideBase theme={theme}>
      <Stack
        direction="vertical"
        gap="extra-spacious"
        justify="center"
        className="h-full max-w-4xl mx-auto"
      >
        <Text size={700} className="italic leading-relaxed">
          &ldquo;{quote}&rdquo;
        </Text>
        <Stack direction="horizontal" gap="normal" align="center">
          {avatarSrc && (
            <img
              src={avatarSrc}
              alt={authorName}
              className="w-12 h-12 rounded-full object-cover"
            />
          )}
          <Stack direction="vertical" gap="none">
            <Text size={400} weight="medium">
              {authorName}
            </Text>
            <Text size={300} className="opacity-70">
              {authorTitle}
              {authorCompany && `, ${authorCompany}`}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </SlideBase>
  );
}
