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
    <div className="fixed inset-0 bg-[#121820]/75 backdrop-blur-md z-9999 flex items-center justify-center p-6 transition-opacity duration-300">
      <div className="bg-[#FAF8F5] rounded-3xl w-full max-w-[500px] border border-[#C5A059]/40 relative flex flex-col overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm border border-[#C5A059]/30 rounded-full w-8 h-8 flex items-center justify-center text-lg cursor-pointer z-10 text-[#121820] hover:bg-[#C5A059] hover:text-[#121820] transition-all"
          aria-label="Close newsletter popup"
        >
          &times;
        </button>

        {/* Visual Header */}
        <div className="h-[190px] relative">
          <img
            src="https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=900&q=80"
            alt="Quillhaven fine stationery craftsmanship"
            className="w-full h-full object-cover absolute inset-0 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#121820]/50 to-[#121820]/95" />

          <div className="absolute bottom-5 left-6 right-6 text-[#FAF8F5]">
            <span className="text-[0.7rem] uppercase tracking-[0.2em] font-serif font-bold text-[#C5A059] block mb-1">
              ✦ Patron Circle Invitation
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#FAF8F5] m-0 tracking-tight">
              Acquire 15% Off Your Next Stationery Order
            </h3>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-8">
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-full border-2 border-[#C5A059] text-[#C5A059] flex items-center justify-center text-xl mx-auto mb-4 font-bold bg-[#C5A059]/10">
                ✓
              </div>
              <h4 className="text-[#121820] font-serif font-bold uppercase text-lg mb-2">Discount Code Activated!</h4>
              <p className="text-[#1A202C]/70 text-sm font-normal">
                Check your inbox for your 15% archival stationery discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-sm text-[#1A202C]/75 leading-relaxed mb-6 font-normal">
                Join the {siteConfig.brandName} patron network. Subscribe today to receive private collection previews, calligraphy guides, and <strong>15% off</strong> your first order.
              </p>

              <div className="mb-4">
                <input
                  type="email"
                  className="block w-full px-5 py-3.5 text-sm border border-[#C5A059]/30 rounded-full focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all text-[#121820] bg-white shadow-xs font-serif"
                  placeholder="Enter your patron email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-block font-bold text-center whitespace-nowrap bg-[#C5A059] text-[#121820] border border-[#C5A059] hover:bg-[#D4AF37] transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-wider w-full block cursor-pointer shadow-md hover:scale-[1.01]"
              >
                Claim 15% Patron Discount
              </button>

              <span className="block text-center text-[0.68rem] text-[#1A202C]/50 mt-3">
                No spam. Unsubscribe anytime with a single click.
              </span>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
