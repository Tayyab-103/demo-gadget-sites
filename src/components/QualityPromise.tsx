"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const promises = [
  {
    title: "100% Hydrostatic Testing",
    desc: "Every valve and fitting casting is pressurized with deionized water to verify zero porosity and a leak-proof seal.",
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11.5 14.5 15 9" />
      </>
    ),
  },
  {
    title: "60-Day Trade Guarantee",
    desc: "Test our fittings on real jobs. If any component fails to meet your installation standards, return unused stock for a full 100% refund.",
    icon: (
      <>
        <polyline points="1 4 1 10 7 10" />
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
      </>
    ),
  },
  {
    title: "Metallurgical Traceability",
    desc: "Manufactured from certified virgin brass and 304 stainless alloys with strict chemical consistency across every run.",
    icon: (
      <>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </>
    ),
  },
];

export default function QualityPromise() {
  return (
    <section id="quality-promise" className="bg-primary py-14 sm:py-16 md:py-20 lg:py-24 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12 sm:mb-16">
          <span className="eyebrow eyebrow-invert justify-center mb-3">Foundry Standards</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white">
            The Quality <span className="text-secondary">Plumbers Trust</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-white/70">
            Plumbing and hydronic heating systems cannot afford downtime or leaks. {siteConfig.brandName} enforces strict quality controls across every batch.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:gap-8">
          {promises.map((promise) => (
            <div
              key={promise.title}
              className="flex flex-col items-center text-center rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/8 hover:border-secondary/40"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {promise.icon}
                </svg>
              </div>
              <h3 className="mb-2 text-base sm:text-lg font-bold text-white">{promise.title}</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-white/65">{promise.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href="/terms"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white/70 hover:text-secondary transition-colors"
          >
            Review Warranty &amp; Return Terms
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
