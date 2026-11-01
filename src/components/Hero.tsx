"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ScallopTop } from "./ScallopBorders";

const slides = [
  {
    id: 1,
    image: "/img/hero1.jpg",
    badgeImg: "/img/badge-orange.png",
    alt: "Kids Toy Store Collection - Colorful Toys and Games",
    badgeDropShadow: "rgba(245, 130, 32, 0.4)",
    btnTextColor: "#ff4370",
    btnBorderColor: "#ff4370",
  },
  {
    id: 2,
    image: "/img/hero2.jpg",
    badgeImg: "/img/badge-green.png",
    alt: "Kids Toy Store Collection - Soft Plushies and Teddy Bears",
    badgeDropShadow: "rgba(98, 166, 46, 0.4)",
    btnTextColor: "#62a62e",
    btnBorderColor: "#62a62e",
  },
  {
    id: 3,
    image: "/img/hero1.jpg",
    badgeImg: "/img/badge-red.png",
    alt: "Kids Toy Store Collection - Red Scallop Center Badge",
    badgeDropShadow: "rgba(199, 74, 79, 0.45)",
    btnTextColor: "#c74a4f",
    btnBorderColor: "#c74a4f",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const active = slides[currentSlide];

  return (
    <section className="relative w-full overflow-hidden select-none bg-[#f8f9fa] pt-20 sm:pt-24 md:pt-28">
      
      {/* Top White Scalloped Cloud Fringe Border */}
      <div className="absolute top-20 sm:top-24 md:top-28 left-0 right-0 z-30">
        <ScallopTop color="#ffffff" />
      </div>

      {/* Hero Slideshow Background Images */}
      <div className="relative w-full min-h-[460px] xs:min-h-[500px] sm:min-h-[560px] md:min-h-[620px] lg:min-h-[660px] flex items-center justify-center">
        {slides.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover object-center"
              />
            </div>
          );
        })}

        {/* Central Wavy/Scalloped Sunburst Badge using user-uploaded badge images */}
        <div className="relative z-20 flex flex-col items-center justify-center px-4 my-auto">
          <div className="relative w-[300px] h-[300px] xs:w-[340px] xs:h-[340px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] lg:w-[490px] lg:h-[490px] flex items-center justify-center transition-transform duration-300 hover:scale-[1.02]">
            
            {/* Scalloped Badge PNG Images cross-fading smoothly with slide change */}
            {slides.map((slide, idx) => {
              const isBadgeActive = idx === currentSlide;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out pointer-events-none ${
                    isBadgeActive ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                  style={{
                    filter: `drop-shadow(0 14px 28px ${slide.badgeDropShadow})`,
                  }}
                >
                  <img
                    src={slide.badgeImg}
                    alt="Center Scalloped Badge"
                    className="w-full h-full object-contain"
                  />
                </div>
              );
            })}

            {/* Content Inside Badge */}
            <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 sm:px-10">
              
              {/* Main Title matching reference typography */}
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-[3.25rem] lg:text-[3.65rem] font-black text-white leading-[1.08] tracking-tight drop-shadow-sm">
                Kids Toy<br />
                Store<br />
                Collection
              </h1>

              {/* View Shop Pill Button with Dashed Border */}
              <div className="mt-4 sm:mt-5 md:mt-6">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 md:py-3 rounded-full bg-white font-black text-xs sm:text-sm md:text-base tracking-wide border-2 border-dashed shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
                  style={{
                    color: active.btnTextColor,
                    borderColor: active.btnBorderColor,
                  }}
                >
                  View Shop
                </Link>
              </div>

            </div>

          </div>
        </div>

        {/* Previous Slide Arrow Button */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all cursor-pointer backdrop-blur-xs"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Slide Arrow Button */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all cursor-pointer backdrop-blur-xs"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicator Dots */}
        <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/25 backdrop-blur-xs">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentSlide ? "w-6 bg-white" : "w-2 bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
