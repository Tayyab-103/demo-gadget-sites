"use client";

import React, { useState } from "react";
import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { siteConfig, products } from "@/lib/brandIcon";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  const linkClass = "text-paper/70 hover:text-primary transition-colors";

  return (
    <footer className="bg-ink text-paper pt-16 sm:pt-20 pb-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Newsletter */}
        <div className="relative overflow-hidden rounded-[2rem] bg-brand-gradient p-7 sm:p-10 mb-14 text-primary-text">
          <div className="absolute inset-0 grid-paper opacity-50" aria-hidden="true" />
          <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-md">
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">Get the desk notes</h3>
              <p className="mt-1.5 text-sm opacity-80">New arrivals, desk-setup ideas and the odd note-taking tip. No spam, ever.</p>
            </div>
            {subscribed ? (
              <p className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper">✓ Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex w-full md:w-auto flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  aria-label="Email address"
                  className="field rounded-full border-ink/15 sm:min-w-[280px]"
                />
                <button type="submit" className="btn-dark">Subscribe</button>
              </form>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-paper/10">
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="group inline-block" style={{ textDecoration: "none" }}>
              <BrandLogo invert />
            </Link>
            <p className="mt-4 text-sm text-paper/65 leading-relaxed">
              Notebooks, pens and desk sets for brighter, better-organized workdays.
            </p>
            <p className="mt-3 text-xs text-paper/50">{siteConfig.address}</p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">Shop</h4>
            <ul className="space-y-2.5 text-sm">
              {products.map((p) => (
                <li key={p.id}>
                  <Link href={`/product/${p.id}`} className={linkClass}>{p.name}</Link>
                </li>
              ))}
              <li>
                <Link href="/shop" className="font-semibold text-paper hover:text-primary transition-colors">View all →</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className={linkClass}>Home</Link></li>
              <li><Link href="/about" className={linkClass}>About Us</Link></li>
              <li><Link href="/contact" className={linkClass}>Contact Us</Link></li>
              <li><Link href="/#faq" className={linkClass}>FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-4">Support</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href={`tel:${siteConfig.phone}`} className={linkClass}>{siteConfig.phone}</a></li>
              <li><a href={`mailto:${siteConfig.email}`} className={`${linkClass} break-all`}>{siteConfig.email}</a></li>
              <li><Link href="/privacy" className={linkClass}>Privacy Policy</Link></li>
              <li><Link href="/terms" className={linkClass}>Terms &amp; Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-paper/55">
          <div className="text-center sm:text-left space-y-1">
            <p>{`© ${new Date().getFullYear()} ${siteConfig.brandName}. All rights reserved.`}</p>
            <p>{`Operated by ${siteConfig.corpName} · Statement descriptor: ${siteConfig.descriptor}`}</p>
          </div>
          <div className="flex items-center gap-3">
            <img src="/img/visa.png" alt="Visa accepted" className="h-8 w-auto rounded object-contain" />
            <img src="/img/mastercard.png" alt="Mastercard accepted" className="h-8 w-auto rounded object-contain" />
          </div>
        </div>
      </div>
    </footer>
  );
}
