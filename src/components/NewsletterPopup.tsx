"use client";

import React, { useState, useEffect } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let popupDismissed: string | null = null;
    try {
      popupDismissed = localStorage.getItem("newsletter_dismissed");
    } catch {}
    if (popupDismissed) return;

    let hasSpentTimeOnPage = false;
    let hasShownScrollIntent = false;
    let isPopupShown = false;

    const showWhenReady = () => {
      if (hasSpentTimeOnPage && hasShownScrollIntent && !isPopupShown) {
        isPopupShown = true;
        setIsVisible(true);
        // Next frame so the slide-in transition runs
        requestAnimationFrame(() => setIsOpen(true));
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

  const dismiss = () => {
    setIsOpen(false);
    try {
      localStorage.setItem("newsletter_dismissed", "true");
    } catch {}
    window.setTimeout(() => setIsVisible(false), 400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      window.setTimeout(dismiss, 2500);
    }
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-label="Newsletter signup"
      className={`fixed z-[9999] bottom-3 right-3 left-3 sm:left-auto sm:bottom-6 sm:right-6 sm:w-[380px] transition-all duration-500 ease-out ${
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35)] border border-black/10">
        {/* Close Button */}
        <button
          onClick={dismiss}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 text-primary flex items-center justify-center text-lg leading-none shadow-sm hover:bg-secondary hover:text-secondary-text transition-colors cursor-pointer"
          aria-label="Close newsletter popup"
        >
          &times;
        </button>

        {/* Image + offer header */}
        <div className="flex">
          <div className="relative w-28 sm:w-32 shrink-0">
            <img
              src="/img/cta1.jpg"
              alt="Handwoven textiles hanging in a fabric shop"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20" />
          </div>

          <div className="flex-1 min-w-0 p-4 sm:p-5 pr-11">
            {submitted ? (
              <div className="py-3">
                <div className="w-9 h-9 rounded-full bg-secondary text-secondary-text flex items-center justify-center text-base mb-3">
                  ✓
                </div>
                <h4 className="font-serif font-bold text-primary text-base mb-1">You&apos;re on the list!</h4>
                <p className="text-xs text-neutral-text/60 leading-relaxed">
                  Check your inbox for your 15% discount code.
                </p>
              </div>
            ) : (
              <>
                <span className="text-[0.6rem] uppercase tracking-[0.22em] font-bold text-secondary block mb-1">
                  Members Exclusive
                </span>
                <h3 className="font-serif font-black text-primary text-xl sm:text-2xl leading-tight mb-1.5">
                  Take 15% Off
                </h3>
                <p className="text-xs text-neutral-text/65 leading-relaxed">
                  Join {siteConfig.brandName} for new fabric arrivals, care tips, and your first-order discount.
                </p>
              </>
            )}
          </div>
        </div>

        {/* Form */}
        {!submitted && (
          <form onSubmit={handleSubmit} className="border-t border-black/5 bg-neutral-bg p-3 sm:p-4">
            <div className="flex items-center gap-2 bg-white rounded-full border border-black/10 p-1 focus-within:border-secondary transition-colors">
              <input
                type="email"
                className="flex-1 min-w-0 bg-transparent px-3 py-2 text-sm text-neutral-text placeholder:text-neutral-text/40 outline-none"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="shrink-0 bg-secondary text-secondary-text hover:bg-primary hover:text-primary-text font-bold text-[0.7rem] uppercase tracking-wider px-4 py-2 rounded-full transition-colors cursor-pointer"
              >
                Get 15%
              </button>
            </div>
            <span className="block text-center text-[0.62rem] text-neutral-text/45 mt-2">
              No spam. Unsubscribe at any time.
            </span>
          </form>
        )}
      </div>
    </div>
  );
}
