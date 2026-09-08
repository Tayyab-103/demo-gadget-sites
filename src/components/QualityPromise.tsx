"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const guaranteePillars = [
  {
    badge: "Guarantee 01",
    title: `${siteConfig.trialPeriod || 14}-Day In-Home Trial`,
    desc: `Wear and inspect your piece for ${siteConfig.trialPeriod || 14} days. If you are not completely delighted, return it for an immediate 100% full refund with prepaid return shipping.`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <polyline points="9 12 11 14 15 10"></polyline>
      </svg>
    ),
  },
  {
    badge: "Guarantee 02",
    title: "18K Solid Gold & Certified Stones",
    desc: "Every piece is crafted in solid 18K gold and set with conflict-free diamonds and genuine South Sea pearls — zero cheap base metals or hollow alloys.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ),
  },
  {
    badge: "Guarantee 03",
    title: "Lifetime Atelier Craftsmanship",
    desc: "Each item is hand-finished and stamped with official atelier hallmarks. We warrant against any structural defects for the entire lifetime of your piece.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 13L2 9z"></path>
        <path d="M11 3 8 9l4 13 4-13-3-6"></path>
        <path d="M2 9h20"></path>
      </svg>
    ),
  },
  {
    badge: "Guarantee 04",
    title: "Fully Insured Express Transit",
    desc: `Delivered securely in ${siteConfig.shippingPeriod || "3-5"} business days via ${siteConfig.shippingCarrier || "UPS"} with real-time signature tracking and tamper-evident packaging.`,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
      </svg>
    ),
  },
];

export default function QualityPromise() {
  return (
    <section
      id="quality-promise"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 border-b border-black/5 font-sans"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#0C1E17]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0C1E17]/5 border border-[#D4AF37]/40 mb-4 shadow-2xs">
            <span className="text-[#D4AF37] text-xs">✦</span>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#0C1E17]">
              The Atelier Standard
            </span>
            <span className="text-[#D4AF37] text-xs">✦</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal uppercase tracking-tight text-[#0C1E17] leading-tight">
            Our Uncompromising <span className="text-[#D4AF37]">Guarantee</span>
          </h2>
          <p className="text-black/65 text-xs sm:text-sm md:text-base mt-3 max-w-xl mx-auto leading-relaxed">
            Every heirloom piece crafted by {siteConfig.brandName} is backed by our four-point protection pledge so you can shop with absolute confidence.
          </p>
        </div>

        {/* Main Content: Feature Showcase + 4 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* ─── LEFT SPOTLIGHT CARD (5 cols) ─── */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden bg-[#0C1E17] text-white p-8 sm:p-10 flex flex-col justify-between shadow-2xl border border-[#D4AF37]/30 min-h-[460px]">
            {/* Background image texture */}
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=1200&q=80"
              alt="Artisan Craftsmanship"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-30 mix-blend-luminosity scale-105 pointer-events-none"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1E17] via-[#0C1E17]/80 to-[#0C1E17]/60 pointer-events-none" />

            {/* Top Certificate Badge */}
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-6 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>

              <span className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#D4AF37] block mb-2">
                Certified Authenticity
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white uppercase leading-snug tracking-wide">
                Individually Verified. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E2A9] to-[#D4AF37]">
                  Guaranteed Forever.
                </span>
              </h3>
              <p className="text-white/70 text-xs sm:text-sm mt-3 leading-relaxed font-light">
                Before any jewelry piece leaves our atelier, it undergoes 5 rigorous inspections for prong integrity, weight calibration, and diamond brilliance.
              </p>
            </div>

            {/* Bottom Stamp & Signature Box */}
            <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="block text-[0.62rem] uppercase tracking-widest text-white/50">Official Certificate</span>
                <span className="block text-xs font-bold uppercase tracking-wider text-[#D4AF37]">Hallmarked 18K Solid Gold</span>
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] text-[0.65rem] font-black uppercase text-center rotate-[-12deg]">
                PASS
              </div>
            </div>
          </div>

          {/* ─── RIGHT 4 GUARANTEE CARDS (7 cols) ─── */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {guaranteePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="group bg-[#F9F7F2] hover:bg-white rounded-3xl p-6 sm:p-7 border border-black/8 hover:border-[#D4AF37]/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-[#0C1E17] group-hover:text-[#D4AF37] text-[#0C1E17] border border-black/8 flex items-center justify-center transition-all duration-300 shadow-xs">
                      {pillar.icon}
                    </div>
                    <span className="text-[0.68rem] font-bold uppercase tracking-wider text-[#D4AF37] bg-white px-3 py-1 rounded-full border border-black/5 shadow-2xs">
                      {pillar.badge}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-serif font-bold text-[#0C1E17] group-hover:text-[#0C1E17] mb-2 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-black/65 leading-relaxed m-0 font-light">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-black/5 flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-wider text-[#D4AF37]">
                  <span>100% Protected</span>
                  <span className="text-xs">&rarr;</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}