"use client";

import React, { useState } from "react";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Contact() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ username: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-black font-sans border-b border-black/5" id="contact">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#ff4370] bg-[#ff4370]/10 px-3.5 py-1 rounded-full">
            We&apos;re Here to Help
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1e293b] tracking-tight mt-3">
            Contact <span className="text-[#ff4370]">Information</span>
          </h2>
          <p className="text-black/60 text-xs sm:text-sm md:text-base leading-relaxed mt-2 font-normal">
            Reach out to our customer care team for toy inquiries, bulk orders, or shipment tracking.
          </p>
        </div>

        {/* 4 Info Blocks matching Kiddex contact-info-section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          <div className="p-6 rounded-3xl bg-[#f8fafc] border border-black/6 text-center hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#ff4370]/10 text-2xl flex items-center justify-center mx-auto mb-3">
              🏢
            </div>
            <h4 className="text-sm font-black text-[#1e293b] uppercase tracking-wider mb-1">
              Corporate Office
            </h4>
            <p className="text-xs text-black/60 leading-relaxed">
              {siteConfig.corpName}<br />{siteConfig.address}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#f8fafc] border border-black/6 text-center hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#ffb703]/20 text-2xl flex items-center justify-center mx-auto mb-3">
              📦
            </div>
            <h4 className="text-sm font-black text-[#1e293b] uppercase tracking-wider mb-1">
              Main Warehouse
            </h4>
            <p className="text-xs text-black/60 leading-relaxed">
              UPS Logistics Facility<br />Dallas, TX Distribution Center
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#f8fafc] border border-black/6 text-center hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#ff4370]/10 text-2xl flex items-center justify-center mx-auto mb-3">
              ✉️
            </div>
            <h4 className="text-sm font-black text-[#1e293b] uppercase tracking-wider mb-1">
              Email Address
            </h4>
            <p className="text-xs text-black/60 leading-relaxed">
              <a href={`mailto:${siteConfig.email}`} className="text-[#ff4370] hover:underline font-bold">
                {siteConfig.email}
              </a>
              <br />Fast 24-hr Email Response
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#f8fafc] border border-black/6 text-center hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-2xl bg-[#ffb703]/20 text-2xl flex items-center justify-center mx-auto mb-3">
              📞
            </div>
            <h4 className="text-sm font-black text-[#1e293b] uppercase tracking-wider mb-1">
              Phone Hotline
            </h4>
            <p className="text-xs text-black/60 leading-relaxed">
              <a href={`tel:${siteConfig.phone}`} className="text-[#1e293b] hover:text-[#ff4370] font-black">
                {siteConfig.phone}
              </a>
              <br />Toll-Free 24/7 Support
            </p>
          </div>
        </div>

        {/* 2-Column: Form + Map Card matching Kiddex contact-section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Form */}
          <div className="lg:col-span-7 bg-[#fffafb] p-7 sm:p-10 rounded-3xl border border-black/8 shadow-sm">
            <h3 className="text-2xl font-black text-[#1e293b] mb-6">
              Send Us a Message
            </h3>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-bold text-center">
                🎉 Thank you for contacting Playhouse Games and Toy Store! Our team will get back to you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1e293b] uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      required
                      className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#ff4370]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#1e293b] uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      required
                      className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#ff4370]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1e293b] uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#ff4370]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#1e293b] uppercase tracking-wider mb-1.5">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Toy recommendation or tracking"
                      required
                      className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#ff4370]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1e293b] uppercase tracking-wider mb-1.5">
                    Write Message *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the toys or order details..."
                    required
                    className="w-full bg-white border border-black/10 rounded-xl px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#ff4370] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="py-4 px-8 rounded-full bg-[#ff4370] hover:bg-[#e63560] text-white font-black text-xs uppercase tracking-wider transition-all shadow-md hover:scale-[1.02] cursor-pointer"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* Map Column */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-black/8 shadow-md relative min-h-[360px] bg-[#1e293b] text-white p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-black uppercase text-[#ffb703] tracking-wider block mb-2">
                Visit Our Headquarters
              </span>
              <h4 className="text-2xl font-black text-white mb-4">
                Playhouse Games and Toy Store
              </h4>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                Located in the heart of Dallas, Texas. Our distribution facility packs and dispatches orders daily across the entire continental United States.
              </p>
              <div className="space-y-2 text-xs text-white/80">
                <p>📍 {siteConfig.address}</p>
                <p>📞 {siteConfig.phone}</p>
                <p>✉️ {siteConfig.email}</p>
                <p>⏰ Mon - Fri: 8:00am - 6:00pm EST</p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-[0.68rem] text-white/50">
              Operated by {siteConfig.corpName}. Statement Descriptor: <strong className="text-white">{siteConfig.descriptor}</strong>.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
