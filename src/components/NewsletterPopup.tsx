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
      }, 2000);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/75 backdrop-blur-md z-9999 flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300">
      <div className="bg-[#16171A] rounded-2xl w-full max-w-[480px] border border-white/15 relative flex flex-col overflow-hidden shadow-2xl text-white">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-black/60 border border-white/20 rounded-full w-8 h-8 flex items-center justify-center text-sm cursor-pointer z-10 text-white hover:bg-[#E5F2C9] hover:text-[#0E0F11] transition-all shadow-sm"
          aria-label="Close newsletter popup"
        >
          &times;
        </button>

        {/* Visual Header */}
        <div className="h-[160px] relative bg-[#23252B]">
          <img
            src="/images/whisk-action-1.jpg"
            alt="Pastry chef holding copper balloon whisk"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16171A] via-[#16171A]/70 to-transparent" />

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[0.65rem] uppercase tracking-[0.2em] font-bold text-[#E5F2C9] block mb-1">
              Workshop Privileges
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white m-0 tracking-tight">
              Enjoy 15% Off Your Order
            </h3>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-full border-2 border-[#E5F2C9] text-[#E5F2C9] flex items-center justify-center text-xl mx-auto mb-4 font-bold bg-[#E5F2C9]/10">
                ✓
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Welcome to {siteConfig.brandName}</h4>
              <p className="text-white/60 text-xs sm:text-sm">
                Your 15% welcome voucher code has been registered.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                Subscribe for gourmet chef techniques, seasonal kitchen guides, and receive <strong>15% off</strong> your first tool purchase.
              </p>

              <div className="mb-4">
                <input
                  type="email"
                  className="block w-full px-4 py-3.5 text-xs sm:text-sm border border-white/15 rounded-xl focus:outline-none focus:border-[#E5F2C9] transition-all text-white bg-[#23252B] placeholder:text-white/30"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center font-bold text-center bg-[#E5F2C9] text-[#0E0F11] hover:bg-white transition-all duration-300 py-3.5 px-6 rounded-xl text-xs uppercase tracking-widest cursor-pointer shadow-md"
              >
                Claim 15% Workshop Voucher &rarr;
              </button>

              <span className="block text-center text-[0.65rem] text-white/40 mt-3">
                No spam. Unsubscribe anytime with one click.
              </span>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
