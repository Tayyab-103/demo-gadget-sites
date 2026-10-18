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
    <div className="fixed inset-0 bg-black/65 backdrop-blur-md z-9999 flex items-center justify-center p-6 transition-opacity duration-300">
      <div className="bg-white rounded-3xl w-full max-w-[500px] border border-black/10 relative flex flex-col overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-black/10 rounded-full w-8 h-8 flex items-center justify-center text-lg cursor-pointer z-10 text-[#0f2b48] hover:bg-[#0f2b48] hover:text-white transition-all"
          aria-label="Close newsletter popup"
        >
          &times;
        </button>

        {/* Visual Header */}
        <div className="h-[190px] relative">
          <img
            src="/img/herosection1.jpg"
            alt="Pro Work Uniform Supply Shop commercial uniforms"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b2238]/60 to-[#0b2238]/95" />

          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="text-[0.7rem] uppercase tracking-[0.2em] font-black text-[#f59e0b] block mb-1">
              Workforce Supply VIP Pass
            </span>
            <h3 className="text-2xl font-black text-white m-0 tracking-tight uppercase">
              Save 15% On Your Next Crew Order
            </h3>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-8">
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-full border-2 border-[#f59e0b] text-[#f59e0b] flex items-center justify-center text-xl mx-auto mb-4 font-bold">
                ✓
              </div>
              <h4 className="text-[#0f2b48] font-black uppercase text-lg mb-2">Discount Code Activated!</h4>
              <p className="text-black/60 text-sm">
                Check your inbox for your 15% commercial uniform supply discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-sm text-black/75 leading-relaxed mb-6">
                Join the {siteConfig.brandName} VIP network. Subscribe today to receive crew procurement guides, new uniform release alerts, and <strong>15% off</strong> your first order.
              </p>

              <div className="mb-4">
                <input
                  type="email"
                  className="block w-full px-5 py-3.5 text-sm border border-black/15 rounded-xl focus:outline-none focus:border-[#0f2b48] focus:ring-1 focus:ring-[#0f2b48] transition-all text-black bg-white shadow-sm"
                  placeholder="Enter your commercial or business email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-block font-black text-center whitespace-nowrap bg-[#0f2b48] hover:bg-[#0b2238] text-white transition-all duration-300 py-3.5 px-8 rounded-xl text-xs uppercase tracking-wider w-full block cursor-pointer shadow-md hover:shadow-lg"
              >
                Claim 15% Uniform Discount
              </button>

              <span className="block text-center text-[0.68rem] text-black/45 mt-3">
                No spam. Unsubscribe anytime with a single click.
              </span>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
