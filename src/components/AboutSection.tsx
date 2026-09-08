"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const values = [
  {
    iconEmoji: "🐾",
    title: "Committed to Companion Health",
    description: "Every item is selected to support natural pet instincts, physical activity, and emotional well-being.",
  },
  {
    iconEmoji: "🌿",
    title: "100% Non-Toxic & Safe",
    description: "Strict quality control ensuring all materials, dyes, and silicone are 100% safe for daily chewing and cuddling.",
  },
  {
    iconEmoji: "📦",
    title: "Domestic Fast Dispatch",
    description: "Quick, reliable shipping from our domestic fulfillment center with live tracking on every single order.",
  },
];

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-neutral-bg relative overflow-hidden" id="about">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header at Top */}
        <div className="text-left max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-stone-200/80 shadow-xs mb-3.5">
            <span className="text-xs">🐾</span>
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-secondary">
              ABOUT {siteConfig.brandName.toUpperCase()}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight mb-3">
            Thoughtfully Selected <span className="italic text-secondary font-serif">For Every Pet</span>
          </h2>
          
          <p className="text-neutral-text/75 text-xs sm:text-sm md:text-base leading-relaxed">
            At {siteConfig.brandName}, we provide premium pet carrier backpacks, engaging dental chew toys, and ergonomic litter care solutions without compromise — ensuring every day is filled with comfort, vitality, and wagging tails.
          </p>
        </div>

        {/* 2-Column Layout with /img/aboutus.jpg & /img/aboutus2.jpg */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full mt-4 sm:mt-6">
          
          {/* Left Column: Dual Image Showcase (6 cols) */}
          <div className="lg:col-span-6 w-full">
            <div className="grid grid-cols-12 gap-4 items-center">
              
              {/* Primary Image: aboutus.jpg (7 cols) */}
              <div className="col-span-7 relative aspect-[4/5] rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-xl border border-stone-200/80 bg-stone-100 group">
                <img
                  src="/img/aboutus.jpg"
                  alt={`About ${siteConfig.brandName}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/img/hero.jpg";
                  }}
                />
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="bg-primary text-white text-[0.62rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    Our Mission
                  </span>
                </div>
              </div>

              {/* Secondary Image: aboutus2.jpg (5 cols) */}
              <div className="col-span-5 relative aspect-[4/5] rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-xl border border-stone-200/80 bg-stone-100 group">
                <img
                  src="/img/aboutus2.jpg"
                  alt={`Pet care from ${siteConfig.brandName}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/img/hero1.jpg";
                  }}
                />
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="bg-secondary text-white text-[0.62rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    Pet Wellness
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Values & Story (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex flex-col gap-6 sm:gap-7">
              {values.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-stone-200 text-2xl flex items-center justify-center flex-shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                    <span>{item.iconEmoji}</span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-primary mb-1 group-hover:text-secondary transition-colors font-serif">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-text/75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Link button to shop */}
            <div className="mt-8 pt-6 border-t border-stone-200">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-secondary text-white hover:bg-primary transition-all duration-300 px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md hover:shadow-lg"
              >
                <span>Explore Full Collection</span>
                <span>→</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
