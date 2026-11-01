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
      }, 2200);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl w-full max-w-[460px] border border-black/8 relative flex flex-col overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3.5 right-3.5 bg-white/90 backdrop-blur-md border border-black/10 rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm cursor-pointer z-20 text-primary hover:text-secondary hover:border-secondary transition-all"
          aria-label="Close newsletter popup"
        >
          ✕
        </button>

        {/* Visual Header */}
        <div className="h-[140px] sm:h-[170px] relative">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900&q=80"
            alt="Journey Trail travel goods"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/65 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-6 sm:right-6 text-white">
            <span className="text-[0.58rem] sm:text-[0.65rem] uppercase tracking-[0.2em] font-bold text-secondary block mb-1">
              Voyager Privilege Pass
            </span>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white m-0 leading-tight">
              Unlock 15% Off Your First Trip
            </h3>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-4 sm:p-7">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xl mx-auto mb-3 font-bold">
                ✓
              </div>
              <h4 className="text-primary font-black uppercase text-base mb-1">Pass Activated!</h4>
              <p className="text-neutral-text/60 text-xs">
                Check your inbox for your 15% exclusive coupon code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-xs sm:text-sm text-neutral-text/70 leading-relaxed mb-5">
                Join the {siteConfig.brandName} dispatch for privileged access to limited batch gear, travel guides, and <strong>15% off</strong> your first order.
              </p>

              <div className="mb-4">
                <input
                  type="email"
                  className="w-full px-4.5 py-3.5 text-xs sm:text-sm border border-black/12 rounded-full focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/15 transition-all text-neutral-text bg-white"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-secondary text-secondary-text hover:bg-primary hover:text-white transition-all duration-300 font-bold text-xs uppercase tracking-widest shadow-md hover:shadow-lg cursor-pointer"
              >
                Claim 15% Privilege Code
              </button>

              <span className="block text-center text-[0.65rem] text-neutral-text/40 mt-3 font-medium">
                Zero spam. You can unsubscribe at any point with 1 click.
              </span>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
