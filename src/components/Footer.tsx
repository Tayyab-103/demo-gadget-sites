"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const logoWords = siteConfig.brandName.split(" ");
  const firstWord = logoWords[0] || "Motorway";
  const secondWord = logoWords[1] || "Parts";
  const remainingWords = logoWords.slice(2).join(" ") || "AND ACCESSORIES";

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="flex flex-col justify-end bg-[#040D0A] pt-14 sm:pt-16 lg:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden w-full relative z-10 font-sans border-t border-emerald-950/40" id="footer">
      <div className="w-full max-w-7xl mx-auto">
        {/* ─── Main Footer Columns: Responsive Grid ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8">

          {/* ─── Column 1: Brand Info & Overview (Desktop: 4 cols) ─── */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col items-start text-left">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#061A14] via-[#0B251D] to-[#059669] flex items-center justify-center text-white shadow-md flex-shrink-0 border border-emerald-900/50 group-hover:scale-105 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-emerald-400"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="12" r="3" fill="#059669" stroke="#ffffff" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl sm:text-2xl font-black italic tracking-tight text-white">
                  {firstWord} <span className="text-emerald-400">{secondWord}</span>
                </span>
                <span className="text-[0.62rem] font-bold tracking-[0.2em] text-emerald-200/60 uppercase">
                  {remainingWords || "AND ACCESSORIES"}
                </span>
              </div>
            </Link>

            <div className="w-full max-w-52 h-0.5 mt-5 bg-gradient-to-r from-[#103426] to-[#103426]/0" />

            <p className="text-xs sm:text-sm text-white/60 mt-4 max-w-sm leading-relaxed">
              Precision-tested automotive upgrades and pro-grade accessories engineered for peak durability, vehicle safety, and road performance.
            </p>

            {/* Accepted Cards */}
            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              <span className="text-xs text-white/50 font-medium">Accepted Cards:</span>
              <div className="flex items-center justify-center h-7 px-1.5 bg-white/5 rounded-md border border-white/10 shadow-2xs">
                <img src="/img/visa.png" alt="Visa" className="h-6 w-auto object-contain" />
              </div>
              <div className="flex items-center justify-center h-7 px-1.5 bg-white/5 rounded-md border border-white/10 shadow-2xs">
                <img src="/img/mastercard.png" alt="Mastercard" className="h-6 w-auto object-contain" />
              </div>
            </div>
          </div>

          {/* ─── Column 2: Important Links (Desktop: 2 cols) ─── */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2 flex flex-col items-start text-left">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400">Important Links</h3>
            <div className="flex flex-col gap-2.5 mt-4 sm:mt-5">
              <Link href="/" className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors">Home</Link>
              <Link href="/shop" className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors">Products</Link>
              <Link href="/about" className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors">About Us</Link>
              <Link href="/contact" className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors">Contact</Link>
              <Link href="/#faq" className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors">FAQ</Link>
            </div>
          </div>

          {/* ─── Column 3: Customer Care & Support (Desktop: 3 cols) ─── */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-3 flex flex-col items-start text-left">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400">Customer Care</h3>
            <div className="flex flex-col gap-2.5 mt-4 sm:mt-5">
              <Link href="/terms" className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors">
                Shipping &amp; Delivery ({siteConfig.shippingCarrier || "UPS"})
              </Link>
              <Link href="/terms" className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors">
                {siteConfig.trialPeriod || 14}-Day Road-Test Guarantee
              </Link>
              <Link href="/privacy" className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors break-all"
              >
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors"
              >
                {siteConfig.phone}
              </a>
              {siteConfig.address && (
                <span className="text-xs text-white/50 leading-relaxed mt-1">
                  {siteConfig.address}
                </span>
              )}
            </div>
          </div>

          {/* ─── Column 4: Newsletter Subscription (Desktop: 3 cols) ─── */}
          <div className="sm:col-span-2 lg:col-span-3 flex flex-col items-start text-left">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400">Driver VIP Club</h3>
            <p className="text-xs text-white/60 mt-2 leading-relaxed">
              Subscribe for exclusive volume bundle deals, priority part drops, and seasonal discount codes.
            </p>

            {subscribed ? (
              <div className="mt-4 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-bold px-4 py-3 rounded-xl w-full">
                ✓ Thank you for subscribing to Motorway Driver&apos;s Club!
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-1.5 border border-white/20 p-1.5 sm:p-1 rounded-2xl sm:rounded-full w-full max-w-md mt-4 bg-white/5 focus-within:border-emerald-500 transition-colors"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email..."
                  className="w-full py-2.5 px-4 outline-none text-xs sm:text-sm bg-transparent text-white placeholder-white/50 min-w-0"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 active:scale-95 transition py-2.5 px-5 rounded-xl sm:rounded-full text-xs font-bold text-white cursor-pointer flex-shrink-0 focus:outline-none shadow-md shadow-emerald-900/30 text-center"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>

        {/* ─── Divider ─── */}
        <div className="w-full h-px mt-12 sm:mt-14 mb-6 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* ─── Legal & Copyright Bar ─── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 pb-6 text-center sm:text-left">
          <p className="text-xs text-white/60 order-2 sm:order-1">
            &copy; {currentYear} {siteConfig.brandName}. All Rights Reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-white/60 order-1 sm:order-2">
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <span className="w-1 h-1 rounded-full bg-white/30" />
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* ─── Large Watermark Brand Name ─── */}
        <div className="w-full flex justify-center mt-2 sm:mt-4 md:mt-6 overflow-hidden pointer-events-none select-none">
          <h1 className="text-center font-black tracking-tighter leading-none text-[#071813] text-[clamp(2.75rem,13vw,14rem)] uppercase truncate max-w-full">
            {firstWord}
          </h1>
        </div>
      </div>
    </footer>
  );
}
