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
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-white flex-1"
                />
                <button
                  type="submit"
                  className="bg-[#E5F2C9] text-[#0A0B0C] font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-lg hover:bg-white transition-all whitespace-nowrap"
                >
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Links Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-12 border-b border-white/10">
          
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
              <li><Link href="/product/product1" className="hover:text-white transition-colors">CopperPro Balloon Whisk</Link></li>
              <li><Link href="/product/product2" className="hover:text-white transition-colors">Digital Culinary Scale</Link></li>
              <li><Link href="/product/product3" className="hover:text-white transition-colors">Forged Chef Shears</Link></li>
              <li><Link href="/shop" className="hover:text-white transition-colors">All Workshop Tools</Link></li>
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

        {/* Large Typographic Watermark Branding matching reference image */}
        <div className="pt-8 pb-4 text-center select-none pointer-events-none">
          <div className="text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-black uppercase tracking-tight text-white/5 font-sans leading-none">
            COPPER WHISK
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-4 text-[0.65rem] text-white/30 border-t border-white/5">
          <div>
            Copyright &copy; {currentYear} {siteConfig.brandName}. All Rights Reserved.
          </div>
          <div>
            Statement Descriptor: <strong className="text-white/50">{siteConfig.descriptor}</strong>
          </div>
        </div>

      </div>
    </footer>
  );
}
