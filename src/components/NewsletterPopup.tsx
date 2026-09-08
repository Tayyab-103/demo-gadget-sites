"use client";

import React, { useState, useEffect } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check if dismissed previously
    const popupDismissed = localStorage.getItem("newsletter_dismissed");
    if (popupDismissed) return;

    // Show like a floating cookie modal after a brief delay or scroll
    let isPopupShown = false;

    const triggerPopup = () => {
      if (!isPopupShown) {
        isPopupShown = true;
        setIsVisible(true);
      }
    };

    const timer = window.setTimeout(() => {
      triggerPopup();
    }, 4000);

    const handleScroll = () => {
      if (window.scrollY >= 350) {
        triggerPopup();
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("newsletter_dismissed", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setIsVisible(false);
        localStorage.setItem("newsletter_dismissed", "true");
      }, 2500);
    }
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-label="Exclusive Pet Discount Offer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 max-w-sm sm:max-w-md w-[calc(100%-2rem)] sm:w-[420px] animate-fadeIn transition-all duration-500 ease-out"
    >
      <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-stone-200/90 shadow-2xl p-5 sm:p-6 relative overflow-hidden flex flex-col gap-3.5">
        {/* Decorative Top Ambient Accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary" />

        {/* Header Row: Badge & Close Button */}
        <div className="flex items-center justify-between gap-3 pt-1">
          <div className="inline-flex items-center gap-1.5 bg-secondary/15 border border-secondary/30 px-3 py-1 rounded-full text-[0.68rem] font-black uppercase tracking-wider text-secondary">
            <span>🐾</span>
            <span>VIP Pet Club • Save 15%</span>
          </div>

          <button
            onClick={handleDismiss}
            aria-label="Dismiss offer"
            className="w-7 h-7 rounded-full bg-stone-100 hover:bg-stone-200 text-neutral-text/60 hover:text-primary flex items-center justify-center text-xs transition-colors cursor-pointer border-none"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        {submitted ? (
          <div className="py-4 text-center flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-secondary flex items-center justify-center text-xl font-bold mb-2 shadow-xs">
              ✓
            </div>
            <h4 className="text-primary font-serif font-bold text-lg mb-1">
              Welcome to the Pack!
            </h4>
            <p className="text-neutral-text/75 text-xs leading-relaxed max-w-xs">
              Check your inbox for your 15% promotional discount voucher code for {siteConfig.brandName}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-primary leading-tight mb-1">
                Unlock 15% Off Pet Supplies
              </h3>
              <p className="text-neutral-text/75 text-xs leading-relaxed">
                Join our pet parent collective for veterinarian care guidance, exclusive bundle releases, and an instant <strong>15% voucher</strong>.
              </p>
            </div>

            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full bg-neutral-bg border border-stone-300 rounded-full px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-neutral-text placeholder:text-neutral-text/40 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all shadow-xs"
              />
            </div>

            {/* Action Buttons (Cookie-Modal Style) */}
            <div className="flex items-center gap-2 pt-1">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-secondary text-white hover:bg-primary font-black text-[0.7rem] uppercase tracking-wider py-2.5 sm:py-3 px-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer text-center whitespace-nowrap"
              >
                <span>Claim 15% Off</span>
                <span>🐾</span>
              </button>

              <button
                type="button"
                onClick={handleDismiss}
                className="px-3.5 py-2.5 sm:py-3 rounded-full text-[0.68rem] font-bold text-neutral-text/60 hover:text-primary hover:bg-stone-100 transition-colors cursor-pointer bg-transparent border border-stone-200"
              >
                Maybe later
              </button>
            </div>

            <span className="text-center text-[0.62rem] text-neutral-text/50">
              No spam ever. 100% pet-friendly privacy.
            </span>
          </form>
        )}
      </div>
    </div>
  );
}
