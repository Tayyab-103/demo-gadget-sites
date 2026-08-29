"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const waypoints = [
  {
    step: "01",
    shortLabel: "Curate Gear",
    icon: "🧳",
    title: "Select Your Expedition System",
    tagline: "Aerospace Aluminum & Full-Grain Leather",
    desc: "Choose between anodized aluminum carry-on spinners, Italian leather weekender duffles, or modular vacuum compression suites.",
    image: "/img/products/aviator-aluminum-spinner.jpg",
    tags: ["6061-T6 Alloy", "Italian Full-Grain", "Modular Cubes"],
  },
  {
    step: "02",
    shortLabel: "Austin Testing",
    icon: "⚙️",
    title: "Austin Calibration & Dispatch",
    tagline: "Robotic Roll & TSA Verification",
    desc: `Each piece is calibrated in Austin, Texas, tested on 360° wheel rigs, and shipped via ${siteConfig.shippingCarrier} within ${siteConfig.shippingPeriod} business days.`,
    image: "/img/travel-atelier-craft.jpg",
    tags: ["Hinomoto 360°", "TSA Lock Verified", `${siteConfig.shippingCarrier} Tracked`],
  },
  {
    step: "03",
    shortLabel: "Flight Ready",
    icon: "✈️",
    title: "Global In-Flight Deployment",
    tagline: "Worldwide Overhead Bin Clearance",
    desc: `Universal airline carry-on compliant across 150+ airlines, backed by our risk-free ${siteConfig.trialPeriod || 14}-day flight guarantee.`,
    image: "/img/hero-luggage-travel.jpg",
    tags: ["IATA Compliant", `${siteConfig.trialPeriod || 14}-Day Flight Trial`, "100% Refund Guarantee"],
  },
];

export default function HowItWorks() {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = waypoints[activeIdx];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#F8F6F0] text-[#18222F] border-t border-[#C87D3B]/20" id="how-it-works">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C87D3B]/10 border border-[#C87D3B]/30 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#C87D3B] mb-3">
            <span>✈</span>
            The Wanderloom Standard
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0D1B2A] leading-[1.15] uppercase">
            From The Hangar <span className="text-[#C87D3B] font-light italic lowercase">To Destination</span>
          </h2>
          <p className="text-[#18222F]/70 text-xs sm:text-sm md:text-base mt-2.5 max-w-md mx-auto font-normal">
            A three-waypoint transit protocol built for effortless global journeys.
          </p>
        </div>

        {/* Interactive Flight Path Tracker (Horizontal Stepper Line) */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="relative flex items-center justify-between">
            
            {/* Connecting Baseline */}
            <div className="absolute left-8 right-8 top-1/2 -translate-y-1/2 h-[2px] bg-[#C87D3B]/25 z-0" />
            
            {/* Active Highlight Fill Line */}
            <div
              className="absolute left-8 top-1/2 -translate-y-1/2 h-[2px] bg-[#C87D3B] transition-all duration-500 z-0"
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
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-base sm:text-lg font-bold transition-all duration-300 shadow-md ${
                      isActive
                        ? "bg-[#0D1B2A] text-white border-2 border-[#C87D3B] scale-110 ring-4 ring-[#C87D3B]/20"
                        : isPassed
                        ? "bg-[#C87D3B] text-white border-2 border-[#C87D3B]"
                        : "bg-white text-[#18222F]/50 border-2 border-[#C87D3B]/30 hover:border-[#C87D3B]"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <span
                    className={`text-[0.68rem] sm:text-xs font-bold uppercase tracking-wider mt-2.5 transition-colors ${
                      isActive ? "text-[#0D1B2A]" : "text-[#18222F]/60 group-hover:text-[#0D1B2A]"
                    }`}
                  >
                    {item.shortLabel}
                  </span>
                </button>
              );
            })}

          </div>
        </div>

        {/* Central Interactive Waypoint Spotlight Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#C87D3B]/25 shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
            
            {/* Left: Image Spotlight */}
            <div className="md:col-span-6 relative aspect-[16/11] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#F8F6F0] border border-[#C87D3B]/20 shadow-inner">
              <img
                src={current.image}
                alt={current.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=800&q=80";
                }}
              />
              <div className="absolute top-3 left-3 bg-[#0D1B2A]/90 text-white backdrop-blur-md px-3 py-1 rounded-full text-[0.62rem] font-bold uppercase tracking-wider border border-[#C87D3B]/30">
                Waypoint {current.step} / 03
              </div>
            </div>

            {/* Right: Clean Specs & Action */}
            <div className="md:col-span-6 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-bold text-[#C87D3B] uppercase tracking-widest">
                  STAGE {current.step}
                </span>
                <span className="text-xs text-[#18222F]/40">•</span>
                <span className="text-xs font-semibold text-[#18222F]/60">
                  {current.tagline}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0D1B2A] uppercase tracking-tight mb-3">
                {current.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#18222F]/75 leading-relaxed mb-5 font-normal">
                {current.desc}
              </p>

              {/* Minimal Tag Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {current.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[0.68rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F8F6F0] text-[#0D1B2A] border border-[#C87D3B]/20"
                  >
                    ✓ {tag}
                  </span>
                ))}
              </div>

              {/* Step Navigation Controls */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#C87D3B]/15">
                <button
                  onClick={() => setActiveIdx((prev) => (prev === 0 ? waypoints.length - 1 : prev - 1))}
                  className="px-4 py-2 rounded-full border border-[#C87D3B]/30 text-xs font-bold text-[#0D1B2A] hover:bg-[#F8F6F0] transition-colors cursor-pointer"
                >
                  ← Prev
                </button>
                <button
                  onClick={() => setActiveIdx((prev) => (prev === waypoints.length - 1 ? 0 : prev + 1))}
                  className="px-5 py-2 rounded-full bg-[#C87D3B] hover:bg-[#D98745] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  Next Waypoint →
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
