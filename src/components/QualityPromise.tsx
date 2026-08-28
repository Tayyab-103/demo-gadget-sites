"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function QualityPromise() {
  return (
    <section
      id="quality-promise"
      className="relative overflow-hidden bg-white py-12 md:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Full-bleed banner */}
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-[2.5rem] shadow-2xl sm:aspect-16/9 lg:aspect-21/8">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=80"
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
      </div>
    </section>
  );
}
