"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";
import { ScallopTop, WhimsicalStar } from "./ScallopBorders";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#fee9ef] text-[#1e293b] font-sans pt-0 overflow-hidden select-none">
      {/* Top Scalloped Cloud Fringe */}
      <ScallopTop color="#fee9ef" />

      {/* Whimsical Floating Cartoon Icons */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Hot Air Balloon on Left */}
        <div className="absolute top-16 left-3 sm:left-6 w-10 sm:w-14 opacity-80 float-bob-y">
          <svg viewBox="0 0 48 64" fill="none" className="w-full h-auto">
            <ellipse cx="24" cy="22" rx="20" ry="22" fill="#ffd1dc" />
            <path d="M12,10 C18,16 18,30 14,40 C10,30 8,18 12,10 Z" fill="#ffeaa7" />
            <path d="M36,10 C30,16 30,30 34,40 C38,30 40,18 36,10 Z" fill="#81ecec" />
            <path d="M20,44 L28,44 L26,52 L22,52 Z" fill="#b2bec3" />
            <rect x="20" y="52" width="8" height="6" rx="1" fill="#d63031" />
          </svg>
        </div>

        {/* Twinkling Stars */}
        <WhimsicalStar className="absolute top-20 left-[26%] w-5 h-5 text-white/90 zoom-fade" />
        <WhimsicalStar className="absolute top-36 right-[35%] w-6 h-6 text-white/95 zoom-fade" />
        <WhimsicalStar className="absolute top-12 right-24 w-5 h-5 text-white/90 zoom-fade" />
        <WhimsicalStar className="absolute bottom-16 left-12 w-4 h-4 text-white/80 zoom-fade" />

        {/* Cute Smiling Blushing Cloud */}
        <div className="absolute bottom-20 left-[50%] -translate-x-1/2 w-20 sm:w-24 opacity-90 float-bob-x">
          <svg viewBox="0 0 80 48" fill="none" className="w-full h-auto">
            <path
              d="M20,38 C14,38 10,34 10,28 C10,23 14,19 19,19 C21,12 28,8 36,8 C43,8 50,12 52,18 C55,17 58,18 60,20 C64,21 68,25 68,30 C68,35 64,38 60,38 Z"
              fill="#ffffff"
            />
            {/* Eyes */}
            <circle cx="30" cy="26" r="2" fill="#2d3436" />
            <circle cx="46" cy="26" r="2" fill="#2d3436" />
            {/* Smile */}
            <path d="M35,30 Q38,34 41,30" stroke="#2d3436" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Blushing Cheeks */}
            <circle cx="26" cy="29" r="2.5" fill="#ff7675" opacity="0.6" />
            <circle cx="50" cy="29" r="2.5" fill="#ff7675" opacity="0.6" />
          </svg>
        </div>

        {/* Rainbow / Umbrella bottom right */}
        <div className="absolute bottom-12 right-2 sm:right-6 w-14 sm:w-16 opacity-80 float-bob-y">
          <svg viewBox="0 0 50 50" fill="none" className="w-full h-auto">
            <path d="M5,30 A20,20 0 0,1 45,30 Z" fill="#ffeaa7" />
            <path d="M12,30 A13,13 0 0,1 38,30 Z" fill="#ff7675" />
            <path d="M19,30 A6,6 0 0,1 31,30 Z" fill="#74b9ff" />
            <line x1="25" y1="30" x2="25" y2="44" stroke="#2d3436" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M25,44 Q25,48 21,48" stroke="#2d3436" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-14 pb-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 items-start">
          
          {/* Brand & Corporate Column (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <Link href="/" className="mb-3 block group">
              <span className="text-2xl sm:text-3xl font-black tracking-tight flex items-baseline">
                <span className="text-[#00b4d8]">P</span>
                <span className="text-[#ff4370]">L</span>
                <span className="text-[#ffb703]">A</span>
                <span className="text-[#06d6a0]">Y</span>
                <span className="text-[#7209b7]">H</span>
                <span className="text-[#ff4370]">O</span>
                <span className="text-[#ffb703]">U</span>
                <span className="text-[#00b4d8]">S</span>
                <span className="text-[#ff4370]">E</span>
              </span>
              <span className="block text-[0.68rem] font-black uppercase tracking-widest text-[#ff4370] -mt-1">
                Games &amp; Toy Store
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-black/75 leading-relaxed mb-4">
              {siteConfig.address}
              <br />
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-black/85 hover:text-[#ff4370] font-bold transition-colors"
              >
                {siteConfig.email}
              </a>
            </p>
          </div>

          {/* Resources Column (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h4 className="text-base font-black text-[#1e293b] mb-4 tracking-tight">
              Resources
            </h4>
            <ul className="text-xs sm:text-sm space-y-2.5 text-black/75 font-semibold">
              <li>
                <Link href="/" className="hover:text-[#ff4370] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#ff4370] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#ff4370] transition-colors">
                  Toy Shop
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-[#ff4370] transition-colors">
                  View Cart
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#ff4370] transition-colors">
                  Shop by Brands
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Support & Legal (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-black text-[#1e293b] mb-4 tracking-tight">
              Support &amp; Policies
            </h4>
            <ul className="text-xs sm:text-sm space-y-2.5 text-black/75 font-semibold">
              <li>
                <Link href="/contact" className="hover:text-[#ff4370] transition-colors">
                 Contact Customer Care
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#ff4370] transition-colors">
                  14-Day Return &amp; Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#ff4370] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#ff4370] transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
              </li>
            </ul>
          </div>

          {/* Subscribe Column (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h4 className="text-base font-black text-[#1e293b] mb-4 tracking-tight">
              Subscribe
            </h4>
            <p className="text-xs sm:text-sm text-black/70 leading-relaxed mb-4">
              Stay inform about upcoming events, webinars, and exciting happenings.
            </p>

            <form onSubmit={handleSubscribe} className="relative">
              <div className="relative rounded-full border-2 border-dashed border-white bg-white/60 p-1 pl-4 pr-1 flex items-center justify-between shadow-xs hover:border-[#ff4370]/50 transition-colors">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                  className="bg-transparent text-xs sm:text-sm text-[#1e293b] placeholder-black/50 focus:outline-none w-full mr-2"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="w-9 h-9 rounded-full bg-[#ff4370] hover:bg-[#e63560] text-white flex items-center justify-center font-bold flex-shrink-0 transition-transform active:scale-95 shadow-md shadow-[#ff4370]/30 cursor-pointer"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>

              {subscribed && (
                <span className="text-[0.72rem] font-bold text-emerald-700 mt-2 block animate-fade-in">
                  ✓ Thank you for subscribing to our toy club!
                </span>
              )}
            </form>
          </div>

        </div>
      </div>

      {/* Dashed Bottom Bar matching Kiddex */}
      <div className="border-t border-dashed border-[#f6a0b5] py-5 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-black/65 text-center md:text-left">
          <div>
            <p className="font-semibold">
              Copyright &copy; {currentYear}{" "}
              <Link href="/" className="font-black text-[#ff4370] hover:underline">
                Playhouse Games and Toy Store
              </Link>
              , Inc. All Rights Reserved.
            </p>
           
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            {/* White rounded pill payment card badges matching Kiddex */}
           <img src="/img/visa.png" alt="Visa" className="h-5 w-auto rounded-xs bg-white p-0.5" />
            <img src="/img/mastercard.png" alt="Mastercard" className="h-5 w-auto rounded-xs bg-white p-0.5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
