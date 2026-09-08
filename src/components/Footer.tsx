"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0F0820] text-white overflow-hidden" id="footer">

      {/* Top: Scalloped wave from body */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 sm:h-16 md:h-20 fill-current text-white">
          <path d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,10 1440,40 L1440,0 L0,0 Z" />
        </svg>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] flex items-center justify-center shadow-lg shadow-purple-900/40 text-2xl">
                👶
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight leading-none block">
                  {siteConfig.brandName}
                </span>
                <span className="text-[0.62rem] text-purple-400 font-bold tracking-widest uppercase">
                  Organic Nursery Essentials
                </span>
              </div>
            </div>

            <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-sm font-normal">
              We believe every baby deserves the purest start. From organic muslin bibs to hand-carved beechwood teethers — crafted with intention, love, and nature.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-2.5 mb-6">
              <a href={`mailto:${siteConfig.email}`} className="text-xs text-purple-300 hover:text-white transition-colors font-medium flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center text-[0.65rem]">✉</span>
                {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone}`} className="text-xs text-purple-300 hover:text-white transition-colors font-medium flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center text-[0.65rem]">📞</span>
                {siteConfig.phone}
              </a>
              <div className="text-xs text-white/50 font-medium flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center text-[0.65rem]">📍</span>
                {siteConfig.address}
              </div>
            </div>
          </div>

          {/* Nav Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Dynamic Products Column */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-4">
                Our Products
              </h4>
              <ul className="flex flex-col gap-2.5">
                {products.map((product) => (
                  <li key={product.id}>
                    <Link
                      href={`/product/${product.id}`}
                      className="text-xs text-white/55 hover:text-white transition-colors font-medium flex items-center gap-1.5 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-purple-500 group-hover:bg-white transition-colors flex-shrink-0" />
                      <span className="line-clamp-1">{product.name}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/shop"
                    className="text-xs text-[#A78BFA] hover:text-white transition-colors font-bold flex items-center gap-1.5 group mt-1"
                  >
                    <span>View All Products →</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-4">
                Company
              </h4>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <Link
                    href="/about"
                    className="text-xs text-white/55 hover:text-white transition-colors font-medium flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-purple-500 group-hover:bg-white transition-colors flex-shrink-0" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-xs text-white/55 hover:text-white transition-colors font-medium flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-purple-500 group-hover:bg-white transition-colors flex-shrink-0" />
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-xs text-white/55 hover:text-white transition-colors font-medium flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-purple-500 group-hover:bg-white transition-colors flex-shrink-0" />
                    Contact Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-4">
                Legal
              </h4>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <Link
                    href="/privacy"
                    className="text-xs text-white/55 hover:text-white transition-colors font-medium flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-purple-500 group-hover:bg-white transition-colors flex-shrink-0" />
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-xs text-white/55 hover:text-white transition-colors font-medium flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-purple-500 group-hover:bg-white transition-colors flex-shrink-0" />
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-xs text-white/55 hover:text-white transition-colors font-medium flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-purple-500 group-hover:bg-white transition-colors flex-shrink-0" />
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-xs text-white/55 hover:text-white transition-colors font-medium flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-purple-500 group-hover:bg-white transition-colors flex-shrink-0" />
                    Returns & Refunds
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Payment & Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-5">

          {/* Payment icons */}
          <div className="flex items-center gap-4">
            <span className="text-[0.65rem] text-white/40 font-bold uppercase tracking-wider">Secure Payments:</span>
            <div className="flex items-center gap-3">
              <div className="bg-white/10 rounded-lg px-3 py-1.5 flex items-center justify-center">
                <img src="/img/visa.png" alt="Visa" className="h-4 w-auto object-contain opacity-80" />
              </div>
              <div className="bg-white/10 rounded-lg px-3 py-1.5 flex items-center justify-center">
                <img src="/img/mastercard.png" alt="Mastercard" className="h-4 w-auto object-contain opacity-80" />
              </div>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-[0.68rem] text-white/40 font-medium text-center md:text-right">
            &copy; {currentYear} {siteConfig.brandName}. All Rights Reserved.&nbsp;
            <Link href="/privacy" className="hover:text-white/70 transition-colors underline-offset-2 hover:underline">Privacy</Link>
            &nbsp;&middot;&nbsp;
            <Link href="/terms" className="hover:text-white/70 transition-colors underline-offset-2 hover:underline">Terms</Link>
          </p>

        </div>
      </div>

      {/* Decorative background blobs in footer */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-purple-900/30 blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-violet-900/20 blur-2xl pointer-events-none -translate-x-1/2" />

    </footer>
  );
}
