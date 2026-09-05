"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-[#0D1B2A] text-[#F8F6F0] border-t border-[#C87D3B]/30 pt-16 sm:pt-20 pb-12 sm:pb-14">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter Banner */}
        <div className="rounded-3xl bg-white/5 border border-[#C87D3B]/30 p-6 sm:p-8 md:p-10 mb-14 sm:mb-16 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="max-w-md text-center md:text-left">
            <span className="text-[0.68rem] uppercase tracking-[0.24em] text-[#C87D3B] font-bold">
              ✈ Globetrotter Society Access
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mt-1 tracking-tight uppercase">
              Join The Departure Log
            </h3>
            <p className="text-xs sm:text-sm text-white/70 mt-1.5 font-normal">
              Receive private gear drops, airport travel tips, and $15 off your first luggage acquisition.
            </p>
          </div>

          <div className="w-full md:w-auto">
            {subscribed ? (
              <div className="bg-[#C87D3B]/20 border border-[#C87D3B] text-[#C87D3B] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider">
                ✓ Welcome aboard. Departure credentials dispatched.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your traveler email..."
                  required
                  className="px-5 py-3 rounded-full bg-[#08121E] border border-[#C87D3B]/40 text-xs sm:text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#C87D3B] min-w-[240px] sm:min-w-[280px]"
                />
                <button
                  type="submit"
                  className="px-7 py-3 rounded-full bg-[#C87D3B] text-white text-xs font-extrabold uppercase tracking-wider hover:bg-[#D98745] transition-all cursor-pointer shadow-lg text-center"
                >
                  Join Collective
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 pb-12 sm:pb-14 border-b border-[#C87D3B]/20">
          
          {/* Brand Info */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <span className="w-8 h-8 rounded-xl bg-[#C87D3B] text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
                ✈
              </span>
              <span className="font-extrabold text-base tracking-wider text-white uppercase">
                {siteConfig.brandName}
              </span>
            </Link>
            <p className="text-xs text-white/70 leading-relaxed font-normal mb-4">
              Aerospace aluminum carry-on spinners, Italian leather weekender duffles, and modular packing suites engineered in Austin, Texas.
            </p>
            <div className="text-[0.68rem] text-[#C87D3B] font-semibold">
              Descriptor: {siteConfig.descriptor}
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider mb-4 border-b border-[#C87D3B]/30 pb-1.5">
              Our Products
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-normal">
              <li>
                <Link href="/product/product1" className="hover:text-[#C87D3B] transition-colors">
                  Carry-On Spinner Suitcase
                </Link>
              </li>
              <li>
                <Link href="/product/product2" className="hover:text-[#C87D3B] transition-colors">
                  Leather &amp; Ballistic Weekender Duffle
                </Link>
              </li>
              <li>
                <Link href="/product/product3" className="hover:text-[#C87D3B] transition-colors">
                  Compression Packing Cube &amp; Tech Organizer Suite
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#C87D3B] transition-colors">
                  View All Gear →
                </Link>
              </li>
            </ul>
          </div>

          {/* Travel Engineering */}
          <div>
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider mb-4 border-b border-[#C87D3B]/30 pb-1.5">
              The Collective
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-normal">
              <li>
                <Link href="/about" className="hover:text-[#C87D3B] transition-colors">
                  Our Engineering Story
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-[#C87D3B] transition-colors">
                  The Wanderloom Standard
                </Link>
              </li>
              <li>
                <Link href="/#quality-promise" className="hover:text-[#C87D3B] transition-colors">
                  100-Day Global Flight Trial
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-[#C87D3B] transition-colors">
                  Globetrotter Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Traveler Concierge */}
          <div>
            <h4 className="font-extrabold text-sm text-white uppercase tracking-wider mb-4 border-b border-[#C87D3B]/30 pb-1.5">
              Traveler Concierge
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75 font-normal">
              <li>
                <Link href="/contact" className="hover:text-[#C87D3B] transition-colors">
                  Flight Concierge Desk
                </Link>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-[#C87D3B] transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#C87D3B] transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#C87D3B] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#C87D3B] transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {siteConfig.brandName}. All Rights Reserved. Engineered in Austin, TX.
          </p>

          {/* Payment Methods */}
          <div className="flex items-center gap-3">
            <span className="text-[0.65rem] font-bold uppercase tracking-wider text-white/50 mr-1 hidden sm:inline">
              Secured Payments:
            </span>
            <div className="h-7 sm:h-8 px-2.5 py-1 rounded-lg bg-white border border-white/20 flex items-center justify-center shadow-xs">
              <img
                src="/img/visa.png"
                alt="Visa payment accepted"
                className="h-full w-auto max-h-5 object-contain"
              />
            </div>
            <div className="h-7 sm:h-8 px-2.5 py-1 rounded-lg bg-white border border-white/20 flex items-center justify-center shadow-xs">
              <img
                src="/img/mastercard.png"
                alt="Mastercard payment accepted"
                className="h-full w-auto max-h-5 object-contain"
              />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
