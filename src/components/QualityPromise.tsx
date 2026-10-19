"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const promises = [
  {
    title: "Trail-Tested Durability",
    desc: "Every luggage shell, zipper, and seam is stress-tested against impacts, drops, and weather before leaving our facility.",
  },
  {
    title: "1-Year Comprehensive Warranty",
    desc: "We stand firmly behind our engineering. Any manufacturing defect within 12 months is repaired or replaced without hassle.",
  },
  {
    title: "Premium Certified Materials",
    desc: "Aerospace-grade polycarbonate, water-resistant waxed ripstop canvas, and reinforced hardware in every build.",
  },
];

export default function QualityPromise() {
  return (
    <section
      id="quality-promise"
      className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Full-bleed banner */}
        <div className="relative mb-12 aspect-4/3 w-full overflow-hidden rounded-[2.5rem] shadow-2xl sm:aspect-16/9 md:mb-16 lg:aspect-21/8">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=80"
            alt={`${siteConfig.brandName} Quality Assurance`}
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-14">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-8 bg-secondary md:w-10" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-secondary md:text-sm">
                Our Guarantee
              </span>
            </div>

            <h2 className="max-w-xl text-3xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]">
              The Lasting Quality{" "}
              <span className="text-secondary">You Deserve</span>
            </h2>
          </div>
        </div>

        {/* Promise grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {promises.map((promise, idx) => (
            <div
              key={promise.title}
              className="group/item relative rounded-2xl border border-black/[0.06] bg-neutral-bg p-7 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lg md:p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-secondary/25 bg-secondary/[0.08] text-sm font-black text-secondary shadow-sm transition-all duration-300 group-hover/item:border-secondary group-hover/item:bg-secondary group-hover/item:text-primary-text">
                {String(idx + 1).padStart(2, "0")}
              </div>

              <h3 className="mb-2 text-base font-bold leading-snug text-primary transition-colors duration-300 group-hover/item:text-secondary sm:text-lg">
                {promise.title}
              </h3>

              <p className="text-sm leading-[1.7] text-neutral-text/60">
                {promise.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
