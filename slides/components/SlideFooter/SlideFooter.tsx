import { Text } from "@webstacks/ui";

export interface SlideFooterProps {
  /** "title" shows webstacks.com + dynamic year copyright; "default" shows icon + proprietary notice */
  variant?: "default" | "title";
}

export function SlideFooter({ variant = "default" }: SlideFooterProps) {
  return (
    <div className="absolute bottom-0 left-0 z-10 flex w-full items-center justify-between border-t border-white/10 px-16 py-5">
      <div className="flex items-center gap-2">
        <img
          src="/logos/symbol-negative.svg"
          alt="Webstacks"
          className="h-4 w-auto"
        />
        {variant === "title" && (
          <Text as="span" size={100} className="opacity-50">
            webstacks.com
          </Text>
        )}
      </div>
      <Text as="span" size={100} className="opacity-40">
        {variant === "title" ? (
          <>&copy; {new Date().getFullYear()} Webstacks. All rights reserved.</>
        ) : (
          <>&copy; Webstacks LLC Proprietary and Confidential</>
        )}
      </Text>
    </div>
  );
}
