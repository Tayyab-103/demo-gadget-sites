"use client";

import { siteConfig } from "@/lib/brandIcon";
import Link from "next/link";

const steps = [
  {
    number: "01",
    label: "Trailhead",
    title: "Pick Your Gear",
    description:
      "Browse weighted vests, home strength kits and waterproof packs. Order a single unit or a multi-pack bundle for a lower price per unit.",
    image: "/img/products/product2-2.jpg",
    alt: "Resistance bands, dumbbells and suspension straps laid out on a gym floor",
    icon: (
      <>
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </>
    ),
  },
  {
    number: "02",
    label: "On The Way",
    title: `${siteConfig.shippingCarrier} To Your Door`,
    description: `Packed at our Austin, TX facility and shipped with ${siteConfig.shippingCarrier}. Expect it in ${siteConfig.shippingPeriod} business days, with tracking emailed as soon as it leaves.`,
    image: "/img/howitworks2.jpg",
    alt: "Training backpack on a gym floor in front of an athlete",
    icon: (
      <>
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </>
    ),
  },
  {
    number: "03",
    label: "Summit",
    title: `Test It For ${siteConfig.trialPeriod} Days`,
    description: `Put it to work in real sessions. If it isn't the right fit, contact our team within ${siteConfig.trialPeriod} days to arrange a return under our trial policy.`,
    image: "/img/products/sample_kettlebell.jpg",
    alt: "Athlete setting up for a barbell deadlift",
    icon: (
      <>
        <path d="M3 20h18L14.5 8l-3.5 6-2.5-3.5L3 20z" />
        <circle cx="17.5" cy="5" r="1.6" fill="currentColor" stroke="none" />
      </>
    ),
  },
];

// Winding trail through the three waypoint photos (centres at x = 200 / 600 / 1000)
const trailPath = "M0 70 C110 70 120 110 200 110 S440 168 600 168 S860 110 1000 110 S1140 70 1200 70";

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 sm:py-20 md:py-28 text-white" id="how-it-works">
      <div className="absolute inset-0 bg-topo" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <span className="eyebrow eyebrow-invert justify-center mb-3">How It Works</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-[1.05]">
            Three Stops To Your <span className="text-secondary">First Rep</span>
          </h2>
          <p className="mt-4 text-sm md:text-base leading-relaxed text-white/65">
            No memberships, no complicated ordering. Follow the trail from checkout to your first workout.
          </p>
        </div>

        <div className="relative">
          {/* Trail line — desktop */}
          <svg
            className="hidden md:block absolute left-0 top-0 h-[300px] w-full pointer-events-none"
            viewBox="0 0 1200 300"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            <path d={trailPath} stroke="currentColor" className="text-white/10" strokeWidth="10" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
            <path
              d={trailPath}
              stroke="currentColor"
              className="text-secondary"
              strokeWidth="2.5"
              strokeDasharray="2 12"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Trail line — mobile */}
          <div className="md:hidden absolute left-[27px] top-6 bottom-6 border-l-2 border-dashed border-secondary/60" aria-hidden="true" />

          <ol className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            {steps.map((step, idx) => (
              <li
                key={step.number}
                className={`group relative flex md:flex-col md:items-center md:text-center gap-5 md:gap-0 ${idx === 1 ? "md:mt-20" : "md:mt-5"}`}
              >
                {/* Waypoint photo */}
                <div className="relative flex-shrink-0">
                  <div className="relative h-14 w-14 md:h-44 md:w-44 rounded-full p-1 bg-primary ring-2 ring-secondary/70 transition-all duration-500 group-hover:ring-4 group-hover:ring-secondary group-hover:scale-105">
                    <div className="h-full w-full overflow-hidden rounded-full">
                      <img
                        src={step.image}
                        alt={step.alt}
                        className="hidden md:block h-full w-full object-cover transition-transform duration-700 group-hover:scale-115"
                      />
                      <span className="md:hidden flex h-full w-full items-center justify-center bg-secondary text-secondary-text">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          {step.icon}
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Number pin */}
                  <span className="hidden md:flex absolute -top-2 -right-2 h-12 w-12 items-center justify-center rounded-full bg-secondary text-sm font-black text-secondary-text shadow-lg shadow-black/30 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-12">
                    {step.number}
                  </span>
                  {/* Icon badge */}
                  <span className="hidden md:flex absolute -bottom-1 -left-1 h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-lg">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      {step.icon}
                    </svg>
                  </span>
                </div>

                {/* Copy card */}
                <div className="md:mt-8 flex-1 rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 backdrop-blur-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:border-secondary/60 group-hover:bg-white/[0.08]">
                  <span className="text-[0.62rem] font-black uppercase tracking-[0.25em] text-secondary">
                    Stop {step.number} · {step.label}
                  </span>
                  <h3 className="mt-2 text-lg sm:text-xl font-black uppercase tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/shop" className="btn-accent">
            Start At The Trailhead <span aria-hidden="true">→</span>
          </Link>
          <Link href="/terms" className="btn-ghost-light">
            Read Trial Terms
          </Link>
        </div>
      </div>
    </section>
  );
}
