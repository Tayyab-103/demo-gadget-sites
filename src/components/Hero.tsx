"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const backgroundImages = [
  "/img/hero1.jpg",
  "/img/hero2.jpg",
  "/img/hero3.jpg",
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
    <section className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] flex items-end justify-start overflow-hidden bg-black text-white font-sans border-b border-gray-800">
      
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
            alt="Automotive Background Visual"
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* ─── DARK GRADIENT OVERLAYS (For Maximum Text Legibility) ─── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/30 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent z-10" />

      {/* ────────────────── STATIC HERO CONTENT (POSITIONED LEFT BOTTOM) ────────────────── */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 sm:pb-16 lg:pb-20 w-full">
        <div className="max-w-2xl flex flex-col items-start text-left">
          
          {/* Top Live Badge */}
          {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-600/30 border border-rose-400/40 text-rose-300 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md shadow-md">
            <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
            <span>2026 PRECISION AUTOMOTIVE LINE</span>
          </div> */}

          {/* Constant Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] mb-4 drop-shadow-lg">
            Engineered For The{" "}
            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
              Road Ahead.
            </span>
          </h1>

          {/* Constant Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-xl mb-6 font-normal drop-shadow-sm">
            Pro-grade automotive accessories &amp; performance components. Precision-tested for exact OEM fitment, heavy-duty durability, and exceptional driving comfort.
          </p>

          {/* Primary CTA Button */}
          <Link
            href="/shop"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-emerald-600/40 hover:shadow-emerald-600/60 hover:-translate-y-0.5 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span>Explore Products</span>
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
                ? "w-6 h-1.5 bg-gradient-to-r from-emerald-400 to-teal-400"
                : "w-1.5 h-1.5 bg-white/40 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
