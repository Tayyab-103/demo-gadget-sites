"use client";

import React from "react";

const reviews = [
  {
    author: "Elena Vasquez & Baby Oliver",
    role: "Verified Parent • Austin, TX",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80",
    quote: "The organic muslin bibs and teether set is by far the softest we've ever touched. Oliver drools constantly while teething and this keeps his neck dry and happy without any skin rashes!",
    rating: 5,
    tag: "Organic Bib & Teether Set",
  },
  {
    author: "Jessica & Nathan Cole",
    role: "Verified Parents • Denver, CO",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80",
    quote: "We used the heirloom cardigan and booties for our baby's 3-month milestone photoshoot. The wood buttons and knit quality are heirloom-grade. Everyone asked where we got it!",
    rating: 5,
    tag: "Knitted Cardigan Set",
  },
  {
    author: "Maya Lin",
    role: "Verified Parent • Seattle, WA",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80",
    quote: "Knowing that the beechwood and silicone are completely BPA-free gave me instant peace of mind. The sensory rattle has the perfect grip size for tiny newborn hands.",
    rating: 5,
    tag: "Beechwood Rattle Teether",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] text-[#1E2330] relative overflow-hidden" id="reviews">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-20">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-[#FF6B8B]">
                Parent Love &amp; Stories
              </span>
              <div className="h-[1px] flex-1 max-w-xs bg-[#E5DDD0]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E2330] tracking-tight leading-tight">
              Stories From Our <span className="text-[#FF6B8B]">Nursery Family</span>
            </h2>

            <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2 max-w-xl font-normal leading-relaxed">
              Over 2,400+ parents cherish our gentle essentials every day.
            </p>
          </div>

          {/* Rating Summary */}
          <div className="bg-white rounded-2xl p-4 border border-gray-100 shadow-xs flex items-center gap-3.5 flex-shrink-0">
            <div className="text-2xl font-black text-[#1E2330]">4.98</div>
            <div>
              <div className="flex text-amber-400 gap-0.5 text-xs">
                {"★".repeat(5)}
              </div>
              <div className="text-[0.65rem] text-gray-500 font-bold uppercase mt-0.5">
                Verified Parent Score
              </div>
            </div>
          </div>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-gray-100 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-0.5 text-xs">
                    {"★".repeat(r.rating)}
                  </div>
                  <span className="text-[0.62rem] font-bold uppercase tracking-wider text-[#FF6B8B] bg-[#FFF0F4] px-2.5 py-0.5 rounded-full">
                    {r.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal italic mb-6">
                  &ldquo;{r.quote}&rdquo;
                </p>
              </div>

              {/* Author Row */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src={r.avatar}
                  alt={r.author}
                  className="w-10 h-10 rounded-full object-cover border border-pink-100"
                />
                <div>
                  <div className="text-xs font-black text-[#1E2330]">{r.author}</div>
                  <div className="text-[0.65rem] text-gray-400 font-medium">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
