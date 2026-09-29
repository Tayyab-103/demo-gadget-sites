"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

type CategoryType = "All" | "Orders & Shipping" | "Safety & Care" | "Guarantee & Returns";

interface FaqItem {
  category: CategoryType;
  question: string;
  answer: string;
}

const faqList: FaqItem[] = [
  {
    category: "Orders & Shipping",
    question: "What shipping carrier do you use and how fast is delivery?",
    answer: `All orders are processed and dispatched within 1–2 business days from our domestic fulfillment center. We ship nationwide using ${siteConfig.shippingCarrier}, and delivery typically takes between ${siteConfig.shippingPeriod} business days with live real-time tracking straight to your door.`,
  },
  {
    category: "Safety & Care",
    question: "Are your baby products and materials safe for newborns & sensitive skin?",
    answer:
      `Yes! Every ${siteConfig.brandName} essential is crafted from 100% non-toxic, BPA-free, hypoallergenic food-grade silicone and certified ultra-soft organic cotton blends tested completely safe for newborns, infants, and sensitive skin.`,
  },
  {
    category: "Guarantee & Returns",
    question: `How does the ${siteConfig.trialPeriod}-Day Parent Guarantee trial work?`,
    answer: `If for any reason you or your little one are not 100% delighted with your purchase within ${siteConfig.trialPeriod} days of receiving it, simply contact our parent support team via phone at ${siteConfig.phone} or email at ${siteConfig.email} for a complete, hassle-free refund.`,
  },
  {
    category: "Safety & Care",
    question: "How do I care for and wash the Baby Carrier and Nursing Pillow covers?",
    answer:
      "All fabric wraps, carrier pads, and pillow covers are machine-washable on a gentle cold cycle using mild, baby-safe detergent. We recommend air drying to preserve fabric integrity, softness, and elasticity.",
  },
  {
    category: "Safety & Care",
    question: "How do I clean and sterilize the Twist Ball Teether & toys?",
    answer:
      "The food-grade silicone teether is boil-safe and top-rack dishwasher-safe. For everyday cleaning, simply rinse with warm soapy water or sterilize in boiling water for 2–3 minutes.",
  },
  {
    category: "Orders & Shipping",
    question: "How will the charge appear on my credit card statement?",
    answer: `To maintain transparent transaction records, your credit card statement will display the charge descriptor as "${siteConfig.descriptor}".`,
  },
];

const categories: CategoryType[] = [
  "All",
  "Orders & Shipping",
  "Safety & Care",
  "Guarantee & Returns",
];

export default function Faq() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("All");
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const filteredFaqs =
    selectedCategory === "All"
      ? faqList
      : faqList.filter((item) => item.category === selectedCategory);

  const toggleFaq = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-neutral-bg relative overflow-hidden" id="faq">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Left-Aligned Header Block */}
        <div className="text-left max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-stone-200/80 shadow-xs mb-3.5">
            <span className="text-xs">✨</span>
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-primary">
              COMMON INQUIRIES
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight mb-6">
            Frequently Asked <span className="italic text-primary/80 font-serif">Questions</span>
          </h2>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-start gap-2 sm:gap-3">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-primary text-white shadow-sm"
                      : "bg-white text-neutral-text/75 hover:text-primary hover:bg-stone-100 border border-stone-200/80"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* LEFT COLUMN: STICKY CONCIERGE CARD (4 cols) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="bg-primary text-white rounded-[2.5rem] p-7 sm:p-9 shadow-xl relative overflow-hidden border border-white/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/30 rounded-full blur-2xl pointer-events-none" />

              <div className="w-12 h-12 rounded-2xl bg-secondary text-primary flex items-center justify-center text-2xl mb-6 shadow-inner">
                ✨
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2 leading-snug">
                Parent Care Concierge
              </h3>

              <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-8">
                Need guidance on wrap sizing, feeding essentials, or order updates? Talk with our dedicated parent care specialists.
              </p>

              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-secondary text-primary hover:bg-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-full shadow-md hover:shadow-lg transition-all mb-6"
              >
                <span>Ask Our Concierge</span>
                <span>→</span>
              </a>

              <div className="pt-6 border-t border-white/10 flex items-center gap-2.5 text-xs text-white/80">
                <span className="text-secondary font-bold">✓</span>
                <span className="text-[0.72rem] font-medium">100% Certified Baby-Safe Guidance</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: MINIMAL FILTERABLE ACCORDION (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-[2.5rem] p-6 sm:p-10 border border-stone-200/80 shadow-xs flex flex-col">
            <div className="divide-y divide-stone-200">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIndices.includes(idx);

                return (
                  <div key={idx} className="py-5 first:pt-0 last:pb-0">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between gap-4 text-left bg-transparent border-none cursor-pointer focus:outline-none group py-1"
                      aria-expanded={isOpen}
                    >
                      <span className="font-serif text-base sm:text-lg font-bold text-primary group-hover:text-primary/70 transition-colors leading-snug">
                        {faq.question}
                      </span>

                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all duration-200 ${
                          isOpen
                            ? "bg-primary text-white"
                            : "bg-[#F8F9FE] text-primary/50 group-hover:bg-stone-200"
                        }`}
                      >
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="mt-3 pr-8 text-xs sm:text-sm text-neutral-text/75 leading-relaxed animate-fadeIn">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
