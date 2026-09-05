"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Contact() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#FAF8F5] text-[#121820] border-t border-[#C5A059]/20" id="contact">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[0.68rem] font-serif uppercase tracking-[0.24em] text-[#C5A059] mb-3 font-semibold">
            <span>✦</span>
            Patron Concierge
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#121820] leading-[1.12]">
            Get in touch<br />with the team
          </h2>
          <p className="text-[#1A202C]/75 text-xs sm:text-sm md:text-base mt-3 leading-relaxed font-normal">
            Have questions about bespoke stationery, custom nib fittings, or volume orders? Connect directly with our Austin studio.
          </p>
        </div>

        {/* Main Framed Contact Card */}
        <div className="relative rounded-3xl bg-white border border-[#C5A059]/30 p-6 sm:p-8 md:p-12 shadow-sm">
          
          {/* Top Tier: Primary Support Channel */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-10 border-b border-[#C5A059]/20">
            <div className="max-w-xl">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#121820]">
                Support
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-[#1A202C]/75 mt-1.5 leading-relaxed font-normal">
                Get help from our Austin stationery specialists for orders, custom suites, and atelier assistance.
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mt-6">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#121820] text-[#FAF8F5] hover:bg-[#C5A059] hover:text-[#121820] font-serif font-bold text-xs sm:text-sm transition-all duration-200 shadow-sm group"
                >
                  <span>Start chat</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
                <span className="text-xs sm:text-sm text-[#1A202C]/60 font-serif">
                  Direct reply within 24 hours · Mon–Fri
                </span>
              </div>
            </div>

            {/* Live Service Status Indicator */}
            <div className="flex items-center gap-2 self-start md:self-end px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#C5A059]/30 text-[#121820] text-xs font-serif">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-xs text-[#121820]">All services online</span>
            </div>
          </div>

          {/* Bottom Tier: 4 Categorized Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 sm:pt-10 lg:divide-x lg:divide-[#C5A059]/20">
            
            {/* Column 1: Billing & Orders */}
            <div className="flex flex-col justify-between items-start pr-0 lg:pr-6">
              <div>
                <h4 className="text-base sm:text-lg font-serif font-bold text-[#121820]">
                  Billing
                </h4>
                <p className="text-xs sm:text-sm text-[#1A202C]/70 mt-1.5 mb-5 leading-relaxed">
                  Fix account, order tracking, or billing issues.
                </p>
              </div>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#FAF8F5] hover:bg-[#121820] hover:text-[#FAF8F5] text-xs font-serif font-bold text-[#121820] transition-all duration-200 border border-[#C5A059]/30"
              >
                Start chat
              </a>
            </div>

            {/* Column 2: Emergency / Urgent Dispatch */}
            <div className="flex flex-col justify-between items-start pl-0 lg:pl-6 pr-0 lg:pr-6">
              <div>
                <h4 className="text-base sm:text-lg font-serif font-bold text-[#121820]">
                  Emergency
                </h4>
                <p className="text-xs sm:text-sm text-[#1A202C]/70 mt-1.5 mb-5 leading-relaxed">
                  Urgent dispatch help &amp; expedited package status.
                </p>
              </div>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#FAF8F5] hover:bg-[#121820] hover:text-[#FAF8F5] text-xs font-serif font-bold text-[#121820] transition-all duration-200 border border-[#C5A059]/30"
              >
                Emergency
              </a>
            </div>

            {/* Column 3: Sales / Bespoke & Corporate */}
            <div className="flex flex-col justify-between items-start pl-0 lg:pl-6 pr-0 lg:pr-6">
              <div>
                <h4 className="text-base sm:text-lg font-serif font-bold text-[#121820]">
                  Sales
                </h4>
                <p className="text-xs sm:text-sm text-[#1A202C]/70 mt-1.5 mb-5 leading-relaxed">
                  Work with our team on bespoke &amp; enterprise solutions.
                </p>
              </div>
              <a
                href={`mailto:${siteConfig.email}?subject=Corporate%20%26%20Bespoke%20Solutions`}
                className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#FAF8F5] hover:bg-[#121820] hover:text-[#FAF8F5] text-xs font-serif font-bold text-[#121820] transition-all duration-200 border border-[#C5A059]/30"
              >
                Enterprise
              </a>
            </div>

            {/* Column 4: Austin Studio / Support */}
            <div className="flex flex-col justify-between items-start pl-0 lg:pl-6">
              <div>
                <h4 className="text-base sm:text-lg font-serif font-bold text-[#121820]">
                  Studio
                </h4>
                <p className="text-xs sm:text-sm text-[#1A202C]/70 mt-1.5 mb-5 leading-relaxed">
                  {siteConfig.address}. Mon–Fri 8am–6pm CST.
                </p>
              </div>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-[#FAF8F5] hover:bg-[#121820] hover:text-[#FAF8F5] text-xs font-serif font-bold text-[#121820] transition-all duration-200 border border-[#C5A059]/30"
              >
                Austin Studio
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
