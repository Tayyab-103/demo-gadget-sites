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
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 max-w-[380px] w-[calc(100vw-2rem)] sm:w-full transition-all duration-300">
      <div className="bg-white rounded-3xl border border-black/10 shadow-2xl overflow-hidden relative group/popup ring-1 ring-black/5">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 bg-black/40 hover:bg-secondary text-white rounded-full w-7 h-7 flex items-center justify-center text-sm cursor-pointer z-20 backdrop-blur-sm transition-all border border-white/20"
          aria-label="Close newsletter popup"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Compact Hero Banner */}
        <div className="h-28 relative overflow-hidden">
          <img
            src="/img/newsletter_garden.jpg"
            alt={`${siteConfig.brandName} garden tools`}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/75 to-transparent" />

          <div className="absolute bottom-3 left-4 right-10 text-white">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-secondary/90 text-[0.6rem] font-bold tracking-wider uppercase text-white mb-1 shadow-xs">
              <span>🌿</span> Garden Club
            </span>
            <h3 className="heading-serif text-xl sm:text-2xl leading-snug text-white drop-shadow">
              15% Off Your First Order
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5">
          {submitted ? (
            <div className="text-center py-2">
              <div className="w-10 h-10 rounded-full bg-neutral-bg text-secondary flex items-center justify-center text-lg mx-auto mb-2 font-black border border-secondary/30">
                ✓
              </div>
              <h4 className="text-neutral-text font-black text-sm mb-1 uppercase tracking-wider">
                You&apos;re On The List!
              </h4>
              <p className="text-gray-600 text-xs mb-3 font-medium">
                Use this code at checkout:
              </p>
              <div className="inline-block bg-neutral-bg border border-dashed border-secondary px-4 py-2 rounded-xl text-neutral-text font-mono font-bold text-sm tracking-widest select-all">
                {`${siteConfig.brandName.split(" ")[0].toUpperCase()}15`}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-xs text-gray-600 leading-relaxed mb-3.5 font-medium">
                Join our garden club for seasonal planting tips, tool-care guides and an instant <strong>15% discount</strong> code.
              </p>

              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all text-neutral-text bg-neutral-bg placeholder:text-gray-400 font-medium"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-4 rounded-full text-xs uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2 group"
                >
                  <span>Get 15% Discount</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>

              <div className="flex items-center justify-between mt-2.5 text-[0.65rem] text-gray-400 font-medium px-0.5">
                <span>🔒 No spam guaranteed</span>
                <button
                  type="button"
                  onClick={handleClose}
                  className="hover:text-gray-700 underline cursor-pointer"
                >
                  No thanks
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
