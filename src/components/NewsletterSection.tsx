"use client";

import React, { useState } from "react";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <section className="py-10 sm:py-14 md:py-16 bg-neutral-bg relative" id="newsletter">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        <div className="relative rounded-3xl overflow-hidden bg-primary text-white p-8 sm:p-12 md:p-16 border border-white/10 shadow-2xl">
          
          {/* Subtle background decorative ambiance */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <Image
              src="/img/brand/hero_interior.jpg"
              alt="Alderwyn Interior Styling"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/85" />

          {/* Content Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Heading & Copy */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#E2D9C8] mb-3 block">
                PRIVATE STYLING PRIVILEGE
              </span>

              <h2 className="font-serif font-normal text-2xl sm:text-4xl md:text-5xl uppercase tracking-[0.05em] text-white leading-tight mb-4">
                JOIN THE ALDERWYN <br />
                INTERIOR CIRCLE
              </h2>

              <p className="text-xs sm:text-sm text-white/75 font-medium uppercase tracking-[0.12em] leading-relaxed max-w-xl">
                SUBSCRIBE TO RECEIVE CURATED LIVING JOURNALS, PRIVATE COLLECTION PREVIEWS, AND 15% OFF YOUR FIRST BESPOKE ORDER.
              </p>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-5 w-full">
              {subscribed ? (
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8 text-center">
                  <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center text-xl mx-auto mb-3 font-bold shadow-md">
                    ✓
                  </div>
                  <h3 className="font-serif font-normal text-xl uppercase tracking-wide text-white mb-2">
                    Welcome to the Circle
                  </h3>
                  <p className="text-xs text-white/70 uppercase tracking-wider">
                    Your 15% complimentary styling voucher has been sent to your inbox.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-3.5 w-full max-w-md ml-auto">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ENTER YOUR EMAIL ADDRESS"
                      required
                      className="w-full bg-white/10 border border-white/20 focus:border-white focus:bg-white/15 text-white placeholder:text-white/40 px-5 py-4 rounded-full text-xs uppercase tracking-[0.16em] focus:outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-3 bg-white text-primary hover:bg-[#F4F5F7] hover:scale-[1.02] transition-all duration-300 py-4 px-8 rounded-full font-bold text-xs uppercase tracking-[0.18em] shadow-lg cursor-pointer"
                  >
                    <span>JOIN &amp; CLAIM 15% OFF</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </button>

                  <span className="text-[0.62rem] text-white/40 uppercase tracking-widest text-center block mt-1">
                    No spam. Unsubscribe with one click anytime.
                  </span>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
