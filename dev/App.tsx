import { useState } from "react";
import SalesPitchDeck from "../slides/examples/sales-pitch";
import CaseStudyDeck from "../slides/examples/case-study";
import ClientPresentationDeck from "../slides/examples/client-presentation";

const decks = {
  "sales-pitch": { label: "Sales Pitch (12 slides)", Component: SalesPitchDeck },
  "case-study": { label: "Case Study (8 slides)", Component: CaseStudyDeck },
  "client-presentation": { label: "Client Presentation (20 slides)", Component: ClientPresentationDeck },
} as const;

type DeckKey = keyof typeof decks;

export function App() {
  const [activeDeck, setActiveDeck] = useState<DeckKey>("sales-pitch");
  const { Component } = decks[activeDeck];

  return (
    <div style={{ maxWidth: 1360, margin: "0 auto", padding: "32px 24px" }}>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 24, fontWeight: 400, marginBottom: 8 }}>
          Webstacks Brand — Slide Preview
        </h1>
        <p style={{ fontSize: 14, opacity: 0.6 }}>
          Preview example decks. Slides render at 1280×720 (scroll down to see all).
        </p>
      </div>

      {/* Deck selector */}
      <div style={{ display: "flex", gap: 8, marginBottom: 32 }}>
        {(Object.keys(decks) as DeckKey[]).map((key) => (
          <button
            key={key}
            onClick={() => setActiveDeck(key)}
            style={{
              padding: "8px 20px",
              borderRadius: 9999,
              border: activeDeck === key ? "2px solid hsl(217, 89%, 46%)" : "1px solid #444",
              background: activeDeck === key ? "hsl(217, 89%, 46%)" : "transparent",
              color: "#fff",
              cursor: "pointer",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            {decks[key].label}
          </button>
        ))}
      </div>

      {/* Deck */}
      <div
        style={{
          transform: "scale(0.95)",
          transformOrigin: "top center",
        }}
      >
        <Component />
      </div>
    </div>
  );
}
