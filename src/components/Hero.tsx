"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#fbf9fb] via-[#f7f4f6] to-[#fbf8fa] py-10 sm:py-14 lg:py-16 border-b border-gray-200">
      {/* ─── LEFT HALFTONE DOT MATRIX PATTERN (Matching Screenshot) ─── */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-1/3 opacity-35 z-0"
        style={{
          backgroundImage: `radial-gradient(#e53935 1.5px, transparent 1.5px)`,
          backgroundSize: "18px 18px",
          maskImage: "radial-gradient(ellipse at 10% 50%, black 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 10% 50%, black 20%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      {/* Floating dynamic red paint drops / dust particles */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-12 left-1/4 w-3 h-1.5 bg-red-600/80 rounded-full rotate-45 blur-[0.3px]" />
        <div className="absolute top-8 right-1/2 w-4 h-2 bg-red-600/90 rounded-full -rotate-12" />
        <div className="absolute top-16 right-[42%] w-2 h-2 bg-red-600 rounded-full" />
        <div className="absolute top-6 right-1/4 w-2.5 h-1.5 bg-red-600/70 rounded-full rotate-45" />
        <div className="absolute top-20 right-1/6 w-3 h-3 bg-red-600/60 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-6">
          {/* ────────────────── LEFT CONTENT ────────────────── */}
          <div className="lg:col-span-6 text-center lg:text-left z-20">
            {/* Eyebrow Sale Banner */}
            <div className="inline-block mb-3">
              <span className="text-red-600 font-extrabold text-xs sm:text-sm uppercase tracking-[0.14em]">
                UP TO 50% OFF &bull; LIMITED TIME SALE
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.6rem] font-black leading-[1.08] tracking-tight uppercase">
              <span className="block text-gray-900">PREMIUM AUTO PARTS &amp;</span>
              <span className="block text-red-600 mt-1">ACCESSORIES</span>
            </h1>

            {/* Value Proposition Description */}
            <p className="mt-4 max-w-lg text-sm sm:text-base leading-relaxed text-gray-600 mx-auto lg:mx-0 font-normal">
              Pro-grade automotive components engineered for exact OEM fitment, heavy-duty durability, and peak performance.
            </p>

            {/* CTA Button */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm uppercase tracking-wider px-8 py-3.5 rounded-full shadow-lg shadow-red-600/30 hover:shadow-red-600/40 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <span>Shop now</span>
                <span className="text-base font-bold transition-transform group-hover:translate-x-1">&rarr;</span>
              </Link>

              <Link
                href="/about"
                className="hidden sm:inline-flex items-center justify-center text-xs font-bold uppercase tracking-widest text-gray-700 hover:text-red-600 px-6 py-3.5 transition-colors"
              >
                Why {siteConfig.brandName} &rarr;
              </Link>
            </div>

            {/* Key Trust Signals */}
            <div className="mt-10 pt-6 border-t border-gray-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-gray-600 font-medium">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-red-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>Guaranteed Fitment</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-red-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>Free Express Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-red-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>30-Day Hassle-Free Returns</span>
              </div>
            </div>
          </div>

          {/* ────────────────── RIGHT: 3D TIRES WITH SPLASH EFFECT ────────────────── */}
          <div className="lg:col-span-6 relative flex items-center justify-center mt-6 lg:mt-0 min-h-[360px] sm:min-h-[440px] lg:min-h-[480px]">
            {/* Dynamic Vector Paint Splatter Graphic */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
              <svg
                viewBox="0 0 800 650"
                className="w-full h-full max-w-[620px] text-red-600 fill-current opacity-95 filter drop-shadow-md"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Main Explosive Red Splatter Blob */}
                <path d="M 430,220 C 510,160 620,170 660,240 C 700,310 740,360 700,430 C 660,500 590,560 510,580 C 430,600 350,560 300,510 C 250,460 210,410 230,340 C 250,270 350,280 430,220 Z" />

                {/* Splatter Tendrils & Burst Points */}
                <path d="M 640,220 Q 720,170 760,130 Q 740,200 680,240 Z" />
                <path d="M 690,320 Q 790,300 830,290 Q 780,360 720,380 Z" />
                <path d="M 660,450 Q 760,510 800,560 Q 720,530 630,500 Z" />
                <path d="M 520,560 Q 560,640 590,680 Q 510,630 470,580 Z" />
                <path d="M 330,500 Q 250,580 180,620 Q 240,540 280,480 Z" />
                <path d="M 230,370 Q 140,360 90,340 Q 160,330 220,320 Z" />
                <path d="M 270,270 Q 190,190 140,140 Q 230,200 290,240 Z" />
                <path d="M 410,210 Q 430,110 460,60 Q 460,140 440,200 Z" />

                {/* Flying Droplets */}
                <circle cx="780" cy="200" r="10" />
                <circle cx="810" cy="230" r="6" />
                <circle cx="790" cy="440" r="14" />
                <circle cx="830" cy="470" r="7" />
                <circle cx="680" cy="610" r="12" />
                <circle cx="720" cy="650" r="8" />
                <circle cx="440" cy="640" r="9" />
                <circle cx="210" cy="570" r="11" />
                <circle cx="150" cy="530" r="6" />
                <circle cx="120" cy="280" r="10" />
                <circle cx="80" cy="260" r="5" />
                <circle cx="170" cy="120" r="8" />
                <circle cx="340" cy="90" r="12" />
                <circle cx="370" cy="60" r="6" />
                <circle cx="530" cy="110" r="11" />
              </svg>
            </div>

            {/* ─── 3 OVERLAPPING TIRES / ALLOY WHEELS ─── */}
            <div className="relative z-10 w-full max-w-[540px] flex items-end justify-center">
              {/* Back Left Tire: Upright Ultra-Grip Winter Tire */}
              <div className="relative w-44 sm:w-56 lg:w-64 -mr-16 sm:-mr-20 z-10 filter drop-shadow-2xl hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=800&auto=format&fit=crop&q=80"
                  alt="High Performance Automotive Tire"
                  className="w-full h-auto object-contain rounded-full border-4 border-gray-900/10 shadow-2xl"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&auto=format&fit=crop&q=80";
                  }}
                />
              </div>

              {/* Middle Tire: Angular Sport Rim & Deep Tread */}
              <div className="relative w-48 sm:w-60 lg:w-72 -mr-14 sm:-mr-18 z-20 filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&auto=format&fit=crop&q=80"
                  alt="Performance Alloy Wheel and Tire"
                  className="w-full h-auto object-contain rounded-full border-4 border-gray-900/10 shadow-2xl"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?w=800&auto=format&fit=crop&q=80";
                  }}
                />
              </div>

              {/* Front Right Tire: Off-Road Wrangler Alloy Wheel */}
              <div className="relative w-52 sm:w-64 lg:w-80 z-30 filter drop-shadow-[0_30px_45px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?w=800&auto=format&fit=crop&q=80"
                  alt="Goodyear Wrangler Off-Road Wheel"
                  className="w-full h-auto object-contain rounded-full border-4 border-gray-900/10 shadow-2xl"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=800&auto=format&fit=crop&q=80";
                  }}
                />
              </div>
            </div>

            {/* Discount Badge Floater */}
            <div className="absolute top-4 right-2 sm:right-6 z-40 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full p-4 sm:p-5 shadow-2xl shadow-red-600/50 flex flex-col items-center justify-center leading-none transform rotate-12 hover:rotate-0 transition-transform">
              <span className="text-[0.65rem] sm:text-xs font-black uppercase tracking-wider">UP TO</span>
              <span className="text-xl sm:text-2xl font-black mt-0.5">50%</span>
              <span className="text-[0.6rem] sm:text-[0.65rem] font-extrabold uppercase">OFF</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
