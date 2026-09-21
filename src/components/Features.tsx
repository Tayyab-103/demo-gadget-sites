"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const featuresData = [
  {
    tag: "Archival Grade",
    title: "Lightfast Pure Pigments",
    description: "Formulated with pure, saturated pigment loads that resist UV degradation and maintain vivid brilliance across decades.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.563-2.512 5.563-5.563C22 6.5 17.5 2 12 2z" />
      </svg>
    ),
  },
  {
    tag: "Prime Surface",
    title: "Triple-Gessoed Canvas",
    description: "Heavyweight 100% natural cotton tightly woven and primed with acid-free acrylic gesso for immediate rich brush adhesion.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    tag: "Master Bristles",
    title: "Zero-Shed Precision Brushes",
    description: "Seamless nickel-plated brass ferrules lock hair firmly, ensuring fluid stroke release without stray hair shedding on your canvas.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08" />
        <path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.53 1.53 4.4 1.02 5.02-.5 0 0 0-.01 0-.01.5-.78 1.98-2.53-.02-4.53z" />
      </svg>
    ),
  },
  {
    tag: "Studio Guarantee",
    title: "14-Day Creative Promise",
    description: "Test our mediums and craft tools in your studio. If they do not elevate your work, enjoy our hassle-free return and support.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
];

const perksList = [
  { icon: "🎨", title: "Handpicked Studio Quality", desc: "Tested by practicing artisans" },
  { icon: "🌿", title: "Non-Toxic & Acid-Free", desc: "Safe formulation for all ages" },
  { icon: "⚡", title: "Fast Dispatch", desc: "Same-day packing on standard orders" },
  { icon: "🛡️", title: "Secure Checkout", desc: "256-bit encrypted transactions" },
];

export default function Features() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-neutral-50/50 to-white relative overflow-hidden" id="features">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-secondary/10 text-secondary mb-4 border border-secondary/20 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            Studio Standards & Craftsmanship
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-primary uppercase">
            Crafted for <span className="text-secondary">Uncompromising</span> Creativity
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
            Every {siteConfig.brandName} tool, pigment, and surface is meticulously selected to empower your creative process from initial sketch to final exhibition.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {featuresData.map((item, index) => (
            <div
              key={item.title}
              className="group relative bg-white rounded-3xl p-7 sm:p-8 border border-neutral-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle top accent highlight on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                {/* Header with Icon & Index */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-text transition-colors duration-300 shadow-xs">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-400">
                    0{index + 1}
                  </span>
                </div>

                {/* Tag */}
                <span className="inline-block text-[0.7rem] uppercase font-bold tracking-wider text-secondary mb-2">
                  {item.tag}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors duration-200 tracking-tight mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Perks Trust Bar */}
        <div className="bg-white rounded-2xl border border-neutral-200/80 p-6 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-neutral-100">
            {perksList.map((perk, idx) => (
              <div
                key={perk.title}
                className={`flex items-center gap-4 ${idx > 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""}`}
              >
                <div className="text-2xl sm:text-3xl flex-shrink-0 p-2.5 rounded-xl bg-neutral-50 border border-neutral-100">
                  {perk.icon}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug">
                    {perk.title}
                  </h4>
                  <p className="text-[0.75rem] text-neutral-500 mt-0.5">
                    {perk.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
