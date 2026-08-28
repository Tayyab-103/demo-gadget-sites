"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const bgImages = [
  "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1800&q=80",
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1800&q=80",
  "/img/hero_boiler.jpg",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80",
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
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            idx === activeImage ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          style={{
            backgroundImage: `url('${src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center right",
            transitionProperty: "opacity, transform",
            transitionDuration: "1200ms",
          }}
        />
      ))}

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24">
        <div className="max-w-2xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary/15 border border-secondary/30 backdrop-blur-md mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-wider text-secondary">
              Master Foundry Quality • Certified Lead-Free
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-5">
            Precision Plumbing &amp; <span className="text-secondary">Heating Supplies</span>
          </h1>

          <p className="text-white/80 text-sm sm:text-base md:text-lg mb-8 leading-relaxed max-w-xl">
            Industrial-grade forged brass fittings, heavy-duty shutoff valves, and high-temperature hydronic supply lines built to exceed rigorous plumbing standards.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center font-bold text-secondary-text text-sm sm:text-base bg-secondary hover:brightness-110 transition-all duration-300 py-3.5 sm:py-4 px-8 rounded-full shadow-lg shadow-secondary/25 hover:scale-[1.02] text-center"
            >
              Explore Catalog
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center font-bold text-white text-sm sm:text-base border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 py-3.5 sm:py-4 px-8 rounded-full backdrop-blur-sm text-center"
            >
              Foundry Specs
            </Link>
          </div>

          {/* Quick specs strip */}
          <div className="mt-10 pt-6 border-t border-white/15 grid grid-cols-3 gap-4 max-w-md">
            <div>
              <div className="text-lg sm:text-xl font-black text-white">1,200 PSI</div>
              <div className="text-[0.62rem] sm:text-[0.68rem] uppercase tracking-wider text-white/60 font-semibold mt-0.5">Burst Tolerance</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black text-secondary">100% Brass</div>
              <div className="text-[0.62rem] sm:text-[0.68rem] uppercase tracking-wider text-white/60 font-semibold mt-0.5">Forged Alloy</div>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-black text-white">3-5 Day</div>
              <div className="text-[0.62rem] sm:text-[0.68rem] uppercase tracking-wider text-white/60 font-semibold mt-0.5">Fast Dispatch</div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel indicator dots */}
      <div className="absolute bottom-6 right-4 sm:right-6 z-10 hidden sm:flex gap-2">
        {bgImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === activeImage ? "w-6 bg-secondary" : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Show background image ${idx + 1}`}
          />
        ))}
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary z-10" />
    </section>
  );
}
