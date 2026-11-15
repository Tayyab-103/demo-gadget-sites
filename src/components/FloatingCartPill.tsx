"use client";

import React, { useEffect, useState, useRef } from "react";
import { useCart } from "@/context/CartContext";

export default function FloatingCartPill() {
  const { getCartTotal, getCartCount, toggleCart } = useCart();
  const [bumping, setBumping] = useState(false);
  const prevCountRef = useRef(0);

  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const count = mounted ? getCartCount() : 0;
  const total = mounted ? getCartTotal() : "0.00";

  // Trigger bounce animation whenever count changes
  useEffect(() => {
    if (count > 0 && count !== prevCountRef.current) {
      prevCountRef.current = count;
      const t1 = setTimeout(() => {
        setBumping(true);
        const t2 = setTimeout(() => setBumping(false), 650);
        return () => clearTimeout(t2);
      }, 0);
      return () => clearTimeout(t1);
    }
  }, [count]);

  if (!mounted || count === 0) {
    return null;
  }

  return (
    <aside aria-label="Quick cart shortcut" className="fixed bottom-6 right-6 z-40 pointer-events-auto">
      <button
        onClick={toggleCart}
        className={`group flex items-center gap-3 bg-[#1e293b] hover:bg-black text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-2xl border-2 border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer ${
          bumping ? "animate-bounce scale-110" : ""
        }`}
        aria-label={`Open shopping cart with ${count} items, total $${total}`}
      >
        {/* Animated Cart Icon with Badge */}
        <div className="relative">
          <div className="w-9 h-9 rounded-full bg-[#ff4370] text-white flex items-center justify-center shadow-md group-hover:rotate-12 transition-transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
          </div>
          <span className="absolute -top-1.5 -right-1.5 bg-[#ffb703] text-[#1e293b] text-[0.65rem] font-black rounded-full h-5 min-w-[20px] px-1 flex items-center justify-center border-2 border-[#1e293b] shadow-xs">
            {count}
          </span>
        </div>

        {/* Text Details */}
        <div className="flex flex-col text-left pr-1">
          <span className="text-[0.65rem] uppercase tracking-wider font-extrabold text-[#ff4370]">
            Quick Cart
          </span>
          <span className="text-xs sm:text-sm font-black text-white leading-tight">
            ${total}
          </span>
        </div>

        {/* Arrow indicator */}
        <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-[#ff4370] flex items-center justify-center transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:translate-x-0.5 transition-transform"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>
      </button>
    </aside>
  );
}