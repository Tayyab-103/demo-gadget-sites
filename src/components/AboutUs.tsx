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
    title: "Soft, Breathable Fabrics",
    desc: "Every fabric is tested for softness and breathability before it's cut and sewn into the collection.",
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
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Made for Every Day",
    desc: "Designed to move with your family, from school mornings to weekend adventures.",
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
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "No Shortcuts",
    desc: "Reinforced seams and quality-checked stitching — in every piece we ship.",
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
    title: "30-Day Easy Returns",
    desc: "Not the right fit? Send it back within 30 days, no questions asked.",
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

      <div className="pointer-events-none absolute bottom-0 left-0 h-100 w-100 -translate-x-1/4 translate-y-1/3 rounded-full bg-secondary/5" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 text-center md:mb-20">
          <span className="eyebrow mb-6 justify-center">
            Our Story
          </span>

          <h2 className="mx-auto max-w-3xl text-3xl font-black uppercase leading-tight tracking-tight text-neutral-text md:text-5xl">
            Everyday Clothing,{" "}
            <span className="text-secondary">
              Built for Real Families
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-neutral-text/60 md:text-base">
            At {siteConfig.brandName}, we believe soft, durable everyday
            clothing shouldn&apos;t require a designer budget. We quality-check
            every fabric and seam against our own standards, so it holds up to
            school runs, playgrounds, and every busy day after that.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT — Visual Showcase */}
          <div className="relative flex items-center justify-center lg:mb-16 lg:mt-32">
            {/* Main Image */}
            <div className="group relative w-full max-w-110 aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1519457851758-fa14f0ee13b1?w=900&q=80"
                alt={`${siteConfig.brandName} family wearing everyday clothing outdoors`}
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
              <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-secondary text-white shadow-xl shadow-secondary/25 md:h-24 md:w-24">
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>

                <span className="mt-1 text-[0.55rem] font-bold uppercase tracking-wider">
                  Trusted
                </span>
              </div>
            </div>

            {/* Floating Chip — Bottom Left */}
            <div
              className="animate-float absolute bottom-4 left-0 z-20 md:-left-2"
              style={{ animationDelay: "1.6s" }}
            >
              <div className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white px-4 py-3 shadow-xl md:px-5 md:py-3.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="text-primary"
                    aria-hidden="true"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </div>

                <div>
                  <div className="text-xs font-bold text-primary">
                    Built to Last
                  </div>

                  <div className="text-[0.6rem] text-neutral-text/50">
                    30-Day Returns Included
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Content */}
          <div>
            <p className="mb-10 text-sm leading-relaxed text-neutral-text/70 md:text-base">
              Our mission is simple: to make soft, well-made clothing accessible
              for every member of the family, whether you&apos;re restocking
              basics, dressing for a season, or shopping for a gift. Every piece
              is chosen with intention — because your family deserves clothes
              that actually hold up.
            </p>

            {/* Feature Grid */}
            <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="group/card relative rounded-2xl border border-black/5 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-lg hover:shadow-secondary/5"
                >
                  {/* Icon */}
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover/card:bg-secondary/15 group-hover/card:text-secondary">
                    {item.icon}
                  </div>

                  <h3 className="mb-1.5 text-sm font-bold text-primary transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-xs leading-relaxed text-neutral-text/[0.55]">
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