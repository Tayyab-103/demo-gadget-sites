"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const heritagePillars = [
  {
    id: "fibers",
    number: "01",
    title: "Noble Natural Fibers",
    tag: "Grade 6A Mulberry Silk & Mongolian Cashmere",
    desc: "We exclusively source certified 22-momme pure long-filament silk and double-faced cashmere blends, honoring materials that breathe, drape, and endure gracefully.",
    icon: "✧",
  },
  {
    id: "draping",
    number: "02",
    title: "Master Living-Form Draping",
    tag: "Bias-Cut Precision & Enclosed French Seams",
    desc: "Sculpted directly onto living forms rather than flat mannequins. Finished with delicate hand-rolled hems and fully enclosed French interior seams for whisper-soft comfort.",
    icon: "✂",
  },
  {
    id: "standards",
    number: "03",
    title: "White-Glove Atelier Protocol",
    tag: "24-Point Inspection & Bespoke Packaging",
    desc: "Every individual garment undergoes rigorous quality auditing before dispatch in our signature protective garment enclosure, backed by a 14-day home fit trial.",
    icon: "⚜",
  },
];

export default function AboutUs() {
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section
      id="about"
      className="py-20 sm:py-24 md:py-28 bg-[#FAF8F6] text-[#18121E] border-t border-[#C59B7E]/20 relative overflow-hidden"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-[#C59B7E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-96 h-96 bg-[#E6C2AC]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-[#C59B7E] block mb-3 select-none">
            THE ATELIER HERITAGE
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-[#18121E] leading-[1.12] mb-4">
            The Haute Couture Heritage, <br className="hidden sm:inline" />
            <span className="italic text-[#C59B7E]">Mastercrafted For Modern Living.</span>
          </h2>
          
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-light max-w-2xl mx-auto">
            At {siteConfig.brandName}, we combine classical French tailoring traditions with architectural lines and noble fibers — crafting garments that celebrate timeless sophistication.
          </p>
        </div>

        {/* Main Grid: Visual Atelier Showcase (Left) + Interactive Pillars (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (6 cols): Layered Visual Composition */}
          <div className="lg:col-span-6 relative">
            
            {/* Primary Main Image Frame */}
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-3xl bg-slate-900 shadow-2xl border-2 border-[#C59B7E]/30 group">
              <Image
                src="/img/heritage.jpg"
                alt={`${siteConfig.brandName} heritage patternmaking studio`}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18121E]/70 via-transparent to-transparent pointer-events-none" />
              
              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#E6C2AC] bg-[#18121E]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C59B7E]/40">
                  Austin Patternmaking Atelier
                </span>
                <span className="text-xs font-mono text-white/90">
                  ✦ Pure Haute Couture
                </span>
              </div>
            </div>

            {/* Floating Detail Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl border border-[#C59B7E]/30 shadow-xl items-center gap-4 max-w-xs backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-[#18121E] text-[#C59B7E] flex items-center justify-center font-serif text-xl font-bold shrink-0">
                ⚜
              </div>
              <div>
                <div className="text-xs font-serif font-bold text-[#18121E]">
                  Bias-Cut Artistry
                </div>
                <div className="text-[0.65rem] text-slate-500 font-light mt-0.5 leading-snug">
                  Engineered with enclosed French seams for effortless liquid draping.
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (6 cols): Interactive Heritage Pillars */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            
            {heritagePillars.map((pillar, idx) => {
              const isActive = activePillar === idx;
              return (
                <div
                  key={pillar.id}
                  onClick={() => setActivePillar(idx)}
                  className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-white border-[#C59B7E] shadow-xl scale-[1.01]"
                      : "bg-white/70 border-[#C59B7E]/20 hover:border-[#C59B7E]/50 hover:bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold transition-colors ${
                          isActive
                            ? "bg-[#18121E] text-[#E6C2AC]"
                            : "bg-[#FAF8F6] text-[#8C654B] border border-[#C59B7E]/30"
                        }`}
                      >
                        {pillar.number}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#18121E]">
                        {pillar.title}
                      </h3>
                    </div>
                    <span className="text-sm text-[#C59B7E] font-bold">
                      {pillar.icon}
                    </span>
                  </div>

                  <div className="text-[0.68rem] font-bold uppercase tracking-wider text-[#8C654B] mb-2 pl-10">
                    {pillar.tag}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light pl-10">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-4 sm:pl-2">
              <Link
                href="/about"
                className="inline-flex items-center justify-center font-bold text-xs sm:text-sm text-white bg-[#18121E] hover:bg-[#C59B7E] hover:text-[#18121E] transition-all py-3.5 px-8 rounded-full text-center uppercase tracking-wider shadow-md"
              >
                The Full Atelier Story ↗
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center text-xs sm:text-sm font-semibold text-[#18121E] hover:text-[#8C654B] transition-colors py-3.5 px-4 underline underline-offset-8 decoration-1 decoration-[#C59B7E]/50 uppercase tracking-wider"
              >
                Shop Collection
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
