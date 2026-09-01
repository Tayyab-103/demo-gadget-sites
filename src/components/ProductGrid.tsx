"use client";

import React from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";

const products = productsData as unknown as Product[];

export default function ProductGrid() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#FAF9F5] relative overflow-hidden border-b border-black/5" id="shop">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header Row with View More */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 md:mb-16 border-b border-black/5 pb-6 sm:pb-8">
          <div>
            <span className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.22em] text-secondary mb-2 block">
              Studio Collection
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-black uppercase text-primary tracking-tight">
              Featured <span className="text-secondary">Supplies</span>
            </h2>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-transparent border border-black/15 hover:border-secondary hover:bg-secondary hover:text-white text-primary text-xs font-bold uppercase tracking-widest px-6 py-2.5 sm:px-7 sm:py-3 rounded-full transition-all duration-300 self-start sm:self-auto shadow-sm"
          >
            View More
            <span className="text-sm">→</span>
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {products.map((product) => {
            const bundlePrices = product.bundles?.map((b) => Number(b.price)) || [];
            const minPrice = bundlePrices.length ? Math.min(...bundlePrices) : Number(product.ssPrice);
            const maxPrice = bundlePrices.length ? Math.max(...bundlePrices) : Number(product.ssPrice);
            const priceLabel =
              minPrice === maxPrice
                ? `$${minPrice.toFixed(2)}`
                : `$${minPrice.toFixed(2)} - $${maxPrice.toFixed(2)}`;

            return (
              <div key={product.id} className="group flex flex-col bg-white sm:bg-transparent p-4 sm:p-0 rounded-2xl sm:rounded-none border sm:border-0 border-black/5">
                {/* Image Frame Container */}
                <Link
                  href={`/product/${product.id}`}
                  className="relative w-full aspect-4/5 bg-[#F5F4EF] rounded-2xl overflow-hidden mb-4 sm:mb-5 flex items-center justify-center p-4 sm:p-6 border border-black/5 shadow-sm group-hover:shadow-xl transition-all duration-500"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/400x500?text=Art+Supply";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </Link>

                {/* Info Block */}
                <div className="flex flex-col flex-1">
                  {/* Category & Star Rating Row */}
                  <div className="flex items-center justify-between gap-2 mb-1.5 sm:mb-2">
                    <span className="text-[0.62rem] sm:text-[0.65rem] font-bold uppercase tracking-[0.16em] text-neutral-text/50 truncate">
                      {product.category || "Studio Supply"}
                    </span>
                    <div className="flex items-center gap-1 text-[#C99236] text-xs flex-shrink-0">
                      <span>★★★★★</span>
                      <span className="text-[0.62rem] sm:text-[0.65rem] text-neutral-text/40 font-medium ml-0.5">(5)</span>
                    </div>
                  </div>

                  {/* Product Title */}
                  <Link href={`/product/${product.id}`}>
                    <h3 className="text-base sm:text-lg font-bold text-primary group-hover:text-secondary transition-colors duration-300 line-clamp-2 leading-snug mb-2">
                      {product.name}
                    </h3>
                  </Link>

                  {/* Price Row */}
                  <div className="mt-auto pt-2 flex items-center justify-between border-t border-black/5 sm:border-0 sm:pt-1">
                    <span className="text-base sm:text-lg md:text-xl font-extrabold text-primary">
                      {priceLabel}
                    </span>
                    <Link
                      href={`/product/${product.id}`}
                      className="text-xs font-bold uppercase tracking-wider text-secondary hover:text-primary transition-colors flex items-center gap-1"
                    >
                      Shop Now →
                    </Link>
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
