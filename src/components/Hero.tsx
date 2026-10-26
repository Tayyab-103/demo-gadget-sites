"use client";

import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const U = (id: string) => `https://images.unsplash.com/photo-${id}?w=1000&q=80`;

// General electrical imagery (no products) for the right-hand collage
const gallery = [
  { src: U("1621905251189-08b45d6a269e"), alt: "Electrician in a hard hat working on an electrical meter", caption: "On-site installs" },
  { src: U("1544724569-5f546fd6f2b5"), alt: "Distribution board fitted with rows of circuit breakers", caption: "Power distribution" },
  { src: U("1758101755915-462eddc23f57"), alt: "Electrician tightening terminals in a control panel", caption: "Panel & control work" },
];

const trustItems = [
  {
    title: `Free ${siteConfig.shippingCarrier} Shipping`,
    text: "On every order",
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
    title: "Ships in 1-2 Days",
    text: `Arrives in ${siteConfig.shippingPeriod} business days`,
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
  },
  {
    title: "60-Day Money-Back",
    text: "Hassle-free returns",
    icon: (
      <>
        <polyline points="1 4 1 10 7 10" />
        <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
      </>
    ),
  },
  {
    title: "Inspected Orders",
    text: "Checked before dispatch",
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11.5 14.5 15 9" />
      </>
    ),
  },
];

function PhotoTile({ photo, className = "", small = false }: { photo: (typeof gallery)[number]; className?: string; small?: boolean }) {
  return (
    <div className={`group relative overflow-hidden rounded-3xl shadow-lg ${className}`}>
      <img
        src={photo.src}
        alt={photo.alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent" />
      <span className={`absolute bottom-4 left-4 whitespace-nowrap rounded-full bg-white/90 px-3 py-1.5 ${small ? "hidden sm:block" : ""} text-[0.65rem] font-bold uppercase tracking-widest text-ink backdrop-blur`}>
        {photo.caption}
      </span>
    </div>
  );
}

export default function Hero() {
  const [tall, ...stacked] = gallery;

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background: soft orange glow + circuit dots + diagonal gradient slab */}
      <div className="bg-brand-gradient pointer-events-none absolute -right-32 top-0 hidden h-full w-[46%] -skew-x-12 opacity-[0.07] lg:block" />
      <div className="pointer-events-none absolute -left-40 -top-40 h-120 w-120 rounded-full bg-secondary/20 blur-3xl" />
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-50 mask-[radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />

      <div className="container-page relative pb-10 pt-12 md:pt-16 lg:pb-14 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Copy */}
          <div className="text-center lg:col-span-6 lg:text-left">
            <span className="eyebrow">Electrical Parts &amp; Equipment</span>

            <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.04] tracking-tight text-ink sm:text-6xl xl:text-7xl">
              Plug in.
              <br />
              Switch on.
              <br />
              <span className="text-gradient">Power up.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-ink/65 md:text-base lg:mx-0">
              Power strips, solar DC switches and rechargeable battery packs for workshops, installers and homes —
              inspected before they ship and priced in bundles that save more as you stock up.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Link href="/shop" className="btn-brand w-full sm:w-auto">
                Shop All Parts
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Photo collage */}
          <div className="relative lg:col-span-6">
            <div className="bg-brand-gradient pointer-events-none absolute -inset-4 rounded-[2.75rem] opacity-15 blur-2xl" />
            <div className="relative grid h-105 grid-cols-5 grid-rows-2 gap-3 sm:h-135 sm:gap-4">
              {tall && <PhotoTile photo={tall} className="col-span-3 row-span-2" />}
              {stacked.map((photo) => (
                <PhotoTile key={photo.src} photo={photo} className="col-span-2" small />
              ))}
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="card mt-12 grid grid-cols-2 gap-y-6 p-5 shadow-lg sm:p-6 lg:mt-16 lg:grid-cols-4">
          {trustItems.map((item, idx) => (
            <div
              key={item.title}
              className={`flex flex-col items-center gap-3 px-2 text-center sm:flex-row sm:text-left lg:px-5 ${
                idx % 2 === 1 ? "border-l border-line" : ""
              } ${idx === 2 ? "lg:border-l lg:border-line" : ""}`}
            >
              <span className="icon-chip h-11 w-11">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {item.icon}
                </svg>
              </span>
              <div>
                <div className="text-sm font-bold text-ink">{item.title}</div>
                <div className="text-xs text-ink/55">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
