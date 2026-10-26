"use client";

import Image from "next/image";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const stats = [
  { value: "1-2 Days", label: "To Ship" },
  { value: `${siteConfig.shippingPeriod} Days`, label: `${siteConfig.shippingCarrier} Delivery` },
  { value: "60-Day", label: "Money-Back" },
  { value: "24 Hr", label: "Email Replies" },
];

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24" id="about">
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-10">
          {/* LEFT — Narrative */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="eyebrow">Who We Are</span>

            <h2 className="mb-6 mt-5 text-3xl font-extrabold leading-[1.1] tracking-tight text-ink md:text-5xl">
              Electrical parts, <span className="text-gradient">without the runaround</span>
            </h2>

            <p className="mb-6 text-sm leading-relaxed text-ink/65 md:text-base">
              {`${siteConfig.brandName} started with a simple idea: the power strips, switches and batteries
              people rely on every day should be easy to order, fairly priced and on the way
              within a day or two. We inspect every order before it ships, so what arrives is ready to install.`}
            </p>

            <p className="mb-10 text-sm leading-relaxed text-ink/65 md:text-base">
              Whether you&apos;re restocking a service van, wiring a remodel or
              tackling a weekend project, we keep the catalog focused on parts
              that do their job well — and back every order with a 60-day
              money-back guarantee.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/shop"
                className="btn-brand group"
              >
                Explore Products
                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </Link>

              <Link
                href="/contact"
                className="btn-outline"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* RIGHT — Photo mosaic + stats */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              <div className="group relative row-span-2 overflow-hidden rounded-4xl shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&q=80"
                  alt="Electrician in a hard hat working on an electrical meter"
                  fill
                  sizes="(max-width: 1024px) 50vw, 340px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="group relative aspect-square overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1758101755915-462eddc23f57?w=700&q=80"
                  alt="Electrician tightening terminals in a distribution panel"
                  fill
                  sizes="(max-width: 1024px) 50vw, 320px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="group relative aspect-square overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=700&q=80"
                  alt="Distribution board fitted with circuit breakers"
                  fill
                  sizes="(max-width: 1024px) 50vw, 320px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </div>

            {/* Stat strip */}
            <div className="mt-5 grid grid-cols-2 gap-4 rounded-3xl border border-line bg-surface p-6 sm:grid-cols-4 md:gap-6 md:p-8">
              {stats.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`text-center sm:border-l sm:border-line sm:first:border-l-0 ${idx >= 2 ? "border-t border-line pt-4 sm:border-t-0 sm:pt-0" : ""}`}
                >
                  <div className="text-gradient text-xl font-extrabold md:text-2xl">{stat.value}</div>
                  <div className="mt-1 text-[0.6rem] font-bold uppercase tracking-widest text-ink/50 md:text-[0.65rem]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
