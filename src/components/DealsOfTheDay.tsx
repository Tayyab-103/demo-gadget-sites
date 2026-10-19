"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

const products = productsData as unknown as Product[];

export default function DealsOfTheDay() {
  const { addToCart } = useCart();

  // 24 hour countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 14,
    minutes: 36,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const dealProducts = products.slice(0, 2);

  const handleQuickAdd = (product: Product) => {
    addToCart(product, 1, product.ssPrice, "Single Unit");
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#fffafb] via-white to-white font-sans border-b border-black/5" id="deals">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#ff4370] bg-[#ff4370]/10 px-3.5 py-1 rounded-full">
              Limited Time Specials
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e293b] tracking-tight mt-3">
              Deal of <span className="text-[#ff4370]">the Day</span>
            </h2>
          </div>
          <Link
            href="/shop"
            className="text-xs sm:text-sm font-black uppercase tracking-wider text-[#ff4370] hover:text-[#1e293b] transition-colors"
          >
            Explore All Deals →
          </Link>
        </div>

        {/* 2 Deal Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {dealProducts.map((product) => {
            const originalPrice = (Number(product.ssPrice) * 1.35).toFixed(2);

            return (
              <div
                key={product.id}
                className="group flex flex-col sm:flex-row overflow-hidden rounded-3xl bg-white border border-black/8 shadow-md hover:shadow-2xl transition-all duration-300 hover:border-[#ff4370]/30"
              >
                {/* Image */}
                <div className="sm:w-1/2 relative bg-black/5 aspect-square sm:aspect-auto overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 bg-[#ff4370] text-white text-[0.65rem] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                    Save 25% Today
                  </span>
                </div>

                {/* Content */}
                <div className="sm:w-1/2 p-6 sm:p-7 flex flex-col justify-between">
                  <div>
                    <span className="text-[0.68rem] font-black uppercase tracking-wider text-[#ff4370]">
                      {product.category}
                    </span>
                    <Link href={`/product/${product.id}`}>
                      <h3 className="text-lg sm:text-xl font-black text-[#1e293b] mt-1 mb-2 leading-snug group-hover:text-[#ff4370] transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                    </Link>

                    {/* Pricing */}
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-2xl font-black text-[#ff4370]">
                        ${product.ssPrice}
                      </span>
                      <del className="text-sm font-bold text-black/40">
                        ${originalPrice}
                      </del>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5 mb-5 text-[#ffb703] text-sm font-bold">
                      <span>★★★★★</span>
                      <span className="text-xs text-black/50 font-bold">(4.9/5)</span>
                    </div>

                    {/* Countdown Timer */}
                    <div className="mb-6">
                      <span className="text-[0.62rem] font-black uppercase tracking-wider text-black/50 block mb-1.5">
                        Offer Expires In:
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="bg-[#1e293b] text-white rounded-xl px-2.5 py-1.5 text-center min-w-[42px]">
                          <span className="text-xs font-black block font-mono">{String(timeLeft.days).padStart(2, "0")}</span>
                          <span className="text-[0.55rem] text-white/60 uppercase">Days</span>
                        </div>
                        <span className="font-black text-black/40">:</span>
                        <div className="bg-[#1e293b] text-white rounded-xl px-2.5 py-1.5 text-center min-w-[42px]">
                          <span className="text-xs font-black block font-mono">{String(timeLeft.hours).padStart(2, "0")}</span>
                          <span className="text-[0.55rem] text-white/60 uppercase">Hrs</span>
                        </div>
                        <span className="font-black text-black/40">:</span>
                        <div className="bg-[#1e293b] text-white rounded-xl px-2.5 py-1.5 text-center min-w-[42px]">
                          <span className="text-xs font-black block font-mono">{String(timeLeft.minutes).padStart(2, "0")}</span>
                          <span className="text-[0.55rem] text-white/60 uppercase">Mins</span>
                        </div>
                        <span className="font-black text-black/40">:</span>
                        <div className="bg-[#ff4370] text-white rounded-xl px-2.5 py-1.5 text-center min-w-[42px]">
                          <span className="text-xs font-black block font-mono">{String(timeLeft.seconds).padStart(2, "0")}</span>
                          <span className="text-[0.55rem] text-white/80 uppercase">Secs</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleQuickAdd(product)}
                    className="w-full py-3.5 px-6 rounded-2xl bg-[#ff4370] hover:bg-[#e63560] text-white font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Add to Cart</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                      <path d="M3 6h18" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
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
