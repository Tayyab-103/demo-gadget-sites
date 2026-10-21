"use client";

import React, { useState } from "react";
import Link from "next/link";
import productsData from "../../config/products.json";
import { Product } from "@/types";
import { siteConfig, brandParts } from "@/lib/brand";
import PawIcon from "@/components/PawIcon";

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
    <footer className="bg-brand-gradient-soft border-t border-line" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter band */}
        <div className="py-10 sm:py-12 border-b border-ink/10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink">Join the pack newsletter</h3>
            <p className="text-sm text-muted mt-1">Pet care tips, new arrivals and restock alerts. No spam — unsubscribe anytime.</p>
          </div>
          {subscribed ? (
            <p className="text-sm font-bold text-primary-deep bg-white rounded-full px-5 py-3.5 lg:justify-self-end">
              ✓ You&apos;re subscribed — welcome to the pack!
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full lg:max-w-md lg:justify-self-end">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="field rounded-full flex-1"
              />
              <button type="submit" className="bg-ink text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-primary-deep transition-colors cursor-pointer whitespace-nowrap">
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* Columns */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-12 gap-10">
          <div className="col-span-2 md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="w-11 h-11 rounded-2xl bg-brand-gradient text-primary-text flex items-center justify-center">
                <PawIcon className="w-6 h-6" />
              </span>
              <span>
                <span className="block font-display text-xl font-semibold text-ink leading-none">{brandParts.main}</span>
                <span className="block text-[0.6rem] font-bold uppercase tracking-[0.22em] text-primary-deep mt-1">{brandParts.sub}</span>
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed mt-5 max-w-sm">
              Everyday grooming, play and walking essentials for dogs and cats — shipped free and backed by our{" "}
              {siteConfig.trialPeriod}-day happiness guarantee.
            </p>
            <div className="flex items-center gap-2 mt-6">
              <img src="/img/visa.svg" alt="Visa" className="h-8 w-auto rounded bg-white p-1 border border-line" />
              <img src="/img/mastercard.svg" alt="Mastercard" className="h-8 w-auto rounded bg-white p-1 border border-line" />
              <span className="text-xs text-muted ml-2 flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <rect x="4" y="11" width="16" height="10" rx="2" />
                  <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                </svg>
                SSL secure checkout
              </span>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-ink mb-4">Shop</h4>
            <ul className="space-y-3 text-sm text-muted">
              {products.map((p) => (
                <li key={p.id}>
                  <Link href={`/product/${p.id}`} className="hover:text-ink transition-colors">
                    {p.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/shop" className="font-bold text-primary-deep hover:text-ink transition-colors">All products →</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-ink mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li><Link href="/about" className="hover:text-ink transition-colors">About us</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-ink transition-colors">How it works</Link></li>
              <li><Link href="/#faq" className="hover:text-ink transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-ink transition-colors">Contact</Link></li>
              <li><Link href="/terms" className="hover:text-ink transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-ink transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-ink mb-4">Support</h4>
            <ul className="space-y-3 text-sm text-muted">
              <li><a href={`tel:${siteConfig.phone}`} className="font-bold text-ink hover:text-primary-deep">{siteConfig.phone}</a></li>
              <li><a href={`mailto:${siteConfig.email}`} className="break-all hover:text-ink">{siteConfig.email}</a></li>
              <li>{siteConfig.address}</li>
              <li className="text-xs">Mon – Fri, 9:00 AM – 6:00 PM CT</li>
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="py-6 border-t border-ink/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted text-center md:text-left">
          <p>
            &copy; {currentYear} {siteConfig.brandName}. Operated by {siteConfig.corpName}. All rights reserved.
          </p>
          <p>
            Card statements will show: <strong className="text-ink">{siteConfig.descriptor}</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
