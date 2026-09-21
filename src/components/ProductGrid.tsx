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
    <section className="py-16 sm:py-20 md:py-24 bg-white text-black border-t border-black/6" id="shop">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="mb-3">
            <span
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider"
              style={{
                backgroundColor: "color-mix(in srgb, var(--secondary-color) 12%, transparent)",
                color: "var(--secondary-color)",
              }}
            >
              Curated Studio Collection
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary leading-[1.08]">
            Featured Artist Supplies <span className="text-secondary">&amp; Craft Kits</span>
          </h2>
          <p className="text-black/65 text-xs sm:text-sm md:text-base leading-relaxed mt-3 max-w-xl mx-auto font-normal">
            Archival cotton canvases, high-viscosity acrylics, detailing brushes, and studio accessories for every creative discipline.
          </p>
        </div>

        {/* Product Cards Grid with Balanced Equal Spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => {
            const firstBundle = product.bundles && product.bundles[0];
            const currentPrice = firstBundle ? firstBundle.price : product.ssPrice;
            const originalPrice = (Number(currentPrice) * 1.35).toFixed(2);
            const savingsPercent = Math.round(100 - (Number(currentPrice) / Number(originalPrice)) * 100);

            return (
              <div
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-black/8 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
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
                        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80";
                    }}
                  />

                  {/* Category Pill on Card */}
                  <span
                    className="absolute top-3.5 left-3.5 rounded-full px-3 py-1 text-[0.62rem] font-black uppercase tracking-wider shadow-md backdrop-blur-md"
                    style={{
                      backgroundColor: "color-mix(in srgb, var(--primary-color) 90%, transparent)",
                      color: "var(--primary-text-color)",
                    }}
                  >
                    {product.category}
                  </span>

                  {/* Discount Pill */}
                  {savingsPercent > 0 && (
                    <span
                      className="absolute top-3.5 right-3.5 rounded-full px-2.5 py-1 text-[0.62rem] font-black uppercase tracking-wider shadow-md"
                      style={{
                        backgroundColor: "var(--secondary-color)",
                        color: "var(--secondary-text-color)",
                      }}
                    >
                      Save {savingsPercent}%
                    </span>
                  )}
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <Link href={`/product/${product.id}`}>
                    <h3 className="mb-2 text-base font-black text-primary leading-snug transition-colors duration-200 line-clamp-2 group-hover:text-secondary uppercase tracking-tight">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-black/65 line-clamp-2 mb-5 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-2 border-t border-black/5 pt-4">
                    <div className="flex items-baseline gap-1.5 font-mono">
                      <span className="text-lg sm:text-xl font-black text-primary">${currentPrice}</span>
                      <span className="text-xs font-semibold text-black/40 line-through">${originalPrice}</span>
                    </div>

                    <button
                      onClick={() => handleQuickAdd(product)}
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl shadow-md transition-all duration-200 hover:scale-105 cursor-pointer"
                      style={{
                        backgroundColor: "var(--primary-color)",
                        color: "var(--primary-text-color)",
                      }}
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
