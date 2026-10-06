"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function AnnouncementBar() {
  const [timeLeft, setTimeLeft] = useState({
    days: "05",
    hours: "23",
    minutes: "48",
    seconds: "19",
  });

  useEffect(() => {
    // Initial target 5 days in the future
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5);
    targetDate.setHours(targetDate.getHours() + 23);
    targetDate.setMinutes(targetDate.getMinutes() + 48);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(d).padStart(2, "0"),
          hours: String(h).padStart(2, "0"),
          minutes: String(m).padStart(2, "0"),
          seconds: String(s).padStart(2, "0"),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full px-3 py-2 bg-gradient-to-r from-[#061A14] via-[#0D3327] to-[#061A14] text-white border-b border-emerald-500/30 select-none shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-2.5 sm:gap-6 md:gap-10 text-center">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <p className="text-[11px] sm:text-[12px] font-bold text-gray-200 tracking-wide uppercase">
            ⚡ Flash Deal: Up to 50% Off Automotive Bundles
          </p>
        </div>

        <div className="flex items-center gap-1.5 bg-black/50 px-3 py-1 rounded-full border border-emerald-500/30">
          <span className="text-[10px] uppercase font-bold text-emerald-300 tracking-widest mr-1">Ends In</span>
          <div className="flex items-baseline gap-0.5">
            <span className="text-xs sm:text-sm font-black text-white font-mono">{timeLeft.days}</span>
            <span className="text-[9px] font-bold text-emerald-400">D</span>
          </div>
          <span className="text-emerald-400 text-xs font-bold">:</span>

          <div className="flex items-baseline gap-0.5">
            <span className="text-xs sm:text-sm font-black text-white font-mono">{timeLeft.hours}</span>
            <span className="text-[9px] font-bold text-emerald-400">H</span>
          </div>
          <span className="text-emerald-400 text-xs font-bold">:</span>

          <div className="flex items-baseline gap-0.5">
            <span className="text-xs sm:text-sm font-black text-white font-mono">{timeLeft.minutes}</span>
            <span className="text-[9px] font-bold text-emerald-400">M</span>
          </div>
          <span className="text-emerald-400 text-xs font-bold">:</span>

          <div className="flex items-baseline gap-0.5">
            <span className="text-xs sm:text-sm font-black text-white font-mono">{timeLeft.seconds}</span>
            <span className="text-[9px] font-bold text-emerald-400">S</span>
          </div>
        </div>

        <Link
          href="/shop"
          className="text-xs font-extrabold text-emerald-400 hover:text-white underline underline-offset-4 cursor-pointer transition-colors uppercase tracking-wider flex items-center gap-1"
        >
          <span>Claim Deals</span>
          <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
