"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";
import { BoltIcon, StarRating } from "@/components/Icons";

const siteConfig = siteConfigData as unknown as SiteConfig;

const reviews = [
  {
    quote:
      "The Watch 42mm Smartwatch is sleek and responsive. The display is crystal clear even in direct sunlight, and biometric tracking has been incredibly accurate throughout my workouts.",
    owner: "Marcus Vance",
    role: "Verified Tech Reviewer",
    rating: 5,
    product: "Watch 42mm Smartwatch",
    image: "/img/products/product01.jpg",
  },
  {
    quote:
      "The AeroFit Pro Hi-Fi Headphones are by far the most comfortable headset I've worn during long editing sessions. The CNC aluminum brackets feel indestructible, and the soundstage is pristine.",
    owner: "Elena Rostova",
    role: "Audio Producer & Tech Creator",
    rating: 5,
    product: "Modern Circuit AeroFit Pro Hi-Fi Headphones",
    image: "/img/products/product2.png",
  },
  {
    quote:
      "Super smooth 4K output, responsive handheld controllers, and lightning-fast loading times. The Ninja Gaming Console is a powerhouse for gaming and media streaming.",
    owner: "David Chen",
    role: "Software Architect & Gamer",
    rating: 5,
    product: "Ninja Gaming Console",
    image: "/img/products/product3.jpg",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const current = reviews[activeIndex];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50/80 relative overflow-hidden" id="testimonials">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 bg-primary text-secondary px-4 py-1.5 rounded-full border border-secondary/30 shadow-xs mb-3.5">
              <BoltIcon className="w-3.5 h-3.5 fill-secondary text-secondary shrink-0" />
              <span className="text-[0.68rem] font-black uppercase tracking-[0.2em]">
                VERIFIED TECH EXPERIENCES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary tracking-tight leading-tight uppercase">
              Engineered For Power Users, <span className="text-secondary">Proven Daily</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mt-2.5 leading-relaxed font-medium">
              See how creators, engineers, and tech enthusiasts power their daily setups with {siteConfig.brandName}.
            </p>
          </div>

          {/* Aggregate Rating Chip */}
          <div className="flex items-center gap-4 bg-white border border-gray-200 px-6 py-3.5 rounded-2xl flex-shrink-0 shadow-xs">
            <StarRating count={5} />
            <div className="border-l border-gray-200 pl-4">
              <div className="text-base font-black text-primary leading-none">4.9 / 5.0</div>
              <div className="text-[0.65rem] uppercase tracking-wider text-gray-500 font-bold mt-1">2,400+ Verified Buyers</div>
            </div>
          </div>
        </div>

        {/* Featured Review Card */}
        <div className="bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Product Photo & Tag (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-md border border-gray-200 bg-gray-950">
                <img
                  src={current.image}
                  alt={current.product}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[0.65rem] font-black uppercase tracking-wider bg-primary text-secondary px-3 py-1 rounded-md inline-block mb-1.5 shadow-sm border border-secondary/30">
                    {current.product}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Quote, Rating, Author & Navigation (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between text-left">
              <div>
                {/* Stars & Tag */}
                <div className="flex items-center gap-3 mb-6">
                  <StarRating count={5} />
                  <span className="text-[0.68rem] uppercase font-black text-secondary tracking-widest bg-gray-100 border border-gray-200 px-3 py-1 rounded-full">
                    5.0 Verified Hardware Purchase
                  </span>
                </div>

                {/* Quote */}
                <blockquote className="text-lg sm:text-xl md:text-2xl text-primary font-bold leading-relaxed mb-8">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 mb-8">
                  <div className="w-11 h-11 rounded-xl bg-primary text-secondary flex items-center justify-center font-black text-base shadow-sm border border-secondary/30">
                    {current.owner.charAt(0)}
                  </div>
                  <div>
                    <div className="text-base font-black text-primary leading-tight">{current.owner}</div>
                    <div className="text-xs text-gray-500 font-semibold">{current.role}</div>
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  {reviews.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        i === activeIndex ? "w-8 bg-primary" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to review ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-xl bg-gray-100 text-primary flex items-center justify-center hover:bg-primary hover:text-secondary transition-all cursor-pointer border border-gray-200 shadow-xs"
                    aria-label="Previous review"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-xl bg-gray-100 text-primary flex items-center justify-center hover:bg-primary hover:text-secondary transition-all cursor-pointer border border-gray-200 shadow-xs"
                    aria-label="Next review"
                  >
                    →
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
