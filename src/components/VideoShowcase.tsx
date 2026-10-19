"use client";

import React from "react";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function VideoShowcase() {
  return (
    <section className="py-16 sm:py-20 bg-[#F8FAFC] text-[#0A0F1D] border-t border-slate-200" id="quality-check">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.24em] text-[#0A0F1D]/70 mb-3 select-none">
            QUALITY YOU CAN FEEL
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#0A0F1D] leading-[1.08] mb-3">
            Made For Busy <br className="hidden sm:inline" />
            <span className="font-bold text-[#0A0F1D]">Family Days.</span>
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto font-normal">
            Every style is checked for softness, fit, and durability so it&apos;s ready for real life with kids.
          </p>
        </div>

        {/* Dual Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#0A0F1D] text-white shadow-md min-h-[320px] sm:min-h-[360px] flex flex-col justify-end p-6 sm:p-7">
            <Image
              src="/img/cta.jpg"
              alt="Soft cotton family clothing"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/60 to-transparent" />

            <div className="relative z-10">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/15 text-[0.62rem] font-bold uppercase tracking-wider text-white mb-2">
                Softness Check
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                Gentle On Little Skin
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-2 font-normal">
                Breathable cotton and tagless labels keep babies and kids comfortable from morning to bedtime.
              </p>
              <div className="text-[0.65rem] font-bold uppercase tracking-wider text-slate-400">
                Skin-Friendly Fabrics
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#0A0F1D] text-white shadow-md min-h-[320px] sm:min-h-[360px] flex flex-col justify-end p-6 sm:p-7">
            <Image
              src="/img/feature.jpg"
              alt="Kids clothing ready for play"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/60 to-transparent" />

            <div className="relative z-10">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/15 text-[0.62rem] font-bold uppercase tracking-wider text-white mb-2">
                Play-Proof
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                Reinforced Where It Counts
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-2 font-normal">
                Double-stitched seams and reinforced knees stand up to climbing, crawling, and endless playground fun.
              </p>
              <div className="text-[0.65rem] font-bold uppercase tracking-wider text-slate-400">
                Wash-Tested For Lasting Wear
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
