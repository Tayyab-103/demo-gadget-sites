"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const leftProduct = products[0] || {
    name: "Blind Spot Mirror Set",
    image: "/img/products/product1.jpg",
  };
  const rightProduct = products[1] || {
    name: "Magnetic Phone Mount",
    image: "/img/products/product2.jpg",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText("AXLE15");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#f8fafc] border-b border-gray-200 overflow-hidden font-sans" id="vip-club">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-Column Layout: Left Image | Center Content | Right Image */}
        <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 lg:p-12 shadow-xl shadow-blue-500/5 relative overflow-hidden">
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* ─── 1. LEFT IMAGE ─── */}
            <div className="hidden lg:flex lg:col-span-3 flex-col items-center justify-center">
              <div className="relative group w-full max-w-[220px] aspect-square rounded-2xl p-4 bg-gradient-to-b from-blue-50/60 to-slate-50 border border-blue-100 shadow-md transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300">
                <img
                  src={leftProduct.image}
                  alt={leftProduct.name}
                  className="w-full h-full object-contain mix-blend-multiply"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/300x300?text=Auto+Upgrade";
                  }}
                />
                <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-xs py-1 px-2 rounded-lg text-center shadow-xs border border-gray-100">
                  <span className="text-[0.65rem] font-bold text-gray-800 truncate block">
                    {leftProduct.name}
                  </span>
                </div>
              </div>
            </div>

            {/* ─── 2. CENTER CONTENT ─── */}
            <div className="col-span-1 lg:col-span-6 flex flex-col items-center text-center">
              {/* VIP Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                <span>🎁</span>
                <span>VIP DRIVER&apos;S CLUB</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-3">
                GET AN INSTANT{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  15% OFF
                </span>{" "}
                YOUR ORDER
              </h2>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-md mb-6">
                Subscribe to unlock exclusive driver discounts, priority dispatch on all auto accessories, and early access to new drops.
              </p>

              {/* Input Form or Success Card */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-2.5 mb-6">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    className="flex-1 px-4 py-3 rounded-full bg-[#f8fafc] border border-gray-300 text-gray-900 placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition-all shadow-inner"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-blue-500/25 hover:shadow-lg cursor-pointer whitespace-nowrap active:scale-95"
                  >
                    Claim 15% Off
                  </button>
                </form>
              ) : (
                <div className="w-full max-w-md bg-blue-50/80 border border-blue-200 rounded-2xl p-4 mb-6 shadow-sm animate-in fade-in zoom-in-95 duration-200">
                  <span className="text-xs text-blue-700 font-bold uppercase tracking-wider block mb-1">
                    ✓ Coupon Code Activated!
                  </span>
                  <div className="flex items-center justify-center gap-3 mt-2">
                    <span className="text-lg font-black text-blue-900 bg-white px-4 py-1.5 rounded-lg border border-blue-300 tracking-widest font-mono shadow-xs">
                      AXLE15
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyCode}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer shadow-xs"
                    >
                      {copied ? "Copied! ✓" : "Copy Code"}
                    </button>
                    <Link
                      href="/shop"
                      className="text-xs text-blue-600 hover:text-blue-800 font-semibold underline ml-1"
                    >
                      Shop Now &rarr;
                    </Link>
                  </div>
                </div>
              )}

              {/* Trust Checkmarks */}
              <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-gray-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="text-blue-600 font-bold">✓</span> 15% Off Entire Order
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-blue-600 font-bold">✓</span> Instant Code Delivery
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-blue-600 font-bold">✓</span> No Spam Guarantee
                </span>
              </div>
            </div>

            {/* ─── 3. RIGHT IMAGE ─── */}
            <div className="hidden lg:flex lg:col-span-3 flex-col items-center justify-center">
              <div className="relative group w-full max-w-[220px] aspect-square rounded-2xl p-4 bg-gradient-to-b from-blue-50/60 to-slate-50 border border-blue-100 shadow-md transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300">
                <img
                  src={rightProduct.image}
                  alt={rightProduct.name}
                  className="w-full h-full object-contain mix-blend-multiply"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/300x300?text=Auto+Upgrade";
                  }}
                />
                <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-xs py-1 px-2 rounded-lg text-center shadow-xs border border-gray-100">
                  <span className="text-[0.65rem] font-bold text-gray-800 truncate block">
                    {rightProduct.name}
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
