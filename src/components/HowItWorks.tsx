"use client";

import React from "react";
import { siteConfig, trialDays } from "@/lib/brandIcon";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    step: "01",
    title: "Pick your kit",
    desc: "Choose a baselayer, hoodie or socks, then pick a single piece or a bundle of up to eight. Bigger packs lower the price per item.",
    image: "/img/howitworks1.jpg",
    alt: "Athlete in a dark hoodie resting between sets in the gym",
  },
  {
    step: "02",
    title: "We pack & ship",
    desc: `Orders are packed within 1-2 business days and sent free with ${siteConfig.shippingCarrier}. Expect delivery in ${siteConfig.shippingPeriod} business days, with tracking by email.`,
    image: "/img/howitworks2.jpg",
    alt: "Player pulling up the sleeve of a black compression top",
  },
  {
    step: "03",
    title: "Train in it",
    desc: `Wear it through real sessions. If the fit or feel isn't right, contact us within ${trialDays} days of delivery to arrange a return.`,
    image: "/img/howitworks3.jpg",
    alt: "Volleyball players reaching for the ball outdoors",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white" id="how-it-works">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              From cart to <span className="hl">court</span> in three steps
            </>
          }
          subtitle={`Simple ordering, free ${siteConfig.shippingCarrier} delivery and a ${trialDays}-day return window.`}
        />

        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative">
          {steps.map((item, i) => (
            <li key={item.step} className="group relative flex flex-col">
              <div className="relative aspect-[4/3.4] overflow-hidden rounded-[1.5rem] bg-mist">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/10 to-transparent" />
                <span className="absolute bottom-4 left-5 text-6xl sm:text-7xl font-black text-secondary leading-none tracking-tighter">
                  {item.step}
                </span>
              </div>

              <div className="pt-6 pr-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-black uppercase tracking-tight text-ink">{item.title}</h3>
                  {i < steps.length - 1 && <span className="hidden md:block flex-1 h-px bg-line" aria-hidden="true" />}
                </div>
                <p className="mt-2.5 text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
