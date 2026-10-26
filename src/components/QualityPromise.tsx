"use client";

import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const promises = [
  {
    title: "Checked Before Dispatch",
    desc: "Each order is picked, inspected and packed by our team before it ships, so parts arrive ready to install.",
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11.5 14.5 15 9" />
      </>
    ),
  },
  {
    title: "60-Day Money-Back Guarantee",
    desc: "Not satisfied? Return your purchase within 60 days. Refunds go back to your original payment method within 5-7 business days of receipt.",
    icon: (
      <>
        <polyline points="1 4 1 10 7 10" />
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
      </>
    ),
  },
  {
    title: "Real People on the Line",
    desc: `Questions about a part or an order? Call ${siteConfig.phone} or email us — we reply within 24 hours.`,
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
];

export default function QualityPromise() {
  return (
    <section id="quality-promise" className="bg-white py-16 md:py-24">
      <div className="container-page">
        <div className="bg-brand-gradient relative overflow-hidden rounded-[2.5rem] px-6 py-14 sm:px-10 md:px-14 md:py-20">
          {/* Decorative bolt + rings */}
          <svg className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 text-white/10 md:h-96 md:w-96" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
          </svg>
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full border-28 border-white/10" />

          <div className="relative grid items-center gap-12 lg:grid-cols-5">
            <div className="text-center lg:col-span-2 lg:text-left">
              <span className="eyebrow eyebrow-invert">Our Promise</span>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
                Order with confidence, every time
              </h2>
              <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/85 md:text-base lg:mx-0">
                Every order from {siteConfig.brandName} comes with the same simple guarantee — no fine print, no
                restocking fees.
              </p>
              <Link
                href="/terms"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-primary-deep shadow-lg transition-transform duration-300 hover:-translate-y-0.5"
              >
                Read the Return Policy
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="grid gap-4 lg:col-span-3">
              {promises.map((promise) => (
                <div
                  key={promise.title}
                  className="flex items-start gap-4 rounded-3xl border border-white/25 bg-white/12 p-5 backdrop-blur-sm transition-colors duration-300 hover:bg-white/20 sm:p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-primary shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {promise.icon}
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white md:text-lg">{promise.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/85">{promise.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
