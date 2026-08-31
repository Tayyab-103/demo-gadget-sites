"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText("TORQUE10");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-10 sm:py-14 lg:py-16 overflow-hidden bg-[#0a0c10] text-white border-b border-gray-800" id="vip-club">
      {/* Background Subtle Tire & Workshop Texture with Ambient Red Flares */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
        <img
          src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=1600&auto=format&fit=crop&q=80"
          alt="Automotive Workshop Texture"
          className="w-full h-full object-cover mix-blend-luminosity filter blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c10] via-[#0a0c10]/85 to-[#0a0c10]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-b from-[#161a22] to-[#0f1218] border-2 border-red-600/60 rounded-3xl p-6 sm:p-10 lg:p-12 text-center shadow-2xl shadow-red-950/40 relative overflow-hidden">
          {/* Top VIP Badge */}
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full mb-5 shadow-sm">
            <span>🎁</span>
            <span>VIP DRIVER&apos;S CLUB</span>
          </div>

          {/* Main Headline */}
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-tight text-white mb-3">
            GET AN INSTANT <span className="text-red-600">10% OFF</span> YOUR ORDER
          </h2>

          <p className="text-gray-300 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed mb-6 font-normal">
            Subscribe to receive an instant 10% coupon code and priority alerts on new part drops.
          </p>

          {/* Form or Success State */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 mb-8">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address..."
                required
                className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-red-500 transition-colors shadow-inner"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-full shadow-lg shadow-red-600/40 hover:scale-105 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
              >
                Claim 10% Off
              </button>
            </form>
          ) : (
            <div className="max-w-md mx-auto bg-white/10 border border-red-500/50 rounded-2xl p-5 mb-8 animate-in fade-in zoom-in-95 duration-200">
              <span className="text-xs text-green-400 font-bold uppercase tracking-wider block mb-1">
                ✓ Coupon Code Activated!
              </span>
              <div className="flex items-center justify-center gap-3 mt-2">
                <span className="text-xl font-black text-white bg-black/60 px-4 py-1.5 rounded-lg border border-red-500/40 tracking-widest font-mono">
                  TORQUE10
                </span>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  {copied ? "Copied! ✓" : "Copy Code"}
                </button>
              </div>
              <span className="text-[0.7rem] text-gray-400 block mt-2">
                Use code at checkout to take 10% off your entire order today.
              </span>
            </div>
          )}

          {/* Perks Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs text-gray-400 font-semibold max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <span className="text-red-500 font-bold">✓</span>
              <span>Instant 10% Discount Code</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-red-500 font-bold">✓</span>
              <span>Free Installation PDF Guides</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-red-500 font-bold">✓</span>
              <span>Zero Spam Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
