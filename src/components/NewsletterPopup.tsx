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
    const popupDismissed = localStorage.getItem("newsletter_dismissed");
    if (popupDismissed) return;

    let hasSpentTimeOnPage = false;
    let hasShownScrollIntent = false;
    let isPopupShown = false;

    const showWhenReady = () => {
      if (hasSpentTimeOnPage && hasShownScrollIntent && !isPopupShown) {
        isPopupShown = true;
        setIsVisible(true);
      }
    };

    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight * 0.6) {
        hasShownScrollIntent = true;
        showWhenReady();
      }
    };

    const timer = window.setTimeout(() => {
      hasSpentTimeOnPage = true;
      showWhenReady();
    }, 12000);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClose = () => {
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
    <div className="fixed inset-0 bg-black/70 z-9999 flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300 backdrop-blur-sm">
      <div className="bg-white rounded-2xl sm:rounded-3xl w-full max-w-[480px] border border-gray-200 relative flex flex-col overflow-hidden shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm cursor-pointer z-20 hover:bg-secondary hover:text-secondary-text transition-all shadow-md"
          aria-label="Close newsletter popup"
        >
          ✕
        </button>

        {/* Visual Header with Electronics */}
        <div className="h-[190px] relative">
          <img
            src="/img/hero.jpg"
            alt="Modern Circuit Electronics"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-primary/70 to-primary" />

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[0.68rem] uppercase tracking-[0.2em] font-black text-secondary block mb-1">
              ⚡ Hardware Insider Club
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white m-0 tracking-tight leading-tight uppercase">
              Unlock 15% Off Your First Device!
            </h3>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 bg-white">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-2xl bg-primary text-secondary flex items-center justify-center text-2xl mx-auto mb-3 font-black border border-secondary/40">
                ✓
              </div>
              <h4 className="text-primary font-black text-xl mb-1 uppercase">Welcome to the Circuit</h4>
              <p className="text-gray-600 text-xs leading-relaxed">
                Check your inbox for your 15% hardware discount voucher code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                Join thousands of creators, engineers, and tech enthusiasts. Subscribe to get early access to new semiconductor releases and an instant <strong>15% discount</strong> on today&apos;s order.
              </p>

              <div className="mb-4">
                <input
                  type="email"
                  className="block w-full px-4 py-3.5 text-xs sm:text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-primary transition-all text-gray-900 bg-gray-50 placeholder:text-gray-400"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 font-black text-center whitespace-nowrap bg-primary text-secondary hover:bg-slate-800 transition-all duration-300 py-3.5 px-6 rounded-xl text-xs uppercase tracking-widest cursor-pointer shadow-md border border-primary"
              >
                <span>Claim 15% Hardware Voucher</span>
                <span>→</span>
              </button>

              <span className="block text-center text-[0.68rem] text-gray-400 mt-3">
                No spam ever. 100% encrypted privacy guarantee.
              </span>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
