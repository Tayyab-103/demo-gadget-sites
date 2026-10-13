"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    const label = qty > 1 ? `${qty}-Piece Ensemble Set` : "Single Atelier Piece";
    
    addToCart(product, qty, unitPrice, label);
  };

  return (
    <section className="py-20 sm:py-24 md:py-28 bg-[#FAF8F6] text-[#18121E] border-t border-[#C59B7E]/20" id="shop">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        {!hideHeader ? (
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-[#C59B7E] block mb-2 select-none">
              OUR COLLECTION
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif tracking-tight text-[#18121E] leading-[1.12] mb-3">
              The Atelier <span className="italic text-[#C59B7E]">Creations.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
              Pure mulberry silk slip dresses, double-faced cashmere outerwear, and Chantilly lace evening gowns.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#18121E] text-[#E6C2AC] shadow-md border border-[#C59B7E]/50"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-[#C59B7E] hover:text-[#18121E]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#18121E] text-[#E6C2AC] shadow-md border border-[#C59B7E]/50"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-[#C59B7E] hover:text-[#18121E]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const currentQty = selectedBundles[product.id] || 1;
            const currentBundle = product.bundles?.find((b) => b.quantity === currentQty);
            const currentPrice = currentBundle ? parseFloat(String(currentBundle.price)) : parseFloat(product.ssPrice) * currentQty;
            const baseSinglePrice = parseFloat(product.ssPrice);
            const standardRegularTotal = baseSinglePrice * currentQty;
            const comparisonOriginalPrice = (standardRegularTotal * 1.5).toFixed(2);
            const savingsPercent = Math.round(100 - (currentPrice / Number(comparisonOriginalPrice)) * 100);

            return (
              <div
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-[#C59B7E]/25 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-[#C59B7E]/60 hover:-translate-y-1"
              >
                {/* Image Container */}
                <Link
                  href={`/product/${product.id}`}
                  className="relative block aspect-[4/3] sm:aspect-[1/1] overflow-hidden bg-slate-900"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Category Pill */}
                  <span className="absolute top-3.5 left-3.5 rounded-full bg-[#18121E]/90 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-widest text-[#E6C2AC] shadow-md backdrop-blur-xs border border-[#C59B7E]/30">
                    {product.category}
                  </span>

                  {/* Savings Pill */}
                  {savingsPercent > 0 && (
                    <span className="absolute top-3.5 right-3.5 rounded-full bg-[#C59B7E] px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-[#18121E] shadow-md">
                      {currentQty >= 5 ? "Private VIP Rate" : currentQty >= 3 ? "Atelier Tier" : `Save ${savingsPercent}%`}
                    </span>
                  )}
                </Link>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  {/* Rating */}
                  <div className="flex items-center gap-1 text-[#C59B7E] mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                    <span className="text-[0.68rem] text-slate-500 font-semibold ml-1.5">5.0 (Vogue Verified)</span>
                  </div>

                  <Link href={`/product/${product.id}`}>
                    <h3 className="mb-2 text-lg font-serif font-bold text-[#18121E] leading-snug transition-colors line-clamp-1 group-hover:text-[#C59B7E]">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-xs text-slate-500 line-clamp-2 mb-5 font-light leading-relaxed">
                    {product.description}
                  </p>

                  {/* Bundle Selector */}
                  {product.bundles && product.bundles.length > 0 && (
                    <div className="mb-5">
                      <div className="relative">
                        <select
                          value={currentQty}
                          onChange={(e) => handleBundleChange(product.id, Number(e.target.value))}
                          aria-label={`Select package for ${product.name}`}
                          className="w-full appearance-none rounded-2xl border border-[#C59B7E]/30 bg-[#FAF8F6] px-4 py-2.5 text-xs font-semibold text-[#18121E] cursor-pointer focus:outline-none focus:border-[#C59B7E]"
                        >
                          {product.bundles.map((b) => (
                            <option key={b.quantity} value={b.quantity}>
                              {b.quantity === 1
                                ? `Single Atelier Piece — $${parseFloat(String(b.price)).toFixed(2)}`
                                : `${b.quantity}-Piece Ensemble — $${parseFloat(String(b.price)).toFixed(2)} ($${(parseFloat(String(b.price)) / b.quantity).toFixed(2)}/ea)`}
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
                          className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#C59B7E]"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Price & Action Row */}
                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-serif font-bold text-[#18121E]">
                          ${currentPrice.toFixed(2)}
                        </span>
                        <span className="text-xs text-slate-400 line-through">
                          ${comparisonOriginalPrice}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleAddToCart(product)}
                      className="inline-flex items-center justify-center rounded-full bg-[#18121E] hover:bg-[#C59B7E] hover:text-[#18121E] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all cursor-pointer shadow-md"
                      aria-label={`Add ${product.name} to shopping bag`}
                    >
                      Add to Cart
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
