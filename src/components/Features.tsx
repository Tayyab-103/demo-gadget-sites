"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const features = [
  {
    iconEmoji: "🌿",
    title: "100% Non-Toxic & Pet-Safe",
    description:
      "Engineered without BPA, phthalates, or harsh materials to ensure safe daily chewing, grooming, and travel.",
  },
  {
    iconEmoji: "🩺",
    title: "Veterinarian Endorsed Design",
    description:
      "Anatomically contoured products that reduce pet travel anxiety and promote oral hygiene and clean living spaces.",
  },
  {
    iconEmoji: "📦",
    title: `Fast ${siteConfig.shippingCarrier} Tracked Delivery`,
    description:
      `Dispatched within 1–2 business days in secure protective packaging with live real-time tracking straight to your door.`,
  },
  {
    iconEmoji: "⭐",
    title: `${siteConfig.trialPeriod}-Day Happy Tail Guarantee`,
    description:
      "If for any reason you or your pet are not 100% delighted, our concierge team will make it right with an easy refund.",
  },
];

export default function Features() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden" id="features">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-neutral-bg px-4 py-1.5 rounded-full border border-stone-200/80 shadow-xs mb-3.5">
            <span className="text-xs">🐾</span>
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-secondary">
              WHY PET PARENTS TRUST US
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight mb-3">
            Crafted for Comfort, <span className="italic text-secondary font-serif">Engineered for Joy</span>
          </h2>

          <p className="text-neutral-text/75 text-sm sm:text-base leading-relaxed">
            Every product in our catalog meets high standards of animal welfare, safety, and durability.
          </p>
        </div>

        {/* 2-Column Showcase with /img/feature.jpg */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Feature Image Card (5 cols) */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-xl border border-stone-200/80 bg-stone-100 group">
              <img
                src="/img/feature.jpg"
                alt="Pet Supplies Quality & Care"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "/img/hero.jpg";
                }}
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-primary/95 backdrop-blur-md text-white p-5 rounded-2xl border border-white/10 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary text-white flex items-center justify-center text-xl flex-shrink-0">
                    🐾
                  </div>
                  <div>
                    <div className="text-xs font-bold font-serif">Certified Pet Quality</div>
                    <div className="text-[0.68rem] text-white/75">Backed by our 14-day Happy Tail guarantee</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: 4 Feature Benefit Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-neutral-bg rounded-2xl sm:rounded-3xl p-6 border border-stone-200/80 shadow-xs hover:shadow-lg hover:border-secondary/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 text-2xl flex items-center justify-center mb-4 shadow-xs group-hover:scale-105 transition-transform">
                    {feature.iconEmoji}
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-text/75 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
