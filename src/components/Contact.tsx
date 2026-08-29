"use client";

import React, { useEffect, useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const contactImages = [
  "/img/hero-luggage-travel.jpg",
  "/img/travel-atelier-craft.jpg",
  "/img/products/nomad-leather-duffle.jpg",
];

const methods = [
  {
    label: "Flight Concierge Desk",
    value: siteConfig.phone,
    subtext: "Mon–Fri, 8am–6pm CST",
    href: `tel:${siteConfig.phone}`,
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    label: "Traveler & Corporate Inquiries",
    value: siteConfig.email,
    subtext: "Guaranteed reply within 24 hours",
    href: `mailto:${siteConfig.email}`,
    icon: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </>
    ),
  },
  {
    label: "Austin Design & Dispatch Hangar",
    value: siteConfig.address,
    subtext: "Design Studio & Logistics Hub",
    href: undefined,
    icon: (
      <>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
];

export default function Contact() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((i) => (i + 1) % contactImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#F8F6F0] text-[#18222F] border-t border-[#C87D3B]/20" id="contact">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C87D3B]/10 border border-[#C87D3B]/30 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#C87D3B] mb-3">
            <span>✈</span>
            Traveler Concierge Assistance
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0D1B2A] leading-[1.15] uppercase">
            Have Inquiries? <span className="text-[#C87D3B] font-light italic lowercase">Connect With Our Team</span>
          </h2>
          <p className="text-[#18222F]/75 text-xs sm:text-sm md:text-base mt-3.5 leading-relaxed font-normal">
            Our Austin travel specialists are ready to assist with custom corporate luggage sets, airline dimensional compatibility, and expedited flight dispatches.
          </p>
        </div>

        {/* 2-Column Visual & Contact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[320px] sm:min-h-[380px] lg:min-h-full shadow-2xl border border-[#C87D3B]/30 bg-[#0D1B2A]">
            {contactImages.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt="Wanderloom Travel luggage support in Austin"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 opacity-65 ${
                  idx === activeImage ? "opacity-65" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/50 to-transparent" />

            <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8 md:p-9 text-white">
              <span className="text-[0.7rem] uppercase tracking-widest text-[#C87D3B] mb-2 font-extrabold">
                ✈ Dedicated Flight Care
              </span>
              <p className="text-white text-base sm:text-lg md:text-xl font-bold leading-snug max-w-md mb-6">
                &ldquo;They verified our executive team&apos;s carry-on dimensions and had our UPS tracking numbers active the same afternoon.&rdquo;
              </p>

              {/* Image dots */}
              <div className="flex gap-1.5">
                {contactImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === activeImage ? "w-7 bg-[#C87D3B]" : "w-2 bg-white/40"
                    }`}
                    aria-label={`Show image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Contact Methods Column */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {methods.map((method) => {
              const Wrapper = method.href ? "a" : "div";
              return (
                <Wrapper
                  key={method.label}
                  {...(method.href ? { href: method.href } : {})}
                  className="group flex items-center gap-4 sm:gap-5 rounded-2xl border border-[#C87D3B]/20 bg-white p-5 sm:p-6 transition-all duration-200 hover:border-[#C87D3B] hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#0D1B2A] text-[#C87D3B] transition-all duration-200 group-hover:bg-[#C87D3B] group-hover:text-white shadow-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {method.icon}
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[0.65rem] font-bold uppercase tracking-widest text-[#C87D3B] mb-0.5">
                      {method.label}
                    </div>
                    <div className="font-extrabold text-sm sm:text-base text-[#0D1B2A] break-all">
                      {method.value}
                    </div>
                    <div className="text-xs text-[#18222F]/60 mt-0.5 font-normal">
                      {method.subtext}
                    </div>
                  </div>
                  {method.href && (
                    <span className="hidden sm:flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-[#C87D3B]/30 text-[#0D1B2A] transition-all duration-200 group-hover:border-[#C87D3B] group-hover:bg-[#C87D3B] group-hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  )}
                </Wrapper>
              );
            })}

            {/* Direct Hours Notice */}
            <div className="flex items-center justify-between gap-4 rounded-2xl bg-[#0D1B2A] p-5 sm:p-6 text-white shadow-lg mt-2 border border-[#C87D3B]/30">
              <div className="min-w-0 flex-1">
                <div className="font-extrabold uppercase tracking-tight text-sm text-white">
                  Austin Design &amp; Fulfillment Hangar
                </div>
                <div className="text-xs text-white/70 mt-0.5 font-normal">
                  Orders tested, packed &amp; dispatched Monday through Friday via {siteConfig.shippingCarrier}.
                </div>
              </div>
              <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#C87D3B] text-white text-xs font-bold uppercase tracking-wider">
                ACTIVE
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
