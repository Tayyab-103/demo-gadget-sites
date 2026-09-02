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
        width="22"
        height="22"
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
    title: "Acoustic Tone Integrity",
    desc: "Every capo and tuner is calibrated to preserve the natural harmonic resonance and sustain of your instrument.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
    title: "Low-Noise Signal Purity",
    desc: "Oxygen-free copper conductors and dual-braided shielding guarantee zero handling hum and crystal clarity.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" />
      </svg>
    ),
    title: "Stage & Studio Durability",
    desc: "Heavy-duty zinc-brass alloys and braided tweed jackets built to survive rigorous touring and sessions.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
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
    title: "1-Year Workshop Warranty",
    desc: "All instruments and accessories carry a comprehensive 1-year warranty against any manufacturing defect.",
  },
];

export default function AboutUs() {
  return (
    <section
      className="relative overflow-hidden bg-neutral-bg py-12 md:py-20"
      id="about"
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute right-0 top-0 h-125 w-125 -translate-y-1/2 translate-x-1/4 rounded-full bg-primary/4" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-100 w-100 -translate-x-1/4 translate-y-1/3 rounded-full bg-secondary/8" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — Visual Showcase */}
          <div className="relative flex items-center justify-center">
            <div className="group relative w-full max-w-[480px] aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border border-black/5 bg-white">
              <Image
                src="/img/about_workshop.jpg"
                alt={`${siteConfig.brandName} artisan luthier bench`}
                fill
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary block">Austin, Texas Workshop</span>
                <span className="text-sm font-black">Crafting Tools for Songwriters &amp; Performers</span>
              </div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div>
            <p className="mb-8 text-sm leading-relaxed text-neutral-text/75 md:text-base">
              Founded on the belief that musicians deserve hardware built with the same reverence as handcrafted instruments, {siteConfig.brandName} merges vintage metallurgical aesthetics with modern acoustic physics. Whether in intimate songwriting sessions or high-volume tour stages, our gear stays true.
            </p>

            {/* Feature Grid */}
            <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="group/card relative rounded-2xl border border-black/5 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-lg"
                >
                  <div className="mb-3.5 flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-all duration-300 group-hover/card:bg-secondary group-hover/card:text-primary">
                    {item.icon}
                  </div>

                  <h3 className="mb-1 text-sm font-bold text-primary">
                    {item.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-neutral-text/60">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-primary px-8 py-3.5 text-center text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-primary/15 transition-all duration-300 hover:bg-secondary hover:text-primary"
              >
                Explore Products
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-primary/15 bg-transparent px-8 py-3 text-center text-xs font-bold uppercase tracking-widest text-primary transition-all duration-300 hover:border-primary hover:bg-primary/5"
              >
                Contact Workshop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}