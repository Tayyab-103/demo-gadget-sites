"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const testLabs = [
  {
    id: "impact",
    title: "Chassis Deflection & Drop Chamber",
    subtitle: "5,000 Free-Fall Impact Cycles",
    desc: "Rigid aerospace 6061-T6 aluminum shells tested with cold-forged corner reinforcements under extreme airport drop shocks.",
    metrics: [
      { label: "Shock Absorption", value: "99.4%" },
      { label: "Corner Load Rating", value: "250 KG" },
      { label: "Drop Heights", value: "2.5 Meters" },
    ],
    badge: "Impact Lab A-1",
    tag: "Chassis Rigidity",
  },
  {
    id: "whisper",
    title: "Hinomoto 360° Cobblestone Rig",
    subtitle: "150 KM Continuous Roll Endurance",
    desc: "Japanese dual-bearing spinner wheels calibrated over uneven cobblestone drums with under 36 dB acoustic whisper profile.",
    metrics: [
      { label: "Acoustic Noise", value: "< 36 dB" },
      { label: "Roll Distance", value: "150 KM" },
      { label: "Bearing Alloy", value: "Carbon Steel" },
    ],
    badge: "Acoustic Lab B-4",
    tag: "Silent Bearings",
  },
  {
    id: "pressure",
    title: "Atmospheric Seal & Lock Security",
    subtitle: "Dual TSA Integrated Combination Latches",
    desc: "Keyless 3-digit combination locking latches engineered to prevent forced pry attacks and eliminate vulnerable zipper teeth.",
    metrics: [
      { label: "Pry Resistance", value: "1,200 N" },
      { label: "TSA Certified", value: "Master Key 007" },
      { label: "Weather Seal", value: "IPX4 Barrier" },
    ],
    badge: "Security Lab S-9",
    tag: "Zipperless Defense",
  },
];

export default function VideoShowcase() {
  const [activeTab, setActiveTab] = useState(0);
  const activeLab = testLabs[activeTab];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#0D1B2A] text-white relative overflow-hidden" id="aviation-lab">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#C87D3B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C87D3B]/20 border border-[#C87D3B]/40 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#C87D3B] mb-3">
              <span>⚙</span>
              Engineering In Motion
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15] uppercase">
              Stress-Tested Beyond <br />
              <span className="text-[#C87D3B] font-light italic lowercase">Commercial Limits</span>
            </h2>
          </div>
          
          <p className="text-white/70 text-xs sm:text-sm md:text-base max-w-md leading-relaxed font-normal">
            Inside our Austin aviation testing facility, every Wanderloom chassis, wheel assembly, and TSA latch undergoes rigorous real-world torture protocols.
          </p>
        </div>

        {/* Dynamic Telemetry Test Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Interactive Video & Lab Simulator Display */}
          <div className="lg:col-span-7 relative rounded-3xl overflow-hidden border border-[#C87D3B]/30 shadow-2xl min-h-[360px] sm:min-h-[440px] flex flex-col justify-between bg-black/40 group">
            
            {/* Background Lab Photo */}
            <Image
              src="/img/engineering-motion-lab.jpg"
              alt="Wanderloom luggage robotic stress testing rig in aerospace facility"
              fill
              sizes="(max-width: 1024px) 100vw, 700px"
              className="object-cover transition-transform duration-700 group-hover:scale-103 opacity-80"
              priority
            />

            {/* Dark Gradient Shield */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/40 to-transparent" />

            {/* Top Telemetry Overlay */}
            <div className="relative z-10 p-5 sm:p-6 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 bg-[#0D1B2A]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C87D3B]/40 text-xs font-mono font-bold text-[#C87D3B]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                TELEMETRY ACTIVE • {activeLab.badge}
              </div>
              <span className="text-[0.68rem] font-mono uppercase tracking-widest text-white/70 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg">
                CALIBRATED IN AUSTIN, TX
              </span>
            </div>

            {/* Bottom Lab Stat Info */}
            <div className="relative z-10 p-6 sm:p-8">
              <span className="text-[0.68rem] font-mono uppercase tracking-widest text-[#C87D3B] font-bold block mb-1">
                {activeLab.tag}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight mb-2">
                {activeLab.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 max-w-lg leading-relaxed font-normal">
                {activeLab.desc}
              </p>
            </div>
          </div>

          {/* Right: Interactive 3-Lab Switcher & Live Benchmark Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3.5">
            {testLabs.map((lab, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={lab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`text-left p-5 sm:p-6 rounded-3xl transition-all duration-300 cursor-pointer border ${
                    isSelected
                      ? "bg-white text-[#0D1B2A] border-[#C87D3B] shadow-2xl scale-[1.02] ring-2 ring-[#C87D3B]/30"
                      : "bg-[#18222F]/60 text-white/90 border-white/10 hover:border-[#C87D3B]/50 hover:bg-[#18222F]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[0.65rem] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${
                        isSelected
                          ? "bg-[#C87D3B] text-white"
                          : "bg-white/10 text-[#C87D3B]"
                      }`}
                    >
                      Protocol 0{idx + 1}
                    </span>
                    <span className={`text-xs font-bold ${isSelected ? "text-[#C87D3B]" : "text-white/40"}`}>
                      {lab.subtitle}
                    </span>
                  </div>

                  <h4 className={`text-base sm:text-lg font-extrabold uppercase tracking-tight mb-3 ${isSelected ? "text-[#0D1B2A]" : "text-white"}`}>
                    {lab.title}
                  </h4>

                  {/* Benchmark Mini-Pills */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-current/10">
                    {lab.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <div className={`text-xs sm:text-sm font-black ${isSelected ? "text-[#C87D3B]" : "text-white"}`}>
                          {m.value}
                        </div>
                        <div className={`text-[0.6rem] uppercase tracking-wider font-semibold truncate ${isSelected ? "text-[#18222F]/60" : "text-white/60"}`}>
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
