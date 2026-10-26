import React from "react";
import SectionHeading from "@/components/SectionHeading";

const reviews = [
  {
    quote: "The magnetic bits actually hold the screw. I keep a set in the truck and another in the garage now.",
    name: "Marcus T.",
    role: "Handyman",
    product: "Magnetic Screwdriver Bits",
  },
  {
    quote: "Our doorbell was too far from an outlet. The 20 ft cable reached with room to spare and the camera hasn't dropped once.",
    name: "Jenna R.",
    role: "Homeowner",
    product: "Doorbell Power Cable",
  },
  {
    quote: "Easy to read display and the leads feel solid. Perfect for checking outlets and batteries around the house.",
    name: "Daniel K.",
    role: "DIY renovator",
    product: "Digital Multimeter",
  },
  {
    quote: "Ordered on Monday, tracking number the next morning, delivered that week. Exactly as described.",
    name: "Priya S.",
    role: "Property manager",
    product: "Bundle order",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeading
          eyebrow="From our customers"
          title={<>Straight from the <span className="text-gradient">job site</span></>}
          text="A few words from the DIYers, tradespeople and homeowners who keep our tools within reach."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              className={`card p-6 flex flex-col ${i % 2 === 1 ? "lg:translate-y-8" : ""}`}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" className="text-secondary" fill="currentColor" aria-hidden="true">
                <path d="M9.6 5C5.9 6.4 3.5 9.6 3.5 13.6V19h6.3v-6.3H6.6c0-2.5 1.4-4.6 3.9-5.7L9.6 5zm10.4 0c-3.7 1.4-6.1 4.6-6.1 8.6V19h6.3v-6.3H17c0-2.5 1.4-4.6 3.9-5.7L20 5z" />
              </svg>
              <blockquote className="mt-4 text-[0.92rem] text-ink leading-relaxed flex-1">{r.quote}</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-line flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-brand-gradient text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {r.name.charAt(0)}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-bold text-ink">{r.name}</span>
                  <span className="block text-[0.7rem] text-faint leading-snug">{`${r.role} · ${r.product}`}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
