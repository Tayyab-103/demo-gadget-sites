"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const steps = [
  {
    step: "01",
    title: "Choose Toys & Games",
    desc: "Browse our handpicked wonderland of action figures, Montessori wooden puzzles, family board games, and cuddle plushies available in single units or money-saving bundles.",
    badge: "Ages 0 to Teens",
    image: "/img/hero-banner.jpg",
  },
  {
    step: "02",
    title: "Fast Tracked Dispatch",
    desc: `Each order is carefully packaged and shipped via ${siteConfig.shippingCarrier} with full tracking within ${siteConfig.shippingPeriod} business days straight to your home.`,
    badge: `${siteConfig.shippingCarrier} Tracked`,
    image: "/img/products/board-game.jpg",
  },
  {
    step: "03",
    title: "14-Day Family Happiness",
    desc: "Play, explore, and share laughs risk-free. If your family isn't completely enchanted, return your toys within 14 days for a full, courteous refund.",
    badge: "100% Guaranteed",
    image: "/img/products/plush-bunny.jpg",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#fffafb] text-black font-sans border-b border-black/5" id="how-it-works">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#ff4370] bg-[#ff4370]/10 px-3.5 py-1 rounded-full">
            Simple 3-Step Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e293b] tracking-tight mt-3">
            How Playhouse <span className="text-[#ff4370]">Works</span>
          </h2>
          <p className="text-black/60 text-xs sm:text-sm md:text-base leading-relaxed mt-2 font-normal">
            Joyful shopping, swift tracked carrier delivery, and risk-free family playtime guaranteed.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((item) => (
            <div
              key={item.step}
              className="group relative flex flex-col rounded-3xl border border-black/8 bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:border-[#ff4370]/30 hover:-translate-y-1"
            >
              {/* Image Header */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/5">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Step Number Badge */}
                <span className="absolute top-4 left-4 bg-[#ff4370] text-white font-mono font-black text-xs px-3 py-1 rounded-full shadow-md">
                  STEP {item.step}
                </span>

                <span className="absolute bottom-3 left-4 text-[0.68rem] font-black uppercase tracking-wider text-[#ffb703]">
                  {item.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-black text-[#1e293b] mb-2 tracking-tight group-hover:text-[#ff4370] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-black/65 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
