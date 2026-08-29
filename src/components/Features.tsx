"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const featuresData = [
  {
    title: "Aerospace Anodized Alloy",
    description: "Shock-resistant aluminum-magnesium shell with reinforced impact corner bumpers for extreme travel endurance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Japanese Hinomoto 360°",
    description: "Whisper-quiet dual ball-bearing spinner wheels designed to glide silently over airport terminals, cobblestones, and curbs.",
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
    title: "Dual TSA Integrated Locks",
    description: "Recessed keyless combination latches for frictionless customs inspection and impenetrable transit security.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: `${siteConfig.trialPeriod || 14}-Day Flight Guarantee`,
    description: "Test our luggage and modular bags on your upcoming journeys. Total peace of mind with 100% full money-back coverage.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#F8F6F0] text-[#18222F] border-t border-[#C87D3B]/20" id="features">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 text-center md:mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C87D3B]/10 border border-[#C87D3B]/30 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#C87D3B] mb-3">
            <span>✦</span>
            Materials &amp; Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0D1B2A] leading-[1.15] uppercase">
            Built For Millions of <span className="text-[#C87D3B] font-light italic lowercase">Air Miles</span>
          </h2>
          <p className="mx-auto mt-3.5 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-[#18222F]/75 font-normal">
            Every piece from {siteConfig.brandName} is subjected to drop tests, handle strain simulations, and cobblestone roll testing before departure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {featuresData.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 sm:p-7 rounded-3xl bg-white border border-[#C87D3B]/20 shadow-sm transition-all duration-300 hover:border-[#C87D3B]/60 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-4 flex h-13 w-13 items-center justify-center rounded-2xl bg-[#C87D3B]/15 text-[#C87D3B] shadow-xs">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-base font-bold text-[#0D1B2A] tracking-tight">{feature.title}</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-[#18222F]/70 font-normal">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
