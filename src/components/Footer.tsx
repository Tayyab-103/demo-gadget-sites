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
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-primary text-white py-16 md:py-24" id="footer">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 mb-24 md:mb-32">
          
          {/* Left Column: CTA & Subscribe */}
          <div className="w-full lg:w-[40%] flex flex-col">
            <h2 className="text-3xl md:text-4xl font-normal leading-tight mb-8">
              Talk with <br />
              an expert at {siteConfig.brandName}
            </h2>
            
            {subscribed ? (
              <div className="flex items-center gap-3 text-secondary text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="9 12 11 14 15 10"></polyline></svg>
                Thanks for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail Address"
                  required
                  className="w-full bg-transparent border border-white/20 rounded-md px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-secondary transition-colors"
                />
                <button
                  type="submit"
                  className="bg-secondary text-primary font-medium text-sm px-8 py-3 rounded-md hover:brightness-110 transition-all whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Links Grid */}
          <div className="w-full lg:w-[60%] grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
            
            {/* Column 1 */}
            <div className="flex flex-col">
              <h4 className="text-white/50 text-xs mb-5 font-normal">Company</h4>
              <ul className="flex flex-col gap-3">
                <li><Link href="/" className="text-white text-sm hover:text-secondary transition-colors">Home</Link></li>
                <li><Link href="/shop" className="text-white text-sm hover:text-secondary transition-colors">Products</Link></li>
                <li><Link href="/about" className="text-white text-sm hover:text-secondary transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-white text-sm hover:text-secondary transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col">
              <h4 className="text-white/50 text-xs mb-5 font-normal">Collections</h4>
              <ul className="flex flex-col gap-3">
                <li><Link href="/product/product1" className="text-white text-sm hover:text-secondary transition-colors">18K Gold Solitaire Pendant</Link></li>
                <li><Link href="/product/product2" className="text-white text-sm hover:text-secondary transition-colors">18K Gold Pavé Statement Ring</Link></li>
                <li><Link href="/product/product3" className="text-white text-sm hover:text-secondary transition-colors">South Sea Pearl Drop Earrings</Link></li>
                <li><Link href="/shop" className="text-white text-sm hover:text-secondary transition-colors">All Fine Jewelry</Link></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col">
              <h4 className="text-white/50 text-xs mb-5 font-normal">Contact</h4>
              <ul className="flex flex-col gap-3">
                <li className="text-white text-sm break-all">{siteConfig.email}</li>
                <li className="text-white text-sm">{siteConfig.phone}</li>
                <li className="text-white text-sm break-words">{siteConfig.address}</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 lg:gap-4 pt-10 border-t border-white/10">
          
          {/* Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-6 sm:gap-20">
            {siteConfig.useImageLogo && siteConfig.footerLogoImage ? (
              <div className="bg-white rounded-md px-3 py-2 w-fit">
                <img
                  src={siteConfig.footerLogoImage}
                  alt={siteConfig.brandName}
                  className="max-h-[36px] w-auto object-contain block"
                />
              </div>
            ) : (
              <h4 className="text-white text-2xl font-black uppercase">{siteConfig.brandName}</h4>
            )}
            
            <span className="text-white/50 text-xs">
              &copy;{currentYear} {siteConfig.brandName}
            </span>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-2">
            <Link href="/privacy" className="text-white/50 text-xs hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-white/50 text-xs hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <div className="text-white/50 text-[10px] max-w-xs mt-2">
              <strong className="text-white/70">Note:</strong> Product images are for illustrative purposes; actual pieces may vary slightly.
            </div>
          </div>

          {/* Accepted Payment Methods */}
          <div className="flex flex-col gap-2.5">
            <span className="text-white/50 text-xs">We Accept</span>
            <div className="flex items-center gap-2.5">
              <img src="/img/visa.png" alt="Visa" className="h-6 w-auto rounded-sm" />
              <img src="/img/mastercard.png" alt="Mastercard" className="h-6 w-auto rounded-sm" />
            </div>
          </div>

          {/* All Rights Reserved */}
          <div className="text-white/50 text-xs">
            All Rights Reserved.
          </div>

        </div>

      </div>
    </footer>
  );
}
