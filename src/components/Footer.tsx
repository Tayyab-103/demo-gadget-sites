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
    <footer className="bg-neutral-bg text-primary pt-10 sm:pt-14 md:pt-20 pb-10 sm:pb-12 border-t border-black/8 relative overflow-hidden" id="footer">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Giant "CONTACT ( → ) US" Headline (Exact Screenshot Reproduction) */}
        <div className="py-4 sm:py-8 md:py-12 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-3 sm:gap-6 md:gap-10 hover:opacity-90 transition-opacity"
            aria-label="Contact Us"
          >
            <span className="font-serif font-normal text-3xl sm:text-5xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] uppercase tracking-[0.04em] text-primary leading-none">
              CONTACT
            </span>

            {/* Black Circular Button with Right Arrow */}
            <span className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-22 lg:h-22 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:bg-neutral-text transition-all duration-300 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:translate-x-1 transition-transform"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>

            <span className="font-serif font-normal text-3xl sm:text-5xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] uppercase tracking-[0.04em] text-primary leading-none">
              US
            </span>
          </Link>
        </div>

        {/* Thin Horizontal Divider */}
        <div className="w-full h-px bg-black/10 mt-6 sm:mt-10 md:mt-14 mb-8 sm:mb-12 md:mb-16" />

        {/* 3 Columns Layout (Matching Reference Screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-start relative pb-8 sm:pb-12">
          
          {/* Column 1: QUICK LINKS */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col">
            <h4 className="font-serif font-normal text-base sm:text-lg md:text-xl uppercase tracking-[0.04em] text-primary mb-4 sm:mb-6">
              QUICK LINKS
            </h4>
            <ul className="flex flex-col gap-2.5 sm:gap-3.5">
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
          <div className="md:col-span-4 lg:col-span-4 flex flex-col">
            <h4 className="font-serif font-normal text-base sm:text-lg md:text-xl uppercase tracking-[0.04em] text-primary mb-4 sm:mb-6">
              OUR PRODUCTS
            </h4>
            <ul className="flex flex-col gap-2.5 sm:gap-3.5">
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

          {/* Column 3: NEWSLETTER & SCROLL TO TOP */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col justify-between h-full">
            <div>
              <h4 className="font-serif font-normal text-base sm:text-lg md:text-xl uppercase tracking-[0.04em] text-primary mb-4 sm:mb-6">
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
            </div>

            {/* Scroll To Top Button (Matching Screenshot) */}
            <div className="flex justify-end mt-8 sm:mt-10 md:mt-12">
              <button
                onClick={scrollToTop}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-black/15 bg-white/40 hover:bg-white text-primary flex items-center justify-center transition-all duration-300 shadow-2xs hover:shadow-md cursor-pointer group"
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
        <div className="border-t border-black/10 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.65rem] sm:text-[0.68rem] font-medium text-neutral-text/60">
          <div>
            <span>&copy; {currentYear} {siteConfig.brandName}. All Rights Reserved.</span>
            <span className="mx-2">&bull;</span>
            <span>Operated by {siteConfig.corpName}</span>
          </div>

          <div className="flex items-center gap-6">
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
