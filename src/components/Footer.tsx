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
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#090c10] text-gray-300 pt-16 sm:pt-20 border-t border-gray-800 relative overflow-hidden font-sans" id="footer">
      {/* Background Ambient Flare */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ────────────────── TOP ROW: BRAND INFO & NEWSLETTER ────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-12">
          {/* Left Column: Logo & Mission Statement (Cols 7) */}
          <div className="lg:col-span-7 flex flex-col">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gray-800 to-gray-700 flex items-center justify-center text-white shadow-md flex-shrink-0 border border-gray-700">
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
                  className="text-red-500"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                  <circle cx="12" cy="12" r="3" fill="#ef4444" stroke="#ffffff" strokeWidth="1.5" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-black italic tracking-tight text-white">
                  Torque <span className="text-red-500">Hollow</span>
                </span>
                <span className="text-[0.62rem] font-bold tracking-[0.2em] text-gray-400 uppercase">
                  AUTOMOTIVE WORKS
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-xl font-normal">
              Pro-grade automotive components, precision engineering, and direct OEM fitment backed by our 60-day satisfaction guarantee.
            </p>
          </div>

          {/* Right Column: Newsletter Box (Cols 5) */}
          <div className="lg:col-span-5 flex flex-col">
            <h3 className="text-sm font-bold text-white mb-3">
              Newsletter
            </h3>

            {subscribed ? (
              <div className="bg-green-950/60 border border-green-600/50 text-green-400 text-xs font-bold px-4 py-3 rounded-lg mb-3">
                ✓ Thank you for subscribing to the Driver&apos;s Club!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-0 w-full mb-3 shadow-md">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="flex-1 bg-[#121620] border border-gray-700 rounded-l-md px-4 py-2.5 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-r-md transition-colors cursor-pointer whitespace-nowrap h-full"
                >
                  Submit
                </button>
              </form>
            )}

            <p className="text-[0.72rem] text-gray-400 leading-relaxed font-normal">
              Get updates on new part drops, flash sales, and exclusive volume bundle discounts.
            </p>
          </div>
        </div>

        {/* ────────────────── MIDDLE ROW: STREAMLINED NAVIGATION (Main Pages, FAQs, Guarantee) ────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-t border-gray-800">
          {/* Column 1: Main Pages */}
          <div className="flex flex-col">
            <h4 className="text-sm font-bold text-white mb-4">
              Main Pages
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-red-500 transition-colors">Shop Catalog</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-red-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-500 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Help & Guarantee */}
          <div className="flex flex-col">
            <h4 className="text-sm font-bold text-white mb-4">
              Help &amp; Guarantee
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <Link href="/#faq" className="hover:text-red-500 transition-colors">FAQs</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-red-500 transition-colors">60-Day Guarantee</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-red-500 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-red-500 transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect With Us */}
          <div className="flex flex-col">
            <h4 className="text-sm font-bold text-white mb-4">
              Connect With Us
            </h4>
            <div className="space-y-2 text-xs text-gray-400 mb-4">
              <a href={`mailto:${siteConfig.email}`} className="block hover:text-red-500 truncate">
                {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone}`} className="block hover:text-red-500 font-bold text-white">
                {siteConfig.phone}
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5">
              <a
                href="#"
                aria-label="X / Twitter"
                className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors shadow-sm"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors shadow-sm"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors shadow-sm"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
            {/* Payment Methods */}
            <div className="mt-4 pt-3 border-t border-gray-800/80">
              <span className="text-[0.68rem] font-bold text-gray-400 uppercase tracking-wider block mb-2">
                Accepted Cards
              </span>
              <div className="flex items-center gap-2">
                <div className="bg-white rounded-md px-2.5 py-1 flex items-center justify-center h-7 shadow-xs">
                  <img src="/img/visa.png" alt="Visa" className="h-3.5 w-auto object-contain" />
                </div>
                <div className="bg-white rounded-md px-2.5 py-1 flex items-center justify-center h-7 shadow-xs">
                  <img src="/img/mastercard.png" alt="Mastercard" className="h-4.5 w-auto object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ────────────────── BOTTOM COPYRIGHT & COMPLIANCE ────────────────── */}
        <div className="pt-6 pb-8 text-center text-xs text-gray-500 font-normal border-t border-gray-800/80">
          <p>
            &copy; {currentYear} {siteConfig.brandName}. All Rights Reserved.
          </p>
          <p className="text-[0.68rem] text-gray-500 mt-1">
            Billing statement descriptor: <strong className="text-gray-400">{siteConfig.descriptor}</strong> &bull; Operated by {siteConfig.corpName}.
          </p>
        </div>
      </div>

      {/* ────────────────── BOTTOM STATUS BAR ────────────────── */}
      <div className="w-full h-10 sm:h-12 bg-[#06080b] flex items-center justify-between px-6 border-t border-gray-900 text-[0.68rem] text-gray-400">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>US Fulfillment Centers Active &bull; Same-Day Dispatch</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-red-500 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-red-500 transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-red-500 transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
