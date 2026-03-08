export { metadata, slides } from "./config";

import { slides } from "./config";

export default function APlaceForMomDeck() {
  return (
    <div className="flex flex-col gap-8">
      {slides.map((slide, i) => (
        <div key={slide.label} data-slide-index={i}>
          <slide.Component />
        </div>
      ))}
    </div>
  );
}
