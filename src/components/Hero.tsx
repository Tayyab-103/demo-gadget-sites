import React from "react";
import Link from "next/link";
import { siteConfig, brandShort } from "@/lib/brandIcon";
import HeroCarousel from "@/components/HeroCarousel";

const perks = [
  {
    title: "Free shipping",
    text: `${siteConfig.shippingCarrier} · ${siteConfig.shippingPeriod} business days`,
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
    title: `${siteConfig.trialPeriod}-day guarantee`,
    text: "Not right? Send it back",
    icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  },
  {
    title: "Secure checkout",
    text: "256-bit SSL encryption",
    icon: (
      <>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
    ),
  },
  {
    title: "Real support",
    text: siteConfig.phone,
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative overflow-hidden bg-brand-gradient text-primary-text">
        <div className="absolute inset-0 blueprint-grid-light pointer-events-none" />
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-48 right-0 w-[560px] h-[560px] rounded-full bg-secondary/40 blur-3xl pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 pt-14 sm:pt-20 lg:pt-24 pb-28 sm:pb-32 grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          <div className="lg:col-span-7">
            <span className="eyebrow eyebrow-light">{`${brandShort} · Tools & Hardware`}</span>

            <h1 className="mt-6 font-extrabold tracking-tight leading-[1.02] text-[2.7rem] sm:text-6xl lg:text-[4.5rem]">
              Build it right.
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">Fix it once.</span>
                <svg className="absolute -bottom-2 left-0 w-full h-4 text-secondary-light" viewBox="0 0 300 16" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M2 12 C 80 2, 220 2, 298 10" stroke="currentColor" strokeWidth="5" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="mt-7 text-base sm:text-lg text-white/80 leading-relaxed max-w-xl">
              Honest hand tools, testers and hardware for homeowners, DIYers and the trades — full specs up front, fair prices and free delivery on every order.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link href="/shop" className="btn-white">
                Browse the Shop
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-[0.85rem] text-[0.8rem] font-bold tracking-wide border-2 border-white/40 hover:bg-white/10 hover:border-white transition-all"
              >
                How We Pick Our Tools
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-2">
              {["Hand Tools", "Driver Bits", "Test & Measure", "Power & Wiring", "Home Repair"].map((tag) => (
                <span key={tag} className="px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[0.7rem] font-semibold tracking-wide">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <HeroCarousel />
          </div>
        </div>
      </div>

      {/* Perk strip overlapping the bottom edge of the gradient */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 -mt-16 sm:-mt-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 rounded-[1.75rem] bg-white shadow-[0_30px_60px_-30px_rgba(11,21,48,0.45)] border border-line overflow-hidden">
          {perks.map((p, i) => (
            <div
              key={p.title}
              className={`flex flex-col items-start sm:flex-row sm:items-center gap-3 sm:gap-4 p-4 sm:p-6 border-line ${i % 2 === 0 ? "border-r" : ""} ${
                i === 1 ? "lg:border-r" : ""
              } ${i < 2 ? "border-b lg:border-b-0" : ""}`}
            >
              <span className="icon-tile w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {p.icon}
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block text-[0.8rem] sm:text-sm font-bold text-ink">{p.title}</span>
                <span className="block text-[0.68rem] sm:text-xs text-muted [overflow-wrap:anywhere]">{p.text}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
