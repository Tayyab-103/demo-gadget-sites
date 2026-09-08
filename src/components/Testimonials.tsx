"use client";

import React, { useState } from "react";

const reviews = [
  {
    quote:
      "This pet carrier backpack made traveling with Bella so easy! The breathable mesh keeps her cool, the transparent bubble window lets her look out happily, and the safety clip gives me complete peace of mind.",
    owner: "Sarah Jenkins",
    pet: "Bella (French Bulldog)",
    role: "Verified Pet Parent",
    rating: 5,
    product: "Pet Carrier Backpack",
    petImage: "/img/products/product1.jpg",
  },
  {
    quote:
      "My pup Milo is obsessed with these chew toys! They hold up remarkably well to daily chewing, keep his teeth clean, and keep him happily occupied for hours.",
    owner: "David Keller",
    pet: "Milo (Corgi)",
    role: "Verified Pet Parent",
    rating: 5,
    product: "Small Dog Chew Toys",
    petImage: "/img/products/product2.jpg",
  },
  {
    quote:
      "The self-cleaning litter box scoop is an absolute game changer. The sturdy aluminum slots sift through litter in seconds, leaving clean litter behind and making daily cleanup effortless.",
    owner: "Elena Ross",
    pet: "Oliver (Scottish Fold)",
    role: "Verified Pet Parent",
    rating: 5,
    product: "Self-Cleaning Litter Scoop",
    petImage: "/img/products/product3.jpg",
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
    <section className="py-12 sm:py-16 md:py-20 bg-neutral-bg relative overflow-hidden" id="testimonials">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Left-Aligned Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-stone-200/80 shadow-xs mb-3.5">
              <span className="text-xs">🐾</span>
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-secondary">
                PET PARENT STORIES
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight">
              Loved by Pets, <span className="italic text-secondary font-serif">Adored by Parents</span>
            </h2>
            <p className="text-neutral-text/75 text-sm sm:text-base mt-2.5 leading-relaxed">
              Read real feedback from our devoted community of dog lovers and cat owners nationwide.
            </p>
          </div>

          {/* Aggregate Rating Chip */}
          <div className="flex items-center gap-4 bg-white border border-stone-200/80 px-6 py-3.5 rounded-2xl flex-shrink-0 shadow-xs">
            <div className="flex text-amber-500 text-lg">
              {"★★★★★"}
            </div>
            <div className="border-l border-stone-200 pl-4">
              <div className="text-base font-bold text-primary leading-none">4.9 / 5.0</div>
              <div className="text-[0.65rem] uppercase tracking-wider text-neutral-text/50 font-bold mt-1">1,400+ Happy Paws</div>
            </div>
          </div>
        </div>

        {/* Featured Pet Review Showcase Card */}
        <div className="bg-white border border-stone-200/80 rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Pet Photo & Tag (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-md border border-stone-200/80 bg-neutral-bg">
                <img
                  src={current.petImage}
                  alt={current.pet}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/img/hero1.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider bg-primary text-white px-3 py-1 rounded-full inline-block mb-1.5 shadow-sm">
                    {current.product}
                  </span>
                  <div className="text-sm font-serif font-bold text-white/95">{current.pet}</div>
                </div>
              </div>
            </div>

            {/* Right: Quote, Rating, Author & Navigation (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between text-left">
              <div>
                {/* Stars & Tag */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex text-amber-500 text-lg">
                    {"★★★★★"}
                  </div>
                  <span className="text-[0.68rem] uppercase font-bold text-secondary tracking-widest bg-neutral-bg border border-stone-200/80 px-3 py-1 rounded-full">
                    5.0 Verified Purchase
                  </span>
                </div>

                {/* Big Quote */}
                <blockquote className="font-serif text-lg sm:text-xl md:text-2xl text-primary font-medium leading-relaxed mb-8">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 mb-8">
                  <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center font-serif font-bold text-base shadow-sm">
                    {current.owner.charAt(0)}
                  </div>
                  <div>
                    <div className="text-base font-serif font-bold text-primary leading-tight">{current.owner}</div>
                    <div className="text-xs text-neutral-text/60 font-medium">{current.role} • Companion to {current.pet}</div>
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-stone-200">
                <div className="flex items-center gap-2">
                  {reviews.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        i === activeIndex ? "w-8 bg-secondary" : "w-2.5 bg-stone-300 hover:bg-stone-400"
                      }`}
                      aria-label={`Go to review ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-neutral-bg text-primary flex items-center justify-center hover:bg-secondary hover:text-white transition-all cursor-pointer border border-stone-200 shadow-xs"
                    aria-label="Previous review"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-neutral-bg text-primary flex items-center justify-center hover:bg-secondary hover:text-white transition-all cursor-pointer border border-stone-200 shadow-xs"
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
