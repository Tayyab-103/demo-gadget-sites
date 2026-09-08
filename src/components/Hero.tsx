"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface CarouselSlide {
  id: string;
  image: string;
  title: string;
  category: string;
}

const carouselSlides: CarouselSlide[] = [
  {
    id: "slide-1",
    image:"/img/hero1.jpg",
    title: "Solid Sitka Spruce Acoustic Guitars",
    category: "Master Luthier Voicing",
  },
  {
    id: "slide-2",
    image:
      "/img/hero2.jpg",
    title: "European Maple Classical Violins",
    category: "Orchestral Strings Collection",
  },
  {
    id: "slide-3",
    image:
      "/img/hero3.jpg",
    title: "Archival Score Anthologies & Folios",
    category: "Acid-Free 120gsm Parchment",
  },
  {
    id: "slide-4",
    image:
      "/img/hero4.jpg",
    title: "Hand-Tuned 17-Key African Mahogany Kalimbas",
    category: "Harmonic C Major Tuning",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 4500);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  return (
    <section
      id="hero-section"
      className="bg-gradient-to-b from-[#FFF5F7] via-[#FAFAFA] to-[#F3E8EE] px-4 sm:px-10 overflow-hidden pt-6 sm:pt-10 h-full relative"
    >
      {/* Background ambient glow spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D2446D]/10 rounded-full blur-3xl pointer-events-none" />

      <main className="flex-grow flex flex-col items-center max-w-7xl mx-auto w-full relative z-10">
        {/* Main Headline */}
        <h1 className="text-center text-[#000000] font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-5xl leading-tight tracking-tight">
          Preferred choice of musicians in{" "}
          <span className="text-[#D2446D]">
            every concert hall &amp; studio
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-center text-gray-600 max-w-lg text-sm sm:text-base leading-relaxed font-medium">
          Discover why performers trust our handcrafted tonewood instruments and
          archival sheet music for acoustic perfection.
        </p>

        {/* CTA Button */}
        <Link
          href="/shop"
          className="mt-8 bg-[#4C0519] text-white px-7 pr-3 py-3 rounded-full text-sm font-extrabold flex items-center space-x-2.5 hover:bg-[#D2446D] transition shadow-lg shadow-[#4C0519]/20 hover:scale-105 active:scale-95"
        >
          <span>Explore Collection &amp; Scores</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.821 11.999h13.43m0 0-6.714-6.715m6.715 6.715-6.715 6.715"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        {/* Bottom Hero Carousel */}
        <div
          className="w-full max-w-5xl mt-12 sm:mt-16 relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Carousel Container */}
          <div className="relative rounded-[36px] sm:rounded-[50px] h-72 sm:h-96 md:h-[440px] w-full overflow-hidden rounded-b-none shadow-2xl border-t border-x border-rose-100 bg-black">
            {carouselSlides.map((slide, idx) => {
              const isActive = currentSlide === idx;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <img
                    className="h-full w-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
                    src={slide.image}
                    alt={slide.title}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Floating Top Tag */}
                  <div className="absolute top-5 left-5 sm:top-6 sm:left-7 z-20">
                    <span className="bg-white/95 backdrop-blur-md text-[#4C0519] text-[0.7rem] sm:text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                      𝄞 {slide.category}
                    </span>
                  </div>

                  {/* Floating Bottom Info */}
                  <div className="absolute bottom-6 left-6 right-20 sm:bottom-8 sm:left-8 z-20 text-white">
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-black drop-shadow-md text-white tracking-tight leading-tight">
                      {slide.title}
                    </h3>
                  </div>
                </div>
              );
            })}

            {/* Left / Right Chevron Controls */}
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-[#4C0519] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all shadow-md cursor-pointer hover:scale-110 text-xl font-bold"
            >
              ‹
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-[#4C0519] text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all shadow-md cursor-pointer hover:scale-110 text-xl font-bold"
            >
              ›
            </button>

            {/* Indicator Dots */}
            <div className="absolute bottom-5 right-6 sm:bottom-6 sm:right-8 z-30 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15">
              {carouselSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === idx
                      ? "w-6 bg-[#D2446D]"
                      : "w-2 bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
