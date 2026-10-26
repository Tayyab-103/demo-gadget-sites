"use client";

import React from "react";
import { siteConfig, trialDays } from "@/lib/brandIcon";

const icons = {
  pen: (
    <path d="M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586M11 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
  ),
  book: <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5v15zM4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5" />,
  gift: <path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />,
  truck: <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM18.5 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />,
  shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
};

const Icon = ({ d }: { d: React.ReactNode }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d}
  </svg>
);

export default function Features() {
  return (
    <section className="py-20 sm:py-24 md:py-28 bg-surface" id="features">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow mb-5">Why shop with us</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.1]">
            Small details, <span className="hl">big difference</span>
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-5">
          {/* Large photo tile */}
          <div className="relative md:col-span-3 md:row-span-2 min-h-[340px] overflow-hidden rounded-[1.75rem] bg-ink">
            <img src="/img/desk/standard-2.jpg" alt="Open notebooks with pens ready for writing" className="absolute inset-0 h-full w-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
            <div className="absolute bottom-0 p-7 sm:p-9 text-paper">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-primary-text">
                <Icon d={icons.book} />
              </span>
              <h3 className="mt-4 font-display text-2xl sm:text-3xl font-bold">Paper that&apos;s a joy to write on</h3>
              <p className="mt-2 max-w-sm text-sm text-paper/75 leading-relaxed">
                Smooth pages for lists, notes and sketches — with ballpoint, gel, pencil or fountain pen.
              </p>
            </div>
          </div>

          <div className="md:col-span-3 rounded-[1.75rem] bg-brand-gradient p-7 text-primary-text">
            <Icon d={icons.pen} />
            <h3 className="mt-4 font-display text-xl font-bold">Pens that glide</h3>
            <p className="mt-2 text-sm leading-relaxed opacity-80">
              A refillable fountain pen with bottled ink — less waste, more character, and a smoother line than your average ballpoint.
            </p>
          </div>

          <div className="md:col-span-3 card p-7">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sun text-ink">
              <Icon d={icons.gift} />
            </span>
            <h3 className="mt-4 font-display text-xl font-bold text-ink">Gift-ready sets</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Desk sets arrive in their own presentation case — perfect for new jobs, graduations and thank-yous.
            </p>
          </div>

          <div className="md:col-span-3 card p-7 flex gap-5 items-start">
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-ink text-primary">
              <Icon d={icons.truck} />
            </span>
            <div>
              <h3 className="font-display text-xl font-bold text-ink">Tracked delivery</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {`Shipped with ${siteConfig.shippingCarrier} and delivered in ${siteConfig.shippingPeriod} business days, with tracking emailed to you.`}
              </p>
            </div>
          </div>

          <div className="md:col-span-3 card p-7 flex gap-5 items-start">
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-ink text-primary">
              <Icon d={icons.shield} />
            </span>
            <div>
              <h3 className="font-display text-xl font-bold text-ink">{`${trialDays}-day trial`}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Try your supplies at your own desk. If they&apos;re not right, our team will help you sort it out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
