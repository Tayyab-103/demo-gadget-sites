"use client";

import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const steps = ["Choose your parts & pack size", "Check out securely", `Track it to your door via ${siteConfig.shippingCarrier}`];

export default function CTASection() {
  return (
    <section className="bg-white py-16 md:py-24" id="cta">
      <div className="container-page">
        <div className="card grid grid-cols-1 overflow-hidden rounded-[2.5rem] shadow-xl md:grid-cols-2">
          {/* Image */}
          <div className="relative min-h-80 md:min-h-120">
            <img
              src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&q=80"
              alt="Electrician in safety gear working on an electrical meter"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="bg-brand-gradient absolute inset-0 opacity-25 mix-blend-multiply" />

            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-xl backdrop-blur sm:right-auto">
              <span className="icon-chip h-10 w-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
                </svg>
              </span>
              <div>
                <div className="text-sm font-bold text-ink">Ships in 1-2 business days</div>
                <div className="text-[0.7rem] text-ink/55">{`Free ${siteConfig.shippingCarrier} delivery on every order`}</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative flex flex-col justify-center overflow-hidden px-7 py-12 sm:px-12 md:px-14 md:py-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />

            <span className="eyebrow w-fit">Ready When You Are</span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl md:text-[2.75rem]">
              Get your next project <span className="text-gradient">powered up</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink/60 md:text-base">
              Stock up on power strips, switches and batteries in a few clicks — and save more with every multi-pack.
            </p>

            <ol className="mt-7 space-y-3">
              {steps.map((step, idx) => (
                <li key={step} className="flex items-center gap-3 text-sm font-medium text-ink/80">
                  <span className="bg-brand-gradient flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white">
                    {idx + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/shop" className="btn-brand">
                Shop Now
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/contact" className="btn-outline">
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
