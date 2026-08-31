"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const contactImages = [
  "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=900&q=80",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80",
  "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&q=80",
];

export default function Contact() {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((i) => (i + 1) % contactImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" id="contact">
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="eyebrow mb-4">Direct Contact</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary">
            Connect With Our <span className="text-secondary bg-primary px-3 py-1 rounded-xl">Lab Team</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-text/70">
            Have questions about load specs, bundle orders, or shipping timelines? Our Austin support team is ready.
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Visual & Direct Contact Channels (5 cols) */}
          <div className="lg:col-span-5 relative rounded-[2.5rem] overflow-hidden min-h-[380px] lg:min-h-0 shadow-2xl bg-primary flex flex-col justify-end p-6 sm:p-8 text-white">
            {contactImages.map((src, idx) => (
              <Image
                key={src}
                src={src}
                alt="Pulse Gear Athlete Support"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className={`object-cover transition-opacity duration-1000 ease-in-out ${
                  idx === activeImage ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/20 z-0" />

            <div className="relative z-10">
              {/* Carousel Dots */}
              <div className="flex gap-2 mb-6">
                {contactImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === activeImage ? "w-8 bg-secondary" : "w-3 bg-white/40"
                    }`}
                    aria-label={`Show image ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Direct Info Pills */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3.5 bg-white/10 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center font-bold text-base flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <div className="text-[0.62rem] text-white/50 uppercase tracking-widest font-bold">Toll-Free Phone</div>
                    <div className="font-black text-sm text-white">{siteConfig.phone}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 bg-white/10 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center font-bold text-base flex-shrink-0">
                    ✉️
                  </div>
                  <div className="min-w-0">
                    <div className="text-[0.62rem] text-white/50 uppercase tracking-widest font-bold">Direct Email</div>
                    <div className="font-black text-sm text-white truncate">{siteConfig.email}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 bg-white/10 backdrop-blur-md px-5 py-3.5 rounded-2xl border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 text-secondary flex items-center justify-center font-bold text-base flex-shrink-0">
                    📍
                  </div>
                  <div className="min-w-0">
                    <div className="text-[0.62rem] text-white/50 uppercase tracking-widest font-bold">Headquarters</div>
                    <div className="font-bold text-xs text-white truncate">{siteConfig.address}</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form (7 cols) */}
          <div className="lg:col-span-7 rounded-[2.5rem] bg-neutral-bg p-8 sm:p-12 border border-black/5 shadow-xl">
            {contactSubmitted ? (
              <div className="text-center py-12 flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 rounded-full bg-secondary text-primary flex items-center justify-center text-3xl mb-6 font-black shadow-lg">
                  ✓
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-primary mb-3">
                  Message Dispatched!
                </h3>
                <p className="text-neutral-text/70 text-sm max-w-md mx-auto leading-relaxed mb-8">
                  Thank you for contacting {siteConfig.brandName}. Our athlete support team has received your query and will reply within 24 hours.
                </p>
                <button
                  onClick={() => setContactSubmitted(false)}
                  className="rounded-full bg-primary px-8 py-3.5 text-xs font-black uppercase tracking-widest text-primary-text hover:bg-secondary hover:text-secondary-text transition-colors shadow-md cursor-pointer"
                >
                  Send Another Inquiry
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-[0.65rem] font-black uppercase tracking-widest text-neutral-text/60 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-5 py-4 text-sm bg-white border border-black/10 rounded-xl text-neutral-text placeholder:text-neutral-text/30 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[0.65rem] font-black uppercase tracking-widest text-neutral-text/60 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@training.com"
                      className="w-full px-5 py-4 text-sm bg-white border border-black/10 rounded-xl text-neutral-text placeholder:text-neutral-text/30 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="block text-[0.65rem] font-black uppercase tracking-widest text-neutral-text/60 mb-2">
                    Inquiry Topic
                  </label>
                  <select className="w-full px-5 py-4 text-sm bg-white border border-black/10 rounded-xl text-neutral-text focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all">
                    <option>Product &amp; Sizing Recommendation</option>
                    <option>Bulk / Team Bundle Pricing</option>
                    <option>Order Tracking &amp; Delivery</option>
                    <option>Warranty &amp; Returns Service</option>
                    <option>General Support Inquiry</option>
                  </select>
                </div>

                <div className="mb-8">
                  <label className="block text-[0.65rem] font-black uppercase tracking-widest text-neutral-text/60 mb-2">
                    Message Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe how we can assist your training load..."
                    className="w-full px-5 py-4 text-sm bg-white border border-black/10 rounded-xl text-neutral-text placeholder:text-neutral-text/30 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-primary py-4 px-8 text-xs font-black uppercase tracking-widest text-primary-text hover:bg-secondary hover:text-secondary-text transition-all duration-300 shadow-lg cursor-pointer"
                >
                  <span>Submit Inquiry to Lab</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
