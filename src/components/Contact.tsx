"use client";

import React, { useEffect, useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const contactImages = [
  "/img/hero-uniforms.jpg",
  "/img/uniform-tailoring-atelier.jpg",
  "/img/textile-lab-test.jpg",
];

const methods = [
  {
    label: "Fleet Phone Desk",
    value: siteConfig.phone,
    subtext: "Mon–Fri, 8am–6pm CST",
    href: `tel:${siteConfig.phone}`,
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    label: "Enterprise Email",
    value: siteConfig.email,
    subtext: "Quotes within 24 hours",
    href: `mailto:${siteConfig.email}`,
    icon: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </>
    ),
  },
  {
    label: "Austin Tailoring Atelier",
    value: siteConfig.address,
    subtext: "Logistics & Design Hub",
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
    <section className="py-16 sm:py-20 bg-[#FFFFFF] text-[#0A0F1D] border-t border-slate-200" id="contact">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.24em] text-[#0A0F1D]/70 mb-2.5 select-none">
            FLEET CONCIERGE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#0A0F1D] leading-[1.08] mb-3">
            Have Inquiries? <br className="hidden sm:inline" />
            <span className="font-bold text-[#0A0F1D]">Connect With Our Team.</span>
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed font-normal">
            Our uniform specialists assist with sizing samples, custom embroidery, and volume fleet orders.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Visual Column */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden min-h-[280px] sm:min-h-[320px] lg:min-h-full bg-[#0A0F1D]">
            {contactImages.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt="Ironvale Uniform Outfitters support in Austin"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-65 ${
                  idx === activeImage ? "opacity-65" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-[#0A0F1D]/50 to-transparent" />

            <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-7 text-white">
              <span className="text-[0.62rem] uppercase tracking-widest text-slate-300 mb-1.5 font-bold">
                Dedicated Support
              </span>
              <p className="text-white text-base sm:text-lg font-bold leading-snug max-w-md mb-4">
                &ldquo;They verified our medical staff&apos;s department sizing and had our UPS tracking active the same afternoon.&rdquo;
              </p>

              {/* Dots */}
              <div className="flex gap-1.5">
                {contactImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`h-1 rounded-full transition-all cursor-pointer ${
                      idx === activeImage ? "w-6 bg-white" : "w-1.5 bg-white/40"
                    }`}
                    aria-label={`Image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Contact Methods Column */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            {methods.map((method) => {
              const Wrapper = method.href ? "a" : "div";
              return (
                <Wrapper
                  key={method.label}
                  {...(method.href ? { href: method.href } : {})}
                  className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 sm:p-5 transition-all hover:border-[#0A0F1D] hover:bg-white"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[#0A0F1D] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {method.icon}
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[0.62rem] font-bold uppercase tracking-widest text-slate-500 mb-0.5">
                      {method.label}
                    </div>
                    <div className="font-bold text-sm sm:text-base text-[#0A0F1D] break-all">
                      {method.value}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5 font-normal">
                      {method.subtext}
                    </div>
                  </div>
                </Wrapper>
              );
            })}

            {/* Direct Notice */}
            <div className="flex items-center justify-between gap-4 rounded-xl bg-[#0A0F1D] p-4 sm:p-5 text-white mt-1">
              <div className="min-w-0 flex-1">
                <div className="font-bold uppercase tracking-tight text-xs text-white">
                  Austin Atelier &amp; Fulfillment
                </div>
                <div className="text-xs text-slate-300 mt-0.5 font-normal">
                  Dispatched Monday through Friday via {siteConfig.shippingCarrier}.
                </div>
              </div>
              <span className="hidden sm:inline-block px-3 py-0.5 rounded-full bg-white/10 text-white text-[0.65rem] font-bold uppercase tracking-wider">
                ACTIVE
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
