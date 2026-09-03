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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-9999 flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300">
      <div className="bg-white rounded-3xl w-full max-w-[500px] border border-black/10 relative flex flex-col overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-black/10 rounded-full w-8 h-8 flex items-center justify-center text-lg cursor-pointer z-10 text-primary hover:bg-primary hover:text-white transition-all"
          aria-label="Close newsletter popup"
        >
          &times;
        </button>

        {/* Visual Header */}
        <div className="h-[180px] relative">
          <img
            src="/img/brand/hero_interior.jpg"
            alt="Alderwyn Home Living Interiors room styling"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary/90" />

          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="text-[0.65rem] uppercase tracking-[0.2em] font-bold text-white/75 block mb-1">
              PRIVATE STYLING PRIVILEGE
            </span>
            <h3 className="font-serif font-normal text-2xl sm:text-3xl uppercase tracking-wide text-white m-0">
              Enjoy 15% Off
            </h3>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl mx-auto mb-4 font-bold shadow-sm">
                ✓
              </div>
              <h4 className="font-serif font-normal text-xl uppercase tracking-wide text-primary mb-2">Welcome to Alderwyn</h4>
              <p className="text-neutral-text/60 text-xs uppercase tracking-wider">
                Check your inbox for your 15% complimentary discount privilege.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-xs sm:text-sm text-neutral-text/70 leading-relaxed mb-6">
                Join {siteConfig.brandName}. Subscribe to receive interior styling journals, bespoke collection releases, and <strong>15% off</strong> on your first order.
              </p>

              <div className="mb-4">
                <input
                  type="email"
                  className="block w-full px-4 py-3.5 text-xs sm:text-sm border border-black/10 rounded-2xl focus:outline-none focus:border-primary transition-all text-neutral-text bg-neutral-bg"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 font-bold text-center whitespace-nowrap bg-primary text-white hover:bg-neutral-text transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-[0.16em] w-full cursor-pointer shadow-md"
              >
                <span>Unlock 15% Privilege</span>
                <span>→</span>
              </button>

              <span className="block text-center text-[0.65rem] text-neutral-text/40 uppercase tracking-wider mt-3">
                We respect your privacy. Unsubscribe at any time.
              </span>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

