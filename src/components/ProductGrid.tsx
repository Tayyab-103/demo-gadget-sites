"use client";

import React, { useState } from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";

const products = productsData as unknown as Product[];

const cardMeta: Record<string, { badge: string; badgeBg: string }> = {
  product1: {
    badge: "Bestseller",
    badgeBg: "bg-[#182825] text-white",
  },
  product2: {
    badge: "Smart Toy",
    badgeBg: "bg-secondary text-white",
  },
  product3: {
    badge: "Top Rated",
    badgeBg: "bg-[#182825] text-white",
  },
};

export default function ProductGrid() {
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#FAF8F5] relative overflow-hidden" id="shop">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-stone-200/60 shadow-xs mb-3.5">
            <span className="text-xs">🐾</span>
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-secondary">
              WHISKER VALE MERCANTILE CATALOG
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight mb-3">
            Curated <span className="italic text-secondary font-serif">Pet Essentials</span>
          </h2>

          <p className="text-neutral-text/70 text-sm sm:text-base leading-relaxed">
            Thoughtfully engineered for safety, comfort, and everyday joy.
          </p>
        </div>

        {/* 3-Card Catalog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => {
            const firstBundle = product.bundles && product.bundles[0];
            const startingPrice = firstBundle ? firstBundle.price : product.ssPrice;
            const originalPrice = (Number(startingPrice) * 1.35).toFixed(2);
            const meta = cardMeta[product.id] || {
              badge: "Essential",
              badgeBg: "bg-[#182825] text-white",
            };
            const isLiked = liked[product.id];

            return (
              <div
                key={product.id}
                className="bg-white rounded-[2rem] border border-stone-200/60 p-5 sm:p-6 shadow-xs hover:shadow-xl hover:border-secondary/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* 1:1 Aspect Ratio Image Container */}
                  <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#FAF8F5] mb-5">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/600x600?text=Pet+Product";
                      }}
                    />

                    {/* Top Left Badge */}
                    <span
                      className={`absolute top-3.5 left-3.5 ${meta.badgeBg} text-[0.65rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm`}
                    >
                      {meta.badge}
                    </span>

                    {/* Top Right Wishlist Heart Button */}
                    <button
                      onClick={(e) => toggleLike(product.id, e)}
                      aria-label="Save to favorites"
                      className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-sm shadow-sm hover:scale-110 transition-all cursor-pointer border border-black/[0.04]"
                    >
                      <span className={isLiked ? "text-red-500" : "text-stone-400 hover:text-red-500"}>
                        {isLiked ? "♥" : "♡"}
                      </span>
                    </button>
                  </div>

                  {/* Rating Block */}
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <div className="flex text-amber-500 text-xs">
                      {"★★★★★"}
                    </div>
                    <span className="text-xs font-bold text-neutral-text/75">
                      5.0 <span className="text-neutral-text/40 font-normal">(380)</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-primary mb-2.5 leading-snug group-hover:text-secondary transition-colors">
                    <Link href={`/product/${product.id}`}>
                      {product.name}
                    </Link>
                  </h3>

                  {/* Price & Savings Row */}
                  <div className="flex items-baseline gap-2.5 mb-3">
                    <span className="text-2xl font-bold text-primary font-serif">
                      ${startingPrice}
                    </span>
                    <span className="text-xs font-semibold text-neutral-text/40 line-through">
                      ${originalPrice}
                    </span>
                  </div>

                  {/* Savings Tag */}
                  <div className="mb-6">
                    <span className="inline-flex items-center gap-1 bg-[#FAF8F5] border border-stone-200/60 text-secondary text-[0.68rem] font-bold px-3 py-1 rounded-lg">
                      <span>✓</span>
                      <span>Up to 8-Pack Savings</span>
                    </span>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-2">
                  <Link
                    href={`/product/${product.id}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#182825] text-white hover:bg-secondary transition-all duration-300 py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg"
                  >
                    <span>View Product &amp; Tiers</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
