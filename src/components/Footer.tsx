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
    <footer className="bg-primary text-white py-14 md:py-20 border-t border-white/10" id="footer">
      <div className="w-full max-w-7xl mx-auto px-6">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16 mb-16 md:mb-20">
          
          {/* Left Column: CTA & Subscribe */}
          <div className="w-full lg:w-[42%] flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-secondary text-primary font-black shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
              </div>
              <span className="text-xl font-black uppercase tracking-tight text-white">
                {siteConfig.brandName}
              </span>
            </div>

            <h2 className="text-xl md:text-2xl font-normal leading-snug mb-6 text-white/90">
              Join our sound circle for acoustic maintenance guides &amp; studio hardware updates.
            </h2>
            
            {subscribed ? (
              <div className="flex items-center gap-3 text-secondary text-sm font-bold bg-secondary/10 px-5 py-3.5 rounded-xl border border-secondary/20 w-fit">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="9 12 11 14 15 10"></polyline></svg>
                Welcome to the Velvet Echo community!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter musician email..."
                  required
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-secondary transition-colors"
                />
                <button
                  type="submit"
                  className="bg-secondary text-primary font-black text-xs uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-white transition-all whitespace-nowrap shadow-md"
                >
                  Join Circle
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Links Grid (3 balanced columns) */}
          <div className="w-full lg:w-[54%] grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Column 1: Navigation */}
            <div className="flex flex-col">
              <h4 className="text-secondary text-xs mb-4 font-black uppercase tracking-widest">Navigation</h4>
              <ul className="flex flex-col gap-2.5">
                <li><Link href="/" className="text-white/70 text-sm hover:text-secondary transition-colors">Home</Link></li>
                <li><Link href="/products" className="text-white/70 text-sm hover:text-secondary transition-colors">Products</Link></li>
                <li><Link href="/about" className="text-white/70 text-sm hover:text-secondary transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-white/70 text-sm hover:text-secondary transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 2: Collection */}
            <div className="flex flex-col">
              <h4 className="text-secondary text-xs mb-4 font-black uppercase tracking-widest">Collection</h4>
              <ul className="flex flex-col gap-2.5">
                <li><Link href="/product/product1" className="text-white/70 text-sm hover:text-secondary transition-colors">Master Capo Kit</Link></li>
                <li><Link href="/product/product2" className="text-white/70 text-sm hover:text-secondary transition-colors">EchoWave Tuner</Link></li>
                <li><Link href="/product/product3" className="text-white/70 text-sm hover:text-secondary transition-colors">Studio Audio Cable</Link></li>
                <li><Link href="/products" className="text-white/70 text-sm hover:text-secondary transition-colors">All Hardware</Link></li>
              </ul>
            </div>

            {/* Column 3: Workshop Contact */}
            <div className="flex flex-col">
              <h4 className="text-secondary text-xs mb-4 font-black uppercase tracking-widest">Workshop</h4>
              <ul className="flex flex-col gap-2.5 text-xs text-white/70">
                <li className="break-all">{siteConfig.email}</li>
                <li>{siteConfig.phone}</li>
                <li className="leading-relaxed">{siteConfig.address}</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10 text-xs text-white/50">
          <div>
            &copy; {currentYear} {siteConfig.brandName}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="text-[11px] text-white/40">Austin, Texas</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
