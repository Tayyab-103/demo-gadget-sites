"use client";

import React from "react";

const testimonials = [
  {
    quote: "The botanical inks have incredible depth and zero bleeding. My calligraphy lines stay crisp and lightfast on heavy watercolor paper.",
    author: "Eleanor Vance",
    role: "Botanical Illustrator",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80"
  },
  {
    quote: "The cold-pressed sketchbook lays completely flat when open. I take it everywhere for plein air watercolor work.",
    author: "Julian Thorne",
    role: "Fine Artist & Educator",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
  },
  {
    quote: "The sable detail brushes keep their razor-sharp point even after months of intense detailing work.",
    author: "Clara Sterling",
    role: "Master Miniaturist",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden border-b border-black/5" id="testimonials">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Display Headline */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-14">
          <span className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-secondary mb-2 sm:mb-3 inline-block">
            Artist Reviews
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-primary leading-[1.15] tracking-tight font-serif">
            Trusted in Over 15,000+ <br />
            <span className="text-secondary">Creative Studios</span>
          </h2>
        </div>

        {/* 3-Column Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-[#FAF9F5] rounded-2xl p-6 sm:p-8 border border-black/5 flex flex-col items-center text-center">
              
              {/* Star Rating */}
              <div className="flex justify-center gap-1 text-[#C99236] text-xs sm:text-sm mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-xs sm:text-sm leading-relaxed text-[#5A554E] font-normal mb-5 sm:mb-6 flex-1 italic">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Author Avatar */}
              <img
                src={item.image}
                alt={item.author}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover mb-2 border border-black/10"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/100x100?text=Artist";
                }}
              />

              {/* Author Info */}
              <h3 className="text-xs sm:text-sm font-bold text-primary">
                {item.author}
              </h3>
              <span className="text-[0.62rem] sm:text-[0.65rem] text-neutral-text/50 font-semibold tracking-wider uppercase">
                {item.role}
              </span>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
