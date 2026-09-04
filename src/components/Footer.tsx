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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-12 md:pt-16 pb-8 w-full bg-[#07241b] text-white/70 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Row */}
        <div className="flex flex-col lg:flex-row justify-between w-full gap-10 lg:gap-16 border-b border-white/10 pb-10">
          
          {/* Brand & Description Column */}
          <div className="lg:max-w-sm flex flex-col">
            <Link href="/" className="inline-flex flex-col group mb-4" style={{ textDecoration: "none" }}>
              {siteConfig.useImageLogo && siteConfig.footerLogoImage ? (
                <img
                  src={siteConfig.footerLogoImage}
                  alt={siteConfig.brandName}
                  className="max-h-8 w-auto object-contain brightness-0 invert"
                />
              ) : (
                <div className="flex flex-col">
                  <span className="text-2xl font-black tracking-tighter text-white uppercase leading-none flex items-baseline">
                    <span>VANTAGE</span>
                    <span className="inline-block w-2 h-2 rounded-full bg-[#10b981] ml-0.5" />
                  </span>
                  <span className="text-[0.62rem] font-black uppercase tracking-[0.28em] text-[#10b981] mt-1">
                    ATHLETIC WORKS
                  </span>
                </div>
              )}
            </Link>

            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Engineered high-performance compression wear and athletic apparel designed for athletes who demand peak endurance, precision fit, and uncompromising durability.
            </p>

            {/* Quick Contact Badges */}
            <div className="flex flex-col gap-1.5 text-xs text-white/60">
              <span className="font-medium text-white/90">{siteConfig.address}</span>
              <span>{siteConfig.phone} • {siteConfig.email}</span>
            </div>
          </div>

          {/* Right Navigation & Newsletter Grid */}
          <div className="flex-1 flex flex-col sm:flex-row items-start sm:justify-end gap-10 sm:gap-14 lg:gap-16">
            
            {/* Company / Navigation Links */}
            <div>
              <h2 className="font-bold mb-4 text-white text-sm uppercase tracking-wider">
                Company
              </h2>
              <ul className="text-sm space-y-2.5">
                <li>
                  <Link href="/" className="text-white/70 hover:text-[#10b981] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="text-white/70 hover:text-[#10b981] transition-colors">
                    All Apparel
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white/70 hover:text-[#10b981] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/70 hover:text-[#10b981] transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-white/70 hover:text-[#10b981] transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-white/70 hover:text-[#10b981] transition-colors">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter Subscription */}
            <div className="max-w-md w-full sm:w-auto">
              <h2 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
                Subscribe to our newsletter
              </h2>
              <div className="text-sm space-y-3">
                <p className="text-white/70 leading-relaxed text-sm">
                  The latest gear drops, training guides, and exclusive athlete discounts, sent to your inbox weekly.
                </p>

                {subscribed ? (
                  <div className="flex items-center gap-2 text-[#10b981] bg-[#10b981]/15 border border-[#10b981]/30 rounded-xl p-3 text-xs font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Thanks for subscribing! Check your inbox for 15% off.
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="border border-white/20 bg-white/10 placeholder-white/40 focus:ring-2 focus:ring-[#10b981] focus:border-[#10b981] outline-none w-full sm:w-64 h-10 rounded-lg px-3.5 text-sm text-white transition-all shadow-xs"
                    />
                    <button
                      type="submit"
                      className="bg-[#10b981] hover:bg-[#0d9668] text-[#07241b] font-black h-10 px-5 rounded-lg text-sm transition-all duration-200 whitespace-nowrap shadow-xs cursor-pointer hover:brightness-110 uppercase tracking-wider text-xs"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p className="text-center sm:text-left">
            Copyright {currentYear} © <span className="font-semibold text-white/80">{siteConfig.brandName}</span>. All Rights Reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="text-[0.7rem] uppercase tracking-wider text-white/40 font-medium">Secured:</span>
            <img src="/img/visa.png" alt="Visa" className="h-5 w-auto rounded-xs bg-white p-0.5" />
            <img src="/img/mastercard.png" alt="Mastercard" className="h-5 w-auto rounded-xs bg-white p-0.5" />
          </div>
        </div>
      </div>
    </footer>
  );
}
