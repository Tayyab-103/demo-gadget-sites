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
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-9999 flex items-center justify-center p-4">
      <div className="bg-surface rounded-3xl w-full max-w-[720px] relative grid grid-cols-1 sm:grid-cols-2 overflow-hidden shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-surface/90 border border-line flex items-center justify-center text-ink hover:border-ink transition-colors cursor-pointer z-10"
          aria-label="Close newsletter popup"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="hidden sm:block bg-neutral-bg">
          <img src="/images/whisk-action-1.jpg" alt="Balloon whisk in use" className="w-full h-full object-cover" />
        </div>

        <div className="p-7 sm:p-9 flex flex-col justify-center">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-text flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h4 className="text-lg font-bold text-ink">You&rsquo;re subscribed</h4>
              <p className="mt-1 text-sm text-muted">Welcome to {siteConfig.brandName}.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <span className="eyebrow">Kitchen notes</span>
              <h3 className="mt-3 text-2xl font-extrabold text-ink tracking-tight leading-tight">
                Cook smarter with the tools you own
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Get occasional care guides, simple techniques and first word on new tools from {siteConfig.brandName}.
              </p>
              <input
                type="email"
                className="field mt-6"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary w-full mt-3">
                Subscribe
              </button>
              <span className="block text-center text-xs text-muted mt-3">No spam. Unsubscribe with one click.</span>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
