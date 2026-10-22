"use client";

import { products, siteConfig } from "@/lib/brandIcon";
import Link from "next/link";

const stats = [
  { value: String(products.length), label: "Focused Products" },
  { value: siteConfig.shippingCarrier, label: "Tracked Shipping" },
  { value: `${siteConfig.shippingPeriod}`, label: "Day Delivery" },
  { value: `${siteConfig.trialPeriod}-Day`, label: "Trial Period" },
];

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 md:py-24" id="about">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Photo mosaic */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="grid grid-cols-5 grid-rows-6 gap-3 sm:gap-4 h-[420px] sm:h-[520px]">
              <div className="col-span-3 row-span-6 relative overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="/img/howitworks3.jpg"
                  alt="Athlete in a weighted vest training with a dumbbell"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="col-span-2 row-span-3 relative overflow-hidden rounded-3xl shadow-lg">
                <img
                  src="/img/products/sample_gym.jpg"
                  alt="Bright training space with weights and bikes"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="col-span-2 row-span-3 relative overflow-hidden rounded-3xl bg-primary p-5 flex flex-col justify-end text-white">
                <div className="absolute inset-0 bg-topo" aria-hidden="true" />
                <span className="relative text-4xl sm:text-5xl font-black text-secondary leading-none">TX</span>
                <span className="relative mt-2 text-[0.65rem] sm:text-xs font-bold uppercase tracking-widest text-white/80">
                  Packed &amp; shipped from Austin
                </span>
              </div>
            </div>
          </div>

          {/* Narrative */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <span className="eyebrow mb-4">Our Story</span>

            <h2 className="mb-6 text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-[1.05] tracking-tight text-primary">
              Made For People Who <span className="text-secondary">Train Outside The Lines</span>
            </h2>

            <p className="mb-5 text-sm leading-relaxed text-muted md:text-base">
              {`${siteConfig.brandName} started with a simple frustration: most training gear is built for the showroom, not the trail, the garage or the back of a car. We wanted equipment that handles mud, rain and real use without a premium-brand price tag.`}
            </p>
            <p className="mb-8 text-sm leading-relaxed text-muted md:text-base">
              {`So we keep our lineup intentionally small — a weighted vest, a home strength kit and a waterproof gear pack — and focus on getting each one right. Every order ships from Austin, TX with ${siteConfig.shippingCarrier}, and every purchase comes with a ${siteConfig.trialPeriod}-day trial period.`}
            </p>

            {/* Stat strip */}
            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-line bg-surface p-4 text-center">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-xl md:text-2xl font-black text-primary">{stat.value}</dd>
                  <dd className="mt-1 text-[0.6rem] font-bold uppercase tracking-widest text-muted">{stat.label}</dd>
                </div>
              ))}
            </dl>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/shop" className="btn-primary">
                Shop The Gear <span aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className="btn-outline">
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
