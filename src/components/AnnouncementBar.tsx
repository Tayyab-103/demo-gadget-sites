"use client";

import React, { useEffect, useState } from "react";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (localStorage.getItem("announcement_dismissed") === "true") {
        setIsVisible(false);
      }
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("announcement_dismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="bg-[#4C0519] text-white relative overflow-hidden border-b border-[#D2446D]/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2">
        <div className="flex-1 flex items-center justify-center gap-2.5 text-center">
          <span className="text-[#D2446D] text-xs">📖</span>
          <span className="text-[0.68rem] md:text-[0.74rem] font-bold uppercase tracking-[0.18em] text-white/95">
            Curated Classic Literature &amp; Collector Hardcovers &bull; Free Insured Express Delivery
          </span>
        </div>

        <button
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
          className="flex-shrink-0 pl-3 py-1 text-white/70 hover:text-white transition-colors cursor-pointer bg-transparent"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
}
