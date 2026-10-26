import React from "react";
import { siteConfig } from "@/lib/brandIcon";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    title: "Choose your tool",
    text: "Pick a product and a bundle size. Specs, materials and compatibility are listed up front so there are no surprises.",
  },
  {
    title: "Checkout securely",
    text: "Pay over a 256-bit SSL-encrypted connection. You get an order confirmation email right away.",
  },
  {
    title: "We pack & ship",
    text: `Your order is packed within 1-2 business days and handed to ${siteConfig.shippingCarrier} with tracking.`,
  },
  {
    title: "Use it, risk-free",
    text: `Not the right fit? You have ${siteConfig.trialPeriod} days from delivery to reach out for a return.`,
  },
];

export default function QualityPromise() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="relative rounded-[2.5rem] bg-brand-gradient overflow-hidden px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
          <div className="absolute inset-0 blueprint-grid-light pointer-events-none" />
          <div className="absolute -bottom-32 -right-24 w-[420px] h-[420px] rounded-full bg-white/10 blur-2xl pointer-events-none" />

          <div className="relative">
            <SectionHeading
              light
              eyebrow="How it works"
              title="From our shelf to your workbench"
              text={`Four simple steps — and free ${siteConfig.shippingCarrier} shipping on every one of them.`}
            />

            <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
              {steps.map((s, i) => (
                <li
                  key={s.title}
                  className="relative rounded-3xl bg-white/10 border border-white/20 backdrop-blur-sm p-6 text-white"
                >
                  <span className="w-11 h-11 rounded-2xl bg-white text-primary font-extrabold flex items-center justify-center shadow-lg">
                    {i + 1}
                  </span>
                  <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/80 leading-relaxed">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
