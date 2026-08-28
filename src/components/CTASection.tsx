"use client";

import React from "react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-12 md:py-16 bg-neutral-bg" id="cta">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="relative grid grid-cols-1 overflow-hidden rounded-[2.5rem] shadow-2xl md:grid-cols-2">
          {/* Left — Image */}
          <div className="relative min-h-80 md:min-h-120">
            <img
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&q=80"
              alt="Electrician on the job wearing safety gear"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/0 to-transparent md:bg-gradient-to-r" />

            {/* Floating stat badge */}
            <div className="absolute bottom-6 left-6 flex items-center gap-4 rounded-2xl border border-black/5 bg-white px-5 py-4 shadow-xl">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
                  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
                ].map((src) => (
                  <img key={src} src={src} alt="" aria-hidden="true" className="h-8 w-8 flex-shrink-0 rounded-full border-2 border-white object-cover" />
                ))}
              </div>
              <div>
                <div className="text-sm font-black text-primary">40,000+</div>
                <div className="text-[0.62rem] font-bold uppercase tracking-widest text-neutral-text/50">Orders Shipped</div>
              </div>
            </div>
          </div>

          {/* Right — Content panel */}
          <div className="relative flex flex-col justify-center bg-secondary px-8 py-12 text-secondary-text sm:px-12 md:px-14 md:py-16">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-secondary-text/5 blur-3xl" />

            <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-secondary-text/20 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-widest">
              Limited Time Offer
            </span>

            <h2 className="mb-6 text-3xl font-black uppercase leading-[1.1] tracking-tight sm:text-4xl md:text-5xl">
              Ready to Wire Your Next Project?
            </h2>

            <p className="mb-9 max-w-md text-sm leading-relaxed text-secondary-text/75 md:text-base">
              Join thousands of electricians and contractors who&apos;ve restocked the truck with us. Bundle up and save on your first order today.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#shop"
                className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-primary px-9 py-4 text-center text-xs font-bold uppercase tracking-widest text-primary-text shadow-lg transition-all duration-300 hover:brightness-110"
              >
                Shop &amp; Save
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-secondary-text/25 px-9 py-3.5 text-center text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:border-secondary-text hover:bg-secondary-text/10"
              >
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
