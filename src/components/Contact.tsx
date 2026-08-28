"use client";

import React, { useEffect, useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const contactImages = [
  "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&q=80",
  "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&q=80",
  "/img/contact_engineer.jpg",
];

const methods = [
  {
    label: "Call Support Desk",
    value: siteConfig.phone,
    subtext: "Mon–Fri, 8am–6pm CST",
    href: `tel:${siteConfig.phone}`,
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    label: "Foundry Email",
    value: siteConfig.email,
    subtext: "Replies within 24 hours",
    href: `mailto:${siteConfig.email}`,
    icon: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </>
    ),
  },
  {
    label: "Foundry Address",
    value: siteConfig.address,
    subtext: "Distribution Center",
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
    <section className="py-14 sm:py-16 md:py-20 lg:py-24 bg-white" id="contact">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 sm:mb-14">
          <span className="eyebrow mb-3">Technical Assistance</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-primary">
            Have Questions? <span className="text-secondary">Talk to Specialists</span>
          </h2>
          <p className="text-neutral-text/70 text-xs sm:text-sm md:text-base mt-3">
            Our plumbing and hydronic heating technical team is available to assist with component specifications, bulk orders, and logistics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Visual Column */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-64 sm:min-h-80 lg:min-h-full shadow-md border border-black/5 bg-neutral-bg">
            {contactImages.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt="Foundry plumbing and heating supplies"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  idx === activeImage ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/25 to-transparent" />

            <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8">
              <span className="text-[0.65rem] font-bold uppercase tracking-wider text-secondary mb-1.5">Direct Contractor Support</span>
              <p className="text-white text-base sm:text-lg md:text-xl font-bold leading-snug max-w-sm mb-6">
                &ldquo;They verified my thread tolerances and hydronic pressure requirements immediately.&rdquo;
              </p>

              {/* Image dots */}
              <div className="flex gap-1.5">
                {contactImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      idx === activeImage ? "w-6 bg-secondary" : "w-2 bg-white/30"
                    }`}
                    aria-label={`Show image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Contact Methods Column */}
          <div className="flex flex-col gap-4">
            {methods.map((method) => {
              const Wrapper = method.href ? "a" : "div";
              return (
                <Wrapper
                  key={method.label}
                  {...(method.href ? { href: method.href } : {})}
                  className="group flex items-center gap-4 sm:gap-5 rounded-2xl border border-black/5 bg-neutral-bg p-5 sm:p-6 shadow-xs transition-all duration-200 hover:border-secondary/30 hover:shadow-sm"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-200 group-hover:bg-secondary group-hover:text-secondary-text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {method.icon}
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[0.62rem] font-bold uppercase tracking-wider text-neutral-text/50 mb-0.5">{method.label}</div>
                    <div className="font-bold text-sm sm:text-base text-primary break-words">{method.value}</div>
                    <div className="text-xs text-neutral-text/60 mt-0.5">{method.subtext}</div>
                  </div>
                  {method.href && (
                    <span className="hidden sm:flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-black/10 text-primary transition-all duration-200 group-hover:border-secondary group-hover:bg-secondary group-hover:text-secondary-text">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  )}
                </Wrapper>
              );
            })}

            {/* FAQ quick link */}
            <div className="flex items-center justify-between gap-4 rounded-2xl bg-primary p-5 sm:p-6 text-white shadow-sm">
              <div className="min-w-0 flex-1">
                <div className="font-bold text-sm sm:text-base">Need instant answers?</div>
                <div className="text-xs text-white/70 mt-0.5">Explore our FAQ for specifications, NPT thread compatibility, and returns.</div>
              </div>
              <a
                href="#faq"
                className="hidden sm:inline-flex flex-shrink-0 items-center gap-1.5 rounded-full bg-secondary text-secondary-text font-bold text-xs px-5 py-2 hover:brightness-110 transition-all"
              >
                View FAQs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
