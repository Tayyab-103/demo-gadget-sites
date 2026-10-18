"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const values = [
  { title: "Chosen by hand", text: "Every piece is picked for its texture, color, and how it feels at home." },
  { title: "Natural materials", text: "Oak, stoneware, linen, and soft knit yarns in warm, quiet tones." },
  { title: "Easy to live with", text: `Free ${siteConfig.shippingCarrier} delivery and ${siteConfig.trialPeriod}-day returns.` },
];

export default function AboutUs({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-surface relative overflow-hidden" id="about">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-14 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

        {/* Image collage */}
        <div className="lg:col-span-6 relative pb-16 sm:pb-20 pr-10 sm:pr-20">
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/img/brand/about.jpg"
              alt={`The ${siteConfig.brandName} team selecting fabrics and materials`}
              fill
              sizes="(max-width: 1024px) 100vw, 600px"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-[52%] aspect-square rounded-3xl overflow-hidden border-[6px] border-surface shadow-2xl">
            <Image
              src="/img/brand/about1.jpg"
              alt="Close-up of oak joinery and brass hardware"
              fill
              sizes="(max-width: 1024px) 50vw, 320px"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-6 left-4 sm:left-6 bg-primary text-primary-text rounded-2xl px-5 py-4 shadow-lg">
            <span className="block font-serif text-3xl leading-none">3</span>
            <span className="block text-[0.6rem] font-bold uppercase tracking-[0.16em] mt-1 text-primary-text/80">Signature pieces</span>
          </div>
        </div>

        {/* Copy */}
        <div className="lg:col-span-6 flex flex-col items-start">
          {showHeader && <span className="eyebrow mb-4">About Harbor</span>}
          <h2 className="font-serif font-medium text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-neutral-text">
            A small market for <span className="italic text-primary">quietly beautiful</span> homes.
          </h2>
          <p className="mt-6 text-sm sm:text-base text-neutral-text/70 leading-relaxed">
            {siteConfig.brandName}{" "}started with a simple idea: the pieces that make a home feel finished are rarely the
            big ones. It&apos;s the throw on the chair, the lamp that warms a corner at night, the tray that keeps the
            coffee table in order.
          </p>
          <p className="mt-4 text-sm sm:text-base text-neutral-text/70 leading-relaxed">
            So we keep our collection small and focused. Each piece is selected for natural materials, honest
            construction, and colors that work with the rooms you already have.
          </p>

          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            {values.map((v) => (
              <li key={v.title} className="bg-neutral-bg rounded-2xl p-5 border border-secondary/60">
                <span className="w-8 h-8 rounded-full bg-secondary text-secondary-text flex items-center justify-center text-sm mb-3">
                  &#10003;
                </span>
                <h3 className="font-serif text-lg text-neutral-text leading-tight">{v.title}</h3>
                <p className="mt-1.5 text-xs text-neutral-text/60 leading-relaxed">{v.text}</p>
              </li>
            ))}
          </ul>

          {showHeader && (
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-3 bg-primary text-primary-text hover:bg-primary-dark px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-[0.18em] transition-colors"
            >
              Read our story
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
