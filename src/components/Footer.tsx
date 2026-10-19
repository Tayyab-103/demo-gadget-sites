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

  const linkClass = "text-sm text-muted hover:text-ink transition-colors";

  return (
    <footer className="bg-neutral-bg border-t border-line" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-line">
          {/* Brand + newsletter */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-primary text-primary-text flex items-center justify-center text-lg font-extrabold">
                {siteConfig.brandName.charAt(0)}
              </span>
              <span className="text-lg font-extrabold text-ink">{siteConfig.brandName}</span>
            </div>
            <p className="mt-4 text-sm text-muted leading-relaxed max-w-sm">
              Well-made whisks, kitchen scales and shears for everyday home cooking. Free {siteConfig.shippingCarrier}{" "}
              shipping and {siteConfig.trialPeriod}-day returns.
            </p>

            <div className="mt-7 max-w-md">
              <h3 className="text-sm font-bold text-ink">Kitchen notes in your inbox</h3>
              <p className="text-xs text-muted mt-1 mb-3">Occasional tips, care guides and new-tool news. Unsubscribe anytime.</p>
              {subscribed ? (
                <p className="text-sm font-semibold text-ink">Thanks &mdash; you&rsquo;re on the list.</p>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="field rounded-full! flex-1"
                  />
                  <button type="submit" className="btn-primary py-3!">
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-ink mb-4">Shop</h4>
              <ul className="flex flex-col gap-2.5">
                {products.map((p) => (
                  <li key={p.id}>
                    <Link href={`/product/${p.id}`} className={linkClass}>{p.name}</Link>
                  </li>
                ))}
                <li><Link href="/shop" className={linkClass}>All tools</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-ink mb-4">Company</h4>
              <ul className="flex flex-col gap-2.5">
                <li><Link href="/" className={linkClass}>Home</Link></li>
                <li><Link href="/about" className={linkClass}>Our story</Link></li>
                <li><Link href="/contact" className={linkClass}>Contact</Link></li>
                <li><Link href="/privacy" className={linkClass}>Privacy Policy</Link></li>
                <li><Link href="/terms" className={linkClass}>Terms &amp; Conditions</Link></li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-ink mb-4">Support</h4>
              <ul className="flex flex-col gap-2.5 text-sm text-muted">
                <li><a href={`tel:${siteConfig.phone}`} className={linkClass}>{siteConfig.phone}</a></li>
                <li className="break-all"><a href={`mailto:${siteConfig.email}`} className={linkClass}>{siteConfig.email}</a></li>
                <li className="leading-relaxed">{siteConfig.address}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-muted">
          <p className="text-center md:text-left">
            &copy; {currentYear} {siteConfig.brandName}. Operated by {siteConfig.corpName}. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center bg-surface border border-line rounded-md px-2.5 h-8" title="Mastercard accepted">
              <svg width="34" height="22" viewBox="0 0 54 36" xmlns="http://www.w3.org/2000/svg">
                <circle cx="21" cy="18" r="11" fill="#EB001B" />
                <circle cx="33" cy="18" r="11" fill="#F79E1B" />
                <path d="M27 9.6a11 11 0 0 1 0 16.8 11 11 0 0 1 0-16.8z" fill="#FF5F00" />
              </svg>
            </span>
            <span className="flex items-center justify-center bg-surface border border-line rounded-md px-2.5 h-8" title="Visa accepted">
              <span className="text-[0.9rem] font-black italic tracking-tight text-[#1A1F71]">VISA</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
