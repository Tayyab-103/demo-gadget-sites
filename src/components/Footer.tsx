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
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-white/10">
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

          {/* Col 4: Foundry Guarantees */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">
              Our Commitments
            </h5>
            <ul className="flex flex-col gap-2 text-xs text-white/70">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                Lifetime Forging Warranty
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                60-Day Field Trial
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                UPS Express Shipping
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                100% Plastic-Free Packaging
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            &copy; {currentYear} {siteConfig.brandName}. All rights reserved. Operating under {siteConfig.corpName}.
          </div>
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
        </div>

      </div>
    </footer>
  );
}
