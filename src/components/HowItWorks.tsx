"use client";

import React from "react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    badge: "Selection",
    title: "Choose Your Gear",
    description: "Select from our pro-grade resistance bands, smart telemetry trackers, or percussion massagers.",
    image: "https://images.unsplash.com/photo-1616803689943-5601631c7fec?w=900&q=80",
    features: ["Custom bundle sizing", "Color-coded loads", "Direct factory pricing"],
  },
  {
    number: "02",
    badge: "Dispatch",
    title: "Fast Processing",
    description: "256-bit encrypted checkout. Orders are packed and staged for carrier dispatch within 24 hours.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
    features: ["Secure checkout", "24-Hour warehouse staging", "Instant tracking updates"],
  },
  {
    number: "03",
    badge: "Training",
    title: "Field-Ready Delivery",
    description: "Direct to your door in 3-5 days. Train with 60 days of risk-free coverage and a 1-year warranty.",
    image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=900&q=80",
    features: ["3-5 Day nationwide shipping", "60-Day money-back trial", "1-Year replacement guarantee"],
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-[#FAFAFA] py-14 sm:py-16 md:py-20" id="how-it-works">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="eyebrow justify-center mb-3">The Process</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0A0B0E]">
            How It <span className="text-gradient-dark">Works</span>
          </h2>
          <p className="mt-2 text-sm text-neutral-text/65">
            From our lab to your workout in three straightforward steps.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative flex flex-col rounded-3xl bg-white border border-black/[0.06] p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-black/15"
            >
              {/* Step Header */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-4xl sm:text-5xl font-black text-black/15 group-hover:text-[#0A0B0E] transition-colors duration-300">
                  {step.number}
                </span>
                <span className="rounded-full bg-black/5 px-3 py-1 text-[0.62rem] font-black uppercase tracking-wider text-[#0A0B0E] border border-black/5">
                  {step.badge}
                </span>
              </div>

              {/* Step Image */}
              <div className="relative aspect-16/10 w-full rounded-2xl overflow-hidden bg-neutral-bg mb-5 border border-black/5">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Text */}
              <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#0A0B0E] mb-2">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-text/70 leading-relaxed mb-5 flex-1">
                {step.description}
              </p>

              {/* Mini feature checkmarks */}
              <div className="pt-3 border-t border-black/5 flex flex-col gap-1.5">
                {step.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-xs text-neutral-text/80 font-medium">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#0A0B0E] text-white text-[0.6rem] font-black flex-shrink-0">
                      ✓
                    </span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}