"use client";

import React from "react";

const featuresData = [
  {
    title: "GOTS-Certified Organic",
    description: "Every fabric is spun from 100% certified organic long-staple cotton — no pesticides, no synthetic dyes, no compromises for delicate newborn skin.",
    icon: "🌿"
  },
  {
    title: "Sustainably Harvested Wood",
    description: "Our beechwood teethers and rattles are hand-sanded to a velvety smooth finish — naturally antimicrobial and completely splinter-free.",
    icon: "🪵"
  },
  {
    title: "Pediatrician Tested",
    description: "Every product passes age-appropriate safety testing for grip, sensory development, and BPA-free teething comfort — approved by child health experts.",
    icon: "✨"
  },
  {
    title: "30-Day Love-It Guarantee",
    description: "If your little one isn't completely delighted, return any item within 30 days for a full, no-fuss refund. That's our nursery promise.",
    icon: "💜"
  }
];

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-white" id="features">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="max-w-[600px] mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-[#7C3AED] font-bold text-xs uppercase tracking-widest mb-3">
            💜 The Lullaby Grove Difference
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#1E1040] mb-3 tracking-tight">Crafted Pure. Made With Heart.</h2>
          <p className="text-gray-600 text-sm md:text-base">
            We blend the finest organic materials with thoughtful, parent-conscious design to create baby essentials you can trust from the very first touch.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature, idx) => (
            <div
              className="bg-gradient-to-b from-[#F3EEFF] to-white rounded-3xl p-6 border border-purple-100 hover:border-purple-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
              key={idx}
            >
              <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-purple-200/20 -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-300/25 transition-colors" />
              <div className="mb-4 text-3xl">{feature.icon}</div>
              <h3 className="text-base font-black mb-2 text-[#1E1040]">{feature.title}</h3>
              <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
