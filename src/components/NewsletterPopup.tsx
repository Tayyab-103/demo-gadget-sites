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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-9999 flex items-center justify-center p-6 transition-opacity duration-300">
      <div className="bg-white rounded-2xl w-full max-w-[480px] border border-blue-100 relative flex flex-col overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full w-8 h-8 flex items-center justify-center text-lg cursor-pointer z-10 text-gray-700 hover:text-blue-600 transition-all shadow-sm"
          aria-label="Close newsletter popup"
        >
          &times;
        </button>

        {/* Visual Header */}
        <div className="h-[180px] relative bg-gray-900">
          <img
            src="/img/newsletterimg.jpg"
            alt="Automotive Performance Workshop"
            className="w-full h-full object-cover absolute inset-0 opacity-80"
          />
          {/* Transparent Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-blue-950/60 to-[#0A192F]" />

          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="text-[0.7rem] uppercase tracking-[0.2em] font-black text-blue-400 block mb-1">
              VIP Driver&apos;s Club
            </span>
            <h3 className="text-2xl font-black text-white m-0 tracking-tight uppercase">
              Save 15% on Parts!
            </h3>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-full border-2 border-green-600 text-green-600 flex items-center justify-center text-xl mx-auto mb-4 font-bold">
                ✓
              </div>
              <h4 className="text-gray-900 font-bold text-lg mb-2">Subscription Successful!</h4>
              <p className="text-gray-500 text-xs sm:text-sm">
                Check your inbox for your 15% discount coupon code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5 font-normal">
                Join {siteConfig.brandName}. Subscribe today to receive precision fitment tips, early access to new part releases, and <strong>15% off</strong> your first order.
              </p>

              <div className="mb-4">
                <input
                  type="email"
                  className="block w-full px-4 py-3 text-xs sm:text-sm border border-gray-300 rounded-xl focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-gray-900 bg-white"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-block font-extrabold text-center whitespace-nowrap bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transition-all duration-200 py-3.5 px-8 rounded-xl text-xs uppercase tracking-wider w-full shadow-lg shadow-blue-600/30 cursor-pointer"
              >
                Unlock 15% Discount
              </button>

              <span className="block text-center text-[0.68rem] text-gray-400 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </span>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
