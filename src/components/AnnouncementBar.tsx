"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const messages = [
  "🎲 Special Game Night Event: Free Express US Shipping on All Hobby Kits",
  "🪵 100% Laser-Cut Birch Wood & Non-Toxic STEM Craftsmanship",
  "🏆 14-Day Risk-Free Play & Build Guarantee",
  "🧩 Explore 3D Wooden Mechanical Puzzles, Tabletop Strategy & Classic Games",
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
    <div className="bg-[#191716] text-white relative overflow-hidden select-none border-b border-white/10">
      <div className="flex items-center">
        <div className="flex-1 overflow-hidden py-2.5">
          <div className="marquee-track flex items-center gap-12 w-max">
            {track.map((msg, idx) => (
              <span
                key={idx}
                className="text-[0.68rem] font-bold tracking-[0.16em] uppercase flex items-center gap-3 text-white/90 whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#A36B42] inline-block shadow-xs" />
                {msg}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
          className="flex-shrink-0 px-4 py-2.5 text-white/60 hover:text-white transition-colors cursor-pointer bg-[#191716] relative z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
}
