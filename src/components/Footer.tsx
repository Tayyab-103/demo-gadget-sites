"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

const [brandLead, ...brandRest] = siteConfig.brandName.split(" ");

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/shop", label: "Shop All" },
  { href: "/contact", label: "Contact" },
];

const policyLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
  { href: "/terms", label: "Shipping Policy" },
  { href: "/terms", label: "Returns & Refunds" },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="text-sm text-muted hover:text-neutral-text transition-colors flex items-center gap-2 group">
        <span className="w-1.5 h-1.5 rounded-full bg-line group-hover:bg-primary transition-colors flex-shrink-0" />
        <span className="line-clamp-1">{label}</span>
      </Link>
    </li>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-neutral-bg text-neutral-text overflow-hidden border-t border-line" id="footer">
      <div className="absolute inset-x-0 top-0 h-px bg-brand-gradient" />
      <div className="absolute -bottom-40 -right-20 w-[480px] h-[480px] rounded-full bg-primary/15 blur-[120px] pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-secondary/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-brand-gradient flex items-center justify-center shadow-lg shadow-primary/30">
                <div className="flex items-end gap-[3px] h-5" aria-hidden="true">
                  <span className="w-[3px] h-2.5 rounded-full bg-white" />
                  <span className="w-[3px] h-5 rounded-full bg-white" />
                  <span className="w-[3px] h-3.5 rounded-full bg-white" />
                  <span className="w-[3px] h-2 rounded-full bg-white" />
                </div>
              </div>
              <div>
                <span className="text-xl font-black tracking-tight leading-none block">{brandLead}</span>
                <span className="text-[0.62rem] text-gradient font-extrabold tracking-[0.22em] uppercase">{brandRest.join(" ")}</span>
              </div>
            </div>

            <p className="text-sm text-muted leading-relaxed mb-6 max-w-sm">
              Your online music store for guitar picks, brass instruments and studio-ready cables — shipped free via{" "}
              {siteConfig.shippingCarrier} in {siteConfig.shippingPeriod} business days.
            </p>

            <div className="flex flex-col gap-2.5 text-sm">
              <a href={`mailto:${siteConfig.email}`} className="text-muted hover:text-neutral-text transition-colors flex items-center gap-2.5 break-all">
                <span className="w-7 h-7 rounded-lg bg-surface border border-line flex items-center justify-center text-xs flex-shrink-0">✉</span>
                {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone}`} className="text-muted hover:text-neutral-text transition-colors flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-surface border border-line flex items-center justify-center text-xs flex-shrink-0">☎</span>
                {siteConfig.phone}
              </a>
              <div className="text-faint flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-surface border border-line flex items-center justify-center text-xs flex-shrink-0">⌖</span>
                {siteConfig.address}
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-5">Products</h4>
              <ul className="flex flex-col gap-3">
                {products.map((product) => (
                  <FooterLink key={product.id} href={`/product/${product.id}`} label={product.name} />
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-5">Company</h4>
              <ul className="flex flex-col gap-3">
                {companyLinks.map((l) => (
                  <FooterLink key={l.label} {...l} />
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-5">Policies</h4>
              <ul className="flex flex-col gap-3">
                {policyLinks.map((l) => (
                  <FooterLink key={l.label} {...l} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <span className="text-[0.65rem] text-faint font-bold uppercase tracking-wider">We Accept</span>
            <div className="">
              <img src="/img/visa.png" alt="Visa" className="h-8 w-auto object-contain" />
            </div>
            <div className="">
              <img src="/img/mastercard.png" alt="Mastercard" className="h-8 w-auto object-contain" />
            </div>
          </div>

          <p className="text-xs text-faint text-center md:text-right">
            &copy; {currentYear} {siteConfig.brandName}. All rights reserved.&nbsp;
            <Link href="/privacy" className="hover:text-neutral-text transition-colors">Privacy</Link>
            &nbsp;&middot;&nbsp;
            <Link href="/terms" className="hover:text-neutral-text transition-colors">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
