"use client";

import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const featuresData = [
  {
    title: "Inspected Before It Ships",
    description: "Every power strip, switch and battery pack is checked for build quality and finish before it leaves our warehouse.",
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11.5 14.5 15 9" />
      </>
    ),
  },
  {
    title: "Fast, Free Delivery",
    description: `Orders leave within 1-2 business days and arrive by ${siteConfig.shippingCarrier} in ${siteConfig.shippingPeriod} business days — free.`,
    icon: (
      <>
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </>
    ),
  },
  {
    title: "Bundle Pricing",
    description: "Buy one or stock the truck — multi-packs bring the per-unit price down with no hidden fees.",
    icon: (
      <>
        <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82Z" />
        <circle cx="7" cy="7" r="1.2" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    title: "60-Day Money-Back",
    description: "Not the right part? Return it within 60 days for a refund to your original payment method.",
    icon: (
      <>
        <polyline points="1 4 1 10 7 10" />
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
      </>
    ),
  },
];

export default function Features() {
  return (
    <section className="relative bg-white py-16 md:py-24" id="features">
      <div className="container-page">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <span className="eyebrow">Why {siteConfig.brandName}</span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
            Built for the <span className="text-gradient">trade</span>, priced for everyone
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/60 md:text-base">
            Whether you&apos;re restocking a service van or finishing a weekend project, here&apos;s what comes with every order.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuresData.map((feature, idx) => (
            <div key={feature.title} className="card card-hover group relative overflow-hidden p-7">
              <span className="pointer-events-none absolute -right-2 -top-4 text-7xl font-extrabold text-primary/6">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className="icon-chip mb-6 h-13 w-13">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {feature.icon}
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-ink">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-ink/60">{feature.description}</p>
              <span className="bg-brand-gradient absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
