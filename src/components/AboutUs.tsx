"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const highlights = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11.5 14.5 15 9" />
      </svg>
    ),
    title: "Artisan Curation",
    desc: "We partner with local craftsmen using generational joinery and hand-weaving techniques to ensure every piece has a soul.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
        <path d="M12 6V12L16 14" />
      </svg>
    ),
    title: "Sustainable Abodes",
    desc: "Crafted with GOTS-certified organic cotton fabrics, FSC-certified solid oak, and natural non-toxic wood finishes.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Ergonomic Comfort",
    desc: "Meticulously scaled and tested to ensure deep seated comfort, optimal posture support, and relaxed home-styled luxury.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Lifetime Structure Warranty",
    desc: "Every solid wood joinery framework is built to endure and comes backed by our full lifetime warranty.",
  },
];

const stats = [
  { value: "15k+", label: "Spaces Adorned" },
  { value: "60-Day", label: "Comfort Trial" },
  { value: "Lifetime", label: "Warranty" },
];

export default function AboutUs() {
  return (
    <section
      className="relative overflow-hidden bg-neutral-bg py-12 md:py-16"
      id="about"
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute right-0 top-0 h-125 w-125 -translate-y-1/2 translate-x-1/4 rounded-full bg-primary/3" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-100 w-100 -translate-x-1/4 translate-y-1/3 rounded-full bg-secondary/5" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center md:mb-20">
          <span className="eyebrow mb-6 justify-center">Our Story</span>

          <h2 className="mx-auto max-w-3xl text-3xl font-black uppercase leading-tight tracking-tight text-neutral-text md:text-5xl">
            Artisanal Furnishings, Crafted{" "}
            <span className="text-secondary">for Cozy Living</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-neutral-text/60 md:text-base">
            At {siteConfig.brandName}, we believe home should be your sanctuary. We partner with master artisans to craft timeless, sustainable furnishings that bring comfort and natural warmth to your everyday living.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — Image */}
          <div className="relative mx-auto aspect-square w-full max-w-lg overflow-hidden rounded-[2.5rem] shadow-2xl lg:mx-0 lg:aspect-4/5">
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80"
              alt={`${siteConfig.brandName} home interior design`}
              fill
              sizes="(max-width: 1024px) 90vw, 520px"
              className="object-cover"
            />
          </div>

          {/* RIGHT — Content */}
          <div>
            {/* Highlight list */}
            <div className="mb-10 flex flex-col gap-6">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="mb-1 text-sm font-bold text-primary">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-neutral-text/60 md:text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stat strip */}
            <div className="mb-10 grid grid-cols-3 gap-4 border-y border-black/10 py-6">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-xl font-black text-primary md:text-2xl">{s.value}</div>
                  <div className="mt-1 text-[0.6rem] font-bold uppercase tracking-widest text-neutral-text/50">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#shop"
                className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-primary px-8 py-4 text-center text-xs font-bold uppercase tracking-widest text-primary-text shadow-lg shadow-primary/15 transition-all duration-300 hover:bg-secondary hover:text-secondary-text hover:shadow-secondary/20"
              >
                Explore Products
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-primary/15 bg-transparent px-8 py-3.5 text-center text-xs font-bold uppercase tracking-widest text-primary transition-all duration-300 hover:border-primary hover:bg-primary/5"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
