"use client";

import React from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";

const products = productsData as unknown as Product[];

const categoryEyebrows = [
  "EXQUISITE LIVING",
  "PERFECT MATCH",
  "HANDCRAFTED ACCENT",
];

export default function ProductGrid({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section className={`py-8 sm:py-12 md:py-20 bg-neutral-bg relative`} id="shop">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Top Section Header (Shown only on homepage or when enabled) */}
        {showHeader && (
          <>
            <div className="flex items-center gap-3 sm:gap-6 mb-6">
              <span className="bg-primary text-white font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl px-4 sm:px-6 md:px-7 py-1 sm:py-1.5 md:py-2 rounded-full font-normal tracking-wide shadow-sm flex items-center justify-center flex-shrink-0">
                03
              </span>

              <h2 className="font-serif font-normal text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.06em] text-primary leading-none">
                OUR PRODUCTS
              </h2>
            </div>

            <div className="w-full h-px bg-black/10 mb-8 sm:mb-12 md:mb-14" />
          </>
        )}

        {/* 3-Product Grid Matching Screenshot Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {products.map((product, idx) => {
            const firstBundle = product.bundles && product.bundles[0];
            const currentPrice = firstBundle ? firstBundle.price : product.ssPrice;
            const eyebrow = categoryEyebrows[idx] || product.category || "EXQUISITE";

            return (
              <div
                key={product.id}
                className="flex flex-col items-start group"
              >
                {/* Product Image Frame */}
                <Link
                  href={`/product/${product.id}`}
                  className="w-full relative block aspect-16/10 overflow-hidden shadow-md border border-black/5 bg-white"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/800x500?text=Product";
                    }}
                  />
                </Link>

                {/* Eyebrow Category */}
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-neutral-text/50 mt-5 sm:mt-6 mb-2">
                  {eyebrow}
                </span>

                {/* Product Title (Large Uppercase Serif) */}
                <Link href={`/product/${product.id}`}>
                  <h3 className="font-serif font-normal text-xl sm:text-2xl md:text-3xl uppercase tracking-[0.04em] text-primary leading-tight mb-2 hover:text-neutral-text/70 transition-colors">
                    {product.name}
                  </h3>
                </Link>

                {/* Price */}
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <span className="text-xs sm:text-sm font-bold text-primary">
                    Starting from ${currentPrice}
                  </span>
                  <span className="text-[0.6rem] sm:text-[0.65rem] font-semibold text-green-700 bg-green-50 border border-green-200 px-2.5 py-0.5 rounded-full">
                    Free US Delivery
                  </span>
                </div>

                {/* Hollow Pill Button: EXPLORE THE COLLECTION → */}
                <Link
                  href={`/product/${product.id}`}
                  className="inline-flex items-center gap-2.5 border border-black/30 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 px-5 sm:px-6 py-2.5 rounded-full text-[0.65rem] sm:text-[0.68rem] font-bold uppercase tracking-[0.16em] text-primary mt-auto shadow-2xs hover:shadow-sm"
                >
                  <span>EXPLORE THE COLLECTION</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
