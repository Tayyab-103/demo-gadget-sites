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
    <div className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 max-w-[380px] w-[calc(100vw-2rem)] sm:w-full transition-all duration-300">
      <div className="bg-white rounded-2xl border border-black/10 shadow-2xl overflow-hidden relative group/popup ring-1 ring-black/5">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 bg-black/40 hover:bg-[#265C1E] text-white rounded-full w-7 h-7 flex items-center justify-center text-sm cursor-pointer z-20 backdrop-blur-sm transition-all border border-white/20"
          aria-label="Close newsletter popup"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Compact Hero Banner */}
        <div className="h-28 relative overflow-hidden">
          <img
            src="/img/newsletter_garden.jpg"
            alt="Briarforge Hand-Forged Garden Tools"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#132B1C] via-[#132B1C]/75 to-transparent" />

          <div className="absolute bottom-3 left-4 right-10 text-white">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#265C1E]/90 text-[0.6rem] font-bold tracking-wider uppercase text-white mb-1 shadow-xs">
              <span>🌿</span> Gardeners Guild
            </span>
            <h3 className="text-base sm:text-lg font-black tracking-tight leading-snug uppercase text-white drop-shadow">
              Claim 15% Off Your First Tool
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5">
          {submitted ? (
            <div className="text-center py-2">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#265C1E] flex items-center justify-center text-lg mx-auto mb-2 font-black border border-emerald-200">
                ✓
              </div>
              <h4 className="text-[#11281A] font-black text-sm mb-1 uppercase tracking-wider">
                You&apos;re On The List!
              </h4>
              <p className="text-gray-600 text-xs mb-3 font-medium">
                Use your workshop discount code at checkout:
              </p>
              <div className="inline-block bg-emerald-50 border border-dashed border-[#265C1E] px-4 py-2 rounded-xl text-[#132B1C] font-mono font-bold text-sm tracking-widest select-all">
                BRIARFORGE15
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-xs text-gray-600 leading-relaxed mb-3.5 font-medium">
                Subscribe for seasonal planting guides, tool care tips, and an instant <strong>15% discount</strong> voucher.
              </p>

              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-[#265C1E] focus:ring-2 focus:ring-[#265C1E]/20 transition-all text-[#11281A] bg-[#FAF9F6] placeholder:text-gray-400 font-medium"
                  placeholder="Enter your gardener email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-[#132B1C] hover:bg-[#265C1E] text-white font-bold py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer flex items-center justify-center gap-2 group"
                >
                  <span>Get 15% Discount</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              </div>

              <div className="flex items-center justify-between mt-2.5 text-[0.65rem] text-gray-400 font-medium px-0.5">
                <span>🔒 No spam guaranteed</span>
                <button
                  type="button"
                  onClick={handleClose}
                  className="hover:text-gray-700 underline cursor-pointer"
                >
                  No thanks
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
