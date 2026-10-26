"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/lib/brandIcon";

const DISMISS_KEY = "newsletter_dismissed";

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(DISMISS_KEY)) return;
    } catch {}

    let hasSpentTime = false;
    let hasScrolled = false;
    let shown = false;

    const showWhenReady = () => {
      if (hasSpentTime && hasScrolled && !shown) {
        shown = true;
        setIsVisible(true);
      }
    };

    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight * 0.5) {
        hasScrolled = true;
        showWhenReady();
      }
    };

    const timer = window.setTimeout(() => {
      hasSpentTime = true;
      showWhenReady();
    }, 8000);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const remember = () => {
    try {
      localStorage.setItem(DISMISS_KEY, "true");
    } catch {}
  };

  const handleClose = () => {
    setIsVisible(false);
    remember();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      remember();
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-ink/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4" onClick={handleClose}>
      <div
        className="bg-white rounded-[2rem] w-full max-w-[760px] shadow-2xl relative grid sm:grid-cols-5 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 bg-white/95 hover:bg-primary hover:text-white text-ink rounded-full w-9 h-9 flex items-center justify-center text-sm cursor-pointer z-20 shadow-md transition-all"
          aria-label="Close newsletter popup"
        >
          ✕
        </button>

        <div className="sm:col-span-2 relative h-40 sm:h-auto">
          <img src="/img/web/newsletterimag.jpg" alt="Chrome sockets close-up" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-secondary/20" />
        </div>

        <div className="sm:col-span-3 p-6 sm:p-8">
          {submitted ? (
            <div className="py-6 text-center sm:text-left">
              <span className="icon-tile w-12 h-12 text-xl">✓</span>
              <h3 className="mt-4 text-2xl font-extrabold text-ink">Thanks for joining!</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {`Watch your inbox for tool tips and restock news from ${siteConfig.brandName}.`}
              </p>
              <button onClick={handleClose} className="btn-primary mt-6">Keep Browsing</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <span className="eyebrow">The Workbench Letter</span>
              <h3 className="mt-4 text-2xl sm:text-[1.7rem] font-extrabold text-ink leading-tight">
                Get project tips &amp; <span className="text-gradient">new tool alerts</span>
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                One helpful email a month — how-tos, tool-care checklists and restock alerts. Unsubscribe any time.
              </p>
              <input
                type="email"
                className="field mt-6"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary w-full mt-3">Subscribe</button>
              <p className="mt-3 text-center text-[0.7rem] text-faint">We never share your email.</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
