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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl w-full max-w-[460px] border border-black/8 relative flex flex-col overflow-hidden shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3.5 right-3.5 bg-white/90 backdrop-blur-md border border-black/10 rounded-full w-8 h-8 flex items-center justify-center text-xs cursor-pointer z-20 text-primary hover:text-secondary hover:border-secondary transition-all shadow-xs"
          aria-label="Close newsletter popup"
        >
          ✕
        </button>

        {/* Visual Header */}
        <div className="h-[150px] sm:h-[180px] relative bg-[#141F1A]">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900&q=80"
            alt="Journey Trail travel goods"
            className="w-full h-full object-cover absolute inset-0 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141F1A] via-[#141F1A]/60 to-transparent" />

          <div className="absolute bottom-4 left-5 right-5 sm:bottom-5 sm:left-6 sm:right-6 text-white">
            <span className="text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.2em] font-semibold text-secondary block mb-1">
              Voyager Privilege Pass
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white m-0 leading-tight">
              Unlock 15% Off Your Next Expedition
            </h3>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-5 sm:p-7 bg-[#FAF8F4]">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-12 h-12 rounded-full bg-secondary/15 text-secondary flex items-center justify-center text-xl mx-auto mb-3 font-bold">
                ✓
              </div>
              <h4 className="font-serif text-primary font-bold text-lg mb-1">Pass Activated</h4>
              <p className="text-neutral-text/65 text-xs">
                Check your inbox for your 15% exclusive coupon code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-xs sm:text-sm text-neutral-text/70 leading-relaxed mb-5">
                Join the {siteConfig.brandName} dispatch for privileged access to limited batch gear, luggage care manuals, and <strong>15% off</strong> your first order.
              </p>

              <div className="mb-3.5">
                <input
                  type="email"
                  className="w-full px-4 py-3.5 text-xs sm:text-sm border border-black/12 rounded-[3px] focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/20 transition-all text-neutral-text bg-white"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-[3px] bg-secondary text-white hover:bg-[#141F1A] transition-colors duration-200 font-bold text-xs uppercase tracking-widest shadow-md cursor-pointer"
              >
                Claim 15% Privilege Code
              </button>

              <span className="block text-center text-[0.65rem] text-neutral-text/45 mt-3 font-medium">
                Zero spam. You can unsubscribe at any point with 1 click.
              </span>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
