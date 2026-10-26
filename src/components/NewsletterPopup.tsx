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
      }, 2000); // Close after 2 seconds
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/50 p-5 backdrop-blur-sm">
      <div className="relative flex w-full max-w-md flex-col overflow-hidden rounded-3xl bg-white shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white/90 text-lg text-ink shadow transition-colors hover:text-primary"
          aria-label="Close newsletter popup"
        >
          &times;
        </button>

        <div className="relative h-44">
          <img
            src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=900&q=80"
            alt="Distribution board fitted with circuit breakers"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="bg-brand-gradient absolute inset-0 opacity-80" />
          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="mb-1 block text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/85">Stay in the loop</span>
            <h3 className="m-0 text-2xl font-extrabold tracking-tight">Restock alerts &amp; new arrivals</h3>
          </div>
        </div>

        <div className="p-7 sm:p-8">
          {submitted ? (
            <div className="py-4 text-center">
              <div className="icon-chip mx-auto mb-4 h-12 w-12 rounded-full text-xl">✓</div>
              <h4 className="mb-2 text-lg font-bold text-ink">You&apos;re subscribed!</h4>
              <p className="text-sm text-ink/55">We&apos;ll email you when new parts and restocks land.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="mb-6 text-sm leading-relaxed text-ink/70">
                Join the {siteConfig.brandName} mailing list for restock alerts, new product announcements and helpful
                job-site tips.
              </p>
              <input
                type="email"
                className="mb-4 block w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink transition-colors focus:border-primary focus:outline-none"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-brand w-full">
                Subscribe
              </button>
              <span className="mt-3 block text-center text-[0.7rem] text-ink/45">We value your privacy. Unsubscribe at any time.</span>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
