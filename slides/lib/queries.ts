/**
 * Client logos for Slide04_Clients.
 *
 * HOW TO ADD / REMOVE LOGOS:
 * 1. Edit the `name in [...]` array below — add or remove company names.
 *    Names must match the `name` field on a `company` document in Sanity exactly
 *    (case-sensitive). e.g. "HubSpot" not "Hubspot".
 * 2. Update the `fallbackCompanies` array in
 *    `slides/presentations/sales-pitch/index.tsx` (Slide04_Clients section) to match.
 *    This array is shown as plain text while logos load or if the fetch fails.
 * 3. The grid is currently 6 columns. Ideal counts: 6 (6×1), 12 (6×2), or 18 (6×3).
 *    If you change the count significantly, adjust `grid-cols-6` and the
 *    `slice(0, 16)` cap in the slide component.
 * 4. Logos are pulled from `logoOnDark` first (white logo for dark bg). If a
 *    company only has `logoOnLight`, it is used with a CSS `brightness-0 invert`
 *    filter to make it white.
 */
export const companiesWithLogosQuery = `
  *[_type == "company" && name in ["Cribl", "Braze", "Klaviyo", "ServiceTitan", "Calendly", "Snowflake", "Varonis", "Capital One", "SevenRooms", "Curative", "Fireworks", "LogicMonitor", "BetterUp"] && (defined(logoOnDark) || defined(logoOnLight))] | order(name asc) {
    _id, name, logoOnDark, logoOnLight
  }
`;
