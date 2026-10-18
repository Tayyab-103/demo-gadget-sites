"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const shopLinks = [
    { href: "/product/product1", label: "Knit Throw Blanket" },
    { href: "/product/product2", label: "Stoneware Table Lamp" },
    { href: "/product/product3", label: "Oak & Stone Tray" },
    { href: "/shop", label: "Shop All" },
  ];
  const helpLinks = [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
  ];

  return (
    <footer className="bg-primary-dark text-primary-text pt-14 sm:pt-20 pb-8 relative overflow-hidden" id="footer">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">

        {/* Top: brand statement + newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-primary-text/15">
          <div className="lg:col-span-7">
            <Link href="/" className="inline-flex items-center gap-3" aria-label={siteConfig.brandName}>
              <span className="w-11 h-11 rounded-full bg-secondary text-secondary-text flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 11L12 4L21 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 9.5V20H18V9.5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="M10 20V14H14V20" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="font-serif text-2xl tracking-[0.14em]">{siteConfig.brandName}</span>
            </Link>
            <p className="mt-6 font-serif text-2xl sm:text-3xl lg:text-4xl leading-snug max-w-xl text-primary-text/90">
              Warm, simple pieces for the rooms you live in every day.
            </p>
          </div>

          <div className="lg:col-span-5 lg:pl-8">
            <h4 className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-secondary mb-4">Join our letter</h4>
            {subscribed ? (
              <div className="text-sm font-semibold bg-primary-text/10 p-4 rounded-2xl border border-primary-text/15">
                Thank you for subscribing.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2 bg-primary-text/10 border border-primary-text/15 rounded-full p-1.5 focus-within:border-secondary transition-colors">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  aria-label="Email address"
                  className="flex-1 min-w-0 bg-transparent px-4 py-2.5 text-sm text-primary-text placeholder:text-primary-text/45 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-secondary text-secondary-text hover:bg-neutral-bg hover:text-neutral-text px-5 py-2.5 rounded-full text-[0.68rem] font-bold uppercase tracking-[0.16em] transition-colors cursor-pointer"
                >
                  Join
                </button>
              </form>
            )}
            <p className="mt-3 text-xs text-primary-text/55">Styling notes and new arrivals. Unsubscribe anytime.</p>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 py-12">
          <div>
            <h4 className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-secondary mb-5">Shop</h4>
            <ul className="flex flex-col gap-3">
              {shopLinks.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-sm text-primary-text/75 hover:text-primary-text transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-secondary mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {helpLinks.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-sm text-primary-text/75 hover:text-primary-text transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-secondary mb-5">Contact</h4>
            <ul className="flex flex-col gap-3 text-sm text-primary-text/75">
              <li><a href={`tel:${siteConfig.phone}`} className="hover:text-primary-text transition-colors">{siteConfig.phone}</a></li>
              <li><a href={`mailto:${siteConfig.email}`} className="hover:text-primary-text transition-colors break-all">{siteConfig.email}</a></li>
              <li>{siteConfig.address}</li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 flex flex-col justify-between gap-6">
            <div>
              <h4 className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-secondary mb-5">We accept</h4>
              <div className="flex items-center gap-2.5" aria-label="Accepted Payment Methods">
                  {/* MasterCard Button */}
                  <div className="w-[52px] h-[33px] sm:w-[58px] sm:h-[36px] bg-[#163458] rounded-[5px] flex items-center justify-center shadow-xs overflow-hidden transition-transform hover:scale-105 select-none" title="MasterCard">
                    <svg viewBox="0 0 60 40" className="w-full h-full p-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="23" cy="17" r="12" fill="#EB001B" />
                      <circle cx="37" cy="17" r="12" fill="#F79E1B" />
                      {/* Intersection pattern */}
                      <path d="M30 7.6a12 12 0 0 0-3.8 9.4 12 12 0 0 0 3.8 9.4 12 12 0 0 0 3.8-9.4 12 12 0 0 0-3.8-9.4z" fill="#FF5F00" />
                      <line x1="25" y1="11.5" x2="35" y2="11.5" stroke="#163458" strokeWidth="0.8" />
                      <line x1="23.5" y1="14.2" x2="36.5" y2="14.2" stroke="#163458" strokeWidth="0.8" />
                      <line x1="23" y1="17" x2="37" y2="17" stroke="#163458" strokeWidth="0.8" />
                      <line x1="23.5" y1="19.8" x2="36.5" y2="19.8" stroke="#163458" strokeWidth="0.8" />
                      <line x1="25" y1="22.5" x2="35" y2="22.5" stroke="#163458" strokeWidth="0.8" />
                      {/* Text */}
                      <text x="30" y="34" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontStyle="italic" fontSize="7.8" textAnchor="middle" letterSpacing="0.2">
                        MasterCard
                      </text>
                    </svg>
                  </div>

                  {/* VISA Button */}
                  <div className="w-[52px] h-[33px] sm:w-[58px] sm:h-[36px] bg-[#2257a6] rounded-[5px] flex items-center justify-center shadow-xs overflow-hidden transition-transform hover:scale-105 select-none" title="VISA">
                    <svg viewBox="0 0 60 40" className="w-full h-full p-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g transform="translate(6, 8)">
                        {/* Gold flick on top of V */}
                        <path d="M 0 3.5 L 4.5 3.5 L 2.5 10 Z" fill="#FAA61A" />
                        {/* Visa text */}
                        <text x="24" y="19" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontStyle="italic" fontSize="21" textAnchor="middle" letterSpacing="1">
                          VISA
                        </text>
                      </g>
                    </svg>
                  </div>
              </div>
            </div>
            <button
              onClick={scrollToTop}
              className="self-start md:self-end w-12 h-12 rounded-full border border-primary-text/25 hover:bg-secondary hover:text-secondary-text hover:border-secondary flex items-center justify-center transition-all duration-300 cursor-pointer group"
              aria-label="Scroll to top"
            >
              <span className="text-lg font-bold group-hover:-translate-y-0.5 transition-transform">&uarr;</span>
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-text/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-text/60 text-center sm:text-left">
          <span>&copy; {currentYear} {siteConfig.brandName}. All rights reserved.</span>
          <span>Operated by {siteConfig.corpName}</span>
        </div>
      </div>
    </footer>
  );
}
