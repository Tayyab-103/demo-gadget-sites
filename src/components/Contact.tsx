"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";
import { BoltIcon, CheckIcon } from "@/components/Icons";

const siteConfig = siteConfigData as unknown as SiteConfig;

const inquiryTopics = [
  "Order & Tracking",
  "Device Compatibility",
  "Warranty & Returns",
  "Technical Specs",
  "Other Inquiries",
];

export default function Contact() {
  const [selectedTopic, setSelectedTopic] = useState<string>("Order & Tracking");
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState<number | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden" id="contact">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary text-secondary px-4 py-1.5 rounded-full border border-secondary/30 shadow-xs mb-3.5">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.2em]">
              Hardware Support &amp; Concierge
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-primary tracking-tight leading-tight uppercase">
            Let&apos;s Connect With Our <span className="text-secondary">Circuit Engineers</span>
          </h2>

          <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-3 leading-relaxed font-medium max-w-xl mx-auto">
            Need assistance with product specifications, order delivery, or warranty coverage? Our technical specialists are here to provide prompt solutions.
          </p>
        </div>

        {/* 3 Quick Action Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Phone Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-secondary transition-all duration-300 flex flex-col justify-between group">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-primary text-secondary flex items-center justify-center shadow-sm border border-secondary/30 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-secondary block">
                  Direct Line
                </span>
                <span className="text-sm font-black text-primary">Phone Support</span>
              </div>
            </div>
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-sm sm:text-base font-black text-primary hover:text-secondary transition-colors block mb-2"
            >
              {siteConfig.phone}
            </a>
            <div className="flex items-center gap-1.5 text-[0.7rem] text-gray-500 font-semibold pt-2 border-t border-gray-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Mon–Fri, 9:00 AM – 6:00 PM EST</span>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-secondary transition-all duration-300 flex flex-col justify-between group">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-primary text-secondary flex items-center justify-center shadow-sm border border-secondary/30 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-secondary block">
                  Technical Desk
                </span>
                <span className="text-sm font-black text-primary">Email Support</span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-xs sm:text-sm font-black text-primary hover:text-secondary transition-colors truncate"
              >
                {siteConfig.email}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-[0.65rem] font-bold uppercase px-2 py-1 bg-gray-100 hover:bg-primary hover:text-secondary text-gray-700 rounded-md transition-colors cursor-pointer shrink-0"
              >
                {copiedEmail ? "Copied!" : "Copy"}
              </button>
            </div>
            <div className="flex items-center gap-1.5 text-[0.7rem] text-gray-500 font-semibold pt-2 border-t border-gray-100">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
              <span>Average response within 24h</span>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-secondary transition-all duration-300 flex flex-col justify-between group">
            <div className="flex items-center gap-3.5 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-primary text-secondary flex items-center justify-center shadow-sm border border-secondary/30 group-hover:scale-105 transition-transform">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-secondary block">
                  Headquarters
                </span>
                <span className="text-sm font-black text-primary">{siteConfig.corpName}</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm font-bold text-gray-700 leading-snug mb-2">
              {siteConfig.address}
            </p>
            <div className="flex items-center gap-1.5 text-[0.7rem] text-gray-500 font-semibold pt-2 border-t border-gray-100">
              <CheckIcon className="w-3.5 h-3.5 text-secondary shrink-0" />
              <span>Domestic Tech Fulfillment Hub</span>
            </div>
          </div>
        </div>

        {/* Interactive In-Depth Form Container */}
        <div className="bg-white rounded-3xl sm:rounded-[2.5rem] border border-gray-200/90 shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Modern Dark Info Bar (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-primary via-slate-950 to-primary p-7 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-60 h-60 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
              
              <div>
                <div className="inline-flex items-center gap-1.5 text-[0.65rem] font-black uppercase tracking-wider bg-white/10 px-3 py-1 rounded-full border border-white/10 text-secondary mb-4">
                  <BoltIcon className="w-3 h-3 fill-secondary text-secondary shrink-0" />
                  <span>Priority Helpdesk</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-3">
                  Direct Line To Our Labs
                </h3>
                
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-8">
                  Whether you have an inquiry regarding GaN silicon performance, order dispatch via {siteConfig.shippingCarrier}, or our {siteConfig.trialPeriod}-day satisfaction guarantee, we are dedicated to resolving it swiftly.
                </p>

                {/* Assurance Points */}
                <div className="space-y-3.5">
                  <div className="flex items-center gap-3 text-xs text-gray-200">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
                      <CheckIcon className="w-3.5 h-3.5 text-secondary" />
                    </div>
                    <span>Certified Hardware Specialists</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-200">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
                      <CheckIcon className="w-3.5 h-3.5 text-secondary" />
                    </div>
                    <span>{siteConfig.trialPeriod}-Day Risk-Free Guarantee Support</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-200">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
                      <CheckIcon className="w-3.5 h-3.5 text-secondary" />
                    </div>
                    <span>Prompt &amp; Courteous Resolution</span>
                  </div>
                </div>
              </div>

              {/* Billing Notice */}
              <div className="mt-8 pt-5 border-t border-white/10 text-[0.7rem] text-gray-400">
                <span>Statements will appear as: </span>
                <strong className="text-white font-mono">{siteConfig.descriptor}</strong>
              </div>
            </div>

            {/* Right Column: Dynamic Form (7 cols) */}
            <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-center">
              {contactSubmitted ? (
                <div className="text-center py-8 flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-secondary text-secondary-text flex items-center justify-center mb-4 shadow-lg">
                    <CheckIcon className="w-8 h-8 text-secondary-text" />
                  </div>
                  <h3 className="text-primary font-black text-2xl mb-2 tracking-tight uppercase">Inquiry Dispatched</h3>
                  <p className="text-gray-600 text-xs sm:text-sm max-w-sm mb-6 leading-relaxed">
                    Thank you for reaching out to {siteConfig.brandName}. Ticket #{ticketId ?? 582491} has been created and assigned to our electronics engineering team.
                  </p>
                  <button
                    type="button"
                    className="bg-primary text-primary-text hover:bg-slate-800 hover:text-secondary font-black text-xs uppercase tracking-widest px-7 py-3 rounded-xl transition-all cursor-pointer shadow-md"
                    onClick={() => {
                      setContactSubmitted(false);
                      setTicketId(null);
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setTicketId(Math.floor(100000 + Math.random() * 900000));
                    setContactSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  {/* Topic Selector Chips */}
                  <div>
                    <label className="block text-[0.68rem] font-bold uppercase tracking-wider text-gray-500 mb-2.5">
                      Select Topic
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {inquiryTopics.map((topic) => {
                        const isSelected = selectedTopic === topic;
                        return (
                          <button
                            key={topic}
                            type="button"
                            onClick={() => setSelectedTopic(topic)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              isSelected
                                ? "bg-primary text-secondary border border-primary shadow-xs"
                                : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200"
                            }`}
                          >
                            {topic}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[0.68rem] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Morgan"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-secondary/30 transition-all placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[0.68rem] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. alex@example.com"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-secondary/30 transition-all placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Order Number / Phone Optional */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[0.68rem] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                        Order ID <span className="text-gray-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. ORD-94821"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-secondary/30 transition-all placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[0.68rem] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                        Phone <span className="text-gray-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +1 (555) 000-0000"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-secondary/30 transition-all placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-[0.68rem] font-bold uppercase tracking-wider text-gray-500 mb-1.5">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Please describe your inquiry or hardware question in detail..."
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-gray-900 focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-secondary/30 transition-all placeholder:text-gray-400 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-text hover:bg-slate-800 hover:text-secondary font-black text-xs uppercase tracking-widest py-3.5 px-8 rounded-xl transition-all duration-300 shadow-md cursor-pointer hover:shadow-lg border border-primary"
                  >
                    <span>Submit Request</span>
                    <span className="text-secondary text-sm">→</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
