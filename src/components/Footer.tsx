"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-[#0A0F1D] text-[#F8FAFC] border-t border-slate-800 pt-16 sm:pt-20 pb-12 sm:pb-14">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter Banner */}
        <div className="rounded-3xl bg-white/5 border border-white/10 p-6 sm:p-8 md:p-10 mb-14 sm:mb-16 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="max-w-md text-center md:text-left">
            <div className="text-[0.68rem] font-mono uppercase tracking-[0.24em] text-blue-400 font-bold mb-1 select-none">
              FLEET OUTFITTER ACCESS
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Join The Workforce Roster
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1.5 font-normal">
              Receive private uniform releases, fabric test reports, and $15 off your crew&apos;s initial outfitting order.
            </p>
          </div>

          <div className="w-full md:w-auto">
            {subscribed ? (
              <div className="bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider">
                ✓ Welcome aboard. Fleet credentials dispatched to your inbox.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your workforce email..."
                  required
                  className="px-5 py-3 rounded-full bg-slate-900 border border-slate-700 text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-white min-w-[240px] sm:min-w-[280px]"
                />
                <button
                  type="submit"
                  className="px-7 py-3 rounded-full bg-white hover:bg-slate-200 text-[#0A0F1D] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center"
                >
                  Join Roster
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 pb-12 sm:pb-14 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <span className="w-7 h-7 rounded-lg bg-white text-[#0A0F1D] flex items-center justify-center font-black text-xs">
                🛡️
              </span>
              <span className="font-extrabold text-base tracking-wider text-white uppercase">
                {siteConfig.brandName}
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed font-normal mb-4">
              Tactical workwear, antimicrobial medical scrubs, and executive chef uniform coats engineered in Austin, Texas.
            </p>
            <div className="text-[0.68rem] text-slate-400 font-mono font-medium">
              DESCRIPTOR: {siteConfig.descriptor}
            </div>
          </div>

          {/* Signature Catalog - Dynamic Matching Products Grid */}
          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-1.5">
              Workforce Apparel
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-normal">
              {products.map((product) => (
                <li key={product.id}>
                  <Link href={`/product/${product.id}`} className="hover:text-blue-400 transition-colors">
                    {product.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/shop" className="text-blue-400 hover:text-blue-300 font-bold transition-colors">
                  View Full Catalog →
                </Link>
              </li>
            </ul>
          </div>

          {/* Outfitting Standards */}
          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-1.5">
              The Atelier
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-normal">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Our Austin Tailoring Story
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-white transition-colors">
                  The Ironvale Protocol
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-white transition-colors">
                  Workforce Performance Features
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-white transition-colors">
                  Enterprise Client Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Outfitting Concierge */}
          <div>
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-1.5">
              Fleet Concierge
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-normal">
              <li>
                <span className="text-slate-400 block text-[0.65rem] font-mono uppercase">Direct Desk:</span>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white font-bold transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <span className="text-slate-400 block text-[0.65rem] font-mono uppercase">Enterprise Support:</span>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white break-all transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <span className="text-slate-400 block text-[0.65rem] font-mono uppercase">Atelier Hub:</span>
                <span className="text-slate-300">{siteConfig.address}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Copyright Bar & Payment Methods */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <p className="font-normal text-center lg:text-left order-2 lg:order-1">
            &copy; {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved. Precision Commercial Outfitting.
          </p>

          {/* Payment Methods */}
          <div className="flex items-center gap-3 order-1 lg:order-2">
            <span className="text-[0.68rem] font-mono uppercase tracking-wider text-slate-400 select-none">
              Payment Methods:
            </span>
            <div className="flex items-center gap-2">
              <div className="bg-white rounded-md px-2.5 py-1 flex items-center justify-center shadow-sm h-7.5 hover:opacity-90 transition-opacity">
                <img
                  src="/img/visa.png"
                  alt="Visa"
                  className="h-4 w-auto object-contain"
                />
              </div>
              <div className="bg-white rounded-md px-2.5 py-1 flex items-center justify-center shadow-sm h-7.5 hover:opacity-90 transition-opacity">
                <img
                  src="/img/mastercard.png"
                  alt="Mastercard"
                  className="h-5 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 order-3">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Support
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
