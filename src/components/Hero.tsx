"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const slides = [
  {
    tagline: "Art & Studio Supplies",
    titleLine1: "Crafted for Creators,",
    titleLine2: "Built for Legacy",
    subtitle: "Archival botanical inks, cold-pressed cotton journals, and hand-fitted sable brushes.",
    bgImage: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=1920&q=80",
    buttonText: "Shop Collection",
    link: "/#shop",
  },
  {
    tagline: "Archival Fine Arts",
    titleLine1: "Master Your Craft",
    titleLine2: "Without Limits",
    subtitle: "Pure organic pigments and master-grade precision tools for visionary artists.",
    bgImage: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1920&q=80",
    buttonText: "Explore Supplies",
    link: "/#shop",
  },
  {
    tagline: "The Atelier Range",
    titleLine1: "Elevate Every Stroke,",
    titleLine2: "Every Canvas",
    subtitle: "Studio-tested mediums formulated for generational permanence and rich pigment depth.",
    bgImage: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1920&q=80",
    buttonText: "View Featured Items",
    link: "/#shop",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-primary min-h-[65vh] sm:min-h-[520px] md:min-h-[580px] lg:min-h-[620px] flex flex-col justify-between select-none">
      {/* Main Slider Track */}
      <div className="relative z-0 w-full flex-1 flex flex-col justify-center">
        <div className="w-full overflow-hidden flex-1 flex">
          <div
            className="flex transition-transform duration-700 ease-in-out w-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((item, idx) => (
              <div
                key={idx}
                className="w-full flex-shrink-0 min-w-full relative flex items-center justify-center min-h-[50vh] sm:min-h-[460px] md:min-h-[520px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 overflow-hidden"
              >
                {/* Background image */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  <img
                    src={item.bgImage}
                    alt={`${siteConfig.brandName} - ${item.tagline}`}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/75 to-primary/55" />
                </div>

                {/* Unified Centered Slide Content */}
                <div className="relative z-10 w-full max-w-3xl mx-auto text-center flex flex-col items-center justify-center">
                  <span className="inline-block text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-secondary mb-2.5 sm:mb-3 border-b border-secondary/30 pb-0.5">
                    {item.tagline}
                  </span>

                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[1.12] mb-3 sm:mb-4 font-serif">
                    {item.titleLine1} <span className="block text-white/95">{item.titleLine2}</span>
                  </h1>

                  <p className="text-white/80 text-xs sm:text-sm md:text-base max-w-lg leading-relaxed mb-6 sm:mb-7 font-light">
                    {item.subtitle}
                  </p>

                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2.5 bg-white text-primary hover:bg-secondary hover:text-white font-bold text-xs sm:text-sm uppercase tracking-[0.16em] px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all duration-300 shadow-xl hover:scale-105 cursor-pointer"
                  >
                    {item.buttonText}
                    <span className="text-sm">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clean Slide Dots */}
        <div className="relative z-20 flex items-center justify-center gap-2 pb-4 sm:pb-6 pt-2">
          {slides.map((_, idx) => {
            const isActive = idx === currentSlide;
            return (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "w-6 sm:w-8 bg-white"
                    : "w-1.5 sm:w-2 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            );
          })}
        </div>
      </div>

      {/* Proof Points Strip at Bottom */}
      <div className="relative z-10 border-t border-white/10 bg-primary/95">
        <div className="mx-auto grid max-w-6xl grid-cols-2 px-4 sm:px-6 lg:grid-cols-4">
          {["Archival Standard", "100% Cotton Papers", "60-Day Guarantee", "Fast Nationwide Shipping"].map((point) => (
            <div
              key={point}
              className="flex items-center justify-center gap-2 border-b border-white/10 py-3 sm:py-3.5 text-center even:border-l even:border-white/10 md:py-4 lg:border-b-0 lg:border-l lg:first:border-l-0"
            >
              <span className="flex h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-primary text-[0.55rem] sm:text-[0.6rem] font-black">
                ✓
              </span>
              <span className="text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-wider text-white/80 md:text-xs">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
