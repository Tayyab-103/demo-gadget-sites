"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Contact() {
  const [contactSubmitted, setContactSubmitted] = useState(false);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden" id="contact">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Left-Aligned Section Header */}
        <div className="text-left max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FAF8F5] px-4 py-1.5 rounded-full border border-stone-200/60 shadow-xs mb-3.5">
            <span className="text-xs">🐾</span>
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-secondary">
              PET CONCIERGE
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight mb-3">
            Connect with Our <span className="italic text-secondary font-serif">Pet Care Team</span>
          </h2>

          <p className="text-neutral-text/70 text-sm sm:text-base leading-relaxed">
            Have questions about product sizing, multi-pack bundles, or shipping? Our friendly team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Visual & Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 bg-[#182825] text-white rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-44 h-44 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="w-12 h-12 rounded-2xl bg-secondary text-white flex items-center justify-center text-2xl mb-6 shadow-md">
                🐾
              </div>
              <h3 className="text-2xl font-black mb-3">Whisker Vale Pet Concierge</h3>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-8">
                We treat every inquiry with the personal care your beloved animal deserves. Guaranteed reply within 24 hours.
              </p>

              {/* Direct Channels */}
              <div className="space-y-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary/30 text-secondary flex items-center justify-center flex-shrink-0 text-lg">
                    📞
                  </div>
                  <div>
                    <div className="text-[0.65rem] uppercase tracking-wider text-white/50 font-bold">Call Toll-Free</div>
                    <div className="text-sm font-bold text-white mt-0.5">{siteConfig.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary/30 text-secondary flex items-center justify-center flex-shrink-0 text-lg">
                    ✉️
                  </div>
                  <div>
                    <div className="text-[0.65rem] uppercase tracking-wider text-white/50 font-bold">Email Pet Support</div>
                    <div className="text-sm font-bold text-white mt-0.5 break-all">{siteConfig.email}</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="text-xs text-white/60">
                <strong className="text-white">Fulfillment &amp; Support:</strong> Monday – Friday, 9:00 AM – 6:00 PM EST
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAF8F5] rounded-[2.5rem] p-8 sm:p-10 border border-black/[0.06] shadow-sm flex flex-col justify-center">
            {contactSubmitted ? (
              <div className="text-center py-12 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-3xl mb-4 font-bold shadow-sm">
                  ✓
                </div>
                <h3 className="text-primary font-black text-2xl mb-2">Message Sent with Love!</h3>
                <p className="text-neutral-text/70 text-sm max-w-sm mb-8 leading-relaxed">
                  Thank you for reaching out to {siteConfig.brandName}. One of our pet advocates will review your message and respond within 24 hours.
                </p>
                <button
                  className="bg-primary text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full hover:bg-secondary transition-all cursor-pointer shadow-md"
                  onClick={() => setContactSubmitted(false)}
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
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[0.68rem] font-black uppercase tracking-wider text-neutral-text/60 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Emily & Max (Golden Retriever)"
                      className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-sm text-neutral-text focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[0.68rem] font-black uppercase tracking-wider text-neutral-text/60 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. emily@example.com"
                      className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-sm text-neutral-text focus:outline-none focus:border-secondary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[0.68rem] font-black uppercase tracking-wider text-neutral-text/60 mb-2">
                    Inquiry Topic
                  </label>
                  <select
                    className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-sm text-neutral-text focus:outline-none focus:border-secondary transition-colors"
                  >
                    <option>Product Sizing &amp; Recommendations</option>
                    <option>Multi-Pack Bundle Discounts</option>
                    <option>UPS Tracking &amp; Delivery Update</option>
                    <option>14-Day Happy Tail Guarantee Return</option>
                    <option>Other Pet Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[0.68rem] font-black uppercase tracking-wider text-neutral-text/60 mb-2">
                    How Can We Help Your Furry Friend?
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your pet and how we can assist..."
                    className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-sm text-neutral-text focus:outline-none focus:border-secondary transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-white hover:bg-secondary font-black text-xs uppercase tracking-widest py-4 px-8 rounded-full transition-all duration-300 shadow-md cursor-pointer hover:shadow-lg"
                >
                  <span>Submit Message to Concierge</span>
                  <span>🐾</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
