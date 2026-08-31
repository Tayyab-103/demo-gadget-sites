"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-primary pt-12 sm:pt-16 pb-8 sm:pb-12 border-t border-black/10" id="footer">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Row 1: Top Contact & Info Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 items-start sm:items-center pb-8 sm:pb-12 border-b border-black/10">
          
          {/* Logo / Brand Name */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex flex-col items-start group">
              <span className="font-serif text-xl sm:text-2xl font-black uppercase tracking-tight text-primary group-hover:text-secondary transition-colors">
                Marlowe Finch
              </span>
              <span className="text-[0.55rem] sm:text-[0.6rem] font-bold uppercase tracking-[0.28em] text-secondary leading-none mt-0.5">
                Creative Supply
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

          {/* Follow Us */}
          <div className="flex flex-col">
            <span className="block uppercase text-[0.6rem] font-bold text-neutral-text/50 tracking-wider mb-2">FOLLOW US</span>
            <div className="flex items-center gap-2.5 text-primary">
              <a href="#" aria-label="Facebook" className="hover:text-secondary transition-colors p-1.5 rounded-full hover:bg-neutral-bg">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-secondary transition-colors p-1.5 rounded-full hover:bg-neutral-bg">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-secondary transition-colors p-1.5 rounded-full hover:bg-neutral-bg">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z"/></svg>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-secondary transition-colors p-1.5 rounded-full hover:bg-neutral-bg">
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
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
              <li><Link href="/product/product1" className="hover:text-secondary transition-colors">Botanical Ink Set</Link></li>
              <li><Link href="/product/product2" className="hover:text-secondary transition-colors">Pressed Cotton Sketchbook</Link></li>
              <li><Link href="/product/product3" className="hover:text-secondary transition-colors">Kolinsky Sable Brushes</Link></li>
              <li><Link href="/shop" className="hover:text-secondary transition-colors font-bold text-secondary">All Supplies →</Link></li>
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
            Copyright &copy; {currentYear} <span className="text-secondary font-bold">{siteConfig.brandName}</span> | Operated by Starpath Marketing Co
          </p>

          {/* Payment Icon Badges */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            <span className="px-2 py-0.5 bg-[#006FCF] text-white font-bold text-[0.6rem] rounded italic">AMEX</span>
            <span className="px-2 py-0.5 bg-black text-white font-bold text-[0.6rem] rounded">Pay</span>
            <span className="px-2 py-0.5 bg-white border border-black/20 text-neutral-800 font-bold text-[0.6rem] rounded">G Pay</span>
            <span className="px-2 py-0.5 bg-[#EB001B] text-white font-bold text-[0.6rem] rounded">Mastercard</span>
            <span className="px-2 py-0.5 bg-[#5A31F4] text-white font-bold text-[0.6rem] rounded">Shop Pay</span>
            <span className="px-2 py-0.5 bg-[#1A1F71] text-white font-bold text-[0.6rem] rounded">VISA</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
