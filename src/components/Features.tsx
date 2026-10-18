"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const featuresData = [
  {
    title: "Heavy-Duty Twill & Ripstop",
    description: "Engineered with 65/35 poly-cotton ripstop weaves that resist tears, abrasions, and commercial wash cycles without fraying.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Double-Needle Seams",
    description: "Every stress point, pocket corner, and inseam is reinforced with heavy-gauge industrial stitching for maximum shift longevity.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Soil-Release Treatment",
    description: "Factory stain-resistant and soil-release finish allows grease, oils, and industrial grime to wash away cleanly every cycle.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "14-Day Fit Guarantee",
    description: "Equip your entire crew with complete peace of mind. If uniforms do not fit your staff perfectly, exchange or return within 14 days.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82Z" />
        <circle cx="7" cy="7" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-14 sm:py-16 md:py-20 lg:py-24 bg-white" id="features">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 text-center md:mb-16">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0f2b48]">
            Built For The <span className="text-[#f59e0b]">Demanding Workforce</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-black/70">
            Every {siteConfig.brandName} uniform is subjected to industrial stress checks and repeated wash simulations to ensure commercial-grade durability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {featuresData.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 sm:p-7 rounded-3xl bg-[#f0f4f8] border border-black/5 shadow-sm transition-all duration-300 hover:border-[#0f2b48]/30 hover:shadow-md hover:-translate-y-1"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f2b48] text-white shadow-md">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-base font-black text-[#0f2b48] uppercase tracking-tight">{feature.title}</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-black/65">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
