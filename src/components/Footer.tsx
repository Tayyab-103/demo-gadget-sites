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
    <footer className="bg-primary text-white" id="footer">
      {/* Newsletter bar */}
      <div className="border-b border-white/10">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h2 className="text-xl md:text-2xl font-bold">Stay in the loop</h2>
            <p className="text-white/50 text-sm mt-1">Travel tips, new arrivals, and offers — straight to your inbox.</p>
          </div>

          {subscribed ? (
            <div className="flex items-center gap-3 text-secondary text-sm flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="9 12 11 14 15 10"></polyline></svg>
              Thanks for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full max-w-md flex-shrink-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail Address"
                required
                className="w-full bg-white/5 border border-white/15 rounded-full px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-secondary transition-colors"
              />
              <button
                type="submit"
                className="bg-secondary text-secondary-text font-bold text-sm px-7 py-3 rounded-full hover:brightness-110 transition-all whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Link columns */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {/* Column 1: Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col">
            {siteConfig.useImageLogo && siteConfig.footerLogoImage ? (
              <div className="bg-white rounded-md px-3 py-2 w-fit mb-4">
                <img
                  src={siteConfig.footerLogoImage}
                  alt={siteConfig.brandName}
                  className="max-h-9 w-auto object-contain block"
                />
              </div>
            ) : (
              <h4 className="text-white text-lg font-black uppercase mb-4">{siteConfig.brandName}</h4>
            )}
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-56">
              Thoughtfully designed travel gear, priced for real travel budgets.
            </p>
            <div className="flex items-center gap-2.5">
              <img src="/img/visa.png" alt="Visa" className="h-6 w-auto rounded-sm" />
              <img src="/img/mastercard.png" alt="Mastercard" className="h-6 w-auto rounded-sm" />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            <h4 className="text-white/50 text-xs mb-5 font-bold uppercase tracking-widest">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="text-white text-sm hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/shop" className="text-white text-sm hover:text-secondary transition-colors">Products</Link></li>
              <li><Link href="/about" className="text-white text-sm hover:text-secondary transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-white text-sm hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            <h4 className="text-white/50 text-xs mb-5 font-bold uppercase tracking-widest">Shop</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/product/product1" className="text-white text-sm hover:text-secondary transition-colors">Expedition Spinner Luggage</Link></li>
              <li><Link href="/product/product2" className="text-white text-sm hover:text-secondary transition-colors">All-Weather Weekender Duffel</Link></li>
              <li><Link href="/product/product3" className="text-white text-sm hover:text-secondary transition-colors">Compression Packing Cubes</Link></li>
              <li><Link href="/shop" className="text-white text-sm hover:text-secondary transition-colors">All Travel Gear</Link></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col">
            <h4 className="text-white/50 text-xs mb-5 font-bold uppercase tracking-widest">Support</h4>
            <ul className="flex flex-col gap-3">
              <li><a href={`tel:${siteConfig.phone}`} className="text-white text-sm hover:text-secondary transition-colors">{siteConfig.phone}</a></li>
              <li><a href={`mailto:${siteConfig.email}`} className="text-white text-sm hover:text-secondary transition-colors break-all">{siteConfig.email}</a></li>
              <li><Link href="/privacy" className="text-white text-sm hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white text-sm hover:text-secondary transition-colors">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-white/50 text-xs text-center sm:text-left">
            &copy;{currentYear} {siteConfig.brandName}. All Rights Reserved.
          </span>
          <span className="text-white/40 text-[10px] text-center sm:text-right max-w-md">
            Product images are for illustrative purposes; actual gear may vary slightly.
          </span>
        </div>
      </div>
    </footer>
  );
}
