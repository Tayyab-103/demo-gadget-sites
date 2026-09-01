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
      <div className="bg-white rounded-xl w-full max-w-[500px] border-2 border-primary relative flex flex-col overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-white border-2 border-primary/20 rounded-xl w-8 h-8 flex items-center justify-center text-lg cursor-pointer z-10 text-primary hover:border-secondary hover:text-secondary transition-all"
          aria-label="Close newsletter popup"
        >
          &times;
        </button>

        {/* Visual Header */}
        <div className="h-[180px] relative">
          <img
            src="/img/contact2.jpg"
            alt="Artist workspace with studio supplies"
            className="w-full h-full object-cover absolute inset-0"
          />
          {/* Transparent Color Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/35 to-primary/85" />

          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="text-[0.7rem] uppercase tracking-[0.2em] font-bold text-secondary block mb-1">
              Studio Exclusive
            </span>
            <h3 className="text-2xl font-extrabold text-white m-0 tracking-tight">
              Save 15% Today!
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
              <h4 className="text-primary font-bold text-lg mb-2">Subscription Successful!</h4>
              <p className="text-neutral-text/50 text-sm">
                Check your inbox for your 15% discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-sm text-neutral-text/70 leading-relaxed mb-6">
                Join the {siteConfig.brandName} community. Subscribe today to get studio guides, early access to small-batch releases, and <strong>15% off</strong> on your first order.
              </p>

              <div className="mb-4">
                <input
                  type="email"
                  className="block w-full px-4 py-3 text-sm md:text-base border-2 border-black/10 rounded-xl focus:outline-none focus:border-primary transition-all text-neutral-text bg-white"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-block font-bold text-center whitespace-nowrap bg-secondary text-secondary-text border-2 border-secondary hover:bg-primary hover:border-primary hover:text-primary-text transition-all duration-300 py-3.5 px-8 rounded-full text-sm uppercase tracking-wide w-full block cursor-pointer"
              >
                Unlock 15% Discount
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
