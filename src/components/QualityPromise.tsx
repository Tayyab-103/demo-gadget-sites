"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const promises = [
  {
    title: "100% Seam & Stretch Tested",
    desc: "Every flatlock stitch and waistband seam is tensile-tested to withstand extreme multi-directional athletic movements.",
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11.5 14.5 15 9" />
      </>
    ),
  },
  {
    title: "14-Day Field Guarantee",
    desc: "Put our apparel through grueling training blocks. If it doesn't meet your rigorous athletic standards, return it for a complete 100% refund.",
    icon: (
      <>
        <polyline points="1 4 1 10 7 10" />
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
      </>
    ),
  },
  {
    title: "Olympic-Caliber Technical Knits",
    desc: "Crafted exclusively from high-gauge AeroWeave™ fibers, moisture-wicking filaments, and antimicrobial yarn finishes.",
    icon: (
      <>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </>
    ),
  },
];

export default function QualityPromise() {
  return (
    <section id="quality-promise" className="bg-black py-16 sm:py-20 md:py-24 text-white border-t border-white/10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Green Accent */}
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[0.68rem] font-mono font-bold uppercase tracking-widest text-white/70 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            The Collective Standard
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-[1.08]">
            The Performance <span className="text-secondary">Athletes Rely On</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-white/70 font-normal">
            Intense training and championship seasons require apparel that never yields. {siteConfig.brandName} enforces strict quality control across every production batch in Austin.
          </p>
        </div>

        {/* 3 Quality Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-8">
          {promises.map((promise) => (
            <div
              key={promise.title}
              className="flex flex-col items-center text-center rounded-3xl bg-white/5 border border-white/10 p-7 sm:p-8 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-secondary/40 hover:-translate-y-1"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-black shadow-md">
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
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-white/80 hover:text-secondary transition-colors"
          >
            Review 14-Day Trial &amp; Warranty Terms →
          </Link>
        </div>
      </div>
    </section>
  );
}
