"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import productsData from "../../config/products.json";
import { SiteConfig, Product } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-primary pt-12 sm:pt-16 pb-8 sm:pb-12 border-t border-black/10" id="footer">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Row 1: Top Contact & Info Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start sm:items-center pb-8 sm:pb-12 border-b border-black/10">
          
          {/* Logo / Brand Name */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex flex-col items-start group">
              <span className="font-serif text-lg sm:text-xl font-black uppercase tracking-tight leading-tight text-primary group-hover:text-secondary transition-colors">
                {siteConfig.brandName}
              </span>
            </Link>
          </div>

          {/* Visit Us */}
          <div className="flex items-start gap-3">
            <div className="p-2 sm:p-2.5 rounded-full bg-neutral-bg text-primary flex-shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <span className="block uppercase text-[0.6rem] font-bold text-neutral-text/50 tracking-wider">VISIT US</span>
              <p className="text-xs font-semibold text-primary mt-0.5 leading-tight">{siteConfig.address}</p>
            </div>
          </div>

          {/* Need Support */}
          <div className="flex items-start gap-3">
            <div className="p-2 sm:p-2.5 rounded-full bg-neutral-bg text-primary flex-shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <span className="block uppercase text-[0.6rem] font-bold text-neutral-text/50 tracking-wider">NEED SUPPORT</span>
              <p className="text-xs font-bold text-primary mt-0.5">
                Call <span className="text-secondary">{siteConfig.phone}</span>
              </p>
              <span className="block text-[0.62rem] text-neutral-text/50">Mon - Fri: 9am - 5pm</span>
            </div>
          </div>

          {/* Contact Via Email */}
          <div className="flex items-start gap-3">
            <div className="p-2 sm:p-2.5 rounded-full bg-neutral-bg text-primary flex-shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div className="min-w-0">
              <span className="block uppercase text-[0.6rem] font-bold text-neutral-text/50 tracking-wider">CONTACT VIA EMAIL</span>
              <a href={`mailto:${siteConfig.email}`} className="text-xs font-bold text-primary hover:text-secondary transition-colors block truncate mt-0.5">
                {siteConfig.email}
              </a>
              <span className="block text-[0.62rem] text-neutral-text/50">We&apos;ll get back to you.</span>
            </div>
          </div>

        </div>

        {/* Row 2: Navigation Links Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 py-8 sm:py-12 border-b border-black/10 text-xs">
          
          {/* Column 1: Main Pages */}
          <div className="flex flex-col">
            <h3 className="font-serif text-xs sm:text-sm font-bold text-primary mb-3 sm:mb-4">Pages</h3>
            <ul className="flex flex-col gap-2.5 text-neutral-text/70">
              <li><Link href="/" className="hover:text-secondary transition-colors font-medium">Home</Link></li>
              <li><Link href="/shop" className="hover:text-secondary transition-colors font-medium">Shop</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors font-medium">About</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors font-medium">Contact</Link></li>
            </ul>
          </div>

          {/* Column 2: Shop Collection */}
          <div className="flex flex-col sm:border-l sm:border-black/10 sm:pl-6 lg:pl-8">
            <h3 className="font-serif text-xs sm:text-sm font-bold text-primary mb-3 sm:mb-4">Shop Collection</h3>
            <ul className="flex flex-col gap-2.5 text-neutral-text/70">
              {products.slice(0, 3).map((product) => (
                <li key={product.id}>
                  <Link href={`/product/${product.id}`} className="hover:text-secondary transition-colors">
                    {product.name}
                  </Link>
                </li>
              ))}
              <li><Link href="/shop" className="hover:text-secondary transition-colors font-bold text-secondary">All Fabrics →</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal & Policies */}
          <div className="flex flex-col sm:border-l sm:border-black/10 sm:pl-6 lg:pl-8">
            <h3 className="font-serif text-xs sm:text-sm font-bold text-primary mb-3 sm:mb-4">Policies</h3>
            <ul className="flex flex-col gap-2.5 text-neutral-text/70">
              <li><Link href="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Customer Support</Link></li>
            </ul>
          </div>

          {/* Column 4: Merchant Info */}
          <div className="flex flex-col sm:border-l sm:border-black/10 sm:pl-6 lg:pl-8">
            <h3 className="font-serif text-xs sm:text-sm font-bold text-primary mb-3 sm:mb-4">Merchant Info</h3>
            <ul className="flex flex-col gap-2 text-neutral-text/70">
              <li><span className="font-semibold text-primary">Corp:</span> {siteConfig.corpName}</li>
              <li><span className="font-semibold text-primary">Descriptor:</span> {siteConfig.descriptor}</li>
              <li className="break-all"><span className="font-semibold text-primary">Email:</span> {siteConfig.email}</li>
              <li><span className="font-semibold text-primary">Phone:</span> {siteConfig.phone}</li>
            </ul>
          </div>

        </div>

        {/* Row 3: Bottom Copyright & Payment Badges */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 pt-6 sm:pt-8 text-xs text-neutral-text/60 text-center sm:text-left">
          
          <p className="text-[0.7rem] sm:text-xs">
            Copyright &copy; {currentYear} <span className="text-secondary font-bold">{siteConfig.brandName}</span> | Operated by {siteConfig.corpName}
          </p>

          {/* Payment Icon Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <img src="/img/mastercard.png" alt="Mastercard" className="h-6 sm:h-7 w-auto object-contain" />
            <img src="/img/visa.png" alt="Visa" className="h-6 sm:h-7 w-auto object-contain" />
          </div>

        </div>

      </div>
    </footer>
  );
}
