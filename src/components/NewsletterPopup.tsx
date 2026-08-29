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
    <div className="fixed inset-0 bg-[#0A0F1D]/80 backdrop-blur-md z-9999 flex items-center justify-center p-6 transition-opacity duration-300">
      <div className="bg-[#FFFFFF] rounded-3xl w-full max-w-[500px] border border-slate-200 relative flex flex-col overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full w-8 h-8 flex items-center justify-center text-lg cursor-pointer z-10 text-[#0A0F1D] hover:bg-[#0A0F1D] hover:text-white transition-all"
          aria-label="Close newsletter popup"
        >
          &times;
        </button>

        {/* Visual Header */}
        <div className="h-[190px] relative">
          <img
            src="/img/hero-uniforms.jpg"
            alt="Ironvale workforce uniforms"
            className="w-full h-full object-cover absolute inset-0 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1D]/50 to-[#0A0F1D]/95" />

          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="text-[0.68rem] uppercase tracking-[0.24em] font-bold text-slate-300 block mb-1">
              ENTERPRISE INVITATION
            </span>
            <h3 className="text-2xl font-bold text-white m-0 tracking-tight">
              Claim $15 Off Your First Order
            </h3>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-8">
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-full border border-[#0A0F1D] text-[#0A0F1D] flex items-center justify-center text-xl mx-auto mb-4 font-bold bg-slate-50">
                ✓
              </div>
              <h4 className="text-[#0A0F1D] font-bold uppercase text-lg mb-2">Voucher Code Dispatched!</h4>
              <p className="text-slate-600 text-sm font-normal">
                Check your inbox for your $15 uniform outfitting credit code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                Join {siteConfig.brandName}. Subscribe today to receive new workforce fabric releases, fleet discounts, and <strong>$15 off</strong> your first order.
              </p>

              <div className="mb-4">
                <input
                  type="email"
                  className="block w-full px-5 py-3.5 text-sm border border-slate-300 rounded-full focus:outline-none focus:border-[#0A0F1D] transition-all text-[#0A0F1D] bg-white shadow-2xs"
                  placeholder="Enter your workforce email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-block font-bold text-center whitespace-nowrap bg-[#0A0F1D] hover:bg-slate-800 text-white transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-wider w-full block cursor-pointer shadow-md"
              >
                Claim $15 Uniform Credit
              </button>

              <span className="block text-center text-[0.68rem] text-slate-400 mt-3">
                No spam. Unsubscribe anytime with a single click.
              </span>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
