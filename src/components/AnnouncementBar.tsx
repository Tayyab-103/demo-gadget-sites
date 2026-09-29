"use client";

import React, { useEffect, useState } from "react";

const messages = [
  "🍼 Free Express Shipping on All Baby Essentials Nationwide",
  "⭐ 14-Day 100% Gentle & Happy Parent Guarantee",
  "🌿 100% Non-Toxic, BPA-Free & Hypoallergenic Baby-Safe Essentials",
  "👶 Pediatrician-Approved Comfort, Feeding & Travel Essentials",
];

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

  const track = [...messages, ...messages, ...messages];

  return (
    <div className="bg-primary text-white relative overflow-hidden border-b border-white/10 shadow-sm">
      <div className="flex items-center">
        <div className="flex-1 overflow-hidden py-2.5">
          <div className="marquee-track flex items-center gap-12 w-max">
            {track.map((msg, idx) => (
              <span
                key={idx}
                className="text-[0.7rem] md:text-[0.75rem] font-bold uppercase tracking-[0.14em] flex items-center gap-3 whitespace-nowrap"
              >
                <span>{msg}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
          className="flex-shrink-0 px-4 md:px-5 py-2.5 text-white/80 hover:text-white transition-colors cursor-pointer bg-primary relative z-10 hover:bg-black/20"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
}
