"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const backgroundImages = [
  "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=1920&auto=format&fit=crop",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance background image every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[540px] sm:min-h-[600px] lg:min-h-[660px] flex items-end justify-start overflow-hidden bg-[#191716] text-white font-sans border-b border-black/20">
      
      {/* ────────────────── FULL-WIDTH BACKGROUND IMAGE CAROUSEL ────────────────── */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          }`}
          style={{ transitionProperty: "opacity, transform", transitionDuration: "1200ms" }}
        >
          <img
            src={image}
            alt="Hobby Toy and Game Showcase"
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* ─── WARM DARK GRADIENT OVERLAYS (For Maximum Text Legibility) ─── */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#191716]/95 via-[#191716]/60 to-[#191716]/30 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#191716]/90 via-[#191716]/40 to-transparent z-10" />

      {/* ────────────────── STATIC HERO CONTENT (POSITIONED LEFT BOTTOM) ────────────────── */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-14 sm:pb-18 lg:pb-22 w-full">
        <div className="max-w-2xl flex flex-col items-start text-left">
          
          {/* Top Live Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A36B42]/30 border border-[#A36B42]/50 text-[#E5B887] text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#A36B42] animate-pulse" />
            <span>2026 ARTISAN HOBBY &amp; GAME LINE</span>
          </div>

          {/* Constant Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] mb-4 drop-shadow-lg">
            Crafted For Wonder,{" "}
            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-[#E5B887] via-[#D19760] to-[#A36B42]">
              Built To Play.
            </span>
          </h1>

          {/* Constant Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-200 leading-relaxed max-w-xl mb-7 font-normal drop-shadow-sm">
            Immerse yourself in precision 3D wooden mechanical kits, epic tabletop strategy games, and heirloom handcrafted puzzles for makers of all ages.
          </p>

          {/* Primary CTA Button */}
          <Link
            href="/shop"
            className="inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-gradient-to-r from-[#A36B42] via-[#C08151] to-[#A36B42] hover:from-[#B57849] hover:to-[#925F39] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-[#A36B42]/30 hover:shadow-[#A36B42]/50 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span>Explore All Hobby Kits</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>

        </div>
      </div>

      {/* ────────────────── BOTTOM-RIGHT CAROUSEL INDICATOR DOTS ────────────────── */}
      <div className="absolute bottom-6 right-6 sm:right-10 z-30 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 cursor-pointer rounded-full ${
              index === currentSlide
                ? "w-6 h-1.5 bg-gradient-to-r from-[#E5B887] to-[#A36B42]"
                : "w-1.5 h-1.5 bg-white/40 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
