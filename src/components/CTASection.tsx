"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32" id="cta">
      <Image
        src="/img/cta_garden_bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover -z-10"
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/30" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="max-w-xl text-white">
          <span className="eyebrow eyebrow-invert">Bundle &amp; Save</span>
          <h2 className="heading-serif text-4xl sm:text-5xl md:text-6xl mt-5 leading-[1.05]">
            Kit out the whole <em className="text-accent-light">season</em>.
          </h2>
          <p className="mt-5 text-sm sm:text-base text-white/80 leading-relaxed">
            Grab extras for the potting shed, the allotment, or a gardener friend — the more tools in your bundle, the less you pay for each one.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary-dark text-white text-sm font-semibold px-7 py-4 rounded-full transition-colors shadow-lg shadow-black/20"
            >
              Build Your Bundle <span aria-hidden>→</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white hover:text-primary backdrop-blur-sm border border-white/25 text-white text-sm font-semibold px-7 py-4 rounded-full transition-colors"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
