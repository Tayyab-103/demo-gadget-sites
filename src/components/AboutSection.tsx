"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const values = [
  {
    iconEmoji: "✦",
    title: "Master Forged Materials",
    description: "We use high-grade Japanese stainless steel and solid copper accents to ensure longevity, sharpness, and rust-proof durability.",
  },
  {
    iconEmoji: "⚖️",
    title: "Ergonomically Weighted",
    description: "Every handle is tested by working culinary artisans to achieve optimal weight distribution, eliminating hand fatigue during long prep.",
  },
  {
    iconEmoji: "📦",
    title: "Workshop-Direct Dispatch",
    description: "Direct-to-consumer dispatch from our domestic facility ensures premium artisan quality at accessible direct-foundry pricing.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#F8F6F2] text-[#121316] relative overflow-hidden border-t border-stone-200/80" id="about">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-stone-200/80 shadow-xs mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E06830]" />
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#121316]">
              OUR ATELIER &amp; PHILOSOPHY
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#121316] tracking-tight leading-tight mb-3">
            Born in the Workshop, <br />
            <span className="italic text-[#E06830] font-serif">Perfected for the Home Chef</span>
          </h2>
          
          <p className="text-[#121316]/75 text-xs sm:text-sm md:text-base leading-relaxed">
            At {siteConfig.brandName}, we believe that great cooking starts with reliable, beautifully weighted tools. Our mission is to bridge professional culinary craftsmanship with accessible home kitchen utility.
          </p>
        </div>

        {/* 2-Column Layout with /img/about-workshop.jpg & /img/how-it-works-mastery.jpg */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full mt-4 sm:mt-6">
          
          {/* Left Column: Dual Image Showcase (6 cols) */}
          <div className="lg:col-span-6 w-full">
            <div className="grid grid-cols-12 gap-4 items-center">
              
              {/* Primary Image: about-workshop.jpg (7 cols) */}
              <div className="col-span-7 relative aspect-[4/5] rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-xl border border-stone-200/90 bg-stone-100 group">
                <img
                  src="/img/about-workshop.jpg"
                  alt={`Inside ${siteConfig.brandName} Workshop`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/hero-kitchen.jpg";
                  }}
                />
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="bg-[#121316] text-white text-[0.62rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    Our Workshop
                  </span>
                </div>
              </div>

              {/* Secondary Image: how-it-works-mastery.jpg (5 cols) */}
              <div className="col-span-5 relative aspect-[4/5] rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-xl border border-stone-200/90 bg-stone-100 group">
                <img
                  src="/img/how-it-works-mastery.jpg"
                  alt="Culinary prep in action"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/hero-kitchen.jpg";
                  }}
                />
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="bg-[#E06830] text-white text-[0.62rem] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                    Culinary Flow
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Values & Story (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex flex-col gap-4 sm:gap-5">
              {values.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-stone-200/80 hover:border-[#E06830]/50 shadow-xs transition-all group">
                  <div className="w-11 h-11 rounded-xl bg-[#F8F6F2] border border-stone-200 text-xl flex items-center justify-center flex-shrink-0 text-[#E06830] shadow-2xs group-hover:scale-105 transition-transform">
                    <span>{item.iconEmoji}</span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#121316] mb-1 group-hover:text-[#E06830] transition-colors font-serif">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#121316]/75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Link button to shop */}
            <div className="mt-8 pt-6 border-t border-stone-200/80 flex items-center gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-[#121316] text-white hover:bg-[#E06830] hover:text-white transition-all duration-300 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md hover:shadow-lg"
              >
                <span>Explore Full Kitchen Collection</span>
                <span>→</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
