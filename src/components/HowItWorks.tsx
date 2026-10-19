"use client";

import React from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const steps = [
  {
    step: "01",
    title: "Pick your tools",
    desc: "Choose a single tool or a multi-pack for gifts and spare drawers. Savings on multi-packs are shown before you check out.",
    image: "/hero-kitchen.jpg",
    alt: "Kitchen island set with a digital scale, kitchen shears and fresh herbs",
  },
  {
    step: "02",
    title: "We inspect & pack",
    desc: `Your order is checked by hand, packed with care and handed to ${siteConfig.shippingCarrier} with tracking sent to your inbox.`,
    image: "/images/how-it-works-packaging.jpg",
    alt: "Kitchen tools being packed into a gift box",
  },
  {
    step: "03",
    title: "Cook with it",
    desc: `It arrives in ${siteConfig.shippingPeriod} business days. You then have ${siteConfig.trialPeriod} days to make sure it's right for your kitchen.`,
    image: "/images/how-it-works-mastery.jpg",
    alt: "Whisking butter and sugar in a glass mixing bowl",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-neutral-bg" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="eyebrow">How it works</span>
            <h2 className="section-title mt-4">From our shelf to your stovetop</h2>
          </div>
          <p className="text-sm text-muted max-w-sm leading-relaxed">
            No subscriptions, no surprises &mdash; a one-time order, free shipping and a clear return window.
          </p>
        </div>

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item) => (
            <li key={item.step} className="group card overflow-hidden flex flex-col">
              <div className="aspect-[16/11] overflow-hidden bg-neutral-bg">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-primary text-primary-text text-xs font-bold px-3 py-1">Step {item.step}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
