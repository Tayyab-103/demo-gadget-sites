"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const values = [
  {
    title: "A small, useful shelf",
    desc: "We'd rather sell three tools you'll use every week than thirty you'll forget in the shed.",
  },
  {
    title: "Tested in real soil",
    desc: "Every tool earns its place by digging, cutting and weeding in clay, sand and compost-rich beds.",
  },
  {
    title: "Honest, simple pricing",
    desc: "One-time purchases with no subscriptions — and bundle pricing that lowers the cost of every tool.",
  },
  {
    title: "Help when you need it",
    desc: `Real people answer the phone at ${siteConfig.phone} and reply to every email within one business day.`,
  },
];

export default function AboutUs() {
  return (
    <section className="bg-neutral-bg py-16 md:py-24" id="about">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo collage */}
          <div className="relative h-[420px] sm:h-[520px]">
            <div className="absolute left-0 top-0 w-[72%] h-[78%] rounded-[2rem] overflow-hidden shadow-xl">
              <Image
                src="/img/contact_workshop.jpg"
                alt="Garden tools hanging neatly in a potting shed"
                fill
                sizes="(min-width: 1024px) 35vw, 72vw"
                className="object-cover"
              />
            </div>
            <div className="absolute right-0 bottom-0 w-[55%] h-[55%] rounded-[2rem] overflow-hidden border-[6px] border-neutral-bg shadow-xl">
              <Image
                src="/img/newsletter_garden.jpg"
                alt="Pruners and trowel on a potting bench"
                fill
                sizes="(min-width: 1024px) 28vw, 55vw"
                className="object-cover"
              />
            </div>
            <div className="absolute left-4 bottom-6 sm:left-8 sm:bottom-10 bg-secondary text-white rounded-2xl px-5 py-4 shadow-xl max-w-[200px]">
              <span className="heading-serif text-3xl block leading-none">3</span>
              <span className="text-xs text-white/85 leading-snug block mt-1">essential hand tools for the whole growing season</span>
            </div>
          </div>

          {/* Story */}
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl text-primary mt-4 leading-tight">
              Made for people who <em className="text-secondary">love to grow</em>.
            </h2>
            <p className="mt-5 text-sm sm:text-base text-neutral-text/75 leading-relaxed">
              {siteConfig.brandName} began at a potting bench, with a drawer full of bent trowels and dull pruners. We wanted
              hand tools that simply worked — comfortable to hold, tough enough for real soil, and priced fairly.
            </p>
            <p className="mt-4 text-sm sm:text-base text-neutral-text/75 leading-relaxed">
              Today we keep a deliberately short collection: a hand trowel for planting, bypass pruners for shaping and
              harvesting, and a claw cultivator for weeding and soil care. Everything ships free with {siteConfig.shippingCarrier}.
            </p>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((v, idx) => (
                <li key={v.title} className="bg-surface rounded-2xl p-5 border border-black/5">
                  <span className="heading-serif text-secondary text-lg">0{idx + 1}</span>
                  <h3 className="mt-1 font-bold text-primary">{v.title}</h3>
                  <p className="mt-1.5 text-sm text-neutral-text/70 leading-relaxed">{v.desc}</p>
                </li>
              ))}
            </ul>

            <Link
              href="/shop"
              className="mt-8 inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white text-sm font-semibold px-7 py-4 rounded-full transition-colors"
            >
              Shop the Collection <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
