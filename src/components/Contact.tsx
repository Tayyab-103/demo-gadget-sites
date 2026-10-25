"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
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
                  Your message has been received. Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#0D1B2A] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full rounded-xl border border-[#0D1B2A]/20 bg-[#FAF7F2] px-4 py-3 text-xs sm:text-sm font-medium text-[#0D1B2A] placeholder-[#18222F]/40 focus:border-[#C87D3B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C87D3B] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0D1B2A] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex.morgan@example.com"
                      className="w-full rounded-xl border border-[#0D1B2A]/20 bg-[#FAF7F2] px-4 py-3 text-xs sm:text-sm font-medium text-[#0D1B2A] placeholder-[#18222F]/40 focus:border-[#C87D3B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C87D3B] transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Subject */}
                <div>
                  <label className="block text-xs font-bold text-[#0D1B2A] mb-1.5">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="How can we help?"
                    className="w-full rounded-xl border border-[#0D1B2A]/20 bg-[#FAF7F2] px-4 py-3 text-xs sm:text-sm font-medium text-[#0D1B2A] placeholder-[#18222F]/40 focus:border-[#C87D3B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C87D3B] transition-all"
                  />
                </div>

                {/* Row 3: Message */}
                <div>
                  <label className="block text-xs font-bold text-[#0D1B2A] mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full rounded-xl border border-[#0D1B2A]/20 bg-[#FAF7F2] px-4 py-3 text-xs sm:text-sm font-medium text-[#0D1B2A] placeholder-[#18222F]/40 focus:border-[#C87D3B] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C87D3B] transition-all resize-y"
                  />
                </div>

                {/* Row 4: Submit Button */}
                {/* Row 3: Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-block bg-[#0D1B2A] hover:bg-[#C87D3B] text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-xl shadow-md transition-all duration-200 cursor-pointer uppercase tracking-wider hover:scale-[1.02]"
                  >
                    Send Message
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
