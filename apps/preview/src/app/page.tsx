"use client";

import Link from "next/link";
import { Heading, Text, Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@webstacks/ui";
import { presentations } from "../../../../slides/presentations";

export default function PreviewPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 text-foreground">
      <Heading as="h1" size={3}>
        Presentations
      </Heading>
      <Text size={300} className="mt-2 opacity-50">
        {presentations.length} presentation{presentations.length !== 1 && "s"}
      </Text>

      <div className="mt-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Text as="span" size={200} className="font-mono uppercase tracking-widest opacity-40">
                  Name
                </Text>
              </TableHead>
              <TableHead className="text-right">
                <Text as="span" size={200} className="font-mono uppercase tracking-widest opacity-40">
                  Slides
                </Text>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {presentations.map(({ meta }) => (
              <TableRow key={meta.id}>
                <TableCell>
                  <Link href={`/${meta.id}`} className="text-foreground no-underline">
                    <Text as="span" size={400}>
                      {meta.label}
                    </Text>
                  </Link>
                </TableCell>
                <TableCell className="text-right">
                  <Text as="span" size={400} className="opacity-50">
                    {meta.count}
                  </Text>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
