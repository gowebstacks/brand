"use client";

import Link from "next/link";
import { Heading, Text } from "@webstacks/ui";
import { presentations } from "../../../../../slides/presentations";

export default function PresentationPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const entry = presentations.find((p) => p.meta.id === id);

  if (!entry) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16 text-foreground">
        <Link href="/" className="text-foreground opacity-50 no-underline">
          <Text as="span" size={300}>&larr; Back</Text>
        </Link>
        <Text size={500} className="mt-8">Presentation not found.</Text>
      </div>
    );
  }

  const { meta, Component } = entry;

  return (
    <div className="mx-auto max-w-[1360px] px-6 py-8 text-foreground">
      <div className="mb-6 flex items-baseline gap-4">
        <Link href="/" className="text-foreground opacity-50 no-underline">
          <Text as="span" size={300}>&larr; Back</Text>
        </Link>
        <Heading as="h1" size={4}>
          {meta.label}
        </Heading>
        <Text as="span" size={300} className="opacity-50">
          {meta.count} slides
        </Text>
      </div>

      <div className="origin-top-center scale-95">
        <Component />
      </div>
    </div>
  );
}
