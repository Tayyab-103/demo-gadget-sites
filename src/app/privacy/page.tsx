"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteConfigData from "../../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="bg-[#F8FAFC] pt-28 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        {/* Background decorative glow spot */}
        <div className="glow-bg absolute top-[10%] right-[-250px] opacity-35 pointer-events-none" />

        <div className="w-full max-w-4xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-[0.68rem] font-mono font-bold uppercase tracking-[0.2em] text-blue-700 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span>[ PRIVACY STANDARDS ]</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black uppercase text-[#0A0F1D] mb-8 border-b border-blue-500/20 pb-6 tracking-tight">
            Privacy Policy
          </h1>

          <div className="bg-white rounded-3xl p-8 md:p-10 border border-blue-500/20 shadow-xl shadow-blue-500/5 leading-relaxed text-slate-600 text-xs md:text-sm space-y-6 font-normal">
            <p>
              This Privacy Policy describes how your personal information is collected, used, and shared when you visit
              or make an acquisition from <strong className="text-[#0A0F1D] font-semibold">{siteConfig.websiteUrl}</strong> (the “Site”).
            </p>

            <h3 className="text-base font-bold text-[#0A0F1D] mt-8 mb-4 uppercase tracking-wider">PERSONAL INFORMATION WE COLLECT</h3>
            <p>
              When you visit the Site, we automatically collect certain information about your device, including information
              about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
              Additionally, as you browse the Site, we collect information about the individual clothing items, knitwear, or family apparel collections that you view,
              what websites or search terms referred you to the Site, and information about how you interact with the Site.
            </p>
            <p>
              Additionally, when you place an order for family clothing or apparel items through the Site, we collect certain information
              from you, including your name, billing address, shipping address, payment information (including encrypted credit card numbers),
              email address, and phone number. We refer to this information as “Order Information.”
            </p>

            <h3 className="text-base font-bold text-[#0A0F1D] mt-8 mb-4 uppercase tracking-wider">HOW DO WE USE YOUR PERSONAL INFORMATION?</h3>
            <p>
              We use the Order Information that we collect generally to fulfill any orders placed through the Site (including
              processing your payment information, arranging for {siteConfig.shippingCarrier} shipping, and providing you with invoices and/or order confirmations).
              Additionally, we use this Order Information to:
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Communicate with you regarding order fulfillment and tracking updates;</li>
              <li>Screen our orders for potential risk or payment fraud; and</li>
              <li>Provide you with seasonal apparel collection releases or exclusive family promotions relating to our products.</li>
            </ul>

            <h3 className="text-base font-bold text-[#0A0F1D] mt-8 mb-4 uppercase tracking-wider">SHARING YOUR PERSONAL INFORMATION</h3>
            <p>
              We share your Personal Information with third parties solely to help us process orders as described above.
              For example, we use server-side API integrations (CRM gateways and banking processors) to securely process card transactions.
            </p>
            <p>
              Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a
              subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
            </p>

            <h3 className="text-base font-bold text-[#0A0F1D] mt-8 mb-4 uppercase tracking-wider">DATA RETENTION</h3>
            <p>
              When you place an order through the Site, we maintain your Order Information for accounting and fulfillment records unless and until
              you ask us to delete this information.
            </p>

            <h3 className="text-base font-bold text-[#0A0F1D] mt-8 mb-4 uppercase tracking-wider">CONTACT US</h3>
            <p>
              For more information about our privacy practices, if you have questions, or if you would like to make a request,
              please contact our customer care team by e-mail at <strong className="text-[#0A0F1D] font-semibold">{siteConfig.email}</strong> or by phone at <strong className="text-[#0A0F1D] font-semibold">{siteConfig.phone}</strong>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
