"use client";

import React, { useState } from "react";

const testimonials = [
  {
    quote: "The Briarforge Hand Trowel is hands down the best gardening tool I've held in 25 years of horticultural work. The blade cuts through heavy clay and stony soil without flexing a single millimeter.",
    author: "Eleanor Vance",
    role: "Master Gardener & Nursery Curator",
    image: "/img/how_it_works_1.jpg",
    location: "Portland, OR",
  },
  {
    quote: "These Japanese SK5 bypass pruners slice through hardwood rose stems and thick apple branches like butter. Zero bark crushing and the spring cushioning saves my hands during full days of pruning.",
    author: "Arthur Pendelton",
    role: "Estate Landscaper & Arborist",
    image: "/img/how_it_works_2.jpg",
    location: "Asheville, NC",
  },
  {
    quote: "The 3-prong claw cultivator loosened my hard-packed vegetable beds in half the time. The ash handle has a wonderful natural balance and the brass rivets give it that true heirloom feel.",
    author: "Clara Hawthorne",
    role: "Organic Homesteader & Market Grower",
    image: "/img/how_it_works_3.jpg",
    location: "Austin, TX",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const current = testimonials[activeIndex];

  return (
    <section className="py-16 md:py-24 bg-[#FAF9F6] relative overflow-hidden border-b border-black/5" id="testimonials">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Standardized Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#265C1E]">
                FIELD ENDORSEMENTS
              </span>
              <span className="w-8 h-[1.5px] bg-[#265C1E]/50 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#11281A] uppercase tracking-tight font-sans">
              Trusted by Master <span className="text-[#265C1E]">Growers</span>
            </h2>
            <p className="text-neutral-text/70 text-xs sm:text-sm mt-3 leading-relaxed">
              Real feedback from professional horticulturalists, botanical arborists, and dedicated home gardeners.
            </p>
          </div>

          {/* 5-Star Rating Pill */}
          <div className="flex items-center gap-3 bg-white border border-black/5 px-5 py-3 rounded-2xl shadow-xs self-start md:self-auto">
            <div className="flex gap-1 text-[#265C1E]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span className="text-xs font-black text-[#11281A]">4.9 / 5.0 Rating</span>
          </div>
        </div>

        {/* Featured Testimonial Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-md flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden flex-shrink-0 bg-neutral-200 border border-black/5 shadow-xs">
            <img
              src={current.image}
              alt={current.author}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div className="mb-6">
              <p className="text-sm sm:text-base md:text-lg font-medium text-[#11281A] leading-relaxed italic">
                &ldquo;{current.quote}&rdquo;
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-black/5 flex-wrap gap-4">
              <div>
                <div className="text-sm font-extrabold text-[#11281A] uppercase tracking-wider">
                  {current.author}
                </div>
                <div className="text-xs text-[#265C1E] font-semibold">
                  {current.role} • {current.location}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  aria-label="Previous Review"
                  className="w-9 h-9 rounded-full border border-black/10 bg-[#FAF9F6] hover:bg-[#265C1E] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  ←
                </button>
                <button
                  onClick={nextTestimonial}
                  aria-label="Next Review"
                  className="w-9 h-9 rounded-full border border-black/10 bg-[#FAF9F6] hover:bg-[#265C1E] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  →
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
