"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const promises = [
  {
    title: "100% Child-Safe & Non-Toxic",
    desc: "Manufactured with BPA-free, lead-free, non-toxic materials rigorously tested to comply with ASTM and CPSIA child safety standards.",
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11.5 14.5 15 9" />
      </>
    ),
  },
  {
    title: "14-Day Happiness Trial",
    desc: "Shop with complete confidence. If your kids aren't completely thrilled with their new toys, return or exchange within 14 days.",
    icon: (
      <>
        <polyline points="1 4 1 10 7 10" />
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
      </>
    ),
  },
  {
    title: "Built For Endless Play",
    desc: "Engineered with reinforced drop-tested structures, smooth rounded edges, and vibrant colors that stay bright through years of play.",
    icon: (
      <>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </>
    ),
  },
];

export default function QualityPromise() {
  return (
    <section id="quality-promise" className="bg-[#1e293b] py-16 sm:py-20 text-white font-sans border-t border-white/10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#ffb703] bg-white/10 px-3.5 py-1 rounded-full">
            Our Commitment to Families
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mt-3">
            Child Safety &amp; <span className="text-[#ff4370]">Quality Promise</span>
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-xs sm:text-sm md:text-base leading-relaxed text-white/75 font-normal">
            Every toy and game at {siteConfig.brandName} is curated for developmental fun, safety, and lasting childhood memories.
          </p>
        </div>

        {/* 3 Quality Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-8">
          {promises.map((promise) => (
            <div
              key={promise.title}
              className="flex flex-col items-center text-center rounded-3xl bg-white/5 border border-white/10 p-7 sm:p-8 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-[#ff4370]/50 hover:-translate-y-1"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ff4370] text-white shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  {promise.icon}
                </svg>
              </div>
              <h3 className="mb-2.5 text-base sm:text-lg font-black text-white">
                {promise.title}
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-white/70">
                {promise.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/terms"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#ffb703] hover:text-white transition-colors"
          >
            Review 14-Day Trial &amp; Return Terms →
          </Link>
        </div>
      </div>
    </section>
  );
}
