"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const backgrounds = ["/img/hero1.jpg", "/img/hero2.jpg", "/img/hero3.jpg"];

const proofPoints = ["Natural Fibers", "Colorfast Dyes", "60-Day Guarantee", "Fast Nationwide Shipping"];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-primary select-none">
      <div className="relative min-h-[70vh] sm:min-h-[560px] lg:min-h-[640px] flex items-center">
        {/* Crossfading background images */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          {backgrounds.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`absolute inset-0 w-full h-full object-cover object-center transition-[opacity,transform] duration-[1600ms] ease-out ${
                idx === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
              }`}
            />
          ))}
          {/* Readability overlays */}
          <div className="absolute inset-0 bg-primary/55" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--primary-color)_0%,transparent_75%)] opacity-70" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-primary/80 to-transparent" />
        </div>

        {/* Static content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl text-center mx-auto flex flex-col items-center">
            <span className="inline-flex items-center gap-3 text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.28em] text-white/90 mb-4 sm:mb-5">
              <span className="hidden sm:block h-px w-10 bg-secondary" />
              {siteConfig.Product || "Fabric & Piece Goods"}
              <span className="hidden sm:block h-px w-10 bg-secondary" />
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] mb-4 sm:mb-6 font-serif">
              Fabrics Woven With
              <span className="block text-secondary">Heritage &amp; Heart</span>
            </h1>

            <p className="text-white/85 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed mb-7 sm:mb-9 mx-auto">
              Soft cotton, natural jute, and hand-finished textiles chosen for the way they look, feel, and last in your home.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/#shop"
                className="inline-flex items-center gap-2.5 bg-secondary text-secondary-text hover:bg-white hover:text-primary font-bold text-xs sm:text-sm uppercase tracking-[0.16em] px-7 sm:px-9 py-3.5 sm:py-4 rounded-full transition-all duration-300 shadow-xl cursor-pointer"
              >
                Shop Collection
                <span className="text-sm">→</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-white/40 text-white hover:bg-white/10 hover:border-white font-bold text-xs sm:text-sm uppercase tracking-[0.16em] px-7 sm:px-9 py-3.5 sm:py-4 rounded-full transition-all duration-300 cursor-pointer"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Background indicators */}
        <div className="absolute z-20 bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {backgrounds.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide ? "w-8 bg-secondary" : "w-1.5 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Show background ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Proof Points Strip */}
      <div className="relative z-10 border-t border-white/10 bg-primary">
        <div className="mx-auto grid max-w-6xl grid-cols-2 px-4 sm:px-6 lg:grid-cols-4">
          {proofPoints.map((point) => (
            <div
              key={point}
              className="flex items-center justify-center gap-2 border-b border-white/10 py-3 sm:py-3.5 text-center even:border-l even:border-white/10 md:py-4 lg:border-b-0 lg:border-l lg:first:border-l-0"
            >
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-text text-[0.6rem] font-black">
                ✓
              </span>
              <span className="text-[0.6rem] sm:text-[0.65rem] font-bold uppercase tracking-wider text-white/85 md:text-xs">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
