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
    <div className="fixed inset-0 bg-black/60 z-9999 flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-[480px] border border-black/10 relative flex flex-col overflow-hidden shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-full w-8 h-8 flex items-center justify-center text-base cursor-pointer z-20 text-neutral-800 hover:bg-secondary hover:text-white transition-all shadow-md"
          aria-label="Close newsletter popup"
        >
          ✕
        </button>

        {/* Visual Header with Pet */}
        <div className="h-[200px] relative">
          <img
            src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=900&q=80"
            alt="Adorable pet"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-[#182825]/40 to-[#182825]/90" />

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[0.68rem] uppercase tracking-[0.2em] font-black text-secondary block mb-1">
              🐾 VIP Pet Parent Club
            </span>
            <h3 className="text-2xl font-black text-white m-0 tracking-tight leading-tight">
              Unlock 15% Off Your First Pet Bundle!
            </h3>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 bg-white">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl mx-auto mb-3 font-bold">
                ✓
              </div>
              <h4 className="text-primary font-black text-xl mb-1">Welcome to the Pack!</h4>
              <p className="text-neutral-text/70 text-xs leading-relaxed">
                Check your inbox for your 15% promotional discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-xs sm:text-sm text-neutral-text/75 leading-relaxed mb-6">
                Join thousands of loving dog and cat owners. Subscribe to get veterinarian care tips, exclusive bundle drops, and an instant <strong>15% discount</strong> on today&apos;s order.
              </p>

              <div className="mb-4">
                <input
                  type="email"
                  className="block w-full px-4 py-3.5 text-xs sm:text-sm border border-black/10 rounded-2xl focus:outline-none focus:border-secondary transition-all text-neutral-text bg-[#FAF8F5] placeholder:text-neutral-text/40"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 font-black text-center whitespace-nowrap bg-secondary text-white hover:brightness-110 transition-all duration-300 py-3.5 px-6 rounded-full text-xs uppercase tracking-widest cursor-pointer shadow-md"
              >
                <span>Claim 15% Pet Voucher</span>
                <span>🐾</span>
              </button>

              <span className="block text-center text-[0.68rem] text-neutral-text/40 mt-3">
                No spam ever. 100% pet-friendly privacy policy.
              </span>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
