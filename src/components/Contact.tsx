"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Contact() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-[#F0F4F8] relative overflow-hidden" id="contact">
      <div className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* ════════════════════════════════════════════════════════════
            SPLIT BANNER: Left Theme Card + Right 2x2 Contact Card
            ════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">

          {/* ──── LEFT THEME HIGHLIGHT CARD (Using Theme Colors) ──── */}
          <div
            className="lg:col-span-4 rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 lg:p-12 flex flex-col justify-between shadow-[0_15px_40px_rgba(91,107,240,0.25)] min-h-[360px] sm:min-h-[420px] transition-all"
            style={{
              backgroundColor: siteConfig.theme.secondaryColor || "#5B6BF0",
              color: siteConfig.theme.secondaryTextColor || "#ffffff",
            }}
          >
            <div>
              <span className="text-xs sm:text-sm font-bold text-white/80 uppercase tracking-wider block mb-4 sm:mb-6">
                Need To Contact Us?
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-black text-white tracking-tight leading-[1.18]">
                Tell us about your issue so we can help you more quickly
              </h2>
            </div>

            <div className="pt-8">
              <a
                href={`mailto:${siteConfig.email}?subject=Customer%20Help%20Request`}
                className="inline-flex items-center justify-center bg-white hover:bg-[#0F1217] text-[#0F1217] hover:text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:shadow-lg transition-all duration-300 active:scale-95 cursor-pointer"
              >
                Get Help
              </a>
            </div>
          </div>

          {/* ──── RIGHT 2x2 CONTACT CARD ──── */}
          <div className="lg:col-span-8 bg-[#F8F9FC] rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 lg:p-14 border border-black/[0.04] shadow-[0_15px_45px_rgba(0,0,0,0.03)] flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">

              {/* 1. Phone Card */}
              <div className="flex flex-col justify-between space-y-4 group">
                <div className="space-y-2">
                  <div className="w-10 h-10 text-[#0F1217] flex items-center justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.21 2.2z" />
                    </svg>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-[#0F1217] tracking-tight">
                    Phone
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-text/70 font-medium leading-relaxed">
                    {siteConfig.phone}
                  </p>
                </div>

                <div>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="w-11 h-11 rounded-full bg-[#0F1217] hover:bg-[#5B6BF0] text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105 group/btn cursor-pointer"
                    aria-label="Call support"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* 2. Email Card */}
              <div className="flex flex-col justify-between space-y-4 group">
                <div className="space-y-2">
                  <div className="w-10 h-10 text-[#0F1217] flex items-center justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-[#0F1217] tracking-tight">
                    Email
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-text/70 font-medium leading-relaxed break-all">
                    {siteConfig.email}
                  </p>
                </div>

                <div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="w-11 h-11 rounded-full bg-[#0F1217] hover:bg-[#5B6BF0] text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105 group/btn cursor-pointer"
                    aria-label="Send an email"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* 3. Address Card */}
              <div className="flex flex-col justify-between space-y-4 group">
                <div className="space-y-2">
                  <div className="w-10 h-10 text-[#0F1217] flex items-center justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2z" />
                      <circle cx="12" cy="10" r="3" />
                      <path d="M7 20v-1a5 5 0 0 1 10 0v1" />
                    </svg>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-[#0F1217] tracking-tight">
                    Address
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-text/70 font-medium leading-relaxed">
                    {siteConfig.address}
                    <br />
                    <span className="text-neutral-text/50">{siteConfig.corpName}</span>
                  </p>
                </div>

                <div>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 rounded-full bg-[#0F1217] hover:bg-[#5B6BF0] text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105 group/btn cursor-pointer"
                    aria-label="Open location in maps"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* 4. Return Card */}
              <div className="flex flex-col justify-between space-y-4 group">
                <div className="space-y-2">
                  <div className="w-10 h-10 text-[#0F1217] flex items-center justify-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 8h16M16 4l4 4-4 4" />
                      <path d="M20 16H4M8 12l-4 4 4 4" />
                    </svg>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-[#0F1217] tracking-tight">
                    Return
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-text/70 font-medium leading-relaxed">
                    {siteConfig.address}
                    <br />
                    <span className="text-neutral-text/50">Docks &amp; Return Processing Center</span>
                  </p>
                </div>

                <div>
                  <Link
                    href="/terms"
                    className="w-11 h-11 rounded-full bg-[#0F1217] hover:bg-[#5B6BF0] text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-105 group/btn"
                    aria-label="View return terms"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover/btn:translate-x-0.5"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
