"use client";

import React from "react";
import Link from "next/link";

const categories = [
  {
    name: "Kids Toys",
    icon: "🧸",
    bgShape: "bg-[#ffeaa7]",
    textColor: "text-[#d63031]",
    items: "24+ Products",
  },
  {
    name: "Indoor Games",
    icon: "🎲",
    bgShape: "bg-[#81ecec]",
    textColor: "text-[#0984e3]",
    items: "18+ Products",
  },
  {
    name: "Puzzle Games",
    icon: "🧩",
    bgShape: "bg-[#fab1a0]",
    textColor: "text-[#e17055]",
    items: "16+ Products",
  },
  {
    name: "Kids Books",
    icon: "📚",
    bgShape: "bg-[#a29bfe]",
    textColor: "text-[#6c5ce7]",
    items: "12+ Products",
  },
  {
    name: "Balloons Cards",
    icon: "🎈",
    bgShape: "bg-[#ff7675]",
    textColor: "text-[#d63031]",
    items: "15+ Products",
  },
  {
    name: "Water Toys",
    icon: "🔫",
    bgShape: "bg-[#55efc4]",
    textColor: "text-[#00b894]",
    items: "10+ Products",
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white font-sans relative overflow-hidden" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching Kiddex */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#ff4370] bg-[#ff4370]/10 px-3.5 py-1 rounded-full">
            Featured Collections
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e293b] tracking-tight mt-3">
            Shop by <span className="text-[#ff4370]">Category</span>
          </h2>
        </div>

        {/* 6 Category Items Carousel / Grid matching Kiddex */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/shop?category=${encodeURIComponent(cat.name)}`}
              className="group flex flex-col items-center text-center cursor-pointer"
            >
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4 flex items-center justify-center">
                {/* Whimsical shaped background blob */}
                <div
                  className={`absolute inset-0 rounded-[2rem] rotate-3 group-hover:rotate-12 transition-transform duration-300 ${cat.bgShape} opacity-80 group-hover:opacity-100 shadow-sm`}
                />
                <div className="relative text-4xl sm:text-5xl group-hover:scale-115 transition-transform duration-300 drop-shadow-xs">
                  {cat.icon}
                </div>
              </div>

              <h3 className="text-sm sm:text-base font-black text-[#1e293b] group-hover:text-[#ff4370] transition-colors tracking-tight">
                {cat.name}
              </h3>
              <span className="text-xs text-black/50 font-bold mt-0.5">
                {cat.items}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
