"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import productsData from "../../config/products.json";
import { Product } from "@/types";

const products = productsData as unknown as Product[];

const discountBadges = ["-14%", "-18%", "-20%"];
const reviewCounts = [126, 106, 120];

export default function ProductGrid() {
  const { addToCart } = useCart();
  const [addedItem, setAddedItem] = useState<string | null>(null);

  const handleAddToCart = (product: Product, price: string | number) => {
    addToCart(product, 1, price);
    setAddedItem(product.id);
    setTimeout(() => setAddedItem(null), 1800);
  };

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-[#fafafa] border-b border-gray-200" id="shop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ────────────────── SECTION HEADER STRIP ────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-8 border-b border-gray-200">
          {/* Left Title: ⦿ EXPLORE PRODUCTS */}
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-5 rounded-full border-2 border-red-600 flex items-center justify-center flex-shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
            </span>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-gray-900 uppercase">
              EXPLORE PRODUCTS
            </h2>
          </div>

          {/* Right Action: VIEW ALL */}
          <Link
            href="/shop"
            className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-900 hover:text-red-600 border-b-2 border-red-600 pb-0.5 self-start sm:self-auto transition-colors"
          >
            VIEW ALL PRODUCTS &rarr;
          </Link>
        </div>

        {/* ────────────────── 3 PRODUCTS SHOWCASE GRID ────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.slice(0, 3).map((product, idx) => {
            const firstBundle = product.bundles && product.bundles[0];
            const currentPrice = firstBundle ? firstBundle.price : product.ssPrice;
            const originalPrice = (Number(currentPrice) * 1.5).toFixed(2);
            const discount = discountBadges[idx % discountBadges.length];
            const reviewCount = reviewCounts[idx % reviewCounts.length];

            return (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-red-300 transition-all duration-300 flex flex-col group relative"
              >
                {/* Discount Badge */}
                <div className="absolute top-3.5 right-3.5 z-20 bg-red-600 text-white text-[0.68rem] font-black w-8 h-8 rounded-full flex items-center justify-center shadow-md">
                  {discount}
                </div>

                {/* Product Image Area */}
                <Link
                  href={`/product/${product.id}`}
                  className="relative block w-full aspect-square p-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-108 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/400x400?text=Auto+Part";
                    }}
                  />
                </Link>

                {/* Card Content */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 border-t border-gray-100">
                  {/* Reviews Stars */}
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="flex text-red-500 text-xs">
                      {"★".repeat(4)}
                      <span className="text-gray-300">★</span>
                    </div>
                    <span className="text-[0.7rem] text-gray-500 font-medium">
                      ({reviewCount}) Review
                    </span>
                  </div>

                  {/* Product Title */}
                  <Link
                    href={`/product/${product.id}`}
                    className="text-sm sm:text-base font-bold text-gray-900 hover:text-red-600 transition-colors line-clamp-2 leading-snug mb-3 flex-1"
                  >
                    {product.name}
                  </Link>

                  {/* Price Section */}
                  <div className="flex items-baseline gap-2.5 mb-4">
                    <span className="text-lg sm:text-xl font-extrabold text-red-600">
                      ${currentPrice}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-400 line-through font-medium">
                      ${originalPrice}
                    </span>
                  </div>

                  {/* Add To Cart Button */}
                  <button
                    type="button"
                    onClick={() => handleAddToCart(product, currentPrice)}
                    className={`w-full py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                      addedItem === product.id
                        ? "bg-green-600 text-white"
                        : "bg-[#f87171]/20 hover:bg-red-600 text-red-700 hover:text-white"
                    }`}
                  >
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
                    >
                      <circle cx="8" cy="21" r="1" />
                      <circle cx="19" cy="21" r="1" />
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                    </svg>
                    <span>
                      {addedItem === product.id ? "Added To Cart ✓" : "ADD TO CART"}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
