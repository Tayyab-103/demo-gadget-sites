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
    <div className="fixed inset-0 bg-black/60 z-9999 flex items-center justify-center p-6 transition-opacity duration-300 backdrop-blur-xs">
      <div className="bg-white rounded-2xl w-full max-w-[500px] border border-black/10 relative flex flex-col overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-white/90 border border-black/10 rounded-full w-8 h-8 flex items-center justify-center text-lg cursor-pointer z-10 text-primary hover:border-secondary hover:text-secondary transition-all"
          aria-label="Close newsletter popup"
        >
          &times;
        </button>

        {/* Visual Header */}
        <div className="h-[180px] relative">
          <img
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=900&q=80"
            alt="Artist palette with vibrant oil pigments"
            className="w-full h-full object-cover absolute inset-0"
          />
          {/* Transparent Color Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-primary/60 to-primary/90" />

          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="text-[0.7rem] uppercase tracking-[0.2em] font-bold text-secondary block mb-1">
              Exclusive Atelier Drop
            </span>
            <h3 className="text-2xl font-extrabold text-white m-0 tracking-tight">
              Unlock 15% Studio Discount
            </h3>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-8 bg-white">
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-full border-2 border-secondary text-secondary flex items-center justify-center text-xl mx-auto mb-4 bg-secondary/10 font-bold">
                ✓
              </div>
              <h4 className="text-primary font-bold text-lg mb-2">Welcome to the Atelier!</h4>
              <p className="text-neutral-text/60 text-sm">
                Check your inbox for your 15% studio promo code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-sm text-neutral-text/75 leading-relaxed mb-6">
                Join the {siteConfig.brandName} artist collective. Subscribe today to receive master tips, early access to new craft batches, and <strong>15% off</strong> on your first order.
              </p>

              <div className="mb-4">
                <input
                  type="email"
                  className="block w-full px-4 py-3.5 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-secondary transition-all text-neutral-text bg-neutral-bg"
                  placeholder="Enter your artist email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-block font-bold text-center whitespace-nowrap bg-secondary text-primary hover:bg-primary hover:text-white transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-wider w-full block cursor-pointer shadow-md hover:shadow-lg"
              >
                Claim 15% Studio Discount
              </button>

              <span className="block text-center text-[0.7rem] text-neutral-text/45 mt-3">
                We respect your privacy. Unsubscribe anytime.
              </span>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
