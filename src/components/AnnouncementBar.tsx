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
    <div className="bg-secondary text-primary relative overflow-hidden border-b border-black/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        <div className="flex-1 flex items-center justify-center gap-3 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-primary opacity-80"
          >
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
          </svg>
          <span className="text-[0.68rem] md:text-[0.74rem] font-black uppercase tracking-[0.16em] text-primary">
            Handcrafted Instrument Care &amp; Studio Hardware • Free Nationwide Dispatch on All Orders
          </span>
        </div>

        <button
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
          className="flex-shrink-0 pl-4 py-1 text-primary/70 hover:text-primary transition-colors cursor-pointer bg-transparent"
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
