"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const contactImages = [
  "/img/about1.jpg",
  "/img/QualityPromise1.jpg",
  "/img/gallery1.jpg",
];

interface ContactProps {
  showHeader?: boolean;
  showForm?: boolean;
}

export default function Contact({ showHeader = true, showForm = true }: ContactProps) {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-[#FAFAFA] relative overflow-hidden" id="contact">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeader && (
          <div className="max-w-[760px] mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-[#4C0519] font-extrabold text-xs tracking-widest uppercase mb-3 border border-rose-200 shadow-xs">
              <span>📖 Reader Concierge</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-[#000000] mb-3 tracking-tight">
              Connect With Our <span className="text-[#D2446D]">Literary Curators</span>
            </h2>
            <p className="text-gray-600 text-sm md:text-base font-medium">
              Have questions about classic book editions, leatherbound journal sets, custom library orders, or order status? We are here to assist.
            </p>
          </div>
        )}

        {showForm ? (
          /* Two-Column layout with Form for dedicated Contact page */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-7xl mx-auto">
            {/* Visual + Info Column */}
            <div className="relative rounded-3xl lg:rounded-[2.5rem] overflow-hidden min-h-[340px] sm:min-h-[400px] lg:min-h-0 shadow-xl border border-rose-100">
              {contactImages.map((src, idx) => (
                <img
                  key={src}
                  src={src}
                  alt={`${siteConfig.brandName} reading room and bookstore`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                    idx === activeImage ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-[#4C0519] via-[#4C0519]/60 to-transparent" />

              <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8 md:p-10">
                {/* Image dots */}
                <div className="flex gap-2 mb-6">
                  {contactImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === activeImage ? "w-8 bg-[#D2446D]" : "w-3 bg-white/40"
                      }`}
                      aria-label={`Show bookstore image ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="mb-6 text-white">
                  <span className="text-xs font-black uppercase tracking-widest text-[#D2446D] block mb-1">
                    Bookstore Headquarters
                  </span>
                  <p className="text-sm font-semibold text-white/90 leading-relaxed">
                    {siteConfig.address}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center gap-3.5 bg-white/10 backdrop-blur-md px-5 py-4 rounded-2xl border border-white/15 flex-1 hover:bg-white/15 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#D2446D] text-white flex items-center justify-center flex-shrink-0 font-bold shadow-md">
                      📞
                    </div>
                    <div>
                      <div className="text-xs text-white/60 uppercase tracking-widest font-bold">Call Concierge</div>
                      <div className="font-bold text-sm text-white mt-0.5">{siteConfig.phone}</div>
                    </div>
                  </a>
                  
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3.5 bg-white/10 backdrop-blur-md px-5 py-4 rounded-2xl border border-white/15 flex-1 hover:bg-white/15 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#D2446D] text-white flex items-center justify-center flex-shrink-0 font-bold shadow-md">
                      ✉️
                    </div>
                    <div>
                      <div className="text-xs text-white/60 uppercase tracking-widest font-bold">Support Email</div>
                      <div className="font-bold text-xs text-white mt-0.5 break-all">{siteConfig.email}</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="bg-[#FDFDFD] rounded-3xl lg:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-xl border border-rose-100">
              {contactSubmitted ? (
                <div className="text-center py-12 h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-[#D2446D] text-[#D2446D] flex items-center justify-center text-3xl mx-auto mb-6 font-bold shadow-md bg-rose-50">
                    ✓
                  </div>
                  <h3 className="text-[#000000] font-black text-2xl mb-2">
                    Inquiry Received!
                  </h3>
                  <p className="text-gray-600 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out to {siteConfig.brandName}. Our literary concierge team will review your message and reply within 24 hours.
                  </p>
                  <button
                    className="inline-block font-black text-center whitespace-nowrap bg-[#4C0519] text-white hover:bg-[#D2446D] transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-widest cursor-pointer shadow-md"
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div className="flex flex-col">
                      <label className="block font-black mb-2 text-[0.65rem] uppercase tracking-widest text-gray-500">Full Name</label>
                      <input
                        type="text"
                        className="block w-full px-4 py-3.5 text-sm border border-rose-200 rounded-xl focus:outline-none focus:border-[#D2446D] focus:ring-1 focus:ring-[#D2446D] transition-all text-[#000000] bg-[#FAFAFA]"
                        placeholder="e.g. Julian Hayes"
                        required
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="block font-black mb-2 text-[0.65rem] uppercase tracking-widest text-gray-500">Email Address</label>
                      <input
                        type="email"
                        className="block w-full px-4 py-3.5 text-sm border border-rose-200 rounded-xl focus:outline-none focus:border-[#D2446D] focus:ring-1 focus:ring-[#D2446D] transition-all text-[#000000] bg-[#FAFAFA]"
                        placeholder="e.g. julian@reader.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex flex-col mb-5">
                    <label className="block font-black mb-2 text-[0.65rem] uppercase tracking-widest text-gray-500">Subject / Book Inquiry</label>
                    <input
                      type="text"
                      className="block w-full px-4 py-3.5 text-sm border border-rose-200 rounded-xl focus:outline-none focus:border-[#D2446D] focus:ring-1 focus:ring-[#D2446D] transition-all text-[#000000] bg-[#FAFAFA]"
                      placeholder="e.g. Classic literature anthology inquiry or gift set order"
                      required
                    />
                  </div>

                  <div className="flex flex-col mb-7">
                    <label className="block font-black mb-2 text-[0.65rem] uppercase tracking-widest text-gray-500">Your Message</label>
                    <textarea
                      className="block w-full px-4 py-3.5 text-sm border border-rose-200 rounded-xl focus:outline-none focus:border-[#D2446D] focus:ring-1 focus:ring-[#D2446D] transition-all text-[#000000] bg-[#FAFAFA] resize-none"
                      rows={4}
                      placeholder="How can our reader concierge team assist your order or reading request?"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 font-black text-center whitespace-nowrap bg-[#4C0519] text-white hover:bg-[#D2446D] transition-all duration-300 py-4 px-8 rounded-full text-xs uppercase tracking-widest w-full cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    <span>Send Message to Concierge</span>
                    <span>→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        ) : (
          /* Formless Workshop Info & Contact Hub for Homepage */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1: Phone */}
            <div className="bg-[#FDFDFD] p-8 rounded-3xl border border-rose-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-rose-100 flex items-center justify-center text-2xl mb-4 text-[#4C0519]">
                📞
              </div>
              <h3 className="text-lg font-black text-[#000000] mb-1">Direct Concierge Line</h3>
              <p className="text-xs text-gray-500 mb-4 font-medium">Mon &ndash; Fri, 9:00 AM &ndash; 6:00 PM EST</p>
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-sm font-black text-[#4C0519] hover:text-[#D2446D] transition-colors"
              >
                {siteConfig.phone}
              </a>
            </div>

            {/* Card 2: Email & Support */}
            <div className="bg-[#FDFDFD] p-8 rounded-3xl border border-rose-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-rose-100 flex items-center justify-center text-2xl mb-4 text-[#4C0519]">
                ✉️
              </div>
              <h3 className="text-lg font-black text-[#000000] mb-1">Reader Support Desk</h3>
              <p className="text-xs text-gray-500 mb-4 font-medium">Average response within 24 hours</p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-xs sm:text-sm font-black text-[#4C0519] hover:text-[#D2446D] transition-colors break-all"
              >
                {siteConfig.email}
              </a>
            </div>

            {/* Card 3: Location & Message */}
            <div className="bg-[#FDFDFD] p-8 rounded-3xl border border-rose-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-2xl bg-rose-100 flex items-center justify-center text-2xl mb-4 text-[#4C0519]">
                📍
              </div>
              <h3 className="text-lg font-black text-[#000000] mb-1">Bookstore Headquarters</h3>
              <p className="text-xs text-gray-500 mb-4 font-medium">{siteConfig.address}</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-white bg-[#4C0519] hover:bg-[#D2446D] px-5 py-2.5 rounded-full transition-all shadow-sm"
              >
                <span>Open Contact Page</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
