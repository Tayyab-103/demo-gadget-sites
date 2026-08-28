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

  const brandParts = siteConfig.brandName.split(" ");
  const firstTwoWords = brandParts.slice(0, 2).join(" ");

  return (
    <footer className="bg-[#0B0D0F] text-white pt-16 md:pt-20 pb-6 relative overflow-hidden border-t border-white/5" id="footer">
      
      {/* Immersive Newsletter Split Panel */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 pb-12 mb-12 border-b border-white/5 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8">
          
          <div className="max-w-lg">
            <span className="text-[0.62rem] md:text-[0.68rem] font-bold uppercase tracking-[0.22em] text-secondary mb-2.5 block">
              Pioneering Wilderness Pace
            </span>
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white leading-tight">
              Stay in the loop
            </h2>
            <p className="text-white/55 text-xs sm:text-sm mt-2 leading-relaxed">
              Trail guides, active gear releases, and technology updates — straight to your inbox.
            </p>
          </div>

          <div className="flex items-center w-full lg:max-w-md">
            {subscribed ? (
              <div className="flex items-center gap-3 text-secondary text-sm font-bold bg-white/5 border border-secondary/20 py-4 px-6 rounded-2xl w-full backdrop-blur-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
                Telemetry Sync Complete. Thanks for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail Address"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3.5 text-xs sm:text-sm text-white placeholder:text-white/35 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/40 transition-all backdrop-blur-md"
                />
                <button
                  type="submit"
                  className="bg-secondary text-secondary-text font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full hover:brightness-110 shadow-lg shadow-secondary/15 transition-all whitespace-nowrap cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Main Link Columns */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 pb-16">
          
          {/* Column 1: Brand details & Social Connect */}
          <div className="col-span-2 md:col-span-1 flex flex-col">
            {siteConfig.useImageLogo && siteConfig.footerLogoImage ? (
              <div className="bg-white rounded-xl px-4 py-2.5 w-fit mb-5">
                <img
                  src={siteConfig.footerLogoImage}
                  alt={siteConfig.brandName}
                  className="max-h-8 w-auto object-contain block mix-blend-multiply"
                />
              </div>
            ) : (
              <span className="text-white text-base lg:text-sm xl:text-base font-black uppercase tracking-tight mb-5 block">
                {firstTwoWords}
                <span className="text-secondary">.</span>
              </span>
            )}
            
            <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-6 max-w-[240px]">
              Thoughtfully crafted sporting goods, engineered to withstand the extreme mountain elements.
            </p>
            
            {/* Glassmorphic Circular Social Icons */}
            <div className="flex items-center gap-3">
              {/* X / Twitter */}
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-secondary hover:border-secondary hover:bg-white/10 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300">
                <svg width="12" height="12" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0zM1.44.688h1.504l6.64 8.624H8.082z" fill="currentColor" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-secondary hover:border-secondary hover:bg-white/10 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-secondary hover:border-secondary hover:bg-white/10 hover:shadow-lg hover:shadow-secondary/5 transition-all duration-300">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>

          </div>

          {/* Column 2: Company */}
          <div className="flex flex-col">
            <h4 className="text-white/40 text-[0.62rem] font-bold uppercase tracking-[0.2em] mb-6">Company</h4>
            <ul className="flex flex-col gap-3.5 list-none m-0 p-0">
              <li>
                <Link href="/" className="group relative text-white/80 hover:text-secondary text-xs sm:text-sm font-semibold transition-colors duration-300">
                  Home
                  <span className="absolute bottom-[-2px] left-0 w-0 h-[1.5px] bg-secondary transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link href="/shop" className="group relative text-white/80 hover:text-secondary text-xs sm:text-sm font-semibold transition-colors duration-300">
                  Products
                  <span className="absolute bottom-[-2px] left-0 w-0 h-[1.5px] bg-secondary transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="group relative text-white/80 hover:text-secondary text-xs sm:text-sm font-semibold transition-colors duration-300">
                  About Brand
                  <span className="absolute bottom-[-2px] left-0 w-0 h-[1.5px] bg-secondary transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="group relative text-white/80 hover:text-secondary text-xs sm:text-sm font-semibold transition-colors duration-300">
                  Contact
                  <span className="absolute bottom-[-2px] left-0 w-0 h-[1.5px] bg-secondary transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Shop Categories */}
          <div className="flex flex-col">
            <h4 className="text-white/40 text-[0.62rem] font-bold uppercase tracking-[0.2em] mb-6">Gear Deck</h4>
            <ul className="flex flex-col gap-3.5 list-none m-0 p-0">
              <li>
                <Link href="/product/product1" className="group relative text-white/80 hover:text-secondary text-xs sm:text-sm font-semibold transition-colors duration-300">
                  Water Dumbbells
                  <span className="absolute bottom-[-2px] left-0 w-0 h-[1.5px] bg-secondary transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link href="/product/product2" className="group relative text-white/80 hover:text-secondary text-xs sm:text-sm font-semibold transition-colors duration-300">
                  Softball Pitcher Mitt
                  <span className="absolute bottom-[-2px] left-0 w-0 h-[1.5px] bg-secondary transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link href="/product/product3" className="group relative text-white/80 hover:text-secondary text-xs sm:text-sm font-semibold transition-colors duration-300">
                  Hollow Baseballs Bulk
                  <span className="absolute bottom-[-2px] left-0 w-0 h-[1.5px] bg-secondary transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link href="/shop" className="group relative text-white/80 hover:text-secondary text-xs sm:text-sm font-semibold transition-colors duration-300">
                  All Sporting Goods
                  <span className="absolute bottom-[-2px] left-0 w-0 h-[1.5px] bg-secondary transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Support Contacts */}
          <div className="flex flex-col">
            <h4 className="text-white/40 text-[0.62rem] font-bold uppercase tracking-[0.2em] mb-6">Telemetry &amp; Support</h4>
            <ul className="flex flex-col gap-3.5 list-none m-0 p-0">
              <li>
                <a href={`tel:${siteConfig.phone}`} className="group relative text-white/80 hover:text-secondary text-xs sm:text-sm font-semibold transition-colors duration-300 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 group-hover:text-secondary transition-colors"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="group relative text-white/80 hover:text-secondary text-xs sm:text-sm font-semibold transition-colors duration-300 flex items-center gap-2 break-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 group-hover:text-secondary transition-colors"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <Link href="/privacy" className="group relative text-white/80 hover:text-secondary text-xs sm:text-sm font-semibold transition-colors duration-300">
                  Privacy Policy
                  <span className="absolute bottom-[-2px] left-0 w-0 h-[1.5px] bg-secondary transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link href="/terms" className="group relative text-white/80 hover:text-secondary text-xs sm:text-sm font-semibold transition-colors duration-300">
                  Terms &amp; Conditions
                  <span className="absolute bottom-[-2px] left-0 w-0 h-[1.5px] bg-secondary transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar with payment badges and copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-white/40 text-[0.68rem] text-center md:text-left block">
              &copy; {currentYear} {siteConfig.brandName}. All Rights Reserved.
            </span>
            <span className="text-white/30 text-[0.58rem] text-center md:text-left block">
              Performance active gear. Labeled metrics are simulated and reflect lab testing indices.
            </span>
          </div>

          {/* Clean Payment Badges */}
          <div className="flex items-center gap-2 bg-white/[0.02] border border-white/5 py-1.5 px-3.5 rounded-full select-none">
            <span className="text-white/35 text-[0.58rem] font-bold uppercase tracking-wider mr-2">Secure Checkout</span>
            <img src="/img/visa.png" alt="Visa" className="h-4.5 w-auto rounded-sm opacity-60 hover:opacity-100 transition-opacity" />
            <img src="/img/mastercard.png" alt="Mastercard" className="h-4.5 w-auto rounded-sm opacity-60 hover:opacity-100 transition-opacity" />
          </div>
        </div>

      </div>

      {/* Giant Background Watermark Outline Typography */}
      <div className="select-none text-center pointer-events-none mt-12 overflow-hidden w-full relative z-0">
        <span className="text-[10vw] font-black uppercase text-white/[0.015] tracking-[0.25em] leading-none block whitespace-nowrap select-none font-sans">
          SUMMIT HOLLOW
        </span>
      </div>

    </footer>
  );
}
