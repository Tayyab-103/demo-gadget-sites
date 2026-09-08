"use client";

import React, { useState } from "react";

const reviews = [
  {
    quote:
      "The 12-wire balloon whisk aerates egg whites into silky, stiff peaks in half the time of my previous French whisks. The weighted copper-accent handle provides unbeatable balance.",
    owner: "Chef Sarah Lin",
    pet: "Executive Pastry Chef, Atelier Lumina",
    role: "Verified Culinary Artisan",
    rating: 5,
    product: "Balloon Whisk",
    petImage: "/img/whisk-action-1.jpg",
  },
  {
    quote:
      "This 0.1g digital scale with built-in drip timer is the most reliable tool on my prep counter. Essential for precision sourdough hydration and specialty coffee extraction.",
    owner: "Marcus Vance",
    pet: "Master Baker, Hearth & Crumb",
    role: "Verified Professional Baker",
    rating: 5,
    product: "Digital Culinary Scale & Timer",
    petImage: "/img/scale-action-1.jpg",
  },
  {
    quote:
      "These multi-prep kitchen shears slice through whole spatchcock poultry bones with zero effort, then pull apart in one twist for spotless sanitization. Indispensable.",
    owner: "Elena Rostova",
    pet: "Culinary Arts Instructor",
    role: "Verified Kitchen Director",
    rating: 5,
    product: "Multi-Prep Chef Shears",
    petImage: "/img/shears-action-1.jpg",
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
    <section className="py-16 sm:py-20 md:py-24 bg-[#F8F6F2] text-[#121316] relative overflow-hidden border-t border-stone-200/80" id="testimonials">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-stone-200/80 shadow-xs mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E06830]" />
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#121316]">
                CHEF &amp; BAKER STORIES
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#121316] tracking-tight leading-tight">
              Tested in Real Kitchens, <br />
              <span className="italic text-[#E06830] font-serif">Endorsed by Professionals</span>
            </h2>
            <p className="text-[#121316]/75 text-sm sm:text-base mt-2.5 leading-relaxed">
              Read feedback from pastry chefs, artisan sourdough bakers, and home cooks nationwide.
            </p>
          </div>

          {/* Aggregate Rating Chip */}
          <div className="flex items-center gap-4 bg-white border border-stone-200/90 px-6 py-3.5 rounded-2xl flex-shrink-0 shadow-sm">
            <div className="flex text-[#E06830] text-lg">
              {"★★★★★"}
            </div>
            <div className="border-l border-stone-200 pl-4">
              <div className="text-base font-bold text-[#121316] leading-none">4.9 / 5.0</div>
              <div className="text-[0.65rem] uppercase tracking-wider text-[#121316]/50 font-bold mt-1">1,200+ Verified Cooks</div>
            </div>
          </div>
        </div>

        {/* Featured Review Showcase Card */}
        <div className="bg-white border border-stone-200/90 rounded-[2.5rem] p-6 sm:p-10 lg:p-12 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Chef / Action Photo (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-md border border-stone-200 bg-stone-100">
                <img
                  src={current.petImage}
                  alt={current.owner}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "/hero-kitchen.jpg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider bg-[#E06830] text-white px-3 py-1 rounded-full inline-block mb-1.5 shadow-sm">
                    {current.product}
                  </span>
                  <div className="text-xs text-white/90">{current.pet}</div>
                </div>
              </div>
            </div>

            {/* Right: Quote, Rating, Author & Navigation (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between text-left">
              <div>
                {/* Stars & Tag */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex text-[#E06830] text-lg">
                    {"★★★★★"}
                  </div>
                  <span className="text-[0.68rem] uppercase font-bold text-[#121316] tracking-widest bg-[#F8F6F2] border border-stone-200 px-3 py-1 rounded-full">
                    5.0 Verified Culinary Purchase
                  </span>
                </div>

                {/* Big Quote */}
                <blockquote className="font-serif text-lg sm:text-xl md:text-2xl text-[#121316] font-medium leading-relaxed mb-8">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 mb-8">
                  <div className="w-11 h-11 rounded-full bg-[#121316] text-[#E06830] flex items-center justify-center font-serif font-bold text-base shadow-sm">
                    {current.owner.charAt(0)}
                  </div>
                  <div>
                    <div className="text-base font-serif font-bold text-[#121316] leading-tight">{current.owner}</div>
                    <div className="text-xs text-[#121316]/60 font-medium">{current.role} • {current.pet}</div>
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
                        i === activeIndex ? "w-8 bg-[#121316]" : "w-2.5 bg-stone-300 hover:bg-stone-400"
                      }`}
                      aria-label={`Go to review ${i + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 rounded-full bg-[#F8F6F2] text-[#121316] flex items-center justify-center hover:bg-[#121316] hover:text-white transition-all cursor-pointer border border-stone-200 shadow-xs"
                    aria-label="Previous review"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 rounded-full bg-[#F8F6F2] text-[#121316] flex items-center justify-center hover:bg-[#121316] hover:text-white transition-all cursor-pointer border border-stone-200 shadow-xs"
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
