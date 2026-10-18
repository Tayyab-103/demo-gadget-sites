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
      <>
        <path d="M6 3h12l4 6-10 13L2 9z" />
        <path d="M2 9h20" />
      </>
    ),
    title: "Chosen for Their Glow",
    desc: "We select every pearl, dial and finish for warmth and shine, so each piece looks as good in person as it does online.",
  },
  {
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    title: "Inspected Before It Ships",
    desc: "Clasps, chains, crystals and movements are checked by hand before a piece is boxed for you.",
  },
  {
    icon: (
      <>
        <path d="M20 12v10H4V12" />
        <path d="M2 7h20v5H2z" />
        <path d="M12 22V7" />
      </>
    ),
    title: "Gift-Ready Every Time",
    desc: "Each order arrives nestled in a keepsake box, ready to give the moment it lands on your doorstep.",
  },
  {
    icon: <path d="M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5" />,
    title: `${siteConfig.trialPeriod}-Day Money-Back`,
    desc: `Not in love with it? Reach out within ${siteConfig.trialPeriod} days and we'll make it right with a refund.`,
  },
];

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-neutral-bg py-16 md:py-24" id="about">
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        {/* LEFT — Layered image composition */}
        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute -left-6 -top-6 h-40 w-40 rounded-[2rem] bg-primary md:h-56 md:w-56" aria-hidden="true" />
          <div className="dot-grid absolute -bottom-8 -right-4 h-36 w-36 opacity-80" aria-hidden="true" />

          <div className="group relative aspect-[4/5] w-[82%] overflow-hidden rounded-[2rem] shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=900&q=80"
              alt={`${siteConfig.brandName} pendant necklace, worn`}
              fill
              sizes="(max-width: 1024px) 80vw, 420px"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>

          <div className="absolute -bottom-6 right-0 aspect-square w-[46%] overflow-hidden rounded-[1.75rem] border-[6px] border-white shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=600&q=80"
              alt="Gold-tone watch with a sunburst dial"
              fill
              sizes="240px"
              className="object-cover"
            />
          </div>

          {/* Floating chip */}
          <div className="animate-float absolute right-2 top-8 z-20 flex items-center gap-3 rounded-2xl border border-black/5 bg-white px-4 py-3 shadow-xl">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-light text-ink">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7" />
              </svg>
            </span>
            <div>
              <div className="text-xs font-bold text-ink">Keepsake Packaging</div>
              <div className="text-[0.62rem] text-neutral-text/50">Included with every order</div>
            </div>
          </div>
        </div>

        {/* RIGHT — Story */}
        <div className="pt-6 lg:pt-0">
          <span className="eyebrow mb-5">Our Story</span>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink md:text-5xl">
            Everyday Luxury, <span className="marker">Made to Glow</span>
          </h2>

          <p className="mt-6 text-sm leading-relaxed text-neutral-text/65 md:text-base">
            {siteConfig.brandName} began with a simple idea: the pieces you reach for every day should feel just as
            special as the ones you save for big occasions. We curate a small, considered collection of jewelry,
            watches and clocks with warm golden tones, honest pricing and finishes that hold up to real life.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-neutral-text/65 md:text-base">
            Whether you&apos;re treating yourself, celebrating a milestone or searching for the perfect gift, every order is
            packed with care and shipped free to your door.
          </p>

          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group/card flex gap-4 rounded-2xl border border-black/5 bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-white hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white text-ink shadow-sm transition-colors duration-300 group-hover/card:bg-primary group-hover/card:text-primary-text">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {item.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-bold text-ink">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-neutral-text/55">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#shop"
              className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-primary px-8 py-4 text-center text-xs font-bold uppercase tracking-widest text-primary-text shadow-lg shadow-primary/30 transition-all duration-300 hover:bg-ink hover:text-white"
            >
              Explore The Collection
              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full border-2 border-ink/10 px-8 py-3.5 text-center text-xs font-bold uppercase tracking-widest text-ink transition-all duration-300 hover:border-primary hover:bg-accent-light"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
