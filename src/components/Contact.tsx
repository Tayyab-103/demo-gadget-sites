"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-14 sm:py-18 md:py-24 bg-white" id="contact">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Heading & Contact Info */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="eyebrow mb-3">Collective Assistance</span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-primary leading-[1.12] mb-4">
                We Are Always Ready To Help &amp; <span className="text-secondary">Answer Your Questions</span>
              </h2>

              <p className="text-neutral-text/70 text-xs sm:text-sm md:text-base leading-relaxed mb-8 sm:mb-10 max-w-lg">
                Have questions regarding {siteConfig.brandName} gear, weighted vest sizing, team volume orders, or real-time shipment tracking? Reach out to our Austin athletic support specialists.
              </p>
            </div>

            {/* Info Grid (3 Columns) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
              {/* Call Center */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Call Center</h4>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-xs sm:text-sm text-slate-600 hover:text-secondary transition-colors block font-medium"
                >
                  {siteConfig.phone}
                </a>
                <span className="text-[0.7rem] text-slate-400 block mt-0.5">Mon–Fri, 8am–6pm CST</span>
              </div>

              {/* Our Location */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Our Location</h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-snug">
                  {siteConfig.address}
                </p>
              </div>

              {/* Email */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Email</h4>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-xs sm:text-sm text-slate-600 hover:text-secondary transition-colors break-words block font-medium"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#F3F5F7] border border-slate-200/80 rounded-3xl sm:rounded-4xl p-7 sm:p-10 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-primary mb-2">
                Get in Touch
              </h3>
              <p className="text-xs sm:text-sm text-neutral-text/70 mb-8 leading-relaxed">
                Send us a direct inquiry and our Austin athlete support team will respond promptly.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-3 shadow-md">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">Message Received!</h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Thank you for reaching out. A gear advisor will respond to your email within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-4 text-xs font-bold text-secondary hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-transparent border-b border-slate-300 pb-2.5 pt-1 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-slate-300 pb-2.5 pt-1 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-transparent border-b border-slate-300 pb-2.5 pt-1 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 transition-colors"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      required
                      placeholder="Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-slate-300 pb-2.5 pt-1 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 bg-[#0B132B] hover:bg-[#1E293B] text-white px-7 py-3 rounded-full text-xs sm:text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                    >
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                      <span>Send a message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
