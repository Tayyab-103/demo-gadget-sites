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
    }, 10000);

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
    <div className="fixed inset-0 bg-black/60 z-9999 flex items-center justify-center p-4 transition-opacity duration-300">
      <div className="bg-white rounded-3xl w-full max-w-[480px] border border-purple-100 shadow-2xl relative flex flex-col overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 bg-white/80 backdrop-blur-xs rounded-full w-8 h-8 flex items-center justify-center text-lg cursor-pointer z-20 text-gray-700 hover:bg-white shadow-xs"
          aria-label="Close newsletter popup"
        >
          &times;
        </button>

        {/* Visual Header */}
        <div className="h-[170px] relative">
          <img
            src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80"
            alt="Organic baby clothing and accessories"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent" />

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[0.68rem] uppercase tracking-wider font-extrabold text-pink-300 block mb-1">
              🍼 Welcome Little Parent!
            </span>
            <h3 className="text-2xl font-black text-white m-0 tracking-tight leading-tight">
              Enjoy 15% Off Your Baby Bundle
            </h3>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-7">
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-xl mx-auto mb-3">
                🎀
              </div>
              <h4 className="text-purple-700 font-bold text-lg mb-1">Welcome to our Family!</h4>
              <p className="text-gray-500 text-xs">
                Use code <strong className="text-purple-700">BABY15</strong> at checkout for 15% off.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                Join the {siteConfig.brandName} family circle. Get gentle newborn tips, early access to new releases, and <strong>15% off</strong> your first order.
              </p>

              <div className="mb-4">
                <input
                  type="email"
                  className="block w-full px-4 py-3 text-xs sm:text-sm border border-purple-200 rounded-full focus:outline-none focus:border-purple-600 transition-all text-gray-800 bg-purple-50/40"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="font-bold text-center bg-pink-500 hover:bg-pink-600 text-white transition-all py-3.5 px-6 rounded-full text-xs uppercase tracking-wider w-full shadow-md cursor-pointer"
              >
                Claim 15% Baby Discount
              </button>

              <span className="block text-center text-[0.65rem] text-gray-400 mt-3">
                We respect your family&apos;s privacy. Unsubscribe at any time.
              </span>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
