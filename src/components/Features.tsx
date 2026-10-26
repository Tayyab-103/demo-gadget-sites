import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/brandIcon";
import SectionHeading from "@/components/SectionHeading";

const icon = (d: React.ReactNode) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {d}
  </svg>
);

const features = [
  {
    title: "A short, tested list",
    text: "We carry a handful of tools we would hand to a friend — not a warehouse of look-alikes. Fewer products, clearer choices.",
    icon: icon(<><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></>),
  },
  {
    title: "Honest specs",
    text: "Material, size, range and compatibility are listed on every product page, so you know what fits before you order.",
    icon: icon(<><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" /><path d="m14.5 12.5 2-2" /><path d="m11.5 9.5 2-2" /><path d="m8.5 6.5 2-2" /><path d="m17.5 15.5 2-2" /></>),
  },
  {
    title: "Bundle pricing",
    text: "Stocking a van or a shop drawer? Buy two or more and the per-unit price drops automatically in the cart.",
    icon: icon(<><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></>),
  },
  {
    title: "Real people on the phone",
    text: `Questions about sizing or an order? Call ${siteConfig.phone} or email us and a person replies within one business day.`,
    icon: icon(<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />),
  },
];

export default function Features() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white" id="features">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="Why shop with us"
          title={<>Built for the bench, <span className="text-gradient">priced for the toolbox</span></>}
          text="No inflated list prices, no surprise fees at checkout. Just dependable hardware, free shipping and a guarantee that's written in plain English."
        />

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:auto-rows-[minmax(220px,auto)]">
          {/* Large image card */}
          <div className="md:col-span-2 lg:row-span-2 relative rounded-[2rem] overflow-hidden min-h-[360px] group">
            <img
              src="/img/web/cta.jpg"
              alt="Cordless drill resting on a weathered wooden workbench"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
              <span className="eyebrow eyebrow-light">Free shipping, every order</span>
              <h3 className="mt-4 text-2xl sm:text-3xl font-extrabold leading-tight max-w-md">
                {`Packed in 1-2 business days, at your door in ${siteConfig.shippingPeriod}.`}
              </h3>
              <p className="mt-3 text-sm text-white/80 max-w-md">
                {`Every order goes out by ${siteConfig.shippingCarrier} with a tracking number emailed the day it ships. No minimum spend.`}
              </p>
              <Link href="/shop" className="btn-white mt-6">Start Shopping</Link>
            </div>
          </div>

          {features.map((f, i) => (
            <div
              key={f.title}
              className={`card p-6 sm:p-7 flex flex-col transition-transform duration-300 hover:-translate-y-1 ${
                i === 0 ? "bg-brand-gradient-soft" : ""
              }`}
            >
              <span className="icon-tile w-12 h-12">{f.icon}</span>
              <h3 className="mt-5 text-lg font-bold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
