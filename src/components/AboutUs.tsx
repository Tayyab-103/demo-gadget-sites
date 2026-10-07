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
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
    title: "Pure Pigment Chemistry",
    desc: "Uncompromising pigment loads delivering intense color vibrancy and museum-grade permanence.",
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
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    title: "Handcrafted Studio Tools",
    desc: "Precision balanced handles, seamless nickel ferrules, and resilient fine art bristles.",
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
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    title: "Archival Quality Standards",
    desc: "Acid-free cotton and Belgian linen primed for multi-generational exhibition longevity.",
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
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11.5 14.5 15 9" />
      </svg>
    ),
    title: "60-Day Studio Guarantee",
    desc: "Every tube, brush, and easel is backed by our 100% satisfaction commitment.",
  },
];

export default function AboutUs() {
  return (
    <section
      className="relative overflow-hidden bg-neutral-bg py-12 md:py-16"
      id="about"
    >
      {/* Background decorative elements */}
      <div className="pointer-events-none absolute right-0 top-0 h-125 w-125 -translate-y-1/2 translate-x-1/4 rounded-full bg-primary/3" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-100 w-100 -translate-x-1/4 translate-y-1/3 rounded-full bg-secondary/10" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center md:mb-20">
          <span className="eyebrow mb-6 justify-center">
            Our Atelier Heritage
          </span>

          <h2 className="mx-auto max-w-3xl text-3xl font-black uppercase leading-tight tracking-tight text-neutral-text md:text-5xl">
            Fine Artistry,{" "}
            <span className="text-secondary">
              Master Craftsmanship
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-neutral-text/70 md:text-base">
            At {siteConfig.brandName}, we believe that remarkable artwork begins with uncompromising materials. We curate and craft professional-grade paints, precision brushes, and archival surfaces for artists who demand excellence.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT — Visual Showcase */}
          <div className="relative flex items-center justify-center lg:mb-16 lg:mt-16">
            {/* Main Image */}
            <div className="group relative w-full max-w-110 aspect-square rounded-[2rem] overflow-hidden shadow-2xl border border-black/5">
              <Image
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=900&q=80"
                alt={`${siteConfig.brandName} painting studio atelier`}
                fill
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </div>

            {/* Floating Badge — Top Right */}
            <div
              className="animate-float absolute right-0 top-0 z-20 md:-right-2"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-secondary text-primary shadow-xl shadow-secondary/25 md:h-24 md:w-24">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>

                <span className="mt-1 text-[0.55rem] font-black uppercase tracking-wider">
                  Master
                </span>
              </div>
            </div>

            {/* Floating Chip — Bottom Left */}
            <div
              className="animate-float absolute bottom-4 left-0 z-20 md:-left-2"
              style={{ animationDelay: "1.6s" }}
            >
              <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white px-4 py-3 shadow-xl md:px-5 md:py-3.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/15">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="text-secondary"
                    aria-hidden="true"
                  >
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                  </svg>
                </div>

                <div>
                  <div className="text-xs font-bold text-primary">
                    Archival Longevity
                  </div>
                  <div className="text-[0.6rem] text-neutral-text/50">
                    100% Lightfast Assurance
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div>
            <p className="mb-10 text-sm leading-relaxed text-neutral-text/75 md:text-base">
              Our mission is to support every step of your artistic journey. Whether you are laying down your first underpainting, mixing custom glazes, crafting delicate miniatures, or framing gallery-ready canvases, our materials give you the consistency, vividness, and tactile control you need to create without limitation.
            </p>

            {/* Feature Grid */}
            <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="group/card relative rounded-2xl border border-black/5 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/5"
                >
                  {/* Icon */}
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/15 text-secondary transition-all duration-300 group-hover/card:bg-secondary group-hover/card:text-primary">
                    {item.icon}
                  </div>

                  <h3 className="mb-1.5 text-sm font-bold text-primary transition-colors duration-300">
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
                href="/#shop"
                className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-primary px-8 py-4 text-center text-xs font-bold uppercase tracking-widest text-primary-text shadow-lg shadow-primary/15 transition-all duration-300 hover:bg-secondary hover:text-secondary-text hover:shadow-secondary/20"
              >
                Explore Supplies
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-primary/15 bg-transparent px-8 py-3.5 text-center text-xs font-bold uppercase tracking-widest text-primary transition-all duration-300 hover:border-primary hover:bg-primary/5"
              >
                Our Studio Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}