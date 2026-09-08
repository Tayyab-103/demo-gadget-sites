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
    name: "Grandmaster Solid Walnut Wooden Chess Set",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=800&auto=format&fit=crop",
  };
  const rightProduct = products[1] || {
    name: "Classic Handcrafted Wooden Ludo Game",
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?q=80&w=800&auto=format&fit=crop",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText("WONDER15");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-14 sm:py-20 bg-[#FAF8F5] border-b border-black/[0.06] overflow-hidden font-sans" id="vip-club">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-Column Layout: Left Image | Center Content | Right Image */}
        <div className="bg-white rounded-3xl border border-black/[0.08] p-6 sm:p-10 lg:p-12 shadow-xl shadow-black/5 relative overflow-hidden">
          {/* Ambient Warm Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#A36B42]/10 rounded-full blur-3xl pointer-events-none -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* ─── 1. LEFT IMAGE ─── */}
            <div className="hidden lg:flex lg:col-span-3 flex-col items-center justify-center">
              <div className="relative group w-full max-w-[220px] aspect-square rounded-2xl overflow-hidden bg-[#FAF8F5] border border-black/10 shadow-md transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300">
                <img
                  src={leftProduct.image}
                  alt={leftProduct.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800&auto=format&fit=crop";
                  }}
                />
                <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-xs py-1 px-2 rounded-lg text-center shadow-xs border border-black/5">
                  <span className="text-[0.65rem] font-bold text-[#191716] truncate block">
                    {leftProduct.name}
                  </span>
                </div>
              </div>
            </div>

            {/* ─── 2. CENTER CONTENT ─── */}
            <div className="col-span-1 lg:col-span-6 flex flex-col items-center text-center">
              {/* VIP Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#A36B42]/30 text-[#A36B42] text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
                <span>🎁</span>
                <span>VIP BUILDER &amp; GAMER GUILD</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#191716] tracking-tight leading-tight mb-3">
                GET AN INSTANT{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A36B42] via-[#C08151] to-[#A36B42]">
                  15% OFF
                </span>{" "}
                YOUR FIRST KIT
              </h2>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-black/65 leading-relaxed max-w-md mb-6 font-normal">
                Join the {siteConfig.brandName} Guild for instant coupon codes, exclusive seasonal tabletop expansions, and early maker blueprint releases.
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
                    className="flex-1 px-4 py-3 rounded-full bg-[#FAF8F5] border border-black/15 text-black placeholder-black/40 text-xs sm:text-sm focus:outline-none focus:border-[#A36B42] focus:bg-white transition-all shadow-inner"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-[#A36B42] via-[#C08151] to-[#A36B42] hover:from-[#B57849] hover:to-[#925F39] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-[#A36B42]/25 hover:shadow-lg cursor-pointer whitespace-nowrap active:scale-95"
                  >
                    Claim 15% Off
                  </button>
                </form>
              ) : (
                <div className="w-full max-w-md bg-[#FAF8F5] border border-[#A36B42]/40 rounded-2xl p-4 mb-6 shadow-sm animate-in fade-in zoom-in-95 duration-200">
                  <span className="text-xs text-[#A36B42] font-bold uppercase tracking-wider block mb-1">
                    ✓ Coupon Code Activated!
                  </span>
                  <div className="flex items-center justify-center gap-3 mt-2">
                    <span className="text-lg font-black text-[#191716] bg-white px-4 py-1.5 rounded-lg border border-[#A36B42]/40 tracking-widest font-mono shadow-xs">
                      WONDER15
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyCode}
                      className="bg-[#A36B42] hover:bg-[#8F5A34] text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer shadow-xs"
                    >
                      {copied ? "Copied! ✓" : "Copy Code"}
                    </button>
                    <Link
                      href="/shop"
                      className="text-xs text-[#A36B42] hover:text-[#191716] font-semibold underline ml-1"
                    >
                      Shop Now &rarr;
                    </Link>
                  </div>
                </div>
              )}

              {/* Trust Checkmarks */}
              <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-black/60 font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="text-[#A36B42] font-bold">✓</span> 15% Off Entire Order
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#A36B42] font-bold">✓</span> Instant Code Delivery
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-[#A36B42] font-bold">✓</span> No Spam Guarantee
                </span>
              </div>
            </div>

            {/* ─── 3. RIGHT IMAGE ─── */}
            <div className="hidden lg:flex lg:col-span-3 flex-col items-center justify-center">
              <div className="relative group w-full max-w-[220px] aspect-square rounded-2xl overflow-hidden bg-[#FAF8F5] border border-black/10 shadow-md transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-300">
                <img
                  src={rightProduct.image}
                  alt={rightProduct.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?q=80&w=800&auto=format&fit=crop";
                  }}
                />
                <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-xs py-1 px-2 rounded-lg text-center shadow-xs border border-black/5">
                  <span className="text-[0.65rem] font-bold text-[#191716] truncate block">
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
