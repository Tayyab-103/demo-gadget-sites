"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/lib/brandIcon";

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
    <div className="fixed inset-0 bg-ink/60 backdrop-blur-sm z-9999 flex items-center justify-center p-4 sm:p-6">
      <div className="relative w-full max-w-[460px] overflow-hidden rounded-[1.75rem] bg-paper shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-paper/90 text-lg text-ink shadow hover:bg-sun transition-colors cursor-pointer"
          aria-label="Close newsletter popup"
        >
          &times;
        </button>

        <div className="relative h-44 bg-brand-gradient overflow-hidden">
          <div className="absolute inset-0 grid-paper opacity-60" aria-hidden="true" />
          <img
            src="/img/desk/standard-3.jpg"
            alt=""
            className="absolute right-0 top-0 h-full w-1/2 object-cover [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]"
          />
          <div className="relative flex h-full flex-col justify-end p-6 max-w-[60%]">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-primary-text/70">Desk notes</span>
            <h3 className="font-display text-2xl font-bold leading-tight text-primary-text">Brighten your inbox</h3>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-4">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-gradient text-xl font-bold text-primary-text">✓</div>
              <h4 className="font-display text-lg font-bold text-ink">You&apos;re on the list!</h4>
              <p className="mt-1 text-sm text-muted">Watch your inbox for new arrivals and desk-setup ideas.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="mb-5 text-sm leading-relaxed text-muted">
                {`Join the ${siteConfig.brandName} list for new arrivals, back-to-work restocks and simple tips for a tidier desk.`}
              </p>
              <input
                type="email"
                className="field rounded-full"
                placeholder="you@example.com"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary mt-3 w-full">Subscribe</button>
              <span className="mt-3 block text-center text-xs text-faint">No spam. Unsubscribe any time.</span>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
