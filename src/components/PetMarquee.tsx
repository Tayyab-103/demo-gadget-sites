import React from "react";
import PawIcon from "@/components/PawIcon";

const words = [
  "Tangle-free coats",
  "Happy chewers",
  "Comfy everyday collars",
  "Made for dogs & cats",
  "Bundle & save",
  "Easy-clean grooming",
  "Playtime approved",
];

/** Gradient ribbon with a slow scrolling list of benefits. */
export default function PetMarquee() {
  const track = [...words, ...words];
  return (
    <div className="bg-brand-gradient py-4 overflow-hidden -rotate-1 scale-[1.02] my-2 shadow-sm" aria-hidden="true">
      <div className="marquee-track flex items-center gap-10 w-max">
        {track.map((w, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-lg sm:text-xl font-semibold text-primary-text whitespace-nowrap">
            {w}
            <PawIcon className="w-5 h-5 opacity-60" />
          </span>
        ))}
      </div>
    </div>
  );
}
