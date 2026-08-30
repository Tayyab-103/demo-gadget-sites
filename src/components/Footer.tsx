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
    <footer className="bg-[#18121E] text-[#FAF8F6] border-t border-[#C59B7E]/20 pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter Banner */}
        <div className="rounded-3xl bg-white/5 border border-[#C59B7E]/30 p-6 sm:p-10 mb-16 sm:mb-20 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="max-w-md text-center md:text-left">
            <div className="text-[0.68rem] uppercase tracking-[0.28em] text-[#C59B7E] font-bold mb-1.5 select-none">
              PRIVATE ATELIER ACCESS
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
              Join The Atelier Circle
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 font-light leading-relaxed">
              Receive private runway releases, styling guides, and $15 off your initial couture acquisition.
            </p>
          </div>

          <div className="w-full md:w-auto">
            {subscribed ? (
              <div className="bg-[#C59B7E]/20 border border-[#C59B7E]/40 text-[#E6C2AC] px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest">
                ✓ Welcome. Your $15 VIP invitation code has been dispatched.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="px-5 py-3.5 rounded-full bg-[#221B2A] border border-[#C59B7E]/30 text-xs sm:text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-[#C59B7E] min-w-[240px] sm:min-w-[280px]"
                />
                <button
                  type="submit"
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#E6C2AC] via-[#C59B7E] to-[#B88564] hover:brightness-110 text-[#18121E] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center shadow-lg"
                >
                  Join Circle
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 pb-14 sm:pb-16 border-b border-[#C59B7E]/20">
          
          {/* Brand Info */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#C59B7E] to-[#E6C2AC] text-[#18121E] flex items-center justify-center font-serif text-sm font-bold shadow-md">
                ✦
              </span>
              <span className="font-serif font-bold text-lg tracking-wider text-white uppercase">
                {siteConfig.brandName}
              </span>
            </Link>
            <p className="text-xs text-slate-300 leading-relaxed font-light mb-4">
              Parisian-inspired haute couture, pure mulberry silk slip dresses, and bespoke evening gowns designed for effortless elegance.
            </p>
            <div className="text-[0.68rem] text-[#C59B7E] font-mono font-medium">
              DESCRIPTOR: {siteConfig.descriptor}
            </div>
          </div>

          {/* Couture Repertoire */}
          <div>
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-[#C59B7E]/20 pb-2">
              The Collection
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-light">
              <li>
                <Link href="/shop" className="hover:text-[#C59B7E] transition-colors">
                  Pure Mulberry Silk Slip Dresses
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#C59B7E] transition-colors">
                  Virgin Wool &amp; Cashmere Outerwear
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#C59B7E] transition-colors">
                  French Chantilly Lace Gowns
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-[#C59B7E] transition-colors">
                  Atelier Silk Stoles &amp; Scarves
                </Link>
              </li>
            </ul>
          </div>

          {/* Atelier Heritage */}
          <div>
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-[#C59B7E]/20 pb-2">
              The Atelier
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-light">
              <li>
                <Link href="/about" className="hover:text-[#C59B7E] transition-colors">
                  Our Paris-Austin Story
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-[#C59B7E] transition-colors">
                  The Couture Protocol
                </Link>
              </li>
              <li>
                <Link href="/#quality-promise" className="hover:text-[#C59B7E] transition-colors">
                  14-Day Fit Guarantee
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-[#C59B7E] transition-colors">
                  Editorial Patrons &amp; Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Private Concierge */}
          <div>
            <h4 className="font-serif font-bold text-sm text-white uppercase tracking-wider mb-4 border-b border-[#C59B7E]/20 pb-2">
              Private Concierge
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-light">
              <li>
                <Link href="/contact" className="hover:text-[#C59B7E] transition-colors">
                  Styling Consultation Desk
                </Link>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-[#C59B7E] transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#C59B7E] transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#C59B7E] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#C59B7E] transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Luxury Theme Payment Logos */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <p className="text-center md:text-left font-light">
            © {new Date().getFullYear()} {siteConfig.brandName}. All Rights Reserved. Mastercrafted in Austin, TX.
          </p>

          {/* Luxury Atelier Theme Payment Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            
            {/* VISA - Luxury Rose-Gold Theme Badge */}
            <div className="h-8 px-3 rounded-lg bg-white/[0.06] border border-[#C59B7E]/30 hover:border-[#C59B7E]/60 flex items-center justify-center transition-all duration-300 group">
              <span className="font-serif font-black tracking-widest text-xs italic text-[#E6C2AC] group-hover:text-white transition-colors">
                VISA
              </span>
            </div>

            {/* MASTERCARD - Luxury Rose-Gold Theme Badge */}
            <div className="h-8 px-3 rounded-lg bg-white/[0.06] border border-[#C59B7E]/30 hover:border-[#C59B7E]/60 flex items-center justify-center gap-1.5 transition-all duration-300 group">
              <div className="flex -space-x-1.5 items-center">
                <span className="w-3.5 h-3.5 rounded-full bg-[#C59B7E] opacity-90 group-hover:opacity-100 transition-opacity" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#E6C2AC] opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="font-sans font-bold text-[0.62rem] tracking-wider text-slate-300 group-hover:text-white uppercase transition-colors">
                Mastercard
              </span>
            </div>

            {/* AMEX - Luxury Rose-Gold Theme Badge */}
            <div className="h-8 px-3 rounded-lg bg-white/[0.06] border border-[#C59B7E]/30 hover:border-[#C59B7E]/60 flex items-center justify-center transition-all duration-300 group">
              <span className="font-mono font-bold tracking-widest text-[0.62rem] text-[#E6C2AC] group-hover:text-white uppercase transition-colors">
                AMEX
              </span>
            </div>

            {/* DISCOVER - Luxury Rose-Gold Theme Badge */}
            <div className="h-8 px-3 rounded-lg bg-white/[0.06] border border-[#C59B7E]/30 hover:border-[#C59B7E]/60 flex items-center justify-center gap-1 transition-all duration-300 group">
              <span className="font-sans font-bold text-[0.62rem] tracking-wider text-slate-300 group-hover:text-white uppercase transition-colors">
                DISC<span className="text-[#C59B7E] font-extrabold">•</span>VER
              </span>
            </div>

            {/* SSL 256-BIT ENCRYPTION */}
            <div className="h-8 px-3 rounded-lg bg-[#221B2A] border border-[#C59B7E]/40 flex items-center gap-1.5 shadow-sm">
              <svg className="w-3.5 h-3.5 text-[#C59B7E]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
              <span className="text-[0.58rem] font-bold tracking-wider text-[#E6C2AC] uppercase">
                256-BIT SSL SECURE
              </span>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
