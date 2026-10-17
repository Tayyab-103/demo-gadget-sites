"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function DealOfTheWeek() {
  // 5 days countdown timer
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 18,
    minutes: 42,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl overflow-hidden bg-[#FAF9F7] border border-black/5 grid grid-cols-1 lg:grid-cols-12 shadow-sm">
          
          {/* Left Column: Fashion Editorial Image (6 cols) */}
          <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-auto min-h-[350px]">
            <img
              src="/img/about2.png"
              alt="Deal of the week fashion showcase"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:hidden" />
          </div>

          {/* Right Column: Copy & Live Timer (6 cols) */}
          <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            
            <span className="category-subtitle">
              <b>deal</b> of the week
            </span>

            <h3 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-primary mt-1 mb-4 leading-tight">
              Stay Warm <br />&amp; Trendy
            </h3>

            <p className="text-neutral-text/70 text-xs sm:text-sm leading-relaxed mb-8 max-w-md">
              We follow fashion trends and curate the finest European fabrics for every occasion. Enjoy 35% off our signature autumn knits and wrap silhouettes this week only.
            </p>

            {/* Countdown Timer Blocks */}
            <div className="flex items-center gap-3 sm:gap-4 mb-8">
              <div className="flex flex-col items-center justify-center w-16 h-18 sm:w-20 sm:h-20 bg-white rounded-2xl border border-black/5 shadow-sm">
                <span className="font-heading text-xl sm:text-2xl font-bold text-primary">
                  {String(timeLeft.days).padStart(2, "0")}
                </span>
                <span className="text-[0.62rem] font-bold uppercase tracking-widest text-neutral-text/40 mt-1">
                  Days
                </span>
              </div>

              <span className="text-primary/30 font-bold text-lg">:</span>

              <div className="flex flex-col items-center justify-center w-16 h-18 sm:w-20 sm:h-20 bg-white rounded-2xl border border-black/5 shadow-sm">
                <span className="font-heading text-xl sm:text-2xl font-bold text-primary">
                  {String(timeLeft.hours).padStart(2, "0")}
                </span>
                <span className="text-[0.62rem] font-bold uppercase tracking-widest text-neutral-text/40 mt-1">
                  Hours
                </span>
              </div>

              <span className="text-primary/30 font-bold text-lg">:</span>

              <div className="flex flex-col items-center justify-center w-16 h-18 sm:w-20 sm:h-20 bg-white rounded-2xl border border-black/5 shadow-sm">
                <span className="font-heading text-xl sm:text-2xl font-bold text-primary">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span className="text-[0.62rem] font-bold uppercase tracking-widest text-neutral-text/40 mt-1">
                  Mins
                </span>
              </div>

              <span className="text-primary/30 font-bold text-lg">:</span>

              <div className="flex flex-col items-center justify-center w-16 h-18 sm:w-20 sm:h-20 bg-white rounded-2xl border border-black/5 shadow-sm">
                <span className="font-heading text-xl sm:text-2xl font-bold text-secondary">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
                <span className="text-[0.62rem] font-bold uppercase tracking-widest text-neutral-text/40 mt-1">
                  Secs
                </span>
              </div>
            </div>

            <div>
              <Link href="/shop" className="fashion-button">
                Shop now
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
