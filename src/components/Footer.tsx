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
    <footer className="bg-primary text-white py-16 md:py-24" id="footer">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 mb-20 md:mb-28">
          
          {/* Left Column: CTA & Subscribe */}
          <div className="w-full lg:w-[42%] flex flex-col">
            <span className="text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Join Our Family Circle
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 text-white">
              Stay in touch with <br />
              {siteConfig.brandName}
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-8 max-w-md">
              Subscribe to receive private seasonal collection releases, family bundle discounts, and fabric care tips.
            </p>
            
            {subscribed ? (
              <div className="flex items-center gap-3 text-secondary text-sm font-semibold bg-secondary/10 p-4 rounded-xl border border-secondary/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="9 12 11 14 15 10"></polyline></svg>
                Thank you for subscribing to our family newsletter!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-full px-5 py-3.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-secondary transition-colors"
                />
                <button
                  type="submit"
                  className="bg-secondary text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full hover:bg-white hover:text-primary transition-all whitespace-nowrap shadow-md cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Links Grid */}
          <div className="w-full lg:w-[58%] grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-10">
            {/* Column 1 */}
            <div className="flex flex-col">
              <h4 className="text-white/50 text-xs mb-5 font-bold uppercase tracking-wider">Navigation</h4>
              <ul className="flex flex-col gap-3">
                <li><Link href="/" className="text-white/90 text-sm hover:text-secondary transition-colors">Home</Link></li>
                <li><Link href="/shop" className="text-white/90 text-sm hover:text-secondary transition-colors">Collection</Link></li>
                <li><Link href="/about" className="text-white/90 text-sm hover:text-secondary transition-colors">Our Story</Link></li>
                <li><Link href="/contact" className="text-white/90 text-sm hover:text-secondary transition-colors">Concierge</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col">
              <h4 className="text-white/50 text-xs mb-5 font-bold uppercase tracking-wider">Wardrobe</h4>
              <ul className="flex flex-col gap-3">
                <li><Link href="/product/product1" className="text-white/90 text-sm hover:text-secondary transition-colors">Organic Crew Tee</Link></li>
                <li><Link href="/product/product2" className="text-white/90 text-sm hover:text-secondary transition-colors">Fleece Pullover</Link></li>
                <li><Link href="/product/product3" className="text-white/90 text-sm hover:text-secondary transition-colors">Comfort Overcoat</Link></li>
                <li><Link href="/shop" className="text-white/90 text-sm hover:text-secondary transition-colors">All Essentials</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col">
              <h4 className="text-white/50 text-xs mb-5 font-bold uppercase tracking-wider">Assistance</h4>
              <ul className="flex flex-col gap-3">
                <li className="text-white/90 text-sm break-all">{siteConfig.email}</li>
                <li className="text-white/90 text-sm">{siteConfig.phone}</li>
                <li className="text-white/70 text-xs leading-relaxed max-w-[170px]">{siteConfig.address}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pt-10 border-t border-white/10">
          {/* Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-12">
            <h4 className="text-white text-xl font-black uppercase tracking-tight">{siteConfig.brandName}</h4>
            <span className="text-white/50 text-xs">
              &copy; {currentYear} {siteConfig.corpName || siteConfig.brandName}. All Rights Reserved.
            </span>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy" className="text-white/60 text-xs hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/60 text-xs hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <span className="text-white/40 text-[11px]">
              Descriptor: <strong className="text-white/70">{siteConfig.descriptor}</strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
