"use client";

import React, { useState } from "react";

interface TestimonialItem {
  id: string;
  name: string;
  date: string;
  rating: number;
  quote: string;
  productName: string;
  productPrice: string;
  productImage: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: "01",
    name: "Kenneth R. Myers",
    date: "June 3, 2026",
    rating: 5,
    quote: "I absolutely love this toy shop! The selection is fantastic and shipping was lightning fast. I found everything I needed for my kids' birthdays, from creative STEM puzzles to adorable cuddle plushies.",
    productName: "Ultrasoft Stuffed Animal Plush Bunny",
    productPrice: "$16.99",
    productImage: "/img/products/plush-bunny.jpg",
  },
  {
    id: "02",
    name: "James W. Myers",
    date: "June 12, 2026",
    rating: 5,
    quote: "Shopping at Playhouse Games and Toy Store has been a delightful experience. The quality of the board games is top-notch, and the non-toxic wooden puzzle is beautiful and durable.",
    productName: "The Quest for Everglade Family Board Game",
    productPrice: "$24.99",
    productImage: "/img/products/board-game.jpg",
  },
  {
    id: "03",
    name: "Amanda L. Henderson",
    date: "June 25, 2026",
    rating: 5,
    quote: "Our weekend family game night is completely transformed! The kids love the 3D action figure and the magnetic castle tiles keep them happily engaged for hours without screens.",
    productName: "Architect 3D Magnetic Castle Building Tiles",
    productPrice: "$27.99",
    productImage: "/img/products/magnetic-blocks.jpg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#fff9fa] text-black font-sans border-b border-black/5" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#ff4370] bg-[#ff4370]/10 px-3.5 py-1 rounded-full">
            Parent &amp; Family Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e293b] tracking-tight mt-3">
            What Parents <span className="text-[#ff4370]">Say About Us</span>
          </h2>
          <p className="text-black/60 text-xs sm:text-sm md:text-base leading-relaxed mt-2 font-normal">
            Real stories from parents, grandparents, and gift shoppers who love Playhouse Games and Toy Store.
          </p>
        </div>

        {/* Carousel / Feature Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-7 sm:p-10 md:p-12 border border-black/8 shadow-xl relative">
          
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
            {/* Left: Review Content */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#ffb703] text-base">★★★★★</span>
                <span className="text-xs font-black text-[#ff4370]">({current.rating}.0 Verified Parent)</span>
              </div>

              <blockquote className="text-base sm:text-lg md:text-xl font-bold text-[#1e293b] leading-relaxed mb-6 italic">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="flex items-center justify-between pt-4 border-t border-black/6">
                <div>
                  <h4 className="text-base font-black text-[#1e293b]">{current.name}</h4>
                  <span className="text-xs text-black/50 font-medium">{current.date}</span>
                </div>

                {/* Nav Arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full bg-[#f8fafc] border border-black/10 flex items-center justify-center text-[#1e293b] hover:bg-[#ff4370] hover:text-white transition-all cursor-pointer shadow-xs font-bold"
                    aria-label="Previous review"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-[#f8fafc] border border-black/10 flex items-center justify-center text-[#1e293b] hover:bg-[#ff4370] hover:text-white transition-all cursor-pointer shadow-xs font-bold"
                    aria-label="Next review"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Featured Toy Badge Card from Kiddex */}
            <div className="w-full md:w-64 bg-[#fff5f8] rounded-2xl p-4 border border-[#ff4370]/20 flex-shrink-0 flex items-center gap-4">
              <img
                src={current.productImage}
                alt={current.productName}
                className="w-16 h-16 rounded-xl object-cover border border-black/5 flex-shrink-0"
              />
              <div className="min-w-0">
                <span className="text-[0.62rem] font-black uppercase text-[#ff4370] block">
                  Purchased Toy
                </span>
                <div className="text-xs font-black text-[#1e293b] truncate">
                  {current.productName}
                </div>
                <div className="text-xs font-bold text-[#ff4370] mt-0.5">
                  {current.productPrice}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
