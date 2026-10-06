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
    <footer className="flex flex-col justify-end bg-[#040D0A] pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden w-full relative z-10 font-sans" id="footer">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">

          {/* ─── Column 1: Brand Info & Overview ─── */}
          <div className="w-full md:w-[45%] lg:w-[35%] flex flex-col items-start text-left">
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
                <span className="text-2xl font-black italic tracking-tight text-white">
                  {firstWord} <span className="text-emerald-400">{secondWord}</span>
                </span>
                <span className="text-[0.62rem] font-bold tracking-[0.2em] text-emerald-200/60 uppercase">
                  {remainingWords || "AND ACCESSORIES"}
                </span>
              </div>
            </Link>

            <div className="w-full max-w-52 h-0.5 mt-6 bg-gradient-to-r from-[#103426] to-[#103426]/0" />

            <p className="text-sm text-white/60 mt-5 max-w-[350px] leading-relaxed">
              Precision-tested automotive upgrades and pro-grade accessories engineered for peak durability, vehicle safety, and performance.
            </p>

            {/* Accepted Cards */}
            <div className="mt-5 flex items-center gap-2.5">
              <span className="text-xs text-white/50 font-medium">Accepted Cards:</span>
              <div className="flex items-center justify-center h-6 shadow-xs">
                <img src="/img/visa.png" alt="Visa" className="h-8 w-auto object-contain" />
              </div>
              <div className="flex items-center justify-center h-6 shadow-xs">
                <img src="/img/mastercard.png" alt="Mastercard" className="h-8 w-auto object-contain" />
              </div>
            </div>
          </div>

          {/* ─── Column 2: Important Links ─── */}
          <div className="w-[45%] md:w-[45%] lg:w-[15%] flex flex-col items-start text-left">
            <h3 className="text-sm text-white font-medium">Important Links</h3>
            <div className="flex flex-col gap-2.5 mt-6">
              <Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">Home</Link>
              <Link href="/shop" className="text-sm text-white/60 hover:text-white transition-colors">Products</Link>
              <Link href="/about" className="text-sm text-white/60 hover:text-white transition-colors">About Us</Link>
              <Link href="/contact" className="text-sm text-white/60 hover:text-white transition-colors">Contact</Link>
              <Link href="/#faq" className="text-sm text-white/60 hover:text-white transition-colors">FAQ</Link>
            </div>
          </div>

          {/* ─── Column 3: Customer Care & Support ─── */}
          <div className="w-[45%] md:w-[45%] lg:w-[18%] flex flex-col items-start text-left">
            <h3 className="text-sm text-white font-medium">Customer Care</h3>
            <div className="flex flex-col gap-2.5 mt-6">
              <Link href="/terms" className="text-sm text-white/60 hover:text-white transition-colors">Shipping &amp; Delivery</Link>
              <Link href="/terms" className="text-sm text-white/60 hover:text-white transition-colors">30-Day Guarantee</Link>
              <Link href="/privacy" className="text-sm text-white/60 hover:text-white transition-colors">Privacy Policy</Link>
              <a href={`mailto:${siteConfig.email}`} className="text-sm text-white/60 hover:text-white transition-colors truncate max-w-full">
                {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone}`} className="text-sm text-white/60 hover:text-white transition-colors">
                {siteConfig.phone}
              </a>
            </div>
          </div>

          {/* ─── Column 4: Newsletter Subscription ─── */}
          <div className="w-full md:w-[45%] lg:w-[26%] flex flex-col items-start text-left mt-4 md:mt-0">
            <h3 className="text-sm text-white font-medium">Subscribe for news</h3>
            <p className="text-xs text-white/50 mt-2">Get exclusive volume bundle deals &amp; part drops.</p>

            {subscribed ? (
              <div className="mt-4 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-bold px-4 py-3 rounded-xl w-full">
                ✓ Thank you for subscribing to Motorway Driver&apos;s Club!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center border gap-1 border-white/20 h-12 max-w-84 w-full rounded-full overflow-hidden mt-4 bg-white/5 focus-within:border-emerald-500 transition-colors">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email.."
                  className="w-full h-full pl-5 outline-none text-xs sm:text-sm bg-transparent text-white placeholder-white/50"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:opacity-90 active:scale-95 transition w-28 sm:w-32 h-9 rounded-full text-xs font-bold text-white cursor-pointer mr-1.5 flex-shrink-0 focus:outline-none shadow-sm"
                >
                  Subscribe
                </button>
              </form>
            )}

            <div className="mt-4 text-[0.70rem] text-white/40 leading-relaxed">
              Billing Statement: <span className="text-white/70 font-semibold">{siteConfig.descriptor}</span> &bull; {siteConfig.corpName}
            </div>
          </div>

        </div>

        {/* ─── Divider ─── */}
        <div className="w-full h-0.5 mt-14 mb-6 bg-gradient-to-r from-[#103426]/0 via-[#103426] to-[#103426]/0" />

        {/* ─── Legal & Copyright Bar ─── */}
        <div className="flex flex-wrap sm:flex-row items-center justify-between gap-y-4 gap-x-2 relative z-10 pb-4">
          <p className="text-xs text-white/60">
            &copy; {currentYear} {siteConfig.brandName}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-right">
            <Link href="/terms" className="text-xs text-white/60 hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <div className="w-px h-4 bg-white/20" />
            <Link href="/privacy" className="text-xs text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* ─── Large Watermark Brand Name ─── */}
        <div className="w-full flex justify-center mt-4 md:mt-8 md:mb-[-1.5%] overflow-hidden pointer-events-none select-none">
          <h1 className="text-center font-black tracking-tighter leading-[0.70] text-[#0A1F18] text-[clamp(3.5rem,15.5vw,18rem)] uppercase truncate">
            {firstWord}
          </h1>
        </div>
      </div>
    </footer>
  );
}
