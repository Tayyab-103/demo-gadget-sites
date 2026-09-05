"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

interface Slide {
  id: number;
  image: string;
  eyebrow: string;
  title: string;
  buttonText: string;
  buttonLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/img/dresscode-hero-2.jpg",
    eyebrow: "Dresscode Commercial Wear",
    title: "The One Stop All Around Shop.",
    buttonText: "Click To Shop",
    buttonLink: "/shop",
  },
  {
    id: 2,
    image: "/img/dresscode-hero-1.jpg",
    eyebrow: "Tailored Academy & Commercial Attire",
    title: "Engineered For Peak Performance.",
    buttonText: "Click To Shop",
    buttonLink: "/shop",
  },
  {
    id: 3,
    image: "/img/hero-uniforms.jpg",
    eyebrow: "Workforce & Fleet Outfitters",
    title: "Durable Craftsmanship. Everyday Comfort.",
    buttonText: "Click To Shop",
    buttonLink: "/shop",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section
      aria-label="Hero Carousel"
      className="relative w-full h-[520px] sm:h-[580px] md:h-[640px] lg:h-[720px] xl:h-[760px] overflow-hidden bg-[#0A0F1D] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slides */}
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover object-center"
              loading={index === 0 ? "eager" : "lazy"}
            />

            {/* Dark Tint Overlay matching reference screenshot */}
            <div className="absolute inset-0 bg-black/40 md:bg-black/35 backdrop-brightness-[0.88]" />

            {/* Subtle Gradient for Bottom-Left Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/20" />
          </div>
        );
      })}

      {/* Navigation Arrows */}
      {/* Left Arrow Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute left-3 sm:left-5 md:left-7 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/35 hover:bg-black/60 text-white/90 hover:text-white border border-white/20 backdrop-blur-xs flex items-center justify-center transition-all duration-200 shadow-lg active:scale-95 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 sm:w-6 sm:h-6 -ml-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow Button (White circle matching reference) */}
      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute right-3 sm:right-5 md:right-7 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white hover:bg-slate-100 text-slate-900 flex items-center justify-center transition-all duration-200 shadow-xl active:scale-95 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 sm:w-6 sm:h-6 ml-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Content Overlay (Bottom-Left Aligned with Global Grid) */}
      <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-14 sm:pb-16 md:pb-20 pt-28">
        <div className="max-w-2xl text-left">
          {/* Eyebrow / Tagline */}
          <p
            key={`eyebrow-${currentIndex}`}
            className="text-xs sm:text-sm md:text-base font-normal tracking-wide text-white/90 mb-2 sm:mb-2.5 drop-shadow-sm transition-all duration-500"
          >
            {slides[currentIndex].eyebrow}
          </p>

          {/* Headline */}
          <h1
            key={`title-${currentIndex}`}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-white leading-tight tracking-tight mb-4 sm:mb-5 drop-shadow-md transition-all duration-500"
          >
            {slides[currentIndex].title}
          </h1>

          {/* Action CTA Button */}
          <div className="pt-1">
            <Link
              href={slides[currentIndex].buttonLink}
              className="inline-flex items-center justify-center bg-[#1e293b] hover:bg-[#0f172a] text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded transition-all duration-200 shadow-md hover:shadow-lg border border-slate-700/60"
            >
              {slides[currentIndex].buttonText}
            </Link>
          </div>
        </div>
      </div>

      {/* Pagination Indicator Dots */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 cursor-pointer rounded-full ${
                isActive
                  ? "w-6 sm:w-7 h-2 bg-white"
                  : "w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/40 hover:bg-white/80"
              }`}
            />
          );
        })}
      </div>
    </section>
  );
}
