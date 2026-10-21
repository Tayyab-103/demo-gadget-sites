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
    <div className="fixed inset-0 bg-ink/50 z-9999 flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-[2rem] w-full max-w-[460px] relative overflow-hidden shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full w-9 h-9 flex items-center justify-center cursor-pointer z-20 text-ink hover:bg-primary transition-colors shadow-md"
          aria-label="Close newsletter popup"
        >
          ✕
        </button>

        <div className="h-[190px] relative bg-brand-gradient">
          <img src="/img/contact1.png" alt="Fluffy pup in a patterned shirt" className="absolute right-0 bottom-0 h-full w-1/2 object-cover object-top" />
          <div className="relative h-full w-1/2 p-6 flex flex-col justify-end text-primary-text">
            <span className="text-[0.65rem] uppercase tracking-[0.2em] font-bold opacity-80 mb-1">The pack newsletter</span>
            <h3 className="font-display text-2xl font-semibold leading-tight">Tips, treats &amp; new arrivals</h3>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-14 h-14 rounded-full bg-brand-gradient text-primary-text flex items-center justify-center text-2xl mx-auto mb-3 font-bold">✓</div>
              <h4 className="font-display text-xl font-semibold text-ink mb-1">Welcome to the pack!</h4>
              <p className="text-muted text-sm">Thanks for subscribing to {siteConfig.brandName}.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-sm text-muted leading-relaxed mb-5">
                Get practical pet care tips, product news and restock alerts from {siteConfig.brandName} — about twice a month.
              </p>
              <input
                type="email"
                className="field mb-3"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-full bg-ink text-white hover:bg-primary-deep transition-colors py-3.5 rounded-full text-sm font-bold cursor-pointer"
              >
                Subscribe
              </button>
              <button type="button" onClick={handleClose} className="block mx-auto mt-3 text-xs text-faint hover:text-ink cursor-pointer">
                No thanks
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
