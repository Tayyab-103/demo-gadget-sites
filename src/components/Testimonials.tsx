"use client";

import React from "react";

const reviews = [
  {
    id: 1,
    name: "Chef Marcus Vance",
    role: "Executive Pastry Chef, Austin TX",
    text: "The balance on the CopperPro Balloon Whisk is exceptional. Whipping meringue requires zero forearm strain, and the 304 stainless steel cleans up spotlessly in commercial dishwashers.",
    rating: 5,
    tag: "Verified Chef",
    tool: "CopperPro Balloon Whisk"
  },
  {
    id: 2,
    name: "Elena Rostova",
    role: "Artisan Sourdough Baker",
    text: "For sourdough hydration calculations, a normal scale doesn't cut it. This digital scale's 0.1g accuracy and fast-response tare button has made our daily bread loaves completely consistent.",
    rating: 5,
    tag: "Verified Baker",
    tool: "Precision Digital Scale"
  },
  {
    id: 3,
    name: "David Sterling",
    role: "Culinary Enthusiast & Home Cook",
    text: "The multi-prep shears easily cut through whole poultry backbone, butcher twine, and delicate herbs without slipping. Easily the highest quality kitchen tool purchase I've made all year.",
    rating: 5,
    tag: "Verified Buyer",
    tool: "Artisan Chef Shears"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#0E0F11] text-white relative overflow-hidden border-t border-white/5" id="reviews">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E5F2C9]" />
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#E5F2C9]">
                Culinary Community
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
              Chef &amp; Baker <span className="text-white/80">Critiques</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex text-[#E5F2C9] gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              ))}
            </div>
            <span className="text-xs font-bold text-white uppercase tracking-wider">
              4.9 / 5.0 Rating (25k+ Kitchens)
            </span>
          </div>
        </div>

        {/* 3 Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#16171A] rounded-2xl p-8 border border-white/8 hover:border-white/20 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6">
                  <div className="flex text-[#E5F2C9] gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                  </div>
                  <span className="bg-white/5 text-[#E5F2C9] text-[0.62rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded border border-white/10">
                    {rev.tag}
                  </span>
                </div>

                <p className="text-xs md:text-sm text-white/70 leading-relaxed italic mb-6">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <div className="font-extrabold text-sm text-white uppercase">
                  {rev.name}
                </div>
                <div className="text-[0.65rem] text-white/50 uppercase tracking-widest font-semibold mb-2">
                  {rev.role}
                </div>
                <div className="text-[0.62rem] font-bold text-[#E5F2C9] uppercase tracking-widest">
                  Tool: {rev.tool}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
