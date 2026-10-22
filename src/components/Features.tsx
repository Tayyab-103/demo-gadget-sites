"use client";

import { siteConfig } from "@/lib/brandIcon";

const featuresData = [
  {
    title: "Rugged Materials",
    description: "Heavy-duty nylon, coated waterproof shells and solid hardware chosen to handle dirt, rain and daily use.",
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    title: "Adjustable Fit",
    description: "Wraparound straps, padded shoulders and sternum clips let you dial in a secure, comfortable fit.",
    icon: (
      <>
        <line x1="4" y1="21" x2="4" y2="14" />
        <line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" />
        <line x1="20" y1="12" x2="20" y2="3" />
        <line x1="1" y1="14" x2="7" y2="14" />
        <line x1="9" y1="8" x2="15" y2="8" />
        <line x1="17" y1="16" x2="23" y2="16" />
      </>
    ),
  },
  {
    title: "Weather Ready",
    description: "Roll-top closures and water-resistant fabrics keep your essentials protected when the forecast turns.",
    icon: <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />,
  },
  {
    title: `${siteConfig.trialPeriod}-Day Trial`,
    description: `Train with your gear for ${siteConfig.trialPeriod} days. Not the right fit? Contact us to arrange a return under our trial terms.`,
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
    <section className="py-16 sm:py-20 md:py-24 bg-surface" id="features">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14 text-center">
          <span className="eyebrow justify-center mb-3">What We Build For</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary leading-[1.05]">
            Simple Gear, <span className="text-secondary">Done Right</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base leading-relaxed text-muted">
            {`Four things every ${siteConfig.brandName} product has to deliver before it makes the lineup.`}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuresData.map((feature, idx) => (
            <div
              key={feature.title}
              className="card relative p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/50"
            >
              <span className="absolute top-5 right-6 text-3xl font-black text-primary/8">{String(idx + 1).padStart(2, "0")}</span>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-secondary-text shadow-md shadow-secondary/30">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {feature.icon}
                </svg>
              </div>
              <h3 className="mb-2 text-base font-black text-primary uppercase tracking-tight">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
