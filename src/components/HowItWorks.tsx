"use client";

import React from "react";
import Image from "next/image";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const steps = [
  {
    title: "Pick your tools",
    desc: "Choose a single tool or bundle up for the whole season. Every bundle tier lowers the price per tool.",
    image: "/img/how_it_works_1.jpg",
    alt: "Hand trowel, fork and cultivator laid out on burlap with potting soil",
  },
  {
    title: "Checked & packed",
    desc: "Each order is inspected for fit and finish, then packed carefully so it arrives ready for the garden.",
    image: "/img/how_it_works_2.jpg",
    alt: "Craftsman finishing a hardwood piece on a lathe",
  },
  {
    title: "Get growing",
    desc: `${siteConfig.shippingCarrier} delivers in ${siteConfig.shippingPeriod} business days — then you have ${siteConfig.trialPeriod} days to put it to work in your own beds.`,
    image: "/img/how_it_works_3.jpg",
    alt: "Trowel and pruners on a wooden table with herbs and seed packets",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-surface py-16 md:py-24" id="how-it-works">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10 md:mb-14">
          <div className="max-w-xl">
            <span className="eyebrow">How It Works</span>
            <h2 className="heading-serif text-3xl sm:text-4xl md:text-5xl text-primary mt-4 leading-tight">
              From our shelf to <em className="text-secondary">your soil</em>.
            </h2>
          </div>
          <p className="text-sm text-neutral-text/70 max-w-sm leading-relaxed">
            Three simple steps, free shipping, and a real person on the phone if you ever need a hand.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, idx) => (
            <li key={step.title} className="group relative">
              <div className="relative aspect-[4/3] md:aspect-[4/5] rounded-[1.75rem] overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 w-12 h-12 rounded-full bg-neutral-bg text-primary heading-serif text-xl flex items-center justify-center shadow-md">
                  {idx + 1}
                </span>
              </div>

              <div className="pt-5 pr-2">
                <h3 className="text-xl font-bold text-primary tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm text-neutral-text/70 leading-relaxed">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
