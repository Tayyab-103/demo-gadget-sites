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
      }, 2000); // Close after 2 seconds
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-9999 flex items-center justify-center p-6 transition-opacity duration-300">
      <div className="bg-white rounded-[1.75rem] w-full max-w-[500px] shadow-2xl relative flex flex-col overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-white/90 border border-black/10 rounded-full w-8 h-8 flex items-center justify-center text-lg cursor-pointer z-10 text-ink hover:bg-primary hover:border-primary transition-all"
          aria-label="Close newsletter popup"
        >
          &times;
        </button>

        {/* Visual Header */}
        <div className="h-[180px] relative">
          <img
            src="https://images.unsplash.com/photo-1512909006721-3d6018887383?w=900&q=80"
            alt="Wrapped gift box tied with ribbon"
            className="w-full h-full object-cover absolute inset-0"
          />
          {/* Transparent Color Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-ink/20 to-ink/80" />

          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="text-[0.7rem] uppercase tracking-[0.2em] font-bold text-primary block mb-1">
              Welcome Gift
            </span>
            <h3 className="text-2xl font-extrabold text-white m-0 tracking-tight">
              Take 15% Off Your First Order
            </h3>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-8">
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-full border-2 border-green-600 text-green-600 flex items-center justify-center text-xl mx-auto mb-4">
                ✓
              </div>
              <h4 className="text-ink font-bold text-lg mb-2">Subscription Successful!</h4>
              <p className="text-neutral-text/50 text-sm">
                Check your inbox for your welcome code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-sm text-neutral-text/70 leading-relaxed mb-6">
                Join the {siteConfig.brandName} list for gift guides, early access to new pieces and <strong>15% off</strong> your first order.
              </p>

              <div className="mb-4">
                <input
                  type="email"
                  className="block w-full px-4 py-3 text-sm md:text-base border-2 border-black/10 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all text-neutral-text bg-white"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-block font-bold text-center whitespace-nowrap bg-primary text-primary-text border-2 border-primary hover:bg-ink hover:border-ink hover:text-white transition-all duration-300 py-3.5 px-8 rounded-full text-sm uppercase tracking-wide w-full block cursor-pointer"
              >
                Unlock My 15% Off
              </button>

              <span className="block text-center text-[0.7rem] text-neutral-text/40 mt-3">
                We value your privacy. Unsubscribe at any time.
              </span>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
