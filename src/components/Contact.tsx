"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Contact() {
  const [contactSubmitted, setContactSubmitted] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-white" id="contact">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Concierge Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="text-secondary text-xs font-bold uppercase tracking-[0.2em] block mb-1.5">
              Concierge &amp; Care
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary leading-tight mb-5">
              Get in Touch With Our Wardrobe Team
            </h2>
            <p className="text-neutral-text/70 text-sm md:text-base leading-relaxed mb-7">
              Whether you need sizing recommendations for the whole family, fabric care guidance, or order tracking, we are here to assist.
            </p>

            <div className="flex flex-col gap-3.5 bg-[#FAF8F5] p-6 rounded-3xl border border-black/[0.06]">
              <div>
                <div className="text-[0.65rem] font-bold uppercase tracking-wider text-secondary">Telephone Inquiries</div>
                <div className="text-sm font-bold text-primary mt-0.5">{siteConfig.phone}</div>
                <div className="text-[0.68rem] text-neutral-text/50">Mon &ndash; Fri, 9am &ndash; 6pm EST</div>
              </div>
              <div className="pt-3 border-t border-black/[0.06]">
                <div className="text-[0.65rem] font-bold uppercase tracking-wider text-secondary">Email Support</div>
                <div className="text-sm font-bold text-primary mt-0.5 break-all">{siteConfig.email}</div>
                <div className="text-[0.68rem] text-neutral-text/50">Response within 24 business hours</div>
              </div>
              <div className="pt-3 border-t border-black/[0.06]">
                <div className="text-[0.65rem] font-bold uppercase tracking-wider text-secondary">Fulfillment Studio</div>
                <div className="text-xs font-bold text-primary mt-0.5">{siteConfig.address}</div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAF8F5] p-7 md:p-10 rounded-3xl border border-black/[0.06]">
            {contactSubmitted ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center text-xl mx-auto mb-4 font-bold shadow-md">
                  ✓
                </div>
                <h3 className="text-lg font-bold uppercase text-primary mb-1.5">
                  Message Sent Successfully
                </h3>
                <p className="text-neutral-text/65 text-xs sm:text-sm max-w-md mx-auto mb-6">
                  Thank you for reaching out to {siteConfig.brandName}. Our stylist support team will follow up with you promptly.
                </p>
                <button
                  className="bg-primary text-white hover:bg-secondary text-xs font-bold uppercase tracking-widest px-7 py-3 rounded-full transition-all cursor-pointer"
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[0.65rem] font-bold uppercase tracking-wider text-neutral-text/60 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      className="w-full bg-white px-4 py-3 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-primary text-neutral-text"
                    />
                  </div>
                  <div>
                    <label className="block text-[0.65rem] font-bold uppercase tracking-wider text-neutral-text/60 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. eleanor@example.com"
                      className="w-full bg-white px-4 py-3 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-primary text-neutral-text"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-[0.65rem] font-bold uppercase tracking-wider text-neutral-text/60 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Sizing consultation, order assistance, or exchange"
                    className="w-full bg-white px-4 py-3 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-primary text-neutral-text"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-[0.65rem] font-bold uppercase tracking-wider text-neutral-text/60 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can our family wardrobe stylists assist you?"
                    className="w-full bg-white px-4 py-3 text-sm border border-black/10 rounded-xl focus:outline-none focus:border-primary text-neutral-text resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white hover:bg-secondary font-bold text-xs uppercase tracking-widest py-3.5 px-8 rounded-full transition-all duration-300 shadow-md cursor-pointer"
                >
                  Send Inquiry &rarr;
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
