"use client";

import React from "react";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function VideoShowcase() {
  return (
    <section className="py-16 sm:py-20 bg-[#F8FAFC] text-[#0A0F1D] border-t border-slate-200" id="apparel-craft">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.24em] text-[#0A0F1D]/70 mb-3 select-none">
            FABRIC &amp; CRAFTSMANSHIP
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#0A0F1D] leading-[1.08] mb-3">
            Carefully Crafted For <br className="hidden sm:inline" />
            <span className="font-bold text-[#0A0F1D]">Everyday Life.</span>
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto font-normal">
            Every garment in our collections is crafted with premium touch, gentle materials, and reinforced tailoring for every family member.
          </p>
        </div>

        {/* Dual Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#0A0F1D] text-white shadow-md min-h-[320px] sm:min-h-[360px] flex flex-col justify-end p-6 sm:p-7">
            <Image
              src="/img/hero2.jpg"
              alt="Soft breathable family knitwear"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/60 to-transparent" />

            <div className="relative z-10">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/15 text-[0.62rem] font-bold uppercase tracking-wider text-white mb-2">
                All-Day Comfort
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                Premium Breathable Weaves
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-2 font-normal">
                Ultra-soft natural fibers and ergonomic stretch blends tailored for active kids, relaxed weekends, and smart everyday moments.
              </p>
              <div className="text-[0.65rem] font-bold uppercase tracking-wider text-slate-400">
                Skin-Gentle &amp; Oeko-Tex® Safe Materials
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#0A0F1D] text-white shadow-md min-h-[320px] sm:min-h-[360px] flex flex-col justify-end p-6 sm:p-7">
            <Image
              src="/img/feature.jpg"
              alt="Family wardrobe durability and quality"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/60 to-transparent" />

            <div className="relative z-10">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-white/15 text-[0.62rem] font-bold uppercase tracking-wider text-white mb-2">
                Everyday Longevity
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                Reinforced Seams &amp; Color-Lock
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-2 font-normal">
                Double-stitched hems and fade-resistant dyes ensure family favorites retain their silhouette, soft feel, and color through countless washes.
              </p>
              <div className="text-[0.65rem] font-bold uppercase tracking-wider text-slate-400">
                50+ Cycle Wash Tested &amp; Pre-Shrunk
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
