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
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-9999 flex items-center justify-center p-6 transition-opacity duration-300">
      <div className="bg-white rounded-3xl w-full max-w-[480px] border border-secondary/20 shadow-2xl relative flex flex-col overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-primary/80 backdrop-blur-md rounded-full w-8 h-8 flex items-center justify-center text-sm cursor-pointer z-10 text-white hover:bg-secondary hover:text-primary transition-all border border-white/20"
          aria-label="Close newsletter popup"
        >
          &times;
        </button>

        {/* Visual Header */}
        <div className="h-[180px] relative">
          <img
            src="/img/newsletter_guitar.jpg"
            alt="Artisanal acoustic guitar and hardware"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/90" />

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-[0.65rem] uppercase tracking-[0.2em] font-black text-secondary block mb-0.5">
              Musician Circle
            </span>
            <h3 className="text-2xl font-black text-white m-0 tracking-tight uppercase">
              Save 15% Today!
            </h3>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-7">
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-full bg-secondary/15 text-secondary flex items-center justify-center text-xl mx-auto mb-3 font-bold">
                ✓
              </div>
              <h4 className="text-primary font-black text-lg mb-1">Welcome to the Sound Circle!</h4>
              <p className="text-neutral-text/50 text-xs">
                Check your inbox for your 15% discount code on your first order.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-xs md:text-sm text-neutral-text/70 leading-relaxed mb-5">
                Join the {siteConfig.brandName} sound circle. Receive acoustic maintenance guides, early hardware releases, and <strong>15% off</strong> your first order.
              </p>

              <div className="mb-4">
                <input
                  type="email"
                  className="block w-full px-4 py-3 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-secondary transition-all text-neutral-text bg-neutral-bg placeholder:text-neutral-text/35"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-block font-black text-center whitespace-nowrap bg-primary text-white hover:bg-secondary hover:text-primary transition-all duration-300 py-3.5 px-6 rounded-full text-xs uppercase tracking-widest w-full cursor-pointer shadow-md"
              >
                Unlock 15% Musician Discount
              </button>

              <span className="block text-center text-[0.65rem] text-neutral-text/40 mt-3">
                Zero spam. Pure tone. Unsubscribe at any time.
              </span>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
