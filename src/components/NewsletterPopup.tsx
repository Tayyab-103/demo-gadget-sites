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
      }, 2000);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6 transition-opacity duration-300 backdrop-blur-sm">
      <div className="bg-white rounded-3xl w-full max-w-[500px] border border-black/10 relative flex flex-col overflow-hidden shadow-2xl animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center text-lg cursor-pointer z-10 text-primary hover:text-secondary shadow transition-all"
          aria-label="Close newsletter popup"
        >
          &times;
        </button>

        {/* Visual Header */}
        <div className="h-[200px] relative">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=80"
            alt="Modern Meadow VIP Collection"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="text-[0.68rem] uppercase tracking-[0.2em] font-bold text-secondary block mb-1">
              VIP Atelier Access
            </span>
            <h3 className="font-heading text-2xl font-bold text-white m-0 tracking-tight uppercase">
              Save 15% Today!
            </h3>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-8">
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-full border-2 border-green-600 text-green-600 flex items-center justify-center text-xl mx-auto mb-4 font-bold">
                ✓
              </div>
              <h4 className="font-heading text-primary font-bold text-lg mb-2 uppercase">Welcome to Modern Meadow!</h4>
              <p className="text-neutral-text/60 text-xs">
                Use code <strong className="text-secondary font-bold">MEADOW15</strong> at checkout for 15% off.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-xs sm:text-sm text-neutral-text/70 leading-relaxed mb-6">
                Join the {siteConfig.brandName} circle. Subscribe for private seasonal sales, lookbooks, and <strong>15% off</strong> on your first order.
              </p>

              <div className="mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-[#FAF9F7] border border-black/15 rounded-xl px-4 py-3 text-xs sm:text-sm focus:outline-none focus:border-secondary"
                />
              </div>

              <button
                type="submit"
                className="fashion-button w-full text-xs py-3.5"
              >
                Claim My 15% Discount
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
