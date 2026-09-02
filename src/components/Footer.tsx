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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-neutral-bg text-primary pt-10 sm:pt-14 md:pt-16 pb-8 sm:pb-10 border-t border-black/8 relative overflow-hidden" id="footer">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* 3 Columns Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-start relative pb-8 sm:pb-12">
          
          {/* Column 1: QUICK LINKS */}
          <div className="sm:col-span-1 md:col-span-4 lg:col-span-4 flex flex-col">
            <h4 className="font-serif font-normal text-base sm:text-lg md:text-xl uppercase tracking-[0.04em] text-primary mb-3 sm:mb-5">
              QUICK LINKS
            </h4>
            <ul className="flex flex-col gap-2.5 sm:gap-3">
              <li>
                <Link href="/" className="text-xs sm:text-[0.78rem] font-bold uppercase tracking-[0.16em] text-neutral-text/75 hover:text-primary transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-xs sm:text-[0.78rem] font-bold uppercase tracking-[0.16em] text-neutral-text/75 hover:text-primary transition-colors">
                  PRODUCTS
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-xs sm:text-[0.78rem] font-bold uppercase tracking-[0.16em] text-neutral-text/75 hover:text-primary transition-colors">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs sm:text-[0.78rem] font-bold uppercase tracking-[0.16em] text-neutral-text/75 hover:text-primary transition-colors">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: OUR PRODUCTS */}
          <div className="sm:col-span-1 md:col-span-4 lg:col-span-4 flex flex-col">
            <h4 className="font-serif font-normal text-base sm:text-lg md:text-xl uppercase tracking-[0.04em] text-primary mb-3 sm:mb-5">
              OUR PRODUCTS
            </h4>
            <ul className="flex flex-col gap-2.5 sm:gap-3">
              <li>
                <Link href="/product/product1" className="text-xs sm:text-[0.78rem] font-bold uppercase tracking-[0.16em] text-neutral-text/75 hover:text-primary transition-colors">
                  THROW BLANKET
                </Link>
              </li>
              <li>
                <Link href="/product/product2" className="text-xs sm:text-[0.78rem] font-bold uppercase tracking-[0.16em] text-neutral-text/75 hover:text-primary transition-colors">
                  CERAMIC LAMP
                </Link>
              </li>
              <li>
                <Link href="/product/product3" className="text-xs sm:text-[0.78rem] font-bold uppercase tracking-[0.16em] text-neutral-text/75 hover:text-primary transition-colors">
                  TRAVERTINE TRAY
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-xs sm:text-[0.78rem] font-bold uppercase tracking-[0.16em] text-neutral-text/75 hover:text-primary transition-colors">
                  ALL PRODUCTS
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: NEWSLETTER, PAYMENT LOGOS & SCROLL TO TOP */}
          <div className="sm:col-span-2 md:col-span-4 lg:col-span-4 flex flex-col justify-between h-full">
            <div>
              <h4 className="font-serif font-normal text-base sm:text-lg md:text-xl uppercase tracking-[0.04em] text-primary mb-3 sm:mb-5">
                NEWSLETTER
              </h4>

              {subscribed ? (
                <div className="text-xs font-bold uppercase tracking-wider text-green-800 bg-green-50 p-3.5 rounded-xl border border-green-200">
                  Thank you for subscribing.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="relative w-full max-w-sm">
                  <div className="flex items-center border-b border-black/20 focus-within:border-primary transition-colors pb-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ENTER YOUR EMAIL"
                      required
                      className="w-full bg-transparent text-xs uppercase tracking-[0.18em] font-medium text-neutral-text placeholder:text-neutral-text/40 focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="text-primary hover:text-neutral-text/70 transition-colors p-1 cursor-pointer"
                      aria-label="Subscribe"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </button>
                  </div>
                </form>
              )}

              {/* Payment Method Badges Positioned Right Below Newsletter */}
              <div className="mt-6 sm:mt-8">
                <span className="text-[0.62rem] sm:text-[0.66rem] font-bold uppercase tracking-[0.18em] text-neutral-text/50 block mb-2.5">
                  ACCEPTED PAYMENTS
                </span>
                <div className="flex items-center gap-2.5" aria-label="Accepted Payment Methods">
                  {/* MasterCard Button */}
                  <div className="w-[52px] h-[33px] sm:w-[58px] sm:h-[36px] bg-[#163458] rounded-[5px] flex items-center justify-center shadow-xs overflow-hidden transition-transform hover:scale-105 select-none" title="MasterCard">
                    <svg viewBox="0 0 60 40" className="w-full h-full p-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="23" cy="17" r="12" fill="#EB001B" />
                      <circle cx="37" cy="17" r="12" fill="#F79E1B" />
                      {/* Intersection pattern */}
                      <path d="M30 7.6a12 12 0 0 0-3.8 9.4 12 12 0 0 0 3.8 9.4 12 12 0 0 0 3.8-9.4 12 12 0 0 0-3.8-9.4z" fill="#FF5F00" />
                      <line x1="25" y1="11.5" x2="35" y2="11.5" stroke="#163458" strokeWidth="0.8" />
                      <line x1="23.5" y1="14.2" x2="36.5" y2="14.2" stroke="#163458" strokeWidth="0.8" />
                      <line x1="23" y1="17" x2="37" y2="17" stroke="#163458" strokeWidth="0.8" />
                      <line x1="23.5" y1="19.8" x2="36.5" y2="19.8" stroke="#163458" strokeWidth="0.8" />
                      <line x1="25" y1="22.5" x2="35" y2="22.5" stroke="#163458" strokeWidth="0.8" />
                      {/* Text */}
                      <text x="30" y="34" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontStyle="italic" fontSize="7.8" textAnchor="middle" letterSpacing="0.2">
                        MasterCard
                      </text>
                    </svg>
                  </div>

                  {/* VISA Button */}
                  <div className="w-[52px] h-[33px] sm:w-[58px] sm:h-[36px] bg-[#2257a6] rounded-[5px] flex items-center justify-center shadow-xs overflow-hidden transition-transform hover:scale-105 select-none" title="VISA">
                    <svg viewBox="0 0 60 40" className="w-full h-full p-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g transform="translate(6, 8)">
                        {/* Gold flick on top of V */}
                        <path d="M 0 3.5 L 4.5 3.5 L 2.5 10 Z" fill="#FAA61A" />
                        {/* Visa text */}
                        <text x="24" y="19" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontStyle="italic" fontSize="21" textAnchor="middle" letterSpacing="1">
                          VISA
                        </text>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll To Top Button */}
            <div className="flex justify-end mt-6 sm:mt-8">
              <button
                onClick={scrollToTop}
                className="w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-black/15 bg-white/40 hover:bg-white text-primary flex items-center justify-center transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer group"
                aria-label="Scroll to top"
              >
                <span className="text-base sm:text-lg font-bold group-hover:-translate-y-1 transition-transform">
                  ↑
                </span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal Disclosures Bar */}
        <div className="border-t border-black/10 pt-5 sm:pt-7 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[0.65rem] sm:text-[0.68rem] font-medium text-neutral-text/60 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1">
            <span>&copy; {currentYear} {siteConfig.brandName}. All Rights Reserved.</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>Operated by {siteConfig.corpName}</span>
          </div>

          <div className="flex items-center gap-5 sm:gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
