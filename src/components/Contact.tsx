"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    interest: "",
    timeline: "",
    city: "",
    source: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        interest: "",
        timeline: "",
        city: "",
        source: "",
      });
    }, 4000);
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#F8F6F0] text-[#18222F] border-t border-[#C87D3B]/20" id="contact">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Headline, Subtitle, & Trust Card */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Main Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0D1B2A] tracking-tight leading-tight mb-6 uppercase">
                Contact Us
              </h2>

              {/* Dot Grid Icon & Subtitle */}
              <div className="flex items-start gap-3.5 mb-10 text-[#18222F]/75">
                <div className="grid grid-cols-3 gap-1 w-5 h-5 flex-shrink-0 mt-1 text-[#0D1B2A]">
                  {[...Array(9)].map((_, i) => (
                    <span key={i} className="w-1 h-1 rounded-full bg-current block" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm leading-relaxed font-normal">
                  We connect you directly with our Austin travel advisors and logistics specialists to tailor your luggage gear.
                </p>
              </div>
            </div>

            {/* Trust Callout Box */}
            <div className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-7 border border-[#C87D3B]/20 shadow-xs">
              {/* Avatar Stack */}
              <div className="flex items-center -space-x-2.5 mb-4">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Traveler advisor"
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xs"
                  />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[#18222F]/75 leading-relaxed font-normal">
                Our advisors already support more than 25,000 travelers and expeditions worldwide in mastering global transit.
              </p>
            </div>
          </div>

          {/* Right Column: Clean Form Layout */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#C87D3B]/25 shadow-lg">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4 font-bold">
                  ✓
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0D1B2A] mb-2">
                  Thank You for Reaching Out!
                </h3>
                <p className="text-xs sm:text-sm text-[#18222F]/70 max-w-md mx-auto">
                  Your inquiry has been received. One of our travel concierge specialists will respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                {/* Row 1: First Name & Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#0D1B2A] mb-1.5">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="Alex"
                      className="w-full rounded-xl border border-[#0D1B2A]/20 bg-[#FAF7F2] px-4 py-3 text-xs sm:text-sm font-medium text-[#0D1B2A] placeholder-[#18222F]/40 focus:border-[#C87D3B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C87D3B] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0D1B2A] mb-1.5">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Morgan"
                      className="w-full rounded-xl border border-[#0D1B2A]/20 bg-[#FAF7F2] px-4 py-3 text-xs sm:text-sm font-medium text-[#0D1B2A] placeholder-[#18222F]/40 focus:border-[#C87D3B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C87D3B] transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#0D1B2A] mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-3 flex items-center gap-1.5 pointer-events-none text-xs font-bold text-[#0D1B2A]">
                        <span>🇺🇸</span>
                        <span className="text-gray-400 font-normal">|</span>
                      </div>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (512) 800-2490"
                        className="w-full rounded-xl border border-[#0D1B2A]/20 bg-[#FAF7F2] pl-14 pr-4 py-3 text-xs sm:text-sm font-medium text-[#0D1B2A] placeholder-[#18222F]/40 focus:border-[#C87D3B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C87D3B] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0D1B2A] mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative flex items-center">
                      <div className="absolute left-3.5 text-[#0D1B2A]/50 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex.morgan@flight.com"
                        className="w-full rounded-xl border border-[#0D1B2A]/20 bg-[#FAF7F2] pl-10 pr-4 py-3 text-xs sm:text-sm font-medium text-[#0D1B2A] placeholder-[#18222F]/40 focus:border-[#C87D3B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C87D3B] transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 3: Primary Travel Interest */}
                <div>
                  <label className="block text-xs font-bold text-[#0D1B2A] mb-1.5">
                    What is your primary travel interest? *
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full appearance-none rounded-xl border border-[#0D1B2A]/20 bg-[#FAF7F2] px-4 py-3 text-xs sm:text-sm font-medium text-[#0D1B2A] focus:border-[#C87D3B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C87D3B] transition-all cursor-pointer"
                    >
                      <option value="" disabled>Select from list</option>
                      <option value="spinner">Aerospace Carry-On Spinner Suitcase</option>
                      <option value="duffle">Italian Leather Weekender Duffle</option>
                      <option value="cubes">Compression Packing Cube Suite</option>
                      <option value="corporate">Fleet / Corporate Expedition Orders</option>
                      <option value="warranty">Transit Warranty &amp; 100-Day Flight Trial</option>
                    </select>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#0D1B2A]/60"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>

                {/* Row 4: Departure Timeline */}
                <div>
                  <label className="block text-xs font-bold text-[#0D1B2A] mb-1.5">
                    What is your upcoming departure timeline? *
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full appearance-none rounded-xl border border-[#0D1B2A]/20 bg-[#FAF7F2] px-4 py-3 text-xs sm:text-sm font-medium text-[#0D1B2A] focus:border-[#C87D3B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C87D3B] transition-all cursor-pointer"
                    >
                      <option value="" disabled>Select from list</option>
                      <option value="expedited">Within 1 - 2 weeks (Expedited Flight Dispatch)</option>
                      <option value="month">Next month</option>
                      <option value="season">Planning for later this season</option>
                      <option value="general">General travel inquiry</option>
                    </select>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#0D1B2A]/60"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>

                {/* Row 5: Destination or Residence City */}
                <div>
                  <label className="block text-xs font-bold text-[#0D1B2A] mb-1.5">
                    What is your departure or destination city? *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Austin, Texas / Paris, France"
                    className="w-full rounded-xl border border-[#0D1B2A]/20 bg-[#FAF7F2] px-4 py-3 text-xs sm:text-sm font-medium text-[#0D1B2A] placeholder-[#18222F]/40 focus:border-[#C87D3B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C87D3B] transition-all"
                  />
                </div>

                {/* Row 6: Discovery Source */}
                <div>
                  <label className="block text-xs font-bold text-[#0D1B2A] mb-1.5">
                    How did you discover {siteConfig.brandName}? *
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={formData.source}
                      onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                      className="w-full appearance-none rounded-xl border border-[#0D1B2A]/20 bg-[#FAF7F2] px-4 py-3 text-xs sm:text-sm font-medium text-[#0D1B2A] focus:border-[#C87D3B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C87D3B] transition-all cursor-pointer"
                    >
                      <option value="" disabled>Select from list</option>
                      <option value="publications">Aviation &amp; Travel Publications</option>
                      <option value="review">Flight Review / Traveler Recommendation</option>
                      <option value="social">Social Media &amp; Digital Magazine</option>
                      <option value="search">Search Engine</option>
                      <option value="word">Word of Mouth / Fellow Traveler</option>
                    </select>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#0D1B2A]/60"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>

                {/* Row 7: Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-block bg-[#0D1B2A] hover:bg-[#C87D3B] text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-xl shadow-md transition-all duration-200 cursor-pointer uppercase tracking-wider hover:scale-[1.02]"
                  >
                    Send Inquiry
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
