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
    <footer className="relative overflow-hidden bg-accent-light text-ink" id="footer">
      <div className="h-1.5 w-full bg-primary" aria-hidden="true" />
      <div className="dot-grid pointer-events-none absolute -right-10 top-16 h-56 w-56 opacity-60" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-16 pb-10 md:pt-20">
        {/* Newsletter card */}
        <div className="mb-16 flex flex-col items-start justify-between gap-8 rounded-[2rem] bg-white p-8 shadow-xl shadow-primary/10 md:p-10 lg:flex-row lg:items-center">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold leading-tight md:text-3xl">
              Join the <span className="marker">{siteConfig.brandName.split(" ")[0]}</span> List
            </h2>
            <p className="mt-3 text-sm text-neutral-text/60">
              New arrivals, gift guides and members-only offers, delivered to your inbox. No spam, ever.
            </p>
          </div>

          {subscribed ? (
            <div className="flex items-center gap-3 rounded-full bg-accent-light px-5 py-3 text-sm font-semibold">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="9 12 11 14 15 10"></polyline></svg>
              Thanks for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full rounded-full border border-black/10 bg-neutral-bg px-5 py-3.5 text-sm text-ink placeholder:text-neutral-text/40 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-full bg-primary px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-primary-text shadow-md shadow-primary/30 transition-all hover:bg-ink hover:text-white"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            {siteConfig.useImageLogo && siteConfig.footerLogoImage ? (
              <img src={siteConfig.footerLogoImage} alt={siteConfig.brandName} className="block max-h-[40px] w-auto object-contain mix-blend-multiply" />
            ) : (
              <div className="flex items-center gap-3 text-lg font-black uppercase tracking-tight">
                <span className="flex h-8 w-8 rotate-45 items-center justify-center rounded-md bg-primary">
                  <span className="-rotate-45 text-xs text-primary-text">{siteConfig.brandName.charAt(0)}</span>
                </span>
                {siteConfig.brandName}
              </div>
            )}
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-neutral-text/60">
              Golden jewelry, watches and clocks made to be worn every day and gifted with love.
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-secondary">Company</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="/" className="transition-colors hover:text-secondary">Home</Link></li>
              <li><Link href="/shop" className="transition-colors hover:text-secondary">Shop All</Link></li>
              <li><Link href="/about" className="transition-colors hover:text-secondary">About Us</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-secondary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-secondary">Shop</h4>
            <ul className="flex flex-col gap-3 text-sm">
              {products.map((p) => (
                <li key={p.id}>
                  <Link href={`/product/${p.id}`} className="transition-colors hover:text-secondary">{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="mb-5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-secondary">Customer Care</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href={`mailto:${siteConfig.email}`} className="break-all transition-colors hover:text-secondary">{siteConfig.email}</a></li>
              <li><a href={`tel:${siteConfig.phone}`} className="transition-colors hover:text-secondary">{siteConfig.phone}</a></li>
              <li className="max-w-[220px] text-neutral-text/70">{siteConfig.address}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-6 border-t border-ink/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="text-xs text-neutral-text/60">
            &copy;{currentYear} {siteConfig.brandName}. All Rights Reserved.
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
            <Link href="/privacy" className="text-neutral-text/60 transition-colors hover:text-ink">Privacy Policy</Link>
            <Link href="/terms" className="text-neutral-text/60 transition-colors hover:text-ink">Terms &amp; Conditions</Link>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-neutral-text/60">We Accept</span>
            <img src="/img/visa.png" alt="Visa" className="h-6 w-auto rounded-sm" />
            <img src="/img/mastercard.png" alt="Mastercard" className="h-6 w-auto rounded-sm" />
          </div>
        </div>

        <p className="mt-6 max-w-2xl text-[0.68rem] leading-relaxed text-neutral-text/45">
          Product images are for illustrative purposes; actual pieces may vary slightly in color and finish.
        </p>
      </div>
    </footer>
  );
}
