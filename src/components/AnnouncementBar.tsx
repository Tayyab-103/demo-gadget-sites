"use client";

import React, { useEffect, useState } from "react";

const messages = [
  "Complimentary standard shipping on orders over $50",
  "Tailored with certified organic European fabrics",
  "30-Day hassle-free returns & size exchanges",
  "Autumn / Spring 2026 Ready-To-Wear Now Live",
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
    <div className="bg-[#181818] text-[#FAF9F7] relative overflow-hidden border-b border-white/10">
      <div className="flex items-center">
        <div className="flex-1 overflow-hidden py-2.5">
          <div className="marquee-track flex items-center gap-12 w-max">
            {track.map((msg, idx) => (
              <span
                key={idx}
                className="text-[0.68rem] font-bold uppercase tracking-[0.16em] flex items-center gap-3 whitespace-nowrap text-white/90"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                {msg}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
          className="flex-shrink-0 px-4 py-2 text-white/60 hover:text-white transition-colors cursor-pointer bg-[#181818] relative z-10"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
