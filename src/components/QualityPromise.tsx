"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const promises = [
  {
    tag: "01 / Testing",
    title: "Torture-Tested Shells & Seams",
    desc: "Every luggage corner, zipper bite, and telescoping pull is put through thousands of drop cycles, tumble barrels, and extreme load ratings before dispatch.",
  },
  {
    tag: "02 / Coverage",
    title: "1-Year Comprehensive Warranty",
    desc: "We engineer for endurance. If any structural component fails due to materials or craftsmanship within 12 months, we repair or replace it immediately.",
  },
  {
    tag: "03 / Materials",
    title: "Certified Aerospace Polycarbonate",
    desc: "100% virgin Makrolon® polycarbonate and water-resistant coated ripstop provide unbreakable flexibility and featherweight convenience.",
  },
];

export default function QualityPromise() {
  return (
    <section id="quality-promise" className="relative overflow-hidden bg-white py-14 sm:py-20 md:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Full-bleed Cinematic Banner */}
        <div className="relative mb-8 sm:mb-12 min-h-[300px] sm:aspect-16/9 md:aspect-21/9 w-full overflow-hidden rounded-2xl shadow-lg border border-black/8 flex flex-col justify-end">
          <img
            src="/img/qualitypromise.jpg"
            alt={`${siteConfig.brandName} Quality Engineering Assurance`}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Deep Charcoal Forest Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141F1A] via-[#141F1A]/80 to-transparent" />

          {/* Banner Content */}
          <div className="relative z-10 p-6 sm:p-10 md:p-14">
            <div className="mb-3 inline-flex items-center gap-2.5">
              <span className="w-8 h-px bg-secondary" />
              <span className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                Our Guarantee
              </span>
            </div>

            <h2 className="font-serif max-w-2xl text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Quality Engineered for <span className="text-secondary">Every Voyage</span>
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-white/80 max-w-xl font-normal leading-relaxed">
              Every detail is calibrated to eliminate travel friction, ensuring complete confidence wherever your ticket takes you.
            </p>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {promises.map((p) => (
            <div
              key={p.tag}
              className="p-6 sm:p-8 rounded-xl bg-neutral-bg border border-black/6 shadow-xs hover:border-secondary/30 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.2em] text-secondary block mb-2">
                  {p.tag}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-primary mb-2.5 leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-text/65 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/6 flex items-center gap-2 text-xs font-bold text-primary">
                <span className="text-secondary">✓</span>
                <span className="text-[0.68rem] uppercase tracking-wider text-neutral-text/60">Strictly Inspected</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
