"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig, products, trialDays } from "@/lib/brandIcon";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  const linkClass = "text-white/65 hover:text-secondary transition-colors";

  return (
    <footer className="bg-primary-dark text-white/70">
      {/* Newsletter band */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              Stay in the <span className="text-secondary">loop</span>
            </h2>
            <p className="mt-2 text-sm text-white/60">New colors, restocks and training tips. A few emails a month, nothing more.</p>
          </div>
          {subscribed ? (
            <p className="flex items-center gap-2 text-secondary text-sm font-bold lg:justify-end">
              <span className="w-6 h-6 rounded-full bg-secondary text-secondary-text flex items-center justify-center text-xs">✓</span>
              You&apos;re subscribed. Thanks for joining!
            </p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 lg:justify-end">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                aria-label="Email address"
                className="w-full sm:w-80 h-12 rounded-full bg-white/10 border border-white/15 px-5 text-sm text-white placeholder-white/40 outline-none focus:border-secondary"
              />
              <button type="submit" className="btn-gold !py-0 h-12">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10">
          <div className="col-span-2 md:col-span-5">
            <Link href="/" className="inline-flex">
              {siteConfig.useImageLogo && siteConfig.footerLogoImage ? (
                <img src={siteConfig.footerLogoImage} alt={siteConfig.brandName} className="max-h-8 w-auto object-contain brightness-0 invert" />
              ) : (
                <BrandLogo invert />
              )}
            </Link>
            <p className="mt-5 text-sm leading-relaxed max-w-sm">
              Compression baselayers, zip training hoodies and cushioned crew socks, sold singly or in packs with free{" "}
              {siteConfig.shippingCarrier} shipping and a {trialDays}-day return window.
            </p>
            <address className="mt-5 not-italic text-xs leading-relaxed text-white/55">
              {siteConfig.address}
              <br />
              <a href={`tel:${siteConfig.phone}`} className="hover:text-secondary">{siteConfig.phone}</a>
              {" · "}
              <a href={`mailto:${siteConfig.email}`} className="hover:text-secondary break-all">{siteConfig.email}</a>
            </address>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-black uppercase tracking-[0.18em] text-white mb-4">Shop</h3>
            <ul className="space-y-2.5 text-sm">
              {products.map((p) => (
                <li key={p.id}>
                  <Link href={`/product/${p.id}`} className={linkClass}>{p.name}</Link>
                </li>
              ))}
              <li>
                <Link href="/shop" className={linkClass}>All products</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-black uppercase tracking-[0.18em] text-white mb-4">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className={linkClass}>Home</Link></li>
              <li><Link href="/about" className={linkClass}>About</Link></li>
              <li><Link href="/contact" className={linkClass}>Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-black uppercase tracking-[0.18em] text-white mb-4">Legal</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/privacy" className={linkClass}>Privacy Policy</Link></li>
              <li><Link href="/terms" className={linkClass}>Terms &amp; Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p className="text-center sm:text-left">
            © {currentYear} <span className="font-semibold text-white/80">{siteConfig.brandName}</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="uppercase tracking-wider text-white/40">We accept</span>
            <img src="/img/visa.png" alt="Visa" className="h-6 w-auto rounded bg-white p-1" />
            <img src="/img/mastercard.png" alt="Mastercard" className="h-6 w-auto rounded bg-white p-1" />
          </div>
        </div>
      </div>
    </footer>
  );
}
