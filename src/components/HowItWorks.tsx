"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const stages = [
  {
    step: "01",
    phase: "PHASE 01: ATELIER FORGING",
    title: "Hand-Forged & Micro-Calibrated",
    description:
      "Every whisk, scale, and shear begins in our workshop. Wires and blades are forged from high-purity Japanese & 304 stainless alloys, micro-honed, and weight-balanced for effortless hand comfort.",
    image: "/img/how-it-works-tools.jpg",
    badge: "100% Food-Safe Certified",
    specs: [
      { label: "Metallurgy", value: "304 & 420J2 Steel" },
      { label: "Heat Rating", value: "Up to 480°F (250°C)" },
      { label: "Balance", value: "Ergonomic Center-Weighted" },
    ],
  },
  {
    step: "02",
    phase: "PHASE 02: WORKSHOP DISPATCH",
    title: `Precision Packing & Tracked Delivery`,
    description:
      `Each piece is hand-inspected, nestled into custom shock-absorbent protective culinary packaging, and dispatched directly from our domestic facility via ${siteConfig.shippingCarrier} with full tracking.`,
    image: "/img/how-it-works-packaging.jpg",
    badge: `Free ${siteConfig.shippingCarrier} Tracked Delivery`,
    specs: [
      { label: "Carrier", value: `${siteConfig.shippingCarrier} Express` },
      { label: "Transit Time", value: `${siteConfig.shippingPeriod} Business Days` },
      { label: "Packaging", value: "Custom Protective Foam" },
    ],
  },
  {
    step: "03",
    phase: "PHASE 03: CULINARY MASTERY",
    title: `${siteConfig.trialPeriod}-Day Risk-Free Recipe Trial`,
    description:
      `Test our tools in your everyday kitchen recipes. Whip, measure, snip, and bake. If you aren't completely thrilled with the balance and performance, return them for an effortless 100% refund.`,
    image: "/img/how-it-works-mastery.jpg",
    badge: "Zero-Risk Guarantee",
    specs: [
      { label: "Trial Period", value: `${siteConfig.trialPeriod} Full Days` },
      { label: "Warranty", value: "365-Day Domestic Coverage" },
      { label: "Refund", value: "100% Money-Back Policy" },
    ],
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative bg-[#F8F6F2] py-16 sm:py-20 md:py-24 overflow-hidden border-t border-stone-200/80" id="foundry-process">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#E06830]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-stone-200/80 shadow-xs mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E06830]" />
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#121316]">
                THE FOUNDRY PROCESS &amp; JOURNEY
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#121316] tracking-tight leading-tight mb-3">
              From Our Workshop, <br />
              <span className="text-[#E06830] italic font-serif">Direct to Your Countertop</span>
            </h2>

            <p className="text-[#121316]/75 text-sm sm:text-base leading-relaxed">
              Experience the 3-stage journey of tools built by culinary artisans who believe kitchen essentials should last a lifetime.
            </p>
          </div>

          <div className="self-start md:self-end">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 bg-[#121316] text-white hover:bg-[#E06830] hover:text-white transition-all duration-300 py-3.5 px-7 rounded-full text-xs font-bold uppercase tracking-widest shadow-md hover:shadow-lg"
            >
              <span>Explore Collection</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Interactive Step Switcher Bar (Desktop & Tablet) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mb-10">
          {stages.map((stg, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={stg.step}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center gap-4 ${
                  isActive
                    ? "bg-[#121316] text-white border-[#121316] shadow-md scale-[1.02]"
                    : "bg-white text-[#121316] border-stone-200/90 hover:border-[#E06830]/50 shadow-xs"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-serif font-black flex-shrink-0 transition-colors ${
                    isActive
                      ? "bg-[#E06830] text-white"
                      : "bg-[#F8F6F2] text-[#121316] border border-stone-200"
                  }`}
                >
                  {stg.step}
                </div>

                <div className="min-w-0 flex-1">
                  <div className={`text-[0.62rem] font-bold uppercase tracking-widest truncate ${isActive ? "text-[#E06830]" : "text-[#121316]/50"}`}>
                    {stg.phase}
                  </div>
                  <div className={`text-xs sm:text-sm font-bold truncate ${isActive ? "text-white" : "text-[#121316]"}`}>
                    {stg.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Featured Showcase (2-Column Interactive Card) */}
        <div className="bg-white rounded-[2.5rem] border border-stone-200/90 p-6 sm:p-10 lg:p-12 shadow-lg transition-all duration-500 mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: HD Photo Showcase (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-md border border-stone-100 bg-stone-100 group">
                <img
                  src={stages[activeStep].image}
                  alt={stages[activeStep].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/hero-kitchen.jpg";
                  }}
                />

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="bg-[#121316] text-[#E06830] text-[0.62rem] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                    {stages[activeStep].badge}
                  </span>
                </div>

                {/* Bottom Step Indicator */}
                <div className="absolute bottom-3.5 right-3.5 z-10">
                  <span className="bg-white/90 backdrop-blur-md text-[#121316] text-[0.65rem] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    Stage {stages[activeStep].step} of 03
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Stage Narrative & Technical Specs (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between text-left">
              <div>
                <div className="inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-widest text-[#E06830] mb-2">
                  <span>✦</span>
                  <span>{stages[activeStep].phase}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#121316] mb-4 leading-tight">
                  {stages[activeStep].title}
                </h3>

                <p className="text-xs sm:text-sm text-[#121316]/80 leading-relaxed mb-6">
                  {stages[activeStep].description}
                </p>

                {/* Technical Specifications Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-[#F8F6F2] rounded-2xl border border-stone-200/80 mb-6">
                  {stages[activeStep].specs.map((sp, i) => (
                    <div key={i} className="text-left">
                      <div className="text-[0.6rem] uppercase tracking-wider font-bold text-[#121316]/50 mb-0.5">
                        {sp.label}
                      </div>
                      <div className="text-xs font-bold text-[#121316]">
                        {sp.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stage Progression Buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                <div className="flex items-center gap-2">
                  {stages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      aria-label={`View Stage ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        activeStep === i ? "w-8 bg-[#E06830]" : "w-2.5 bg-stone-200 hover:bg-stone-300"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setActiveStep((prev) => (prev === stages.length - 1 ? 0 : prev + 1))}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#121316] hover:text-[#E06830] transition-colors cursor-pointer"
                >
                  <span>{activeStep === stages.length - 1 ? "Replay Process (Stage 01)" : "Next Stage"}</span>
                  <span>→</span>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Trust Guarantee Banner */}
        <div className="bg-[#121316] text-white rounded-[2.5rem] p-6 sm:p-8 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-[#E06830] text-white flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-lg">
              🛡️
            </div>
            <div>
              <h4 className="text-white font-serif font-bold text-base sm:text-lg">
                The {siteConfig.brandName} 100% Culinary Guarantee
              </h4>
              <p className="text-white/80 text-xs sm:text-sm">
                Every piece is protected by our {siteConfig.trialPeriod}-day risk-free trial and 1-year workshop warranty against defects.
              </p>
            </div>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center justify-center gap-2 bg-[#E06830] text-white hover:bg-[#c85622] font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full transition-all duration-300 whitespace-nowrap shadow-md"
          >
            <span>Shop Kitchen Tools</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}