"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Contact() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-[#121316] relative overflow-hidden border-t border-stone-200/80" id="contact">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F8F6F2] px-4 py-1.5 rounded-full border border-stone-200/80 shadow-xs mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E06830]" />
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#121316]">
              CULINARY CONCIERGE &amp; WORKSHOP SUPPORT
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#121316] tracking-tight leading-tight mb-3">
            Dedicated Assistance for <br />
            <span className="italic text-[#E06830] font-serif">Every Chef &amp; Home Cook</span>
          </h2>

          <p className="text-[#121316]/75 text-sm sm:text-base leading-relaxed">
            Have questions about tool metallurgy, sharpening care, multi-pack bundle discounts, or order tracking? Our culinary advocates are here to help.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Column: Contact Image (/img/about-workshop.jpg) */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden shadow-xl border border-stone-200/90 bg-stone-100 group">
              <img
                src="/img/about-workshop.jpg"
                alt="Culinary Tool Workshop Support"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  e.currentTarget.src = "/hero-kitchen.jpg";
                }}
              />

              {/* Floating Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-[#121316] text-white text-[0.65rem] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                  ✦ 24-Hour Workshop Reply Guarantee
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Channels & CTA Card */}
          <div className="lg:col-span-7 bg-[#121316] text-white rounded-[2.5rem] p-8 sm:p-12 shadow-xl relative overflow-hidden border border-white/10 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-60 h-60 bg-[#E06830]/15 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E06830] text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-md">
                ✦
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold mb-3 font-serif text-white">
                {siteConfig.brandName} Concierge
              </h3>

              <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-8 max-w-xl">
                We treat every culinary question with the precision our tools demand. Whether you need care recommendations or bulk kitchen order assistance, reach out anytime.
              </p>

              {/* Direct Channels Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E06830]/20 text-[#E06830] flex items-center justify-center flex-shrink-0 text-lg">
                    📞
                  </div>
                  <div>
                    <div className="text-[0.65rem] uppercase tracking-wider text-white/60 font-bold">Call Toll-Free</div>
                    <div className="text-sm font-bold text-white mt-0.5">{siteConfig.phone}</div>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E06830]/20 text-[#E06830] flex items-center justify-center flex-shrink-0 text-lg">
                    ✉️
                  </div>
                  <div>
                    <div className="text-[0.65rem] uppercase tracking-wider text-white/60 font-bold">Email Support</div>
                    <div className="text-sm font-bold text-white mt-0.5 break-all">{siteConfig.email}</div>
                  </div>
                </a>
              </div>

              {/* Operating Info */}
              <div className="text-xs text-white/70 mb-8 pt-4 border-t border-white/10">
                <strong className="text-white">Workshop Support Hours:</strong> Monday – Friday, 9:00 AM – 6:00 PM EST
              </div>

              {/* Action Button to Open Contact Page */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 bg-[#E06830] text-white hover:bg-white hover:text-[#121316] transition-all duration-300 py-4 px-8 rounded-full text-xs font-bold uppercase tracking-widest shadow-md hover:shadow-lg w-full sm:w-auto text-center"
              >
                <span>Send Us an Inquiry</span>
                <span>→</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
