"use client";

import React, { useEffect, useState } from "react";

const messages = [
  "Free Shipping on All Orders Nationwide",
  "60-Day Money-Back Satisfaction Guarantee",
  "1-Year Warranty on Every Piece",
];

function getIcon(index: number) {
  switch (index) {
    case 0: // Shipping
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-secondary-text/90 animate-pulse"
        >
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      );
    case 1: // Satisfaction Guarantee
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-secondary-text/90"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      );
    case 2: // Warranty
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-secondary-text/90"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      );
    default:
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-secondary-text/90"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      );
  }
}

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState("opacity-100");

  useEffect(() => {
    // Check local storage for dismissed state
    const dismissed = localStorage.getItem("announcement_dismissed");
    if (dismissed === "true") {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      // Fade out
      setFadeState("opacity-0 transition-opacity duration-300");
      
      // Change index after fade out is complete
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        // Fade back in
        setFadeState("opacity-100 transition-opacity duration-300");
      }, 300);
    }, 4500); // 4.5 seconds per slide (includes transition delay)

    return () => clearInterval(interval);
  }, [isVisible]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("announcement_dismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="bg-secondary text-secondary-text relative overflow-hidden border-b border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between min-h-[38px] relative">
        {/* Spacer on the left to perfectly center the message text on desktop */}
        <div className="w-8 hidden md:block" />

        {/* Center message slide container */}
        <div className="flex-1 flex items-center justify-center py-2">
          <div className={`flex items-center gap-2.5 text-center ${fadeState}`}>
            {getIcon(currentIndex)}
            <span className="text-[0.65rem] sm:text-[0.68rem] md:text-[0.72rem] font-bold uppercase tracking-[0.18em] whitespace-nowrap">
              {messages[currentIndex]}
            </span>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
          className="w-8 h-8 flex items-center justify-center text-secondary-text/70 hover:text-secondary-text hover:bg-white/10 transition-all duration-300 rounded-full cursor-pointer relative z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  );
}
