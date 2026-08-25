"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#E5E6EB] pt-8 sm:pt-12 pb-8 sm:pb-12 overflow-hidden" id="footer">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================
            OUTER LARGE ROUNDED WHITE CANVAS (Matching Reference Image)
            ========================================================= */}
        <div className="relative bg-white rounded-[2.5rem] sm:rounded-[3.5rem] p-5 sm:p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-black/[0.05] overflow-hidden">
          
          {/* INNER FLOATING NAVIGATION CARD */}
          <div className="relative bg-white rounded-[2rem] sm:rounded-[2.5rem] p-7 sm:p-10 lg:p-12 border border-black/[0.07] shadow-sm z-10">
            
            {/* Top Row: Brand Info + 3 Nav Link Columns */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 border-b border-black/[0.06]">
              
              {/* Left: Brand Logomark & Description */}
              <div className="lg:col-span-5 space-y-3.5">
                <Link href="/" className="inline-flex items-center gap-2 group">
                  <div className="w-7 h-7 rounded-lg bg-[#111] text-white flex items-center justify-center text-xs font-bold shadow-2xs">
                    ⚡
                  </div>
                  <span className="text-base sm:text-lg font-black text-[#111] tracking-tight">
                    Voltspire
                  </span>
                </Link>

                <p className="text-xs text-neutral-text/60 max-w-sm leading-relaxed">
                  Voltspire helps electrical teams maintain peak reliability, certified calibration, and robust power conversion — everything you need in one place.
                </p>
              </div>

            {/* Right: 2 Clean Nav Columns */}
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
                      Shop
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

              {/* Col 2: Products */}
              <div>
                <h4 className="text-xs font-bold text-[#111] uppercase tracking-wider mb-3.5">
                  Products
                </h4>
                <ul className="space-y-2.5 text-xs text-neutral-text/60 font-medium">
                  <li>
                    <Link href="/product/product1" className="hover:text-[#5B6BF0] transition-colors">
                      Digital Multimeter
                    </Link>
                  </li>
                  <li>
                    <Link href="/product/product2" className="hover:text-[#5B6BF0] transition-colors">
                      Thermal Clamp Meter
                    </Link>
                  </li>
                  <li>
                    <Link href="/product/product3" className="hover:text-[#5B6BF0] transition-colors">
                      Sine Wave Inverter
                    </Link>
                  </li>
                </ul>
              </div>

            </div>

            </div>

            {/* Bottom Row: Copyright + Legal Links */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.72rem] text-neutral-text/50 font-medium">
              <div>
                &copy; {currentYear} {siteConfig.brandName}. All rights reserved.
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
              BOTTOM FADED GRADIENT (Matching Reference Image Exactly)
              ========================================================= */}
          <div
            className="relative pt-6 sm:pt-10 overflow-hidden text-center select-none pointer-events-none -mb-4 sm:-mb-8 lg:-mb-10 w-full"
            aria-hidden="true"
          >
            <span
              className="text-[12vw] xl:text-[10.5rem] font-bold tracking-tight leading-none block uppercase max-w-full text-center"
              style={{
                background: "linear-gradient(to bottom, #D2D5E0 0%, #E2E4EE 45%, rgba(255,255,255,0) 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Voltspire
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}
