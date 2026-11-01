"use client";

import React from "react";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const highlights = [
  {
    title: "Polycarbonate Architecture",
    desc: "Aerospace-derived multi-layer composite resists high impacts, baggage carousel drops, and temperature swings.",
  },
  {
    title: "Whisper-Glide System",
    desc: "Japanese engineered dual-wheel assemblies with sealed steel bearings roll effortlessly over carpets and cobblestones.",
  },
  {
    title: "Tactical Compression Interiors",
    desc: "Integrated compression straps and modular zip dividers maximize usable packing capacity by up to 60%.",
  },
  {
    title: "1-Year Comprehensive Warranty",
    desc: "Every seam, zipper, wheel, and telescoping handle is backed by a full replacement or repair guarantee.",
  },
];

const stats = [
  { value: "50,000+", label: "Expeditions Completed" },
  { value: "60-Day", label: "Trial Guarantee" },
  { value: "1-Year", label: "Full Warranty" },
];

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20 md:py-28" id="about">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <span className="eyebrow justify-center mb-3">Our Heritage &amp; Craft</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary leading-tight">
            Travel Gear Built For <span className="text-secondary">Every Horizon</span>
          </h2>
          <div className="mx-auto mt-4 mb-4 w-10 h-px bg-secondary" />
          <p className="text-neutral-text/65 text-xs sm:text-sm md:text-base leading-relaxed">
            At {siteConfig.brandName}, operated by {siteConfig.corpName}, we refuse to compromise between rugged resilience and refined aesthetics. Every case, duffel, and packing cube is designed to outlast your longest adventures.
          </p>
        </div>

        {/* Asymmetrical Editorial Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* LEFT: Image Stage */}
          <div className="lg:col-span-6 relative pb-6 sm:pb-0">
            <div className="relative aspect-4/5 w-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden shadow-lg border border-black/8 bg-neutral-bg">
              <Image
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1600&q=80"
                alt={`${siteConfig.brandName} expedition travel lifestyle`}
                fill
                sizes="(max-width: 1024px) 90vw, 560px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            </div>

            {/* Clean Feature Badge */}
            <div className="relative sm:absolute mt-4 sm:mt-0 sm:-bottom-5 sm:left-6 bg-white p-4 sm:px-6 sm:py-4 rounded-xl shadow-lg flex items-center gap-3.5 border border-black/8 max-w-full sm:max-w-sm mx-auto">
              <div className="w-10 h-10 rounded-lg bg-secondary text-white flex items-center justify-center flex-shrink-0 font-black text-base shadow-xs">
                ✓
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary truncate">
                  100,000+ Mile Durability
                </h4>
                <p className="text-[0.65rem] sm:text-xs text-neutral-text/60 mt-0.5 leading-snug">
                  Drop-tested, tumble-tested, and weather-sealed.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Story and Feature Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-center pt-6 lg:pt-0">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary tracking-tight leading-snug mb-4">
              Engineered Without Shortcuts. Built for the Demands of Modern Transit.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-text/70 leading-relaxed mb-8">
              Whether you are boarding an overseas red-eye, navigating cobblestone streets, or checking bags through turbulent weather, our equipment ensures your essentials stay protected and organized from departure to arrival.
            </p>

            {/* Highlight items list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, idx) => (
                <div key={item.title} className="p-4 rounded-xl bg-neutral-bg border border-black/5 hover:border-secondary/30 transition-colors">
                  <div className="text-[0.68rem] font-bold text-secondary uppercase tracking-widest mb-1.5 flex items-center gap-2">
                    <span>0{idx + 1}</span>
                    <span className="w-3 h-0.5 bg-secondary/50 rounded-full" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-primary mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[0.68rem] sm:text-xs text-neutral-text/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-black/8 text-center sm:text-left">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-xl sm:text-2xl font-bold text-primary tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-[0.65rem] sm:text-xs text-neutral-text/50 uppercase tracking-wider font-semibold mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
