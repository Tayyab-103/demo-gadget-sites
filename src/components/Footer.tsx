"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-[#121820] text-[#FAF8F5] border-t border-[#C5A059]/30 pt-16 sm:pt-20 pb-12 sm:pb-14">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter Banner */}
        <div className="rounded-3xl bg-white/5 border border-[#C5A059]/30 p-6 sm:p-8 md:p-10 mb-14 sm:mb-16 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="max-w-md text-center md:text-left">
            <span className="text-[0.68rem] font-serif uppercase tracking-[0.24em] text-[#C5A059] font-bold">
              ✦ Patron Circle Access
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#FAF8F5] mt-1 tracking-tight">
              Join The Scribe Journal
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF8F5]/70 mt-1.5 font-normal">
              Receive private atelier editions, calligraphy guides, and 15% off your first acquisition.
            </p>
          </div>

          <div className="w-full md:w-auto">
            {subscribed ? (
              <div className="bg-[#C5A059]/20 border border-[#C5A059] text-[#C5A059] px-6 py-3 rounded-full text-xs font-serif font-bold">
                ✓ Welcome to the Patron Circle. Invitation sent.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your patron email..."
                  required
                  className="px-5 py-3 rounded-full bg-[#121820] border border-[#C5A059]/40 text-xs sm:text-sm text-[#FAF8F5] placeholder:text-[#FAF8F5]/40 focus:outline-none focus:border-[#C5A059] min-w-[240px] sm:min-w-[280px]"
                />
                <button
                  type="submit"
                  className="px-7 py-3 rounded-full bg-[#C5A059] text-[#121820] text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] transition-all cursor-pointer shadow-md text-center"
                >
                  Join Circle
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 pb-12 sm:pb-14 border-b border-[#C5A059]/20">
          
          {/* Brand Info */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group" style={{ textDecoration: "none" }}>
              <span className="w-8 h-8 rounded-full bg-[#C5A059] text-[#121820] flex items-center justify-center font-serif font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
                ✦
              </span>
              <span className="font-serif font-bold text-base tracking-wider text-[#FAF8F5] uppercase">
                {siteConfig.brandName}
              </span>
            </Link>
            <p className="text-xs text-[#FAF8F5]/70 leading-relaxed font-normal mb-4">
              Artisanal fountain pens, bleedproof leather journals, and architectural brass desk suites crafted in Austin, Texas.
            </p>
            <div className="text-[0.68rem] text-[#C5A059] font-serif font-semibold">
              Descriptor: {siteConfig.descriptor}
            </div>
          </div>

          {/* Signature Products & Collections */}
          <div>
            <h4 className="font-serif font-bold text-sm text-[#FAF8F5] uppercase tracking-wider mb-4 border-b border-[#C5A059]/30 pb-1.5">
              Products
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF8F5]/75 font-normal">
              {products.map((p) => (
                <li key={p.id}>
                  <Link href={`/shop#${p.id}`} className="hover:text-[#C5A059] transition-colors">
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/shop" className="hover:text-[#C5A059] text-[#C5A059] font-serif font-semibold transition-colors flex items-center gap-1 mt-1">
                  <span>View All Collections</span>
                  <span>→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Atelier Heritage & Pages */}
          <div>
            <h4 className="font-serif font-bold text-sm text-[#FAF8F5] uppercase tracking-wider mb-4 border-b border-[#C5A059]/30 pb-1.5">
              The Atelier
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF8F5]/75 font-normal">
              <li>
                <Link href="/about" className="hover:text-[#C5A059] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-[#C5A059] transition-colors">
                  The Quillhaven Standard
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-[#C5A059] transition-colors">
                  Features &amp; Guarantee
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-[#C5A059] transition-colors">
                  Patron Reviews
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[#C5A059] transition-colors">
                  Help &amp; FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Patron Concierge & Legal */}
          <div>
            <h4 className="font-serif font-bold text-sm text-[#FAF8F5] uppercase tracking-wider mb-4 border-b border-[#C5A059]/30 pb-1.5">
              Patron Concierge
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF8F5]/75 font-normal">
              <li>
                <Link href="/contact" className="hover:text-[#C5A059] transition-colors">
                  Concierge Desk
                </Link>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-[#C5A059] transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[#C5A059] transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#C5A059] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#C5A059] transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment Badges (Visa & Mastercard Only) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F5]/60">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {siteConfig.brandName}. All Rights Reserved. Handcrafted in Austin, TX.
          </p>

          {/* Visa & Mastercard Logos from /img folder */}
          <div className="flex items-center gap-3">
            <img
              src="/img/visa.png"
              alt="Visa Accepted"
              className="h-7 sm:h-8 w-auto object-contain transition-transform duration-200 hover:scale-105"
            />
            <img
              src="/img/mastercard.png"
              alt="Mastercard Accepted"
              className="h-7 sm:h-8 w-auto object-contain transition-transform duration-200 hover:scale-105"
            />
          </div>
        </div>

      </div>
    </footer>
  );
}
