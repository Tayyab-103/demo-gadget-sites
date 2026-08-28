"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const promises = [
  {
    title: "100% Impact & Load Tested",
    desc: "Every weighted vest stitch and duffle seam is tensile-tested to withstand up to 300 lbs of dynamic athletic force.",
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11.5 14.5 15 9" />
      </>
    ),
  },
  {
    title: "14-Day Field Guarantee",
    desc: "Put our gear through grueling training blocks. If it doesn't meet your rigorous athletic standards, return it for a complete 100% refund.",
    icon: (
      <>
        <polyline points="1 4 1 10 7 10" />
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
      </>
    ),
  },
  {
    title: "Olympic-Caliber Materials",
    desc: "Crafted exclusively from certified 1000D ballistic Cordura, cast-iron solid alloy, and aerospace-grade brushless motors.",
    icon: (
      <>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </>
    ),
  },
];

export default function QualityPromise() {
  return (
    <section id="quality-promise" className="bg-primary py-14 sm:py-16 md:py-20 lg:py-24 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <span className="eyebrow eyebrow-invert justify-center mb-3">The Collective Standard</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
            The Performance <span className="text-secondary">Athletes Rely On</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-white/70">
            Intense training and championship seasons require gear that never yields. {siteConfig.brandName} enforces strict quality control across every production batch.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-8">
          {promises.map((promise) => (
            <div
              key={promise.title}
              className="flex flex-col items-center text-center rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-secondary/40 hover:-translate-y-1"
            >
              <div className="mb-4 flex h-13 w-13 items-center justify-center rounded-2xl bg-secondary/20 text-secondary shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {promise.icon}
                </svg>
              </div>
              <h3 className="mb-2 text-base sm:text-lg font-black text-white uppercase tracking-tight">{promise.title}</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-white/70">{promise.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href="/terms"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-white/80 hover:text-secondary transition-colors"
          >
            Review 14-Day Trial &amp; Warranty Terms
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
