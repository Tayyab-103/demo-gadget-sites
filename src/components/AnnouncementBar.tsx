"use client";

import React, { useEffect, useState } from "react";

const messages = [
  "⚡ Free Expedited Nationwide Dispatch (3-5 Days)",
  "🛡️ 60-Day Risk-Free Field Trial & 100% Refund",
  "⭐ 1-Year Comprehensive Manufacturer Warranty",
  "🏆 Tested & Trusted by 10,000+ Athletes",
];

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("announcement_dismissed") === "true") {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("announcement_dismissed", "true");
  };

  if (!isVisible) return null;

  const track = [...messages, ...messages, ...messages, ...messages];

  return (
    <div className="bg-[#0F172A] text-white text-xs border-b border-white/10 relative z-40 overflow-hidden">
      <div className="flex items-center">
        <div className="flex-1 overflow-hidden py-2">
          <div className="marquee-track flex items-center gap-10 w-max">
            {track.map((msg, idx) => (
              <span
                key={idx}
                className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white/85 flex items-center gap-2.5 whitespace-nowrap"
              >
                {msg}
                <span className="h-1 w-1 rounded-full bg-secondary"></span>
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={handleDismiss}
          aria-label="Dismiss banner"
          className="flex-shrink-0 px-3.5 py-2 text-white/50 hover:text-white transition-colors cursor-pointer bg-[#0F172A]"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
