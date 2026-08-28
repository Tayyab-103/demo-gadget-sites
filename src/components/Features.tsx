"use client";

import React from "react";

const featuresData = [
  {
    title: "1000D Ballistic Cordura",
    description: "Constructed with tear-resistant, mil-spec ballistic weave that withstands asphalt scrapes, heavy loads, and relentless daily abuse.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Biomechanical Fit",
    description: "Contoured anatomical panels and multi-point micro-adjustment straps distribute load evenly across your torso without chafing or bounce.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "All-Weather Hydro-Shield",
    description: "TPU-welded storm seams, waterproof zippers, and antimicrobial air-mesh linings keep your gear dry and odor-free in extreme climates.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "14-Day Field Guarantee",
    description: "Take our gear onto the track, trail, or box. If it doesn't dramatically outperform your existing kit, return it for a complete 100% refund.",
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
          <span className="eyebrow justify-center mb-3">Performance Engineering</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-primary">
            Built For The <span className="text-secondary">Dedicated Athlete</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-neutral-text/70">
            Every Northcrest product is subjected to brutal mechanical stress tests and real-world athlete trials to ensure unyielding durability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6">
          {featuresData.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 sm:p-7 rounded-3xl bg-neutral-bg border border-black/5 shadow-sm transition-all duration-300 hover:border-secondary/40 hover:shadow-md hover:-translate-y-1"
            >
              <div className="mb-4 flex h-13 w-13 items-center justify-center rounded-2xl bg-secondary/15 text-secondary shadow-sm">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-base font-black text-primary uppercase tracking-tight">{feature.title}</h3>
              <p className="text-xs sm:text-sm leading-relaxed text-neutral-text/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
