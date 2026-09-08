"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const contactImages = [
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
  "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=900&q=80",
  "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?w=900&q=80",
];

interface ContactProps {
  showForm?: boolean;
}

export default function Contact({ showForm = true }: ContactProps) {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((i) => (i + 1) % contactImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-[#F9F7F2] relative overflow-hidden font-sans border-t border-black/5" id="contact">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 md:mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C1E17]/5 border border-[#D4AF37]/40 mb-3 shadow-2xs">
            <span className="text-[#D4AF37] text-xs">✦</span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0C1E17]">
              Atelier Concierge
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal uppercase tracking-tight text-[#0C1E17] leading-tight mb-4">
            Have Questions? <span className="text-[#D4AF37]">Get in Touch</span>
          </h2>
          <p className="text-black/65 text-xs sm:text-sm md:text-base leading-relaxed font-light">
            Our master jewelers and customer care consultants in Austin, TX are available to assist with sizing, order tracking, and custom consultations.
          </p>
        </div>

        {/* Layout */}
        <div className={`grid grid-cols-1 ${showForm ? "lg:grid-cols-2" : "lg:grid-cols-12"} gap-8 lg:gap-12 items-stretch max-w-7xl mx-auto`}>
          
          {/* Visual + Contact Info Column */}
          <div className={`${showForm ? "w-full" : "lg:col-span-7"} relative rounded-3xl overflow-hidden min-h-[380px] lg:min-h-[460px] shadow-2xl bg-[#0C1E17] flex flex-col justify-end p-6 sm:p-10 border border-[#D4AF37]/25`}>
            {contactImages.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt="Friendly customer support team ready to help"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                  idx === activeImage ? "opacity-45 scale-100" : "opacity-0 scale-105"
                }`}
                style={{ transitionProperty: "opacity, transform" }}
              />
            ))}
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1E17] via-[#0C1E17]/70 to-[#0C1E17]/30" />

            <div className="relative z-10">
              {/* Image Dots */}
              <div className="flex gap-2 mb-6">
                {contactImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === activeImage ? "w-8 bg-[#D4AF37]" : "w-3 bg-white/30"
                    }`}
                    aria-label={`Show image ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3.5 bg-white/10 backdrop-blur-md px-5 py-4 rounded-2xl border border-white/15 hover:border-[#D4AF37] hover:bg-white/15 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[0.62rem] text-white/50 uppercase tracking-widest font-bold">Call Concierge</div>
                    <div className="font-bold text-xs sm:text-sm text-white mt-0.5">{siteConfig.phone}</div>
                  </div>
                </a>
                
                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3.5 bg-white/10 backdrop-blur-md px-5 py-4 rounded-2xl border border-white/15 hover:border-[#D4AF37] hover:bg-white/15 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[0.62rem] text-white/50 uppercase tracking-widest font-bold">Email Inquiries</div>
                    <div className="font-bold text-xs sm:text-sm text-white mt-0.5 truncate max-w-[150px] sm:max-w-none">{siteConfig.email}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* If showForm is TRUE: render the contact form */}
          {showForm ? (
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-black/8 flex flex-col justify-center">
              {contactSubmitted ? (
                <div className="text-center py-10 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-[#D4AF37] text-[#0C1E17] flex items-center justify-center text-3xl mx-auto mb-6 font-bold shadow-md bg-[#D4AF37]/15">
                    ✓
                  </div>
                  <h3 className="text-[#0C1E17] font-serif font-bold text-2xl mb-3">
                    Inquiry Received
                  </h3>
                  <p className="text-black/60 text-xs sm:text-sm mb-8 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. Our atelier concierge will review your message and reply within 24 hours.
                  </p>
                  <button
                    className="inline-block font-bold text-center whitespace-nowrap bg-[#0C1E17] text-white hover:bg-[#D4AF37] hover:text-[#0C1E17] transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-widest cursor-pointer shadow-md"
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="flex flex-col">
                      <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-widest text-black/50">Full Name</label>
                      <input
                        type="text"
                        className="block w-full px-4 py-3.5 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-[#D4AF37] transition-all text-[#0C1E17] bg-[#F9F7F2]"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-widest text-black/50">Email Address</label>
                      <input
                        type="email"
                        className="block w-full px-4 py-3.5 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-[#D4AF37] transition-all text-[#0C1E17] bg-[#F9F7F2]"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col mb-4">
                    <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-widest text-black/50">Inquiry Subject</label>
                    <input
                      type="text"
                      className="block w-full px-4 py-3.5 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-[#D4AF37] transition-all text-[#0C1E17] bg-[#F9F7F2]"
                      placeholder="e.g., Ring sizing, custom timepiece, order support"
                      required
                    />
                  </div>

                  <div className="flex flex-col mb-6">
                    <label className="block font-bold mb-2 text-[0.65rem] uppercase tracking-widest text-black/50">Message</label>
                    <textarea
                      className="block w-full px-4 py-3.5 text-xs sm:text-sm border border-black/10 rounded-xl focus:outline-none focus:border-[#D4AF37] transition-all text-[#0C1E17] bg-[#F9F7F2] resize-none"
                      rows={4}
                      placeholder="How may our concierge assist you?"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 font-bold text-center whitespace-nowrap bg-gradient-to-r from-[#D4AF37] via-[#E5C266] to-[#D4AF37] text-[#0C1E17] hover:opacity-95 transition-all duration-300 py-4 px-8 rounded-full text-xs uppercase tracking-widest w-full cursor-pointer shadow-lg shadow-[#D4AF37]/25"
                  >
                    Submit Inquiry &rarr;
                  </button>
                </form>
              )}
            </div>
          ) : (
            /* If showForm is FALSE (Home page display): Show Atelier Showroom & Support card with CTA to Contact page */
            <div className="lg:col-span-5 bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-black/8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0C1E17] text-[#D4AF37] flex items-center justify-center mb-6 shadow-md text-lg font-black">
                  ✦
                </div>

                <h3 className="text-2xl font-serif font-bold text-[#0C1E17] tracking-tight mb-3">
                  Atelier Showroom &amp; Support
                </h3>

                <p className="text-xs sm:text-sm text-black/65 leading-relaxed mb-6 font-light">
                  Need personalized assistance or an official appraisal? Reach our team directly or visit our dedicated contact portal.
                </p>

                <div className="space-y-3.5 text-xs text-black/75 border-t border-black/8 pt-5 mb-8">
                  <div className="flex items-start gap-3">
                    <span className="text-[#D4AF37] font-bold text-sm">📍</span>
                    <div>
                      <strong className="block text-[#0C1E17] font-semibold">Atelier Address</strong>
                      <span>{siteConfig.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#D4AF37] font-bold text-sm">⏱️</span>
                    <div>
                      <strong className="block text-[#0C1E17] font-semibold">Operating Hours</strong>
                      <span>Monday &ndash; Friday: 9:00 AM &ndash; 6:00 PM CST</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-[#D4AF37] font-bold text-sm">💬</span>
                    <div>
                      <strong className="block text-[#0C1E17] font-semibold">Response Guarantee</strong>
                      <span>Replies within 24 business hours guaranteed</span>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 font-bold text-center whitespace-nowrap bg-gradient-to-r from-[#D4AF37] via-[#E5C266] to-[#D4AF37] text-[#0C1E17] hover:opacity-95 transition-all duration-300 py-4 px-8 rounded-full text-xs uppercase tracking-widest w-full cursor-pointer shadow-lg shadow-[#D4AF37]/25"
              >
                Open Full Contact Form &rarr;
              </Link>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
