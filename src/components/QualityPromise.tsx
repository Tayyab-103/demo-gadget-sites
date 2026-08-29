"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const promises = [
  {
    title: "Zero-Bleed & Ghosting Guarantee",
    desc: "Every batch of our 160 GSM milled cotton parchment is rigorously lab-tested against wet fountain pen inks, watercolors, and calligraphy dip pens.",
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11.5 14.5 15 9" />
      </>
    ),
  },
  {
    title: "14-Day Studio Practice Trial",
    desc: "Take our pens and journals into your daily creative rituals. If our craftsmanship does not elevate your writing experience, return for a 100% full refund.",
    icon: (
      <>
        <polyline points="1 4 1 10 7 10" />
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
      </>
    ),
  },
  {
    title: "Solid Brass & Full-Grain Integrity",
    desc: "Constructed solely from raw heavy-gauge brass, hand-turned resins, and vegetable-tanned leather hides destined to age with unmatched patina.",
    icon: (
      <>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </>
    ),
  },
];

export default function QualityPromise() {
  return (
    <section id="quality-promise" className="bg-[#121820] py-16 sm:py-20 md:py-24 text-[#FAF8F5] border-t border-[#C5A059]/30">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Gold Accent */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 text-[0.68rem] font-serif uppercase tracking-[0.24em] text-[#C5A059] mb-3">
            <span>✦</span>
            The Atelier Creed
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#FAF8F5] leading-[1.15]">
            Artisanal Precision <span className="text-[#C5A059] italic font-normal">Authors Depend On</span>
          </h2>
          <p className="mx-auto mt-3.5 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-[#FAF8F5]/75 font-normal">
            Every manuscript, sketch, and executive decision requires instruments that never falter. {siteConfig.brandName} enforces immaculate craftsmanship standards in Austin.
          </p>
        </div>

        {/* 3 Quality Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-8">
          {promises.map((promise) => (
            <div
              key={promise.title}
              className="flex flex-col items-center text-center rounded-3xl bg-white/5 border border-[#C5A059]/25 p-7 sm:p-8 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-[#C5A059]/60 hover:-translate-y-1"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C5A059] text-[#121820] shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  {promise.icon}
                </svg>
              </div>
              <h3 className="mb-2.5 text-base sm:text-lg font-serif font-bold text-[#FAF8F5] tracking-tight">
                {promise.title}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#FAF8F5]/75 font-normal">
                {promise.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href="/terms"
            className="inline-flex items-center gap-2 text-xs font-serif font-bold uppercase tracking-wider text-[#C5A059] hover:text-[#D4AF37] transition-colors"
          >
            Review 14-Day Studio Practice &amp; Guarantee Terms →
          </Link>
        </div>
      </div>
    </section>
  );
}
