"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/lib/brandIcon";

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("newsletter_dismissed")) return;
    } catch {
      // storage unavailable: still show the popup once per page view
    }

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

  const remember = () => {
    try {
      localStorage.setItem("newsletter_dismissed", "true");
    } catch {
      // ignore
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    remember();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        setIsVisible(false);
        remember();
      }, 2000);
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-primary-dark/70 backdrop-blur-sm z-9999 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="newsletter-title"
    >
      <div className="bg-white rounded-[1.75rem] w-full max-w-[760px] relative grid grid-cols-1 sm:grid-cols-2 overflow-hidden shadow-2xl">
        <button
          onClick={handleClose}
          className="absolute top-3.5 right-3.5 bg-white rounded-full w-9 h-9 flex items-center justify-center text-xl cursor-pointer z-10 text-primary shadow-md hover:bg-secondary transition-colors"
          aria-label="Close newsletter popup"
        >
          &times;
        </button>

        <div className="relative h-[180px] sm:h-auto bg-primary">
          <img src="/img/herosection2.jpg" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/85 to-transparent" />
          <span className="absolute bottom-4 left-5 text-[0.65rem] font-black uppercase tracking-[0.2em] text-secondary">
            {siteConfig.brandName}
          </span>
        </div>

        <div className="p-7 sm:p-9">
          {submitted ? (
            <div className="text-center py-8">
              <span className="w-14 h-14 rounded-full bg-secondary text-secondary-text flex items-center justify-center text-2xl mx-auto mb-4 font-black">
                ✓
              </span>
              <h4 className="text-ink font-black uppercase text-lg mb-2">You&apos;re on the list</h4>
              <p className="text-muted text-sm">Look out for new drops and training tips in your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <span className="eyebrow">Newsletter</span>
              <h3 id="newsletter-title" className="mt-3 text-2xl sm:text-3xl font-black uppercase tracking-tight text-ink leading-tight">
                Be first to <span className="hl">new drops</span>
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                Get restock alerts, new colors and practical training tips. A few emails a month, unsubscribe any time.
              </p>

              <input
                type="email"
                className="field mt-6"
                placeholder="Your email address"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-plum w-full mt-3">
                Sign me up
              </button>
              <button type="button" onClick={handleClose} className="block mx-auto mt-3 text-xs text-muted hover:text-primary cursor-pointer">
                No thanks
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
