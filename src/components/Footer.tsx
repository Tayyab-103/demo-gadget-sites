"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-[#0D0E10] text-white border-t border-white/10 relative overflow-hidden" id="footer">
      {/* Subtle Ambient Decorative Glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#E06830]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-black/40 rounded-full blur-2xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        
        {/* Top Newsletter Card Banner */}
        <div className="bg-[#121316] border border-white/10 rounded-3xl p-8 sm:p-10 mb-16 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full border border-[#E06830]/30 text-[#E06830] text-xs font-bold uppercase tracking-wider mb-3">
                <span>✦ VIP CHEF CLUB</span>
                <span>•</span>
                <span>SAVE 15%</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                Unlock 15% Off Your Next Kitchen Tool Order
              </h3>

              <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-lg">
                Join our culinary collective to receive chef care guides, seasonal atelier releases, and an instant 15% discount voucher.
              </p>
            </div>

            {/* Right Form (5 cols) */}
            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="flex items-center gap-2.5 text-[#E06830] text-xs font-bold bg-white/10 p-4 rounded-2xl border border-[#E06830]/40">
                  <span className="text-base">✓</span>
                  <span>Welcome to the foundry! Check your inbox for your 15% discount code.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3.5 text-xs text-white placeholder:text-white/50 focus:outline-none focus:border-[#E06830] transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-[#E06830] text-white font-bold text-xs uppercase tracking-widest px-7 py-3.5 rounded-full hover:bg-white hover:text-[#121316] transition-all cursor-pointer whitespace-nowrap shadow-md"
                  >
                    Get 15% Off
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* 3-Column Main Navigation & Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#E06830] text-white flex items-center justify-center text-xl shadow-md flex-shrink-0 font-bold">
                ✦
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-white leading-tight">
                {siteConfig.brandName}
              </span>
            </div>

            <p className="text-white/75 text-xs sm:text-sm leading-relaxed mb-6 max-w-md">
              Dedicated to high-precision culinary tools, hand-forged 12-wire balloon whisks, 0.1g digital culinary scales, and multi-prep Japanese steel kitchen shears.
            </p>

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-3.5 py-1.5 rounded-full text-[0.68rem] text-white/90 font-medium">
              <span className="text-[#E06830] font-bold">✓</span>
              <span>100% Forged Food-Safe Stainless &amp; Copper</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-[#E06830] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              <li><Link href="/" className="hover:text-[#E06830] transition-colors">Home</Link></li>
              <li><Link href="/shop" className="hover:text-[#E06830] transition-colors">Products</Link></li>
              <li><Link href="/about" className="hover:text-[#E06830] transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-[#E06830] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Concierge Support (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-[#E06830] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Customer Support
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              <li className="text-white font-bold text-sm">{siteConfig.phone}</li>
              <li className="break-all">{siteConfig.email}</li>
              <li className="text-white/60 text-[0.7rem] leading-relaxed pt-1">
                {siteConfig.address}
              </li>
              <li className="pt-2">
                <span className="inline-block bg-white/10 border border-white/10 text-[#E06830] text-[0.62rem] font-bold px-2.5 py-1 rounded-md">
                  {siteConfig.shippingCarrier} Tracked Delivery ({siteConfig.shippingPeriod} Days)
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Payment & Security Row */}
        <div className="py-6 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[0.7rem] uppercase font-bold tracking-wider text-white/60">
              Accepted Payments:
            </span>
            <div className="flex items-center gap-2.5">
              <img
                src="/mastercard.png"
                alt="MasterCard"
                className="h-6 w-auto object-contain rounded shadow-xs"
              />
              <img
                src="/visa.png"
                alt="VISA"
                className="h-6 w-auto object-contain rounded shadow-xs"
              />
            </div>
          </div>
{/* 
          <div className="flex items-center gap-2 text-[0.72rem] text-white/80 font-medium">
            <span className="text-[#E06830]">🔒</span>
            <span>256-Bit SSL Encrypted &amp; PCI-DSS Secure</span>
          </div> */}
        </div>

        {/* Bottom Legal & Descriptor Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/60">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
            <span>&copy; {currentYear} {siteConfig.brandName}. All rights reserved.</span>
            <span>•</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>

          <div className="text-[0.68rem] text-center md:text-right text-white/50 max-w-md">
            Statement descriptor: <strong className="text-white/80">{siteConfig.descriptor}</strong>. All tools protected by our {siteConfig.trialPeriod}-day culinary satisfaction guarantee.
          </div>
        </div>

      </div>
    </footer>
  );
}
