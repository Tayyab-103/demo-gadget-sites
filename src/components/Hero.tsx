"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const bgImages = [
  "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1800&q=80",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1800&q=80",
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1800&q=80",
  "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1800&q=80",
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
    <section className="relative flex min-h-[85vh] sm:min-h-[92vh] items-center overflow-hidden bg-primary w-full max-w-full">
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
            backgroundPosition: "center",
            transitionProperty: "opacity, transform",
            transitionDuration: "1400ms",
          }}
        />
      ))}

      {/* Dark gradient overlay for extreme readability */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/50" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pt-36 sm:pb-20 md:pt-44 md:pb-24">
        <div className="max-w-2xl w-full">
          
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-secondary/20 border border-secondary/40 backdrop-blur-md mb-4 sm:mb-6 max-w-full">
            <span className="w-2 h-2 rounded-full bg-secondary animate-ping flex-shrink-0" />
            <span className="text-[0.62rem] sm:text-xs font-black uppercase tracking-widest text-white truncate">
              Austin, TX Athletic Lab • Pro-Athlete Tested
            </span>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-4 sm:mb-5 uppercase break-words">
            Engineered For Peak <span className="text-secondary">Athletic Performance</span>
          </h1>

          <p className="text-white/85 text-xs sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed max-w-xl font-normal">
            Pro-grade weighted training vests, storm-shield equipment bags, and deep-tissue recovery therapy designed to push your physiological limits.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-md sm:max-w-none">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center font-black uppercase tracking-wider text-secondary-text text-xs sm:text-sm bg-secondary hover:brightness-110 transition-all duration-300 py-3 sm:py-4 px-6 sm:px-8 rounded-full shadow-lg shadow-secondary/35 hover:scale-[1.02] text-center"
            >
              Shop Gear Catalog
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center font-black uppercase tracking-wider text-white text-xs sm:text-sm border border-white/25 bg-white/10 hover:bg-white/20 transition-all duration-300 py-3 sm:py-4 px-6 sm:px-8 rounded-full backdrop-blur-md text-center"
            >
              Athlete Heritage
            </Link>
          </div>

          {/* Quick specs strip */}
          <div className="mt-8 pt-5 border-t border-white/15 grid grid-cols-3 gap-2 sm:gap-4 max-w-md w-full">
            <div className="min-w-0">
              <div className="text-base sm:text-xl font-black text-white">1000D</div>
              <div className="text-[0.55rem] sm:text-[0.68rem] uppercase tracking-wider text-white/60 font-bold mt-0.5 truncate">Ballistic Cordura</div>
            </div>
            <div className="min-w-0">
              <div className="text-base sm:text-xl font-black text-secondary">14-Day</div>
              <div className="text-[0.55rem] sm:text-[0.68rem] uppercase tracking-wider text-white/60 font-bold mt-0.5 truncate">Field Trial</div>
            </div>
            <div className="min-w-0">
              <div className="text-base sm:text-xl font-black text-white">3-5 Day</div>
              <div className="text-[0.55rem] sm:text-[0.68rem] uppercase tracking-wider text-white/60 font-bold mt-0.5 truncate">UPS Dispatch</div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel indicator dots */}
      <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-10 hidden sm:flex gap-2">
        {bgImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveImage(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === activeImage ? "w-7 bg-secondary" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Show background slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-secondary via-sky-400 to-secondary z-10" />
    </section>
  );
}
