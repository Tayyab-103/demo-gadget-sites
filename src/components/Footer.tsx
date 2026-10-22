"use client";

import { brandShort, products, siteConfig } from "@/lib/brandIcon";
import Link from "next/link";
import React, { useState } from "react";

const linkClass =
  "group inline-flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors";

function LinkDot() {
  return (
    <span
      className="h-1.5 w-1.5 rounded-full bg-secondary opacity-0 -ml-3.5 transition-all duration-300 group-hover:opacity-100 group-hover:ml-0"
      aria-hidden="true"
    />
  );
}

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
    <footer className="relative z-10 -mt-14 sm:-mt-20 md:-mt-24 text-white pointer-events-none" id="footer">
      {/* Mountain ridge edge */}
      <svg className="block w-full h-14 sm:h-20 md:h-24 -mb-px" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
        <path
          className="fill-secondary"
          d="M0 120 L0 92 L140 50 L230 78 L380 18 L500 70 L610 40 L760 96 L900 30 L1010 66 L1130 8 L1260 64 L1350 44 L1440 80 L1440 120 Z"
        />
        <path
          className="fill-primary"
          d="M0 120 L0 100 L150 62 L240 88 L390 32 L510 82 L620 54 L770 106 L910 44 L1020 78 L1140 22 L1270 76 L1360 58 L1440 92 L1440 120 Z"
        />
      </svg>

      <div className="relative overflow-hidden bg-primary pointer-events-auto">
        <div className="absolute inset-0 bg-topo opacity-70" aria-hidden="true" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14">
          {/* ---------- Top: big contact + newsletter ---------- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
            <div className="lg:col-span-7">
              <span className="eyebrow eyebrow-invert mb-4">Base Camp</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[0.95]">
                Let&apos;s Get You
                <br />
                <span className="text-secondary">Outside.</span>
              </h2>

              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 py-2 pl-2 pr-5 transition-all duration-300 hover:border-secondary hover:bg-secondary"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-text transition-colors group-hover:bg-primary">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-[0.6rem] font-bold uppercase tracking-widest text-white/60 group-hover:text-white/85">Call us</span>
                    <span className="block text-sm font-black">{siteConfig.phone}</span>
                  </span>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="group inline-flex min-w-0 max-w-full items-center gap-3 rounded-full border border-white/15 bg-white/5 py-2 pl-2 pr-5 transition-all duration-300 hover:border-secondary hover:bg-secondary"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-text transition-colors group-hover:bg-primary">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-10 6L2 7" />
                    </svg>
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[0.6rem] font-bold uppercase tracking-widest text-white/60 group-hover:text-white/85">Email us</span>
                    <span className="block truncate text-sm font-black">{siteConfig.email}</span>
                  </span>
                </a>
              </div>
            </div>

            {/* Newsletter card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-white p-6 sm:p-8 text-neutral-text shadow-2xl shadow-black/30">
                <span className="absolute -top-3 right-6 rotate-3 rounded-lg bg-secondary px-3 py-1 text-[0.6rem] font-black uppercase tracking-widest text-secondary-text">
                  Field Notes
                </span>
                <h3 className="text-xl font-black uppercase tracking-tight text-primary">Join The Newsletter</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  New gear, training ideas and bundle news. A few emails a month, unsubscribe any time.
                </p>

                {subscribed ? (
                  <div className="mt-5 flex items-center gap-3 rounded-2xl border border-secondary/40 bg-secondary-soft p-4 text-sm font-bold text-primary">
                    <svg className="text-secondary-deep flex-shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="9 12 11 14 15 10"></polyline></svg>
                    You&apos;re on the list — thanks for subscribing!
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="mt-5 flex flex-col sm:flex-row gap-2.5">
                    <label htmlFor="footer-email" className="sr-only">Email address</label>
                    <input
                      id="footer-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      required
                      className="field rounded-full px-5"
                    />
                    <button type="submit" className="btn-primary">
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* ---------- Link columns ---------- */}
          <div className="grid grid-cols-2 md:grid-cols-12 gap-10 py-12">
            <div className="col-span-2 md:col-span-4">
              <Link href="/" className="inline-flex items-center gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-text">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 20h18L14.5 8l-3.5 6-2.5-3.5L3 20z" />
                    <circle cx="17.5" cy="5" r="1.6" fill="currentColor" stroke="none" />
                  </svg>
                </span>
                <span className="text-base font-black uppercase tracking-wider">{siteConfig.brandName}</span>
              </Link>
              <p className="mt-4 text-sm text-white/60 leading-relaxed max-w-xs">
                {`Rugged ${(siteConfig.Product || "sporting goods").toLowerCase()} for training outdoors, at home and on the move.`}
              </p>
              <p className="mt-3 flex items-start gap-2 text-sm text-white/60">
                <svg className="mt-0.5 flex-shrink-0 text-secondary" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {siteConfig.address}
              </p>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-secondary text-xs mb-4 font-black uppercase tracking-widest">Explore</h4>
              <ul className="flex flex-col gap-2.5">
                {[
                  { href: "/", label: "Home" },
                  { href: "/shop", label: "Shop All" },
                  { href: "/about", label: "About Us" },
                  { href: "/contact", label: "Contact" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={linkClass}>
                      <LinkDot />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-secondary text-xs mb-4 font-black uppercase tracking-widest">Products</h4>
              <ul className="flex flex-col gap-2.5">
                {products.map((p) => (
                  <li key={p.id}>
                    <Link href={`/product/${p.id}`} className={linkClass}>
                      <LinkDot />
                      <span className="line-clamp-1">{p.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-3">
              <h4 className="text-secondary text-xs mb-4 font-black uppercase tracking-widest">Good To Know</h4>
              <ul className="grid grid-cols-1 gap-2.5">
                {[
                  `Ships via ${siteConfig.shippingCarrier}`,
                  `${siteConfig.shippingPeriod} business day delivery`,
                  `${siteConfig.trialPeriod}-day trial period`,
                  "Secure, encrypted checkout",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-white/70">
                    <svg className="flex-shrink-0 text-secondary" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ---------- Giant signature ---------- */}
        <div className="relative select-none overflow-hidden" aria-hidden="true">
          <div className="text-center font-black uppercase leading-[0.78] tracking-tighter text-[13vw] text-white/6 translate-y-[14%]">
            {brandShort}
          </div>
        </div>

        {/* ---------- Bottom bar ---------- */}
        <div className="relative border-t border-white/10 bg-primary-dark">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 text-xs text-white/55">
            <div>
              &copy;{currentYear} {siteConfig.brandName}. All Rights Reserved.
            </div>

            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
              <span aria-hidden="true">•</span>
              <Link href="/terms" className="hover:text-secondary transition-colors">Terms &amp; Conditions</Link>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <img src="/img/visa.png" alt="Visa" className="h-6 w-auto rounded-sm bg-white p-0.5" />
                <img src="/img/mastercard.png" alt="Mastercard" className="h-6 w-auto rounded-sm bg-white p-0.5" />
              </div>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-text transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/40 cursor-pointer"
                aria-label="Back to top"
              >
                <svg className="transition-transform duration-300 group-hover:-translate-y-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="12" y1="19" x2="12" y2="5" />
                  <polyline points="5 12 12 5 19 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
