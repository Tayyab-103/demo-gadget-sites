"use client";

import React from "react";
import Link from "next/link";

const promises = [
  {
    title: "Quality-Checked Stitching",
    desc: "Every piece is hand-inspected for seams, fabric weight, and finish before it ships, so it holds up to daily wear.",
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11.5 14.5 15 9" />
      </>
    ),
  },
  {
    title: "30-Day Easy Returns",
    desc: "Not the right fit or feel? Send it back within 30 days — no fine print, no hidden exclusions.",
    icon: (
      <>
        <polyline points="1 4 1 10 7 10" />
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
      </>
    ),
  },
  {
    title: "Responsibly Sourced Fabrics",
    desc: "We partner with vetted mills using quality-checked cottons, fleece, and blends in every piece.",
    icon: (
      <>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </>
    ),
  },
];

export default function QualityPromise() {
  return (
    <section id="quality-promise" className="relative overflow-hidden bg-primary py-20 md:py-28">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-100 w-100 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-6 text-center">
        <span className="eyebrow eyebrow-invert justify-center mb-6">Our Guarantee</span>
        <h2 className="text-4xl font-black uppercase leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl">
          The Premium Quality <span className="text-secondary">You Deserve</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
          We understand how much clothes your family wears every day have to hold up to.
          That&apos;s why we maintain strict, end-to-end quality checks across every piece we source and ship.
        </p>
      </div>

      {/* Seal + promise band */}
      <div className="relative z-10 mx-auto mt-14 w-full max-w-5xl px-6 md:mt-16">
        {/* Floating guarantee seal */}
        <div className="relative z-20 -mb-13 flex justify-center md:-mb-16">
          <div className="relative flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-text shadow-2xl shadow-secondary/30 md:h-32 md:w-32">
            <div className="absolute inset-1.5 rounded-full border-2 border-dashed border-secondary-text/25 md:inset-2" />
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11.5 14.5 15 9" />
              </svg>
              <span className="mt-1 text-[0.5rem] font-black uppercase leading-none tracking-wider md:text-[0.6rem]">
                100% Guaranteed
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 rounded-[2rem] border border-white/10 bg-white/5 px-6 pb-10 pt-16 backdrop-blur-sm sm:grid-cols-3 sm:gap-6 md:px-10 md:pb-14 md:pt-20">
          {promises.map((promise) => (
            <div
              key={promise.title}
              className="group relative flex flex-col items-center border-white/10 px-2 text-center sm:border-l sm:first:border-l-0"
            >
              <div className="mb-5 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-secondary transition-all duration-300 group-hover:bg-secondary group-hover:text-secondary-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {promise.icon}
                </svg>
              </div>
              <h3 className="mb-2.5 text-base font-bold text-white md:text-lg">{promise.title}</h3>
              <p className="text-xs leading-relaxed text-white/55 md:text-sm">{promise.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/terms"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/60 transition-colors hover:text-secondary"
          >
            See Full Return Policy
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
