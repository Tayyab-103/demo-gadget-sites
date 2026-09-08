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
    <div className="bg-white rounded-3xl border border-purple-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden relative group">
      {/* Product Image */}
      <div className="relative aspect-4/3 w-full bg-purple-50/40 overflow-hidden">
        <Link href={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80";
            }}
          />
        </Link>

        {/* Category badge */}
        <span className="absolute top-3.5 left-3.5 bg-white/95 text-[#7C3AED] text-[0.62rem] sm:text-[0.65rem] font-bold uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full shadow-sm border border-purple-100">
          {product.category}
        </span>

        {/* Savings badge */}
        {savings > 0 && (
          <span className="absolute top-3.5 right-3.5 bg-[#7C3AED] text-white text-[0.6rem] sm:text-[0.62rem] font-bold uppercase tracking-wider px-2 sm:px-2.5 py-1 rounded-full shadow-sm">
            SAVE ${savings.toFixed(2)}
          </span>
        )}
      </div>

      {/* Product Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <Link href={`/product/${product.id}`} className="group-hover:text-[#7C3AED] transition-colors">
          <h3 className="text-sm sm:text-base font-black text-[#1E1040] tracking-tight leading-snug line-clamp-2 min-h-[2.6rem]">
            {product.name}
          </h3>
        </Link>

        <p className="text-xs text-gray-500 line-clamp-2 mt-1 mb-3.5 leading-relaxed font-normal">
          {product.description}
        </p>

        {/* Bundle Selector */}
        <div className="mb-4 bg-purple-50 p-2.5 rounded-2xl border border-purple-100">
          <div className="text-[0.6rem] font-bold uppercase tracking-wider text-gray-600 mb-1.5 flex justify-between">
            <span>Pack Quantity:</span>
            {savings > 0 && <span className="text-[#7C3AED] font-bold">Save ${(savings).toFixed(2)}</span>}
          </div>
          <div className="grid grid-cols-4 gap-1">
            {bundles.slice(0, 4).map((bundle, bIdx) => (
              <button
                key={bundle.quantity}
                onClick={() => setSelectedBundleIndex(bIdx)}
                className={`py-1 rounded-xl text-center cursor-pointer transition-all ${
                  selectedBundleIndex === bIdx
                    ? "bg-[#7C3AED] text-white font-black shadow-sm"
                    : "bg-white text-gray-700 font-medium border border-purple-100 text-xs hover:border-[#7C3AED]"
                }`}
              >
                <div className="text-[0.62rem] leading-none">{bundle.quantity}x</div>
                <div className="text-[0.55rem] opacity-90">${bundle.price}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Price + CTA */}
        <div className="mt-auto pt-3 border-t border-purple-100 flex items-center justify-between gap-2">
          <div>
            {savings > 0 && (
              <div className="text-[0.62rem] text-gray-400 line-through">
                ${originalTotalPrice.toFixed(2)}
              </div>
            )}
            <div className="text-xl sm:text-2xl font-black text-[#1E1040]">
              ${currentPrice.toFixed(2)}
            </div>
          </div>

          <Link
            href={`/product/${product.id}`}
            className="px-4 sm:px-5 py-2.5 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-purple-300/30 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-1.5 cursor-pointer"
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
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-14 sm:mb-18"> */}

          {/* Left Promo: 20% OFF */}
          {/* <div className="bg-gradient-to-br from-[#F3EEFF] to-[#EDE9FE] rounded-3xl p-5 sm:p-7 flex items-center justify-between border border-purple-100 relative overflow-hidden group">
            <div className="relative z-10 max-w-[200px] sm:max-w-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7C3AED] block mb-1">
                20% OFF
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#1E1040] tracking-tight leading-tight mb-3 sm:mb-4">
                New Born <br />
                Babies Essentials
              </h3>
              <Link
                href="/#shop"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs tracking-wide shadow-sm transition-all"
              >
                <span>Shop Now</span>
                <span className="text-xs">→</span>
              </Link>
            </div>

            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shadow-md border-2 border-white flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=500&q=80"
                alt="New Born Babies Essentials"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div> */}

          {/* Right Promo: SEASON SPECIAL */}
          {/* <div className="bg-gradient-to-br from-[#EDE9FE] to-[#DDD6FE] rounded-3xl p-5 sm:p-7 flex items-center justify-between border border-purple-200 relative overflow-hidden group">
            <div className="relative z-10 max-w-[200px] sm:max-w-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[#6D28D9] block mb-1">
                SEASON SPECIAL
              </span>
              <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#1E1040] tracking-tight leading-tight mb-3 sm:mb-4">
                Best Collections <br />
                For Your Baby
              </h3>
              <Link
                href="/#shop"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#6D28D9] hover:bg-[#5B21B6] text-white font-bold text-xs tracking-wide shadow-sm transition-all"
              >
                <span>Shop Now</span>
                <span className="text-xs">→</span>
              </Link>
            </div>

            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden shadow-md border-2 border-white flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&q=80"
                alt="Best Collections For Your Baby"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div> */}

        {/* </div> */}

        {/* Product Catalog */}
        <div>
          <div className="mb-10 sm:mb-14">
            <div className="flex items-center gap-4 mb-2.5">
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-[#7C3AED]">
                Curated Collection
              </span>
              <div className="h-[1px] flex-1 max-w-xs bg-purple-200" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E1040] tracking-tight">
              Featured Baby <span className="text-[#7C3AED]">Treasures</span>
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
