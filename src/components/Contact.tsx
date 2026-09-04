"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Contact() {
  const [scheduled, setScheduled] = useState(false);

  return (
    <section className="py-14 sm:py-16 md:py-20 lg:py-24 bg-white" id="contact">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unified Contact Container matching design */}
        <div className="flex flex-col lg:flex-row items-stretch rounded-3xl overflow-hidden shadow-xl border border-black/5">
          
          {/* Left Block - Brand Accent Card */}
          <div className="w-full lg:w-5/12 bg-secondary text-white p-8 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-between">
            <div>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-white/90">
                Customer Support
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-3 leading-tight tracking-tight">
                Need Assistance?<br />Get in touch with our team.
              </h2>
            </div>

            <div className="mt-8 lg:mt-12">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-block bg-primary text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-lg hover:brightness-125 transition-all text-center cursor-pointer"
              >
                Call Support Desk
              </a>
            </div>
          </div>

          {/* Right Block - 2x2 Contact Cards Grid */}
          <div className="w-full lg:w-7/12 bg-neutral-bg p-8 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10">
              
              {/* Phone Card */}
              <div className="flex flex-col items-start">
                <div className="text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.69.59 1 1 0 011 1v3.5a1 1 0 01-1 1A16 16 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.59 3.69a1 1 0 01-.27 1.11l-2.2 2.2z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-primary mt-3">Phone</h3>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-xs sm:text-sm text-neutral-text/75 hover:text-secondary transition-colors mt-1 font-medium"
                >
                  {siteConfig.phone}
                </a>
                <a
                  href={`tel:${siteConfig.phone}`}
                  aria-label="Call support desk"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-white mt-4 hover:brightness-110 transition-all shadow-sm cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>

              {/* Email Card */}
              <div className="flex flex-col items-start">
                <div className="text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-primary mt-3">Email</h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-xs sm:text-sm text-neutral-text/75 hover:text-secondary transition-colors mt-1 font-medium break-all"
                >
                  {siteConfig.email}
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  aria-label="Send email"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-white mt-4 hover:brightness-110 transition-all shadow-sm cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>

              {/* Address Card */}
              <div className="flex flex-col items-start">
                <div className="text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.96.76 1.58V19z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-primary mt-3">Address</h3>
                <p className="text-xs sm:text-sm text-neutral-text/75 mt-1 leading-relaxed font-medium">
                  {siteConfig.address}
                </p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View address on map"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-white mt-4 hover:brightness-110 transition-all shadow-sm cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>

              {/* Return Card */}
              <div className="flex flex-col items-start">
                <div className="text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="17 1 21 5 17 9"></polyline>
                    <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                    <polyline points="7 23 3 19 7 15"></polyline>
                    <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-primary mt-3">Return</h3>
                <p className="text-xs sm:text-sm text-neutral-text/75 mt-1 leading-relaxed font-medium">
                  {siteConfig.address}
                </p>
                <a
                  href="/terms"
                  aria-label="View return policy and terms"
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-white mt-4 hover:brightness-110 transition-all shadow-sm cursor-pointer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
