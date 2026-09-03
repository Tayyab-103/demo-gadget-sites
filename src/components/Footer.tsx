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
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-[#0A0B0C] text-white border-t border-white/10 relative overflow-hidden" id="footer">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-12">
        
        {/* Top Newsletter & Info Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="text-2xl font-black tracking-tight text-white">
                CW
              </span>
              <span className="text-lg font-bold uppercase tracking-wide text-white border-l border-white/20 pl-3">
                {siteConfig.brandName}
              </span>
            </div>

            <p className="text-white/60 text-xs md:text-sm max-w-md leading-relaxed mb-6">
              Chef-grade culinary utensils, high-accuracy digital scales, and ergonomic prep tools forged for passionate cooks, bakers, and pastry artisans.
            </p>

            <div className="flex items-center gap-4 text-xs text-white/40">
              <span>Austin, TX Workshop</span>
              <span>&bull;</span>
              <span>100% Food Safe</span>
              <span>&bull;</span>
              <span>1-Yr Warranty</span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
              Join the Culinary Workshop Newsletter
            </h3>
            <p className="text-white/50 text-xs mb-4">
              Subscribe for gourmet recipes, pastry techniques, and 15% off your first tool order.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 text-[#E5F2C9] text-xs font-bold">
                ✓ Thank you for subscribing to the {siteConfig.brandName} newsletter!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#E5F2C9] flex-1"
                />
                <button
                  type="submit"
                  className="bg-[#E5F2C9] text-[#0A0B0C] font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-lg hover:bg-white transition-all whitespace-nowrap cursor-pointer shadow-sm text-center"
                >
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Links Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-white/10">
          
          <div>
            <div className="text-[0.65rem] font-bold uppercase tracking-widest text-white/40 mb-4">Company Info</div>
            <ul className="flex flex-col gap-2 text-xs text-white/60">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/shop" className="hover:text-white transition-colors">Catalog</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-[0.65rem] font-bold uppercase tracking-widest text-white/40 mb-4">Tool Catalog</div>
            <ul className="flex flex-col gap-2 text-xs text-white/60">
              <li><Link href="/product/product1" className="hover:text-white transition-colors">Balloon Whisk</Link></li>
              <li><Link href="/product/product2" className="hover:text-white transition-colors">Digital Culinary Scale</Link></li>
              <li><Link href="/product/product3" className="hover:text-white transition-colors">Multi-Prep Chef Shears</Link></li>
              <li><Link href="/shop" className="hover:text-white transition-colors">All Workshop Tools</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-[0.65rem] font-bold uppercase tracking-widest text-white/40 mb-4">Legal &amp; Policy</div>
            <ul className="flex flex-col gap-2 text-xs text-white/60">
              <li><Link href="/privacy" className="hover:text-[#E5F2C9] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#E5F2C9] transition-colors">Terms &amp; Conditions</Link></li>
              <li><Link href="/contact" className="hover:text-[#E5F2C9] transition-colors">Customer Support</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-[0.65rem] font-bold uppercase tracking-widest text-white/40 mb-4">Concierge Desk</div>
            <ul className="flex flex-col gap-2 text-xs text-white/60">
              <li className="break-all">{siteConfig.email}</li>
              <li>{siteConfig.phone}</li>
              <li className="text-white/40 text-[0.65rem] leading-relaxed">{siteConfig.address}</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright and Legal links on left, payment logos on right */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[0.68rem] text-white/50">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2">
            <span>Copyright &copy; {currentYear} {siteConfig.brandName}. All Rights Reserved.</span>
            <span className="text-white/20 hidden sm:inline">&bull;</span>
            <Link href="/privacy" className="hover:text-white transition-colors underline underline-offset-2">
              Privacy Policy
            </Link>
            <span className="text-white/20 hidden sm:inline">&bull;</span>
            <Link href="/terms" className="hover:text-white transition-colors underline underline-offset-2">
              Terms &amp; Conditions
            </Link>
          </div>

          {/* Payment Method Badges */}
          <div className="flex items-center gap-3">
            {/* MasterCard Logo Badge */}
            <div className="flex items-center justify-center bg-[#183153] px-2.5 py-1 rounded shadow-sm border border-white/10" title="MasterCard Accepted">
              <svg width="38" height="24" viewBox="0 0 54 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
                <circle cx="21" cy="18" r="11" fill="#EB001B" />
                <circle cx="33" cy="18" r="11" fill="#F79E1B" />
                <g fill="#FF5F00">
                  <path d="M27 7.7a11 11 0 0 0-4.14 10.3 11 11 0 0 0 4.14 10.3 11 11 0 0 0 4.14-10.3A11 11 0 0 0 27 7.7z" />
                </g>
                <path d="M23 11.5h8M22.6 14.5h8.8M22.6 17.5h8.8M22.6 20.5h8.8M23 23.5h8" stroke="#183153" strokeWidth="0.9" />
                <text x="27" y="19.8" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontStyle="italic" letterSpacing="-0.2px">MasterCard</text>
              </svg>
            </div>

            {/* VISA Logo Badge */}
            <div className="flex items-center justify-center bg-[#1B3F8B] px-2.5 py-1 rounded shadow-sm border border-white/10" title="Visa Accepted">
              <svg width="38" height="24" viewBox="0 0 54 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
                <g transform="translate(8, 11)">
                  <path d="M4.5 0.5H0.4C0.1 0.5 -0.1 0.8 0.05 1.1L3.6 9.8L6.4 1.8C6.1 0.9 5.4 0.5 4.5 0.5Z" fill="#F7B600" />
                  <path d="M13.5 0.5H10.1L6.3 9.8L4.8 1.9C4.5 0.9 3.8 0.5 2.9 0.5H0L4.3 10.8C4.6 11.6 5.3 12.1 6.2 12.1C6.9 12.1 7.5 11.7 7.8 10.9L13.5 0.5Z" fill="#FFFFFF" />
                  <path d="M14.8 0.5H18.2L16.2 12.1H12.8L14.8 0.5Z" fill="#FFFFFF" />
                  <path d="M24.8 3.5C24.7 2.3 23.6 1.6 22.2 1.6C20.8 1.6 19.9 2.3 19.9 3.1C19.9 3.9 20.5 4.3 21.8 4.9C23.7 5.7 25.1 6.7 25.1 8.5C25.1 11 22.8 12.3 20.4 12.3C18 12.3 16.7 11.1 16.7 11.1L17.3 8.5C17.3 8.5 18.6 9.5 20.2 9.5C21.4 9.5 22.1 8.9 22.1 8.1C22.1 7.3 21.4 6.8 20.1 6.2C18.3 5.4 17.1 4.4 17.1 2.7C17.1 0.7 19.2 0 21.8 0C23.9 0 25 0.8 25 0.8L24.8 3.5Z" fill="#FFFFFF" />
                  <path d="M29.5 0.5H26.5L23.2 12.1H26.5L27.2 10.1H30.7L31 12.1H34.1L29.5 0.5ZM27.9 7.8L29 3.2L29.9 7.8H27.9Z" fill="#FFFFFF" />
                </g>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
