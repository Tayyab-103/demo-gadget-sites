"use client";

import { siteConfig } from "@/lib/brandIcon";
import React, { useEffect, useState } from "react";

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
    <div role="dialog" aria-modal="true" aria-labelledby="newsletter-title" className="fixed inset-0 bg-primary/70 backdrop-blur-md z-9999 flex items-center justify-center p-6 transition-opacity duration-300">
      <div className="bg-white rounded-3xl w-full max-w-[500px] relative flex flex-col overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm border border-black/10 rounded-full w-8 h-8 flex items-center justify-center text-lg cursor-pointer z-10 text-primary hover:bg-secondary hover:text-secondary-text hover:border-secondary transition-all"
          aria-label="Close newsletter popup"
        >
          &times;
        </button>

        {/* Visual Header */}
        <div className="h-[190px] relative">
          <img
            src="/img/howitworks1.jpg"
            alt="Row of dumbbells on a gym rack"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary/95" />

          <div className="absolute bottom-5 left-6 right-6 text-white">
            <span className="text-[0.7rem] uppercase tracking-[0.2em] font-black text-secondary block mb-1">
              Field Notes Newsletter
            </span>
            <h3 id="newsletter-title" className="text-2xl font-black text-white m-0 tracking-tight uppercase">
              Train Smarter. Stay In The Loop.
            </h3>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-8">
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-full border-2 border-secondary text-secondary flex items-center justify-center text-xl mx-auto mb-4 font-bold">
                ✓
              </div>
              <h4 className="text-primary font-black uppercase text-lg mb-2">You&apos;re Subscribed!</h4>
              <p className="text-neutral-text/60 text-sm">
                Thanks for joining. Watch your inbox for new gear and training ideas.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <p className="text-sm text-neutral-text/75 leading-relaxed mb-6">
                {`Get ${siteConfig.brandName} training ideas, new product announcements and bundle news — a few emails a month.`}
              </p>

              <div className="mb-4">
                <input
                  type="email"
                  className="field rounded-full! px-5"
                  placeholder="Your email address"
                  aria-label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-accent w-full"
              >
                Subscribe
              </button>

              <span className="block text-center text-[0.68rem] text-neutral-text/45 mt-3">
                No spam. Unsubscribe anytime with a single click.
              </span>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
