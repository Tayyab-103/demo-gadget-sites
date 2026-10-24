"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface Slide {
  id: number;
  subtitle: string;
  titleLine1: string;
  titleLine2: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    subtitle: "NEW COLLECTION",
    titleLine1: "Meet New",
    titleLine2: "Fashion Week",
    image: "/img/hero1.png",
  },
  {
    id: 2,
    subtitle: "AUTUMN CAPSULE",
    titleLine1: "Effortless",
    titleLine2: "Modern Lines",
    image: "/img/hero2.png",
  },
  {
    id: 3,
    subtitle: "EXCLUSIVE ATELIER",
    titleLine1: "Timeless",
    titleLine2: "Daily Comfort",
    image: "/img/hero3.png",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slide every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const active = slides[currentSlide];

  return (
    <section className="relative w-full bg-white overflow-hidden select-none border-b border-black/5">
      <div className="relative w-full min-h-[640px] md:min-h-[720px] lg:h-[780px] xl:h-[840px] flex">
        

        {/* ================= CENTER HERO STAGE ================= */}
        <div className="relative flex-1 flex items-center justify-start h-full">
          
          {/* 1. Large Fashion Image Box (Occupies left ~60% of stage) */}
          <div className="relative w-full md:w-[60%] lg:w-[58%] h-[500px] sm:h-[600px] lg:h-[720px] xl:h-[780px] bg-[#D4D4D8] overflow-hidden my-auto flex items-center justify-center shadow-sm">
            <img
              key={active.image}
              src={active.image}
              alt={active.titleLine1}
              className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
            />
            
            {/* Subtle light overlay to ensure soft fashion aesthetic */}
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* 2. Dotted Matrix Pattern on the Right */}
          <div
            className="hidden md:block absolute top-16 right-16 lg:right-28 w-[380px] lg:w-[480px] h-[360px] lg:h-[440px] pointer-events-none z-0"
            style={{
              backgroundImage: "radial-gradient(#181818 1.4px, transparent 1.4px)",
              backgroundSize: "28px 28px",
              opacity: 0.18,
            }}
          />

          {/* 3. Overlapping Typography & Button Block */}
          <div className="absolute left-6 sm:left-12 md:left-[42%] lg:left-[40%] xl:left-[41%] z-20 flex flex-col items-start pr-4">
            
            {/* Subtitle */}
            <span className="text-[0.7rem] sm:text-xs uppercase tracking-[0.28em] font-medium text-neutral-600 mb-2 sm:mb-3">
              {active.subtitle}
            </span>

            {/* Main Headline (overlapping image and white dotted background) */}
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[6.2rem] font-normal tracking-tight text-[#111111] leading-[1.04] mb-6 sm:mb-8">
              <span>{active.titleLine1}</span>
              <br />
              <span className="block">{active.titleLine2}</span>
            </h1>

            {/* Shop Now Button */}
            <Link
              href="/shop"
              className="inline-flex items-center justify-center bg-[#111111] hover:bg-black text-white px-8 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 shadow-md hover:shadow-xl"
            >
              Shop Now
            </Link>
          </div>

          {/* 4. Scroll Down Indicator at bottom edge of image */}
          <div className="hidden md:flex absolute bottom-8 left-[58%] -translate-x-1/2 flex-col items-center gap-2 z-20 pointer-events-none">
            <span
              className="text-[0.62rem] uppercase tracking-[0.22em] text-neutral-500 font-medium"
              style={{ writingMode: "vertical-rl" }}
            >
              Scroll Down
            </span>
            <div className="w-[1.5px] h-6 bg-neutral-800" />
          </div>

        </div>

        {/* ================= RIGHT RAIL ================= */}
        <div className="w-16 sm:w-20 lg:w-24 flex-shrink-0 flex flex-col justify-between items-center py-8 z-30 bg-white">
          {/* Top spacer */}
          <div className="h-10" />

          {/* Vertical Slider Dash Indicators */}
          <div className="flex flex-col items-center gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 cursor-pointer ${
                  currentSlide === idx
                    ? "w-7 h-[2.5px] bg-[#111111]"
                    : "w-4 h-[1.5px] bg-neutral-300 hover:bg-neutral-500"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Bottom Right Horizontal Arrows: ← and → */}
          <div className="flex items-center gap-4 text-xl sm:text-2xl text-neutral-800">
            <button
              type="button"
              onClick={prevSlide}
              className="hover:text-black transition-colors cursor-pointer"
              aria-label="Previous Slide"
            >
              ←
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="hover:text-black transition-colors cursor-pointer"
              aria-label="Next Slide"
            >
              →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
