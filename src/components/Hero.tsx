"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const heroImages = [
  {
    id: "hero1",
    image: "/img/her01.jpg",
    fallbackImage: "/img/hero1.jpg",
    alt: "Electronics Hero 1",
  },
  {
    id: "hero2",
    image: "/img/hero2.jpg",
    fallbackImage: "/img/products/product2.png",
    alt: "Electronics Hero 2",
  },
  {
    id: "hero3",
    image: "/img/hero3.jpg",
    fallbackImage: "/img/products/product3.jpg",
    alt: "Electronics Hero 3",
  },
];

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);

  // Auto rotation
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  return (
    <section className="relative bg-white pt-6 pb-12 sm:pt-10 sm:pb-16 md:pt-14 md:pb-20 overflow-hidden w-full border-b border-gray-100">
      {/* Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-72 sm:w-[500px] h-72 sm:h-[400px] bg-secondary/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-5 sm:left-10 w-60 sm:w-[380px] h-60 sm:h-[300px] bg-primary/5 blur-3xl pointer-events-none rounded-full" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Typography & CTAs (5 cols) */}
          <div className="lg:col-span-5 text-left z-10">
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary text-secondary font-extrabold text-xs tracking-widest uppercase mb-4 shadow-sm border border-secondary/30">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span>Next-Gen Consumer Tech</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-primary tracking-tight leading-[1.12] mb-3 sm:mb-4 uppercase">
              Engineered For <br />
              <span className="text-secondary inline-block">Peak Power</span> <br />
              &amp; Precision
            </h1>

            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-md mb-6 sm:mb-7 font-medium">
              Discover cutting-edge smart gadgets, hi-fi studio headphones, and high-performance gaming consoles built for modern digital lifestyle.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
              <Link
                href="/shop"
                className="group inline-flex items-center justify-center gap-2.5 bg-primary text-primary-text hover:text-secondary transition-all duration-300 px-6 sm:px-8 py-3.5 rounded-xl text-xs font-black uppercase tracking-widest shadow-md hover:shadow-lg border border-primary cursor-pointer w-full sm:w-auto text-center"
              >
                <span>Shop Electronics</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 text-secondary">→</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-50 border border-gray-300 hover:border-primary transition-all duration-300 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-xs cursor-pointer w-full sm:w-auto text-center"
              >
                <span>Our Engineering</span>
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="flex items-center flex-wrap gap-x-4 sm:gap-x-5 gap-y-2 text-[0.7rem] sm:text-xs text-gray-500 font-semibold pt-3 border-t border-gray-200">
              <span className="flex items-center gap-1.5"><span className="text-secondary font-black">✓</span> Fast UPS Delivery</span>
              <span className="flex items-center gap-1.5"><span className="text-secondary font-black">✓</span> CE / FCC Certified</span>
              <span className="flex items-center gap-1.5"><span className="text-secondary font-black">✓</span> {siteConfig.trialPeriod}-Day Guarantee</span>
            </div>
          </div>

          {/* Right Column: Clean Visual Image Cards (7 cols) */}
          <div
            className="lg:col-span-7 relative w-full"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            {/* Desktop / Tablet View: Pure Visual Gallery Deck */}
            <div className="hidden sm:flex items-center gap-3 md:gap-4 h-[380px] md:h-[450px] w-full">
              {heroImages.map((item, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveIdx(idx)}
                    onMouseEnter={() => setActiveIdx(idx)}
                    className={`relative group transition-all duration-500 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer bg-slate-900 h-full border border-gray-200/80 ${
                      isActive ? "flex-[2.8] md:flex-[3]" : "flex-1 opacity-75 hover:opacity-100"
                    }`}
                  >
                    {/* Hero Image */}
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      onError={(e) => {
                        if (item.fallbackImage && e.currentTarget.src !== item.fallbackImage) {
                          e.currentTarget.src = item.fallbackImage;
                        }
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* Mobile View: Single Clean Image Display */}
            <div className="block sm:hidden w-full">
              {(() => {
                const current = heroImages[activeIdx];
                return (
                  <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-xl bg-slate-900 border border-gray-200">
                    <img
                      src={current.image}
                      alt={current.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        if (current.fallbackImage && e.currentTarget.src !== current.fallbackImage) {
                          e.currentTarget.src = current.fallbackImage;
                        }
                      }}
                    />
                  </div>
                );
              })()}
            </div>

            {/* Navigation Indicators */}
            <div className="flex items-center justify-center gap-2 mt-4 sm:mt-5">
              {heroImages.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  aria-label={`Select Hero Image ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    activeIdx === idx
                      ? "w-7 h-2 bg-secondary"
                      : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
