"use client";

import React, { useState } from "react";

const pillars = [
  {
    number: "01",
    title: "Non-Toxic & Pet-Safe",
    tag: "BPA-Free & Food-Grade",
    badge: "100% Safe Certified",
    description:
      "Every component is verified for chemical safety, using hypoallergenic food-grade silicone and gentle rounded bristles with zero toxic binders or harsh dyes.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1000&q=80",
    quote: "“We hold our pet essentials to the exact same safety benchmarks as human wellness products.”",
  },
  {
    number: "02",
    title: "Vet Formulated Standards",
    tag: "Anatomical Support",
    badge: "Veterinarian Endorsed",
    description:
      "Developed in consultation with animal wellness practitioners to reduce grooming discomfort, relieve joint pressure, and promote active mental stimulation.",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=1000&q=80",
    quote: "“Contoured to respect natural canine and feline anatomy for effortless, calming daily care.”",
  },
  {
    number: "03",
    title: "Chew-Tested & Easy Wash",
    tag: "Reinforced Construction",
    badge: "Chew-Tested Durability",
    description:
      "Engineered with durable reinforced seams, bite-resistant outer shells, and removable machine-washable covers built for real everyday pet life.",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=1000&q=80",
    quote: "“Stress-tested to withstand energetic puppy play and sharp cat claws session after session.”",
  },
  {
    number: "04",
    title: "14-Day Risk-Free Trial",
    tag: "Happy Tail Guarantee",
    badge: "14-Day Trial Promise",
    description:
      "If your companion isn't completely delighted with their new Whisker Vale essential, our friendly concierge provides a zero-stress refund within 14 days.",
    image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?w=1000&q=80",
    quote: "“Complete peace of mind. If your pet doesn't love it, we'll make it right without question.”",
  },
];

export default function QualityPromise() {
  const [activePillar, setActivePillar] = useState(0);
  const current = pillars[activePillar];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden" id="quality-promise">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FAF8F5] px-4 py-1.5 rounded-full border border-stone-200/60 shadow-xs mb-3.5">
            <span className="text-xs">🐾</span>
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-secondary">
              SAFETY &amp; CRAFTSMANSHIP
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight mb-3">
            The Quality Your <span className="italic text-secondary font-serif">Pet Truly Deserves</span>
          </h2>

          <p className="text-neutral-text/70 text-sm sm:text-base leading-relaxed">
            Strict material benchmarks, veterinarian guidance, and real-world chew testing for complete peace of mind.
          </p>
        </div>

        {/* 2-Column Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* LEFT COLUMN: INTERACTIVE MEDIA DISPLAY (6 cols) */}
          <div className="lg:col-span-6 relative rounded-[2.5rem] overflow-hidden border border-stone-200/60 shadow-md min-h-[460px] lg:min-h-full flex flex-col justify-between group bg-[#FAF8F5]">
            {/* Dynamic Focused Image */}
            <img
              key={current.image}
              src={current.image}
              alt={current.title}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#182825]/90 via-black/25 to-transparent pointer-events-none" />

            {/* Top Badge */}
            <div className="relative z-10 p-6 sm:p-8">
              <span className="inline-flex items-center gap-2 bg-[#182825]/90 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full border border-white/20 shadow-lg">
                <span>🐾</span>
                <span>{current.badge}</span>
              </span>
            </div>

            {/* Bottom Frosted Stat / Quote Banner */}
            <div className="relative z-10 p-6 sm:p-8">
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-5 border border-white/40 shadow-xl">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-secondary block mb-1">
                  PILLAR {current.number} • {current.tag}
                </span>
                <p className="font-serif text-sm sm:text-base font-bold text-primary leading-snug">
                  {current.quote}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: MINIMAL PILLAR SELECTOR (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            
            {/* 4 Interactive Selector Cards */}
            <div className="flex flex-col gap-3.5 flex-1 justify-center">
              {pillars.map((pillar, idx) => {
                const isActive = activePillar === idx;

                return (
                  <div
                    key={pillar.number}
                    onClick={() => setActivePillar(idx)}
                    className={`rounded-2xl p-5 sm:p-6 border transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-[#FAF8F5] border-secondary/50 shadow-md shadow-secondary/5 translate-x-1"
                        : "bg-white border-stone-200/60 hover:border-stone-300 hover:bg-[#FDFBF9]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span
                          className={`font-serif text-base sm:text-lg font-bold px-2.5 py-1 rounded-lg transition-colors ${
                            isActive
                              ? "bg-secondary text-white"
                              : "bg-[#FAF8F5] text-neutral-text/40"
                          }`}
                        >
                          {pillar.number}
                        </span>

                        <div>
                          <h3 className="font-serif text-base sm:text-lg font-bold text-primary leading-snug">
                            {pillar.title}
                          </h3>
                          <span className="text-[0.68rem] text-secondary font-bold uppercase tracking-wider block mt-0.5">
                            {pillar.tag}
                          </span>
                        </div>
                      </div>

                      {/* Direction Arrow */}
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 flex-shrink-0 ${
                          isActive
                            ? "bg-secondary text-white translate-x-1"
                            : "bg-[#FAF8F5] text-neutral-text/40"
                        }`}
                      >
                        →
                      </span>
                    </div>

                    {/* Expandable Description */}
                    {isActive && (
                      <p className="mt-3.5 pt-3.5 border-t border-black/[0.06] text-xs sm:text-sm text-neutral-text/75 leading-relaxed animate-fadeIn">
                        {pillar.description}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Live Metric Bar */}
            <div className="mt-2 bg-[#FAF8F5] border border-stone-200/60 rounded-2xl py-4 px-6 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                <span className="text-xs font-bold text-primary">
                  Tested Across 10,000+ Happy Tail-Wags
                </span>
              </div>
              <span className="text-[0.65rem] uppercase font-bold text-secondary tracking-widest hidden sm:inline">
                Domestic Standards
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}