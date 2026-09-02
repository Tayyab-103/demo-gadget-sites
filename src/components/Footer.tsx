"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#FF94A8] text-white pt-8 pb-8 overflow-hidden" id="footer">
      
      {/* Cloud-Shaped Scalloped Top Border */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none -translate-y-[98%] pointer-events-none">
        <svg
          viewBox="0 0 1440 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-8 sm:h-12 md:h-16 text-[#FF94A8] fill-current"
        >
          <path d="M0,35 C120,70 180,0 300,35 C420,70 480,0 600,35 C720,70 780,0 900,35 C1020,70 1080,0 1200,35 C1320,70 1380,0 1440,35 L1440,70 L0,70 Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simplified Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-white/20">
          
          {/* Brand Column (6 Cols) */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-9 h-9 rounded-full bg-white text-[#FF6B8B] p-1 flex items-center justify-center shadow-xs">
                <span className="text-lg">👶</span>
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight leading-none block">
                  {siteConfig.brandName}
                </span>
                <span className="text-[0.6rem] text-white/80 font-bold tracking-wider">
                  for your little one
                </span>
              </div>
            </div>

            <p className="text-xs text-white/90 leading-relaxed max-w-sm font-medium">
              Organic bibs, natural beechwood teethers &amp; heirloom knitwear crafted for tender baby comfort.
            </p>
          </div>

          {/* Essential Quick Links (3 Cols) */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white mb-2.5">Explore</h4>
            <ul className="flex flex-col gap-1.5 text-xs text-white/90 font-medium">
              <li><Link href="/shop" className="hover:underline">Shop Collection</Link></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact Nursery Support</Link></li>
            </ul>
          </div>

          {/* Payment & Trust Badges (3 Cols) */}
          <div className="md:col-span-3 flex flex-col md:items-end">
            <span className="text-[0.65rem] font-bold uppercase tracking-wider text-white/90 mb-1.5">
              Accepted Cards
            </span>
            <div className="flex items-center gap-3 mb-2.5">
              <img src="/img/visa.png" alt="Visa" className="h-6 w-auto object-contain" />
              <img src="/img/mastercard.png" alt="Mastercard" className="h-6 w-auto object-contain" />
            </div>

            <div className="text-[0.65rem] font-bold text-white/90 flex items-center gap-1.5">
              <span>🔒 256-Bit SSL Encrypted</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.7rem] text-white/80 font-medium">
          <div>
            &copy; {currentYear} {siteConfig.brandName}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <span>&middot;</span>
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
