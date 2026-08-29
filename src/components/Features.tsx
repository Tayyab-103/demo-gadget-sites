"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const featuresData = [
  {
    title: "160 GSM Bleedproof Paper",
    description: "Milled cotton paper engineered with zero feathering, zero ghosting, and exceptional ink responsiveness.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "German Iridium-Tipped Nibs",
    description: "Precision-ground nibs tuned by hand for flawless capillary ink evacuation and buttery-smooth paper contact.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Smyth-Sewn 180° Lay-Flat",
    description: "Reinforced library bookbinding allows your journal to open completely flat across any desk surface.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: "14-Day Studio Guarantee",
    description: "Experience our goods in your daily writing and journaling rituals. Return anytime for a 100% full refund.",
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
    <section className="py-16 sm:py-20 md:py-24 bg-[#FAF8F5] text-[#121820] border-t border-[#C5A059]/20" id="features">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 text-center md:mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[0.68rem] font-serif uppercase tracking-[0.24em] text-[#C5A059] mb-3">
            <span>✦</span>
            Artisanal Materials &amp; Craft
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#121820] leading-[1.15]">
            Crafted For The <span className="text-[#C5A059] italic font-normal">Discerning Scribe</span>
          </h2>
          <p className="mx-auto mt-3.5 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-[#1A202C]/75 font-normal">
            Every {siteConfig.brandName} stationery piece is subjected to wet ink tests and material durability checks to ensure lasting heirloom quality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {featuresData.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 sm:p-7 rounded-3xl bg-white border border-[#C5A059]/20 shadow-sm transition-all duration-300 hover:border-[#C5A059]/60 hover:shadow-md hover:-translate-y-1"
            >
              <div className="mb-4 flex h-13 w-13 items-center justify-center rounded-2xl bg-[#C5A059]/15 text-[#C5A059] shadow-xs">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-base font-serif font-bold text-[#121820] tracking-tight">{feature.title}</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#1A202C]/70 font-normal">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
