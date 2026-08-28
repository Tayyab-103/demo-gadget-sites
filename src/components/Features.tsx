"use client";

import React from "react";

const featuresData = [
  {
    title: "Lead-Free Certified",
    description: "Formulated from ultra-dense forged brass alloy compliant with Safe Drinking Water Act & NSF/ANSI 61/372 standards.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "1,200 PSI Rating",
    description: "Precision-tapered NPT threading and reinforced sidewall casting engineered to withstand extreme hydraulic surges.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Hydronic Heat Rated",
    description: "Rated for continuous 250°F boiler, radiator, and hydronic loop temperatures with thermal-expansion resistant seals.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z" />
      </svg>
    ),
  },
  {
    title: "Contractor Pricing",
    description: "Volume-optimized multi-piece bundles designed to cut fitting and valve costs on residential and commercial builds.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82Z" />
        <circle cx="7" cy="7" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-14 sm:py-16 md:py-20 lg:py-24 bg-white" id="features">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 text-center md:mb-16">
          <span className="eyebrow justify-center mb-3">Engineering Standards</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-primary">
            Forged for <span className="text-secondary">Reliability</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-neutral-text/70">
            Every Copperline fitting, valve, and supply line is machined to zero-tolerance specifications to prevent pinhole leaks and pressure drops.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {featuresData.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 sm:p-7 rounded-2xl bg-neutral-bg border border-black/5 shadow-sm transition-all duration-300 hover:border-secondary/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-base font-bold text-primary">{feature.title}</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-neutral-text/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
