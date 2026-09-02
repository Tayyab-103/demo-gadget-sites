"use client";

import React from "react";
import Link from "next/link";

export default function Features() {
  return (
    <section className="py-14 sm:py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
          
          {/* 1. Top-Left: 24/7 Call Handling */}
          <div className="bg-[#F5F6F8] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px] transition-all duration-300 hover:shadow-md hover:bg-[#EEF0F4]">
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-3 tracking-tight">
              24/7 Call Handling
            </h3>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#D92525] hover:bg-[#B91C1C] text-white text-xs sm:text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-200 shadow-xs hover:shadow-sm"
            >
              Send Request
            </Link>
          </div>

          {/* 2. Top-Center: Best Pricing */}
          <div className="bg-[#F5F6F8] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px] transition-all duration-300 hover:shadow-md hover:bg-[#EEF0F4]">
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-3 tracking-tight">
              Best Pricing
            </h3>
            <div className="text-gray-900 flex items-center justify-center">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <ellipse cx="12" cy="7" rx="7" ry="2.5" />
                <path d="M5 8.5v3c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5v-3c-1.35 1-3.95 1.5-7 1.5s-5.65-.5-7-1.5z" />
                <path d="M5 13.5v3c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5v-3c-1.35 1-3.95 1.5-7 1.5s-5.65-.5-7-1.5z" />
              </svg>
            </div>
          </div>

          {/* 3. Top-Right: Customer Favorite */}
          <div className="bg-[#F5F6F8] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px] transition-all duration-300 hover:shadow-md hover:bg-[#EEF0F4]">
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-3 tracking-tight">
              Customer Favorite
            </h3>
            <div className="text-gray-900 flex items-center justify-center">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
          </div>

          {/* 4. Middle-Left: Reliable Help */}
          <div className="bg-[#F5F6F8] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px] transition-all duration-300 hover:shadow-md hover:bg-[#EEF0F4]">
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-3 tracking-tight">
              Reliable Help
            </h3>
            <div className="text-gray-900 flex items-center justify-center">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3a8 8 0 0 0-8 8v3a3 3 0 0 0 3 3h1v-7H6v-1a6 6 0 0 1 12 0v1h-2v7h1a3 3 0 0 0 3-3v-3a8 8 0 0 0-8-8z"/>
                <circle cx="12" cy="19" r="1.5" />
              </svg>
            </div>
          </div>

          {/* 5. Center: FEATURES Display Header */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 flex flex-col items-center justify-center p-6 text-center min-h-[120px] sm:min-h-[160px]">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-wider text-gray-900">
              FEATURES
            </h2>
          </div>

          {/* 6. Middle-Right: 100% Money Back */}
          <div className="bg-[#F5F6F8] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px] transition-all duration-300 hover:shadow-md hover:bg-[#EEF0F4]">
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-3 tracking-tight">
              100% Money Back
            </h3>
            <div className="text-gray-900 flex items-center justify-center">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
              </svg>
            </div>
          </div>

          {/* 7. Bottom-Left: Effortless Returns */}
          <div className="bg-[#F5F6F8] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px] transition-all duration-300 hover:shadow-md hover:bg-[#EEF0F4]">
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-3 tracking-tight">
              Effortless Returns
            </h3>
            <div className="text-gray-900 flex items-center justify-center">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="1 4 1 10 7 10" />
                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
              </svg>
            </div>
          </div>

          {/* 8. Bottom-Center: Protected Transactions */}
          <div className="bg-[#F5F6F8] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px] transition-all duration-300 hover:shadow-md hover:bg-[#EEF0F4]">
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-3 tracking-tight">
              Protected Transactions
            </h3>
            <div className="text-gray-900 flex items-center justify-center">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z"/>
              </svg>
            </div>
          </div>

          {/* 9. Bottom-Right: Trusted by Thousands */}
          <div className="bg-[#F5F6F8] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center min-h-[140px] sm:min-h-[160px] transition-all duration-300 hover:shadow-md hover:bg-[#EEF0F4]">
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-3 tracking-tight">
              Trusted by Thousands
            </h3>
            <div className="text-gray-900 flex items-center justify-center">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.9 12.66l-2.61-2.61a2.12 2.12 0 0 0-3 0l-.8.8-1.5-1.5a2.12 2.12 0 0 0-3 0L6.41 12a2.12 2.12 0 0 0 0 3l5.59 5.59a2.12 2.12 0 0 0 3 0l4.9-4.93a2.12 2.12 0 0 0 0-3zM10.5 13.5l1.41-1.41 2.12 2.12-1.41 1.41-2.12-2.12zm5.66 4.24l-4.24-4.24 1.41-1.41 4.24 4.24-1.41 1.41z"/>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

