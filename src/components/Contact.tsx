"use client";

import { siteConfig } from "@/lib/brandIcon";
import React, { useState } from "react";

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
    <section className="py-16 sm:py-20 md:py-24 bg-surface" id="contact">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main 2-Column Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left Column: Heading & Contact Info */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <span className="eyebrow mb-3">Talk To Our Team</span>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-primary leading-[1.05] mb-4">
                Questions? <span className="text-secondary">We&apos;ve Got Answers.</span>
              </h2>

              <p className="text-neutral-text/70 text-xs sm:text-sm md:text-base leading-relaxed mb-8 sm:mb-10 max-w-lg">
                {`Need help choosing a vest size, picking the right bundle or tracking an order? The ${siteConfig.brandName} support team in Austin, TX is happy to help.`}
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Call Center */}
              <div className="rounded-2xl border border-line bg-white p-4 sm:p-5 min-w-0">
                <h4 className="text-[0.65rem] font-black uppercase tracking-widest text-secondary-deep mb-1.5">Call Center</h4>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-sm text-primary hover:text-secondary-deep transition-colors block font-medium"
                >
                  {siteConfig.phone}
                </a>
                <span className="text-[0.7rem] text-muted block mt-0.5">Mon–Fri, 8am–6pm CT</span>
              </div>

              {/* Our Location */}
              <div className="rounded-2xl border border-line bg-white p-4 sm:p-5 min-w-0">
                <h4 className="text-[0.65rem] font-black uppercase tracking-widest text-secondary-deep mb-1.5">Our Location</h4>
                <p className="text-sm text-primary font-medium leading-snug">
                  {siteConfig.address}
                </p>
              </div>

              {/* Email */}
              <div className="rounded-2xl border border-line bg-white p-4 sm:p-5 min-w-0 sm:col-span-2">
                <h4 className="text-[0.65rem] font-black uppercase tracking-widest text-secondary-deep mb-1.5">Email</h4>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-primary hover:text-secondary-deep transition-colors break-all block font-medium"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="lg:col-span-6">
            <div className="card p-7 sm:p-10">
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-primary mb-2">
                Send Us A Message
              </h3>
              <p className="text-xs sm:text-sm text-neutral-text/70 mb-8 leading-relaxed">
                Fill out the form and a member of our team will reply by email, usually within one business day.
              </p>

              {submitted ? (
                <div className="bg-secondary-soft border border-secondary/30 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-secondary text-secondary-text flex items-center justify-center mx-auto mb-3 shadow-md">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-base font-black text-primary mb-1">Message Received!</h4>
                  <p className="text-xs sm:text-sm text-muted">
                    Thanks for reaching out. We&apos;ll reply to your email within one business day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-4 text-xs font-bold text-secondary-deep hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="field"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="field"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="field"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={4}
                      required
                      placeholder="Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="field resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="btn-accent w-full sm:w-auto"
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
