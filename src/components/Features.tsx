"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    title: "Acoustic-Grade Metallurgy",
    description: "High-density zinc-brass alloy castings and 24K gold plating for zero signal attenuation and sustained resonance."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
    title: "100% Intonation Certified",
    description: "Every item is bench-tested with strobe calibration to ensure buzz-free, precise pitch tracking."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
        <path d="m9 12 2 2 4-4"></path>
      </svg>
    ),
    title: "1-Year Workshop Warranty",
    description: "Comprehensive 365-day warranty against any manufacturing defect on all cables, tuners, and capos."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    title: "30-Day Tone Satisfaction",
    description: "Try your new gear in your studio risk-free with our 30-day money-back satisfaction guarantee."
  }
];

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="eyebrow justify-center mb-3">The Velvet Standard</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-primary mb-4 tracking-tight">
            Crafted for <span className="text-secondary">True Resonance</span>
          </h2>
          <p className="text-neutral-text/65 text-sm md:text-base max-w-2xl mx-auto">
            At {siteConfig.brandName}, we combine premium materials with real musician feedback to bring you accessories that elevate your sound.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-neutral-bg rounded-3xl p-7 border border-black/5 flex flex-col items-start hover:border-secondary/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-secondary/15 text-secondary flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:text-primary transition-all duration-300 font-bold">
                {feature.icon}
              </div>
              <h3 className="text-base font-black text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-xs text-neutral-text/65 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
