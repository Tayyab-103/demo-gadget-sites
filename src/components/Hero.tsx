"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface SlideData {
  id: string;
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  image: string;
  tag: string;
  highlightStat: string;
  statLabel: string;
}

const slides: SlideData[] = [
  {
    id: "slide-1",
    badge: "🌿 100% GOTS Certified Organic",
    title: "Where Tenderness",
    highlight: "Meets Pure Nature.",
    subtitle:
      "Ultra-soft organic muslin, soothing BPA-free teething sets, and hypoallergenic nursery essentials crafted for newborn comfort from day one.",
    ctaText: "Shop Organic Essentials",
    ctaLink: "/shop",
    image:
      "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1600&auto=format&fit=crop&q=90",
    tag: "Newborn Essentials",
    highlightStat: "100% Organic",
    statLabel: "Gentle on delicate skin",
  },
  {
    id: "slide-2",
    badge: "🧸 Pediatrician Approved",
    title: "Sensory Toys For",
    highlight: "Curious Little Hands.",
    subtitle:
      "Handcrafted untreated beechwood rattles paired with food-grade silicone beads — stimulating tactile curiosity and motor reflexes safely.",
    ctaText: "Explore Sensory Play",
    ctaLink: "/shop",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1600&auto=format&fit=crop&q=90",
    tag: "Beechwood & Teethers",
    highlightStat: "BPA-Free",
    statLabel: "Safety tested & certified",
  },
  {
    id: "slide-3",
    badge: "✨ Heirloom Quality",
    title: "Timeless Knitted Comfort",
    highlight: "For Cherished Memories.",
    subtitle:
      "Bespoke combed cotton knit cardigans, pom-pom booties, and breathable swaddles made to be passed down through generations with love.",
    ctaText: "Discover Heirloom Knits",
    ctaLink: "/shop",
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=1600&auto=format&fit=crop&q=90",
    tag: "Heirloom Knitwear",
    highlightStat: "Handmade",
    statLabel: "Artisan knit combed cotton",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5500);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const slide = slides[currentSlide];

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-[#F5F1FF] via-[#FAF7FF] to-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative Gradient Blobs */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-purple-300/20 rounded-full blur-3xl pointer-events-none -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-violet-200/25 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/4" />

      {/* Main Carousel Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-12 sm:pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[500px] sm:min-h-[560px]">

          {/* Left Text Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left z-20">
            
            {/* Animated Badge */}
            <div
              key={`badge-${currentSlide}`}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-[#7C3AED] font-extrabold text-xs tracking-wide mb-4 border border-purple-200 shadow-xs animate-in fade-in slide-in-from-left-4 duration-300"
            >
              <span>{slide.badge}</span>
            </div>

            {/* Headline */}
            <div key={`title-${currentSlide}`} className="animate-in fade-in slide-in-from-bottom-3 duration-400">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1E1040] tracking-tight leading-[1.12]">
                {slide.title}
                <br />
                <span className="text-[#7C3AED] inline-block mt-1">
                  {slide.highlight}
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p
              key={`desc-${currentSlide}`}
              className="text-[#4A3B69] text-sm sm:text-base leading-relaxed mt-4 mb-7 max-w-lg font-medium animate-in fade-in slide-in-from-bottom-2 duration-500"
            >
              {slide.subtitle}
            </p>

            {/* CTA and Social Proof */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link
                href={slide.ctaLink}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-2xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-black text-sm tracking-wide shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>{slide.ctaText}</span>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">
                  →
                </span>
              </Link>
            </div>

            {/* Carousel Navigation Controls (Desktop) */}
            <div className="flex items-center gap-4 mt-8 pt-4 border-t border-purple-100/80 w-full max-w-md">
              {/* Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  aria-label="Previous Slide"
                  className="w-9 h-9 rounded-full bg-white border border-purple-200 text-[#1E1040] hover:bg-purple-50 hover:text-[#7C3AED] flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                >
                  ‹
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next Slide"
                  className="w-9 h-9 rounded-full bg-white border border-purple-200 text-[#1E1040] hover:bg-purple-50 hover:text-[#7C3AED] flex items-center justify-center transition-colors shadow-xs cursor-pointer"
                >
                  ›
                </button>
              </div>

              {/* Progress Indicators */}
              {/* <div className="flex items-center gap-2 flex-grow">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentSlide === idx
                        ? "w-8 bg-[#7C3AED]"
                        : "w-2 bg-purple-200 hover:bg-purple-300"
                    }`}
                  />
                ))}
              </div> */}

              <span className="text-xs font-bold text-gray-400">
                0{currentSlide + 1} / 0{slides.length}
              </span>
            </div>
          </div>

          {/* Right Carousel Image Stage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-tr from-[#7C3AED]/20 via-purple-100 to-transparent blur-lg opacity-70" />

              {/* Main Card */}
              <div className="relative rounded-3xl sm:rounded-[2rem] overflow-hidden bg-white shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/11]">
                <img
                  key={`img-${currentSlide}`}
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center animate-in fade-in duration-700 ease-out"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

                {/* Floating Top Pill */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-white/90 backdrop-blur-md text-[#7C3AED] text-xs font-black px-3.5 py-1.5 rounded-full shadow-md">
                    {slide.tag}
                  </span>
                </div>

                {/* Bottom Floating Stats Box */}
                <div className="absolute bottom-4 left-4 right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-purple-100/50 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-[#7C3AED] text-base font-black">
                      ✓
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-black text-[#1E1040]">
                        {slide.highlightStat}
                      </p>
                      <p className="text-[0.68rem] text-gray-500 font-medium">
                        {slide.statLabel}
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/shop"
                    className="text-xs font-black text-[#7C3AED] bg-purple-50 hover:bg-purple-100 px-3 py-1.5 rounded-xl transition-colors"
                  >
                    View →
                  </Link>
                </div>
              </div>

              {/* Floating Accent Badges */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-white rounded-2xl p-3 shadow-xl border border-purple-100 flex items-center gap-2 z-30 animate-bounce duration-1000 hidden sm:flex">
                <span className="text-xl">👶</span>
                <div>
                  <p className="text-[0.68rem] font-bold text-gray-400 uppercase leading-none">Loved by</p>
                  <p className="text-xs font-black text-[#7C3AED] leading-tight">Happy Newborns</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-white rounded-2xl p-3 shadow-xl border border-purple-100 flex items-center gap-2 z-30 hidden sm:flex">
                <span className="text-xl">🌿</span>
                <div>
                  <p className="text-[0.68rem] font-bold text-gray-400 uppercase leading-none">Standard</p>
                  <p className="text-xs font-black text-[#1E1040] leading-tight">Eco-Safe Muslin</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Wave Transition to Page Body */}
      <div className="relative w-full overflow-hidden leading-none z-20">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 md:h-14 text-white fill-current"
        >
          <path d="M0,40 C120,70 180,10 300,40 C420,70 480,10 600,40 C720,70 780,10 900,40 C1020,70 1080,10 1200,40 C1320,70 1380,10 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>
    </section>
  );
}
