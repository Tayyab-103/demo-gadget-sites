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
    <footer className="relative overflow-hidden bg-primary pb-8 pt-16 text-white md:pt-24" id="footer">
      {/* Blueprint grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="pointer-events-none absolute -top-40 right-0 h-100 w-100 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-10">
        {/* Top: Newsletter CTA */}
        <div className="flex flex-col gap-8 border-b border-dashed border-white/15 pb-14 lg:flex-row lg:items-center lg:justify-between md:pb-16">
          <div className="max-w-md">
            <span className="eyebrow eyebrow-invert mb-4">Stay Wired In</span>
            <h2 className="text-2xl font-black uppercase leading-tight tracking-tight md:text-4xl">
              Get restock alerts &amp; trade pricing
            </h2>
          </div>

          {subscribed ? (
            <div className="flex items-center gap-3 text-secondary text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="9 12 11 14 15 10"></polyline></svg>
              Thanks for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex w-full max-w-md items-center gap-1.5 rounded-full border border-white/15 bg-white/5 p-1.5 backdrop-blur-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
                className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="flex-shrink-0 whitespace-nowrap rounded-full bg-secondary px-6 py-3 text-xs font-bold uppercase tracking-widest text-secondary-text transition-all hover:brightness-105"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-14 md:grid-cols-4 md:py-16">
          {/* Brand column */}
          <div className="col-span-2 flex flex-col md:col-span-1">
            <h4 className="mb-3 text-lg font-black uppercase text-white">{siteConfig.brandName}</h4>
            <p className="mb-5 max-w-xs text-sm text-white/50 leading-relaxed">
              Certified electrical parts and equipment for electricians, contractors, and DIYers.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href={`tel:${siteConfig.phone}`} className="text-white/70 hover:text-secondary transition-colors">{siteConfig.phone}</a>
              <a href={`mailto:${siteConfig.email}`} className="text-white/70 hover:text-secondary transition-colors break-all">{siteConfig.email}</a>
            </div>
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <h4 className="text-white/50 text-xs mb-5 font-bold uppercase tracking-widest">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="text-white text-sm hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/shop" className="text-white text-sm hover:text-secondary transition-colors">Products</Link></li>
              <li><Link href="/about" className="text-white text-sm hover:text-secondary transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-white text-sm hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="flex flex-col">
            <h4 className="text-white/50 text-xs mb-5 font-bold uppercase tracking-widest">Products</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/product/product1" className="text-white text-sm hover:text-secondary transition-colors">Copper Romex Wire</Link></li>
              <li><Link href="/product/product2" className="text-white text-sm hover:text-secondary transition-colors">Circuit Breakers</Link></li>
              <li><Link href="/product/product3" className="text-white text-sm hover:text-secondary transition-colors">LED Work Lights</Link></li>
              <li><Link href="/shop" className="text-white text-sm hover:text-secondary transition-colors">Shop All</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col">
            <h4 className="text-white/50 text-xs mb-5 font-bold uppercase tracking-widest">Legal</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/privacy" className="text-white text-sm hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white text-sm hover:text-secondary transition-colors">Terms &amp; Conditions</Link></li>
            </ul>
            <p className="mt-5 max-w-45 text-[0.68rem] leading-relaxed text-white/40">
              Product images are for illustrative purposes; actual parts may vary slightly.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-dashed border-white/15 pt-8 sm:flex-row">
          <span className="text-white/50 text-xs order-2 sm:order-1">
            &copy;{currentYear} {siteConfig.brandName}. All rights reserved.
          </span>

          {/* Accepted Payment Methods */}
          <div className="flex items-center gap-3 order-1 sm:order-2">
            <span className="text-white/50 text-xs font-semibold">We Accept</span>
            <div className="flex items-center gap-2">
              <img src="/img/visa.png" alt="Visa" className="h-9 w-14 rounded-xl bg-white object-contain p-2 shadow-sm" />
              <img src="/img/mastercard.png" alt="Mastercard" className="h-9 w-14 rounded-xl bg-white object-contain p-2 shadow-sm" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
