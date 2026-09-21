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

    // Show after 4 seconds or after 300px scroll
    const timer = window.setTimeout(() => {
      setIsVisible(true);
    }, 4000);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

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
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-[390px] animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl border border-primary/20 overflow-hidden relative backdrop-blur-sm transition-all duration-300 hover:shadow-primary/10 hover:shadow-3xl">
        {/* Top Accent Gradient Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-primary via-secondary to-primary" />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 w-7 h-7 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-500 hover:text-neutral-800 flex items-center justify-center text-sm font-bold transition-all z-10 cursor-pointer"
          aria-label="Close newsletter popup"
        >
          ✕
        </button>

        <div className="p-5 sm:p-6">
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center text-xl mx-auto mb-3">
                ✓
              </div>
              <h4 className="text-primary font-bold text-lg mb-1">You’re on the VIP list!</h4>
              <p className="text-neutral-text/70 text-xs">
                Use code <span className="font-mono font-bold text-secondary bg-secondary/10 px-1.5 py-0.5 rounded">STUDIO15</span> at checkout for 15% off.
              </p>
            </div>
          ) : (
            <>
              {/* Badge & Title */}
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[0.68rem] font-bold tracking-wider uppercase bg-secondary/15 text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                  Exclusive Offer
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-extrabold text-primary tracking-tight leading-snug mb-1.5">
                Save 15% On Your Next Creation
              </h3>

              <p className="text-xs text-neutral-text/75 leading-relaxed mb-4">
                Join our {siteConfig.brandName} circle for curated art techniques, new batch drops, and an instant discount.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-2.5">
                <div className="relative">
                  <input
                    type="email"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-neutral-300 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-neutral-800 placeholder:text-neutral-400 bg-white"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-secondary-text bg-secondary hover:bg-primary transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Claim 15% Off</span>
                  <span>→</span>
                </button>
              </form>

              <div className="mt-3 flex items-center justify-between text-[0.65rem] text-neutral-text/50">
                <span>🔒 No spam, ever.</span>
                <button
                  type="button"
                  onClick={handleClose}
                  className="hover:underline text-neutral-text/60 cursor-pointer"
                >
                  No thanks
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
