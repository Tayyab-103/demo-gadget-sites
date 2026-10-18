"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-black border-t border-black/6" id="contact">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Large Contact Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-[#0f2b48] tracking-tight leading-[1.02] mb-12 sm:mb-16">
          Contact
        </h2>

        {/* 2-Column Grid: Form + Info Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left Column: Contact Form */}
          <div className="flex flex-col">
            {submitted ? (
              <div className="flex items-center gap-3 text-[#0f2b48] text-sm font-bold bg-white p-6 rounded-2xl border border-[#0f2b48]/20 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
                Thank you! Our uniform support desk will respond within 24 hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-0">
                {/* Full Name */}
                <div className="py-5 border-b border-black/10">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    required
                    className="w-full bg-transparent text-sm sm:text-base text-[#0f2b48] placeholder-black/40 focus:outline-none font-medium"
                  />
                </div>

                {/* Email */}
                <div className="py-5 border-b border-black/10">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    required
                    className="w-full bg-transparent text-sm sm:text-base text-[#0f2b48] placeholder-black/40 focus:outline-none font-medium"
                  />
                </div>

                {/* Message */}
                <div className="py-5 border-b border-black/10">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can our uniform supply team assist your crew?"
                    rows={4}
                    required
                    className="w-full bg-transparent text-sm sm:text-base text-[#0f2b48] placeholder-black/40 focus:outline-none resize-none font-medium"
                  />
                </div>

                {/* Submit Button */}
                <div className="mt-8">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center font-black uppercase tracking-wider text-white text-xs sm:text-sm bg-[#0f2b48] hover:bg-[#0b2238] transition-all duration-200 py-3.5 px-8 rounded-full shadow-md hover:scale-105 cursor-pointer"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Dark Contact Info Card */}
          <div className="bg-[#0b2238] rounded-3xl overflow-hidden shadow-xl border border-[#1e3a5f]/40">
            {/* Card Header */}
            <div className="relative px-7 sm:px-9 pt-8 pb-7 text-center">
              {/* Decorative corner dots */}
              <span className="absolute top-4 left-4 w-2 h-2 rounded-full bg-[#f59e0b]" />
              <span className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#f59e0b]" />
              <span className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-[#f59e0b]" />
              <span className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-[#f59e0b]" />

              <p className="text-white text-base sm:text-lg font-bold leading-snug">
                Get in touch with us!
              </p>
              <p className="text-white/80 text-sm font-medium mt-1">
                Let&apos;s talk uniforms!
              </p>
            </div>

            {/* Contact Info Items */}
            <div className="px-7 sm:px-9 pb-8 flex flex-col gap-4">
              {/* Email */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-full bg-[#133556] border border-[#f59e0b]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#f59e0b] transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span className="text-white/90 text-sm font-medium group-hover:text-[#f59e0b] transition-colors break-all">
                  {siteConfig.email}
                </span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-full bg-[#133556] border border-[#f59e0b]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#f59e0b] transition-colors duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span className="text-white/90 text-sm font-medium group-hover:text-[#f59e0b] transition-colors">
                  {siteConfig.phone}
                </span>
              </a>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#133556] border border-[#f59e0b]/30 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="text-white/90 text-sm font-medium">
                  {siteConfig.address}
                </span>
              </div>

              {/* Website */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#133556] border border-[#f59e0b]/30 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <span className="text-white/90 text-sm font-medium">
                  {siteConfig.websiteUrl}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
