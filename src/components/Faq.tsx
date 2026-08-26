"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const faqData = [
  {
    question: "What shipping carrier do you use and how long does delivery take?",
    answer: `All orders are processed and hand-packed within 1-2 business days. We ship using ${siteConfig.shippingCarrier} white-glove logistics, and delivery typically takes between ${siteConfig.shippingPeriod} business days to arrive directly at your home. Room placement is included for larger items.`
  },
  {
    question: "Do you offer a money-back comfort guarantee?",
    answer: "Yes. We offer a 60-day home styling and comfort trial. Stage the items in your own space, sit on them, and see the textures. If they do not align with your design vision, contact us for a hassle-free return and refund."
  },
  {
    question: "Are your furnishings and accessories covered by a warranty?",
    answer: "Absolutely. Every furniture framework (sofas, accent chairs) is covered by a lifetime structural warranty on joinery and solid wood framing. Upholstery fabrics, stitching, and electrical elements are covered by a 1-year manufacturer's warranty under standard household use."
  },
  {
    question: "How will the charge appear on my credit card statement?",
    answer: `To ensure transaction transparency, the charge will appear on your credit card statement under the descriptor "${siteConfig.descriptor}".`
  },
  {
    question: "How can I speak to an interior designer?",
    answer: `You can reach our styling support desk Monday through Friday during business hours at ${siteConfig.phone}, or email us at ${siteConfig.email}. You can also schedule a free video consultation to review fabrics and sizing.`
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" id="faq">
      {/* Subtle organic gold blob */}
      <div className="glow-bg absolute bottom-[-150px] right-[-150px] opacity-30 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="eyebrow justify-center mb-4">Answers & Advice</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-primary mb-4 tracking-tight">
            Frequently Asked <span className="text-secondary">Questions</span>
          </h2>
          <p className="text-neutral-text/60 text-sm md:text-base leading-relaxed">
            Everything you need to know about our handcrafted furniture, shipping policies, and comfort guarantee.
          </p>
        </div>

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sleek Borderless Accordion (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-black/[0.06] border-y border-black/[0.06]">
            {faqData.map((item, idx) => {
              const isOpen = activeIndex === idx;

              return (
                <div
                  key={idx}
                  className="py-6 transition-all duration-300"
                >
                  {/* Accordion Trigger Header */}
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex justify-between items-center bg-transparent border-none cursor-pointer text-left focus:outline-none gap-6 group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm md:text-base font-extrabold text-primary group-hover:text-secondary transition-colors duration-300">
                      {item.question}
                    </span>
                    
                    {/* Animated Minimal Indicator */}
                    <span className="relative flex-shrink-0 w-8 h-8 rounded-full border border-black/10 flex items-center justify-center transition-all duration-300 group-hover:border-secondary">
                      <span className={`absolute w-3 h-[2px] bg-primary transition-transform duration-300 ${isOpen ? "rotate-90 bg-secondary" : ""}`} />
                      <span className={`absolute h-3 w-[2px] bg-primary transition-transform duration-300 ${isOpen ? "rotate-90 scale-y-0 bg-secondary" : ""}`} />
                    </span>
                  </button>

                  {/* Accordion Expandable Body */}
                  <div
                    className="overflow-hidden transition-all duration-500 ease-in-out"
                    style={{
                      maxHeight: isOpen ? "300px" : "0px",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="pt-4 text-xs md:text-sm text-neutral-text/65 leading-relaxed pr-8">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Design Concierge Card (5 Cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-primary rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden shadow-2xl border border-white/5">
              {/* Background elegant circles */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/3" />
              
              <div className="relative z-10">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-secondary mb-3 block">
                  Hearthwyn Concierge
                </span>
                
                <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight">
                  Need Sizing or Fabric Advice?
                </h3>
                
                <p className="text-white/70 text-xs md:text-sm mb-8 leading-relaxed">
                  Struggling to visualize dimensions or select the perfect weave? Speak directly with our design consultants for custom fabric swatches and layout suggestions.
                </p>
                
                <div className="flex flex-col gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-text font-bold text-xs uppercase tracking-widest px-6 py-4 rounded-full hover:bg-white hover:text-primary transition-all duration-300 shadow-md shadow-secondary/15"
                  >
                    Schedule Styling Consultation
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                  
                  <div className="flex items-center justify-center gap-2 text-xs text-white/55 font-medium mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-secondary">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    Average wait time: Under 1 hour
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
