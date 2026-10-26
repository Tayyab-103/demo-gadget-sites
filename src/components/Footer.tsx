"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";
import BrandName from "@/components/BrandName";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#181818] text-[#FAF9F7] pt-16 pb-12 border-t border-white/5 relative overflow-hidden" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 pb-12 sm:pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Socials (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link
                href="/"
                aria-label={siteConfig.brandName}
                className="inline-block mb-5 text-white hover:text-secondary transition-colors"
              >
                <BrandName topClassName="text-xl sm:text-2xl" bottomClassName="text-[0.62rem] sm:text-[0.7rem]" />
              </Link>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
                Curated contemporary womenswear crafted with timeless silhouettes, premium natural fabrics, and effortless daily comfort.
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links (4 cols) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-5">
                About
              </h4>
              <ul className="space-y-3 text-xs tracking-wide">
                <li>
                  <Link href="/about" className="text-white/60 hover:text-white transition-colors">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/#collections" className="text-white/60 hover:text-white transition-colors">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link href="/shop" className="text-white/60 hover:text-white transition-colors">
                    Shop Catalog
                  </Link>
                </li>
                <li>
                  <Link href="/#journal" className="text-white/60 hover:text-white transition-colors">
                    Blog / Journal
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/60 hover:text-white transition-colors">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-5">
                Useful links
              </h4>
              <ul className="space-y-3 text-xs tracking-wide">
                <li>
                  <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
                    Terms of use
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/60 hover:text-white transition-colors">
                    Customer Support
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="text-white/60 hover:text-white transition-colors">
                    Shipping details
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="text-white/60 hover:text-white transition-colors">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 3: Newsletter Form (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-2">
              Newsletter
            </h4>
            <p className="text-white/60 text-xs leading-relaxed mb-6">
              Subscribe to be the first to hear about private deals, seasonal releases, and capsule collections.
            </p>

            {subscribed ? (
              <div className="bg-secondary/20 border border-secondary text-secondary p-4 rounded-xl text-xs flex items-center gap-2">
                <span>✓</span> Thank you for joining our community!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="flex rounded-full overflow-hidden border border-white/20 focus-within:border-secondary bg-white/5 transition-colors">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full bg-transparent px-5 py-3 text-xs text-white placeholder:text-white/40 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-secondary text-white px-6 text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center cursor-pointer"
                  >
                    <span>→</span>
                  </button>
                </div>
              </form>
            )}

            <div className="mt-8 pt-6 border-t border-white/10 text-white/50 text-[0.72rem] leading-relaxed">
              <div><strong className="text-white/80">Contact US:</strong> {siteConfig.phone}</div>
              <div><strong className="text-white/80">Address:</strong> {siteConfig.address}</div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50 text-center md:text-left">
          <div>
            &copy; {currentYear} {siteConfig.corpName}. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <span className="text-[0.7rem] uppercase tracking-wider">Payment methods:</span>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center h-6 shadow-xs">
                <img src="/img/visa.png" alt="Visa" className="h-8 w-auto object-contain" />
              </div>
              <div className="flex items-center justify-center h-6 shadow-xs">
                <img src="/img/mastercard.png" alt="Mastercard" className="h-8 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
