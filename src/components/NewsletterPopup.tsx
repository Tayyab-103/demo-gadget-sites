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
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 max-w-[380px] w-[calc(100vw-2rem)] sm:w-full">
      <div className="rounded-3xl p-[1.5px] bg-brand-gradient shadow-2xl shadow-primary/30">
        <div className="relative rounded-[1.4rem] overflow-hidden bg-neutral-bg">
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 bg-black/50 hover:bg-primary text-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer z-20 backdrop-blur-sm transition-all border border-white/20"
            aria-label="Close newsletter popup"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="h-32 relative overflow-hidden">
            <img src="/img/newsletter_guitar.jpg" alt="Musician playing guitar" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-bg via-neutral-bg/50 to-transparent" />
            <div className="absolute bottom-3 left-4 right-10">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-brand-gradient text-[0.6rem] font-bold tracking-wider uppercase text-white mb-1.5">
                ♪ Insider List
              </span>
              <h3 className="text-lg font-black tracking-tight leading-snug text-white">
                Be first to hear about new gear
              </h3>
            </div>
          </div>

          <div className="p-5">
            {submitted ? (
              <div className="text-center py-2">
                <div className="w-10 h-10 rounded-full bg-brand-gradient text-white flex items-center justify-center text-lg mx-auto mb-2 font-black">✓</div>
                <h4 className="text-neutral-text font-black text-sm mb-1 uppercase tracking-wider">You&apos;re on the list!</h4>
                <p className="text-muted text-xs">
                  Watch your inbox for new arrivals and bundle deals from {siteConfig.brandName}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <p className="text-xs text-muted leading-relaxed mb-4">
                  Subscribe for new arrivals, restock alerts and bundle deals. One or two emails a month — that&apos;s it.
                </p>
                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    className="field !py-2.5 !text-sm"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="btn-primary w-full py-3 px-4 text-xs uppercase tracking-wider group">
                    Subscribe
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </div>
                <div className="flex items-center justify-between mt-3 text-[0.65rem] text-faint px-0.5">
                  <span>🔒 No spam, unsubscribe anytime</span>
                  <button type="button" onClick={handleClose} className="hover:text-neutral-text underline cursor-pointer">
                    No thanks
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
