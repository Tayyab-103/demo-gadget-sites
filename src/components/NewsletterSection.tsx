"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-[#FAFAFC] relative overflow-hidden border-t border-black/[0.04]">
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 z-10">

        {/* Large Rounded Newsletter Card */}
        <div className="relative rounded-[2.5rem] overflow-hidden bg-[#111] p-8 sm:p-12 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
          
          {/* Background Image with Dark Vignette */}
          <img
            src="/img/newsletterimag.jpg"
            alt="Electrical engineering newsletter background"
            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.35] contrast-105 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/40 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5B6BF0] animate-pulse" />
                <span className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.2em]">
                  TECHNICAL DISPATCHES
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-tight leading-[1.1] italic">
                Stay Ahead With Electrical Industry Bulletins
              </h2>

              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal max-w-md">
                Get monthly calibration benchmarks, field troubleshooting guides, and early access to {siteConfig.brandName} hardware releases.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-white/80 pt-2">
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Instant 15% Welcome Code</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>No Spam Guarantee</span>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-6">
              {submitted ? (
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-white text-[#111] flex items-center justify-center text-xl mx-auto font-bold shadow-md">
                    ✓
                  </div>
                  <h3 className="text-white text-xl font-bold">You&apos;re Subscribed!</h3>
                  <p className="text-white/70 text-xs sm:text-sm max-w-sm mx-auto">
                    Use code <strong className="text-white font-mono bg-white/20 px-2 py-0.5 rounded">VOLT15</strong> at checkout for 15% off your next equipment order.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-white/95 text-[#111] placeholder:text-neutral-text/40 px-5 py-4 rounded-2xl text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#5B6BF0] shadow-sm"
                    />
                    <button
                      type="submit"
                      className="bg-white hover:bg-[#5B6BF0] hover:text-white text-[#111] font-bold text-xs sm:text-sm px-8 py-4 rounded-2xl transition-all duration-300 shadow-md flex-shrink-0 uppercase tracking-wider cursor-pointer"
                    >
                      Subscribe
                    </button>
                  </div>
                  <p className="text-[0.68rem] text-white/50 text-center sm:text-left pl-1">
                    By subscribing you agree to receive commercial updates. You can unsubscribe at any time.
                  </p>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
