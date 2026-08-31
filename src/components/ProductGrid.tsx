"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import productsData from "../../config/products.json";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

const products = productsData as unknown as Product[];

const categories = [
  "All Gear",
  "Strength & Mobility",
  "Wearable Performance Tech",
  "Recovery & Muscle Therapy",
];

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All Gear");
  const { addToCart } = useCart();
  const [addedItemId, setAddedItemId] = useState<string | null>(null);

  const filteredProducts = selectedCategory === "All Gear"
    ? products
    : products.filter((p) => p.category?.toLowerCase() === selectedCategory.toLowerCase() || p.category?.includes(selectedCategory.split(" ")[0]));

  const handleQuickAdd = (product: Product, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const firstBundle = product.bundles && product.bundles[0];
    const price = firstBundle ? firstBundle.price : product.ssPrice;
    addToCart(product, 1, price);
    setAddedItemId(product.id);
    setTimeout(() => setAddedItemId(null), 1800);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#FAFAFA] relative overflow-hidden" id="shop">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 md:mb-10">
          <div>
            <span className="eyebrow mb-2">Our Collection</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0A0B0E]">
              Featured Gear
            </h2>
            <p className="mt-1.5 text-sm text-neutral-text/65 max-w-lg">
              Precision instruments built for performance, recovery, and daily training.
            </p>
          </div>
        </div>

        {/* Minimalist Category Filter Dock */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-1 overflow-x-auto no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#0A0B0E] text-white shadow-sm"
                    : "bg-white text-neutral-text/65 border border-black/[0.06] hover:border-black/20 hover:text-[#0A0B0E]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const firstBundle = product.bundles && product.bundles[0];
            const currentPrice = firstBundle ? firstBundle.price : product.ssPrice;
            const originalPrice = (Number(currentPrice) * 1.35).toFixed(2);
            const bundleCount = product.bundles?.length || 8;
            const isAdded = addedItemId === product.id;

            return (
              <div
                key={product.id}
                className="group relative flex flex-col rounded-2xl bg-white border border-black/[0.06] p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-black/15 overflow-hidden"
              >
                {/* Top Badge Strip */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="rounded-md bg-neutral-100 px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-wider text-neutral-text/70">
                    {product.category}
                  </span>
                  
                  <span className="text-[0.65rem] font-bold text-amber-500 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/50">
                    ★ 4.9
                  </span>
                </div>

                {/* Studio Image Container */}
                <Link
                  href={`/product/${product.id}`}
                  className="relative aspect-4/3 w-full rounded-xl overflow-hidden bg-neutral-50 mb-5 block"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-103"
                  />
                  
                  {/* Bundle Tier Pill */}
                  <span className="absolute bottom-2.5 left-2.5 bg-white/90 backdrop-blur-md text-[#0A0B0E] text-[0.62rem] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded shadow-sm border border-black/[0.05]">
                    Up to {bundleCount} Tiers
                  </span>
                </Link>

                {/* Content Details */}
                <div className="flex-1 flex flex-col">
                  <Link href={`/product/${product.id}`} className="hover:text-secondary transition-colors">
                    <h3 className="text-lg font-black uppercase tracking-tight text-[#0A0B0E] mb-1.5 line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>

                  <p className="text-xs text-neutral-text/60 leading-relaxed line-clamp-2 mb-5 font-normal">
                    {product.description}
                  </p>

                  {/* Pricing and Action Strip */}
                  <div className="mt-auto pt-4 border-t border-black/[0.06] flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xl font-black text-[#0A0B0E]">
                          ${currentPrice}
                        </span>
                        <span className="text-xs font-medium text-neutral-text/35 line-through">
                          ${originalPrice}
                        </span>
                      </div>
                      <span className="text-[0.62rem] font-medium text-neutral-text/60 uppercase tracking-wider mt-0.5">
                        Volume Savings Available
                      </span>
                    </div>

                    {/* Quick Add Button */}
                    <button
                      onClick={(e) => handleQuickAdd(product, e)}
                      className={`inline-flex items-center justify-center rounded-xl p-3 text-xs font-bold uppercase transition-all duration-200 cursor-pointer ${
                        isAdded
                          ? "bg-secondary text-primary scale-95"
                          : "bg-[#0A0B0E] text-white hover:bg-[#222630]"
                      }`}
                      aria-label={`Add ${product.name} to cart`}
                      title="Quick Add to Cart"
                    >
                      {isAdded ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                          <line x1="3" y1="6" x2="21" y2="6"></line>
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                      )}
                    </button>
                  </div>
                  
                  {/* View Details Link */}
                  <Link
                    href={`/product/${product.id}`}
                    className="mt-3 text-center text-[0.68rem] font-semibold uppercase tracking-wider text-neutral-text/50 hover:text-[#0A0B0E] transition-colors"
                  >
                    View Specs →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
