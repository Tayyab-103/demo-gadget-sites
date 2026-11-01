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
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#141F1A] text-white relative overflow-hidden border-t border-white/10" id="footer">
      
      {/* Top Architectural Dispatch Banner */}
      <div className="border-b border-white/8 relative z-10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-xl">
              <span className="block text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-2">
                The Voyager Dispatch
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                Unlock 15% Off Your Next Expedition
              </h3>
              <p className="text-white/70 text-xs sm:text-sm mt-2 leading-relaxed">
                Join our private newsletter for early batch releases, luggage care manuals, and exclusive seasonal privileges.
              </p>
            </div>

            {/* Newsletter Input */}
            <div className="w-full lg:max-w-md flex-shrink-0">
              {subscribed ? (
                <div className="p-4 rounded-lg bg-white/10 border border-secondary text-secondary text-xs sm:text-sm font-bold flex items-center gap-2.5">
                  <span className="text-lg">✓</span>
                  <span>Thank you! Your 15% discount code is on its way.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email..."
                    required
                    className="flex-1 bg-white/10 border border-white/15 rounded-[3px] px-4 py-3 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-secondary transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-secondary text-white hover:opacity-90 transition-opacity px-6 py-3 rounded-[3px] text-xs font-bold uppercase tracking-widest flex-shrink-0 cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Col 1 & 2: Brand Story */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block text-xl font-black uppercase tracking-tight text-white mb-3">
              {siteConfig.brandName}
            </Link>
            <p className="text-xs text-white/60 leading-relaxed max-w-sm mb-4">
              Premium luggage, weekender duffels, and compression packing systems engineered to endure every terminal and trail. Operated by {siteConfig.corpName}.
            </p>
            <div className="text-[0.7rem] text-white/50 space-y-1">
              <p>📍 {siteConfig.address}</p>
              <p>📞 {siteConfig.phone}</p>
              <p>✉️ {siteConfig.email}</p>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70 font-medium">
              <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/shop" className="hover:text-secondary transition-colors">All Products</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors">Our Story &amp; Craft</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Col 4: Trust & Policies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">
              Assurance
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70 font-medium">
              <li><span className="text-white/40">Carrier:</span> {siteConfig.shippingCarrier}</li>
              <li><span className="text-white/40">Transit:</span> {siteConfig.shippingPeriod} Days</li>
              <li><span className="text-white/40">Trial:</span> 60-Day Guarantee</li>
              <li><span className="text-white/40">Warranty:</span> 1-Year Comprehensive</li>
            </ul>
          </div>

          {/* Col 5: Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70 font-medium">
              <li><Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link></li>
              <li><span className="text-white/40">Billing:</span> {siteConfig.descriptor}</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[0.68rem] text-white/40">
          <p>
            &copy; {currentYear} {siteConfig.brandName}. All rights reserved. Operated by {siteConfig.corpName}.
          </p>
          <button
            onClick={scrollToTop}
            className="hover:text-secondary transition-colors flex items-center gap-1 cursor-pointer font-bold uppercase tracking-wider"
          >
            Back to Top ↑
          </button>
        </div>
      </div>

    </footer>
  );
}
