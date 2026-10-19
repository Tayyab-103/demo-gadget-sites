"use client";

import React from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

const products = productsData as unknown as Product[];

export default function ProductGrid() {
  const { addToCart } = useCart();

  const handleQuickAdd = (product: Product) => {
    const firstBundle = product.bundles && product.bundles[0];
    const quantity = firstBundle ? firstBundle.quantity : 1;
    const price = firstBundle ? (firstBundle.price / firstBundle.quantity).toFixed(2) : product.ssPrice;
    addToCart(product, quantity, price, "Single Unit");
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-black font-sans border-b border-black/5" id="popular-picks">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#ff4370] bg-[#ff4370]/10 px-3.5 py-1 rounded-full">
            Customer Favorites
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e293b] tracking-tight mt-3">
            Today&apos;s <span className="text-[#ff4370]">Popular Picks</span>
          </h2>
          <p className="text-black/60 text-xs sm:text-sm md:text-base leading-relaxed mt-2 font-normal">
            Trending toys, high-octane RC racers, Montessori learning sets, and beloved family board games.
          </p>
        </div>

        {/* Product Cards Grid with Kiddex Styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {products.map((product, idx) => {
            const firstBundle = product.bundles && product.bundles[0];
            const currentPrice = firstBundle ? firstBundle.price : product.ssPrice;
            const originalPrice = (Number(currentPrice) * 1.35).toFixed(2);
            const savingsPercent = Math.round(100 - (Number(currentPrice) / Number(originalPrice)) * 100);

            return (
              <div
                key={product.id}
                className="toy-card group flex flex-col p-4 bg-white border border-black/8 rounded-3xl transition-all duration-300 hover:shadow-xl hover:border-[#ff4370]/30 hover:-translate-y-1.5"
              >
                {/* Image Container with Badges */}
                <Link
                  href={`/product/${product.id}`}
                  className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#f8fafc] mb-4 block"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Discount / Hot Pill */}
                  <span className="absolute top-2.5 left-2.5 rounded-full bg-[#ff4370] px-2.5 py-1 text-[0.62rem] font-black uppercase tracking-wider text-white shadow-md">
                    {idx % 2 === 0 ? `-${savingsPercent}%` : "Hot"}
                  </span>

                  {/* Category Pill */}
                  <span className="absolute bottom-2.5 left-2.5 rounded-full bg-[#1e293b]/85 px-2.5 py-1 text-[0.6rem] font-bold text-white shadow-xs backdrop-blur-xs">
                    {product.category.split("&")[0].trim()}
                  </span>
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    {/* Star Rating */}
                    <div className="flex items-center gap-1.5 mb-1.5 text-[#ffb703] text-xs font-bold">
                      <span>★★★★★</span>
                      <span className="text-[0.68rem] text-black/50 font-semibold">(4.9)</span>
                    </div>

                    <Link href={`/product/${product.id}`}>
                      <h3 className="mb-2 text-sm sm:text-base font-black text-[#1e293b] leading-snug transition-colors duration-200 line-clamp-2 group-hover:text-[#ff4370]">
                        {product.name}
                      </h3>
                    </Link>

                    <p className="text-xs text-black/60 line-clamp-2 mb-4 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Price & Add to Cart button */}
                  <div className="mt-auto flex items-center justify-between gap-2 border-t border-black/6 pt-3.5">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg sm:text-xl font-black text-[#ff4370]">${currentPrice}</span>
                      <span className="text-xs font-semibold text-black/40 line-through">${originalPrice}</span>
                    </div>

                    <button
                      onClick={() => handleQuickAdd(product)}
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-[#ff4370] text-white shadow-md transition-all duration-200 hover:bg-[#e63560] hover:scale-105 cursor-pointer"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
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
