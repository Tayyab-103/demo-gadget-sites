"use client";

import React from "react";

const steps = [
  {
    number: "01",
    label: "Step 01",
    title: "Select & Bundle Your Gear",
    description:
      "Choose from individual expedition pieces or curated travel bundles designed for short getaways up to month-long journeys.",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=900&q=80",
    detail: "Custom pack sizes with volume discounts",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    number: "02",
    label: "Step 02",
    title: "Encrypted Seamless Checkout",
    description:
      "Input your delivery address with zero hassle. All transactions are protected via 256-bit bank-grade encryption.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
    detail: "Fast 1-page checkout & order tracking",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    number: "03",
    label: "Step 03",
    title: "Direct Doorstep Dispatch",
    description:
      "Packed from our domestic fulfillment hub and dispatched via express carrier within 3-5 business days.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80",
    detail: "Real-time carrier tracking & 60-day trial",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-neutral-bg py-14 sm:py-20 md:py-28" id="how-it-works">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <span className="eyebrow justify-center mb-3">Seamless Experience</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary leading-tight">
            How Your Journey <span className="text-secondary">Begins</span>
          </h2>
          <div className="mx-auto mt-4 mb-4 w-10 h-px bg-secondary" />
          <p className="text-neutral-text/60 text-xs sm:text-sm md:text-base leading-relaxed">
            From discovering the ideal travel kit to unboxing at your doorstep, we have engineered every touchpoint for simplicity and peace of mind.
          </p>
        </div>

        {/* Step cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-xl border border-black/6 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-16/10 w-full overflow-hidden bg-[#F0EDE8]">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-[#141F1A] text-white text-[0.62rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[3px]">
                  {step.label}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-primary mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-text/65 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/6 flex items-center gap-2 text-[0.68rem] font-semibold text-secondary uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>{step.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
