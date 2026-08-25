"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteConfigData from "../../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Header />
      <main className="bg-[#E5E6EB] py-10 sm:py-16 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-neutral-text/50 font-medium">
            <Link href="/" className="hover:text-[#111] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#111]">Contacts</span>
          </nav>

          {/* =========================================================
              HERO CARD
              ========================================================= */}
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-14 lg:p-16 shadow-[0_15px_45px_rgba(0,0,0,0.05)] border border-black/[0.04]">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#F4F4F6] border border-black/5 text-[0.65rem] font-bold uppercase tracking-widest text-[#111]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5B6BF0]" />
                Customer & Technical Support
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-black uppercase text-[#111] tracking-tight leading-[1.08] italic">
                Get In Touch With Engineering
              </h1>

              <p className="text-sm sm:text-base text-neutral-text/65 leading-relaxed pt-2">
                Have questions regarding calibration specifications, bulk contractor orders, or product compatibility? Our technical team is ready to assist you.
              </p>
            </div>
          </div>

          {/* =========================================================
              3 CONTACT CHANNELS BENTO CARDS
              ========================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            
            {/* Phone Card */}
            <div className="bg-white rounded-[2rem] p-7 sm:p-8 shadow-xs border border-black/[0.04] flex flex-col justify-between group hover:shadow-md transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F4F4F6] flex items-center justify-center text-sm font-bold mb-5 text-[#111]">
                  📞
                </div>
                <h3 className="text-base font-bold text-[#111] mb-1">Telephone Support</h3>
                <p className="text-xs text-neutral-text/55 mb-4">
                  Monday – Friday, 9:00 AM – 5:00 PM EST
                </p>
              </div>
              <a
                href={`tel:${siteConfig.phone}`}
                className="text-sm font-bold text-[#111] group-hover:text-[#5B6BF0] transition-colors"
              >
                {siteConfig.phone}
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-[2rem] p-7 sm:p-8 shadow-xs border border-black/[0.04] flex flex-col justify-between group hover:shadow-md transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F4F4F6] flex items-center justify-center text-sm font-bold mb-5 text-[#111]">
                  ✉️
                </div>
                <h3 className="text-base font-bold text-[#111] mb-1">Email Inquiries</h3>
                <p className="text-xs text-neutral-text/55 mb-4">
                  Inquiries receive technical review within 24 hours.
                </p>
              </div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm font-bold text-[#111] group-hover:text-[#5B6BF0] transition-colors break-all"
              >
                {siteConfig.email}
              </a>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-[2rem] p-7 sm:p-8 shadow-xs border border-black/[0.04] flex flex-col justify-between group hover:shadow-md transition-all">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#F4F4F6] flex items-center justify-center text-sm font-bold mb-5 text-[#111]">
                  📍
                </div>
                <h3 className="text-base font-bold text-[#111] mb-1">Headquarters</h3>
                <p className="text-xs text-neutral-text/55 mb-4">
                  Corporate distribution & logistics center.
                </p>
              </div>
              <p className="text-xs font-semibold text-[#111] leading-relaxed">
                {siteConfig.address}
                <br />
                {siteConfig.corpName}
              </p>
            </div>

          </div>

          {/* =========================================================
              MAIN CONTACT FORM CARD
              ========================================================= */}
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-[0_15px_45px_rgba(0,0,0,0.05)] border border-black/[0.04]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              <div className="lg:col-span-5 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-black text-[#111] tracking-tight">
                  Send A Message
                </h2>
                <p className="text-xs sm:text-sm text-neutral-text/65 leading-relaxed">
                  Fill out the form below to speak with an electrical specialist. For order status inquiries, please include your Order ID.
                </p>

                <div className="pt-6 space-y-3 border-t border-black/5 text-xs text-neutral-text/60">
                  <div className="flex items-center gap-2">
                    <span className="text-[#5B6BF0] font-bold">✓</span> Direct factory technical response
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#5B6BF0] font-bold">✓</span> Volume discount estimations
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#5B6BF0] font-bold">✓</span> Warranty & calibration lookup
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                {submitted ? (
                  <div className="bg-[#F8F8FA] rounded-2xl p-10 text-center flex flex-col items-center justify-center border border-black/5 min-h-[300px]">
                    <div className="w-12 h-12 rounded-full bg-[#111] text-white flex items-center justify-center text-xl mb-4 font-bold shadow-md">
                      ✓
                    </div>
                    <h3 className="text-xl font-bold text-[#111] mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-text/60 max-w-sm mb-6 leading-relaxed">
                      Thank you for contacting Voltspire. An engineer will review your request and get back to you shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-bold text-[#111] underline hover:text-[#5B6BF0] transition-colors cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#111] mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          className="w-full bg-[#F4F4F6] text-xs sm:text-sm text-[#111] placeholder:text-neutral-text/35 px-4 py-3.5 rounded-xl border border-transparent focus:border-black/20 focus:bg-white focus:outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#111] mb-2">
                          Email address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="Your email address"
                          className="w-full bg-[#F4F4F6] text-xs sm:text-sm text-[#111] placeholder:text-neutral-text/35 px-4 py-3.5 rounded-xl border border-transparent focus:border-black/20 focus:bg-white focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#111] mb-2">
                        Subject / Topic
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Volume order inquiry, Technical specification"
                        className="w-full bg-[#F4F4F6] text-xs sm:text-sm text-[#111] placeholder:text-neutral-text/35 px-4 py-3.5 rounded-xl border border-transparent focus:border-black/20 focus:bg-white focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#111] mb-2">
                        Message
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Describe your inquiry..."
                        className="w-full bg-[#F4F4F6] text-xs sm:text-sm text-[#111] placeholder:text-neutral-text/35 p-4 rounded-2xl border border-transparent focus:border-black/20 focus:bg-white focus:outline-none transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#111] hover:bg-[#333] text-white font-bold text-xs sm:text-sm py-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer uppercase tracking-wider"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>

            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
