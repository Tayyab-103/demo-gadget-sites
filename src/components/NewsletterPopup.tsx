"use client";

import React, { useState, useEffect } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

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
      if (window.scrollY >= window.innerHeight * 0.5) {
        hasShownScrollIntent = true;
        showWhenReady();
      }
    };

    const timer = window.setTimeout(() => {
      hasSpentTimeOnPage = true;
      showWhenReady();
    }, 8000);

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
      localStorage.setItem("newsletter_dismissed", "true");
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText("VOLT15");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/65 backdrop-blur-sm z-9999 flex items-center justify-center p-4 sm:p-6 transition-all duration-300">
      <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] w-full max-w-[620px] shadow-[0_25px_80px_rgba(0,0,0,0.3)] border border-black/10 relative flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-white/90 hover:bg-[#111] hover:text-white text-[#111] rounded-full w-9 h-9 flex items-center justify-center text-sm cursor-pointer z-20 shadow-md transition-all border border-black/10"
          aria-label="Close newsletter popup"
        >
          ✕
        </button>

        {/* Visual Header Banner */}
        <div className="h-[200px] sm:h-[220px] relative overflow-hidden bg-[#111]">
          <img
            src="/img/newsletterimag.jpg"
            alt="Voltspire precision electrical diagnostic equipment"
            className="w-full h-full object-cover absolute inset-0 filter brightness-[0.75] contrast-105"
          />
          {/* Subtle Ambient Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

          <div className="absolute bottom-5 left-6 right-6 text-white z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5B6BF0] animate-pulse" />
              <span className="text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.2em] font-bold">
                VOLTSPIRE VIP NETWORK
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white m-0 tracking-tight italic">
              Unlock 15% Off Your First Order
            </h3>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#111] text-white flex items-center justify-center text-2xl mx-auto shadow-md">
                ✓
              </div>
              <h4 className="text-[#111] font-black text-xl sm:text-2xl tracking-tight">
                Welcome to the Voltspire Collective!
              </h4>
              <p className="text-neutral-text/60 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                Use your exclusive single-use discount coupon code below during checkout for <strong>15% off</strong>.
              </p>

              {/* Coupon Code Box */}
              <div className="bg-[#F4F4F6] rounded-2xl p-4 max-w-xs mx-auto border border-black/5 flex items-center justify-between gap-3">
                <div className="text-left">
                  <span className="text-[0.6rem] font-bold uppercase tracking-widest text-neutral-text/40 block">
                    Promo Code
                  </span>
                  <span className="text-lg font-black font-mono tracking-wider text-[#111]">
                    VOLT15
                  </span>
                </div>
                <button
                  onClick={copyCode}
                  className="bg-[#111] hover:bg-[#5B6BF0] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer shadow-xs"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleClose}
                  className="text-xs font-bold text-neutral-text/50 hover:text-[#111] underline transition-colors cursor-pointer"
                >
                  Continue Browsing Catalog
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs sm:text-sm text-neutral-text/65 leading-relaxed">
                Subscribe for priority product drops, NIST calibration technical bulletins, and commercial contractor volume pricing.
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-text/75 font-medium py-1">
                <div className="flex items-center gap-2">
                  <span className="text-[#5B6BF0] font-bold">✓</span>
                  <span>Instant 15% discount code</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#5B6BF0] font-bold">✓</span>
                  <span>Early access to new gear</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#5B6BF0] font-bold">✓</span>
                  <span>Diagnostic calibration guides</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#5B6BF0] font-bold">✓</span>
                  <span>Unsubscribe at any time</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <div className="relative">
                  <input
                    type="email"
                    className="block w-full px-5 py-3.5 text-xs sm:text-sm border border-black/10 rounded-2xl focus:outline-none focus:border-[#111] focus:ring-1 focus:ring-[#111] transition-all text-[#111] bg-[#F9F9FB] placeholder:text-neutral-text/35 font-medium"
                    placeholder="Enter your work or personal email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 font-bold text-center bg-[#111] hover:bg-[#5B6BF0] text-white transition-all duration-300 py-4 px-8 rounded-2xl text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Claim 15% Discount</span>
                  <span>→</span>
                </button>
              </div>

              <p className="text-center text-[0.68rem] text-neutral-text/40 pt-1">
                We respect your inbox privacy. No spam, ever.
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
