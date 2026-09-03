"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

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
    <footer className="bg-primary text-white pt-16 pb-12 border-t border-white/10" id="footer">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Top Newsletter & Brand Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 pb-16 border-b border-white/10">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-secondary text-white flex items-center justify-center font-serif text-lg font-bold">
                TW
              </div>
              <div>
                <span className="font-extrabold text-xl uppercase tracking-tight text-white font-serif block">
                  {siteConfig.brandName}
                </span>
                <span className="text-[0.62rem] font-bold uppercase tracking-[0.25em] text-secondary">
                  Artisan Hand Tools • Est. 1994
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              Hand-forged carbon steel and sustainable hardwood garden instruments crafted for a lifetime of growing, pruning, and soil preparation.
            </p>
          </div>

          {/* Newsletter Box */}
          <div className="w-full lg:w-auto min-w-[320px] max-w-md">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-2 font-serif">
              Join The Gardeners Guild
            </h4>
            <p className="text-xs text-white/60 mb-4">
              Receive seasonal tool maintenance tips, planting guides, and 10% off your first bundle.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2.5 text-secondary text-xs font-bold py-3">
                <span className="w-5 h-5 rounded-full bg-secondary text-white flex items-center justify-center text-xs">✓</span>
                Welcome to the guild! Check your inbox shortly.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  required
                  className="flex-1 bg-white/10 border border-white/20 rounded-full px-4 py-3 text-xs text-white placeholder:text-white/40 focus:outline-none focus:border-secondary transition-colors"
                />
                <button
                  type="submit"
                  className="bg-secondary text-white font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full hover:brightness-110 transition-all cursor-pointer whitespace-nowrap shadow-sm"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-12 border-b border-white/10">
          {/* Col 1: 4 Core Pages Navigation */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">
              Navigation
            </h5>
            <ul className="flex flex-col gap-2.5 text-xs text-white/80">
              <li>
                <Link href="/" className="hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-secondary transition-colors">
                  Shop All Tools
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors">
                  Contact &amp; Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Products */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">
              Foundry Products
            </h5>
            <ul className="flex flex-col gap-2.5 text-xs text-white/80">
              {products.map((p) => (
                <li key={p.id}>
                  <Link href={`/product/${p.id}`} className="hover:text-secondary transition-colors line-clamp-1">
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Workshop Contact */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">
              Foundry Workshop
            </h5>
            <ul className="flex flex-col gap-2.5 text-xs text-white/80">
              <li>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-secondary transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="break-all">
                <a href={`mailto:${siteConfig.email}`} className="hover:text-secondary transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-white/60 leading-relaxed">
                {siteConfig.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Payment Strip */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-white/50">
          <div>
            &copy; {currentYear} {siteConfig.brandName}. All rights reserved. Operating under {siteConfig.corpName}.
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-6">
            <div className="flex items-center gap-6">
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="hover:text-white transition-colors">
                Support
              </Link>
            </div>

            {/* Payment Logos on Right */}
            <div className="flex items-center gap-3">
              {/* MasterCard Badge */}
              <div className="hover:opacity-95 transition-opacity" title="MasterCard Accepted">
                <svg
                  className="h-8 sm:h-9 w-auto rounded-[5px] shadow-sm"
                  viewBox="0 0 68 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="MasterCard"
                >
                  <rect width="68" height="44" rx="6" fill="#142B4E" />
                  <circle cx="26" cy="22" r="13" fill="#EB001B" />
                  <circle cx="42" cy="22" r="13" fill="#F79E1B" />
                  <path
                    d="M34 11.8C36.8 14.3 38.6 17.9 38.6 22C38.6 26.1 36.8 29.7 34 32.2C31.2 29.7 29.4 26.1 29.4 22C29.4 17.9 31.2 14.3 34 11.8Z"
                    fill="#FF5F00"
                  />
                  <text
                    x="34"
                    y="25"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontSize="7.5"
                    fontFamily="system-ui, -apple-system, sans-serif"
                    fontWeight="700"
                    fontStyle="italic"
                    letterSpacing="-0.2px"
                  >
                    MasterCard
                  </text>
                </svg>
              </div>

              {/* VISA Badge */}
              <div className="hover:opacity-95 transition-opacity" title="VISA Accepted">
                <svg
                  className="h-8 sm:h-9 w-auto rounded-[5px] shadow-sm"
                  viewBox="0 0 68 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="VISA"
                >
                  <rect width="68" height="44" rx="6" fill="#2B53A7" />
                  <g transform="translate(13.5, 13.5) scale(0.64)">
                    <path
                      d="M24.8 2.2L16.2 22.8H10.7L6.5 4.9C6.2 3.8 5.4 3.0 4.4 2.6C2.7 1.7 0.9 1.1 0 0.8L0.1 0.4H9C10.2 0.4 11.2 1.2 11.5 2.5L13.7 14.2L19.4 0.4H24.8V2.2Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M4.4 2.6C5.4 3.0 6.2 3.8 6.5 4.9L10.7 22.8H5.2L0.1 0.4H0C0.9 1.1 2.7 1.7 4.4 2.6Z"
                      fill="#F7A600"
                    />
                    <path
                      d="M31.2 0.4H26.0L21.9 22.8H27.1L31.2 0.4Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M45.1 6.5C45.0 3.7 42.6 2.2 39.4 2.2C35.8 2.2 33.3 4.1 33.3 6.7C33.3 8.7 35.1 9.9 36.5 10.6C37.9 11.3 38.4 11.8 38.4 12.4C38.4 13.4 37.2 13.8 36.1 13.8C34.2 13.8 33.1 13.5 31.5 12.8L30.8 12.5L30.1 16.6C31.2 17.1 33.3 17.6 35.4 17.6C40.4 17.6 43.6 15.1 43.6 11.4C43.6 6.8 37.2 6.5 37.2 4.6C37.2 4.0 37.9 3.3 39.4 3.3C40.7 3.3 41.7 3.6 42.4 3.9L42.8 4.1L45.1 6.5Z"
                      fill="#FFFFFF"
                    />
                    <path
                      d="M58.5 0.4H54.4C53.1 0.4 52.1 1.2 51.6 2.4L44.1 22.8H49.5L50.6 19.8H57.2L57.8 22.8H62.6L58.5 0.4ZM52.0 15.9L54.7 8.5L56.2 15.9H52.0Z"
                      fill="#FFFFFF"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
