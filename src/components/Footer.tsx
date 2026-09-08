"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#0D2115] text-white border-t border-white/10 select-none" id="footer">

      {/* 2. Main Footer Navigation & Brand Content */}
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Brand Info & Mission (Col 1 - 4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#265C1E] text-white flex items-center justify-center font-serif text-lg font-bold border border-white/20 shadow-xs">
                  BF
                </div>
                <div>
                  <span className="font-extrabold text-lg uppercase tracking-tight text-white font-sans block">
                    {siteConfig.brandName}
                  </span>
                  <span className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-[#78C470]">
                    Artisan Garden Toolmakers • Est. 1994
                  </span>
                </div>
              </div>
              
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-6">
                Hand-forged carbon steel and sustainable hardwood garden instruments crafted for a lifetime of planting, pruning, and soil preparation.
              </p>

              {/* Trust Badge Pill */}
              <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl">
                <span className="w-2 h-2 rounded-full bg-[#78C470] animate-pulse"></span>
                <span className="text-[0.68rem] text-white/80 font-medium tracking-wide">
                  100% Satisfaction &amp; Hardness Guarantee
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links (Col 2 - 2 Cols) */}
          <div className="lg:col-span-2">
            <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-[#78C470] mb-4">
              Navigation
            </h5>
            <ul className="flex flex-col gap-2.5 text-xs text-white/80">
              <li>
                <Link href="/" className="hover:text-[#78C470] transition-colors inline-block py-0.5">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#78C470] transition-colors inline-block py-0.5">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#78C470] transition-colors inline-block py-0.5">
                  Foundry Heritage
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#78C470] transition-colors inline-block py-0.5">
                  Workshop Support
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#78C470] transition-colors inline-block py-0.5">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#78C470] transition-colors inline-block py-0.5">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Series (Col 3 - 3 Cols) */}
          <div className="lg:col-span-3">
            <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-[#78C470] mb-4">
              Featured Tools
            </h5>
            <ul className="flex flex-col gap-2.5 text-xs text-white/80">
              {products.map((p) => (
                <li key={p.id}>
                  <Link
                    href={`/product/${p.id}`}
                    className="hover:text-[#78C470] transition-colors line-clamp-1 py-0.5"
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/shop"
                  className="text-[#78C470] hover:text-white font-bold text-xs inline-flex items-center gap-1 transition-colors"
                >
                  <span>Explore Full Catalog</span>
                  <span>→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Workshop Contact & Newsletter (Col 4 - 3 Cols) */}
          <div className="lg:col-span-3">
            <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-[#78C470] mb-4">
              Workshop &amp; Guild
            </h5>
            
            <div className="flex flex-col gap-2.5 text-xs text-white/80 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-[#78C470] font-bold">☎</span>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-[#78C470] transition-colors">
                  {siteConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#78C470] font-bold">✉</span>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#78C470] transition-colors break-all">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-2 text-white/60 leading-relaxed mt-1">
                <span className="text-[#78C470] font-bold mt-0.5">⚲</span>
                <span>{siteConfig.address}</span>
              </div>
            </div>

            {/* Newsletter Sign up */}
            <div>
              <p className="text-[0.72rem] text-white/70 mb-2 font-medium">
                Subscribe for seasonal planting &amp; maintenance guides:
              </p>
              {subscribed ? (
                <div className="flex items-center gap-2 text-[#78C470] text-xs font-bold py-2 bg-white/5 rounded-xl px-3 border border-[#265C1E]">
                  <span>✓</span> Subscribed to the Guild!
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-[#78C470] transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-[#265C1E] hover:bg-[#1E4A17] text-white font-bold text-xs uppercase px-4 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap shadow-sm"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* 3. Bottom Copyright & Payment Trust Bar */}
      <div className="border-t border-white/10 bg-[#08150D]">
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-6 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-white/50">
          
          <div className="text-center md:text-left">
            &copy; {currentYear} {siteConfig.brandName}. All rights reserved. Operating under {siteConfig.corpName}.
          </div>

          {/* Secure Payment Options */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-[0.65rem] uppercase tracking-widest text-white/40 font-bold hidden sm:inline">
              Guaranteed Safe Checkout:
            </span>
            
            <div className="flex items-center gap-3">
              {/* Visa */}
              <div className="flex items-center justify-center h-7 sm:h-8" title="Visa">
                <img
                  src="/img/visa.png"
                  alt="Visa Accepted"
                  className="h-full w-auto object-contain max-h-5 sm:max-h-6"
                />
              </div>

              {/* Mastercard */}
              <div className="flex items-center justify-center h-7 sm:h-8" title="MasterCard">
                <img
                  src="/img/mastercard.png"
                  alt="Mastercard Accepted"
                  className="h-full w-auto object-contain max-h-5 sm:max-h-6"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

    </footer>
  );
}
