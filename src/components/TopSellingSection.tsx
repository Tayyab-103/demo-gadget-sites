"use client";

import React from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

const products = productsData as unknown as Product[];

export default function TopSellingSection() {
  const { addToCart } = useCart();
  const topSelling = products.length > 3 ? products.slice(2, 6) : products;

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white font-sans border-b border-black/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Ad Banner: Kid Toy Collection for Summer */}
          <div className="lg:col-span-4 rounded-3xl overflow-hidden relative p-8 sm:p-10 flex flex-col justify-between text-white min-h-[380px] sm:min-h-[440px] shadow-lg bg-gradient-to-br from-[#ff4370] via-[#ff6b8b] to-[#ffb703]">
            {/* Whimsical backdrop shapes */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-white/10 blur-xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-36 h-36 rounded-full bg-black/10 blur-md pointer-events-none" />
            
            <div className="relative z-10">
              <span className="inline-block text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-xs mb-4">
                Featured
              </span>
              <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight text-white drop-shadow-xs">
                Kid Toy Collection for Summer
              </h2>
            </div>

            <div className="relative z-10 pt-8">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-[#ff4370] font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-black/90 hover:text-white transition-all shadow-md cursor-pointer"
              >
                View Shop →
              </Link>
            </div>
          </div>

          {/* Right Top Selling Products Column */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-black/5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1e293b] tracking-tight">
                Top Selling <span className="text-[#ff4370]">Products</span>
              </h2>
              <Link
                href="/shop"
                className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#ff4370] hover:text-[#1e293b] transition-colors"
              >
                View All →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {topSelling.map((product) => (
                <div
                  key={product.id}
                  className="toy-card p-4 sm:p-5 flex items-center gap-4 group"
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-black/5 overflow-hidden flex-shrink-0 relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col flex-grow min-w-0">
                    <span className="text-[0.65rem] font-black uppercase tracking-wider text-[#ff4370]">
                      {product.category}
                    </span>
                    <Link href={`/product/${product.id}`}>
                      <h4 className="text-sm sm:text-base font-black text-[#1e293b] group-hover:text-[#ff4370] transition-colors truncate mt-0.5">
                        {product.name}
                      </h4>
                    </Link>
                    <div className="flex items-center gap-1.5 my-1">
                      <span className="text-xs text-[#ffb703]">★★★★★</span>
                      <span className="text-[0.65rem] text-black/50 font-bold">(4.9)</span>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-sm sm:text-base font-black text-[#1e293b]">
                        ${product.ssPrice}
                      </span>
                      <button
                        onClick={() => addToCart(product, 1, product.ssPrice, "Single Unit")}
                        className="text-xs font-black uppercase tracking-wider text-white bg-[#ff4370] hover:bg-[#e63560] px-3.5 py-1.5 rounded-full transition-all cursor-pointer shadow-xs"
                      >
                        + Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
