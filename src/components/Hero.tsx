"use client";

import React from "react";
import Link from "next/link";

const categories = [
  {
    icon: "🥣",
    title: "Grooming &",
    subtitle: "Coat Care",
    href: "/shop",
  },
  {
    icon: "🦴",
    title: "Toys &",
    subtitle: "Playtime",
    href: "/shop",
  },
  {
    icon: "🧴",
    title: "Skin & Coat",
    subtitle: "Health",
    href: "/shop",
  },
  {
    icon: "🛋️",
    title: "Beds &",
    subtitle: "Comfort",
    href: "/shop",
  },
  {
    icon: "🐾",
    title: "All Pet",
    subtitle: "Essentials",
    href: "/shop",
  },
  {
    icon: "🩺",
    title: "Health &",
    subtitle: "Wellness",
    href: "/about",
  },
];

export default function Hero() {
  return (
    <section className="relative bg-[#FAF8F5] pt-6 pb-12 sm:pt-10 sm:pb-16 md:pt-14 md:pb-20 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Action (5 cols) */}
          <div className="lg:col-span-5 text-left z-10">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-primary tracking-tight leading-[1.12] mb-4 sm:mb-6">
              Everything <br />
              <span className="text-secondary italic font-serif">They Love,</span> <br />
              All in One Place
            </h1>

            <p className="text-neutral-text/75 text-xs sm:text-sm md:text-base leading-relaxed max-w-md mb-6 sm:mb-8">
              Thoughtfully engineered grooming, interactive smart toys, and orthopedic beds for happier, healthier pets.
            </p>

            {/* Dark Forest Green Pill Button */}
            <div className="flex justify-start">
              <Link
                href="/shop"
                className="group inline-flex items-center gap-2.5 bg-[#182825] text-white hover:bg-secondary transition-all duration-300 px-7 sm:px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-md hover:shadow-lg"
              >
                <span>Explore Collection</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Dog & Cat Living Room Photo (7 cols) */}
          <div className="lg:col-span-7 relative w-full">
            
            {/* Main Lifestyle Image */}
            <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-xl bg-neutral-200">
              <img
                src="/img/hero1.png"
                alt="Happy companions enjoying Whisker Vale pet essentials"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

          </div>

        </div>

        {/* Bottom Floating Category Pills Bar */}
        <div className="mt-10 sm:mt-14 bg-white rounded-2xl sm:rounded-3xl shadow-lg border border-stone-200/60 p-3 sm:p-5 max-w-6xl mx-auto relative z-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
            {categories.map((cat, idx) => (
              <Link
                key={idx}
                href={cat.href}
                className="flex items-center gap-2.5 p-2 sm:p-2.5 rounded-xl hover:bg-[#FAF8F5] transition-all duration-200 group"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FAF8F5] border border-stone-200/60 flex items-center justify-center text-lg sm:text-xl flex-shrink-0 group-hover:scale-105 group-hover:border-secondary/40 transition-all duration-200">
                  {cat.icon}
                </div>
                <div className="flex flex-col leading-tight min-w-0">
                  <span className="text-xs font-bold text-primary group-hover:text-secondary transition-colors truncate">
                    {cat.title}
                  </span>
                  <span className="text-[0.65rem] text-neutral-text/55 font-medium truncate">
                    {cat.subtitle}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
