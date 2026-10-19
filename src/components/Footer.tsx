"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const PhoneIcon = () => (
  <svg {...iconProps}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
  </svg>
);

const MailIcon = () => (
  <svg {...iconProps}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

const PinIcon = () => (
  <svg {...iconProps}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const TruckIcon = () => (
  <svg {...iconProps}>
    <path d="M10 17h4V5H2v12h3" />
    <path d="M14 8h4l4 4v5h-3" />
    <circle cx="7.5" cy="17.5" r="2.5" />
    <circle cx="16.5" cy="17.5" r="2.5" />
  </svg>
);

const ShieldIcon = () => (
  <svg {...iconProps}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const LockIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const ArrowIcon = () => (
  <svg {...iconProps} width={16} height={16}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "Shop All", href: "/shop" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const helpLinks = [
  { label: "Terms of Service", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Customer Support", href: "/contact" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  const trustItems = [
    {
      icon: <TruckIcon />,
      title: `Ships via ${siteConfig.shippingCarrier}`,
      text: `Delivered in ${siteConfig.shippingPeriod} business days`,
    },
    {
      icon: <ShieldIcon />,
      title: `${siteConfig.trialPeriod || 14}-Day Fit Guarantee`,
      text: "Easy returns & size exchanges",
    },
    {
      icon: <LockIcon />,
      title: "Secure Checkout",
      text: "Encrypted, protected payments",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-primary text-primary-text">
      {/* Soft decorative glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-3xl max-w-full -translate-x-1/2 rounded-full bg-white/6 blur-3xl"
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Newsletter Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end pt-16 sm:pt-20 pb-12 sm:pb-14 border-b border-white/10">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Join the family club
            </span>
            <h3 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.05] text-white">
              Everyday style,
              <br className="hidden sm:block" />{" "}
              <span className="text-white/50">delivered to your inbox.</span>
            </h3>
          </div>

          <div className="lg:col-span-5">
            <p className="text-sm text-white/60 mb-4 leading-relaxed">
              New arrivals, seasonal family styles, and member-only offers. No spam, unsubscribe anytime.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-3 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-4 text-sm font-semibold text-emerald-300">
                <ShieldIcon />
                Thanks for subscribing! Check your inbox for updates.
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex items-center gap-2 rounded-full border border-white/15 bg-white/6 p-1.5 focus-within:border-white/40 transition-colors"
              >
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 sm:px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-primary transition-all hover:gap-3 hover:bg-white/90 cursor-pointer"
                >
                  Subscribe
                  <ArrowIcon />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-10 py-12 sm:py-14">

          {/* Brand + Contact */}
          <div className="col-span-2 lg:col-span-5 lg:pr-10">
            <Link href="/" className="inline-block text-lg font-extrabold uppercase tracking-wider text-white">
              {siteConfig.brandName}
            </Link>
            <p className="mt-3 max-w-sm text-sm text-white/55 leading-relaxed">
              Comfortable, affordable everyday clothing for women and men, from Winston-Salem, North Carolina.
            </p>

            <div className="mt-6 space-y-2.5">
              <a
                href={`tel:${siteConfig.phone}`}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/3 px-4 py-3 transition-colors hover:border-white/25 hover:bg-white/7"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/10 text-white">
                  <PhoneIcon />
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.65rem] font-bold uppercase tracking-wider text-white/45">Call us</span>
                  <span className="block text-sm font-semibold text-white">{siteConfig.phone}</span>
                </span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/3 px-4 py-3 transition-colors hover:border-white/25 hover:bg-white/7"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/10 text-white">
                  <MailIcon />
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.65rem] font-bold uppercase tracking-wider text-white/45">Email us</span>
                  <span className="block text-[13px] sm:text-sm font-semibold text-white break-all">{siteConfig.email}</span>
                </span>
              </a>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/3 px-4 py-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/10 text-white">
                  <PinIcon />
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.65rem] font-bold uppercase tracking-wider text-white/45">Visit us</span>
                  <span className="block text-sm text-white/85">{siteConfig.address}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Shop */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-3 lg:col-start-6">
            <h4 className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white/45 mb-5">Shop</h4>
            <ul className="space-y-3 text-sm">
              {products.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/product/${product.id}`}
                    className="text-white/75 hover:text-white transition-colors"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-1.5 font-semibold text-white hover:gap-2.5 transition-all"
                >
                  Shop all products <ArrowIcon />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white/45 mb-5">Company</h4>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/75 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div className="lg:col-span-2">
            <h4 className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white/45 mb-5">Help</h4>
            <ul className="space-y-3 text-sm">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white/75 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pb-12 sm:pb-14">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-3 rounded-2xl bg-white/4 px-4 py-3.5"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-primary">
                {item.icon}
              </span>
              <span>
                <span className="block text-sm font-bold text-white">{item.title}</span>
                <span className="block text-xs text-white/55">{item.text}</span>
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-5 border-t border-white/10 py-7 text-xs text-white/50">
          <div className="text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[0.65rem] font-bold uppercase tracking-wider text-white/40">We accept</span>
            <div className="flex items-center gap-2">
              <span className="">
                <img src="/img/visa.png" alt="Visa" className="max-h-5 w-auto object-contain" />
              </span>
              <span className="">
                <img src="/img/mastercard.png" alt="Mastercard" className="max-h-6 w-auto object-contain" />
              </span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
