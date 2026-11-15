"use client";

import React from "react";

export default function ServicePerks() {
  return (
    <section className="py-10 sm:py-14 bg-white font-sans border-b border-black/5" id="service-perks">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          
          {/* Card 1: Free Shipping */}
          <div className="relative overflow-hidden bg-white border border-[#e5e7eb] rounded-xs sm:rounded-sm p-8 sm:p-10 text-center flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md hover:border-black/20 group min-h-[220px]">
            {/* Top Icon */}
            <div className="mb-4 text-[#2b2b2b] group-hover:scale-105 transition-transform duration-300">
              <svg
                width="60"
                height="60"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-13 h-13 sm:w-14 sm:h-14"
              >
                {/* Ribbon Bow on Box */}
                <path
                  d="M32 15 C30 11, 24 11, 24 14 C24 17, 32 18, 32 18 C32 18, 40 17, 40 14 C40 11, 34 11, 32 15 Z"
                  stroke="#2b2b2b"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="32" cy="17" r="1.5" fill="#2b2b2b" />
                {/* Gift Box with FREE */}
                <rect
                  x="19"
                  y="18"
                  width="26"
                  height="18"
                  rx="1"
                  stroke="#2b2b2b"
                  strokeWidth="1.8"
                />
                <text
                  x="32"
                  y="31"
                  textAnchor="middle"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  fontWeight="900"
                  fontSize="8"
                  letterSpacing="1"
                  fill="#2b2b2b"
                >
                  FREE
                </text>
                {/* Truck outline: cab on right */}
                <path
                  d="M45 25 H50 L56 32 V41 H51"
                  stroke="#2b2b2b"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Cab window */}
                <path
                  d="M50 28 H46 V33 H53 L50 28 Z"
                  stroke="#2b2b2b"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Truck chassis & bed */}
                <path
                  d="M12 36 H19 V41 H15 M25 41 H41 M51 41 H56"
                  stroke="#2b2b2b"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                {/* Wheels */}
                <circle cx="20" cy="41" r="5" stroke="#2b2b2b" strokeWidth="1.8" fill="white" />
                <circle cx="20" cy="41" r="2" fill="#2b2b2b" />
                <circle cx="46" cy="41" r="5" stroke="#2b2b2b" strokeWidth="1.8" fill="white" />
                <circle cx="46" cy="41" r="2" fill="#2b2b2b" />
                {/* Speed lines */}
                <path d="M8 33 H13 M6 37 H11" stroke="#2b2b2b" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-[#2b2b2b] mb-2 tracking-tight">
              Free Shipping
            </h3>

            {/* Subtitle */}
            <p className="text-[#777777] text-xs sm:text-[13px] leading-relaxed max-w-[250px]">
              Lorem ipsum dolor sit amet consect adipiscing elit sed does
            </p>

            {/* Watermark in bottom right matching screenshot */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 pointer-events-none select-none opacity-[0.14] text-black">
              <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                <path
                  d="M32 15 C30 11, 24 11, 24 14 C24 17, 32 18, 32 18 C32 18, 40 17, 40 14 C40 11, 34 11, 32 15 Z"
                  stroke="currentColor"
                  strokeWidth="2.2"
                />
                <rect x="18" y="18" width="28" height="20" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
                <text
                  x="32"
                  y="32"
                  textAnchor="middle"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  fontWeight="900"
                  fontSize="9"
                  letterSpacing="1"
                  fill="currentColor"
                >
                  FREE
                </text>
                <path d="M46 25 H51 L58 33 V43 H53" stroke="currentColor" strokeWidth="2.2" />
                <path d="M10 43 H15 M27 43 H41 M53 43 H59" stroke="currentColor" strokeWidth="2.2" />
                <circle cx="21" cy="43" r="5.5" stroke="currentColor" strokeWidth="2.2" />
                <circle cx="47" cy="43" r="5.5" stroke="currentColor" strokeWidth="2.2" />
              </svg>
            </div>
          </div>

          {/* Card 2: Support 24/7 */}
          <div className="relative overflow-hidden bg-white border border-[#e5e7eb] rounded-xs sm:rounded-sm p-8 sm:p-10 text-center flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md hover:border-black/20 group min-h-[220px]">
            {/* Top Icon */}
            <div className="mb-4 text-[#2b2b2b] group-hover:scale-105 transition-transform duration-300">
              <svg
                width="60"
                height="60"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-13 h-13 sm:w-14 sm:h-14"
              >
                {/* Circular arrow path */}
                <path
                  d="M32 13 A19 19 0 1 1 15 25"
                  stroke="#2b2b2b"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                {/* Arrow Head */}
                <path
                  d="M28 10 L35 13 L28 17"
                  stroke="#2b2b2b"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* 24 Text */}
                <text
                  x="32"
                  y="38"
                  textAnchor="middle"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  fontWeight="900"
                  fontSize="16"
                  letterSpacing="-0.5"
                  fill="#2b2b2b"
                >
                  24
                </text>
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-[#2b2b2b] mb-2 tracking-tight">
              Support 24/7
            </h3>

            {/* Subtitle */}
            <p className="text-[#777777] text-xs sm:text-[13px] leading-relaxed max-w-[250px]">
              Lorem ipsum dolor sit amet consect adipiscing elit sed does
            </p>

            {/* Watermark in bottom right matching screenshot */}
            <div className="absolute -bottom-5 -right-5 w-32 h-32 pointer-events-none select-none opacity-[0.14] text-black">
              <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="2.6" strokeDasharray="5 3" />
                <path d="M48 18 L53 23 L45 25" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                <text
                  x="32"
                  y="40"
                  textAnchor="middle"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  fontWeight="900"
                  fontSize="22"
                  fill="currentColor"
                >
                  24
                </text>
              </svg>
            </div>
          </div>

          {/* Card 3: Money Return */}
          <div className="relative overflow-hidden bg-white border border-[#e5e7eb] rounded-xs sm:rounded-sm p-8 sm:p-10 text-center flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md hover:border-black/20 group min-h-[220px]">
            {/* Top Icon */}
            <div className="mb-4 text-[#2b2b2b] group-hover:scale-105 transition-transform duration-300">
              <svg
                width="60"
                height="60"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-13 h-13 sm:w-14 sm:h-14"
              >
                {/* Circular Return Arrow around Dollar */}
                <path
                  d="M32 14 C42 14, 50 22, 50 32 C50 42, 42 50, 32 50 C22 50, 15 42, 14 33"
                  stroke="#2b2b2b"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                {/* Arrowhead */}
                <path
                  d="M36 10 L31 14 L36 18"
                  stroke="#2b2b2b"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Inner dashed orbit circle */}
                <circle cx="32" cy="32" r="12" stroke="#2b2b2b" strokeWidth="1.8" strokeDasharray="3 3" />
                {/* Dollar Sign */}
                <text
                  x="32"
                  y="38"
                  textAnchor="middle"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  fontWeight="900"
                  fontSize="17"
                  fill="#2b2b2b"
                >
                  $
                </text>
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-[#2b2b2b] mb-2 tracking-tight">
              Money Return
            </h3>

            {/* Subtitle */}
            <p className="text-[#777777] text-xs sm:text-[13px] leading-relaxed max-w-[250px]">
              Lorem ipsum dolor sit amet consect adipiscing elit sed does
            </p>

            {/* Watermark in bottom right matching screenshot */}
            <div className="absolute -bottom-5 -right-5 w-32 h-32 pointer-events-none select-none opacity-[0.14] text-black">
              <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
                <circle cx="32" cy="32" r="23" stroke="currentColor" strokeWidth="2.6" />
                <circle cx="32" cy="32" r="16" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                <text
                  x="32"
                  y="40"
                  textAnchor="middle"
                  fontFamily="system-ui, -apple-system, sans-serif"
                  fontWeight="900"
                  fontSize="24"
                  fill="currentColor"
                >
                  $
                </text>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}