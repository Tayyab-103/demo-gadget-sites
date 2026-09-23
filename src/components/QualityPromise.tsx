"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const promises = [
  {
    title: "Road-Tested Components",
    desc: "Every part is inspected, bench-tested, and verified for exact vehicle fitment and build quality before it ships.",
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11.5 14.5 15 9" />
      </>
    ),
  },
  {
    title: "30-Day Easy Returns",
    desc: "Wrong part or fitment? Send it back within 30 days — no fine print, no restocking headaches.",
    icon: (
      <>
        <polyline points="1 4 1 10 7 10" />
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
      </>
    ),
  },
  {
    title: "Certified OEM-Grade Standards",
    desc: "We partner with vetted automotive manufacturers using premium shatterproof glass, strong neodymium magnets, and durable materials.",
    icon: (
      <>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </>
    ),
  },
];

export default function QualityPromise() {
  const certYear = new Date().getFullYear();

  return (
    <section id="quality-promise" className="relative overflow-hidden bg-primary py-20 md:py-28">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-100 w-100 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-2xl px-6 text-center">
        <span className="eyebrow eyebrow-invert justify-center mb-6">Our Guarantee</span>
        <h2 className="text-3xl font-black uppercase leading-[0.98] tracking-tight text-white sm:text-4xl md:text-5xl">
          The Premium Quality <span className="text-secondary">You Deserve</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
          We understand how much you rely on your vehicle to get where you need to go safely.
          That&apos;s why we back every order with a formal quality guarantee.
        </p>
      </div>

      {/* Certificate card */}
      <div className="relative z-10 mx-auto mt-8 w-full max-w-4xl px-6 md:mt-10">
        <div className="relative rounded-[1.5rem] border-2 border-dashed border-primary/15 bg-neutral-bg p-7 shadow-2xl sm:p-10 md:p-12">
          {/* Certified stamp */}
          <div className="absolute -top-6 right-6 z-10 flex h-16 w-16 rotate-[-10deg] flex-shrink-0 items-center justify-center rounded-full border-2 border-secondary bg-neutral-bg text-secondary shadow-lg sm:h-20 sm:w-20 md:right-10">
            <div className="flex flex-col items-center leading-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11.5 14.5 15 9" />
              </svg>
              <span className="mt-1 text-[0.5rem] font-black uppercase tracking-wider sm:text-[0.55rem]">Certified</span>
            </div>
          </div>

          {/* Certificate header */}
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-lg font-black uppercase tracking-tight text-primary sm:text-2xl">
                Certificate of Guarantee
              </h3>
              <p className="mt-1 text-xs text-neutral-text/50 sm:text-sm">Issued automatically with every order</p>
            </div>
            <span className="rounded-full border border-primary/15 bg-white px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-widest text-primary/60 sm:text-xs">
              No. QC-{certYear}
            </span>
          </div>

          {/* Perforated divider */}
          <div className="my-7 border-t-2 border-dashed border-primary/15 sm:my-8" />

          {/* Guarantee terms */}
          <div className="flex flex-col divide-y-2 divide-dashed divide-primary/10">
            {promises.map((promise) => (
              <div key={promise.title} className="flex items-start gap-4 py-5 first:pt-0 last:pb-0">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {promise.icon}
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary md:text-base">{promise.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-neutral-text/60 md:text-sm">{promise.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Perforated divider */}
          <div className="my-7 border-t-2 border-dashed border-primary/15 sm:my-8" />

          {/* Certificate footer */}
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="font-black italic text-primary text-xl sm:text-2xl">{siteConfig.brandName}</p>
              <p className="text-[0.65rem] font-bold uppercase tracking-widest text-neutral-text/40 sm:text-xs">
                Authorized Guarantee
              </p>
            </div>

            <Link
              href="/terms"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary transition-colors hover:text-secondary"
            >
              See Full Return Policy
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
