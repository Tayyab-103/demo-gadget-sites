"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#EBECEF] relative overflow-hidden" id="contact">
      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12 z-10">
        
        {/* Main White Card matching reference */}
        <div className="bg-white rounded-[1.8rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-16 shadow-[0_15px_50px_rgba(0,0,0,0.05)] border border-black/[0.04]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* ══════════════════════════════════════════
                LEFT COLUMN: Info, Address, Phone, Socials
                ══════════════════════════════════════════ */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-[#111] tracking-tight mb-8">
                  Get in touch
                </h2>

                <div className="space-y-6">
                  {/* Email */}
                  <div>
                    <span className="text-xs text-neutral-text/45 font-medium block mb-1">
                      Email:
                    </span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-sm sm:text-base font-bold text-[#111] hover:text-[#5B6BF0] transition-colors break-all"
                    >
                      {siteConfig.email}
                    </a>
                  </div>

                  {/* Phone */}
                  <div>
                    <span className="text-xs text-neutral-text/45 font-medium block mb-1">
                      Phone:
                    </span>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="text-sm sm:text-base font-bold text-[#111] hover:text-[#5B6BF0] transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>

                  {/* Address */}
                  <div>
                    <span className="text-xs text-neutral-text/45 font-medium block mb-1">
                      Address:
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-text/70 leading-relaxed font-medium">
                      {siteConfig.address}
                      <br />
                      {siteConfig.corpName}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Follow Us Icons (Matching Reference) */}
              <div className="pt-4">
                <span className="text-xs text-neutral-text/45 font-medium block mb-3">
                  Follow us
                </span>
                <div className="flex items-center gap-2.5">
                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-[#111] hover:bg-[#5B6BF0] text-white flex items-center justify-center transition-colors shadow-xs"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-[#111] hover:bg-[#5B6BF0] text-white flex items-center justify-center transition-colors shadow-xs"
                    aria-label="Facebook"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-[#111] hover:bg-[#5B6BF0] text-white flex items-center justify-center transition-colors shadow-xs"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>

                  {/* X / Twitter */}
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full bg-[#111] hover:bg-[#5B6BF0] text-white flex items-center justify-center transition-colors shadow-xs"
                    aria-label="X"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* ══════════════════════════════════════════
                RIGHT COLUMN: Form (Matching Reference)
                ══════════════════════════════════════════ */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="bg-[#F8F8FA] rounded-2xl p-10 text-center flex flex-col items-center justify-center border border-black/5 min-h-[320px]">
                  <div className="w-12 h-12 rounded-full bg-[#111] text-white flex items-center justify-center text-xl mb-4 font-bold shadow-md">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-[#111] mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-text/60 max-w-sm mb-6 leading-relaxed">
                    Thank you for reaching out. An electrical engineering specialist will review your inquiry and get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#111] underline hover:text-[#5B6BF0] transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  {/* Two inputs side-by-side: Your Name & Email address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#111] mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        className="w-full bg-[#F4F4F6] text-xs sm:text-sm text-[#111] placeholder:text-neutral-text/35 px-4 py-3.5 rounded-xl border border-transparent focus:border-black/20 focus:bg-white focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#111] mb-2">
                        Email address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Your email address"
                        className="w-full bg-[#F4F4F6] text-xs sm:text-sm text-[#111] placeholder:text-neutral-text/35 px-4 py-3.5 rounded-xl border border-transparent focus:border-black/20 focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Message textarea */}
                  <div>
                    <label className="block text-xs font-semibold text-[#111] mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Write something...."
                      className="w-full bg-[#F4F4F6] text-xs sm:text-sm text-[#111] placeholder:text-neutral-text/35 p-4 rounded-2xl border border-transparent focus:border-black/20 focus:bg-white focus:outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Full-width Black Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#111] hover:bg-[#333] text-white font-bold text-xs sm:text-sm py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
