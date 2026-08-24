"use client";

import React from "react";

const featuresData = [
  {
    title: "100% Organic Muslin",
    description: "Ultra-absorbent, hypoallergenic, and gentle on sensitive newborn skin without harsh chemicals.",
    icon: "🌿"
  },
  {
    title: "Pure Natural Beechwood",
    description: "Sustainably harvested, non-splintering smooth wood that is naturally antibacterial and soothing.",
    icon: "🪵"
  },
  {
    title: "Pediatrician Approved",
    description: "Tested for age-appropriate sensory development, grip safety, and BPA-free teething comfort.",
    icon: "✨"
  },
  {
    title: "30-Day Happy Return",
    description: "Loving our little treasures is guaranteed with our simple, hassle-free 30-day return policy.",
    icon: "💝"
  }
];

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-white" id="features">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="max-w-[600px] mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-pink-600 font-bold text-xs uppercase tracking-widest mb-3">
            🎀 The Moonberry Difference
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#2B2D42] mb-3 tracking-tight">Pure Comfort for Little Babes</h2>
          <p className="text-gray-600 text-sm md:text-base">
            We combine wholesome organic materials with parent-conscious design to create baby products you can trust.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature, idx) => (
            <div
              className="bg-[#FAF7F2] rounded-3xl p-6 border border-purple-100 hover:border-purple-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              key={idx}
            >
              <div className="mb-4 text-3xl">
                {feature.icon}
              </div>
              <h3 className="text-base font-black mb-2 text-[#2B2D42]">{feature.title}</h3>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed mb-0">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
