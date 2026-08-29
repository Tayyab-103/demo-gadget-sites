"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const featuresData = [
  {
    title: "1000D Ripstop Cordura®",
    description: "High-tenacity nylon ripstop with DuPont Teflon™ coating that resists tears, chemical spills, and severe abrasive friction.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Silvadur™ Antimicrobial",
    description: "Silver-ion antimicrobial polymer technology providing 99.9% clinical pathogen and odor defense through 100+ industrial washings.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
        <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
        <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
        <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
        <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
      </svg>
    ),
  },
  {
    title: "Triple-Needle Seam Armor",
    description: "Reinforced high-stress bar-tacking and genuine heavy-gauge YKK zippers engineered for zero seam blowouts under physical duty.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: `${siteConfig.trialPeriod || 14}-Day Fit Guarantee`,
    description: "Deploy our uniforms across your workforce. Complete peace of mind with 100% full money-back and free size exchange coverage.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11.5 14.5 15 9" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#FFFFFF] text-[#0A0F1D] border-t border-slate-200" id="features">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.24em] text-[#0A0F1D]/80 mb-3 select-none">
            TEXTILE ENGINEERING STANDARDS
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#0A0F1D] leading-[1.08] mb-4">
            Built For Grueling <br className="hidden sm:inline" />
            <span className="font-bold text-[#0A0F1D]">24-Hour Shifts.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
            Every uniform suite from {siteConfig.brandName} is subjected to seam tensile stress rigs, commercial autoclave wash cycles, and stain-release testing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 sm:p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200 shadow-2xs transition-all duration-300 hover:border-[#0A0F1D] hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-4 flex h-13 w-13 items-center justify-center rounded-2xl bg-[#0A0F1D] text-white shadow-2xs">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-base font-bold text-[#0A0F1D] tracking-tight">{feature.title}</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
