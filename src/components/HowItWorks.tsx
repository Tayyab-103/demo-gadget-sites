"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const steps = [
  {
    step: "01",
    title: "Choose Your Craft or Game",
    desc: "Browse our curated collection of laser-cut 3D wooden automata, tabletop strategy games, and heirloom puzzles.",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=800&auto=format&fit=crop",
  },
  {
    step: "02",
    title: "Complete Kit Express Delivery",
    desc: `Delivered safely in ${siteConfig.shippingPeriod} business days via ${siteConfig.shippingCarrier} with full blueprints, numbered parts, and components included.`,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
  },
  {
    step: "03",
    title: "Build, Play & Master",
    desc: "Unbox hours of screen-free maker focus, unforgettable family game nights, and proud showcase creations.",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-14 md:py-20 bg-[#FAF8F5] border-b border-black/[0.06] font-sans" id="how-it-works">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-[#A36B42] text-xs font-bold uppercase tracking-[0.2em] block mb-1.5">
            The Wonderwick Experience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#191716]">
            How It Works
          </h2>
        </div>

        {/* 3 Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-3xl overflow-hidden border border-black/[0.06] shadow-xs flex flex-col justify-between group hover:border-[#A36B42]/40 hover:shadow-md transition-all duration-300"
            >
              {/* Photo */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#ECE8E1]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop";
                  }}
                />
                <span className="absolute top-3.5 left-3.5 bg-[#191716] text-white text-xs font-black px-3 py-1 rounded-full shadow-sm">
                  Step {item.step}
                </span>
              </div>

              {/* Text */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-[#191716] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-black/65 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}