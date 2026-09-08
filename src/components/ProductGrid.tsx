"use client";

import React, { useState } from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";

const products = productsData as unknown as Product[];

interface ProductGridProps {
  showHeader?: boolean;
}

export default function ProductGrid({ showHeader = true }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [hoveredImageIndex, setHoveredImageIndex] = useState<{ [productId: string]: number }>({});

  const categories = [
    { id: "all", label: "All Items" },
    ...Array.from(new Set(products.map((p) => p.category))).map((cat) => ({
      id: cat,
      label: cat,
    })),
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-16 md:py-24 bg-[#FAFAFA] relative overflow-hidden" id="shop">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#D2446D]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#4C0519]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {showHeader && (
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-[#4C0519] font-extrabold text-xs tracking-widest uppercase mb-3 border border-rose-200 shadow-xs">
              <span>𝄞 Workshop Collection</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-[#000000] mb-4 tracking-tight">
              Handcrafted Gear &amp; <span className="text-[#D2446D]">Accessories</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto font-medium">
              Precision-tuned instruments, studio-grade cables, and essential acoustic accessories crafted for discerning musicians.
            </p>

            {/* Filter Tabs */}
            {categories.length > 2 && (
              <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "bg-[#4C0519] text-white shadow-md shadow-[#4C0519]/20"
                          : "bg-white text-gray-700 hover:bg-rose-50 border border-rose-100 hover:border-rose-200"
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* 3-Column Unique Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-9">
          {filteredProducts.map((product) => {
            const firstBundle = product.bundles && product.bundles[0];
            const maxBundle = product.bundles && product.bundles[product.bundles.length - 1];
            const currentPrice = firstBundle ? firstBundle.price : product.ssPrice;
            const originalPrice = (Number(currentPrice) * 1.4).toFixed(2);
            
            // Calculate max bundle savings percentage if bundles exist
            let savingsPercent = 0;
            if (firstBundle && maxBundle && maxBundle.quantity > 1) {
              const standardPriceForMax = Number(firstBundle.price) * maxBundle.quantity;
              savingsPercent = Math.round(((standardPriceForMax - Number(maxBundle.price)) / standardPriceForMax) * 100);
            }

            const activeImgIdx = hoveredImageIndex[product.id] ?? 0;
            const productImages = product.images && product.images.length > 0 ? product.images : [product.image];
            const activeImage = productImages[activeImgIdx] || product.image;

            return (
              <div
                key={product.id}
                className="group relative bg-[#FDFDFD] rounded-[2rem] border border-rose-100/90 hover:border-[#D2446D]/40 transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Image Showcase */}
                <div className="p-4 pb-0 relative">
                  <Link
                    href={`/product/${product.id}`}
                    className="block relative aspect-4/3 rounded-2xl overflow-hidden bg-radial from-rose-50/60 to-[#FAF8F5] border border-rose-100/60 group-hover:border-rose-200 transition-colors"
                  >
                    <img
                      src={activeImage}
                      alt={product.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800&q=80";
                      }}
                    />

                    {/* Floating Top Left Category Pill */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center gap-1.5 bg-[#4C0519]/90 backdrop-blur-md text-white text-[0.65rem] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D2446D]" />
                        {product.category}
                      </span>
                    </div>

                    {/* Floating Top Right Rating Pill */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="inline-flex items-center gap-1 bg-white/95 backdrop-blur-md text-[#000000] text-[0.7rem] font-extrabold px-2.5 py-1 rounded-full shadow-md border border-rose-100">
                        <span className="text-amber-500">★</span> 4.9
                      </span>
                    </div>

                    {/* Bottom Floating Savings Banner */}
                    {savingsPercent > 0 && (
                      <div className="absolute bottom-3 left-3 right-3 z-10">
                        <div className="bg-black/75 backdrop-blur-md text-white text-[0.65rem] font-bold px-3 py-1.5 rounded-xl flex items-center justify-between border border-white/15 shadow-md">
                          <span className="flex items-center gap-1.5 text-rose-300">
                            <span>⚡</span> Bundle &amp; Save
                          </span>
                          <span className="bg-[#D2446D] text-white px-2 py-0.5 rounded-md font-black text-[0.6rem] tracking-wider uppercase">
                            Up to {savingsPercent}% Off
                          </span>
                        </div>
                      </div>
                    )}
                  </Link>

                  {/* Multi-Image Quick Preview Dots/Thumbnails */}
                  {productImages.length > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-3 px-2">
                      {productImages.slice(0, 4).map((img, i) => (
                        <button
                          key={i}
                          type="button"
                          onMouseEnter={() =>
                            setHoveredImageIndex((prev) => ({ ...prev, [product.id]: i }))
                          }
                          onClick={() =>
                            setHoveredImageIndex((prev) => ({ ...prev, [product.id]: i }))
                          }
                          className={`w-7 h-7 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                            activeImgIdx === i
                              ? "border-[#D2446D] ring-2 ring-[#D2446D]/20 scale-105"
                              : "border-gray-200 opacity-60 hover:opacity-100 hover:border-gray-400"
                          }`}
                        >
                          <img
                            src={img}
                            alt=""
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = product.image;
                            }}
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Info & Details */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Micro Edition Tag */}
                    <div className="flex items-center justify-between text-[0.68rem] font-extrabold uppercase tracking-widest text-[#D2446D] mb-2">
                      <span>𝄞 Edition #{product.stickyId}</span>
                      <span className="text-emerald-700 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        In Stock
                      </span>
                    </div>

                    {/* Product Title */}
                    <h3 className="text-lg sm:text-xl font-black text-[#000000] tracking-tight leading-snug group-hover:text-[#D2446D] transition-colors mb-2 capitalize line-clamp-1">
                      <Link href={`/product/${product.id}`}>{product.name}</Link>
                    </h3>

                    {/* Product Description */}
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2 font-medium">
                      {product.description}
                    </p>

                    {/* Bundle Tier Preview Pills */}
                    {product.bundles && product.bundles.length > 0 && (
                      <div className="bg-rose-50/60 rounded-xl p-2.5 mb-5 border border-rose-100/80">
                        <div className="flex items-center justify-between text-[0.65rem] font-bold text-gray-500 uppercase tracking-wider mb-1.5">
                          <span>Available Bundles</span>
                          <span className="text-[#4C0519]">Bulk Discounts</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {product.bundles.slice(0, 4).map((b, idx) => (
                            <Link
                              key={idx}
                              href={`/product/${product.id}`}
                              className="px-2 py-1 rounded-lg bg-white border border-rose-200 text-[0.68rem] font-bold text-gray-800 hover:border-[#D2446D] hover:text-[#4C0519] transition-colors"
                            >
                              <span className="text-[#D2446D]">{b.quantity}x</span>: ${b.price}
                            </Link>
                          ))}
                          {product.bundles.length > 4 && (
                            <span className="px-1.5 py-1 text-[0.68rem] font-bold text-gray-400 self-center">
                              +{product.bundles.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Pricing and Action Footer */}
                  <div className="pt-4 border-t border-rose-100/80">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-[0.65rem] uppercase tracking-wider font-extrabold text-gray-400">
                          Starting At
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl sm:text-3xl font-black text-[#4C0519] tracking-tight">
                            ${currentPrice}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-gray-400 line-through">
                            ${originalPrice}
                          </span>
                        </div>
                      </div>

                      <Link
                        href={`/product/${product.id}`}
                        className="inline-flex items-center justify-center gap-2 bg-[#4C0519] hover:bg-[#D2446D] text-white font-bold py-2.5 px-5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-md shadow-[#4C0519]/15 hover:shadow-lg hover:shadow-[#D2446D]/25 cursor-pointer group/btn"
                      >
                        <span>Configure</span>
                        <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                      </Link>
                    </div>

                    {/* Trust micro-badges */}
                    <div className="flex items-center justify-between text-[0.65rem] font-bold text-gray-500 pt-3 border-t border-rose-100/60">
                      <span className="flex items-center gap-1">
                        <span className="text-emerald-600 font-bold">✓</span> Free Shipping
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="text-[#D2446D]">🛡️</span> 1-Yr Warranty
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="text-amber-600">⚡</span> Tone Tested
                      </span>
                    </div>
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
