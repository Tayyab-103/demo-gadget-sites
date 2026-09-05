"use client";

import React, { useState } from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

const products = productsData as unknown as Product[];

export default function ProductGrid() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleQuickAdd = (product: Product) => {
    const firstBundle = product.bundles && product.bundles[0];
    const quantity = firstBundle ? firstBundle.quantity : 1;
    const price = firstBundle ? (firstBundle.price / firstBundle.quantity).toFixed(2) : product.ssPrice;
    addToCart(product, quantity, price, "Single Unit");
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#FAF8F5] text-[#121820] border-t border-[#C5A059]/20" id="shop">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[0.68rem] font-serif uppercase tracking-[0.24em] text-[#C5A059] mb-3">
            <span>✦</span>
            The Signature Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#121820] leading-[1.15]">
            Curated Artisanal <span className="text-[#C5A059] italic font-normal">Stationery &amp; Desk Goods</span>
          </h2>
          <p className="text-[#1A202C]/75 text-xs sm:text-sm md:text-base leading-relaxed mt-3.5 max-w-xl mx-auto font-normal">
            Elevate your workspace with German-tipped fountain pens, bleedproof milled cotton journals, and architectural brass desk suites.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-7 sm:mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[0.7rem] sm:text-xs font-serif font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#121820] text-[#FAF8F5] shadow-md border border-[#C5A059] scale-105"
                    : "bg-white text-[#121820]/75 border border-[#C5A059]/25 hover:border-[#C5A059] hover:text-[#121820]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const firstBundle = product.bundles && product.bundles[0];
            const currentPrice = firstBundle ? firstBundle.price : product.ssPrice;
            const originalPrice = (Number(currentPrice) * 1.35).toFixed(2);
            const savingsPercent = Math.round(100 - (Number(currentPrice) / Number(originalPrice)) * 100);

            return (
              <div
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-[#C5A059]/20 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#C5A059]/60 hover:-translate-y-1"
              >
                {/* Image Container */}
                <Link
                  href={`/product/${product.id}`}
                  className="relative flex items-center justify-center aspect-[4/3] sm:aspect-square overflow-hidden bg-[#FAF8F5] p-6 sm:p-8 border-b border-[#C5A059]/15"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105 filter drop-shadow-sm"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=600&q=80";
                    }}
                  />

                  {/* Category Pill */}
                  <span className="absolute top-3.5 left-3.5 rounded-full bg-[#121820]/90 px-3 py-1 text-[0.62rem] font-serif font-bold uppercase tracking-wider text-[#FAF8F5] shadow-md backdrop-blur-md border border-[#C5A059]/30">
                    {product.category}
                  </span>

                  {/* Discount Pill */}
                  {savingsPercent > 0 && (
                    <span className="absolute top-3.5 right-3.5 rounded-full bg-[#C5A059] px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-[#121820] shadow-md">
                      Save {savingsPercent}%
                    </span>
                  )}
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  {/* Rating */}
                  <div className="flex items-center gap-1 text-[#C5A059] mb-2.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                    <span className="text-[0.68rem] text-[#1A202C]/60 font-serif font-bold ml-1.5">5.0 (Collector Verified)</span>
                  </div>

                  <Link href={`/product/${product.id}`}>
                    <h3 className="mb-2.5 text-base sm:text-lg font-serif font-bold text-[#121820] leading-snug transition-colors duration-200 line-clamp-2 group-hover:text-[#C5A059]">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-[#1A202C]/70 line-clamp-2 mb-6 leading-relaxed font-normal">
                    {product.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-2 border-t border-[#C5A059]/15 pt-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl sm:text-2xl font-serif font-bold text-[#121820]">${currentPrice}</span>
                      <span className="text-xs font-semibold text-[#1A202C]/40 line-through">${originalPrice}</span>
                    </div>

                    <button
                      onClick={() => handleQuickAdd(product)}
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#121820] text-[#C5A059] border border-[#C5A059]/40 shadow-md transition-all duration-200 hover:bg-[#C5A059] hover:text-[#121820] hover:scale-105 cursor-pointer"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
