"use client";

import React from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";

const products = productsData as unknown as Product[];

export default function ProductGrid() {
  return (
    <section className="py-14 sm:py-20 md:py-28 bg-neutral-bg relative overflow-hidden" id="shop">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <span className="eyebrow justify-center mb-3">
            The Collection
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight">
            Explore Our <span className="text-secondary">Travel Gear</span>
          </h2>
          <div className="mx-auto mt-4 mb-4 w-10 h-px bg-secondary" />
          <p className="text-neutral-text/60 text-xs sm:text-sm md:text-base leading-relaxed">
            Select a piece below to customize your bundle and get ready for your next trip.
          </p>
        </div>

        {/* Product Grid */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {products.map((product) => {
            const bundles = product.bundles;
            const minPrice = bundles && bundles.length > 0 ? bundles[0].price : Number(product.ssPrice);
            const maxPrice = bundles && bundles.length > 0 ? bundles[bundles.length - 1].price : Number(product.ssPrice);

            return (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group flex flex-col w-full sm:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] bg-white rounded-xl border border-black/6 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300"
              >
                {/* Image Stage */}
                <div className="relative aspect-square overflow-hidden bg-[#F0EDE8]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/400x400?text=Travel+Gear";
                    }}
                  />
                  {product.category && (
                    <span className="absolute top-3 left-3 bg-secondary text-white text-[0.6rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[3px] shadow-xs">
                      {product.category}
                    </span>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-primary leading-snug group-hover:text-secondary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-neutral-text/60 mt-1 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex items-baseline justify-between mt-5 pt-4 border-t border-black/5">
                    <div>
                      <span className="text-[0.65rem] uppercase tracking-wider text-neutral-text/50 block font-semibold">Starts from</span>
                      <p className="text-base sm:text-lg font-black text-secondary">
                        ${minPrice.toFixed(2)}
                        {maxPrice > minPrice && (
                          <span className="text-xs font-normal text-neutral-text/50 ml-1">
                            &ndash; ${maxPrice.toFixed(2)}
                          </span>
                        )}
                      </p>
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-primary group-hover:text-secondary transition-colors">
                      View Piece <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
