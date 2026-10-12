"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";
import { BoltIcon, CheckIcon, LockIcon } from "@/components/Icons";

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
    <footer className="bg-[#0F172A] text-white pt-16 pb-12 md:pt-20 border-t border-gray-800" id="footer">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter & Story Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-14 border-b border-gray-800">
          
          {/* Left Column: Brand & VIP Hardware Club (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-2xl font-black tracking-tight text-white uppercase">
                  {siteConfig.brandName}
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-8 font-normal">
                Next-generation electronics and smart cyber accessories. Engineered with Gallium Nitride semiconductors, transparent microcircuits, and rigorous quality control standards.
              </p>
            </div>

            {/* Newsletter */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-sm font-black text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                <BoltIcon className="w-4 h-4 fill-secondary text-secondary shrink-0" />
                <span>Join the Hardware Insider — Save 15%</span>
              </h4>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                Subscribe for hardware firmware releases, early tech product drops, and an instant 15% discount on your first order.
              </p>
              
              {subscribed ? (
                <div className="flex items-center gap-2 text-secondary text-xs font-bold bg-secondary/10 p-3 rounded-xl border border-secondary/30">
                  <CheckIcon className="w-4 h-4 text-secondary shrink-0" />
                  <span>Thank you! Check your inbox for your 15% voucher code.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-xs text-white placeholder:text-gray-400 focus:outline-none focus:border-secondary transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-secondary text-secondary-text font-black text-xs uppercase tracking-wider px-6 py-3 rounded-xl hover:brightness-110 transition-all cursor-pointer whitespace-nowrap shadow-md"
                  >
                    Get 15% Off
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Columns: Quick Navigation Grid (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Column 1: Electronics Hardware */}
            <div>
              <h4 className="text-secondary text-xs font-black uppercase tracking-widest mb-4">
                Hardware
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-400">
                <li>
                  <Link href="/product/product1" className="hover:text-white transition-colors">
                    Watch 42mm Smartwatch
                  </Link>
                </li>
                <li>
                  <Link href="/product/product2" className="hover:text-white transition-colors">
                    AeroFit Pro Hi-Fi Headphones
                  </Link>
                </li>
                <li>
                  <Link href="/product/product3" className="hover:text-white transition-colors">
                    Ninja Gaming Console
                  </Link>
                </li>
                <li>
                  <Link href="/#shop" className="hover:text-secondary transition-colors font-bold text-secondary">
                    All Electronics →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-secondary text-xs font-black uppercase tracking-widest mb-4">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-400">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/shop" className="hover:text-white transition-colors">Hardware Catalog</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Engineering</Link></li>
                <li><Link href="/#testimonials" className="hover:text-white transition-colors">Tech Reviews</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Support Desk</Link></li>
              </ul>
            </div>

            {/* Column 3: Corporate & Support */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-secondary text-xs font-black uppercase tracking-widest mb-4">
                Company
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-400">
                <li className="text-white font-bold">{siteConfig.phone}</li>
                <li className="break-all">{siteConfig.email}</li>
                <li className="text-gray-400 text-[0.7rem] leading-relaxed pt-1">
                  {siteConfig.address}
                </li>
                <li className="pt-2">
                  <span className="inline-block bg-white/10 text-white text-[0.62rem] font-bold px-2 py-1 rounded">
                    {siteConfig.shippingCarrier} Tracked Dispatch
                  </span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Payment Methods & Security Trust Row */}
        <div className="py-6 border-b border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[0.72rem] uppercase font-bold tracking-wider text-gray-400">
              Accepted Payment Gateways:
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

          <div className="flex items-center gap-2 text-[0.72rem] text-gray-400 font-medium">
            <LockIcon className="w-3.5 h-3.5 text-[#B8CD06] shrink-0" />
            <span>256-Bit SSL Encrypted &amp; PCI-DSS Level 1 Compliant</span>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
            <span>&copy; {currentYear} {siteConfig.brandName}. All rights reserved. Operated by {siteConfig.corpName}.</span>
            <span>•</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>

          <div className="text-[0.68rem] text-center md:text-right text-gray-400 max-w-md">
            Statement descriptor: <strong className="text-white">{siteConfig.descriptor}</strong>.
          </div>
        </div>

      </div>
    </footer>
  );
}
