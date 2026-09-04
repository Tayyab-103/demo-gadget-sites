"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#E5E6EB] pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16 overflow-hidden" id="footer">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================
            OUTER LARGE ROUNDED WHITE CANVAS (Matching Reference Image)
            ========================================================= */}
        <div className="relative bg-white rounded-[2.5rem] sm:rounded-[3.5rem] p-5 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-black/[0.05] overflow-hidden">
          
          {/* INNER FLOATING NAVIGATION CARD */}
          <div className="relative bg-white rounded-[2rem] sm:rounded-[2.5rem] p-7 sm:p-10 lg:p-12 border border-black/[0.07] shadow-sm z-10">
            
            {/* Top Row: Brand Info + 2 Nav Link Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 border-b border-black/[0.06]">
              
              {/* Left: Brand Logomark & Description */}
              <div className="lg:col-span-5 space-y-3.5">
                <Link href="/" className="inline-flex items-center gap-2 group">
                  <div className="w-7 h-7 rounded-lg bg-[#111] text-white flex items-center justify-center text-xs font-bold shadow-2xs">
                    ⚡
                  </div>
                  <span className="text-base sm:text-lg font-black text-[#111] tracking-tight">
                    {siteConfig.brandName}
                  </span>
                </Link>

                <p className="text-xs text-neutral-text/60 max-w-sm leading-relaxed">
                  {siteConfig.brandName} supplies certified electrical testing instruments, high-carbon magnetic bits, and continuous power cabling for master electricians and commercial contractors.
                </p>
              </div>

              {/* Right: 2 Dynamic Nav Columns */}
              <div className="lg:col-span-7 grid grid-cols-2 gap-8 sm:gap-12 lg:justify-end">
                
                {/* Col 1: Pages */}
                <div>
                  <h4 className="text-xs font-bold text-[#111] uppercase tracking-wider mb-3.5">
                    Pages
                  </h4>
                  <ul className="space-y-2.5 text-xs text-neutral-text/60 font-medium">
                    <li>
                      <Link href="/" className="hover:text-[#5B6BF0] transition-colors">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop" className="hover:text-[#5B6BF0] transition-colors">
                        Shop Catalog
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="hover:text-[#5B6BF0] transition-colors">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="hover:text-[#5B6BF0] transition-colors">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Col 2: Dynamic Products List */}
                <div>
                  <h4 className="text-xs font-bold text-[#111] uppercase tracking-wider mb-3.5">
                    Products
                  </h4>
                  <ul className="space-y-2.5 text-xs text-neutral-text/60 font-medium">
                    {products.map((product) => (
                      <li key={product.id}>
                        <Link
                          href={`/product/${product.id}`}
                          className="hover:text-[#5B6BF0] transition-colors line-clamp-1"
                        >
                          {product.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>

            {/* Bottom Row: Copyright + Payment Cards + Legal Links */}
            <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[0.72rem] text-neutral-text/50 font-medium">
              <div>
                &copy; {currentYear} {siteConfig.brandName}. All rights reserved.
              </div>

              {/* Payment Badges (MasterCard & VISA) */}
              <div className="flex items-center gap-2.5 my-1 sm:my-0">
                {/* MasterCard Card */}
                <div className="h-7 w-11 rounded-md bg-[#0A1E3F] flex items-center justify-center p-0.5 shadow-xs border border-black/5" title="MasterCard">
                  <svg viewBox="0 0 36 24" className="w-full h-full">
                    <circle cx="14" cy="9.5" r="5.5" fill="#EB001B" />
                    <circle cx="22" cy="9.5" r="5.5" fill="#F79E1B" fillOpacity="0.95" />
                    <path d="M18 5.7a5.5 5.5 0 0 1 1.6 3.8c0 1.5-.6 2.9-1.6 3.8a5.5 5.5 0 0 1-1.6-3.8c0-1.5.6-2.9 1.6-3.8z" fill="#FF5F00" />
                    <text x="18" y="19.5" fontSize="3.3" fill="#FFFFFF" textAnchor="middle" fontFamily="sans-serif" fontWeight="700">mastercard</text>
                  </svg>
                </div>

                {/* VISA Card */}
                <div className="h-7 w-11 rounded-md bg-[#2557A7] flex items-center justify-center p-1 shadow-xs border border-black/5" title="Visa">
                  <svg viewBox="0 0 36 24" className="w-full h-full">
                    <text x="18" y="16.5" fontSize="10" fill="#FFFFFF" textAnchor="middle" fontFamily="sans-serif" fontStyle="italic" fontWeight="900" letterSpacing="0.5">VISA</text>
                  </svg>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <Link href="/terms" className="hover:text-[#111] transition-colors underline underline-offset-4 decoration-black/10">
                  Terms of Service
                </Link>
                <Link href="/privacy" className="hover:text-[#111] transition-colors underline underline-offset-4 decoration-black/10">
                  Privacy Policy
                </Link>
              </div>
            </div>

          </div>

          {/* =========================================================
              GIANT BRAND WATERMARK SITTING BENEATH THE CARD WITH
              BOTTOM FADED GRADIENT
              ========================================================= */}
          <div
            className="relative pt-6 sm:pt-10 overflow-hidden text-center select-none pointer-events-none -mb-4 sm:-mb-8 lg:-mb-10 w-full"
            aria-hidden="true"
          >
            <span
              className="text-[12vw] xl:text-[10.5rem] font-bold tracking-tight leading-none block uppercase max-w-full text-center truncate"
              style={{
                background: "linear-gradient(to bottom, #D2D5E0 0%, #E2E4EE 45%, rgba(255,255,255,0) 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {siteConfig.brandName.split(" ")[0]}
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}
