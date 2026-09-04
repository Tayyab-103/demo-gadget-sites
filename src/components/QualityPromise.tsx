"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const promises = [
  {
    title: "Durable Stitching & Fit",
    desc: "Built with reinforced seams and flexible four-way stretch fabric for lasting comfort.",
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11.5 14.5 15 9" />
      </>
    ),
  },
  {
    title: "14-Day Return Policy",
    desc: "Test our apparel during your workouts. If you're not satisfied, return it within 14 days for a full refund.",
    icon: (
      <>
        <polyline points="1 4 1 10 7 10" />
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
      </>
    ),
  },
  {
    title: "Breathable Materials",
    desc: "Crafted from lightweight, moisture-wicking fabrics that keep you dry and comfortable.",
    icon: (
      <>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </>
    ),
  },
];

export default function QualityPromise() {
  return (
    <section id="quality-promise" className="bg-[#0a2e22] py-16 sm:py-20 md:py-24 text-white border-t border-white/10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-[1.08]">
            Quality &amp; <span className="text-[#10b981]">Reliability</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-xs sm:text-sm md:text-base leading-relaxed text-white/75 font-normal">
            Every piece from {siteConfig.brandName} is designed for comfort, athletic fit, and everyday durability.
          </p>
        </div>

        {/* 3 Quality Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-8">
          {promises.map((promise) => (
            <div
              key={promise.title}
              className="flex flex-col items-center text-center rounded-3xl bg-white/5 border border-white/10 p-7 sm:p-8 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-[#10b981]/50 hover:-translate-y-1"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0d4a36] text-white shadow-md border border-white/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  {promise.icon}
                </svg>
              </div>
              <h3 className="mb-2.5 text-base sm:text-lg font-black text-white uppercase tracking-tight">
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
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-white/80 hover:text-[#10b981] transition-colors"
          >
            Review 14-Day Trial &amp; Return Terms →
          </Link>
        </div>
      </div>
    </section>
  );
}
