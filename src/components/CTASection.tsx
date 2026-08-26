"use client";

import React from "react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-[#132B1C]" id="cta">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1600&auto=format&fit=crop&q=80')` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#132B1C] via-[#132B1C]/90 to-[#132B1C]/75" />

      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10 flex justify-center">
        {/* Content Card */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-12 md:p-14 text-center shadow-2xl relative overflow-hidden max-w-3xl w-full border border-white/15">
          
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-6 h-[1.5px] bg-[#78C470]/60 rounded-full" />
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#78C470]">
              SEASONAL FOUNDRY SAVINGS
            </span>
            <span className="w-6 h-[1.5px] bg-[#78C470]/60 rounded-full" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-white mb-4 tracking-tight leading-tight font-sans">
            Equip Your Garden with <br />
            <span className="text-[#78C470]">Heirloom Hand Tools</span>
          </h2>

          <p className="text-white/80 text-xs sm:text-sm mb-8 max-w-xl mx-auto leading-relaxed">
            Invest in hand-forged instruments engineered to endure heavy clay, dense root systems, and decades of seasonal planting.
          </p>

          <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 font-bold text-xs uppercase tracking-wider bg-[#265C1E] hover:bg-[#1E4A17] text-white py-3.5 px-8 rounded-lg shadow-md transition-colors"
            >
              Explore Tool Bundles
              <span>→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-bold text-xs uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 py-3.5 px-8 rounded-lg transition-colors"
            >
              Contact Workshop
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
