"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

interface SlideItem {
  id: number;
  subtitlePrefix: string;
  subtitleHighlight: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  btnText: string;
  btnUrl: string;
  image: string;
  alt: string;
}

const slides: SlideItem[] = [
  {
    id: 1,
    subtitlePrefix: "A",
    subtitleHighlight: "Different",
    titlePrefix: "Online",
    titleHighlight: "Art Supply",
    titleSuffix: "Shop",
    description:
      "There are many variations of passages of master-grade pigments and craft supplies available, curated for passionate painters, illustrators, and studio artisans...",
    btnText: "SHOP NOW",
    btnUrl: "/shop",
    image: "/img/hero1.webp",
    alt: "Artist watercolour paint set with mixing palette",
  },
  {
    id: 2,
    subtitlePrefix: "Pure",
    subtitleHighlight: "Archival",
    titlePrefix: "Finest",
    titleHighlight: "Studio Acrylic",
    titleSuffix: "Paints",
    description:
      "Handcrafted heavy body pigments and precision sketching tools engineered for unmatched lightfast brilliance, buttery texture, and gallery permanence...",
    btnText: "SHOP NOW",
    btnUrl: "/shop",
    image: "/img/hero2.jpg",
    alt: "Studio acrylic paint tubes, palette knives and artist supplies",
  },
  {
    id: 3,
    subtitlePrefix: "Handcrafted",
    subtitleHighlight: "Studio",
    titlePrefix: "Master",
    titleHighlight: "Brush & Craft",
    titleSuffix: "Series",
    description:
      "Premium hardwood handles, razor-sharp natural bristles, and archival sketchbooks curated to elevate your creative vision from initial concept to masterpiece...",
    btnText: "SHOP NOW",
    btnUrl: "/shop",
    image: "/img/hero3.jpg",
    alt: "Fine artist paint brushes, paint tubes and studio sketchbook",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Autoplay timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  return (
    <section
      ref={sliderRef}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      tabIndex={0}
      aria-label="Hero Slider"
      className="hero-slider hero-slider-one relative w-full overflow-hidden bg-neutral-bg focus:outline-none"
    >
      {/* Slides Container */}
      <div className="relative min-h-[560px] sm:min-h-[620px] md:min-h-[680px] lg:min-h-[720px] w-full flex items-center">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              role="tabpanel"
              id={`slick-slide0${index}`}
              aria-hidden={!isActive}
              aria-describedby={`slick-slide-control0${index}`}
              className={`single-slide slick-slide absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out flex items-center ${
                isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* Right Side Background Image with seamless gradient blending */}
              <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className={`w-full h-full object-cover object-center transition-transform duration-1000 ease-out ${
                    isActive ? "scale-100" : "scale-105"
                  }`}
                />
                {/* Horizontal Gradient blend for desktop: dissolves left side into neutral-bg */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-neutral-bg via-neutral-bg/70 to-transparent hidden lg:block"
                  aria-hidden="true"
                />
                {/* Vertical Gradient blend for mobile: ensures text legibility over image */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-neutral-bg via-neutral-bg/85 to-neutral-bg/40 lg:hidden"
                  aria-hidden="true"
                />
              </div>

              {/* Slide Content */}
              <div className="hero-content-one container relative z-20 mx-auto max-w-7xl px-6 sm:px-10 lg:px-12 py-16 sm:py-20 md:py-24">
                <div className="max-w-xl lg:max-w-2xl">
                  <div className="slider-text-info">
                    {/* Subtitle (H2) */}
                    <h2
                      className={`text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-bold text-neutral-text tracking-tight transition-all duration-700 delay-100 ${
                        isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                      }`}
                    >
                      {slide.subtitlePrefix}{" "}
                      <span className="text-secondary">{slide.subtitleHighlight}</span>
                    </h2>

                    {/* Main Title (H1) */}
                    <h1
                      className={`mt-2 sm:mt-3 text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black text-neutral-text tracking-tight leading-[1.12] transition-all duration-700 delay-200 ${
                        isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                      }`}
                    >
                      {slide.titlePrefix}{" "}
                      <span className="text-secondary">{slide.titleHighlight}</span>{" "}
                      {slide.titleSuffix}
                    </h1>

                    {/* Paragraph description */}
                    <p
                      className={`mt-4 sm:mt-6 text-xs sm:text-sm md:text-base text-neutral-text/75 leading-relaxed max-w-md sm:max-w-lg transition-all duration-700 delay-300 ${
                        isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                      }`}
                    >
                      {slide.description}
                    </p>

                    {/* Action button section with accent line */}
                    <div
                      className={`mt-7 sm:mt-9 transition-all duration-700 delay-400 ${
                        isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                      }`}
                    >
                      {/* Vertical coral/secondary accent mark as seen in template design */}
                      <div className="w-[2.5px] h-5 bg-secondary mb-3" aria-hidden="true" />

                      <div className="hero-btn">
                        <Link
                          href={slide.btnUrl}
                          className="slider-btn group relative inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-neutral-text transition-colors duration-300 hover:text-secondary"
                        >
                          <span>{slide.btnText}</span>
                          {/* Animated underline */}
                          <span
                            className="absolute -bottom-1 left-0 h-[2px] w-full bg-neutral-text transition-all duration-300 group-hover:bg-secondary group-hover:w-full"
                            aria-hidden="true"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Prev Navigation Arrow */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="slick-prev slick-arrow absolute left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/10 backdrop-blur-xs text-neutral-text hover:bg-secondary hover:text-white transition-all duration-300 shadow-sm hover:scale-105 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-200"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </button>

        {/* Next Navigation Arrow */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next Slide"
          className="slick-next slick-arrow absolute right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/10 backdrop-blur-xs text-neutral-text hover:bg-secondary hover:text-white transition-all duration-300 shadow-sm hover:scale-105 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-200"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>

        {/* Simple Dots Indicator inside hero section */}
        <ul
          className="slick-dots absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center gap-3"
          role="tablist"
        >
          {slides.map((_, index) => {
            const isActive = index === currentSlide;
            return (
              <li
                key={index}
                role="presentation"
                className={isActive ? "slick-active" : ""}
              >
                <button
                  type="button"
                  role="tab"
                  id={`slick-slide-control0${index}`}
                  aria-controls={`slick-slide0${index}`}
                  aria-label={`Slide ${index + 1} of ${totalSlides}`}
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => goToSlide(index)}
                  className={`cursor-pointer transition-all duration-300 rounded-full block p-0 ${
                    isActive
                      ? "w-3 h-3 bg-secondary scale-110 shadow-xs"
                      : "w-3 h-3 bg-neutral-text/25 hover:bg-neutral-text/50"
                  }`}
                />
              </li>
            );
          })}
        </ul>
      </div>

      {/* Proof points strip at base of hero */}
      <div className="relative z-20 border-t border-black/5 bg-white/60 backdrop-blur-xs">
        <div className="mx-auto grid max-w-6xl grid-cols-2 px-4 sm:px-6 lg:grid-cols-4">
          {[
            "Museum Grade Pigments",
            "Studio Tested Quality",
            "60-Day Guarantee",
            "Free Tracked Shipping",
          ].map((point) => (
            <div
              key={point}
              className="flex items-center justify-center gap-2 sm:gap-2.5 border-b border-black/5 py-3.5 sm:py-4 text-center even:border-l even:border-black/5 lg:border-b-0 lg:border-l lg:first:border-l-0"
            >
              <span
                className="flex h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-primary text-[0.55rem] sm:text-[0.65rem] font-black"
                aria-hidden="true"
              >
                ✓
              </span>
              <span className="text-[0.62rem] sm:text-[0.68rem] font-bold uppercase tracking-wider text-neutral-text">
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
