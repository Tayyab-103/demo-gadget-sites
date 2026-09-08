"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Features() {
  const featureList = [
    {
      id: "oem-precision",
      badge: "ENGINEERING",
      title: "OEM-Grade Precision Fit",
      desc: "Designed and engineered specifically for modern vehicles, ensuring zero rattles, direct fitment, and factory-level finish.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m4.93 4.93 4.24 4.24" />
          <path d="m14.83 9.17 4.24-4.24" />
          <path d="m14.83 14.83 4.24 4.24" />
          <path d="m9.17 14.83-4.24 4.24" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      id: "all-weather",
      badge: "DURABILITY",
      title: "All-Weather & Heat Resilient",
      desc: "Tested under extreme summer cabin heat and winter freezes. High-durability materials built to withstand everyday road wear.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      id: "express-shipping",
      badge: "LOGISTICS",
      title: "Express US Transit via UPS",
      desc: `Orders dispatched within 24 hours with real-time door-to-door tracking. Delivered nationwide in ${siteConfig.shippingPeriod || "3-5"} business days.`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
          <path d="M15 18H9" />
          <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
          <circle cx="17" cy="18" r="2" />
          <circle cx="7" cy="18" r="2" />
        </svg>
      ),
    },
    {
      id: "road-test-guarantee",
      badge: "ASSURANCE",
      title: "30-Day Road-Test Guarantee",
      desc: "Drive with complete confidence. If our upgrades do not meet your driving standards, return them within 30 days for a 100% refund.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.5 2v6h-6" />
          <path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
        </svg>
      ),
    },
    {
      id: "gearhead-support",
      badge: "ASSISTANCE",
      title: "Dedicated Automotive Support",
      desc: "Have a fitment question? Our Austin-based customer team is available via phone and email to guide your installation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      id: "secure-checkout",
      badge: "SECURITY",
      title: "Bank-Grade Encrypted Checkout",
      desc: "Protected by 256-bit SSL encryption and tokenized payment processing through Visa and Mastercard verified gateways.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden" id="features">
      {/* Background Decorative Ambient Circles */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 mb-4 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[0.68rem] sm:text-xs font-bold uppercase tracking-widest text-blue-700">
              ENGINEERED FOR EXCELLENCE
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-4">
            Why Drivers Trust{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              {siteConfig.brandName}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            High-grade vehicle enhancements built to deliver superior road safety, effortless cabin ergonomics, and long-lasting durability.
          </p>
        </div>

        {/* 6-Card Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featureList.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 hover:border-blue-300 shadow-xs hover:shadow-xl hover:shadow-blue-600/5 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              {/* Subtle top accent gradient line on hover */}
              <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

              <div>
                {/* Icon & Category Badge Row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="text-[0.65rem] font-black uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    {item.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Quick Link */}
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                <span>Learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="text-center mt-10">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Explore All Performance Accessories</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
