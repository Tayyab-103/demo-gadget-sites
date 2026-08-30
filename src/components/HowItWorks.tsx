"use client";

import React, { useState } from "react";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const waypoints = [
  {
    step: "01",
    shortLabel: "Noble Fibers",
    icon: "✨",
    title: "1. Noble Fabric Sourcing",
    tagline: "22-Momme Mulberry Silk & Chantilly Lace",
    desc: "Every creation begins with certified pure mulberry silk charmeuse, double-faced virgin wool cashmere blends, and authentic corded French Chantilly lace woven on heritage looms.",
    image: "/img/products/product-silk-slip.jpg",
    tags: ["22-Momme Mulberry Silk", "Mongolian Cashmere", "French Corded Lace"],
  },
  {
    step: "02",
    shortLabel: "Artisan Draping",
    icon: "🪡",
    title: "2. Atelier Draping & French Seams",
    tagline: "Bias-Cut Precision & Hand-Rolled Finishes",
    desc: `In our design atelier, master patternmakers drape each garment on living forms. Finished with delicate enclosed French seams and hand-rolled hems for an effortlessly fluid drape.`,
    image: "/img/fashion-atelier-craft.jpg",
    tags: ["Bias-Cut Silhouette", "Enclosed French Seams", "Hand-Rolled Hems"],
  },
  {
    step: "03",
    shortLabel: "Couture Dispatch",
    icon: "⚜️",
    title: "3. White-Glove Delivery & Fit Trial",
    tagline: "Dispatched in Signature Garment Enclosures",
    desc: `Dispatched via ${siteConfig.shippingCarrier} within ${siteConfig.shippingPeriod} business days with our risk-free ${siteConfig.trialPeriod || 14}-day fit and drape satisfaction guarantee.`,
    image: "/img/couture-garment-rail.jpg",
    tags: [`${siteConfig.shippingCarrier} Priority Air`, `${siteConfig.trialPeriod || 14}-Day Fit Guarantee`, "100% Satisfaction"],
  },
];

export default function HowItWorks() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = waypoints[activeIdx];

  return (
    <section className="py-20 sm:py-24 md:py-28 bg-[#FFFFFF] text-[#18121E] border-t border-[#C59B7E]/20" id="how-it-works">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-[#C59B7E] block mb-2 select-none">
            THE ATELIER PROTOCOL
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-[#18121E] leading-[1.12] mb-3">
            From The Drawing Board <br className="hidden sm:inline" />
            <span className="italic text-[#C59B7E]">To Your Wardrobe.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
            A 3-step artisanal process ensuring every silhouette embodies timeless sophistication and couture quality.
          </p>
        </div>

        {/* Interactive Stepper Bar */}
        <div className="w-full max-w-3xl mx-auto mb-12">
          <div className="relative flex items-center justify-between">
            {/* Connecting Baseline */}
            <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-[2px] bg-slate-200 z-0" />
            
            {/* Active Highlight Fill Line */}
            <div
              className="absolute left-8 top-1/2 -translate-y-1/2 h-[2px] bg-[#C59B7E] transition-all duration-500 z-0"
              style={{
                width: activeIdx === 0 ? "0%" : activeIdx === 1 ? "50%" : "calc(100% - 64px)",
              }}
            />

            {/* 3 Interactive Waypoint Buttons */}
            {waypoints.map((item, idx) => {
              const isActive = activeIdx === idx;
              const isPassed = activeIdx >= idx;

              return (
                <button
                  key={item.step}
                  onClick={() => setActiveIdx(idx)}
                  className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-base sm:text-lg font-bold transition-all duration-300 shadow-sm ${
                      isActive
                        ? "bg-[#18121E] text-[#C59B7E] scale-110 ring-4 ring-[#C59B7E]/30"
                        : isPassed
                        ? "bg-[#18121E] text-white"
                        : "bg-white text-slate-400 border border-slate-200 hover:border-[#C59B7E]"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <span
                    className={`text-[0.68rem] sm:text-xs font-semibold uppercase tracking-wider mt-2.5 transition-colors ${
                      isActive ? "text-[#18121E] font-bold" : "text-slate-500 group-hover:text-[#18121E]"
                    }`}
                  >
                    {item.shortLabel}
                  </span>
                </button>
              );
            })}

          </div>
        </div>

        {/* Central Spotlight Card */}
        <div className="w-full bg-[#FAF8F6] rounded-3xl p-6 sm:p-10 md:p-12 border border-[#C59B7E]/20 shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Image Spotlight */}
            <div className="md:col-span-6 relative aspect-[16/11] sm:aspect-[4/3] lg:aspect-[16/11] w-full rounded-2xl overflow-hidden bg-slate-900 border border-[#C59B7E]/20">
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute top-3.5 left-3.5 bg-[#18121E]/90 text-[#E6C2AC] backdrop-blur-md px-3.5 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-wider border border-[#C59B7E]/30">
                Phase {current.step} / 03
              </div>
            </div>

            {/* Right: Specs & Action Controls */}
            <div className="md:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-[#C59B7E] uppercase tracking-widest">
                  PHASE {current.step}
                </span>
                <span className="text-xs text-slate-300">•</span>
                <span className="text-xs font-medium text-slate-500">
                  {current.tagline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#18121E] tracking-tight mb-4">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-light">
                {current.desc}
              </p>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {current.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white text-[#18121E] border border-[#C59B7E]/25 shadow-2xs"
                  >
                    ✓ {tag}
                  </span>
                ))}
              </div>

              {/* Step Controls */}
              <div className="flex items-center gap-3 pt-6 border-t border-slate-200">
                <button
                  onClick={() => setActiveIdx((prev) => (prev === 0 ? waypoints.length - 1 : prev - 1))}
                  className="px-5 py-2.5 rounded-full border border-slate-300 text-xs font-bold text-[#18121E] hover:bg-white transition-colors cursor-pointer uppercase tracking-wider"
                >
                  ← Prev Phase
                </button>
                <button
                  onClick={() => setActiveIdx((prev) => (prev === waypoints.length - 1 ? 0 : prev + 1))}
                  className="px-6 py-2.5 rounded-full bg-[#18121E] hover:bg-[#2A2034] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md"
                >
                  Next Phase →
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
