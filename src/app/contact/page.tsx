"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import siteConfigData from "../../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Header />
      <main className="bg-[#F8F6F2] text-[#121316] py-16 sm:py-20 md:py-24 relative overflow-hidden min-h-[85vh]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Page Header */}
          <div className="text-left max-w-3xl mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-stone-200/80 shadow-xs mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E06830]" />
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#121316]">
                CULINARY CONCIERGE
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#121316] tracking-tight leading-tight mb-3">
              Workshop Inquiry <br />
              <span className="italic text-[#E06830] font-serif">&amp; Tool Support</span>
            </h1>

            <p className="text-[#121316]/75 text-sm sm:text-base leading-relaxed">
              Have questions regarding tool metallurgy, sharpening maintenance, multi-piece bundle discounts, or order delivery? Submit your inquiry below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
            
            {/* Left Column: Direct Info (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Image Card */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-md border border-stone-200/90 bg-stone-100">
                <img
                  src="/img/about-workshop.jpg"
                  alt="Culinary Tool Workshop"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/hero-kitchen.jpg";
                  }}
                />
                <div className="absolute top-3.5 left-3.5">
                  <span className="bg-[#121316] text-white text-[0.65rem] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                    ✦ Dedicated Workshop Team
                  </span>
                </div>
              </div>

              {/* Direct Channels Box */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm flex flex-col gap-4">
                <h3 className="font-serif text-lg font-bold text-[#121316] mb-1">
                  Direct Concierge Channels
                </h3>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8F6F2] hover:bg-stone-100 border border-stone-200 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#121316] text-[#E06830] flex items-center justify-center flex-shrink-0 text-lg shadow-xs">
                    📞
                  </div>
                  <div>
                    <div className="text-[0.65rem] uppercase tracking-wider text-[#121316]/50 font-bold">Call Toll-Free</div>
                    <div className="text-sm font-bold text-[#121316] mt-0.5">{siteConfig.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8F6F2] hover:bg-stone-100 border border-stone-200 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#121316] text-[#E06830] flex items-center justify-center flex-shrink-0 text-lg shadow-xs">
                    ✉️
                  </div>
                  <div>
                    <div className="text-[0.65rem] uppercase tracking-wider text-[#121316]/50 font-bold">Email Support</div>
                    <div className="text-sm font-bold text-[#121316] mt-0.5 break-all">{siteConfig.email}</div>
                  </div>
                </a>

                <div className="pt-3 border-t border-stone-100 text-xs text-[#121316]/60">
                  <strong>Hours:</strong> Mon – Fri, 9:00 AM – 6:00 PM EST. Guaranteed reply within 24 hours.
                </div>
              </div>

            </div>

            {/* Right Column: Complete Interactive Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-10 border border-stone-200/90 shadow-md">
              {submitted ? (
                <div className="text-center py-12 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#E06830]/20 text-[#121316] flex items-center justify-center text-3xl mb-4 font-bold shadow-sm">
                    ✓
                  </div>
                  <h2 className="text-[#121316] font-serif font-bold text-2xl mb-2">Message Received!</h2>
                  <p className="text-[#121316]/75 text-sm max-w-sm mb-8 leading-relaxed">
                    Thank you for contacting {siteConfig.brandName}. One of our culinary tool specialists will review your message and reply within 24 hours.
                  </p>
                  <button
                    className="bg-[#121316] text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full hover:bg-[#E06830] hover:text-white transition-all cursor-pointer shadow-md"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                    (e.target as HTMLFormElement).reset();
                  }}
                  className="space-y-4"
                >
                  <h3 className="font-serif text-xl font-bold text-[#121316] mb-2">
                    Send Us an Inquiry
                  </h3>
                  <p className="text-xs text-[#121316]/60 mb-6">
                    Fill in your details below and our team will be glad to assist with your culinary tool requirements.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[0.68rem] font-bold uppercase tracking-wider text-[#121316]/80 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Chef Marcus Vance"
                        className="w-full bg-[#F8F6F2] border border-stone-300 rounded-xl px-4 py-3.5 text-sm text-[#121316] placeholder:text-[#121316]/40 focus:outline-none focus:border-[#E06830] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[0.68rem] font-bold uppercase tracking-wider text-[#121316]/80 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. marcus@kitchen.com"
                        className="w-full bg-[#F8F6F2] border border-stone-300 rounded-xl px-4 py-3.5 text-sm text-[#121316] placeholder:text-[#121316]/40 focus:outline-none focus:border-[#E06830] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[0.68rem] font-bold uppercase tracking-wider text-[#121316]/80 mb-2">
                      Inquiry Topic
                    </label>
                    <select
                      className="w-full bg-[#F8F6F2] border border-stone-300 rounded-xl px-4 py-3.5 text-sm text-[#121316] focus:outline-none focus:border-[#E06830] transition-colors cursor-pointer"
                    >
                      <option>Tool Specifications &amp; Metallurgy</option>
                      <option>Multi-Pack Kitchen Bundle Savings</option>
                      <option>UPS Tracking &amp; Delivery Update</option>
                      <option>{siteConfig.trialPeriod}-Day Risk-Free Return Assistance</option>
                      <option>Commercial Kitchen &amp; Bulk Orders</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[0.68rem] font-bold uppercase tracking-wider text-[#121316]/80 mb-2">
                      Your Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tell us about your kitchen requirements and how we can assist..."
                      className="w-full bg-[#F8F6F2] border border-stone-300 rounded-xl px-4 py-3.5 text-sm text-[#121316] placeholder:text-[#121316]/40 focus:outline-none focus:border-[#E06830] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#121316] text-white hover:bg-[#E06830] hover:text-white font-bold text-xs uppercase tracking-widest py-4 px-8 rounded-full transition-all duration-300 shadow-md cursor-pointer hover:shadow-lg mt-2"
                  >
                    <span>Submit Workshop Inquiry</span>
                    <span>→</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </main>
      <Footer />
      <CartDrawer />
    </>
  );
}
