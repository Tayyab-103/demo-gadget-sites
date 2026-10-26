"use client";

import React, { useEffect, useState } from "react";
import { siteConfig } from "@/lib/brandIcon";

const messages = [
  `Free ${siteConfig.shippingCarrier} shipping on every order`,
  `Delivered in ${siteConfig.shippingPeriod} business days`,
  `${siteConfig.trialPeriod}-day satisfaction guarantee`,
  "Secure SSL-encrypted checkout",
  `Questions? Call ${siteConfig.phone}`,
];

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        if (localStorage.getItem("announcement_dismissed") === "true") setIsVisible(false);
      } catch {}
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    try {
      localStorage.setItem("announcement_dismissed", "true");
    } catch {}
  };

  if (!isVisible) return null;

  const track = [...messages, ...messages, ...messages];

  return (
    <div className="bg-brand-gradient text-primary-text relative overflow-hidden">
      <div className="flex items-center">
        <div className="flex-1 overflow-hidden py-2.5">
          <div className="marquee-track flex items-center gap-10 w-max">
            {track.map((msg, idx) => (
              <span
                key={idx}
                className="text-[0.68rem] md:text-[0.72rem] font-semibold uppercase tracking-[0.16em] flex items-center gap-3 whitespace-nowrap"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
                {msg}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
          className="flex-shrink-0 px-4 md:px-5 py-2.5 text-white/80 hover:text-white transition-colors cursor-pointer bg-secondary relative z-10"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
