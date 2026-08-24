"use client";

import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FFF5E6] pt-6 sm:pt-10">
      
      {/* Right-to-Left Fading Baby Photography */}
      <div className="absolute top-0 right-0 bottom-10 w-full md:w-[60%] lg:w-[58%] pointer-events-none select-none overflow-hidden z-0">
        <img
          src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1600&q=90"
          alt="Adorable baby smiling in cozy organic nursery"
          className="w-full h-full object-cover object-right opacity-90"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1519689680058-324335c77eba?w=1600&q=90";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF5E6] via-[#FFF5E6]/85 via-45% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFF5E6] via-transparent to-transparent opacity-70" />
      </div>

      {/* Floating Cloud & Star Decorations */}
      <div className="absolute top-3 left-[8%] sm:left-[12%] text-xl sm:text-2xl select-none opacity-80 z-10">
        ☁️
      </div>
      <div className="absolute top-5 right-[12%] sm:right-[18%] text-2xl sm:text-3xl select-none opacity-80 z-10">
        ☁️
      </div>
      <div className="absolute top-10 right-[6%] sm:right-[8%] text-lg sm:text-xl text-amber-300 select-none z-10">
        ⭐
      </div>
      <div className="absolute top-24 left-[4%] sm:left-[6%] text-lg sm:text-xl text-amber-300 select-none z-10">
        ⭐
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2 pb-12 sm:pb-16 lg:pb-20">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10 max-w-xl">
            
            {/* Title with Speech Bubble */}
            <div className="relative mb-2 pr-12 sm:pr-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#1E2330] tracking-tight leading-[1.1]">
                Best Babies <br />
                <span className="text-[#FF6B8B] inline-block mt-1">
                  Little Treasures
                </span>
              </h1>

              {/* Floating "Hello!" Speech Bubble */}
              <div className="absolute -top-3 right-0 sm:-right-8 translate-x-2 sm:translate-x-12 bg-white px-3 py-1 rounded-full border-2 border-[#FF8E9E] shadow-xs flex items-center justify-center transform rotate-6">
                <span className="text-[0.7rem] sm:text-xs font-black text-[#FF6B8B]">Hello! 👋</span>
                <div className="absolute -bottom-1 left-3 w-2.5 h-2.5 bg-white border-b-2 border-l-2 border-[#FF8E9E] transform rotate-45" />
              </div>
            </div>

            {/* Cute Squiggly Doodle */}
            <div className="my-2.5 text-[#FF9EAA]">
              <svg width="50" height="10" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6C6 2 10 10 14 6C18 2 22 10 26 6C30 2 34 10 38 6C42 2 46 10 50 6C54 2 58 10 60 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Description */}
            <p className="text-[#555C6E] text-xs sm:text-sm sm:leading-relaxed max-w-md mb-6 sm:mb-8 font-medium">
              Safe, organic bibs, natural beechwood teethers &amp; heirloom knitwear crafted for your baby&apos;s tender comfort.
            </p>

            {/* CTA Button */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href="/#shop"
                className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#FF6B8B] hover:bg-[#FA5679] text-white font-black text-xs sm:text-sm tracking-wide shadow-md shadow-pink-300/40 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <span>Shop Now</span>
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[0.65rem]">
                  →
                </span>
              </Link>

              <span className="text-lg text-[#FF8FA3]">💖</span>
            </div>

            {/* Small Rainbow Arch */}
            <div className="mt-6 sm:mt-8 select-none opacity-90 hidden sm:block">
              <svg width="100" height="50" viewBox="0 0 120 60" fill="none">
                <path d="M10,60 A50,50 0 0,1 110,60" stroke="#FF9FB2" strokeWidth="6" fill="none" />
                <path d="M20,60 A40,40 0 0,1 100,60" stroke="#FFD166" strokeWidth="6" fill="none" />
                <path d="M30,60 A30,30 0 0,1 90,60" stroke="#06D6A0" strokeWidth="6" fill="none" />
                <path d="M40,60 A20,20 0 0,1 80,60" stroke="#118AB2" strokeWidth="6" fill="none" />
                <path d="M50,60 A10,10 0 0,1 70,60" stroke="#8F75D8" strokeWidth="6" fill="none" />
              </svg>
            </div>

          </div>

          {/* Right Spacer */}
          <div className="lg:col-span-5 min-h-[100px] sm:min-h-[180px] lg:min-h-[260px]" />

        </div>

      </div>

      {/* Cloud-Shaped Scalloped Wave Bottom Divider */}
      <div className="relative w-full overflow-hidden leading-none z-20">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-14 md:h-16 text-white fill-current"
        >
          <path d="M0,40 C120,70 180,10 300,40 C420,70 480,10 600,40 C720,70 780,10 900,40 C1020,70 1080,10 1200,40 C1320,70 1380,10 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>

      {/* 3-Feature Bar Inside Scalloped Cloud Base */}
      <div className="bg-white relative z-20 pb-10 sm:pb-14 -mt-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 items-center">
            
            {/* Feature 1: Exclusive Collections */}
            <div className="flex flex-col items-center text-center px-4 sm:px-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden mb-3 p-1.5 bg-[#FFF5E6] flex items-center justify-center shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=400&q=80"
                  alt="Exclusive Organic Collections"
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&q=80";
                  }}
                />
              </div>
              <h3 className="text-sm sm:text-base font-black text-[#1E2330] mb-1 flex items-center gap-1">
                <span className="text-amber-400 text-xs">⭐</span>
                Exclusive Collections
              </h3>
              <p className="text-xs text-[#555C6E] max-w-xs leading-relaxed font-normal">
                Handpicked organic bibs and soft sets for your baby&apos;s comfort.
              </p>
            </div>

            {/* Feature 2: Happiness Guaranteed */}
            <div className="flex flex-col items-center text-center px-4 sm:px-6 md:border-x md:border-dashed md:border-[#FFB8C6]">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden mb-3 p-1.5 bg-[#FFF0F4] flex items-center justify-center shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&q=80"
                  alt="Happiness Guaranteed"
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&q=80";
                  }}
                />
              </div>
              <h3 className="text-sm sm:text-base font-black text-[#1E2330] mb-1">
                Happiness Guaranteed
              </h3>
              <p className="text-xs text-[#555C6E] max-w-xs leading-relaxed font-normal">
                Bringing smiles with safe and pediatrician-tested baby essentials.
              </p>
            </div>

            {/* Feature 3: Trending Treasures */}
            <div className="flex flex-col items-center text-center px-4 sm:px-6">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden mb-3 p-1.5 bg-[#F3EEFF] flex items-center justify-center shadow-xs">
                <img
                  src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=400&q=80"
                  alt="Trending Baby Treasures"
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&q=80";
                  }}
                />
              </div>
              <h3 className="text-sm sm:text-base font-black text-[#1E2330] mb-1 flex items-center gap-1">
                Trending Treasures
                <span className="text-amber-400 text-xs">⭐</span>
              </h3>
              <p className="text-xs text-[#555C6E] max-w-xs leading-relaxed font-normal">
                Heirloom knits and beechwood sensory teethers for little explorers.
              </p>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
