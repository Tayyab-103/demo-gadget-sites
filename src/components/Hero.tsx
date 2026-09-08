"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=85&w=1800&auto=format&fit=crop",
    eyebrow: "Haute Joaillerie & Diamonds",
    titleLine1: "TIMELUXE HEIRLOOM",
    titleLine2: "18K GOLD & DIAMONDS",
    subtitle: "Solid 18-karat yellow gold set with conflict-free brilliant solitaire diamonds and lustrous South Sea pearls. Delivered in bespoke velvet-lined lacquer cases.",
    categoryTag: "Fine Jewelry",
    link: "/#shop",
  },
  {
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=85&w=1800&auto=format&fit=crop",
    eyebrow: "Master Horology & Calibers",
    titleLine1: "SWISS-PRECISION",
    titleLine2: "AUTOMATIC TIMEPIECES",
    subtitle: "28-jewel mechanical movements, anti-reflective domed sapphire crystal, and exhibition casebacks paired with hand-stitched full-grain leather.",
    categoryTag: "Haute Horlogerie",
    link: "/#shop",
  },
  {
    image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?q=85&w=1800&auto=format&fit=crop",
    eyebrow: "Heirloom Dining & Horology",
    titleLine1: "HAND-FORGED 925",
    titleLine2: "STERLING SILVERWARE",
    subtitle: "Mirror-polished heavyweight sterling silver banquet settings and whisper-silent pendulum mantel clocks designed to anchor grand dining halls.",
    categoryTag: "Silverware & Clocks",
    link: "/#shop",
  },
  {
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=85&w=1800&auto=format&fit=crop",
    eyebrow: "The Gilded Harbor Promise",
    titleLine1: "CRAFTED FOR ETERNITY,",
    titleLine2: "WORN FOR EVERY DAY",
    subtitle: "Every piece is hallmarked, hand-inspected, and backed by our comprehensive 14-day inspection and lifetime craftsmanship guarantee.",
    categoryTag: "Atelier Standards",
    link: "/#about",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative min-h-[90vh] sm:min-h-[92vh] lg:min-h-[96vh] flex flex-col justify-between overflow-hidden bg-[#07130E] text-white">
      
      {/* ─── 1. BACKGROUND IMAGE SLIDER ─── */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((s, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              idx === currentSlide
                ? "opacity-100 scale-100 filter-none"
                : "opacity-0 scale-108 pointer-events-none"
            }`}
          >
            <img
              src={s.image}
              alt={s.titleLine1}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}

        {/* Cinematic Multi-Layer Emerald Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C1E17]/95 via-[#0C1E17]/80 to-[#0C1E17]/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1E17] via-transparent to-[#07130E]/60 z-10" />
        
        {/* Subtle Ambient Gold Glow */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none z-10" />
      </div>

      {/* ─── 2. MAIN HERO CONTENT CONTAINER ─── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 sm:pt-28 md:pt-36 pb-16 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          
          {/* Eyebrow Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0C1E17]/80 backdrop-blur-md border border-[#D4AF37]/40 shadow-lg shadow-black/40 mb-6">
            <span className="text-[#D4AF37] text-xs">✦</span>
            <span className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#D4AF37]">
              {slide.eyebrow}
            </span>
            <span className="hidden sm:inline text-white/30 text-xs">|</span>
            <span className="hidden sm:inline text-white/70 text-[0.65rem] uppercase tracking-widest font-semibold">
              {slide.categoryTag}
            </span>
          </div>

          {/* Majestic Hero Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-normal tracking-tight uppercase text-white leading-[1.05] mb-6">
            <span className="block text-white drop-shadow-md">
              {slide.titleLine1}
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E2A9] to-[#D4AF37] drop-shadow-lg">
              {slide.titleLine2}
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-white/80 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mb-10 text-shadow-sm">
            {slide.subtitle}
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="/#shop"
              className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E5C266] to-[#D4AF37] text-[#0C1E17] font-bold text-xs uppercase tracking-[0.18em] shadow-xl shadow-[#D4AF37]/25 hover:shadow-2xl hover:shadow-[#D4AF37]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              <span>Explore Atelier Collection</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 font-sans text-sm">
                &rarr;
              </span>
            </Link>

            <Link
              href="/#how-it-works"
              className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-4.5 rounded-full bg-white/5 backdrop-blur-md border border-white/20 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] hover:bg-white/10 font-bold text-xs uppercase tracking-[0.18em] transition-all duration-300 shadow-md cursor-pointer"
            >
              How It Works
            </Link>
          </div>

        </div>
      </div>

      {/* ─── 3. INTERACTIVE SLIDER BAR & COUNTERS ─── */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-6">
        
        {/* Slide Progress Indicators */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-[#D4AF37] font-bold">
            0{currentSlide + 1}
          </span>
          <div className="flex gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentSlide(idx);
                  setIsAutoPlaying(false);
                }}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  idx === currentSlide
                    ? "w-10 bg-[#D4AF37]"
                    : "w-3 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <span className="text-xs font-mono text-white/40">
            0{heroSlides.length}
          </span>
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
              setIsAutoPlaying(false);
            }}
            className="w-10 h-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-md hover:bg-[#D4AF37] hover:text-[#0C1E17] hover:border-[#D4AF37] transition-all flex items-center justify-center text-sm cursor-pointer shadow-sm"
            aria-label="Previous Slide"
          >
            &#8592;
          </button>
          <button
            onClick={() => {
              setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
              setIsAutoPlaying(false);
            }}
            className="w-10 h-10 rounded-full border border-white/20 bg-white/5 backdrop-blur-md hover:bg-[#D4AF37] hover:text-[#0C1E17] hover:border-[#D4AF37] transition-all flex items-center justify-center text-sm cursor-pointer shadow-sm"
            aria-label="Next Slide"
          >
            &#8594;
          </button>
        </div>

      </div>

      {/* ─── 4. PROOF PILLARS STRIP ─── */}
      <div className="relative z-20 bg-[#06100C] border-t border-[#D4AF37]/20">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/10">
          {[
            { label: "18K Gold & 925 Silver", desc: "Certified Atelier Hallmarked" },
            { label: "28-Jewel Calibers", desc: "Swiss-Grade Precision Movement" },
            { label: "14-Day Inspection", desc: "Hassle-Free Money-Back Guarantee" },
            { label: "Complimentary Delivery", desc: "Fully Insured Express UPS Transit" },
          ].map((item, idx) => (
            <div key={idx} className="p-4 sm:p-5 flex items-center gap-3.5">
              <span className="w-8 h-8 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center text-xs font-black shrink-0">
                ✦
              </span>
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-white">
                  {item.label}
                </span>
                <span className="block text-[0.68rem] text-white/55 font-light">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
