import * as React from "react";
import {
  Heading,
  Text,
  Stack,
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@webstacks/ui";
import { SlideBase, type SlideBaseProps } from "../SlideBase";

export interface TeamMemberInfo {
  name: string;
  role: string;
  avatarSrc?: string;
}

export interface TitleSlideProps {
  /** Main title */
  title: string;
  /** Optional subtitle */
  subtitle?: string;
  /** Eyebrow text above the title (e.g. "Webstacks") */
  eyebrow?: string;
  /** Date displayed top-left (e.g. "March 04, 2026") */
  date?: string;
  /** Client logo image path */
  clientLogoSrc?: string;
  /** Alt text for client logo */
  clientLogoAlt?: string;
  /** Hero image path (e.g. "/images/3d-shapes/layered-diamonds.png") */
  heroImage?: string;
  /** Team members to display */
  teamMembers?: TeamMemberInfo[];
  /** Background theme */
  theme?: SlideBaseProps["theme"];
}

/** Extract initials from a full name (e.g. "Nikan Shahidi" → "NS") */
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

/**
 * Title/cover slide — the opening slide of a deck.
 *
 * When `heroImage` or `teamMembers` are provided, renders the rich
 * sales-pitch layout (date, logos, large title, team row, footer,
 * hero image on right). Otherwise falls back to the simple centered
 * layout (eyebrow + title + subtitle).
 */
export function TitleSlide({
  title,
  subtitle,
  eyebrow,
  date,
  clientLogoSrc,
  clientLogoAlt = "Client logo",
  heroImage,
  teamMembers,
  theme = "dark",
}: TitleSlideProps) {
  const isRichLayout = !!(heroImage || teamMembers);

  if (!isRichLayout) {
    return (
      <SlideBase theme={theme}>
        <Stack
          direction="vertical"
          gap="spacious"
          justify="center"
          className="h-full"
        >
          {eyebrow && (
            <Text
              as="span"
              size={200}
              className="font-mono uppercase tracking-widest opacity-80"
            >
              {eyebrow}
            </Text>
          )}
          <Heading as="h1" size={1}>
            {title}
          </Heading>
          {subtitle && (
            <Text size={600} className="opacity-90">
              {subtitle}
            </Text>
          )}
        </Stack>
      </SlideBase>
    );
  }

  return (
    <SlideBase theme={theme} className="!p-0">
      {/* Hero image — right side, absolutely positioned */}
      {heroImage && (
        <img
          src={heroImage}
          alt=""
          className="pointer-events-none absolute -bottom-[55%] -right-[30%] -top-[15%] w-[90%] object-cover select-none"
          aria-hidden="true"
        />
      )}

      {/* Left content column */}
      <div className="relative z-10 flex h-full w-[65%] flex-col gap-8 pl-16 pb-16 pt-12">
        {/* Top section: date */}
        <div className="flex flex-col gap-4">
          {date && (
            <Text
              as="span"
              size={100}
              className="font-mono uppercase tracking-widest opacity-60"
            >
              {date}
            </Text>
          )}
        </div>

        {/* Middle section: logo eyebrow + title + subtitle */}
        <div className="flex flex-col gap-7 max-w-[75%]">
          {/* Logo row — acts as eyebrow above title */}
          <div className="flex items-center gap-3">
            <img
              src="/logos/full_logo-lockup-ondark.svg"
              alt="Webstacks"
              className="h-5 w-auto"
            />

            {clientLogoSrc && (
              <>
                <Text
                  as="span"
                  size={300}
                  className="opacity-40"
                >
                  &times;
                </Text>
                <img
                  src={clientLogoSrc}
                  alt={clientLogoAlt}
                  className="h-6 w-auto object-contain"
                />
              </>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <Heading as="h1" size={1}>
              {title}
            </Heading>
            {subtitle && (
              <Text size={500} className="opacity-70">
                {subtitle}
              </Text>
            )}
          </div>

          {/* Team members */}
          {teamMembers && teamMembers.length > 0 && (
            <div className="flex flex-col gap-3">
              <Text
                as="span"
                size={100}
                className="font-mono uppercase tracking-widest opacity-50"
              >
                Prepared &amp; Presented by
              </Text>
              <div className="grid grid-cols-3 gap-4">
                {teamMembers.map((member) => (
                  <div key={member.name} className="flex items-center gap-2 whitespace-nowrap">
                    <Avatar className="h-12 w-12 shrink-0 rounded-none">
                      {member.avatarSrc && (
                        <AvatarImage
                          src={member.avatarSrc}
                          alt={member.name}
                          className="object-cover"
                        />
                      )}
                      <AvatarFallback className="text-xs">
                        {getInitials(member.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <Text as="span" size={200}>
                        {member.name}
                      </Text>
                      <Text as="span" size={100} className="opacity-50">
                        {member.role}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer bar */}
      <div className="absolute bottom-0 left-0 z-10 flex w-full items-center justify-between border-t border-white/10 px-16 py-3">
        <div className="flex items-center gap-2">
          <img
            src="/logos/symbol-negative.svg"
            alt="Webstacks"
            className="h-4 w-auto"
          />
          <Text as="span" size={100} className="opacity-50">
            webstacks.com
          </Text>
        </div>
        <Text as="span" size={100} className="opacity-40">
          &copy; {new Date().getFullYear()} Webstacks. All rights reserved.
        </Text>
      </div>
    </SlideBase>
  );
}
