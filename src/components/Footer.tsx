import React from "react";
import Link from "next/link";
import { siteConfig, products, brandShort } from "@/lib/brandIcon";
import BrandLogo from "@/components/BrandLogo";

const explore = [
  ["/", "Home"],
  ["/shop", "Shop Tools"],
  ["/about", "About Us"],
  ["/contact", "Contact"],
];

const policies = [
  ["/terms", "Terms & Conditions"],
  ["/privacy", "Privacy Policy"],
  ["/contact", "Returns & Support"],
];

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-ink">
      <span className="w-4 h-[3px] rounded-full bg-brand-gradient" />
      {children}
    </h4>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-surface border-t border-line overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16">
        {/* Help card */}
        <div className="relative rounded-[2rem] bg-brand-gradient text-white overflow-hidden px-6 py-8 sm:px-10 sm:py-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="absolute inset-0 blueprint-grid-light pointer-events-none" />
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full border-[28px] border-white/10 pointer-events-none" />
          <div className="relative">
            <div className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/70">Not sure what fits?</div>
            <div className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight">Talk to a real person before you buy.</div>
          </div>
          <div className="relative flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a href={`tel:${siteConfig.phone}`} className="btn-white">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center rounded-full px-7 py-[0.85rem] text-[0.8rem] font-bold border-2 border-white/40 hover:bg-white/10 hover:border-white transition-all"
            >
              Email Support
            </a>
          </div>
        </div>

        {/* Columns */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10">
          <div className="col-span-2 lg:col-span-3">
            <Link href="/" className="inline-block">
              <BrandLogo size="lg" />
            </Link>
            <p className="mt-5 text-sm text-muted leading-relaxed max-w-sm">
              Dependable hand tools, testers and hardware for homeowners, DIYers and the trades — shipped free and backed by a guarantee written in plain English.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm">
              {[
                `Free ${siteConfig.shippingCarrier} shipping, ${siteConfig.shippingPeriod} business days`,
                `${siteConfig.trialPeriod}-day satisfaction guarantee`,
              ].map((t) => (
                <li key={t} className="flex items-center gap-2.5 font-medium text-ink">
                  <span className="w-5 h-5 rounded-full bg-brand-gradient text-white flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <Heading>Explore</Heading>
            <ul className="mt-5 space-y-3 text-sm">
              {explore.map(([href, label]) => (
                <li key={label}>
                  <Link href={href} className="text-muted hover:text-primary transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <Heading>Shop</Heading>
            <ul className="mt-5 space-y-3 text-sm">
              {products.map((p) => (
                <li key={p.id}>
                  <Link href={`/product/${p.id}`} className="text-muted hover:text-primary transition-colors">{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1 lg:col-span-4">
            <Heading>Contact</Heading>
            <ul className="mt-5 space-y-3 text-sm text-muted">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors [overflow-wrap:anywhere]">{siteConfig.email}</a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-primary transition-colors">{siteConfig.phone}</a>
              </li>
              <li className="leading-relaxed">{siteConfig.address}</li>
            </ul>
          </div>
        </div>

        {/* Giant gradient wordmark */}
        <div className="mt-12 select-none pointer-events-none" aria-hidden="true">
          <div className="text-[15vw] lg:text-[11rem] font-extrabold tracking-tighter leading-[0.8] text-center whitespace-nowrap text-gradient opacity-[0.16] [mask-image:linear-gradient(to_bottom,black_30%,transparent)]">
            {brandShort.toUpperCase()}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative bg-white border-t border-line">
        <div className="h-[3px] bg-brand-gradient" />
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div className="text-center md:text-left">
            &copy; {currentYear} {siteConfig.brandName}. Operated by {siteConfig.corpName}.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {policies.map(([href, label]) => (
              <Link key={label} href={href} className="hover:text-primary transition-colors">{label}</Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <div className="h-7 w-11 rounded-md bg-white border border-line flex items-center justify-center p-0.5" title="Mastercard">
              <svg viewBox="0 0 36 24" className="w-full h-full">
                <circle cx="14" cy="12" r="6.5" fill="#EB001B" />
                <circle cx="22" cy="12" r="6.5" fill="#F79E1B" fillOpacity="0.95" />
                <path d="M18 6.9a6.5 6.5 0 0 1 0 10.2 6.5 6.5 0 0 1 0-10.2z" fill="#FF5F00" />
              </svg>
            </div>
            <div className="h-7 w-11 rounded-md bg-white border border-line flex items-center justify-center p-1" title="Visa">
              <svg viewBox="0 0 36 24" className="w-full h-full">
                <text x="18" y="16.5" fontSize="10.5" fill="#1A1F71" textAnchor="middle" fontFamily="sans-serif" fontStyle="italic" fontWeight="900">VISA</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
