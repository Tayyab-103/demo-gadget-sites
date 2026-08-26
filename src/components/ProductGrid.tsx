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
    addToCart(product, quantity, price, "Single Pack");
  };

  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden" id="shop">
      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="eyebrow justify-center mb-4">The Family Edit</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-primary mb-4 tracking-tight">
            Explore The <span className="text-secondary">Collection</span>
          </h2>
          <p className="text-neutral-text/60 text-sm md:text-base max-w-2xl mx-auto">
            Select a piece below to customize your bundle and stock up on family favorites.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
          {products.map((product, idx) => {
            const firstBundle = product.bundles && product.bundles[0];
            const currentPrice = firstBundle ? firstBundle.price : product.ssPrice;
            // Fake an original price for the crossed-out effect to match the design screenshot
            const originalPrice = (Number(currentPrice) * 1.3).toFixed(2);
            const savingsPercent = Math.round(100 - (Number(currentPrice) / Number(originalPrice)) * 100);
            const isLastOdd = products.length % 2 !== 0 && idx === products.length - 1;

            return (
              <div
                key={product.id}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 ${
                  isLastOdd ? "col-span-2 mx-auto w-full max-w-[calc(50%-0.5rem)] md:col-span-1 md:max-w-none" : ""
                }`}
              >
                {/* Image */}
                <Link href={`/product/${product.id}`} className="relative block aspect-square overflow-hidden bg-neutral-bg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/400x400?text=Clothing";
                    }}
                  />

                  <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[0.55rem] font-black uppercase tracking-widest text-primary shadow-sm backdrop-blur-sm">
                    {product.category}
                  </span>

                  {savingsPercent > 0 && (
                    <span className="absolute top-3 right-3 rounded-full bg-secondary px-2.5 py-1 text-[0.55rem] font-black uppercase tracking-widest text-secondary-text shadow-sm">
                      Save {savingsPercent}%
                    </span>
                  )}

                  {/* Hover reveal: product description */}
                  <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-primary/95 via-primary/50 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <p className="translate-y-2 text-[0.68rem] leading-relaxed text-white/90 transition-transform duration-300 line-clamp-4 group-hover:translate-y-0 md:text-xs">
                      {product.description}
                    </p>
                  </div>
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col p-3.5 md:p-4">
                  <Link href={`/product/${product.id}`}>
                    <h3 className="mb-2 text-sm font-bold text-primary leading-snug transition-colors duration-300 line-clamp-1 group-hover:text-secondary md:text-base">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="mt-auto flex items-center justify-between gap-2 border-t border-black/5 pt-3">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-base font-black text-primary md:text-lg">${currentPrice}</span>
                      <span className="text-xs font-bold text-neutral-text/35 line-through">${originalPrice}</span>
                    </div>

                    <button
                      onClick={() => handleQuickAdd(product)}
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-text shadow-md transition-all duration-300 hover:bg-secondary hover:text-secondary-text hover:shadow-lg"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
