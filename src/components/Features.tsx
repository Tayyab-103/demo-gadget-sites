"use client";

import React from "react";
import Link from "next/link";

const features = [
  {
    id: "01",
    title: "High-Carbon S2 Alloy Steel",
    category: "Magnetic Screwdriver Bits",
    spec: "1/4\" Hex • 65mm • Phosphate Finish",
    description: "Engineered with industrial-grade high-carbon steel and treated with black phosphate for superior corrosion resistance and anti-camout grip on breaker panels.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    id: "02",
    title: "24AWG Pure Copper Core",
    category: "Continuous Power Adapters",
    spec: "AC 100-240V • DC 5V 1A • 20FT",
    description: "Constructed with multi-strand 24AWG pure oxygen-free copper core delivering clean, constant voltage without line-drop across commercial cable runs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    id: "03",
    title: "6000-Count True-RMS Precision",
    category: "Digital Multimeter Testers",
    spec: "600V AC/DC • 60MΩ • Backlit LCD",
    description: "High-speed auto-ranging diagnostic multimeter with True-RMS capability to measure non-linear loads and transient spikes with laboratory precision.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 12h8" />
        <path d="M12 8v8" />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Silicone Armor & Dielectric Isolation",
    category: "Jobsite Protection",
    spec: "CAT IV 600V • 2M Drop-Proof",
    description: "Heavy-duty ABS housing wrapped in shock-absorbent silicone sheathing, protecting sensitive diagnostic microchips from accidental drops and arc flash risks.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "05",
    title: "NIST-Traceable Factory Calibration",
    category: "Certified Reliability",
    spec: "99.9% Accuracy Benchmark",
    description: "Every diagnostic instrument undergoes multi-point electronic calibration before dispatch to guarantee immediate compliance for facility commissioning.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: "06",
    title: "1-2 Day Dispatch & Full Warranty",
    category: "Commercial Assurance",
    spec: "UPS Tracked • 14-Day Trial Period",
    description: "Rapid warehouse fulfillment nationwide backed by direct electrical engineering assistance, hassle-free returns, and comprehensive 1-year product warranty.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="py-12 sm:py-16 lg:py-24 bg-[#F5F5F7] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#5B6BF0]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/5 shadow-2xs mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5B6BF0]" />
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-neutral-text/60">
                ENGINEERING EXCELLENCE
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#111] leading-[1.1]">
              Built For Precision &amp; <br />
              <span className="text-neutral-text/45 font-medium not-italic">
                Jobsite Resilience
              </span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-neutral-text/60 max-w-md leading-relaxed">
            Every electrical part and diagnostic device in our catalog is engineered to withstand demanding field conditions and exceed industrial electrical benchmarks.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {features.map((feat) => (
            <div
              key={feat.id}
              className="bg-white rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between border border-black/[0.04] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                {/* Top Row: Icon + Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#F4F4F6] text-[#111] group-hover:bg-[#111] group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-2xs">
                    {feat.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-text/30 group-hover:text-[#5B6BF0] transition-colors">
                    {feat.id}
                  </span>
                </div>

                {/* Badges */}
                <div className="mb-2">
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider text-[#5B6BF0] font-mono">
                    {feat.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#111] tracking-tight mb-2.5 leading-snug group-hover:text-[#5B6BF0] transition-colors">
                  {feat.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-neutral-text/60 leading-relaxed font-normal">
                  {feat.description}
                </p>
              </div>

              {/* Bottom Specification Pill */}
              <div className="pt-6 mt-6 border-t border-black/[0.04] flex items-center justify-between">
                <span className="text-[0.68rem] font-mono font-semibold text-neutral-text/50 bg-[#F4F4F6] px-3 py-1 rounded-full">
                  {feat.spec}
                </span>
                <span className="text-xs font-bold text-[#111] opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Reassurance Banner */}
        <div className="mt-10 sm:mt-12 bg-[#111] text-white rounded-[2rem] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg flex-shrink-0">
              ⚡
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                Require Certified Specifications or Bulk Supply?
              </h4>
              <p className="text-xs text-white/60">
                Speak directly with an electrical engineer for custom volume procurement.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="bg-white hover:bg-[#5B6BF0] hover:text-white text-[#111] text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-colors flex-shrink-0 shadow-sm"
          >
            Contact Engineering
          </Link>
        </div>

      </div>
    </section>
  );
}
