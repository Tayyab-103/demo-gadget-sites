"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative py-10 sm:py-14 lg:py-16 bg-[#fafafa] text-gray-900 overflow-hidden border-b border-gray-200" id="contact">
      {/* ────────────────── BACKGROUND ACCENTS ────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-red-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* ────────────────── LEFT COLUMN: INFO & PILL ────────────────── */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Pill Badge matching Screenshot 2 (Light Theme) */}
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-1.5 rounded-full w-fit mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_6px_#ef4444]" />
              <span className="text-xs font-bold uppercase tracking-wider text-gray-700">
                Contact
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 mb-2">
              Get in touch
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 max-w-md font-normal">
              Questions about vehicle compatibility or orders? Our automotive specialists are ready to help.
            </p>

            {/* 3 Interactive Contact Cards with Arrow Button (Light Theme) */}
            <div className="space-y-3.5">
              {/* Card 1: Email Us */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="bg-white hover:bg-red-50/40 border border-gray-200 hover:border-red-400 rounded-2xl p-4 sm:p-4.5 flex items-center justify-between transition-all duration-200 group shadow-xs hover:shadow-md"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-200 text-gray-700 group-hover:text-red-600 group-hover:bg-red-100/60 group-hover:border-red-200 flex items-center justify-center flex-shrink-0 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <span className="text-[0.68rem] text-gray-400 block font-semibold">Email us</span>
                    <strong className="text-xs sm:text-sm font-bold text-gray-900 block truncate lowercase group-hover:text-red-600 transition-colors">
                      {siteConfig.email}
                    </strong>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-red-600 text-gray-600 group-hover:text-white flex items-center justify-center text-xs transition-all flex-shrink-0 ml-2 shadow-xs">
                  ↗
                </div>
              </a>

              {/* Card 2: Call Us */}
              <a
                href={`tel:${siteConfig.phone}`}
                className="bg-white hover:bg-red-50/40 border border-gray-200 hover:border-red-400 rounded-2xl p-4 sm:p-4.5 flex items-center justify-between transition-all duration-200 group shadow-xs hover:shadow-md"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-200 text-gray-700 group-hover:text-red-600 group-hover:bg-red-100/60 group-hover:border-red-200 flex items-center justify-center flex-shrink-0 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <span className="text-[0.68rem] text-gray-400 block font-semibold">Call us</span>
                    <strong className="text-xs sm:text-sm font-bold text-gray-900 block truncate group-hover:text-red-600 transition-colors">
                      {siteConfig.phone}
                    </strong>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-red-600 text-gray-600 group-hover:text-white flex items-center justify-center text-xs transition-all flex-shrink-0 ml-2 shadow-xs">
                  ↗
                </div>
              </a>

              {/* Card 3: Our Location */}
              <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-4.5 flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-200 text-gray-700 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <span className="text-[0.68rem] text-gray-400 block font-semibold">Our location</span>
                    <strong className="text-xs sm:text-sm font-bold text-gray-900 block truncate">
                      {siteConfig.address}
                    </strong>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xs flex-shrink-0 ml-2">
                  📍
                </div>
              </div>
            </div>
          </div>

          {/* ────────────────── RIGHT COLUMN: FORM CARD (Dragged below for watermark visibility) ────────────────── */}
          <div className="lg:col-span-7 mt-2 sm:mt-6 lg:mt-12">
            <div className="bg-white border border-gray-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-gray-200/60 relative">
              {submitted ? (
                <div className="text-center py-12 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-500 text-green-600 flex items-center justify-center text-2xl font-black mx-auto mb-5 shadow-md">
                    ✓
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-gray-900 mb-2">
                    Message Dispatched Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 max-w-sm mx-auto mb-6">
                    Thank you for reaching out to Torque Hollow. An automotive specialist will respond to your inquiry within 24 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="bg-gray-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider px-7 py-3 rounded-xl transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full bg-[#f8f9fa] border border-gray-200 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your email address"
                      className="w-full bg-[#f8f9fa] border border-gray-200 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your vehicle model, part requirements, or fitment questions..."
                      className="w-full bg-[#f8f9fa] border border-gray-200 rounded-xl px-4 py-3.5 text-xs sm:text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-600 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  {/* Red Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-red-600/30 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer mt-2"
                  >
                    Submit
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
