"use client";

import React, { useEffect, useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const contactImages = [
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=900&q=80",
  "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=900&q=80",
  "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=900&q=80",
];

interface ContactProps {
  showHeader?: boolean;
}

export default function Contact({ showHeader = true }: ContactProps) {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((i) => (i + 1) % contactImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 md:py-20 bg-neutral-bg relative overflow-hidden" id="contact">
      <div className="w-full max-w-7xl mx-auto px-6">
        {showHeader && (
          <div className="max-w-[760px] mb-12 md:mb-16">
            <span className="eyebrow mb-3">Workshop Support</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-primary mb-3 tracking-tight">
              Connect With Our <span className="text-secondary">Luthier Team</span>
            </h2>
            <p className="text-neutral-text/65 text-sm md:text-base">
              Have questions about instrument compatibility, custom studio cables, bulk musician orders, or warranty support? We are here to help.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-7xl mx-auto">
          {/* Visual + Info Column */}
          <div className="relative rounded-[2.5rem] overflow-hidden min-h-[380px] lg:min-h-0 shadow-2xl border border-black/5">
            {contactImages.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt="Velvet Echo Musical Workshop artisan studio"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                  idx === activeImage ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
                style={{ transitionProperty: "opacity, transform" }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />

            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10">
              {/* Image dots */}
              <div className="flex gap-2 mb-6">
                {contactImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === activeImage ? "w-8 bg-secondary" : "w-3 bg-white/40"
                    }`}
                    aria-label={`Show workshop image ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="mb-6 text-white">
                <span className="text-[0.65rem] font-black uppercase tracking-widest text-secondary block mb-1">
                  Workshop Location
                </span>
                <p className="text-sm font-semibold text-white/90 leading-relaxed">
                  {siteConfig.address}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3.5 bg-white/10 backdrop-blur-md px-5 py-4 rounded-2xl border border-white/15 flex-1 hover:bg-white/15 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-secondary text-primary flex items-center justify-center flex-shrink-0 font-bold shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div>
                    <div className="text-[0.62rem] text-white/60 uppercase tracking-widest font-bold">Call Workshop</div>
                    <div className="font-bold text-sm text-white mt-0.5">{siteConfig.phone}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3.5 bg-white/10 backdrop-blur-md px-5 py-4 rounded-2xl border border-white/15 flex-1 hover:bg-white/15 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-secondary text-primary flex items-center justify-center flex-shrink-0 font-bold shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <div className="text-[0.62rem] text-white/60 uppercase tracking-widest font-bold">Support Email</div>
                    <div className="font-bold text-xs text-white mt-0.5 break-all">{siteConfig.email}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl border border-black/5">
            {contactSubmitted ? (
              <div className="text-center py-12 h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-secondary text-secondary flex items-center justify-center text-3xl mx-auto mb-6 font-bold shadow-md bg-secondary/10">
                  ✓
                </div>
                <h3 className="text-primary font-black text-2xl mb-2">
                  Inquiry Received!
                </h3>
                <p className="text-neutral-text/65 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out to Velvet Echo Musical Workshop. Our team will review your specifications and reply within 24 hours.
                </p>
                <button
                  className="inline-block font-black text-center whitespace-nowrap bg-primary text-white hover:bg-secondary hover:text-primary transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-widest cursor-pointer shadow-md"
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
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div className="flex flex-col">
                    <label className="block font-black mb-2 text-[0.65rem] uppercase tracking-widest text-neutral-text/50">Full Name</label>
                    <input
                      type="text"
                      className="block w-full px-4 py-3.5 text-sm border border-black/8 rounded-xl focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all text-neutral-text bg-neutral-bg placeholder:text-neutral-text/30"
                      placeholder="e.g. Julian Hayes"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="block font-black mb-2 text-[0.65rem] uppercase tracking-widest text-neutral-text/50">Email Address</label>
                    <input
                      type="email"
                      className="block w-full px-4 py-3.5 text-sm border border-black/8 rounded-xl focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all text-neutral-text bg-neutral-bg placeholder:text-neutral-text/30"
                      placeholder="e.g. julian@studio.com"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col mb-5">
                  <label className="block font-black mb-2 text-[0.65rem] uppercase tracking-widest text-neutral-text/50">Subject / Instrument Gear</label>
                  <input
                    type="text"
                    className="block w-full px-4 py-3.5 text-sm border border-black/8 rounded-xl focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all text-neutral-text bg-neutral-bg placeholder:text-neutral-text/30"
                    placeholder="e.g. Capo radius compatibility or studio cable inquiry"
                    required
                  />
                </div>

                <div className="flex flex-col mb-7">
                  <label className="block font-black mb-2 text-[0.65rem] uppercase tracking-widest text-neutral-text/50">Your Message</label>
                  <textarea
                    className="block w-full px-4 py-3.5 text-sm border border-black/8 rounded-xl focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all text-neutral-text bg-neutral-bg resize-none placeholder:text-neutral-text/30"
                    rows={4}
                    placeholder="How can we assist your acoustic setup or order today?"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 font-black text-center whitespace-nowrap bg-primary text-white hover:bg-secondary hover:text-primary transition-all duration-300 py-4 px-8 rounded-full text-xs uppercase tracking-widest w-full cursor-pointer shadow-lg hover:shadow-xl"
                >
                  Send Workshop Message
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
