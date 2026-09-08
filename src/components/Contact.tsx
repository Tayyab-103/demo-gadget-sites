"use client";

import React, { useState } from "react";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Contact() {
  const [contactSubmitted, setContactSubmitted] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden" id="contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-14 sm:mb-18">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-[#7C3AED]">
              Nursery Support & Inquiries
            </span>
            <div className="h-[1px] flex-1 max-w-xs bg-purple-200" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E1040] tracking-tight leading-tight">
            Have Questions? <span className="text-[#7C3AED]">We&apos;re Here.</span>
          </h2>

          <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-2 max-w-xl font-normal leading-relaxed">
            Our nursery care advisors are always ready to help — from product questions to order updates, we&apos;re just a message away.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden bg-purple-50 shadow-lg mb-6 ring-1 ring-purple-100">
              <Image
                src="/img/contact.jpg"
                alt="Lullaby Grove nursery support"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-3">
              <div className="p-4 rounded-2xl bg-purple-50 border border-purple-100">
                <span className="text-[0.62rem] font-bold uppercase tracking-wider text-[#7C3AED] block mb-0.5">
                  Phone Support
                </span>
                <div className="text-sm font-black text-[#1E1040]">{siteConfig.phone}</div>
                <div className="text-[0.7rem] text-gray-500 mt-0.5">Mon–Fri &middot; 9AM–6PM EST</div>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50 border border-purple-100">
                <span className="text-[0.62rem] font-bold uppercase tracking-wider text-[#7C3AED] block mb-0.5">
                  Email Support
                </span>
                <div className="text-sm font-black text-[#1E1040] break-all">{siteConfig.email}</div>
                <div className="text-[0.7rem] text-gray-500 mt-0.5">Response within 24 hours</div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7 bg-[#F3EEFF] rounded-3xl p-8 sm:p-10 border border-purple-100 shadow-sm">
            {contactSubmitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full bg-purple-100 text-[#7C3AED] flex items-center justify-center text-2xl mx-auto mb-3 font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-black text-[#1E1040] mb-1.5">Message Received!</h3>
                <p className="text-xs sm:text-sm text-gray-500 max-w-sm mx-auto leading-relaxed mb-6 font-normal">
                  Thank you for reaching out. A nursery care specialist will reply within 24 hours.
                </p>
                <button
                  onClick={() => setContactSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-black text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer"
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
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[0.68rem] font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Jenkins"
                      required
                      className="w-full px-4 py-3 text-xs border border-purple-100 rounded-xl bg-white focus:outline-none focus:border-[#7C3AED] text-[#1E1040]"
                    />
                  </div>
                  <div>
                    <label className="block text-[0.68rem] font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. sarah@example.com"
                      required
                      className="w-full px-4 py-3 text-xs border border-purple-100 rounded-xl bg-white focus:outline-none focus:border-[#7C3AED] text-[#1E1040]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[0.68rem] font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help your family?"
                    required
                    className="w-full px-4 py-3 text-xs border border-purple-100 rounded-xl bg-white focus:outline-none focus:border-[#7C3AED] text-[#1E1040]"
                  />
                </div>

                <div>
                  <label className="block text-[0.68rem] font-bold uppercase tracking-wider text-gray-600 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Write your message here..."
                    required
                    className="w-full px-4 py-3 text-xs border border-purple-100 rounded-xl bg-white focus:outline-none focus:border-[#7C3AED] text-[#1E1040] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-black text-xs uppercase tracking-wider shadow-md shadow-purple-300/30 hover:scale-[1.01] transition-all cursor-pointer mt-2"
                >
                  Send Message to Support →
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
