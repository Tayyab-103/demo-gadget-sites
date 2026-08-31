"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import productsData from "../../config/products.json";
import { Product } from "@/types";

const products = productsData as unknown as Product[];

export default function DealOfTheDay() {
  const { addToCart } = useCart();
  const featuredProduct: Product = products[0];
  const firstBundle = featuredProduct?.bundles && featuredProduct.bundles[0];
  const currentPrice = firstBundle ? firstBundle.price : featuredProduct?.ssPrice || "6.95";
  const originalPrice = (Number(currentPrice) * 1.5).toFixed(2);

  // Live countdown timer state (2 days, 14 hours, 35 mins, 48 secs)
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 35,
    seconds: 48,
  });

  const [added, setAdded] = useState(false);

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
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAddToCart = () => {
    addToCart(featuredProduct, 1, currentPrice);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ────────────────── SECTION TITLE ────────────────── */}
        <div className="flex items-center gap-2.5 mb-8 pb-3 border-b border-gray-200">
          <span className="w-5 h-5 rounded-full border-2 border-red-600 flex items-center justify-center flex-shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
          </span>
          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-gray-900 uppercase">
            <span>DEAL OF </span>
            <span className="text-gray-500 font-bold">THE DAY</span>
          </h2>
        </div>

        {/* ────────────────── MAIN DEAL GRID: BANNER + DEAL CARD ────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Hero Promo Banner */}
          <div className="lg:col-span-8 relative rounded-2xl overflow-hidden bg-[#0c0f14] text-white p-6 sm:p-10 lg:p-12 flex flex-col justify-between shadow-xl min-h-[380px] sm:min-h-[420px] group">
            {/* Ambient Sparkles & Glow Effects */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
              <div className="absolute right-10 top-1/2 -translate-y-1/2 w-80 h-80 bg-red-600/15 rounded-full blur-3xl" />
              {/* Starburst icon */}
              <div className="absolute right-16 bottom-10 opacity-30 text-white animate-pulse">
                <svg className="w-32 h-32" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 0 L53 38 L91 50 L53 62 L50 100 L47 62 L9 50 L47 38 Z" />
                </svg>
              </div>
            </div>

            {/* Background Mechanic / Tire Visual */}
            <div className="absolute inset-y-0 left-0 w-full sm:w-1/2 overflow-hidden pointer-events-none z-0">
              <img
                src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=900&auto=format&fit=crop&q=80"
                alt="Automotive Mechanic and Tire"
                className="w-full h-full object-cover object-left opacity-35 sm:opacity-55 mix-blend-luminosity filter contrast-125"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=900&auto=format&fit=crop&q=80";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0c0f14]/80 to-[#0c0f14]" />
            </div>

            {/* Banner Text Content */}
            <div className="relative z-10 sm:ml-auto sm:max-w-md text-left py-4">
              <div className="inline-block text-xs sm:text-sm font-black uppercase tracking-widest text-gray-300 mb-2">
                STARTING AT <span className="text-red-500 font-extrabold text-base sm:text-lg">${currentPrice}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.08] tracking-tight uppercase mb-2">
                <span className="text-white">MOST </span>
                <span className="text-red-600">ESSENTIALS</span>
              </h3>

              <p className="text-sm sm:text-base font-bold uppercase tracking-wider text-gray-300 mb-6">
                SHOP AND SAVE BIG ON PRO-GRADE PARTS
              </p>

              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-3 rounded-full shadow-lg shadow-red-600/40 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <span>Shop now</span>
                <span>&rarr;</span>
              </Link>
            </div>

            {/* Bottom Subtle Trust Tag */}
            <div className="relative z-10 flex items-center gap-4 text-xs text-gray-400 font-semibold pt-4 border-t border-white/10 mt-auto">
              <span>✓ OEM Standard Tested</span>
              <span>✓ Rapid Same-Day Dispatch</span>
            </div>
          </div>

          {/* Right Deal of the Day Product Card (Red Outline Highlight) */}
          <div className="lg:col-span-4 border-2 border-red-500 rounded-2xl bg-white p-5 sm:p-6 shadow-xl flex flex-col justify-between relative">
            {/* Discount Ribbon Tag */}
            <div className="absolute top-4 right-4 bg-red-600 text-white text-[0.68rem] font-black uppercase px-2.5 py-1 rounded-full shadow-sm">
              SAVE 50%
            </div>

            {/* Product Image */}
            <Link
              href={`/product/${featuredProduct.id}`}
              className="block w-full aspect-[4/3] p-4 bg-gray-50/70 rounded-xl overflow-hidden mb-4 group"
            >
              <img
                src={featuredProduct.image}
                alt={featuredProduct.name}
                className="w-full h-full object-contain mix-blend-multiply group-hover:scale-108 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/300x300?text=Filter+Kit";
                }}
              />
            </Link>

            {/* Product Details */}
            <div className="text-center mb-4">
              <h4 className="text-base font-bold text-gray-900 hover:text-red-600 transition-colors leading-snug mb-1.5">
                <Link href={`/product/${featuredProduct.id}`}>
                  {featuredProduct.name}
                </Link>
              </h4>

              {/* Review Stars */}
              <div className="flex items-center justify-center gap-1 text-red-500 text-xs mb-2">
                {"★".repeat(4)}
                <span className="text-gray-300">★</span>
                <span className="text-gray-500 text-[0.7rem] ml-1 font-medium">(126 Reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-xl font-black text-red-600">${currentPrice}</span>
                <span className="text-xs text-gray-400 line-through font-semibold">${originalPrice}</span>
              </div>
            </div>

            {/* Stock Progress Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-[0.72rem] font-bold text-gray-600 mb-1.5">
                <span>Available: <strong className="text-gray-900">48</strong></span>
                <span>Units Sold: <strong className="text-red-600">252</strong></span>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div className="bg-red-600 h-full rounded-full w-[84%] animate-pulse" />
              </div>
            </div>

            {/* Live Countdown Timer (Matching Screenshot) */}
            <div className="pt-3 border-t border-gray-100 mb-4 text-center">
              <p className="text-[0.72rem] font-bold text-gray-600 uppercase tracking-wide mb-2">
                <strong className="text-red-600">Hurry Up!</strong> Offer ends in :
              </p>

              <div className="grid grid-cols-4 gap-1.5">
                <div className="bg-gray-100 rounded-lg py-1.5 px-1 flex flex-col items-center">
                  <span className="text-sm font-black text-gray-900 leading-none">
                    {String(timeLeft.days).padStart(2, "0")}
                  </span>
                  <span className="text-[0.58rem] font-semibold text-gray-400 uppercase tracking-wider mt-0.5">
                    Days
                  </span>
                </div>

                <div className="bg-gray-100 rounded-lg py-1.5 px-1 flex flex-col items-center">
                  <span className="text-sm font-black text-gray-900 leading-none">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                  <span className="text-[0.58rem] font-semibold text-gray-400 uppercase tracking-wider mt-0.5">
                    Hrs
                  </span>
                </div>

                <div className="bg-gray-100 rounded-lg py-1.5 px-1 flex flex-col items-center">
                  <span className="text-sm font-black text-gray-900 leading-none">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                  <span className="text-[0.58rem] font-semibold text-gray-400 uppercase tracking-wider mt-0.5">
                    Mins
                  </span>
                </div>

                <div className="bg-gray-100 rounded-lg py-1.5 px-1 flex flex-col items-center">
                  <span className="text-sm font-black text-red-600 leading-none">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                  <span className="text-[0.58rem] font-semibold text-gray-400 uppercase tracking-wider mt-0.5">
                    Secs
                  </span>
                </div>
              </div>
            </div>

            {/* Add to Cart / Claim Deal Button */}
            <button
              type="button"
              onClick={handleAddToCart}
              className={`w-full py-2.5 px-4 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                added
                  ? "bg-green-600 text-white"
                  : "bg-red-600 hover:bg-red-700 text-white shadow-red-600/30"
              }`}
            >
              <span>{added ? "Deal Claimed & Added ✓" : "Claim This Deal"}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
