"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const featuresData = [
  {
    title: "22-Momme Mulberry Silk",
    description: "Grade 6A pure long-filament mulberry silk with a luminous liquid drape that is naturally hypoallergenic and breathable.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Double-Faced Cashmere",
    description: "Ultra-luxurious Mongolian cashmere blended with fine virgin wool for featherweight warmth and structured architectural tailoring.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
      </svg>
    ),
  },
  {
    title: "Enclosed French Seams",
    description: "Master patternmaking with fully enclosed French seams and delicate hand-rolled hems that feel whisper-soft against the skin.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    title: `${siteConfig.trialPeriod || 14}-Day Fit Guarantee`,
    description: "Try your couture selections at home with complete peace of mind. Complimentary exchanges and 100% money-back coverage.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11.5 14.5 15 9" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-16 sm:py-24 bg-[#FFFFFF] text-[#18121E] border-t border-[#C59B7E]/20" id="features">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.28em] text-[#C59B7E] mb-3 select-none">
            HAUTE COUTURE EXCELLENCE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-[#18121E] leading-[1.12] mb-4">
            Mastercrafted For <br className="hidden sm:inline" />
            <span className="italic text-[#C59B7E]">Unforgettable Moments.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600 font-light">
            Every silhouette from {siteConfig.brandName} is pattern-drafted in our atelier, finished with French seams, and inspected for pure perfection.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-7 rounded-3xl bg-[#FAF8F6] border border-[#C59B7E]/25 shadow-xs transition-all duration-300 hover:border-[#C59B7E] hover:shadow-xl hover:-translate-y-1.5"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#18121E] text-[#C59B7E] shadow-sm">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-base font-serif font-bold text-[#18121E] tracking-tight">{feature.title}</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
