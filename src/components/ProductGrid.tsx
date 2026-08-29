"use client";

import React, { useState } from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

const products = productsData as unknown as Product[];

interface ProductGridProps {
  hideHeader?: boolean;
}

export default function ProductGrid({ hideHeader = false }: ProductGridProps) {
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
    <section className="py-16 sm:py-20 md:py-24 bg-[#F8F6F0] text-[#18222F] border-t border-[#C87D3B]/20" id="shop">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Optional via hideHeader prop) */}
        {!hideHeader ? (
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C87D3B]/10 border border-[#C87D3B]/30 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#C87D3B] mb-3">
              <span>✈</span>
              Engineered For Transit
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0D1B2A] leading-[1.15] uppercase">
              Signature Travel <span className="text-[#C87D3B] font-light italic lowercase">Systems</span>
            </h2>
            <p className="text-[#18222F]/75 text-xs sm:text-sm md:text-base leading-relaxed mt-3.5 max-w-xl mx-auto font-normal">
              Aerospace aluminum hard-cases, full-grain Italian leather weekenders, and modular vacuum packing suites built for millions of air miles.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-7 sm:mt-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[0.7rem] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#0D1B2A] text-white shadow-md border border-[#C87D3B] scale-105"
                      : "bg-white text-[#18222F]/75 border border-[#C87D3B]/20 hover:border-[#C87D3B] hover:text-[#0D1B2A]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        ) : (
          /* Category Filter Pills Only (when header is hidden on /shop) */
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 sm:mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[0.7rem] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#0D1B2A] text-white shadow-md border border-[#C87D3B] scale-105"
                    : "bg-white text-[#18222F]/75 border border-[#C87D3B]/20 hover:border-[#C87D3B] hover:text-[#0D1B2A]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const firstBundle = product.bundles && product.bundles[0];
            const currentPrice = firstBundle ? firstBundle.price : product.ssPrice;
            const originalPrice = (Number(currentPrice) * 1.4).toFixed(2);
            const savingsPercent = Math.round(100 - (Number(currentPrice) / Number(originalPrice)) * 100);

            return (
              <div
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-[#C87D3B]/20 bg-white shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-[#C87D3B]/60 hover:-translate-y-1"
              >
                {/* Image Container */}
                <Link
                  href={`/product/${product.id}`}
                  className="relative block aspect-[4/3] sm:aspect-square overflow-hidden bg-black/5"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=600&q=80";
                    }}
                  />

                  {/* Category Pill */}
                  <span className="absolute top-3.5 left-3.5 rounded-full bg-[#0D1B2A]/90 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-white shadow-md backdrop-blur-md border border-[#C87D3B]/30">
                    {product.category}
                  </span>

                  {/* Discount Pill */}
                  {savingsPercent > 0 && (
                    <span className="absolute top-3.5 right-3.5 rounded-full bg-[#C87D3B] px-2.5 py-1 text-[0.62rem] font-extrabold uppercase tracking-wider text-white shadow-md">
                      Save {savingsPercent}%
                    </span>
                  )}
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  {/* Rating & verified flight tag */}
                  <div className="flex items-center gap-1 text-[#C87D3B] mb-2.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                    <span className="text-[0.68rem] text-[#18222F]/65 font-bold ml-1.5 uppercase tracking-wider">5.0 (Global Traveler Rated)</span>
                  </div>

                  <Link href={`/product/${product.id}`}>
                    <h3 className="mb-2.5 text-base sm:text-lg font-bold text-[#0D1B2A] leading-snug transition-colors duration-200 line-clamp-2 group-hover:text-[#C87D3B]">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-[#18222F]/70 line-clamp-2 mb-6 leading-relaxed font-normal">
                    {product.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-2 border-t border-[#C87D3B]/15 pt-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl sm:text-2xl font-black text-[#0D1B2A]">${currentPrice}</span>
                      <span className="text-xs font-semibold text-[#18222F]/40 line-through">${originalPrice}</span>
                    </div>

                    <button
                      onClick={() => handleQuickAdd(product)}
                      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-[#0D1B2A] text-[#C87D3B] border border-[#C87D3B]/40 shadow-md transition-all duration-200 hover:bg-[#C87D3B] hover:text-white hover:scale-105 cursor-pointer"
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
