"use client";

import React, { useState, useEffect } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

import { BoltIcon, CheckIcon, CloseIcon, LockIcon } from "@/components/Icons";

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
      if (window.scrollY >= window.innerHeight * 0.4) {
        hasShownScrollIntent = true;
        showWhenReady();
      }
    };

    const timer = window.setTimeout(() => {
      hasSpentTimeOnPage = true;
      showWhenReady();
    }, 6000);

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
    <aside
      aria-label="Newsletter special offer"
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 w-[calc(100vw-2rem)] sm:w-[390px] animate-in slide-in-from-bottom-6 fade-in duration-500"
    >
      <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-gray-200 shadow-[0_15px_45px_rgba(15,23,42,0.18)] p-5 relative overflow-hidden flex flex-col group">
        {/* Top Accent Strip */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

        {/* Top Control Bar: Badge + Close */}
        <div className="flex items-center justify-between mb-3.5">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary text-secondary text-[0.62rem] font-black uppercase tracking-wider border border-secondary/30 shadow-xs">
            <BoltIcon className="w-3 h-3 fill-secondary text-secondary shrink-0" />
            <span>Hardware Insider • Save 15%</span>
          </div>

          <button
            onClick={handleClose}
            className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-primary transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Close newsletter popup"
          >
            <CloseIcon className="w-3.5 h-3.5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-4 text-center">
            <div className="w-11 h-11 rounded-2xl bg-primary text-secondary flex items-center justify-center text-lg mx-auto mb-2.5 font-black border border-secondary/40 shadow-xs">
              <CheckIcon className="w-5 h-5 text-secondary" />
            </div>
            <h4 className="text-sm font-black text-primary uppercase tracking-tight">Welcome to the Circuit</h4>
            <p className="text-gray-500 text-xs mt-1 leading-relaxed">
              Check your inbox for your <strong>15% hardware discount</strong> voucher code.
            </p>
          </div>
        ) : (
          <div>
            {/* Media & Headline Row */}
            <div className="flex items-start gap-3.5 mb-3">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-slate-900 border border-gray-200 shadow-xs shrink-0">
                <img
                  src="/img/her01.jpg"
                  alt="Modern Circuit Electronics"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm sm:text-base font-black text-primary uppercase tracking-tight leading-tight m-0">
                  Unlock 15% Off Your First Order
                </h3>
                <p className="text-gray-500 text-[0.72rem] leading-relaxed mt-1 line-clamp-2">
                  Subscribe to early tech drops, firmware alerts, and instant 15% storewide savings.
                </p>
              </div>
            </div>

            {/* Compact Form */}
            <form onSubmit={handleSubmit} className="mt-2">
              <div className="flex items-center gap-1.5">
                <input
                  type="email"
                  className="flex-1 min-w-0 px-3.5 py-2.5 text-xs border border-gray-200 rounded-xl focus:outline-none focus:border-primary transition-all text-gray-900 bg-gray-50 placeholder:text-gray-400"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-slate-800 text-secondary font-black text-xs uppercase tracking-wider px-4 py-2.5 rounded-xl cursor-pointer shadow-xs hover:shadow transition-all shrink-0 flex items-center gap-1 border border-primary"
                >
                  <span>Claim</span>
                  <span className="text-[0.7rem]">→</span>
                </button>
              </div>

              <div className="flex items-center justify-between text-[0.62rem] text-gray-400 mt-2 px-0.5">
                <span className="inline-flex items-center gap-1">
                  <LockIcon className="w-2.5 h-2.5 text-secondary shrink-0" />
                  <span>100% encrypted privacy</span>
                </span>
                <span>No spam ever</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </aside>
  );
}
