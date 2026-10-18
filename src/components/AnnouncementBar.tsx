"use client";

import React, { useEffect, useState } from "react";

const messages = [
  "Garden Hand Tools for Every Grower",
  "Complimentary Free Shipping on All Orders Nationwide",
  "Free UPS Shipping on Every Order",
  "Friendly, Real-Person Customer Support",
  "Sustainably Harvested FSC European Beech & Ash Handles",
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
    <div className="bg-secondary text-secondary-text relative overflow-hidden border-b border-black/10 shadow-sm">
      <div className="flex items-center">
        <div className="flex-1 overflow-hidden py-2.5">
          <div className="marquee-track flex items-center gap-10 w-max">
            {track.map((msg, idx) => (
              <span
                key={idx}
                className="text-[0.66rem] md:text-[0.72rem] font-bold uppercase tracking-[0.2em] flex items-center gap-3 whitespace-nowrap text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="9"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-white/80"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                {msg}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
          className="flex-shrink-0 px-4 md:px-5 py-2.5 text-white/70 hover:text-white transition-colors cursor-pointer bg-secondary relative z-10"
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
