"use client";

import React, { useEffect, useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const contactImages = [
  "https://images.unsplash.com/photo-1758101755915-462eddc23f57?w=900&q=80",
  "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=900&q=80",
  "https://images.unsplash.com/photo-1601462904263-f2fa0c851cb9?w=900&q=80",
];

const methods = [
  {
    label: "Call Us",
    value: siteConfig.phone,
    subtext: "Mon–Fri, 9am–6pm CST",
    href: `tel:${siteConfig.phone}`,
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    label: "Email Us",
    value: siteConfig.email,
    subtext: "We reply within 24 hours",
    href: `mailto:${siteConfig.email}`,
    icon: (
      <>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </>
    ),
  },
  {
    label: "Visit Us",
    value: siteConfig.address,
    subtext: "By appointment only",
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
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-neutral-bg relative overflow-hidden" id="contact">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="max-w-[800px] mb-12 md:mb-16">
          <span className="eyebrow mb-4">Reach Out</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-primary mb-4 tracking-tight">
            Have Questions? <span className="text-secondary">Get in Touch</span>
          </h2>
          <p className="text-neutral-text/60 text-sm md:text-base">
            Our customer care representatives are available to help guide you on products, shipping, or billing support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-7xl mx-auto">
          {/* Visual Column */}
          <div className="relative rounded-[2rem] overflow-hidden min-h-[350px] lg:min-h-0 shadow-xl">
            {contactImages.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt="Electrician testing an electrical panel"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                  idx === activeImage ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
                style={{ transitionProperty: "opacity, transform" }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />

            <div className="relative z-10 h-full flex flex-col justify-end p-8">
              <span className="text-[0.65rem] font-bold uppercase tracking-widest text-secondary mb-2">Real Techs, Real Support</span>
              <p className="text-white text-lg md:text-xl font-bold leading-snug max-w-sm mb-8">
                &ldquo;They helped me find the exact breaker in stock, same day.&rdquo;
              </p>

              {/* Image dots */}
              <div className="flex gap-2">
                {contactImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === activeImage ? "w-8 bg-secondary" : "w-4 bg-white/30"
                    }`}
                    aria-label={`Show image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Contact Methods Column */}
          <div className="flex flex-col gap-5">
            {methods.map((method) => {
              const Wrapper = method.href ? "a" : "div";
              return (
                <Wrapper
                  key={method.label}
                  {...(method.href ? { href: method.href } : {})}
                  className="group flex flex-1 items-center gap-5 rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/5"
                >
                  <div className="flex h-13 w-13 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-secondary/15 group-hover:text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {method.icon}
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[0.62rem] font-bold uppercase tracking-widest text-neutral-text/45 mb-1">{method.label}</div>
                    <div className="font-bold text-sm md:text-base text-primary break-words">{method.value}</div>
                    <div className="text-xs text-neutral-text/50 mt-0.5">{method.subtext}</div>
                  </div>
                  {method.href && (
                    <span className="hidden sm:flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-black/5 text-primary transition-all duration-300 group-hover:border-secondary group-hover:bg-secondary group-hover:text-secondary-text">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  )}
                </Wrapper>
              );
            })}

            {/* FAQ nudge */}
            <div className="flex flex-1 items-center gap-5 rounded-2xl bg-primary p-6 text-white">
              <div className="min-w-0 flex-1">
                <div className="font-bold text-sm md:text-base">Have a quick question?</div>
                <div className="text-xs text-white/60 mt-0.5">Check our FAQ for instant answers on specs, shipping, and returns.</div>
              </div>
              <a
                href="#faq"
                className="hidden sm:inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-secondary text-secondary-text font-bold text-xs px-5 py-2.5 hover:brightness-105 transition-all"
              >
                View FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
