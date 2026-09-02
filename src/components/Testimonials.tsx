"use client";

import React from "react";

const reviews = [
  {
    quote: "The Everden Organic Cotton Tees are without question the softest shirts our family has worn. They hold their shape, fit true-to-size, and have survived endless weekly washes without fading.",
    author: "Jessica & Marcus M.",
    family: "Family of 4 &bull; Austin, TX",
    rating: 5,
    tag: "Everyday Crew Tees",
    image: "/img/avatar1.jpg",
  },
  {
    quote: "The CloudKnit Pullover is our family's favorite weekend layer. The French terry is thick without being bulky, and it doesn't pill around the cuffs. We ordered the 4-pack bundle and saved significantly.",
    author: "Marcus T.",
    family: "Verified Wardrobe Buyer",
    rating: 5,
    tag: "CloudKnit Pullover",
    image: "/img/avatar2.jpg",
  },
  {
    quote: "The weather-resistant overcoat feels like a high-end designer piece at a fraction of the boutique price. Clean tailoring, deep pockets, and water beads right off.",
    author: "Elena & Christian R.",
    family: "Verified Purchasers",
    rating: 5,
    tag: "Comfort Overcoat",
    image: "/img/avatar3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-black/[0.06]" id="testimonials">
      <div className="w-full max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-black/[0.08]">
          <div>
            <span className="text-secondary text-xs font-bold uppercase tracking-[0.2em] block mb-1.5">
              Community Voices
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary">
              Loved by Real Families
            </h2>
          </div>
          
          <div className="flex items-center gap-3 bg-[#FAF8F5] px-4 py-2.5 rounded-2xl border border-black/[0.06]">
            <div className="flex text-secondary text-sm">
              ★★★★★
            </div>
            <div className="text-xs font-bold text-primary">
              4.9/5 &bull; <span className="text-neutral-text/50 font-normal">2,400+ Verified Reviews</span>
            </div>
          </div>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5] rounded-3xl p-7 border border-black/[0.06] flex flex-col justify-between hover:border-secondary/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-secondary text-xs">
                    {"★".repeat(review.rating)}
                  </div>
                  <span className="text-[0.62rem] uppercase tracking-wider font-bold bg-white px-2.5 py-0.5 rounded-full border border-black/[0.05] text-neutral-text/70">
                    {review.tag}
                  </span>
                </div>

                <p className="text-neutral-text/75 text-xs sm:text-sm leading-relaxed mb-6">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-black/[0.06]">
                <img
                  src={review.image}
                  alt={review.author}
                  className="w-10 h-10 rounded-full object-cover border border-black/10 flex-shrink-0"
                />
                <div>
                  <div className="text-xs font-bold text-primary">{review.author}</div>
                  <div className="text-[0.62rem] text-neutral-text/50">{review.family}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
