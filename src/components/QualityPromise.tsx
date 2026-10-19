"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const promises = [
  {
    title: "Food-safe stainless steel",
    desc: "Whisk wires, scale platform and shear blades are stainless steel that won't rust, stain or flavour your food.",
  },
  {
    title: "Built to be cleaned",
    desc: "The whisk and shears go on the dishwasher top rack; the shears come apart at the pivot for a thorough wash.",
  },
  {
    title: "Checked before it ships",
    desc: "Each order is opened, inspected and packed by hand so tools arrive straight, sharp and ready to use.",
  },
  {
    title: `${siteConfig.trialPeriod} days to decide`,
    desc: `Use it in your own kitchen. If it isn't right, contact us within ${siteConfig.trialPeriod} days of delivery for a refund.`,
  },
];

export default function QualityPromise() {
  return (
    <section className="py-20 md:py-28 bg-surface" id="quality">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <div className="lg:col-span-5 relative order-last lg:order-first">
          <div className="rounded-[2rem] overflow-hidden aspect-[4/5] bg-neutral-bg shadow-xl">
            <img
              src="/images/ourguarantee.jpg"
              alt="Home cook sifting flour into a mixing bowl"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="card absolute -bottom-6 right-4 sm:-right-6 p-5 max-w-[230px]">
            <div className="text-3xl font-extrabold text-ink">{siteConfig.trialPeriod}-day</div>
            <div className="text-sm text-muted mt-1">return window on every tool we sell</div>
          </div>
        </div>

        {/* Copy */}
        <div className="lg:col-span-7">
          <span className="eyebrow">Our promise</span>
          <h2 className="section-title mt-4 max-w-xl">Simple tools, chosen carefully and backed honestly</h2>
          <p className="mt-5 text-muted leading-relaxed max-w-xl">
            We&rsquo;d rather sell a few tools we trust than a wall of gadgets. Here&rsquo;s what you can expect from
            every {siteConfig.brandName} order.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
            {promises.map((item, idx) => (
              <div key={item.title} className="flex gap-4">
                <span className="w-9 h-9 rounded-full bg-neutral-bg border border-line text-ink text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="font-bold text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Link href="/shop" className="btn-primary mt-10">
            Browse the tools
          </Link>
        </div>
      </div>
    </section>
  );
}
