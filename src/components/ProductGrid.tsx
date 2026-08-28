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
    <section className="py-14 sm:py-16 md:py-20 lg:py-24 bg-white" id="shop">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <span className="eyebrow justify-center mb-3">Foundry Catalog</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-primary">
            Plumbing &amp; Heating <span className="text-secondary">Supplies</span>
          </h2>
          <p className="text-neutral-text/70 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-3">
            Choose precision-forged fittings, shutoff valves, and high-temperature hydronic supply lines with contractor multi-pack discounts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => {
            const firstBundle = product.bundles && product.bundles[0];
            const currentPrice = firstBundle ? firstBundle.price : product.ssPrice;
            const originalPrice = (Number(currentPrice) * 1.35).toFixed(2);
            const savingsPercent = Math.round(100 - (Number(currentPrice) / Number(originalPrice)) * 100);

            return (
              <div
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/8 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-secondary/40"
              >
                {/* Image container */}
                <Link href={`/product/${product.id}`} className="relative block aspect-square overflow-hidden bg-neutral-bg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/400x400?text=Plumbing+Supply";
                    }}
                  />

                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 rounded-full bg-primary/90 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-wider text-white shadow-sm backdrop-blur-sm">
                    {product.category}
                  </span>

                  {/* Discount Pill */}
                  {savingsPercent > 0 && (
                    <span className="absolute top-3 right-3 rounded-full bg-secondary px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider text-secondary-text shadow-sm">
                      Save {savingsPercent}%
                    </span>
                  )}
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <Link href={`/product/${product.id}`}>
                    <h3 className="mb-2 text-sm sm:text-base font-bold text-primary leading-snug transition-colors duration-200 line-clamp-2 group-hover:text-secondary">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-neutral-text/65 line-clamp-2 mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-2 border-t border-black/5 pt-3.5">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-base sm:text-lg font-black text-primary">${currentPrice}</span>
                      <span className="text-xs font-semibold text-neutral-text/40 line-through">${originalPrice}</span>
                    </div>

                    <button
                      onClick={() => handleQuickAdd(product)}
                      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-text shadow-sm transition-all duration-200 hover:bg-secondary hover:text-secondary-text hover:scale-105 cursor-pointer"
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
