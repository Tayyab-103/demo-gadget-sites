"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";

const products = productsData as unknown as Product[];
const discountBadges = ["-14%", "-18%", "-20%"];

export default function ProductGrid() {
  const [active, setActive] = useState(0);

  // Calculate left and right adjacent product indices
  const count = products.length;
  const leftIdx = (active - 1 + count) % count;
  const rightIdx = (active + 1) % count;

  const currentProduct = products[active] || products[0];
  const leftProduct = products[leftIdx] || products[0];
  const rightProduct = products[rightIdx] || products[0];

  const getPrice = (prod: Product) => {
    const firstBundle = prod.bundles && prod.bundles[0];
    return firstBundle ? firstBundle.price : prod.ssPrice;
  };

  const currentPrice = getPrice(currentProduct);
  const originalPrice = (Number(currentPrice) * 1.5).toFixed(2);
  const currentDiscount = discountBadges[active % discountBadges.length];

  return (
    <section className="py-12 sm:py-20 bg-[#f8fafc] border-b border-gray-200 overflow-hidden" id="shop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ────────────────── SECTION HEADER ────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-8 sm:mb-12 border-b border-gray-200">
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-5 rounded-full border-2 border-blue-600 flex items-center justify-center flex-shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
            </span>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-gray-900 uppercase">
              EXPLORE PRODUCTS
            </h2>
          </div>

          <Link
            href="/shop"
            className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-900 hover:text-blue-600 border-b-2 border-blue-600 pb-0.5 self-start sm:self-auto transition-colors"
          >
            VIEW ALL PRODUCTS &rarr;
          </Link>
        </div>

        {/* ────────────────── 3-CARD FOCAL CAROUSEL ────────────────── */}
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center gap-3 sm:gap-6 lg:gap-8 w-full select-none">
            
            {/* Left Card (Smaller & Clickable to switch) */}
            <div
              onClick={() => setActive(leftIdx)}
              className="hidden md:flex flex-col items-center cursor-pointer group opacity-60 hover:opacity-90 transition-all duration-300 hover:scale-95 transform scale-90"
              title={`View ${leftProduct.name}`}
            >
              <div className="w-44 lg:w-52 aspect-square rounded-2xl p-4 bg-white border border-gray-200 shadow-sm overflow-hidden flex items-center justify-center group-hover:border-blue-400 group-hover:shadow-md transition-all">
                <img
                  src={leftProduct.image}
                  alt={leftProduct.name}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/400x400?text=Auto+Part";
                  }}
                />
              </div>
              <p className="text-xs lg:text-sm font-semibold text-slate-600 mt-2.5 text-center max-w-[180px] truncate group-hover:text-blue-600">
                {leftProduct.name}
              </p>
              <span className="text-xs text-blue-600 font-bold">${getPrice(leftProduct)}</span>
            </div>

            {/* Center Card (Prominent & Featured) */}
            <div className="flex flex-col items-center w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px]">
              <div className="relative w-full bg-white rounded-3xl p-6 sm:p-8 border-2 border-blue-600/30 shadow-xl shadow-blue-600/10 flex flex-col items-center group transition-all duration-300">
                {/* Discount Badge */}
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[0.72rem] font-black px-2.5 py-1 rounded-full shadow-md">
                  {currentDiscount}
                </div>

                {/* Main Product Image */}
                <Link
                  href={`/product/${currentProduct.id}`}
                  className="w-full aspect-square max-w-[260px] sm:max-w-[300px] flex items-center justify-center p-4 bg-gradient-to-b from-blue-50/40 to-white rounded-2xl overflow-hidden cursor-pointer"
                >
                  <img
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/400x400?text=Auto+Part";
                    }}
                  />
                </Link>

                {/* Details */}
                <div className="w-full mt-4 text-center">
                  <span className="text-[0.68rem] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full inline-block mb-1.5">
                    {currentProduct.category || "Premium Auto Upgrade"}
                  </span>

                  <Link
                    href={`/product/${currentProduct.id}`}
                    className="block text-base sm:text-lg font-bold text-slate-950 hover:text-blue-600 transition-colors line-clamp-2 leading-snug"
                  >
                    {currentProduct.name}
                  </Link>

                  {/* Price */}
                  <div className="flex items-baseline justify-center gap-2 mt-2">
                    <span className="text-xl sm:text-2xl font-black text-blue-600">
                      ${currentPrice}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-400 line-through font-medium">
                      ${originalPrice}
                    </span>
                  </div>

                  {/* Buy / View Product Button */}
                  <Link
                    href={`/product/${currentProduct.id}`}
                    className="mt-4 w-full py-3 px-5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white hover:shadow-lg shadow-blue-500/25 hover:-translate-y-0.5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="8" cy="21" r="1" />
                      <circle cx="19" cy="21" r="1" />
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                    </svg>
                    <span>View &amp; Buy Now</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Card (Smaller & Clickable to switch) */}
            <div
              onClick={() => setActive(rightIdx)}
              className="hidden md:flex flex-col items-center cursor-pointer group opacity-60 hover:opacity-90 transition-all duration-300 hover:scale-95 transform scale-90"
              title={`View ${rightProduct.name}`}
            >
              <div className="w-44 lg:w-52 aspect-square rounded-2xl p-4 bg-white border border-gray-200 shadow-sm overflow-hidden flex items-center justify-center group-hover:border-blue-400 group-hover:shadow-md transition-all">
                <img
                  src={rightProduct.image}
                  alt={rightProduct.name}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/400x400?text=Auto+Part";
                  }}
                />
              </div>
              <p className="text-xs lg:text-sm font-semibold text-slate-600 mt-2.5 text-center max-w-[180px] truncate group-hover:text-blue-600">
                {rightProduct.name}
              </p>
              <span className="text-xs text-blue-600 font-bold">${getPrice(rightProduct)}</span>
            </div>

          </div>

          {/* ────────────────── DOTS NAVIGATION ────────────────── */}
          <div className="flex items-center gap-2.5 mt-6 sm:mt-8">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to product ${i + 1}`}
                className={`transition-all duration-300 cursor-pointer rounded-full ${
                  i === active
                    ? "w-6 h-2 bg-gradient-to-r from-blue-600 to-indigo-600"
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
