"use client";

import React, { useEffect, useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const contactImages = [
  "/img/brand/hero_interior.jpg",
  "/img/brand/about_studio.jpg",
  "/img/brand/how_step3.jpg",
];

export default function Contact({ showHeader = true, badgeNumber = "06" }: { showHeader?: boolean; badgeNumber?: string }) {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((i) => (i + 1) % contactImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-10 sm:py-14 md:py-16 bg-neutral-bg relative" id="contact">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14">
        
        {/* Top Section Header (Shown only when enabled) */}
        {showHeader && (
          <>
            <div className="flex items-center gap-3 sm:gap-6 mb-6">
              <span className="bg-primary text-white font-serif text-lg sm:text-2xl md:text-3xl lg:text-4xl px-3.5 sm:px-6 md:px-7 py-1 sm:py-1.5 md:py-2 rounded-full font-normal tracking-wide shadow-sm flex items-center justify-center flex-shrink-0">
                {badgeNumber}
              </span>

              <h2 className="font-serif font-normal text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-[0.06em] text-primary leading-none break-words">
                GET IN TOUCH
              </h2>
            </div>

            <div className="w-full h-px bg-black/10 mb-6 sm:mb-10 md:mb-12" />
          </>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch">
          
          {/* Visual Showcase Card (Clean Light Styling) */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[340px] sm:min-h-[400px] lg:min-h-0 shadow-md border border-black/8 bg-white flex flex-col justify-end p-6 sm:p-8">
            {contactImages.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt="Alderwyn Home Living Interiors design consultation"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                  idx === activeImage ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
                style={{ transitionProperty: "opacity, transform" }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            <div className="relative z-10 flex flex-col justify-end">
              {/* Image Indicator Dots */}
              <div className="flex gap-2 mb-6 sm:mb-8">
                {contactImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === activeImage ? "w-8 bg-white" : "w-4 bg-white/40"
                    }`}
                    aria-label={`Show image ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3.5 bg-white/95 backdrop-blur-md px-4 sm:px-5 py-3 rounded-2xl border border-black/5 text-primary shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    ☎
                  </div>
                  <div>
                    <div className="text-[0.6rem] text-neutral-text/50 uppercase tracking-widest font-bold">Studio Phone</div>
                    <div className="font-bold text-xs sm:text-sm text-primary">{siteConfig.phone}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3.5 bg-white/95 backdrop-blur-md px-4 sm:px-5 py-3 rounded-2xl border border-black/5 text-primary shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    ✉
                  </div>
                  <div>
                    <div className="text-[0.6rem] text-neutral-text/50 uppercase tracking-widest font-bold">Email Inquiries</div>
                    <div className="font-bold text-xs sm:text-sm text-primary break-all">{siteConfig.email}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card (Light Theme) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-md border border-black/8">
            {contactSubmitted ? (
              <div className="text-center py-12 h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-3xl mx-auto mb-6 font-bold shadow-md">
                  ✓
                </div>
                <h3 className="text-primary font-serif font-normal text-2xl sm:text-3xl mb-3 uppercase tracking-wide">
                  Inquiry Received
                </h3>
                <p className="text-neutral-text/60 text-xs sm:text-sm mb-8 max-w-sm mx-auto leading-relaxed uppercase tracking-wider">
                  Thank you for contacting {siteConfig.brandName}. Our concierge team will reply within 24 business hours.
                </p>
                <button
                  className="inline-flex items-center justify-center font-bold bg-primary text-white hover:bg-neutral-text transition-all py-3.5 px-8 rounded-full text-xs uppercase tracking-widest cursor-pointer shadow-md"
                  onClick={() => setContactSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setContactSubmitted(true);
                  (e.target as HTMLFormElement).reset();
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
                  <div className="flex flex-col">
                    <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-widest text-neutral-text/60">Full Name</label>
                    <input
                      type="text"
                      className="block w-full px-4 py-3.5 text-xs sm:text-sm border border-black/10 rounded-2xl focus:outline-none focus:border-primary transition-all text-neutral-text bg-neutral-bg"
                      placeholder="e.g. Eleanor Vance"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-widest text-neutral-text/60">Email Address</label>
                    <input
                      type="email"
                      className="block w-full px-4 py-3.5 text-xs sm:text-sm border border-black/10 rounded-2xl focus:outline-none focus:border-primary transition-all text-neutral-text bg-neutral-bg"
                      placeholder="e.g. eleanor@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col mb-4 sm:mb-5">
                  <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-widest text-neutral-text/60">Subject</label>
                  <input
                    type="text"
                    className="block w-full px-4 py-3.5 text-xs sm:text-sm border border-black/10 rounded-2xl focus:outline-none focus:border-primary transition-all text-neutral-text bg-neutral-bg"
                    placeholder="e.g. Styling consultation or product inquiry"
                    required
                  />
                </div>

                <div className="flex flex-col mb-6 sm:mb-8">
                  <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-widest text-neutral-text/60">Message</label>
                  <textarea
                    className="block w-full px-4 py-3.5 text-xs sm:text-sm border border-black/10 rounded-2xl focus:outline-none focus:border-primary transition-all text-neutral-text bg-neutral-bg resize-none"
                    rows={4}
                    placeholder="How may our design specialists help you?"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 bg-primary text-white hover:bg-neutral-text transition-all duration-300 py-3.5 sm:py-4 px-8 rounded-full font-bold text-xs uppercase tracking-[0.16em] w-full shadow-md cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <span>→</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
