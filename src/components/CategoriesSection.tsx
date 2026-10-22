"use client";

import React from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";

const products = productsData as unknown as Product[];

const categoryIcons: Record<
  string,
  { icon: string; bgShape: string; textColor: string; subtitle: string }
> = {
  "Action Figures & Hero Toys": {
    icon: "🦸‍♂️",
    bgShape: "bg-[#ffeaa7]",
    textColor: "text-[#d63031]",
    subtitle: "Action & 3D Figures",
  },
  "Plushies & Soft Toys": {
    icon: "🧸",
    bgShape: "bg-[#fab1a0]",
    textColor: "text-[#e17055]",
    subtitle: "Cuddly Plushies",
  },
  "STEM & Learning Puzzles": {
    icon: "🧩",
    bgShape: "bg-[#81ecec]",
    textColor: "text-[#0984e3]",
    subtitle: "Brain & STEM Toys",
  },
};

export default function CategoriesSection() {
  // Dynamically extract unique categories from products.json
  const availableCategories = Array.from(
    new Set(products.map((p) => p.category).filter(Boolean))
  ).map((catName) => {
    const count = products.filter((p) => p.category === catName).length;
    const config = categoryIcons[catName] || {
      icon: "🎁",
      bgShape: "bg-[#ffeaa7]",
      textColor: "text-[#d63031]",
      subtitle: "Quality Toys",
    };
    return {
      name: catName,
      icon: config.icon,
      bgShape: config.bgShape,
      textColor: config.textColor,
      subtitle: config.subtitle,
      items: `${count} Product${count > 1 ? "s" : ""}`,
    };
  });

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white font-sans relative overflow-hidden" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#ff4370] bg-[#ff4370]/10 px-3.5 py-1 rounded-full">
            Featured Collections
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e293b] tracking-tight mt-3">
            Shop by <span className="text-[#ff4370]">Category</span>
          </h2>
          <p className="text-black/60 text-xs sm:text-sm md:text-base leading-relaxed mt-2 font-normal">
            Explore our curated collections of safe, durable, and joyful toys for your little ones.
          </p>
        </div>

        {/* Available Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 max-w-4xl mx-auto gap-8 sm:gap-10">
          {availableCategories.map((cat) => (
            <Link
              key={cat.name}
              href={`/shop?category=${encodeURIComponent(cat.name)}`}
              className="group flex flex-col items-center text-center p-6 rounded-3xl bg-[#fffafb] border border-black/5 hover:border-[#ff4370]/30 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
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

              <h3 className="text-base sm:text-lg font-black text-[#1e293b] group-hover:text-[#ff4370] transition-colors tracking-tight">
                {cat.name}
              </h3>
              <span className="text-xs text-black/50 font-bold mt-1">
                {cat.items}
              </span>
              <span className="mt-3 text-xs font-black uppercase tracking-wider text-[#ff4370] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                Explore Now →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
