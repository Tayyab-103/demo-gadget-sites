"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const bgImages = [
  "/img/hero_bg1.jpg",
  "/img/hero_bg3.jpg",
];

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((i) => (i + 1) % bgImages.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative flex min-h-[85vh] sm:min-h-[88vh] items-center overflow-hidden bg-primary">
      {/* Background image carousel */}
      {bgImages.map((src, idx) => (
        <div
          key={src}
          className={`absolute inset-0 z-0 transition-all duration-1000 ease-in-out ${
            idx === activeImage ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
          }`}
          style={{
            backgroundImage: `url('${src}')`,
            backgroundSize: "cover",
            backgroundPosition: src.includes("hero_bg1") ? "center 60%" : "center right",
            transitionProperty: "opacity, transform",
            transitionDuration: "1200ms",
          }}
        />
      ))}

      {/* Optimized overlay for clear image visibility while keeping text readable */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-primary/90 via-primary/55 to-primary/10 pointer-events-none" />
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-primary/80 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24">
        <div className="max-w-2xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary/15 border border-secondary/30 backdrop-blur-md mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-wider text-secondary">
              Certified Lead-Free • Solid Forged Brass
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-5">
            Precision Plumbing &amp; <span className="text-secondary">Heating Supplies</span>
          </h1>

          <p className="text-white/85 text-sm sm:text-base md:text-lg mb-8 leading-relaxed max-w-xl">
            Heavy-duty forged brass compression fittings, shutoff ball valves, and high-temp stainless supply lines built for leak-free performance.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center font-bold text-secondary-text text-sm sm:text-base bg-secondary hover:brightness-110 transition-all duration-300 py-3.5 sm:py-4 px-8 rounded-full shadow-lg shadow-secondary/25 hover:scale-[1.02] text-center"
            >
              Shop Catalog
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center font-bold text-white text-sm sm:text-base border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 py-3.5 sm:py-4 px-8 rounded-full backdrop-blur-sm text-center"
            >
              About Foundry
            </Link>
          </div>
        </div>
      </div>

      {/* Carousel slide controls & indicators */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
        <button
          onClick={() => setActiveImage((i) => (i - 1 + bgImages.length) % bgImages.length)}
          className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all cursor-pointer"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <div className="flex gap-2 items-center">
          {bgImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === activeImage ? "w-7 bg-secondary shadow-md" : "w-2 bg-white/50 hover:bg-white/90"
              }`}
              aria-label={`Show background image ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => setActiveImage((i) => (i + 1) % bgImages.length)}
          className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all cursor-pointer"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary z-10" />
    </section>
  );
}
