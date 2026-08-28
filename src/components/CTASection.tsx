"use client";

import React from "react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-[#FAF8F5]" id="cta">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#182825] rounded-[2.5rem] p-8 sm:p-12 md:p-14 text-white relative overflow-hidden border border-white/10 shadow-xl">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-wider mb-4">
                <span>🐾</span>
                <span>Special Pet Parent Offer</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
                Give Your Pet the Comfort <br />
                <span className="text-secondary italic font-serif">&amp; Play They Deserve</span>
              </h2>

              <p className="text-white/75 text-xs sm:text-sm md:text-base max-w-xl leading-relaxed mb-6">
                Join over 10,000 happy pet households nationwide. Bundle grooming, play, and orthopedic rest essentials today for up to 45% volume savings plus fast UPS express delivery.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 items-stretch sm:items-center">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center gap-2.5 bg-secondary text-white hover:brightness-110 transition-all duration-300 py-3.5 px-8 rounded-full text-xs font-bold uppercase tracking-widest shadow-md hover:shadow-lg text-center"
                >
                  <span>Shop Pet Bundles &amp; Save</span>
                  <span className="text-sm">🐾</span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center font-bold text-center bg-transparent border border-white/30 text-white hover:border-white hover:bg-white/10 transition-all duration-300 py-3.5 px-7 rounded-full text-xs uppercase tracking-widest"
                >
                  Contact Pet Concierge
                </Link>
              </div>
            </div>

            {/* Right Mini Trust Box (4 cols) */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 flex flex-col gap-3.5 text-xs text-white/80">
              <div className="flex items-center gap-2.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>14-Day Happy Tail Guarantee</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>100% Non-Toxic Pet Safe Materials</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>UPS Fast Tracked Dispatch</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>24/7 Pet Concierge Assistance</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
