"use client";

import React from "react";

const reviews = [
  {
    author: "Sofia & Baby Mila",
    role: "Verified Parent • Portland, OR",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80",
    quote: "Mila has been wearing the organic cotton bibs since week one and her skin has never had a single rash. The muslin is so incredibly soft — I actually wished they made adult versions. Absolutely worth every cent.",
    rating: 5,
    tag: "Organic Bib Set",
  },
  {
    author: "James & Laura Bennett",
    role: "Verified Parents • Nashville, TN",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80",
    quote: "The heirloom knit cardigan arrived beautifully packaged — it looked like a gift from a boutique. The craftsmanship is extraordinary. Our son wore it for his newborn portraits and everyone was asking where we got it.",
    rating: 5,
    tag: "Heirloom Knit Set",
  },
  {
    author: "Amara Osei",
    role: "Verified Parent • Atlanta, GA",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80",
    quote: "I was nervous about the beechwood teether but knowing it's BPA-free and hand-sanded gave me complete peace of mind. My daughter grabbed it immediately and it's been her favourite for three months running.",
    rating: 5,
    tag: "Beechwood Teether",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white text-[#1E1040] relative overflow-hidden" id="reviews">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 sm:mb-20">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-[#7C3AED]">
                Parent Love & Stories
              </span>
              <div className="h-[1px] flex-1 max-w-xs bg-purple-200" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E1040] tracking-tight leading-tight">
              Stories From Our <span className="text-[#7C3AED]">Nursery Family</span>
            </h2>

            <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-2 max-w-xl font-normal leading-relaxed">
              Over 2,400+ parents trust our gentle essentials for their little ones every single day.
            </p>
          </div>

          {/* Rating Summary */}
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-4 border border-purple-100 shadow-sm flex items-center gap-3.5 flex-shrink-0">
            <div className="text-2xl font-black text-[#1E1040]">4.98</div>
            <div>
              <div className="flex text-amber-400 gap-0.5 text-xs">{"★".repeat(5)}</div>
              <div className="text-[0.65rem] text-gray-500 font-bold uppercase mt-0.5">Verified Parent Score</div>
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-purple-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400 gap-0.5 text-xs">{"★".repeat(r.rating)}</div>
                  <span className="text-[0.62rem] font-bold uppercase tracking-wider text-[#7C3AED] bg-purple-50 px-2.5 py-0.5 rounded-full">
                    {r.tag}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal italic mb-6">
                  &ldquo;{r.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-purple-100">
                <img
                  src={r.avatar}
                  alt={r.author}
                  className="w-10 h-10 rounded-full object-cover border-2 border-purple-100"
                />
                <div>
                  <div className="text-xs font-black text-[#1E1040]">{r.author}</div>
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
