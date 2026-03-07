"use client";

import SalesPitchDeck from "../../../../slides/examples/sales-pitch";
import ClientPresentationDeck from "../../../../slides/examples/client-presentation";

const decks = [
  { id: "sales-pitch", label: "Sales Pitch", count: 13, Component: SalesPitchDeck },
  { id: "client-presentation", label: "Client Presentation", count: 20, Component: ClientPresentationDeck },
];

export default function PreviewPage() {
  return (
    <div style={{ maxWidth: 1360, margin: "0 auto", padding: "32px 24px" }}>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 24, fontWeight: 400, marginBottom: 8 }}>
          Webstacks Brand — Slide Preview
        </h1>
        <p style={{ fontSize: 14, opacity: 0.6 }}>
          Preview all example decks. Slides render at 1280×720.
        </p>
      </div>

      {/* All decks */}
      <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
        {decks.map(({ id, label, count, Component }) => (
          <section key={id}>
            <h2 style={{ fontSize: 18, fontWeight: 500, marginBottom: 16, color: "#fff" }}>
              {label}{" "}
              <span style={{ fontSize: 14, opacity: 0.5, fontWeight: 400 }}>
                ({count} slides)
              </span>
            </h2>
            <div style={{ transform: "scale(0.95)", transformOrigin: "top center" }}>
              <Component />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
