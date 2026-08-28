"use client";

import React from "react";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function VideoShowcase() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-black border-t border-black/6" id="athlete-lab">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Green Accent */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 text-[0.68rem] font-mono font-bold uppercase tracking-widest text-black/60 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            Apparel Lab Motion
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary leading-[1.08]">
            Engineered For The <span className="text-secondary">Crucial Reps</span>
          </h2>
          <p className="text-black/65 text-xs sm:text-sm md:text-base leading-relaxed mt-3 max-w-xl mx-auto font-normal">
            Real training sessions from our Austin, TX conditioning facility. Witness how our compression baselayers and hoodies withstand max-effort output.
          </p>
        </div>

        {/* Dual Dynamic Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          
          {/* Card 1: Power & Compression */}
          <div className="group relative overflow-hidden rounded-3xl bg-black text-white shadow-xl border border-black/5 min-h-[420px] flex flex-col justify-end p-7 transition-all duration-300 hover:shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1000&q=80"
              alt="Athletes training in compression activewear"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-secondary text-[0.62rem] font-black uppercase tracking-widest text-black mb-3 shadow-md">
                Thermo-Regulation &amp; Power
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-2">
                Maximum Cadence &amp; Moisture Control
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
                High-velocity conditioning and track drills engineered with zero-chafe flatlock seams and active thermal wicking.
              </p>
              <div className="flex items-center gap-2 text-[0.68rem] font-mono font-bold uppercase tracking-wider text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
                Zero-Chafe Flatlock Seams
              </div>
            </div>
          </div>

          {/* Card 2: Technical Outerwear */}
          <div className="group relative overflow-hidden rounded-3xl bg-black text-white shadow-xl border border-black/5 min-h-[420px] flex flex-col justify-end p-7 transition-all duration-300 hover:shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=1000&q=80"
              alt="Technical fleece hoodie conditioning"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

            <div className="relative z-10">
              <span className="inline-block px-3 py-1 rounded-full bg-secondary text-[0.62rem] font-black uppercase tracking-widest text-black mb-3 shadow-md">
                Outerwear &amp; Conditioning
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-2">
                Double-Knit ApexKnit Warmth
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
                Pre-competition warmups and heavy training blocks engineered with ergonomic articulated shoulder panelling.
              </p>
              <div className="flex items-center gap-2 text-[0.68rem] font-mono font-bold uppercase tracking-wider text-secondary">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
                Four-Way Tech Stretch
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
