"use client";

import React, { useState, useEffect } from "react";

const announcements = [
  "Free shipping over $55 · Happiness guarantee · Delivery in 3–6 business days",
  "100% Archival Standard · Non-toxic pigments · Hand-bound cotton paper",
  "60-Day Studio Return Guarantee · Artisan Crafted Tools",
];

export default function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevAnnouncement = () => {
    setCurrentIndex((prev) => (prev === 0 ? announcements.length - 1 : prev - 1));
  };

  const nextAnnouncement = () => {
    setCurrentIndex((prev) => (prev + 1) % announcements.length);
  };

  return (
    <div className="bg-[#2D2824] text-white/90 text-xs py-2.5 px-4 border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-center relative">
        
        {/* Left Arrow Button */}
        <button
          onClick={prevAnnouncement}
          className="text-white/60 hover:text-white transition-colors px-3 py-1 cursor-pointer"
          aria-label="Previous announcement"
        >
          ‹
        </button>

        {/* Centered Message */}
        <span className="text-[0.72rem] md:text-xs font-medium tracking-wide text-center truncate px-4">
          {announcements[currentIndex]}
        </span>

        {/* Right Arrow Button */}
        <button
          onClick={nextAnnouncement}
          className="text-white/60 hover:text-white transition-colors px-3 py-1 cursor-pointer"
          aria-label="Next announcement"
        >
          ›
        </button>

      </div>
    </div>
  );
}
