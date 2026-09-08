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
    <div className="w-full px-2 py-2.5 bg-[#C4F500] select-none">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-2.5 sm:gap-6 md:gap-12 text-center">
        <p className="text-[12px] sm:text-[13px] font-medium text-zinc-900 tracking-tight">
          Don’t miss the limited-time deals!
        </p>

        <div className="flex items-center gap-2">
          <div className="flex items-baseline gap-0.5">
            <span className="text-xs sm:text-sm font-semibold text-zinc-900 font-mono">{timeLeft.days}</span>
            <span className="text-[10px] sm:text-[11px] font-normal text-zinc-700">D</span>
          </div>
          <span className="text-zinc-600 text-xs">:</span>

          <div className="flex items-baseline gap-0.5">
            <span className="text-xs sm:text-sm font-semibold text-zinc-900 font-mono">{timeLeft.hours}</span>
            <span className="text-[10px] sm:text-[11px] font-normal text-zinc-700">H</span>
          </div>
          <span className="text-zinc-600 text-xs">:</span>

          <div className="flex items-baseline gap-0.5">
            <span className="text-xs sm:text-sm font-semibold text-zinc-900 font-mono">{timeLeft.minutes}</span>
            <span className="text-[10px] sm:text-[11px] font-normal text-zinc-700">M</span>
          </div>
          <span className="text-zinc-600 text-xs">:</span>

          <div className="flex items-baseline gap-0.5">
            <span className="text-xs sm:text-sm font-semibold text-zinc-900 font-mono">{timeLeft.seconds}</span>
            <span className="text-[10px] sm:text-[11px] font-normal text-zinc-700">S</span>
          </div>
        </div>

        <Link
          href="/shop"
          className="text-xs font-semibold text-zinc-900 underline underline-offset-2 hover:text-black cursor-pointer transition-colors"
        >
          Check out now!
        </Link>
      </div>
    </div>
  );
}
