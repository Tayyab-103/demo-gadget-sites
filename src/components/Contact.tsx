"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Contact() {
  const [contactSubmitted, setContactSubmitted] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-[#121316] text-white relative overflow-hidden border-t border-white/5" id="contact">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E5F2C9]" />
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#E5F2C9]">
                Direct Communication
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
              Workshop <span className="text-white/80">Concierge</span>
            </h2>
          </div>

          <p className="text-white/60 text-xs md:text-sm max-w-md leading-relaxed">
            Our Austin, Texas culinary specialists are available Monday through Friday to answer product inquiries and process orders.
          </p>
        </div>

        {/* Contact Split Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Info Card (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="bg-[#16171A] text-white rounded-2xl p-8 shadow-xl border border-white/8 relative overflow-hidden">
              <div className="text-[#E5F2C9] text-[0.68rem] font-bold uppercase tracking-widest mb-2">
                Workshop Headquarters
              </div>
              <h3 className="text-2xl font-black uppercase text-white mb-6">
                {siteConfig.brandName}
              </h3>

              <div className="flex flex-col gap-6 text-sm text-white/80">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-[#E5F2C9] flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div>
                    <div className="text-[0.62rem] text-white/40 uppercase tracking-widest font-bold">Call Direct</div>
                    <div className="font-bold text-white text-base mt-0.5">{siteConfig.phone}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-[#E5F2C9] flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <div className="text-[0.62rem] text-white/40 uppercase tracking-widest font-bold">Email Concierge</div>
                    <div className="font-bold text-white text-base mt-0.5 break-all">{siteConfig.email}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-[#E5F2C9] flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  </div>
                  <div>
                    <div className="text-[0.62rem] text-white/40 uppercase tracking-widest font-bold">Mailing Address</div>
                    <div className="font-semibold text-white/90 text-xs mt-0.5 leading-relaxed">{siteConfig.address}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form (Right) */}
          <div className="lg:col-span-7 bg-[#16171A] rounded-2xl p-8 md:p-10 border border-white/8 shadow-xl">
            {contactSubmitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full bg-[#E5F2C9] text-[#121316] flex items-center justify-center text-2xl mx-auto mb-4 font-black">
                  ✓
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Message Dispatched</h3>
                <p className="text-white/60 text-xs md:text-sm max-w-sm mx-auto mb-6">
                  Thank you for reaching out to {siteConfig.brandName}. A specialist will reply within 24 hours.
                </p>
                <button
                  onClick={() => setContactSubmitted(false)}
                  className="bg-[#E5F2C9] text-[#121316] font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-lg hover:bg-white transition-all"
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
                className="flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[0.65rem] font-bold uppercase tracking-widest text-white/40 mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3.5 text-xs md:text-sm border border-white/10 rounded-xl focus:outline-none focus:border-white transition-all bg-[#23252B] text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[0.65rem] font-bold uppercase tracking-widest text-white/40 mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      className="w-full px-4 py-3.5 text-xs md:text-sm border border-white/10 rounded-xl focus:outline-none focus:border-white transition-all bg-[#23252B] text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[0.65rem] font-bold uppercase tracking-widest text-white/40 mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="Subject of your inquiry"
                    className="w-full px-4 py-3.5 text-xs md:text-sm border border-white/10 rounded-xl focus:outline-none focus:border-white transition-all bg-[#23252B] text-white"
                  />
                </div>

                <div>
                  <label className="block text-[0.65rem] font-bold uppercase tracking-widest text-white/40 mb-2">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us how we can help your kitchen setup..."
                    className="w-full px-4 py-3.5 text-xs md:text-sm border border-white/10 rounded-xl focus:outline-none focus:border-white transition-all bg-[#23252B] text-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center font-bold text-xs uppercase tracking-widest text-[#121316] bg-[#E5F2C9] hover:bg-white transition-all duration-300 py-4 px-8 rounded-xl w-full shadow-md cursor-pointer"
                >
                  Dispatch Message &rarr;
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
