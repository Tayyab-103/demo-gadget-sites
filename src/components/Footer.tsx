"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const trustBadges = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    title: "100% Archival Standard",
    desc: "ASTM Class I & II Lightfastness"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    title: "Nationwide Dispatch",
    desc: `${siteConfig.shippingCarrier} Tracked (${siteConfig.shippingPeriod} Days)`
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11.5 14.5 15 9" />
      </svg>
    ),
    title: "60-Day Guarantee",
    desc: "Full Studio Satisfaction"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    title: "Bank-Grade Encryption",
    desc: "256-Bit SSL Payment Protection"
  }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
  };

  const logoNameParts = siteConfig.brandName.split(" ");
  const firstWord = logoNameParts[0] || "North";
  const secondWord = logoNameParts[1] || "Star";
  const trailingWords = logoNameParts.slice(2).join(" ") || "Art Supply Market";

  return (
    <footer className="bg-primary text-white border-t border-white/10 relative overflow-hidden" id="footer">
      
      {/* Background radial glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl" />

      {/* Top Value / Trust Strip */}
      <div className="border-b border-white/10 bg-white/3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-secondary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-secondary/15 text-secondary flex items-center justify-center flex-shrink-0">
                  {badge.icon}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">{badge.title}</h4>
                  <p className="text-[0.68rem] sm:text-xs text-white/55 mt-0.5">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        
        {/* Newsletter Subscription Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-white/8 via-white/5 to-white/8 border border-white/10 p-6 sm:p-10 mb-14 sm:mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-secondary block mb-2">
                Atelier Insider
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight leading-tight">
                Join the North Star Artist Collective
              </h3>
              <p className="text-white/70 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">
                Subscribe to receive seasonal archival releases, expert technique guides, and a <strong>15% studio discount</strong> on your first order.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="flex items-center gap-3 text-secondary text-sm font-bold bg-secondary/10 border border-secondary/30 p-4 rounded-2xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                  <span>Thank you for joining our atelier newsletter!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full bg-primary/80 border border-white/20 rounded-full px-5 py-3.5 text-xs sm:text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-secondary transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-secondary text-primary font-bold text-xs uppercase tracking-wider px-7 py-3.5 rounded-full hover:bg-white transition-all whitespace-nowrap cursor-pointer shadow-md hover:shadow-lg flex-shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14 sm:mb-16">
          
          {/* Brand & Identity Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-secondary text-primary flex items-center justify-center font-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-black uppercase tracking-tight text-white leading-none">
                  {firstWord} <span className="text-secondary">{secondWord}</span>
                </span>
                <span className="text-[0.62rem] uppercase tracking-widest text-white/50 mt-0.5">
                  {trailingWords}
                </span>
              </div>
            </Link>

            <p className="text-white/65 text-xs sm:text-sm leading-relaxed mt-2">
              Dedicated to supplying painters, illustrators, and craft creators with pure pigments, handcrafted brushes, and museum-grade archival supports.
            </p>

            <div className="flex flex-col gap-2.5 mt-2 text-xs text-white/75">
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2.5 hover:text-secondary transition-colors">
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-secondary text-xs">📞</span>
                <span>{siteConfig.phone}</span>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2.5 hover:text-secondary transition-colors break-all">
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-secondary text-xs">✉️</span>
                <span>{siteConfig.email}</span>
              </a>
              <div className="flex items-center gap-2.5 text-white/60">
                <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-secondary text-xs">📍</span>
                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 lg:col-start-6 flex flex-col">
            <h4 className="text-secondary text-xs uppercase tracking-[0.16em] font-bold mb-4">
              Atelier
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-white/75">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/shop" className="hover:text-white transition-colors">Art Supplies</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Atelier Heritage</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
              <li><Link href="/checkout" className="hover:text-white transition-colors">Secure Checkout</Link></li>
            </ul>
          </div>

          {/* Featured Collections */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-secondary text-xs uppercase tracking-[0.16em] font-bold mb-4">
              Featured Supplies
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-white/75">
              <li><Link href="/product/product1" className="hover:text-white transition-colors">MasterSeries Paint Set</Link></li>
              <li><Link href="/product/product2" className="hover:text-white transition-colors">Kolinsky Brush Suite</Link></li>
              <li><Link href="/product/product3" className="hover:text-white transition-colors">Primed Linen Canvas Kit</Link></li>
              <li><Link href="/shop" className="hover:text-white transition-colors">All Studio Bundles</Link></li>
            </ul>
          </div>

          {/* Assurance & Social */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-secondary text-xs uppercase tracking-[0.16em] font-bold mb-4">
              Studio Assurance
            </h4>
            <div className="bg-white/5 rounded-2xl p-4 border border-white/5 text-xs text-white/70 space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-secondary">✦</span>
                <span>MCC 5970 Certified Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-secondary">✦</span>
                <span>ASTM Archival Lightfast</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-secondary">✦</span>
                <span>Acid-Free Cotton &amp; Linen</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {["Instagram", "Pinterest", "YouTube"].map((plat) => (
                <span key={plat} className="text-[0.68rem] font-bold uppercase tracking-wider text-white/50 hover:text-secondary cursor-pointer transition-colors">
                  {plat}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Legal & Billing Descriptors */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/50">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center sm:text-left">
            <span>&copy; {currentYear} {siteConfig.brandName}. All rights reserved.</span>
            <span className="hidden sm:inline text-white/20">|</span>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>

          <div className="text-center md:text-right text-[0.68rem] text-white/40 max-w-md">
            Operated by <strong className="text-white/60">{siteConfig.corpName}</strong>. Card statement descriptor: <strong className="text-secondary font-mono">{siteConfig.descriptor}</strong>.
          </div>
        </div>

      </div>
    </footer>
  );
}
