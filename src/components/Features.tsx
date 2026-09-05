"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Features() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#F8F6F0] text-[#18222F] border-t border-[#C87D3B]/20" id="features">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop 3x3 Grid Layout with Central "FEATURES" Title */}
        <div className="hidden lg:grid grid-cols-3 gap-6 items-stretch">
          
          {/* Row 1, Col 1: 24/7 Call Handling */}
          <div className="bg-[#FAF7F2] rounded-3xl p-7 border border-[#C87D3B]/25 shadow-sm flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:border-[#C87D3B]/50 hover:-translate-y-0.5 min-h-[140px]">
            <h3 className="text-base font-extrabold text-[#0D1B2A] tracking-tight mb-3">
              24/7 Call Handling
            </h3>
            <Link
              href="/contact"
              className="inline-block bg-[#0D1B2A] hover:bg-[#C87D3B] text-white text-xs font-bold uppercase tracking-wider px-6 py-2 rounded-xl transition-colors shadow-xs"
            >
              Message Us
            </Link>
          </div>

          {/* Row 1, Col 2: Best Pricing */}
          <div className="bg-[#FAF7F2] rounded-3xl p-7 border border-[#C87D3B]/25 shadow-sm flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:border-[#C87D3B]/50 hover:-translate-y-0.5 min-h-[140px]">
            <h3 className="text-base font-extrabold text-[#0D1B2A] tracking-tight mb-2.5">
              Best Pricing
            </h3>
            <div className="text-[#C87D3B]">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              </svg>
            </div>
          </div>

          {/* Row 1, Col 3: Customer Favorite */}
          <div className="bg-[#FAF7F2] rounded-3xl p-7 border border-[#C87D3B]/25 shadow-sm flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:border-[#C87D3B]/50 hover:-translate-y-0.5 min-h-[140px]">
            <h3 className="text-base font-extrabold text-[#0D1B2A] tracking-tight mb-2.5">
              Customer Favorite
            </h3>
            <div className="text-[#C87D3B]">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>

          {/* Row 2, Col 1: Reliable Help */}
          <div className="bg-[#FAF7F2] rounded-3xl p-7 border border-[#C87D3B]/25 shadow-sm flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:border-[#C87D3B]/50 hover:-translate-y-0.5 min-h-[140px]">
            <h3 className="text-base font-extrabold text-[#0D1B2A] tracking-tight mb-2.5">
              Reliable Help
            </h3>
            <div className="text-[#C87D3B]">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
            </div>
          </div>

          {/* Row 2, Col 2: Center Landmark "FEATURES" */}
          <div className="flex items-center justify-center text-center p-4 min-h-[140px]">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0D1B2A] tracking-widest uppercase">
              FEATURES
            </h2>
          </div>

          {/* Row 2, Col 3: 100% Money Back */}
          <div className="bg-[#FAF7F2] rounded-3xl p-7 border border-[#C87D3B]/25 shadow-sm flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:border-[#C87D3B]/50 hover:-translate-y-0.5 min-h-[140px]">
            <h3 className="text-base font-extrabold text-[#0D1B2A] tracking-tight mb-2.5">
              100% Money Back
            </h3>
            <div className="text-[#C87D3B]">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="5" width="20" height="14" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
                <circle cx="16" cy="15" r="1" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Row 3, Col 1: Effortless Returns */}
          <div className="bg-[#FAF7F2] rounded-3xl p-7 border border-[#C87D3B]/25 shadow-sm flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:border-[#C87D3B]/50 hover:-translate-y-0.5 min-h-[140px]">
            <h3 className="text-base font-extrabold text-[#0D1B2A] tracking-tight mb-2.5">
              Effortless Returns
            </h3>
            <div className="text-[#C87D3B]">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="1 4 1 10 7 10" />
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
              </svg>
            </div>
          </div>

          {/* Row 3, Col 2: Protected Transactions */}
          <div className="bg-[#FAF7F2] rounded-3xl p-7 border border-[#C87D3B]/25 shadow-sm flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:border-[#C87D3B]/50 hover:-translate-y-0.5 min-h-[140px]">
            <h3 className="text-base font-extrabold text-[#0D1B2A] tracking-tight mb-2.5">
              Protected Transactions
            </h3>
            <div className="text-[#C87D3B]">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
          </div>

          {/* Row 3, Col 3: Trusted by Thousands */}
          <div className="bg-[#FAF7F2] rounded-3xl p-7 border border-[#C87D3B]/25 shadow-sm flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg hover:border-[#C87D3B]/50 hover:-translate-y-0.5 min-h-[140px]">
            <h3 className="text-base font-extrabold text-[#0D1B2A] tracking-tight mb-2.5">
              Trusted by Thousands
            </h3>
            <div className="text-[#C87D3B]">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.6-4.6a2 2 0 0 0 0-2.8l-1.4-1.4a2 2 0 0 0-2.8 0l-.8.8" />
                <path d="m18 10 1-1a2 2 0 0 0 0-2.8l-1.4-1.4a2 2 0 0 0-2.8 0l-5.6 5.6a2 2 0 0 0 0 2.8l1.4 1.4" />
                <path d="m6 18-2-2a2 2 0 0 1 0-2.8l6.8-6.8" />
                <path d="m2 14 3-3" />
                <path d="m20 22 2-2" />
              </svg>
            </div>
          </div>

        </div>

        {/* Mobile / Tablet Responsive Layout (< lg) */}
        <div className="lg:hidden flex flex-col gap-6">
          <div className="text-center mb-2">
            <h2 className="text-3xl font-black text-[#0D1B2A] tracking-widest uppercase">
              FEATURES
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card 1 */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#C87D3B]/25 shadow-sm flex flex-col items-center justify-center text-center">
              <h3 className="text-base font-extrabold text-[#0D1B2A] tracking-tight mb-3">
                24/7 Call Handling
              </h3>
              <Link
                href="/contact"
                className="inline-block bg-[#0D1B2A] hover:bg-[#C87D3B] text-white text-xs font-bold uppercase tracking-wider px-6 py-2 rounded-xl transition-colors shadow-xs"
              >
                Message Us
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#C87D3B]/25 shadow-sm flex flex-col items-center justify-center text-center">
              <h3 className="text-base font-extrabold text-[#0D1B2A] tracking-tight mb-2.5">
                Best Pricing
              </h3>
              <div className="text-[#C87D3B]">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                </svg>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#C87D3B]/25 shadow-sm flex flex-col items-center justify-center text-center">
              <h3 className="text-base font-extrabold text-[#0D1B2A] tracking-tight mb-2.5">
                Customer Favorite
              </h3>
              <div className="text-[#C87D3B]">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#C87D3B]/25 shadow-sm flex flex-col items-center justify-center text-center">
              <h3 className="text-base font-extrabold text-[#0D1B2A] tracking-tight mb-2.5">
                Reliable Help
              </h3>
              <div className="text-[#C87D3B]">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                </svg>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#C87D3B]/25 shadow-sm flex flex-col items-center justify-center text-center">
              <h3 className="text-base font-extrabold text-[#0D1B2A] tracking-tight mb-2.5">
                100% Money Back
              </h3>
              <div className="text-[#C87D3B]">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <line x1="2" y1="10" x2="22" y2="10" />
                  <circle cx="16" cy="15" r="1" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#C87D3B]/25 shadow-sm flex flex-col items-center justify-center text-center">
              <h3 className="text-base font-extrabold text-[#0D1B2A] tracking-tight mb-2.5">
                Effortless Returns
              </h3>
              <div className="text-[#C87D3B]">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="1 4 1 10 7 10" />
                  <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                </svg>
              </div>
            </div>

            {/* Card 7 */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#C87D3B]/25 shadow-sm flex flex-col items-center justify-center text-center">
              <h3 className="text-base font-extrabold text-[#0D1B2A] tracking-tight mb-2.5">
                Protected Transactions
              </h3>
              <div className="text-[#C87D3B]">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
            </div>

            {/* Card 8 */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 border border-[#C87D3B]/25 shadow-sm flex flex-col items-center justify-center text-center">
              <h3 className="text-base font-extrabold text-[#0D1B2A] tracking-tight mb-2.5">
                Trusted by Thousands
              </h3>
              <div className="text-[#C87D3B]">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.6-4.6a2 2 0 0 0 0-2.8l-1.4-1.4a2 2 0 0 0-2.8 0l-.8.8" />
                  <path d="m18 10 1-1a2 2 0 0 0 0-2.8l-1.4-1.4a2 2 0 0 0-2.8 0l-5.6 5.6a2 2 0 0 0 0 2.8l1.4 1.4" />
                  <path d="m6 18-2-2a2 2 0 0 1 0-2.8l6.8-6.8" />
                  <path d="m2 14 3-3" />
                  <path d="m20 22 2-2" />
                </svg>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
