"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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
    <div className="fixed inset-0 bg-[#18121E]/80 backdrop-blur-md z-9999 flex items-center justify-center p-6 transition-opacity duration-300">
      <div className="bg-[#FFFFFF] rounded-3xl w-full max-w-[500px] border border-[#C59B7E]/30 relative flex flex-col overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full w-8 h-8 flex items-center justify-center text-lg cursor-pointer z-10 text-[#18121E] hover:bg-[#18121E] hover:text-white transition-all"
          aria-label="Close newsletter popup"
        >
          &times;
        </button>

        {/* Visual Header */}
        <div className="h-[200px] relative">
          <Image
            src="/img/fashion-hero.jpg"
            alt="Rosethorne Fashion Atelier Couture"
            fill
            className="object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#18121E]/40 to-[#18121E]/95" />

          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="text-[0.68rem] uppercase tracking-[0.28em] font-bold text-[#E6C2AC] block mb-1">
              PRIVATE ATELIER INVITATION
            </span>
            <h3 className="text-2xl font-serif font-bold text-white m-0 tracking-tight">
              Claim $15 Off Your First Order
            </h3>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-8">
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-full border border-[#C59B7E] text-[#C59B7E] flex items-center justify-center text-xl mx-auto mb-4 font-bold bg-[#FAF8F6]">
                ✓
              </div>
              <h4 className="text-[#18121E] font-serif font-bold text-xl mb-2">Invitation Code Dispatched</h4>
              <p className="text-slate-600 text-sm font-light">
                Check your inbox for your $15 private couture acquisition voucher.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-light">
                Join {siteConfig.brandName}. Subscribe today to receive private runway releases, styling guidance, and <strong>$15 off</strong> your initial purchase.
              </p>

              <div className="mb-4">
                <input
                  type="email"
                  className="block w-full px-5 py-3.5 text-sm border border-[#C59B7E]/30 rounded-full focus:outline-none focus:border-[#C59B7E] transition-all text-[#18121E] bg-[#FAF8F6] shadow-2xs"
                  placeholder="Enter your personal email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-block font-bold text-center whitespace-nowrap bg-gradient-to-r from-[#E6C2AC] via-[#C59B7E] to-[#B88564] hover:brightness-110 text-[#18121E] transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-wider w-full block cursor-pointer shadow-lg"
              >
                Claim $15 Couture Credit
              </button>

              <span className="block text-center text-[0.68rem] text-slate-400 mt-3 font-light">
                Private &amp; confidential. Unsubscribe anytime with one click.
              </span>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
