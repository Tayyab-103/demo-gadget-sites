"use client";

import React, { useState } from "react";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

interface TabContent {
  id: string;
  tabLabel: string;
  headline: string;
  specs: { icon: string; text: string }[];
  accentTitle: string;
  accentSub?: string;
  midImage: string;
  midImageAlt: string;
  rightImage: string;
  rightImageAlt: string;
  bottomRightTitle: string;
}

const tabData: TabContent[] = [
  {
    id: "silks",
    tabLabel: "NOBLE SILKS & CHARMEUSE",
    headline: "ROSETHORNE Atelier, the sanctuary where pure silk elegance connects",
    specs: [
      { icon: "✧", text: "22-Momme Grade 6A Pure Mulberry Silk" },
      { icon: "✂", text: "Delicate Enclosed French Seam Finishes" },
      { icon: "⚜", text: "Effortless Bias-Cut Parisian Silhouette" },
      { icon: "✦", text: "Hand-Rolled Hem Edge Detailing" },
      { icon: "✓", text: `${siteConfig.trialPeriod || 14}-Day Complimentary Fit Trial` },
    ],
    accentTitle: "Hand-draped in 48 hours",
    accentSub: "22-Momme Charmeuse",
    midImage: "/img/feature1.jpg",
    midImageAlt: "Rosethorne 22-Momme Silk Slip Dress",
    rightImage: "/img/couture-garment-rail.jpg",
    rightImageAlt: "Rosethorne Couture Garment Rail",
    bottomRightTitle: "Flawless liquid drape",
  },
  {
    id: "cashmere",
    tabLabel: "CASHMERE & OUTERWEAR",
    headline: "ROSETHORNE Tailoring, architectural warmth crafted for modern silhouettes",
    specs: [
      { icon: "✧", text: "Double-Faced Mongolian Cashmere & Virgin Wool" },
      { icon: "✂", text: "Architectural Notched Lapels & Sash Belt" },
      { icon: "⚜", text: "Horn-Accented Hand-Carved Fastenings" },
      { icon: "✦", text: "Weightless All-Weather Thermal Insulation" },
      { icon: "✓", text: "Complimentary White-Glove UPS Delivery" },
    ],
    accentTitle: "Tailored to perfection",
    accentSub: "Double-Faced Blend",
    midImage: "/img/feature2.jpg",
    midImageAlt: "Rosethorne Cashmere Belted Trench Coat",
    rightImage: "/img/fashion-atelier-craft.jpg",
    rightImageAlt: "Rosethorne Master Tailoring Craft",
    bottomRightTitle: "Architectural silhouette",
  },
  {
    id: "gowns",
    tabLabel: "BESPOKE GOWNS & LACE",
    headline: "ROSETHORNE Galas, heritage French lace layered over luminous organza",
    specs: [
      { icon: "✧", text: "Authentic Corded French Chantilly Lace" },
      { icon: "✂", text: "Layered Pure Silk Organza Petticoats" },
      { icon: "⚜", text: "Sculpted Corset Bodice with Hidden Boning" },
      { icon: "✦", text: "Hand-Embroidered Botanical Pearl Motifs" },
      { icon: "✓", text: "Private Styling & Sizing Concierge" },
    ],
    accentTitle: "Bespoke gala couture",
    accentSub: "Chantilly Lace",
    midImage: "/img/feature3.jpg",
    midImageAlt: "Rosethorne Chantilly Lace Gala Gown",
    rightImage: "/img/feature4.jpg",
    rightImageAlt: "Rosethorne Eveningwear Repertoire",
    bottomRightTitle: "Hand-rolled French lace",
  },
];

export default function Features() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const current = tabData[activeTab];

  return (
    <section
      id="features"
      className="py-20 sm:py-24 md:py-28 bg-[#FAF8F6] text-[#18121E] border-t border-[#C59B7E]/20 relative overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-[#C59B7E] block mb-3 select-none">
            THE ATELIER SPECIFICATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-[#18121E] leading-[1.12]">
            The full range of noble silhouettes <br className="hidden sm:inline" />
            <span className="italic text-[#C59B7E]">curated by our Austin atelier</span>
          </h2>
        </div>

        {/* Tab Navigation Filter Bar */}
        <div className="flex justify-center mb-10 sm:mb-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-1 sm:gap-2 p-1.5 rounded-2xl bg-white border border-[#C59B7E]/30 shadow-xs max-w-full">
            {tabData.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-[0.78rem] font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#18121E] text-[#E6C2AC] shadow-md"
                      : "text-slate-600 hover:text-[#18121E] hover:bg-[#FAF8F6]"
                  }`}
                >
                  {tab.tabLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Bento Grid matching the reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5 items-stretch">
          
          {/* ================= COLUMN 1 (Left Column - 4 cols) ================= */}
          <div className="md:col-span-4 flex flex-col gap-4 lg:gap-5 justify-between">
            
            {/* Top Box: Main Headline Statement */}
            <div className="bg-[#EFE6DD] text-[#18121E] rounded-3xl p-7 sm:p-8 lg:p-9 border border-[#C59B7E]/30 shadow-sm flex flex-col justify-between min-h-[220px] sm:min-h-[260px]">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#18121E] leading-[1.18] tracking-tight">
                {current.headline}
              </h3>
            </div>

            {/* Bottom Box: Spec List Table with Divided Rows */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#C59B7E]/25 shadow-sm flex flex-col justify-between flex-1">
              <div className="divide-y divide-[#C59B7E]/20">
                {current.specs.map((item, sIdx) => (
                  <div key={sIdx} className="py-3.5 first:pt-1 last:pb-1 flex items-center gap-3">
                    <span className="text-base text-[#8C654B] font-mono shrink-0 w-5 text-center">
                      {item.icon}
                    </span>
                    <span className="text-xs sm:text-[0.82rem] font-medium text-slate-800 leading-snug">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* ================= COLUMN 2 (Middle Column - 4 cols) ================= */}
          <div className="md:col-span-4 flex flex-col gap-4 lg:gap-5 justify-between">
            
            {/* Top Box: Bold Accent Color Card */}
            <div className="bg-[#C59B7E] text-[#18121E] rounded-3xl p-7 sm:p-8 border border-[#B88564] shadow-md flex flex-col items-center justify-center text-center min-h-[180px] sm:min-h-[210px] group">
              <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#18121E]/80 mb-1.5">
                ✦ ATELIER SIGNATURE
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#18121E] leading-tight">
                {current.accentTitle}
              </h4>
            </div>

            {/* Bottom Box: Tall Vertical Photograph */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#C59B7E]/30 flex-1 min-h-[300px] sm:min-h-[360px] bg-slate-900 group">
              <Image
                src={current.midImage}
                alt={current.midImageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18121E]/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[#18121E]/80 backdrop-blur-md text-[0.62rem] font-bold uppercase tracking-wider text-[#E6C2AC] border border-[#C59B7E]/40">
                  {current.accentSub}
                </span>
              </div>
            </div>

          </div>

          {/* ================= COLUMN 3 (Right Column - 4 cols) ================= */}
          <div className="md:col-span-4 flex flex-col gap-4 lg:gap-5 justify-between">
            
            {/* Top Box: Tall Vertical Atelier / Lifestyle Photograph */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#C59B7E]/30 flex-1 min-h-[300px] sm:min-h-[360px] bg-slate-900 group">
              <Image
                src={current.rightImage}
                alt={current.rightImageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18121E]/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-4 right-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[#18121E]/80 backdrop-blur-md text-[0.62rem] font-bold uppercase tracking-wider text-white border border-[#C59B7E]/40">
                  Austin Repertoire
                </span>
              </div>
            </div>

            {/* Bottom Box: Warm Champagne Sand Card with Bold Centered Text */}
            <div className="bg-[#EFE6DD] text-[#18121E] rounded-3xl p-7 sm:p-8 border border-[#C59B7E]/30 shadow-sm flex flex-col items-center justify-center text-center min-h-[180px] sm:min-h-[210px]">
              <span className="text-[0.65rem] font-bold uppercase tracking-widest text-[#8C654B] mb-1.5">
                ✦ QUALITY STANDARD
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#18121E] leading-tight">
                {current.bottomRightTitle}
              </h4>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
