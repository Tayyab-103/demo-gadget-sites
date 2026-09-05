"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(false);
      setShowForm(false);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 md:py-28 bg-[#FAF8F6] text-[#18121E] border-t border-[#C59B7E]/20 relative overflow-hidden"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C59B7E]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 2-Column Minimalist Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ================= LEFT COLUMN: Bold Minimalist Title ================= */}
          <div className="lg:col-span-5">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#18121E] tracking-tight leading-[1.04]">
              Contact <br className="hidden sm:inline" />
              <span className="italic text-[#C59B7E]">us.</span>
            </h2>
          </div>

          {/* ================= RIGHT COLUMN: Narrative + Divided Subgrid ================= */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            
            {/* Lead Narrative Text */}
            <p className="text-lg sm:text-xl md:text-2xl font-serif font-light text-slate-700 leading-relaxed max-w-2xl">
              If you have questions or need any general information regarding our bespoke pure silk and cashmere silhouettes, sizing consultations, or order tracking, please connect with our private atelier stylists. It will be an honor to help you.
            </p>

            {/* Horizontal Hairline Divider */}
            <div className="w-full h-[1px] bg-[#C59B7E]/25 my-10 sm:my-14" />

            {/* 2-Column Subgrid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
              
              {/* Sub-Column 1: Direct Enquiries */}
              <div className="space-y-6">
                <div className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-[#8C654B]">
                  DIRECT ENQUIRIES
                </div>

                {/* Phone */}
                <div>
                  <div className="text-[0.68rem] uppercase tracking-wider text-slate-400 font-medium">
                    Phone
                  </div>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-base sm:text-lg font-serif font-bold text-[#18121E] hover:text-[#C59B7E] transition-colors inline-block mt-0.5"
                  >
                    {siteConfig.phone}
                  </a>
                </div>

                {/* Email */}
                <div>
                  <div className="text-[0.68rem] uppercase tracking-wider text-slate-400 font-medium">
                    Email
                  </div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm sm:text-base font-medium text-[#18121E] hover:text-[#C59B7E] transition-colors inline-block mt-0.5 break-all"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              {/* Sub-Column 2: Studio & Fulfillment */}
              <div className="space-y-6">
                <div className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-[#8C654B]">
                  ATELIER &amp; DISPATCH
                </div>

                {/* Atelier Address */}
                <div>
                  <div className="text-[0.68rem] uppercase tracking-wider text-slate-400 font-medium">
                    Atelier Studio &amp; Fulfillment Hub
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 font-light mt-0.5 leading-relaxed">
                    {siteConfig.address}
                  </div>
                </div>

                {/* White-Glove Dispatch */}
                <div>
                  <div className="text-[0.68rem] uppercase tracking-wider text-slate-400 font-medium">
                    Priority Dispatch
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 font-light mt-0.5">
                    {siteConfig.shippingCarrier} Tracked Air Delivery ({siteConfig.shippingPeriod || "3-5"} Business Days)
                  </div>
                </div>

                {/* Send Direct Inquiry Toggle */}
                <div className="pt-1">
                  <button
                    onClick={() => setShowForm(!showForm)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#18121E] hover:text-[#C59B7E] transition-colors underline underline-offset-8 decoration-1 decoration-[#C59B7E]/50 cursor-pointer"
                  >
                    <span>{showForm ? "Close Message Form" : "Write To Stylist Directly →"}</span>
                  </button>
                </div>
              </div>

            </div>

            {/* Collapsible Minimalist Message Form */}
            {showForm && (
              <form
                onSubmit={handleSubmit}
                className="mt-10 p-7 sm:p-8 rounded-3xl bg-white border border-[#C59B7E]/30 shadow-md transition-all duration-300"
              >
                <div className="text-xs font-bold uppercase tracking-widest text-[#8C654B] mb-4">
                  Send A Direct Inquiry
                </div>

                {isSubmitted ? (
                  <div className="p-4 rounded-2xl bg-[#FAF8F6] border border-[#C59B7E]/40 text-center">
                    <p className="text-xs sm:text-sm font-bold text-[#18121E]">
                      Thank you for contacting Rosethorne Atelier.
                    </p>
                    <p className="text-xs text-slate-500 mt-1 font-light">
                      A dedicated styling concierge will reply within 24 hours.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 text-xs bg-[#FAF8F6] border border-[#C59B7E]/30 rounded-xl text-[#18121E] placeholder:text-slate-400 focus:outline-none focus:border-[#C59B7E]"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Your Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 text-xs bg-[#FAF8F6] border border-[#C59B7E]/30 rounded-xl text-[#18121E] placeholder:text-slate-400 focus:outline-none focus:border-[#C59B7E]"
                        />
                      </div>
                    </div>
                    <div>
                      <textarea
                        rows={3}
                        required
                        placeholder="Inquiry regarding silk sizing, bespoke tailoring, or orders..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 text-xs bg-[#FAF8F6] border border-[#C59B7E]/30 rounded-xl text-[#18121E] placeholder:text-slate-400 focus:outline-none focus:border-[#C59B7E] resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#18121E] hover:bg-[#C59B7E] hover:text-[#18121E] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md"
                    >
                      Transmit Inquiry
                    </button>
                  </div>
                )}
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
