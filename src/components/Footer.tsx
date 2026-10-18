"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";
import { BrandMark } from "@/components/Header";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop All Tools" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
];

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

  const linkClass = "text-sm text-white/70 hover:text-accent-light transition-colors";

  return (
    <footer className="bg-primary-dark text-white" id="footer">
      {/* Newsletter band */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-14 md:pt-20">
        <div className="rounded-[2rem] bg-primary border border-white/10 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="heading-serif text-2xl sm:text-3xl md:text-4xl leading-tight">
              Seasonal tips, straight to your <em className="text-accent-light">inbox</em>.
            </h3>
            <p className="mt-2 text-sm text-white/65">Planting calendars, tool-care guides and early access to bundle deals. No spam.</p>
          </div>
          {subscribed ? (
            <div className="flex items-center gap-3 text-accent-light text-sm font-semibold bg-white/5 rounded-full px-5 py-4 border border-white/10">
              <span>✓</span> You&apos;re subscribed — welcome to the garden!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                aria-label="Email address"
                className="flex-1 min-w-0 bg-white/10 border border-white/15 rounded-full px-5 py-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-accent-light transition-colors"
              />
              <button
                type="submit"
                className="bg-secondary hover:bg-secondary-dark text-white font-semibold text-sm px-7 py-4 rounded-full transition-colors cursor-pointer whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Links */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="col-span-2 lg:col-span-4">
            <BrandMark invert />
            <p className="mt-5 text-sm text-white/65 leading-relaxed max-w-sm">
              Dependable hand tools for planting, pruning and soil care — chosen for everyday gardeners and built to come back season after season.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h5 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-light mb-4">Explore</h5>
            <ul className="flex flex-col gap-3">
              {[...pageLinks, ...legalLinks].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkClass}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h5 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-light mb-4">Our Tools</h5>
            <ul className="flex flex-col gap-3">
              {products.map((p) => (
                <li key={p.id}>
                  <Link href={`/product/${p.id}`} className={linkClass}>{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1 lg:col-span-3">
            <h5 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-light mb-4">Get in Touch</h5>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-accent-light transition-colors">{siteConfig.phone}</a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-accent-light transition-colors break-all">{siteConfig.email}</a>
              </li>
              <li className="text-white/55 leading-relaxed">{siteConfig.address}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p className="text-center md:text-left">
            &copy; {currentYear} {siteConfig.brandName}. All rights reserved. Operated by {siteConfig.corpName}.
          </p>
          <div className="flex items-center gap-3">
            <span className="uppercase tracking-widest text-[0.65rem] font-semibold">Secure checkout</span>
            <span className="">
              <img src="/img/visa.png" alt="Visa accepted" className="h-8 w-auto object-contain" />
            </span>
            <span className="">
              <img src="/img/mastercard.png" alt="Mastercard accepted" className="h-8 w-auto object-contain" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
