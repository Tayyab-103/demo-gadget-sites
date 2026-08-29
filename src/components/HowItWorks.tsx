"use client";

import React, { useState } from "react";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const waypoints = [
  {
    step: "01",
    shortLabel: "Configure Spec",
    icon: "🦺",
    title: "1. Configure Uniform Architecture",
    tagline: "Industrial Tactical, Medical & Chef Wear",
    desc: "Select tailored workforce uniforms engineered from 1000D Cordura® ripstop weaves, Silvadur™ antimicrobial silver-ion healthcare micro-twill, or organic CoolVent™ chef twills.",
    image: "/img/products/product-tactical-workwear.jpg",
    tags: ["1000D Ripstop", "Silvadur™ Antimicrobial", "DuPont Teflon™ Barrier"],
  },
  {
    step: "02",
    shortLabel: "Austin Calibration",
    icon: "⚙️",
    title: "2. Austin Seam Stress & Fit Calibration",
    tagline: "Triple-Needle Stitching & Stress Testing",
    desc: `Each uniform suite is calibrated in our Austin, Texas atelier, stress-tested on robotic seam rigs, and dispatched via ${siteConfig.shippingCarrier} within ${siteConfig.shippingPeriod} business days.`,
    image: "/img/uniform-tailoring-atelier.jpg",
    tags: ["Triple-Needle Seams", "Commercial Laundry Proof", `${siteConfig.shippingCarrier} Priority Air`],
  },
  {
    step: "03",
    shortLabel: "Workforce Deployment",
    icon: "🛡️",
    title: "3. Immediate Workforce Deployment",
    tagline: "24-Hour Shift Endurance Ready",
    desc: `Delivered straight to your facility with our risk-free ${siteConfig.trialPeriod || 14}-day workforce fit and performance guarantee.`,
    image: "/img/hero-uniforms.jpg",
    tags: ["OSHA / ASTM Standards", `${siteConfig.trialPeriod || 14}-Day Fit Guarantee`, "100% Satisfaction"],
  },
];

export default function HowItWorks() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = waypoints[activeIdx];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#FFFFFF] text-[#0A0F1D] border-t border-slate-200" id="how-it-works">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.24em] text-[#0A0F1D]/80 mb-3 select-none">
            OUTFITTING PROTOCOL
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#0A0F1D] leading-[1.08] mb-3">
            From The Atelier <br className="hidden sm:inline" />
            <span className="font-bold text-[#0A0F1D]">To Active Duty.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto font-normal">
            A 3-step precision protocol ensuring every uniform endures demanding shift environments.
          </p>
        </div>

        {/* Interactive Stepper Bar spanning full container width */}
        <div className="w-full max-w-4xl mx-auto mb-10 sm:mb-12">
          <div className="relative flex items-center justify-between">
            
            {/* Connecting Baseline */}
            <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-[2px] bg-slate-200 z-0" />
            
            {/* Active Highlight Fill Line */}
            <div
              className="absolute left-8 top-1/2 -translate-y-1/2 h-[2px] bg-[#0A0F1D] transition-all duration-500 z-0"
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
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-base sm:text-lg font-bold transition-all duration-300 shadow-xs ${
                      isActive
                        ? "bg-[#0A0F1D] text-white scale-110 ring-4 ring-slate-100"
                        : isPassed
                        ? "bg-[#0A0F1D] text-white"
                        : "bg-white text-slate-400 border border-slate-200 hover:border-[#0A0F1D]"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <span
                    className={`text-[0.68rem] sm:text-xs font-bold uppercase tracking-wider mt-2.5 transition-colors ${
                      isActive ? "text-[#0A0F1D]" : "text-slate-500 group-hover:text-[#0A0F1D]"
                    }`}
                  >
                    {item.shortLabel}
                  </span>
                </button>
              );
            })}

          </div>
        </div>

        {/* Central Spotlight Card spanning the full section width */}
        <div className="w-full bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 md:p-12 border border-slate-200 shadow-xs transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Image Spotlight */}
            <div className="md:col-span-6 relative aspect-[16/11] sm:aspect-[4/3] lg:aspect-[16/11] w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-200">
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
              <div className="absolute top-3.5 left-3.5 bg-[#0A0F1D]/90 text-white backdrop-blur-md px-3.5 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-wider">
                Stage {current.step} / 03
              </div>
            </div>

            {/* Right: Specs & Action Controls */}
            <div className="md:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-[#0A0F1D] uppercase tracking-widest">
                  STAGE {current.step}
                </span>
                <span className="text-xs text-slate-300">•</span>
                <span className="text-xs font-medium text-slate-500">
                  {current.tagline}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#0A0F1D] uppercase tracking-tight mb-4">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                {current.desc}
              </p>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {current.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white text-slate-700 border border-slate-200"
                  >
                    ✓ {tag}
                  </span>
                ))}
              </div>

              {/* Step Controls */}
              <div className="flex items-center gap-3 pt-6 border-t border-slate-200">
                <button
                  onClick={() => setActiveIdx((prev) => (prev === 0 ? waypoints.length - 1 : prev - 1))}
                  className="px-5 py-2.5 rounded-full border border-slate-300 text-xs font-bold text-[#0A0F1D] hover:bg-white transition-colors cursor-pointer"
                >
                  ← Prev Stage
                </button>
                <button
                  onClick={() => setActiveIdx((prev) => (prev === waypoints.length - 1 ? 0 : prev + 1))}
                  className="px-6 py-2.5 rounded-full bg-[#0A0F1D] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
                >
                  Next Stage →
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
