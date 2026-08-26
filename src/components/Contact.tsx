"use client";

import React, { useEffect, useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

const contactImages = [
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=900&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=900&auto=format&fit=crop&q=80",
];

export default function Contact() {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [topic, setTopic] = useState("General Support");

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((i) => (i + 1) % contactImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAF9F6] relative overflow-hidden border-b border-black/5" id="contact">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10">
        
        {/* Standardized Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-6 h-[1.5px] bg-[#265C1E]/50 rounded-full" />
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#265C1E]">
              WORKSHOP SUPPORT
            </span>
            <span className="w-6 h-[1.5px] bg-[#265C1E]/50 rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#11281A] uppercase tracking-tight font-sans">
            Get in Touch with <span className="text-[#265C1E]">Our Foundry</span>
          </h2>

          <p className="mt-3 text-neutral-text/70 text-xs sm:text-sm leading-relaxed">
            Our toolmakers and customer care team are available to assist with garden tool selection, sharpening advice, warranty claims, or order dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Visual + Info Column */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden min-h-[380px] lg:min-h-0 shadow-md border border-black/5 bg-neutral-900">
            {contactImages.map((src, idx) => (
              <img
                key={src}
                src={src}
                alt="Thornwick Garden Tool Foundry craftsmanship"
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                  idx === activeImage ? "opacity-100 scale-100" : "opacity-0 scale-105"
                }`}
                style={{ transitionProperty: "opacity, transform" }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[#132B1C]/95 via-[#132B1C]/50 to-[#132B1C]/20" />

            <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-8">
              {/* Direct Info Pills */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3.5 bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/15">
                  <div className="w-8 h-8 rounded-xl bg-[#265C1E] text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    ☎
                  </div>
                  <div>
                    <div className="text-[0.6rem] text-white/60 uppercase tracking-widest font-bold">Call Support</div>
                    <a href={`tel:${siteConfig.phone}`} className="font-bold text-xs sm:text-sm text-white hover:text-[#78C470] transition-colors">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3.5 bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/15">
                  <div className="w-8 h-8 rounded-xl bg-[#265C1E] text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    ✉
                  </div>
                  <div>
                    <div className="text-[0.6rem] text-white/60 uppercase tracking-widest font-bold">Direct Email</div>
                    <a href={`mailto:${siteConfig.email}`} className="font-bold text-xs sm:text-sm text-white hover:text-[#78C470] transition-colors break-all">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/15">
                  <div className="w-8 h-8 rounded-xl bg-[#265C1E] text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                    ⚲
                  </div>
                  <div>
                    <div className="text-[0.6rem] text-white/60 uppercase tracking-widest font-bold">Workshop &amp; Foundry</div>
                    <div className="font-medium text-xs text-white/90">{siteConfig.address}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-black/5 shadow-xs flex flex-col justify-center">
            {contactSubmitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full bg-[#265C1E]/15 text-[#265C1E] mx-auto flex items-center justify-center text-xl font-bold mb-3">
                  ✓
                </div>
                <h3 className="text-xl font-extrabold text-[#11281A] uppercase tracking-tight mb-2">Inquiry Dispatched!</h3>
                <p className="text-neutral-text/70 text-xs sm:text-sm max-w-md mx-auto mb-6">
                  Thank you for reaching out to {siteConfig.brandName}. One of our workshop team members will reply within 24 hours.
                </p>
                <button
                  onClick={() => setContactSubmitted(false)}
                  className="font-bold bg-[#265C1E] text-white hover:bg-[#1E4A17] transition-all py-3 px-7 rounded-lg text-xs uppercase tracking-wider cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Topic Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#11281A] mb-2">
                    Inquiry Topic
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      "General Support",
                      "Tool Care",
                      "Order Status",
                      "Warranty Claim",
                    ].map((item) => (
                      <button
                        type="button"
                        key={item}
                        onClick={() => setTopic(item)}
                        className={`py-2 px-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer text-center ${
                          topic === item
                            ? "bg-[#265C1E] text-white shadow-xs"
                            : "bg-[#FAF9F6] text-neutral-text/80 border border-black/5 hover:border-[#265C1E]/40"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#11281A] mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      className="w-full bg-[#FAF9F6] border border-black/10 rounded-lg px-4 py-3 text-xs sm:text-sm text-[#11281A] focus:outline-none focus:border-[#265C1E] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#11281A] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. eleanor@garden.com"
                      className="w-full bg-[#FAF9F6] border border-black/10 rounded-lg px-4 py-3 text-xs sm:text-sm text-[#11281A] focus:outline-none focus:border-[#265C1E] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#11281A] mb-1.5">
                    Message to Toolmakers
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your garden inquiry, order, or tool needs..."
                    className="w-full bg-[#FAF9F6] border border-black/10 rounded-lg px-4 py-3 text-xs sm:text-sm text-[#11281A] focus:outline-none focus:border-[#265C1E] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-bold uppercase tracking-widest text-xs bg-[#265C1E] hover:bg-[#1E4A17] text-white transition-all py-3.5 px-6 rounded-lg shadow-sm cursor-pointer mt-1"
                >
                  Send Message to Workshop
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
