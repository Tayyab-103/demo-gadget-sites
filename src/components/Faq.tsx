"use client";

import React, { useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqData = [
  {
    question: "What shipping carrier do you use and how fast is delivery?",
    answer: `All orders ship from our US warehouse within 24 hours via ${siteConfig.shippingCarrier}. Delivery typically takes ${siteConfig.shippingPeriod} business days with live tracking provided.`,
  },
  {
    question: "How does the 60-day money-back guarantee work?",
    answer: `We offer a full 60-day satisfaction guarantee. If you are not completely satisfied with fitment or performance, email us at ${siteConfig.email} for an immediate refund.`,
  },
  {
    question: "Are these parts direct OEM fitment replacements?",
    answer: "Yes. Every part is manufactured to strict OEM tolerances for seamless plug-and-play installation with zero modifications required.",
  },
  {
    question: "What does the 1-year hardware warranty cover?",
    answer: "Our 1-year warranty covers all manufacturing defects and premature wear under normal operating conditions with free replacement.",
  },
  {
    question: "How will the charge appear on my credit card statement?",
    answer: `Your statement will show the charge descriptor as "${siteConfig.descriptor}".`,
  },
  {
    question: "How can I get technical assistance with installation?",
    answer: `Our support team is available Monday–Friday to assist with fitment and installation at ${siteConfig.phone} or ${siteConfig.email}.`,
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-white border-b border-gray-200" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ────────────────── SECTION HEADER ────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-8 border-b border-gray-200">
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-5 rounded-full border-2 border-red-600 flex items-center justify-center flex-shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
            </span>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-gray-900 uppercase">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-500">
            HAVE QUESTIONS? WE&apos;VE GOT ANSWERS
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Support Spotlight Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#0f1217] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/15 rounded-full blur-3xl" />

              <span className="text-[0.65rem] font-black uppercase tracking-widest text-red-500 block mb-3">
                CUSTOMER SUPPORT HUB
              </span>

              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-3">
                Need Help with Your Vehicle?
              </h3>

              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6 font-normal">
                Our automotive team is ready to verify your vehicle compatibility and guide you through installation.
              </p>

              <div className="space-y-3.5 pt-4 border-t border-white/10 text-xs">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-gray-200 hover:text-red-400 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <span className="text-[0.65rem] text-gray-400 block font-semibold">Toll-Free Phone</span>
                    <strong className="text-sm font-bold text-white">{siteConfig.phone}</strong>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-gray-200 hover:text-red-400 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <span className="text-[0.65rem] text-gray-400 block font-semibold">Email Support</span>
                    <strong className="text-sm font-bold text-white lowercase break-all">{siteConfig.email}</strong>
                  </div>
                </a>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[0.7rem] text-gray-400 font-semibold">Mon–Fri: 9AM – 6PM EST</span>
                <Link
                  href="/contact"
                  className="text-xs font-bold text-red-500 hover:text-red-400 flex items-center gap-1"
                >
                  <span>Contact Form</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>

            {/* Quick Guarantees Reminder */}
            <div className="bg-[#fafafa] border border-gray-200 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center flex-shrink-0 font-bold text-base">
                🛡️
              </div>
              <div className="text-xs">
                <h4 className="font-bold text-gray-900 leading-tight">60-Day Trial &amp; 1-Year Warranty</h4>
                <p className="text-gray-500 mt-0.5">Every purchase is backed by our full money-back guarantee.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            {faqData.map((item, idx) => {
              const isOpen = activeIndex === idx;

              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-white border-red-500 shadow-md ring-1 ring-red-500/20"
                      : "bg-[#fafafa] border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none gap-4"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className={`text-xs font-black tracking-widest flex-shrink-0 ${
                        isOpen ? "text-red-600" : "text-gray-400"
                      }`}>
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-gray-900 leading-snug">
                        {item.question}
                      </span>
                    </div>

                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all flex-shrink-0 ${
                        isOpen
                          ? "bg-red-600 text-white rotate-45 shadow-sm"
                          : "bg-gray-200 text-gray-700 hover:bg-red-600 hover:text-white rotate-0"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-5 pt-0 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 mt-1 pl-12 animate-in fade-in-50 duration-200">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
