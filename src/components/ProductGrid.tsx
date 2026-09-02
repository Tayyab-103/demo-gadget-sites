"use client";

import React, { useState } from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";

const products = productsData as unknown as Product[];

const badgeMapping: Record<string, string> = {
  product1: "BEST SELLER",
  product2: "NEW ARRIVAL",
  product3: "CHEF'S CHOICE",
};

export default function ProductGrid() {
  return (
    <section className="py-20 md:py-28 bg-[#121316] text-white relative overflow-hidden border-t border-white/5" id="shop">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#E5F2C9]" />
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#E5F2C9]">
              Artisan Workshop Collection
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight font-sans">
            Discover Curated <br className="sm:hidden" />
            <span className="text-white/80">Essentials</span>
          </h2>
        </div>

        {/* Product Cards Grid matching the 4-card / 3-card reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {products.map((product) => {
            const badge = badgeMapping[product.id] || "FEATURED";
            const minPrice = product.bundles && product.bundles[0] ? product.bundles[0].price : product.ssPrice;

            return (
              <div
                key={product.id}
                className="group flex flex-col bg-[#1A1C20] rounded-xl overflow-hidden border border-white/8 hover:border-white/20 transition-all duration-300 shadow-xl"
              >
                {/* Top Media Container */}
                <div className="relative bg-[#23252B] p-6 flex flex-col justify-between aspect-square overflow-hidden">
                  
                  {/* Top Bar: Badge Left, Arrow Right */}
                  <div className="flex items-center justify-between z-10 w-full mb-4">
                    <span className="text-[0.62rem] font-black uppercase tracking-widest text-white/80 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded">
                      {badge}
                    </span>

                    {/* Circular Arrow Button (↗) */}
                    <Link
                      href={`/product/${product.id}`}
                      className="w-8 h-8 rounded-full border border-white/20 bg-black/30 hover:bg-[#E5F2C9] hover:text-[#121316] text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
                      aria-label={`View ${product.name}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </Link>
                  </div>

                  {/* Product Image */}
                  <Link
                    href={`/product/${product.id}`}
                    className="relative w-full flex-1 flex items-center justify-center my-auto overflow-hidden"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-h-[220px] w-auto max-w-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/400x400?text=Kitchen+Tool";
                      }}
                    />
                  </Link>

                </div>

                {/* Bottom Card Content: Title Left, Price Right */}
                <div className="p-5 bg-[#1A1C20] flex items-end justify-between gap-3 border-t border-white/5">
                  <div className="flex flex-col">
                    <Link
                      href={`/product/${product.id}`}
                      className="font-black text-sm uppercase tracking-tight text-white group-hover:text-[#E5F2C9] transition-colors leading-tight line-clamp-2"
                    >
                      {product.name}
                    </Link>
                    <span className="text-[0.62rem] text-white/40 uppercase tracking-widest font-semibold mt-1">
                      {product.category}
                    </span>
                  </div>

                  <div className="text-base font-black text-[#E5F2C9] flex-shrink-0">
                    ${parseFloat(String(minPrice)).toFixed(2)}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Centered Bottom CTA matching reference "VIEW ALL" button */}
        <div className="mt-14 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center font-bold text-xs uppercase tracking-widest text-[#121316] bg-[#E5F2C9] hover:bg-white hover:shadow-[0_0_25px_rgba(229,242,201,0.4)] transition-all duration-300 px-8 py-3.5 rounded-lg shadow-md"
          >
            View All Tools
          </Link>
        </div>

      </div>
    </section>
  );
}
