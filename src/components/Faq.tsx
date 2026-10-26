"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqData = [
  {
    question: "What shipping carrier do you use and how fast is delivery?",
    answer: `All orders ship from our US distribution warehouse within 24 hours via ${siteConfig.shippingCarrier || "UPS"}. Delivery typically takes ${siteConfig.shippingPeriod || "3-5"} business days with live nationwide tracking provided.`,
  },
  {
    question: "How does the satisfaction road-test guarantee work?",
    answer: `We provide a full ${siteConfig.trialPeriod || 14}-day risk-free road-test guarantee. If you are not completely satisfied with fitment, appearance, or performance, contact us at ${siteConfig.email} for an immediate return authorization and full refund.`,
  },
  {
    question: "Are these automotive parts and accessories direct OEM fitment?",
    answer: "Yes. Every part and accessory in our catalog is engineered to stringent OEM tolerances for seamless direct bolt-on fitment with zero vehicle cutting or modification required.",
  },
  {
    question: "What automotive parts and accessories does Motorway Parts and Accessories specialize in?",
    answer: "We specialize in pro-grade braking systems and ceramic rotors, engine ignition and thermal sensor assemblies, and premium interior cockpit accessories engineered for comfort and long-term durability.",
  },
  {
    question: "How will the charge appear on my credit card statement?",
    answer: `Your billing statement will show the merchant descriptor as "${siteConfig.descriptor}".`,
  },
  {
    question: "How can I get technical assistance with fitment and installation?",
    answer: `Our dedicated automotive support team is available Monday through Friday to verify vehicle compatibility and installation at ${siteConfig.phone} or ${siteConfig.email}.`,
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-gray-100 font-sans" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 lg:gap-12">
          
          {/* Left Side: Featured Automotive Image */}
          <div className="w-full md:w-1/2 max-w-md flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 group">
              <img
                src="https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Motorway Parts and Accessories Technician Inspection"
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "/img/faq.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-emerald-300 block mb-0.5">
                  VERIFIED FITMENT
                </span>
                <p className="text-xs sm:text-sm font-semibold text-white/90">
                  Precision-tested vehicle upgrades engineered for peak durability.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: FAQ Questions & Accordions */}
          <div className="w-full md:w-1/2 flex flex-col justify-start">
            <p className="text-emerald-600 text-xs sm:text-sm font-bold uppercase tracking-wider">
              FAQ&apos;S
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-1 tracking-tight">
              Looking for answers?
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2 pb-4 leading-relaxed">
              Explore frequently asked questions about vehicle fitment, express nationwide delivery, guarantees, and order fulfillment.
            </p>

            {/* FAQ Accordion Items */}
            <div className="divide-y divide-slate-200 mt-2 w-full">
              {faqData.map((faq, index) => {
                const isOpen = activeIndex === index;

                return (
                  <div
                    key={index}
                    className="py-4 cursor-pointer transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex items-center justify-between gap-4 select-none">
                      <h3 className={`text-sm sm:text-base font-semibold transition-colors ${
                        isOpen ? "text-emerald-600" : "text-slate-900 hover:text-emerald-600"
                      }`}>
                        {faq.question}
                      </h3>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`transition-transform duration-300 ease-in-out flex-shrink-0 ${
                          isOpen ? "rotate-180 text-emerald-600 stroke-emerald-600" : "text-slate-700 stroke-[#1D293D]"
                        }`}
                      >
                        <path
                          d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    {isOpen && (
                      <p className="text-xs sm:text-sm text-slate-600 mt-3 max-w-xl leading-relaxed animate-in fade-in-50 duration-200">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
