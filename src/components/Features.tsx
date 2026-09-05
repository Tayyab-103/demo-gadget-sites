"use client";

import React from "react";
import Link from "next/link";

export default function Features() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#FAF8F5] text-[#121820] border-t border-[#C5A059]/20" id="features">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3x3 Grid Layout matching the reference design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 items-stretch">
          
          {/* Card 1: 24/7 Call Handling */}
          <div className="group flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-3xl bg-white border border-[#C5A059]/25 shadow-xs hover:shadow-xl hover:border-[#C5A059] hover:-translate-y-1 transition-all duration-300 min-h-[140px] sm:min-h-[160px]">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#121820] mb-3 tracking-tight">
              24/7 Call Handling
            </h3>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-2 rounded-xl bg-[#121820] hover:bg-[#C5A059] text-[#FAF8F5] hover:text-[#121820] text-xs font-bold font-serif uppercase tracking-wider transition-all duration-200 shadow-sm hover:scale-105"
            >
              Message Us
            </Link>
          </div>

          {/* Card 2: Best Pricing */}
          <div className="group flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-3xl bg-white border border-[#C5A059]/25 shadow-xs hover:shadow-xl hover:border-[#C5A059] hover:-translate-y-1 transition-all duration-300 min-h-[140px] sm:min-h-[160px]">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#121820] mb-2 tracking-tight">
              Best Pricing
            </h3>
            <div className="text-[#121820] group-hover:text-[#C5A059] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M3 5v14a9 3 0 0 0 18 0V5" />
                <path d="M3 12a9 3 0 0 0 18 0" />
              </svg>
            </div>
          </div>

          {/* Card 3: Customer Favorite */}
          <div className="group flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-3xl bg-white border border-[#C5A059]/25 shadow-xs hover:shadow-xl hover:border-[#C5A059] hover:-translate-y-1 transition-all duration-300 min-h-[140px] sm:min-h-[160px]">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#121820] mb-2 tracking-tight">
              Customer Favorite
            </h3>
            <div className="text-[#121820] group-hover:text-[#C5A059] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>

          {/* Card 4: Reliable Help */}
          <div className="group flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-3xl bg-white border border-[#C5A059]/25 shadow-xs hover:shadow-xl hover:border-[#C5A059] hover:-translate-y-1 transition-all duration-300 min-h-[140px] sm:min-h-[160px]">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#121820] mb-2 tracking-tight">
              Reliable Help
            </h3>
            <div className="text-[#121820] group-hover:text-[#C5A059] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
              </svg>
            </div>
          </div>

          {/* Card 5: CENTERPIECE (FEATURES) */}
          <div className="flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-3xl bg-white border-2 border-[#C5A059] shadow-md min-h-[140px] sm:min-h-[160px] relative overflow-hidden">
            <div className="absolute inset-0 bg-[#C5A059]/5 pointer-events-none" />
            <span className="text-[0.68rem] font-serif uppercase tracking-[0.26em] text-[#C5A059] font-bold mb-1">
              ✦ Atelier Standard ✦
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black tracking-wider text-[#121820] uppercase">
              FEATURES
            </h2>
          </div>

          {/* Card 6: 100% Money Back */}
          <div className="group flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-3xl bg-white border border-[#C5A059]/25 shadow-xs hover:shadow-xl hover:border-[#C5A059] hover:-translate-y-1 transition-all duration-300 min-h-[140px] sm:min-h-[160px]">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#121820] mb-2 tracking-tight">
              100% Money Back
            </h3>
            <div className="text-[#121820] group-hover:text-[#C5A059] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <line x1="2" x2="22" y1="10" y2="10" />
              </svg>
            </div>
          </div>

          {/* Card 7: Effortless Returns */}
          <div className="group flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-3xl bg-white border border-[#C5A059]/25 shadow-xs hover:shadow-xl hover:border-[#C5A059] hover:-translate-y-1 transition-all duration-300 min-h-[140px] sm:min-h-[160px]">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#121820] mb-2 tracking-tight">
              Effortless Returns
            </h3>
            <div className="text-[#121820] group-hover:text-[#C5A059] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
              </svg>
            </div>
          </div>

          {/* Card 8: Protected Transactions */}
          <div className="group flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-3xl bg-white border border-[#C5A059]/25 shadow-xs hover:shadow-xl hover:border-[#C5A059] hover:-translate-y-1 transition-all duration-300 min-h-[140px] sm:min-h-[160px]">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#121820] mb-2 tracking-tight">
              Protected Transactions
            </h3>
            <div className="text-[#121820] group-hover:text-[#C5A059] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
          </div>

          {/* Card 9: Trusted by Thousands */}
          <div className="group flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-3xl bg-white border border-[#C5A059]/25 shadow-xs hover:shadow-xl hover:border-[#C5A059] hover:-translate-y-1 transition-all duration-300 min-h-[140px] sm:min-h-[160px]">
            <h3 className="text-base sm:text-lg font-serif font-bold text-[#121820] mb-2 tracking-tight">
              Trusted by Thousands
            </h3>
            <div className="text-[#121820] group-hover:text-[#C5A059] transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m11 17 2 2a1 1 0 0 0 1.42 0l4.58-4.59a1 1 0 0 0 0-1.41l-2.83-2.83a1 1 0 0 0-1.42 0L13 12" />
                <path d="m18 11 3.29-3.29a1 1 0 0 0 0-1.42l-2.58-2.58a1 1 0 0 0-1.42 0L14 7" />
                <path d="m2 11 3.29-3.29a1 1 0 0 1 1.42 0l2.58 2.58a1 1 0 0 1 0 1.42L6 15" />
                <path d="m6 15 2 2a1 1 0 0 0 1.42 0l4.58-4.59a1 1 0 0 0 0-1.41l-2.83-2.83a1 1 0 0 0-1.42 0L8 10" />
              </svg>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
