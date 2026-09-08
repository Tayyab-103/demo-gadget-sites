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
      <main className="bg-neutral-bg py-12 sm:py-16 md:py-20 relative overflow-hidden min-h-[85vh]">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Page Header */}
          <div className="text-left max-w-3xl mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-stone-200/80 shadow-xs mb-3.5">
              <span className="text-xs">🐾</span>
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-secondary">
                GET IN TOUCH
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight mb-3">
              Pet Concierge <span className="italic text-secondary font-serif">Inquiry &amp; Support</span>
            </h1>

            <p className="text-neutral-text/75 text-sm sm:text-base leading-relaxed">
              Have questions about carrier backpacks, chew toy materials, litter scoops, or multi-pack savings? Fill out the form below or contact our team directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start w-full">
            
            {/* Left Column: Contact Card with /img/contact.jpg (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Image Card */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-md border border-stone-200/80 bg-stone-100">
                <img
                  src="/img/contact.jpg"
                  alt="Pet Concierge Care"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/img/hero.jpg";
                  }}
                />
                <div className="absolute top-3.5 left-3.5">
                  <span className="bg-primary/95 text-white text-[0.65rem] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                    🐾 Dedicated Pet Support
                  </span>
                </div>
              </div>

              {/* Direct Channels Box */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-xs flex flex-col gap-4">
                <h3 className="font-serif text-lg font-bold text-primary mb-1">
                  Direct Concierge Channels
                </h3>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-bg hover:bg-stone-100 border border-stone-200 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary text-white flex items-center justify-center flex-shrink-0 text-lg shadow-xs">
                    📞
                  </div>
                  <div>
                    <div className="text-[0.65rem] uppercase tracking-wider text-neutral-text/50 font-bold">Call Toll-Free</div>
                    <div className="text-sm font-bold text-primary mt-0.5">{siteConfig.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-neutral-bg hover:bg-stone-100 border border-stone-200 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary text-white flex items-center justify-center flex-shrink-0 text-lg shadow-xs">
                    ✉️
                  </div>
                  <div>
                    <div className="text-[0.65rem] uppercase tracking-wider text-neutral-text/50 font-bold">Email Support</div>
                    <div className="text-sm font-bold text-primary mt-0.5 break-all">{siteConfig.email}</div>
                  </div>
                </a>

                <div className="pt-3 border-t border-stone-100 text-xs text-neutral-text/60">
                  <strong>Hours:</strong> Mon – Fri, 9:00 AM – 6:00 PM EST. Guaranteed reply within 24 hours.
                </div>
              </div>

            </div>

            {/* Right Column: Complete Interactive Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-10 border border-stone-200/80 shadow-md">
              {submitted ? (
                <div className="text-center py-12 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-secondary flex items-center justify-center text-3xl mb-4 font-bold shadow-sm">
                    ✓
                  </div>
                  <h2 className="text-primary font-serif font-bold text-2xl mb-2">Message Sent with Care!</h2>
                  <p className="text-neutral-text/75 text-sm max-w-sm mb-8 leading-relaxed">
                    Thank you for contacting {siteConfig.brandName}. One of our animal advocates will review your inquiry and get back to you within 24 hours.
                  </p>
                  <button
                    className="bg-secondary text-white font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-full hover:bg-primary transition-all cursor-pointer shadow-md"
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
                  <h3 className="font-serif text-xl font-bold text-primary mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-xs text-neutral-text/60 mb-6">
                    Fill in your details below and our team will be delighted to assist with your pet care needs.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[0.68rem] font-black uppercase tracking-wider text-neutral-text/75 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah & Bella (Golden Retriever)"
                        className="w-full bg-neutral-bg border border-stone-300 rounded-xl px-4 py-3.5 text-sm text-neutral-text focus:outline-none focus:border-secondary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[0.68rem] font-black uppercase tracking-wider text-neutral-text/75 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. sarah@example.com"
                        className="w-full bg-neutral-bg border border-stone-300 rounded-xl px-4 py-3.5 text-sm text-neutral-text focus:outline-none focus:border-secondary transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[0.68rem] font-black uppercase tracking-wider text-neutral-text/75 mb-2">
                      Inquiry Topic
                    </label>
                    <select
                      className="w-full bg-neutral-bg border border-stone-300 rounded-xl px-4 py-3.5 text-sm text-neutral-text focus:outline-none focus:border-secondary transition-colors cursor-pointer"
                    >
                      <option>Product Sizing &amp; Recommendations</option>
                      <option>Multi-Pack Pet Bundle Discounts</option>
                      <option>UPS Tracking &amp; Delivery Update</option>
                      <option>14-Day Happy Tail Guarantee Return</option>
                      <option>General Pet Care Question</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[0.68rem] font-black uppercase tracking-wider text-neutral-text/75 mb-2">
                      Your Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tell us about your pet and what you need assistance with..."
                      className="w-full bg-neutral-bg border border-stone-300 rounded-xl px-4 py-3.5 text-sm text-neutral-text focus:outline-none focus:border-secondary transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-secondary text-white hover:bg-primary font-black text-xs uppercase tracking-widest py-4 px-8 rounded-full transition-all duration-300 shadow-md cursor-pointer hover:shadow-lg mt-2"
                  >
                    <span>Submit Inquiry</span>
                    <span>🐾</span>
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
