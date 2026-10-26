"use client";

import { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";
import BrandName from "@/components/BrandName";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop All" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/#faq", label: "FAQ" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms & Conditions" },
];

const linkClass = "text-sm text-ink/65 transition-colors hover:text-primary";

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
    <footer className="bg-surface relative overflow-hidden pt-16 md:pt-20" id="footer">
      <div className="container-page relative">
        {/* Newsletter card */}
        <div className="bg-brand-gradient relative overflow-hidden rounded-4xl px-6 py-10 sm:px-10 md:px-14 md:py-12">
          <svg className="pointer-events-none absolute -bottom-10 right-4 h-56 w-56 text-white/10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
          </svg>
          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-md">
              <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-white md:text-3xl">
                Get restock alerts &amp; new arrivals
              </h2>
              <p className="mt-2 text-sm text-white/85">Occasional emails only. Unsubscribe any time.</p>
            </div>

            {subscribed ? (
              <div className="flex items-center gap-3 rounded-full bg-white/15 px-5 py-3 text-sm font-semibold text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
                Thanks for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex w-full max-w-md items-center gap-1.5 rounded-full bg-white p-1.5 shadow-lg">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  aria-label="Email address"
                  className="min-w-0 flex-1 bg-transparent px-4 text-sm text-ink placeholder:text-ink/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 cursor-pointer whitespace-nowrap rounded-full bg-ink px-5 py-3 text-xs font-bold uppercase tracking-widest text-white transition-opacity hover:opacity-90 sm:px-6"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-14 md:grid-cols-12 md:py-16">
          <div className="col-span-2 md:col-span-5">
            <Link href="/" aria-label={siteConfig.brandName} className="inline-block">
              <BrandName size="lg" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/60">
              Power strips, solar DC switches and rechargeable battery packs for workshops, installers and
              homeowners.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-sm">
              <a href={`tel:${siteConfig.phone}`} className="font-semibold text-ink transition-colors hover:text-primary">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="text-ink/65 transition-colors wrap-anywhere hover:text-primary">
                {siteConfig.email}
              </a>
              <span className="text-ink/50">{siteConfig.address}</span>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-ink">Company</h4>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-ink">Products</h4>
            <ul className="flex flex-col gap-3">
              {products.map((product) => (
                <li key={product.id}>
                  <Link href={`/product/${product.id}`} className={linkClass}>
                    {product.name.replace(`${siteConfig.brandName.split(" ")[0]} `, "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2">
            <h4 className="mb-5 text-xs font-bold uppercase tracking-widest text-ink">Legal</h4>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-line py-7 text-center sm:flex-row sm:text-left">
          <span className="text-xs text-ink/50">
            &copy; {currentYear} {siteConfig.brandName}. All rights reserved.
          </span>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-ink/50">We Accept</span>
            <img src="/img/visa.png" alt="Visa" className="h-9 w-14 rounded-xl border border-line bg-white object-contain p-2" />
            <img src="/img/mastercard.png" alt="Mastercard" className="h-9 w-14 rounded-xl border border-line bg-white object-contain p-2" />
          </div>
        </div>
      </div>
    </footer>
  );
}
