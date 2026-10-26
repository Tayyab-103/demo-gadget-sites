"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const contactImages = [
  "https://images.unsplash.com/photo-1758101755915-462eddc23f57?w=900&q=80",
  "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=900&q=80",
  "https://images.unsplash.com/photo-1601462904263-f2fa0c851cb9?w=900&q=80",
  "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=900&q=80",
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
    subtext: "Mailing & returns address",
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
    <section className="relative overflow-hidden bg-white py-16 md:py-24" id="contact">
      <div className="container-page">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <span className="eyebrow">Reach Out</span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
            We&apos;re here to <span className="text-gradient">help</span>
          </h2>
          <p className="mt-4 text-sm text-ink/60 md:text-base">
            Questions about a part, an order or billing? Our customer care team will point you in the right direction.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-10">
          {/* Visual column */}
          <div className="relative min-h-90 overflow-hidden rounded-4xl shadow-xl">
            {contactImages.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt="Electrical work and order fulfilment"
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-in-out ${
                  idx === activeImage ? "scale-100 opacity-100" : "scale-105 opacity-0"
                }`}
                style={{ transitionProperty: "opacity, transform" }}
              />
            ))}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

            <div className="relative z-10 flex h-full flex-col justify-end p-7 sm:p-9">
              <span className="eyebrow eyebrow-invert mb-4 w-fit">Customer Care</span>
              <p className="mb-7 max-w-sm text-xl font-bold leading-snug text-white md:text-2xl">
                Real people answering every call and email — usually within the same business day.
              </p>
              <div className="flex gap-2">
                {contactImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`h-1.5 cursor-pointer rounded-full transition-all duration-300 ${
                      idx === activeImage ? "bg-brand-gradient w-8" : "w-4 bg-white/40"
                    }`}
                    aria-label={`Show image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Contact methods */}
          <div className="flex flex-col gap-4">
            {methods.map((method) => {
              const Wrapper = method.href ? "a" : "div";
              return (
                <Wrapper
                  key={method.label}
                  {...(method.href ? { href: method.href } : {})}
                  className="card card-hover group flex flex-1 items-center gap-5 p-5 sm:p-6"
                >
                  <div className="icon-chip h-13 w-13">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {method.icon}
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 text-[0.62rem] font-bold uppercase tracking-widest text-ink/45">{method.label}</div>
                    <div className="text-sm font-bold text-ink wrap-anywhere md:text-base">{method.value}</div>
                    <div className="mt-0.5 text-xs text-ink/50">{method.subtext}</div>
                  </div>
                  {method.href && (
                    <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white sm:flex">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </span>
                  )}
                </Wrapper>
              );
            })}

            <div className="bg-wash flex flex-1 flex-col items-start gap-4 rounded-3xl border border-primary/15 p-6 sm:flex-row sm:items-center">
              <div className="min-w-0 flex-1">
                <div className="text-sm font-bold text-ink md:text-base">Have a quick question?</div>
                <div className="mt-0.5 text-xs text-ink/60">Our FAQ covers shipping, returns, bundles and billing.</div>
              </div>
              <Link href="/#faq" className="btn-brand px-6 py-3">
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
