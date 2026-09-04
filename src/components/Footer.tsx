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
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-primary text-white py-12 sm:py-16 md:py-20 border-t border-white/10" id="footer">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 mb-14 sm:mb-16 md:mb-20">
          
          {/* Left Column: CTA & Subscribe */}
          <div className="w-full lg:w-[42%] flex flex-col">
            <div className="inline-flex items-center gap-2 mb-3 text-secondary text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              Foundry Direct
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-3 tracking-tight">
              Stay Connected with {siteConfig.brandName}
            </h2>
            <p className="text-white/70 text-xs sm:text-sm mb-6 max-w-md leading-relaxed">
              Subscribe for new product releases, contractor discounts, and inventory updates.
            </p>
            
            {subscribed ? (
              <div className="flex items-center gap-3 text-secondary text-xs sm:text-sm font-semibold bg-secondary/15 p-4 rounded-xl border border-secondary/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="9 12 11 14 15 10"></polyline></svg>
                Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 w-full max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Contractor / Business Email"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-full px-4 py-3 text-xs sm:text-sm text-white placeholder:text-white/45 focus:outline-none focus:border-secondary transition-colors"
                />
                <button
                  type="submit"
                  className="bg-secondary text-secondary-text font-bold text-xs sm:text-sm px-6 py-3 rounded-full hover:brightness-110 transition-all whitespace-nowrap shadow-sm"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Links Grid */}
          <div className="w-full lg:w-[58%] grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">
            
            {/* Column 1 */}
            <div className="flex flex-col">
              <h4 className="text-secondary text-xs mb-4 font-bold uppercase tracking-wider">Foundry</h4>
              <ul className="flex flex-col gap-2.5">
                <li><Link href="/" className="text-white/80 text-xs sm:text-sm hover:text-secondary transition-colors">Home</Link></li>
                <li><Link href="/shop" className="text-white/80 text-xs sm:text-sm hover:text-secondary transition-colors">All Supplies</Link></li>
                <li><Link href="/about" className="text-white/80 text-xs sm:text-sm hover:text-secondary transition-colors">Foundry Specs</Link></li>
                <li><Link href="/contact" className="text-white/80 text-xs sm:text-sm hover:text-secondary transition-colors">Contractor Support</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col">
              <h4 className="text-secondary text-xs mb-4 font-bold uppercase tracking-wider">Supplies</h4>
              <ul className="flex flex-col gap-2.5">
                {products.map((p) => (
                  <li key={p.id}>
                    <Link href={`/product/${p.id}`} className="text-white/80 text-xs sm:text-sm hover:text-secondary transition-colors line-clamp-1">
                      {p.name}
                    </Link>
                  </li>
                ))}
                <li><Link href="/shop" className="text-secondary text-xs sm:text-sm font-semibold hover:underline">View All &rarr;</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col col-span-2 sm:col-span-1">
              <h4 className="text-secondary text-xs mb-4 font-bold uppercase tracking-wider">Support</h4>
              <ul className="flex flex-col gap-2.5">
                <li className="text-white/80 text-xs sm:text-sm break-all">{siteConfig.email}</li>
                <li className="text-white/80 text-xs sm:text-sm font-semibold">{siteConfig.phone}</li>
                <li className="text-white/60 text-xs leading-relaxed max-w-[170px]">{siteConfig.address}</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-white/10 text-xs text-white/50">
          <div>
            &copy;{currentYear} {siteConfig.brandName}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-white/60 hover:text-secondary transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="text-white/60 hover:text-secondary transition-colors">Terms &amp; Conditions</Link>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-white/50 text-[0.7rem] uppercase tracking-wider">Accepted:</span>
            <img src="/img/visa.png" alt="Visa" className="h-5 w-auto rounded-xs bg-white p-0.5" />
            <img src="/img/mastercard.png" alt="Mastercard" className="h-5 w-auto rounded-xs bg-white p-0.5" />
          </div>
        </div>

      </div>
    </footer>
  );
}
