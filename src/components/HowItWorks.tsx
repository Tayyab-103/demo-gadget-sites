import React from "react";
import { siteConfig } from "@/lib/brand";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    step: "01",
    title: "Pick what your pet needs",
    description: "Choose a brush, chew toy or collar, then select a single item or a 2 to 8-pack bundle for a lower per-item price.",
    image: "/img/how_step1.png",
  },
  {
    step: "02",
    title: "We pack & ship it free",
    description: `Your order is packed with care and shipped free via ${siteConfig.shippingCarrier}. Expect it in ${siteConfig.shippingPeriod} business days.`,
    image: "/img/how_step2.png",
  },
  {
    step: "03",
    title: "Enjoy — risk free",
    description: `Try it at home with your pet. If it isn't a good fit, contact us within ${siteConfig.trialPeriod} days for a hassle-free return.`,
    image: "/img/how_step3.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How it works"
          title={<>From our shelf to your <span className="text-gradient">front door</span></>}
          className="mb-12 sm:mb-16"
        />

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Dashed connector on desktop */}
          <div className="hidden md:block absolute top-22 left-[16%] right-[16%] border-t-2 border-dashed border-primary/60" aria-hidden="true" />

          {steps.map((item) => (
            <div key={item.step} className="relative flex flex-col items-center text-center group">
              <div className="relative">
                <div className="w-44 h-44 rounded-full p-1.5 bg-brand-gradient shadow-lg shadow-primary/25">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full rounded-full object-cover border-4 border-white transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <span className="absolute -top-1 -right-1 w-12 h-12 rounded-full bg-ink text-white font-display font-semibold flex items-center justify-center border-4 border-white">
                  {item.step}
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-ink mt-7 mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed max-w-xs">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
