import { useState, useEffect } from "react";
import { Heading, Text } from "@webstacks/ui";
import { SlideBase, SlideFooter } from "../../../components";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { sanityClient, urlFor } from "../../../lib/sanity";
import { companiesWithLogosQuery } from "../../../lib/queries";
import type { ClientCompany } from "../config";

export function SlideClients({
  companies: companiesProp,
}: {
  companies?: ClientCompany[];
} = {}) {
  const [fetched, setFetched] = useState<ClientCompany[]>([]);

  useEffect(() => {
    if (companiesProp !== undefined) return;
    sanityClient
      .fetch(companiesWithLogosQuery)
      .then((results: Array<{ _id: string; name: string; logoOnDark?: SanityImageSource; logoOnLight?: SanityImageSource }>) => {
        const seen = new Set<string>();
        const deduped = results.filter((c) => {
          if (seen.has(c.name)) return false;
          seen.add(c.name);
          return true;
        });
        setFetched(
          deduped.map((c) => {
            const useDark = !!c.logoOnDark;
            const source = (useDark ? c.logoOnDark : c.logoOnLight)!;
            return {
              name: c.name,
              logoUrl: urlFor(source).height(64).url(),
              needsInvert: !useDark,
            };
          })
        );
      })
      .catch(() => {});
  }, [companiesProp]);

  const companies = companiesProp ?? fetched;
  const displayCompanies = companies.slice(0, 16);

  return (
    <SlideBase theme="dark" className="!p-0">
      {/* Top content row */}
      <div className="flex items-start justify-between px-16 pt-16 pb-10">
        <Heading as="h2" size={3} className="max-w-[55%]">
          We&apos;re the agency behind some of the best websites on the internet.
        </Heading>
        <Text size={400} className="max-w-[35%] pt-2 opacity-70">
          From fast growing startups to established enterprises.
        </Text>
      </div>

      {/* 6-col logo grid */}
      <div className="grid grid-cols-6 gap-px px-16">
        {displayCompanies.map((company) => (
          <div
            key={company.name}
            className="flex aspect-square items-center justify-center bg-white/[0.04] px-6"
          >
            {company.logoUrl ? (
              <img
                src={company.logoUrl}
                alt={company.name}
                className={`h-8 max-w-[120px] object-contain${company.needsInvert ? " brightness-0 invert" : ""}`}
              />
            ) : (
              <Text as="span" size={200} className="opacity-40 text-center">
                {company.name}
              </Text>
            )}
          </div>
        ))}
      </div>

      <SlideFooter />
    </SlideBase>
  );
}
