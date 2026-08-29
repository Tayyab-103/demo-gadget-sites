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

  // Track selected bundle quantity for each product
  const [selectedBundles, setSelectedBundles] = useState<Record<string, number>>(() => {
    const initial: Record<string, number> = {};
    products.forEach((p) => {
      initial[p.id] = p.bundles && p.bundles.length > 0 ? p.bundles[0].quantity : 1;
    });
    return initial;
  });

  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleBundleChange = (productId: string, quantity: number) => {
    setSelectedBundles((prev) => ({
      ...prev,
      [productId]: quantity,
    }));
  };

  const handleAddToCart = (product: Product) => {
    const qty = selectedBundles[product.id] || 1;
    const bundle = product.bundles?.find((b) => b.quantity === qty);
    const totalPrice = bundle ? parseFloat(String(bundle.price)) : parseFloat(product.ssPrice) * qty;
    const unitPrice = (totalPrice / qty).toFixed(2);
    const label = qty > 1 ? `${qty}-Piece Fleet Suite` : "Single Unit";
    
    addToCart(product, qty, unitPrice, label);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#F8F6F0] text-[#18222F] border-t border-[#C87D3B]/20" id="shop">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
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
            const currentQty = selectedBundles[product.id] || 1;
            const currentBundle = product.bundles?.find((b) => b.quantity === currentQty);
            const currentPrice = currentBundle ? parseFloat(String(currentBundle.price)) : parseFloat(product.ssPrice) * currentQty;
            const baseSinglePrice = parseFloat(product.ssPrice);
            const standardRegularTotal = baseSinglePrice * currentQty;
            const comparisonOriginalPrice = (standardRegularTotal * 1.4).toFixed(2);
            const savingsPercent = Math.round(100 - (currentPrice / Number(comparisonOriginalPrice)) * 100);

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

                  {/* Discount / Tier Pill */}
                  {savingsPercent > 0 && (
                    <span className="absolute top-3.5 right-3.5 rounded-full bg-[#C87D3B] px-2.5 py-1 text-[0.62rem] font-extrabold uppercase tracking-wider text-white shadow-md">
                      {currentQty >= 5 ? "Fleet Value" : currentQty >= 3 ? "Most Popular" : `Save ${savingsPercent}%`}
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
                    <h3 className="mb-2 text-base sm:text-lg font-bold text-[#0D1B2A] leading-snug transition-colors duration-200 line-clamp-2 group-hover:text-[#C87D3B]">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-[#18222F]/70 line-clamp-2 mb-4 leading-relaxed font-normal">
                    {product.description}
                  </p>

                  {/* Interactive Bundle Package Dropdown */}
                  {product.bundles && product.bundles.length > 0 && (
                    <div className="mb-4">
                      <div className="relative">
                        <select
                          value={currentQty}
                          onChange={(e) => handleBundleChange(product.id, Number(e.target.value))}
                          aria-label={`Select bundle for ${product.name}`}
                          className="w-full appearance-none rounded-xl border border-[#C87D3B]/35 bg-[#F8F6F0] px-3.5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0D1B2A] cursor-pointer focus:border-[#C87D3B] focus:outline-none focus:ring-1 focus:ring-[#C87D3B] transition-all shadow-2xs"
                        >
                          {product.bundles.map((b) => (
                            <option key={b.quantity} value={b.quantity}>
                              {b.quantity === 1
                                ? `1 Unit — $${parseFloat(String(b.price)).toFixed(2)}`
                                : `${b.quantity}-Piece Fleet Suite — $${parseFloat(String(b.price)).toFixed(2)} ($${(parseFloat(String(b.price)) / b.quantity).toFixed(2)}/ea)`}
                            </option>
                          ))}
                        </select>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#0D1B2A]"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Price & Action Row */}
                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-[#C87D3B]/15 pt-4">
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl sm:text-2xl font-black text-[#0D1B2A]">
                          ${currentPrice.toFixed(2)}
                        </span>
                        <span className="text-xs font-semibold text-[#18222F]/40 line-through">
                          ${comparisonOriginalPrice}
                        </span>
                      </div>
                      {currentQty > 1 && (
                        <span className="text-[0.68rem] text-[#C87D3B] font-bold">
                          ${(currentPrice / currentQty).toFixed(2)} / unit
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => handleAddToCart(product)}
                      className="inline-flex items-center justify-center gap-1.5 rounded-2xl bg-[#0D1B2A] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#C87D3B] border border-[#C87D3B]/40 shadow-md transition-all duration-200 hover:bg-[#C87D3B] hover:text-white hover:scale-105 cursor-pointer flex-shrink-0"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                      </svg>
                      <span>Add to Bag</span>
                    </button>
                  </div>

                  {/* Trust Micro-Badge */}
                  <div className="mt-3.5 pt-2.5 border-t border-[#C87D3B]/10 flex items-center justify-between text-[0.65rem] text-[#18222F]/60 font-medium">
                    <span className="flex items-center gap-1">
                      <span className="text-[#C87D3B]">✓</span> Free UPS Express
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-[#C87D3B]">✓</span> 14-Day Flight Trial
                    </span>
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

