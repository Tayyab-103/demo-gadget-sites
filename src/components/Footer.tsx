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
    <footer className="bg-[#182825] text-white pt-16 pb-12 md:pt-24 border-t border-white/10" id="footer">
      <div className="w-full max-w-7xl mx-auto px-6">
        
        {/* Top Newsletter & Story Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Left Column: Brand & 15% VIP Pet Club (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-secondary text-white flex items-center justify-center text-lg">
                  🐾
                </div>
                <h3 className="text-2xl font-black tracking-tight text-white">
                  {siteConfig.brandName}
                </h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed max-w-md mb-8">
                Thoughtfully engineered essentials for cats and dogs. Crafted from non-toxic materials with veterinarian guidance to keep tails wagging and purrs thriving.
              </p>
            </div>

            {/* Newsletter */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-sm font-black text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <span>🎁 Join the VIP Pet Club — Save 15%</span>
              </h4>
              <p className="text-xs text-white/60 mb-4 leading-relaxed">
                Subscribe to get pet wellness tips, early access to new releases, and an instant 15% discount code for your first order.
              </p>
              
              {subscribed ? (
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold bg-emerald-950/40 p-3 rounded-xl border border-emerald-500/30">
                  <span>✓</span>
                  <span>Welcome to the pack! Check your inbox for your 15% voucher code.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 bg-white/10 border border-white/15 rounded-full px-4 py-3 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-secondary transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-secondary text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full hover:brightness-110 transition-all cursor-pointer whitespace-nowrap shadow-md"
                  >
                    Get 15% Off
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Columns: Quick Navigation Grid (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Column 1: Pet Essentials */}
            <div>
              <h4 className="text-secondary text-xs font-black uppercase tracking-widest mb-4">
                Pet Catalog
              </h4>
              <ul className="space-y-2.5 text-xs text-white/70">
                <li>
                  <Link href="/product/product1" className="hover:text-secondary transition-colors">
                    WhiskerCare™ Grooming Brush
                  </Link>
                </li>
                <li>
                  <Link href="/product/product2" className="hover:text-secondary transition-colors">
                    PawPulse™ Smart Toy Ball
                  </Link>
                </li>
                <li>
                  <Link href="/product/product3" className="hover:text-secondary transition-colors">
                    CloudRest™ Calming Pet Bed
                  </Link>
                </li>
                <li>
                  <Link href="/#shop" className="hover:text-secondary transition-colors font-bold text-secondary">
                    All Pet Bundles →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: The Mercantile */}
            <div>
              <h4 className="text-secondary text-xs font-black uppercase tracking-widest mb-4">
                Mercantile
              </h4>
              <ul className="space-y-2.5 text-xs text-white/70">
                <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
                <li><Link href="/#shop" className="hover:text-secondary transition-colors">Pet Catalog</Link></li>
                <li><Link href="/#testimonials" className="hover:text-secondary transition-colors">Pet Parent Reviews</Link></li>
                <li><Link href="/#how-it-works" className="hover:text-secondary transition-colors">How It Works</Link></li>
                <li><Link href="/#contact" className="hover:text-secondary transition-colors">Pet Concierge</Link></li>
              </ul>
            </div>

            {/* Column 3: Care Concierge */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-secondary text-xs font-black uppercase tracking-widest mb-4">
                Pet Support
              </h4>
              <ul className="space-y-2.5 text-xs text-white/70">
                <li className="text-white font-bold">{siteConfig.phone}</li>
                <li className="break-all">{siteConfig.email}</li>
                <li className="text-white/50 text-[0.7rem] leading-relaxed pt-1">
                  Austin, TX 78701
                </li>
                <li className="pt-2">
                  <span className="inline-block bg-white/10 text-white/80 text-[0.62rem] font-bold px-2 py-1 rounded">
                    UPS Fast Tracked
                  </span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Payment Methods & Security Trust Row */}
        <div className="py-6 border-b border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[0.72rem] uppercase font-bold tracking-wider text-white/60">
              Accepted Payment Methods:
            </span>
            <div className="flex items-center gap-2.5">
              <img
                src="/img/mastercard.svg"
                alt="MasterCard"
                className="h-7 w-auto object-contain rounded shadow-xs"
              />
              <img
                src="/img/visa.svg"
                alt="VISA"
                className="h-7 w-auto object-contain rounded shadow-xs"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 text-[0.72rem] text-white/60 font-medium">
            <span className="text-emerald-400">🔒</span>
            <span>256-Bit SSL Encrypted &amp; PCI-DSS Compliant</span>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/50">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
            <span>&copy; {currentYear} {siteConfig.brandName}. All rights reserved.</span>
            <span>•</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>

          <div className="text-[0.68rem] text-center md:text-right text-white/40 max-w-md">
            Statement descriptor: <strong className="text-white/70">{siteConfig.descriptor}</strong>. All pet products backed by our 14-day Happy Tail guarantee.
          </div>
        </div>

      </div>
    </footer>
  );
}
