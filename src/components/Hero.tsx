"use client";

import React, { useState } from "react";
import Link from "next/link";

const heroGallery = [
  {
    image: "/img/hero1.png",
    badge: "Bestseller",
    tag: "🐾 Comfort & Sleep",
    title: "Orthopedic Rest",
    description: "Cloud-soft memory foam beds designed for deep, restorative pet sleep and joint relief.",
  },
  {
    image: "/img/hero2.png",
    badge: "Staff Pick",
    tag: "🎾 Active Play",
    title: "Interactive Toys",
    description: "Smart durable enrichment toys engineered to stimulate natural instinct and ease anxiety.",
  },
  {
    image: "/img/hero3.png",
    badge: "Top Rated",
    tag: "✨ Coat Care",
    title: "Grooming Essentials",
    description: "Ergonomic slicker brushes designed for silky soft, tangle-free coats and shedding relief.",
  },
];

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  return (
    <section className="relative bg-[#FAF8F5] pt-8 pb-12 sm:pt-12 sm:pb-16 md:pt-14 md:pb-20 overflow-hidden w-full">
      {/* Subtle Ambient Backdrop Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[450px] bg-gradient-to-b from-[#EFE5D8]/70 via-[#FAF8F5]/30 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Typography & Actions (5 cols) */}
          <div className="lg:col-span-5 text-left z-10">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-bold text-primary tracking-tight leading-[1.12] mb-4 sm:mb-5">
              Everything <br />
              <span className="text-secondary italic font-serif">They Love,</span> <br />
              All in One Place
            </h1>

            <p className="text-neutral-text/75 text-xs sm:text-sm md:text-base leading-relaxed max-w-md mb-6 sm:mb-7">
              Thoughtfully engineered grooming, interactive smart toys, and orthopedic beds for happier, healthier pets.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
              <Link
                href="/shop"
                className="group inline-flex items-center gap-2.5 bg-[#182825] text-white hover:bg-secondary transition-all duration-300 px-7 sm:px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md hover:shadow-lg"
              >
                <span>Explore Collection</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-white text-primary hover:text-secondary border border-stone-300/80 hover:border-secondary/40 transition-all duration-300 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-xs"
              >
                <span>Our Story</span>
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="flex items-center flex-wrap gap-x-5 gap-y-1.5 text-[0.7rem] sm:text-xs text-neutral-text/70 font-medium pt-2 border-t border-stone-200/60">
              <span className="flex items-center gap-1"><span className="text-emerald-600 font-bold">✓</span> Vet Endorsed</span>
              <span className="flex items-center gap-1"><span className="text-emerald-600 font-bold">✓</span> 100% Non-Toxic</span>
              <span className="flex items-center gap-1"><span className="text-emerald-600 font-bold">✓</span> 14-Day Guarantee</span>
            </div>
          </div>

          {/* Right Column: Expanding Image Gallery (7 cols) */}
          <div className="lg:col-span-7 relative w-full">
            {/* Mobile: swipeable snap carousel with every card fully readable */}
            <div
              className="md:hidden flex gap-3 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              onScroll={(e) => {
                const el = e.currentTarget;
                const card = el.firstElementChild as HTMLElement | null;
                if (!card) return;
                const idx = Math.round(el.scrollLeft / (card.offsetWidth + 12));
                const clamped = Math.max(0, Math.min(heroGallery.length - 1, idx));
                if (clamped !== activeIdx) setActiveIdx(clamped);
              }}
            >
              {heroGallery.map((item, idx) => (
                <Link
                  key={idx}
                  href="/shop"
                  className="relative snap-center shrink-0 w-[82%] h-[380px] rounded-3xl overflow-hidden shadow-lg bg-neutral-200"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="bg-[#182825]/90 text-white backdrop-blur-md text-[0.62rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
                      {item.badge}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-5 text-white bg-gradient-to-t from-black/85 via-black/40 to-transparent">
                    <span className="inline-block text-[0.62rem] font-bold uppercase tracking-wider text-secondary bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full w-fit mb-2">
                      {item.tag}
                    </span>
                    <h2 className="font-serif text-xl font-bold text-white mb-1.5 leading-snug">
                      {item.title}
                    </h2>
                    <p className="text-xs text-white/90 leading-relaxed mb-2 line-clamp-2">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[0.72rem] font-bold uppercase tracking-wider text-secondary">
                      <span>Shop Now</span>
                      <span>→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Desktop/tablet: expanding hover gallery */}
            <div
              className="hidden md:flex items-center gap-3 sm:gap-4 md:h-[450px] w-full touch-pan-y"
              onTouchMove={(e) => {
                // Touchscreens have no hover: expand whichever card the finger is sliding over
                const t = e.touches[0];
                const el = document.elementFromPoint(t.clientX, t.clientY)?.closest<HTMLElement>("[data-hero-idx]");
                const idx = el ? Number(el.dataset.heroIdx) : NaN;
                if (!Number.isNaN(idx) && idx !== activeIdx) setActiveIdx(idx);
              }}
            >
              {heroGallery.map((item, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <div
                    key={idx}
                    onPointerEnter={() => setActiveIdx(idx)}
                    onPointerMove={() => activeIdx !== idx && setActiveIdx(idx)}
                    onFocus={() => setActiveIdx(idx)}
                    tabIndex={0}
                    data-hero-idx={idx}
                    className={`relative group transition-all duration-500 rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer bg-neutral-200 h-full ${
                      isActive ? "flex-[2.5] md:flex-[2.8]" : "flex-1 opacity-80 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Top Floating Badge */}
                    <div className="absolute top-3.5 left-3.5 z-10">
                      <span className="bg-[#182825]/90 text-white backdrop-blur-md text-[0.62rem] sm:text-[0.68rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                        {item.badge}
                      </span>
                    </div>

                    {/* Collapsed State Title Label */}
                    <div
                      className={`absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 pointer-events-none ${
                        isActive ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      <p className="text-white text-[0.68rem] sm:text-xs font-bold truncate">
                        {item.title}
                      </p>
                    </div>

                    {/* Expanded Hover Overlay with Details */}
                    <div
                      className={`absolute inset-0 flex flex-col justify-end p-5 sm:p-8 text-white bg-gradient-to-t from-black/85 via-black/40 to-transparent transition-opacity duration-300 pointer-events-none ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <span className="inline-block text-[0.62rem] sm:text-[0.68rem] font-bold uppercase tracking-wider text-secondary bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full w-fit mb-2">
                        {item.tag}
                      </span>
                      <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-white mb-1.5 leading-snug">
                        {item.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-white/90 max-w-xs leading-relaxed mb-2 line-clamp-2">
                        {item.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[0.72rem] font-bold uppercase tracking-wider text-secondary">
                        <span>Shop Now</span>
                        <span>→</span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Selection indicator dots */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {heroGallery.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIdx(idx)}
                  aria-label={`Select ${heroGallery[idx].title}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    activeIdx === idx
                      ? "w-6 h-1.5 bg-[#182825]"
                      : "w-1.5 h-1.5 bg-stone-300 hover:bg-stone-400"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
