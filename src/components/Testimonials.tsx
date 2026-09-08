"use client";

import React from "react";

const reviews = [
  {
    quote: "The Chronos 3D Mechanical Wooden Clock is a genuine work of art. The laser cuts were so clean that every single gear snapped into place without glue. Hearing the pendulum tick to life was pure maker bliss.",
    author: "David K.",
    family: "Mechanical Model Enthusiast • Seattle, WA",
    rating: 5,
    tag: "3D Wooden Clock Kit",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote: "Aetheria has completely transformed our weekend game nights. The modular map tiles, miniature meeples, and tactical resource trading kept our table locked in for over two hours. High replayability!",
    author: "Sarah & Liam B.",
    family: "Tabletop Game Night Hosts • Denver, CO",
    rating: 5,
    tag: "Aetheria Strategy Game",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    quote: "The Grandmaster Walnut Chess Vault is true heirloom quality. The weighted Staunton pieces feel substantial and the felt bottoms glide silently on the maple inlays. Fast UPS delivery from Austin.",
    author: "Jonathan M.",
    family: "Chess Club Mentor • Austin, TX",
    rating: 5,
    tag: "Handcrafted Chess Vault",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-black/[0.06] font-sans" id="testimonials">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-black/[0.08]">
          <div>
            <span className="text-[#A36B42] text-xs font-bold uppercase tracking-[0.2em] block mb-1.5">
              Maker &amp; Player Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#191716]">
              Loved by Builders &amp; Gamers
            </h2>
          </div>
          
          <div className="flex items-center gap-3 bg-[#FAF8F5] px-4 py-2.5 rounded-2xl border border-black/[0.06]">
            <div className="flex text-[#A36B42] text-sm">
              ★★★★★
            </div>
            <div className="text-xs font-bold text-[#191716]">
              4.9/5 • <span className="text-black/50 font-normal">3,800+ Verified Player Reviews</span>
            </div>
          </div>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5] rounded-3xl p-7 border border-black/[0.06] flex flex-col justify-between hover:border-[#A36B42]/40 transition-colors shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="text-[#A36B42] text-xs">
                    {"★".repeat(review.rating)}
                  </div>
                  <span className="text-[0.62rem] uppercase tracking-wider font-bold bg-white px-2.5 py-0.5 rounded-full border border-black/[0.05] text-black/70">
                    {review.tag}
                  </span>
                </div>

                <p className="text-black/75 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
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
                  <div className="text-xs font-bold text-[#191716]">{review.author}</div>
                  <div className="text-[0.62rem] text-black/50">{review.family}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
