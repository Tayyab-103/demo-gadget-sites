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
    <section className="py-16 sm:py-20 bg-[#F8FAFC] text-[#0A0F1D] border-t border-slate-200" id="shop">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        {!hideHeader ? (
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.24em] text-[#0A0F1D]/70 mb-3 select-none">
              SIGNATURE CATALOG
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#0A0F1D] leading-[1.08] mb-3">
              Field-Tested <br className="hidden sm:inline" />
              <span className="font-bold text-[#0A0F1D]">Uniform Suites.</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto font-normal">
              Commercial-grade tactical workwear, antimicrobial scrubs, and executive chef coats.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#0A0F1D] text-white shadow-xs"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-[#0A0F1D] hover:text-[#0A0F1D]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#0A0F1D] text-white shadow-xs"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-[#0A0F1D] hover:text-[#0A0F1D]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xs transition-all duration-300 hover:shadow-lg hover:border-slate-300"
              >
                {/* Image Container */}
                <Link
                  href={`/product/${product.id}`}
                  className="relative block aspect-[4/3] sm:aspect-[1/1] overflow-hidden bg-slate-900"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 rounded-full bg-[#0A0F1D]/90 px-2.5 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-white shadow-xs backdrop-blur-xs">
                    {product.category}
                  </span>

                  {/* Savings Pill */}
                  {savingsPercent > 0 && (
                    <span className="absolute top-3 right-3 rounded-full bg-[#0A0F1D] px-2 py-0.5 text-[0.62rem] font-bold uppercase tracking-wider text-white shadow-xs">
                      {currentQty >= 5 ? "Fleet Rate" : currentQty >= 3 ? "Crew Rate" : `Save ${savingsPercent}%`}
                    </span>
                  )}
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  {/* Rating */}
                  <div className="flex items-center gap-1 text-[#0A0F1D] mb-1.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                    <span className="text-[0.65rem] text-slate-500 font-bold ml-1">5.0</span>
                  </div>

                  <Link href={`/product/${product.id}`}>
                    <h3 className="mb-1.5 text-base font-bold text-[#0A0F1D] leading-snug transition-colors line-clamp-1 group-hover:text-blue-600">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-slate-500 line-clamp-2 mb-4 font-normal leading-relaxed">
                    {product.description}
                  </p>

                  {/* Bundle Selector */}
                  {product.bundles && product.bundles.length > 0 && (
                    <div className="mb-4">
                      <div className="relative">
                        <select
                          value={currentQty}
                          onChange={(e) => handleBundleChange(product.id, Number(e.target.value))}
                          aria-label={`Select bundle for ${product.name}`}
                          className="w-full appearance-none rounded-xl border border-slate-200 bg-[#F8FAFC] px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#0A0F1D] cursor-pointer focus:outline-none"
                        >
                          {product.bundles.map((b) => (
                            <option key={b.quantity} value={b.quantity}>
                              {b.quantity === 1
                                ? `Single Unit — $${parseFloat(String(b.price)).toFixed(2)}`
                                : `${b.quantity}-Piece Suite — $${parseFloat(String(b.price)).toFixed(2)} ($${(parseFloat(String(b.price)) / b.quantity).toFixed(2)}/ea)`}
                            </option>
                          ))}
                        </select>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#0A0F1D]"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Price & Action Row */}
                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-3.5">
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xl font-bold text-[#0A0F1D]">
                          ${currentPrice.toFixed(2)}
                        </span>
                        <span className="text-xs text-slate-400 line-through">
                          ${comparisonOriginalPrice}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleAddToCart(product)}
                      className="inline-flex items-center justify-center rounded-full bg-[#0A0F1D] hover:bg-slate-800 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all cursor-pointer"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      Add to Bag
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
