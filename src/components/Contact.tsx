"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Contact() {
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsMessageModalOpen(false);
      setIsSupportModalOpen(false);
    }, 2000);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#FFFFFF] text-[#0A0F1D] border-t border-slate-200 select-none" id="contact">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section - Clean Editorial Contact Header & Grid */}
        <div className="mb-14 sm:mb-20">
          
          {/* Main Headline */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-600 mb-3 select-none">
              Fleet Concierge
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0A0F1D] uppercase leading-tight mb-4">
              Contact Our Team
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-normal">
              Have an outfitting inquiry or custom fleet requirement? Don&apos;t hesitate to reach out, and let&apos;s have a conversation.
            </p>
          </div>

          {/* 2-Column Information Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Column: Get In Touch & Big Direct Email */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-400 mb-2">
                  GET IN TOUCH
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4 max-w-md">
                  Simply want to connect or have a general fleet inquiry? Feel free to reach out, and our outfitting specialists will get back to you promptly.
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-block text-lg sm:text-xl md:text-2xl lg:text-[28px] font-extrabold text-[#0A0F1D] hover:text-blue-600 transition-colors uppercase tracking-tight break-all mb-8 underline underline-offset-8 decoration-1 decoration-slate-300 hover:decoration-blue-600"
                >
                  {siteConfig.email.toUpperCase()}
                </a>
              </div>

              {/* Direct Details Box */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="font-mono text-[0.68rem] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                    Direct Phone Desk
                  </span>
                  <a href={`tel:${siteConfig.phone}`} className="font-bold text-sm text-[#0A0F1D] hover:text-blue-600 transition-colors">
                    {siteConfig.phone}
                  </a>
                  <span className="block text-[0.72rem] text-slate-500 mt-0.5">Mon–Fri, 8am–6pm CST</span>
                </div>
                <div>
                  <span className="font-mono text-[0.68rem] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                    Austin Atelier &amp; Dispatch
                  </span>
                  <div className="font-bold text-sm text-[#0A0F1D]">
                    {siteConfig.address}
                  </div>
                  <span className="block text-[0.72rem] text-slate-500 mt-0.5">Dispatched via {siteConfig.shippingCarrier}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Action Blocks */}
            <div className="lg:col-span-6 flex flex-col gap-8">
              
              {/* Action Block 1: Fleet Inquiries */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#0A0F1D] mb-2">
                  FLEET &amp; VOLUME INQUIRIES
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                  Request custom embroidery, department volume orders, or sizing fit trial kits for your commercial workforce.
                </p>
                <button
                  onClick={() => setIsMessageModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-[#0A0F1D] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-200 shadow-xs active:scale-95 cursor-pointer group"
                >
                  <span>Send message</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>

              {/* Action Block 2: Order Support & Fit Guarantee */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#0A0F1D] mb-2">
                  FIT TRIAL &amp; SUPPORT
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                  Questions regarding your {siteConfig.trialPeriod || 14}-day fit guarantee, size exchanges, or shipment tracking via {siteConfig.shippingCarrier}.
                </p>
                <button
                  onClick={() => setIsSupportModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-[#0A0F1D] hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all duration-200 shadow-xs active:scale-95 cursor-pointer group"
                >
                  <span>Request Support</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* Interactive Modal for "Send Message" and "Request Support" */}
      {(isMessageModalOpen || isSupportModalOpen) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="w-full max-w-lg bg-white text-[#0A0F1D] rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => {
                setIsMessageModalOpen(false);
                setIsSupportModalOpen(false);
              }}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-900 text-lg font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors"
            >
              ✕
            </button>

            <div className="mb-6">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 mb-1">
                {isMessageModalOpen ? "Fleet Concierge" : "Customer Support"}
              </div>
              <h4 className="text-2xl font-extrabold text-[#0A0F1D]">
                {isMessageModalOpen ? "Send Outfitting Spec" : "Request Support & Exchange"}
              </h4>
            </div>

            {formSubmitted ? (
              <div className="py-8 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 text-xl font-bold">
                  ✓
                </div>
                <div className="text-lg font-bold text-[#0A0F1D]">Message Dispatched</div>
                <p className="text-xs text-slate-500 mt-1">Our team will respond to your email within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-[#0A0F1D] focus:border-[#0A0F1D] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Workplace Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-[#0A0F1D] focus:border-[#0A0F1D] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Message / Spec Details
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder={isMessageModalOpen ? "Describe crew size, uniforms needed, or embroidery requirements..." : "Describe order or fit exchange inquiry..."}
                    className="w-full rounded-xl border border-slate-300 px-4 py-2.5 text-sm text-[#0A0F1D] focus:border-[#0A0F1D] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0A0F1D] hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-colors cursor-pointer"
                >
                  Submit Inquiry →
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
