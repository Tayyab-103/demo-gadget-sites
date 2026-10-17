"use client";

import React from "react";

const brands = [
  "ATELIER MEADOW",
  "MOLLEE PARIS",
  "NORDIC LINEN",
  "FLORENCE SILK",
  "VERONA WEAVE",
];

export default function BrandsBlock() {
  return (
    <div className="py-14 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-neutral-text/40">
            Trusted Atelier Partners &amp; Weavers
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="font-heading text-sm md:text-base font-bold tracking-[0.25em] text-primary/35 hover:text-primary transition-colors cursor-default"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
