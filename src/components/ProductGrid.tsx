"use client";

import React, { useState } from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product, Bundle } from "@/types";

const products = productsData as unknown as Product[];

function ProductCard({ product }: { product: Product }) {
  const [selectedBundleIndex, setSelectedBundleIndex] = useState(0);

  const bundles: Bundle[] = product.bundles && product.bundles.length > 0
    ? product.bundles
    : [{ quantity: 1, price: parseFloat(product.ssPrice) }];

  const currentBundle = bundles[selectedBundleIndex] || bundles[0];
  const basePrice = parseFloat(product.ssPrice);
  const originalTotalPrice = basePrice * currentBundle.quantity;
  const currentPrice = currentBundle.price;
  const savings = originalTotalPrice - currentPrice;

  return (
    <div className="bg-white rounded-3xl border border-pink-100/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden relative group">
      {/* Product Image */}
      <div className="relative aspect-4/3 w-full bg-[#FFF5E6]/40 overflow-hidden">
        <Link href={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80";
            }}
          />
        </Link>

        <span className="absolute top-3.5 left-3.5 bg-white/95 text-[#FF6B8B] text-[0.62rem] sm:text-[0.65rem] font-bold uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full shadow-xs border border-pink-100">
          {product.category}
        </span>

        {savings > 0 && (
          <span className="absolute top-3.5 right-3.5 bg-[#FF6B8B] text-white text-[0.6rem] sm:text-[0.62rem] font-bold uppercase tracking-wider px-2 sm:px-2.5 py-1 rounded-full shadow-xs">
            SAVE ${savings.toFixed(2)}
          </span>
        )}
      </div>

      {/* Product Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <Link href={`/product/${product.id}`} className="group-hover:text-[#FF6B8B] transition-colors">
          <h3 className="text-sm sm:text-base font-black text-[#1E2330] tracking-tight leading-snug line-clamp-2 min-h-[2.6rem]">
            {product.name}
          </h3>
        </Link>

        <p className="text-xs text-gray-500 line-clamp-2 mt-1 mb-3.5 leading-relaxed font-normal">
          {product.description}
        </p>

        {/* Bundle Selector */}
        <div className="mb-4 bg-[#FFF9EE] p-2.5 rounded-2xl border border-[#FFE8B8]">
          <div className="text-[0.6rem] font-bold uppercase tracking-wider text-gray-600 mb-1.5 flex justify-between">
            <span>Pack Quantity:</span>
            {savings > 0 && <span className="text-[#FF6B8B] font-bold">Save ${(savings).toFixed(2)}</span>}
          </div>
          <div className="grid grid-cols-4 gap-1">
            {bundles.slice(0, 4).map((bundle, bIdx) => (
              <button
                key={bundle.quantity}
                onClick={() => setSelectedBundleIndex(bIdx)}
                className={`py-1 rounded-xl text-center cursor-pointer transition-all ${
                  selectedBundleIndex === bIdx
                    ? "bg-[#FF6B8B] text-white font-black shadow-xs"
                    : "bg-white text-gray-700 font-medium border border-pink-100 text-xs hover:border-[#FF6B8B]"
                }`}
              >
                <div className="text-[0.62rem] leading-none">{bundle.quantity}x</div>
                <div className="text-[0.55rem] opacity-90">${bundle.price}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Price and Add Button -> Routes to Product Details Page */}
        <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
          <div>
            {savings > 0 && (
              <div className="text-[0.62rem] text-gray-400 line-through">
                ${originalTotalPrice.toFixed(2)}
              </div>
            )}
            <div className="text-xl sm:text-2xl font-black text-[#1E2330]">
              ${currentPrice.toFixed(2)}
            </div>
          </div>

          <Link
            href={`/product/${product.id}`}
            className="px-4 sm:px-5 py-2.5 rounded-full bg-[#FF6B8B] hover:bg-[#FA5679] text-white font-bold text-xs uppercase tracking-wider shadow-sm hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-1.5 cursor-pointer"
          >
            <span>+ Add to Bag</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white relative" id="shop">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two Promo Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-14 sm:mb-18">
          
          {/* Left Promo Card: 20% OFF Newborn Babies Essentials */}
          <div className="bg-[#FFF0F4] rounded-3xl p-5 sm:p-7 flex items-center justify-between border border-[#FFD9E2] relative overflow-hidden group">
            <div className="relative z-10 max-w-[200px] sm:max-w-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B8B] block mb-1">
                20% OFF
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#1E2330] tracking-tight leading-tight mb-3 sm:mb-4">
                New Born <br />
                Babies Essentials
              </h3>
              <Link
                href="/#shop"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#FF6B8B] hover:bg-[#FA5679] text-white font-bold text-xs tracking-wide shadow-xs transition-all"
              >
                <span>Shop Now</span>
                <span className="text-xs">→</span>
              </Link>
            </div>

            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shadow-xs border-2 border-white flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&q=80"
                alt="New Born Babies Essentials"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Promo Card: SUMMER SPECIAL Best Collections For Your Baby */}
          <div className="bg-[#F5F0FF] rounded-3xl p-5 sm:p-7 flex items-center justify-between border border-[#E4D4FF] relative overflow-hidden group">
            <div className="relative z-10 max-w-[200px] sm:max-w-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[#8F75D8] block mb-1">
                SUMMER SPECIAL
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#1E2330] tracking-tight leading-tight mb-3 sm:mb-4">
                Best Collections <br />
                For Your Baby
              </h3>
              <Link
                href="/#shop"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#8F75D8] hover:bg-[#7D62CC] text-white font-bold text-xs tracking-wide shadow-xs transition-all"
              >
                <span>Shop Now</span>
                <span className="text-xs">→</span>
              </Link>
            </div>

            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shadow-xs border-2 border-white flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&q=80"
                alt="Best Collections For Your Baby"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
            </div>
          </div>

        </div>

        {/* Main Product Catalog Showcase */}
        <div>
          <div className="mb-10 sm:mb-14">
            <div className="flex items-center gap-4 mb-2.5">
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-[#FF6B8B]">
                Curated Collection
              </span>
              <div className="h-[1px] flex-1 max-w-xs bg-gray-200" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E2330] tracking-tight">
              Featured Baby <span className="text-[#FF6B8B]">Treasures</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
