import React from "react";
import { siteConfig } from "@/lib/brand";
import SectionHeading from "@/components/SectionHeading";

const iconProps = {
  className: "w-6 h-6",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const features = [
  {
    title: `Free ${siteConfig.shippingCarrier} shipping`,
    description: `Orders leave our warehouse quickly and arrive in ${siteConfig.shippingPeriod} business days, with tracking sent to your inbox.`,
    tone: "primary",
    icon: (
      <svg {...iconProps}>
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.24-4.05a1 1 0 0 0-.78-.38H14v10" />
        <circle cx="17" cy="18.5" r="2.5" />
        <circle cx="6.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: `${siteConfig.trialPeriod}-day happiness guarantee`,
    description: `Not the right fit for your pet? Reach out within ${siteConfig.trialPeriod} days of delivery and we'll make it right.`,
    tone: "secondary",
    icon: (
      <svg {...iconProps}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Bundle pricing built in",
    description: "Pick a 2 to 8-pack on any product and the per-item price drops automatically at checkout.",
    tone: "primary",
    icon: (
      <svg {...iconProps}>
        <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
  {
    title: "Real people on support",
    description: `Questions about sizing or an order? Call ${siteConfig.phone} or email us — a real team member will answer.`,
    tone: "secondary",
    icon: (
      <svg {...iconProps}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 9h8M8 13h5" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={`Why ${siteConfig.brandName.split(" ").slice(0, 2).join(" ")}`}
          title={<>Little things that make <span className="text-gradient">shopping easy</span></>}
          className="mb-10 sm:mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className={`group relative rounded-[1.75rem] p-6 sm:p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                f.tone === "primary"
                  ? "bg-primary-soft border-primary/30 hover:shadow-primary/20"
                  : "bg-secondary-soft border-secondary/40 hover:shadow-secondary/25"
              }`}
            >
              <span
                className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform ${
                  f.tone === "primary" ? "text-primary-deep" : "text-secondary-deep"
                }`}
              >
                {f.icon}
              </span>
              <h3 className="font-display text-xl font-semibold text-ink mb-2 leading-snug">{f.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
