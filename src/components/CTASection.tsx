"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white border-b border-black/5 overflow-hidden" id="newsletter">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-6 lg:gap-10">
        <img
          src="/img/cta1.jpg"
          alt=""
          className="hidden lg:block w-64 xl:w-80 h-96 object-cover rounded-2xl shrink-0"
        />

        <div className="w-full max-w-3xl text-center">
          <span className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.25em] text-secondary mb-2 sm:mb-3 inline-block">
            Studio Newsletter
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase text-primary leading-[1.15] tracking-tight mb-2 sm:mb-3 font-serif">
            Join the Studio Collective
          </h2>

          <p className="text-neutral-text/60 text-xs sm:text-sm md:text-base max-w-md mx-auto mb-6 sm:mb-8">
            Get exclusive small-batch release notifications and studio guides delivered to your inbox.
          </p>

          {/* Subscription Container */}
          {subscribed ? (
            <div className="bg-[#FAF9F5] border border-black/10 text-primary font-bold text-xs sm:text-sm py-3.5 px-6 sm:px-8 rounded-full max-w-md mx-auto">
              ✓ Thank you for subscribing to {siteConfig.brandName}!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row items-center bg-[#FAF9F5] rounded-2xl sm:rounded-full p-1.5 border border-black/10 focus-within:border-primary transition-colors gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="w-full flex-1 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm text-primary placeholder:text-neutral-text/40 bg-transparent outline-none font-medium text-center sm:text-left"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-primary hover:bg-secondary text-white font-bold text-xs uppercase tracking-[0.16em] px-6 sm:px-7 py-2.5 sm:py-3 rounded-xl sm:rounded-full transition-all duration-300 shadow-sm cursor-pointer whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>
          )}
        </div>

        <img
          src="/img/cta2.jpg"
          alt=""
          className="hidden lg:block w-64 xl:w-80 h-96 object-cover rounded-2xl shrink-0"
        />
      </div>
    </section>
  );
}
