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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-[9999] flex items-center justify-center p-6 transition-opacity duration-300">
      <div className="bg-white rounded-[2rem] w-full max-w-[480px] border border-black/10 relative flex flex-col overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm border border-black/10 rounded-full w-8 h-8 flex items-center justify-center text-lg cursor-pointer z-10 text-primary hover:bg-secondary hover:text-white transition-all"
          aria-label="Close newsletter popup"
        >
          &times;
        </button>

        {/* Visual Header */}
        <div className="h-[180px] relative">
          <img
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80"
            alt="Hand-forged gardening tools in rich soil"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary/90" />

          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="text-[0.68rem] uppercase tracking-[0.22em] font-bold text-secondary block mb-1">
              Foundry Guild Invitation
            </span>
            <h3 className="text-2xl font-extrabold text-white m-0 tracking-tight font-serif">
              Save 15% on First Tool
            </h3>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-7">
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 text-secondary flex items-center justify-center text-xl mx-auto mb-3 font-bold">
                ✓
              </div>
              <h4 className="text-primary font-bold text-lg mb-1 font-serif">Welcome to the Guild!</h4>
              <p className="text-neutral-text/60 text-xs">
                Check your inbox for your 15% heirloom tool discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-xs md:text-sm text-neutral-text/75 leading-relaxed mb-5">
                Join the {siteConfig.brandName} gardeners journal. Subscribe today to receive seasonal planting advice, tool sharpening guides, and <strong>15% off</strong> your first order.
              </p>

              <div className="mb-4">
                <input
                  type="email"
                  className="block w-full px-4 py-3.5 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-secondary transition-all text-neutral-text bg-neutral-bg"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="font-bold text-center whitespace-nowrap bg-secondary text-white hover:brightness-110 transition-all duration-300 py-3.5 px-6 rounded-full text-xs uppercase tracking-widest w-full cursor-pointer shadow-md"
              >
                Claim 15% Tool Voucher
              </button>

              <span className="block text-center text-[0.68rem] text-neutral-text/40 mt-3">
                Respecting your inbox. Unsubscribe with one click anytime.
              </span>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
