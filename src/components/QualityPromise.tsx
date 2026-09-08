"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const standards = [
  {
    tag: "01 / Material Integrity",
    title: "Eco-Certified Baltic Birch & Hardwood",
    description: "Sustainably harvested, splinter-free natural woods laser-cut with 0.05mm micro-tolerances for effortless assembly.",
  },
  {
    tag: "02 / Mechanical Precision",
    title: "Zero-Glue Mechanical Joinery",
    description: "Interlocking wooden gear trains, escapements, and linkages that function with fluid, rhythmic kinetic motion.",
  },
  {
    tag: "03 / Maker Assurance",
    title: `${siteConfig.trialPeriod || 14}-Day Play & Build Guarantee`,
    description: "Try every puzzle or game at your table with lifetime free missing part replacements and risk-free returns.",
  },
];

export default function QualityPromise() {
  return (
    <section className="py-14 md:py-20 bg-white border-b border-black/[0.06] font-sans" id="quality-promise">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-[#A36B42] text-xs font-bold uppercase tracking-[0.2em] block mb-1.5">
            Craftsmanship Code
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#191716]">
            The Wonderwick Standard
          </h2>
        </div>

        {/* 2-Column Split: Visual & 3 Standard Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Studio Visual */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-black/[0.08] bg-[#FAF8F5] group">
              <img
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=1200&auto=format&fit=crop"
                alt={`${siteConfig.brandName} craftsmanship standards`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1200&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#E5B887] block mb-0.5">
                  HEIRLOOM TOYS &amp; GAMES
                </span>
                <p className="text-xs sm:text-sm font-semibold text-white/90">
                  Crafted to challenge the mind and create lasting memories.
                </p>
              </div>
            </div>
          </div>

          {/* Right: 3 Standards List */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {standards.map((item) => (
              <div
                key={item.tag}
                className="bg-[#FAF8F5] p-6 md:p-7 rounded-2xl border border-black/[0.06] hover:border-[#A36B42]/50 transition-all shadow-2xs"
              >
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#A36B42] block mb-1">
                  {item.tag}
                </span>
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-[#191716] mb-1.5">
                  {item.title}
                </h3>
                <p className="text-black/70 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}