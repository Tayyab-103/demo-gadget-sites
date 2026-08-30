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
      <main className="bg-[#FAF8F6] pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
        <div className="w-full max-w-4xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#18121E]/5 border border-[#C59B7E]/30 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#C59B7E] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C59B7E] animate-pulse" />
            <span>PRIVACY &amp; CLIENT DATA STANDARDS</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#18121E] mb-8 border-b border-[#C59B7E]/20 pb-6 tracking-tight">
            Privacy Policy
          </h1>

          <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#C59B7E]/25 shadow-xl leading-relaxed text-slate-600 text-xs md:text-sm space-y-6 font-light">
            <p>
              This Privacy Policy describes how your personal information is collected, used, and protected when you visit
              or make an acquisition from <strong className="text-[#18121E] font-semibold">{siteConfig.websiteUrl}</strong> (the “Site”).
            </p>

            <h3 className="text-base font-serif font-bold text-[#18121E] mt-8 mb-4 uppercase tracking-wider">PERSONAL INFORMATION WE COLLECT</h3>
            <p>
              When you visit the Site, we automatically collect certain information about your device, including information
              about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
              Additionally, as you browse the Site, we collect information about the individual couture collections, silk dresses, or outerwear that you view,
              what websites or search terms referred you to the Site, and information about how you interact with the Site.
            </p>
            <p>
              Additionally, when you place an order for couture pieces through the Site, we collect certain information
              from you, including your name, billing address, shipping address, payment information (including encrypted credit card numbers),
              email address, and phone number. We refer to this information as “Order Information.”
            </p>

            <h3 className="text-base font-serif font-bold text-[#18121E] mt-8 mb-4 uppercase tracking-wider">HOW DO WE USE YOUR PERSONAL INFORMATION?</h3>
            <p>
              We use the Order Information that we collect strictly to fulfill orders placed through the Site (including
              processing your payment information, arranging for {siteConfig.shippingCarrier} shipping, and providing you with invoices and/or order confirmations).
              Additionally, we use this Order Information to:
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Communicate with you regarding delivery updates and tracking;</li>
              <li>Screen our orders for potential risk or payment fraud; and</li>
              <li>Provide you with private runway invitations or VIP releases relating to our collections.</li>
            </ul>

            <h3 className="text-base font-serif font-bold text-[#18121E] mt-8 mb-4 uppercase tracking-wider">SHARING YOUR PERSONAL INFORMATION</h3>
            <p>
              We share your Personal Information with third parties solely to help us process orders as described above.
              For example, we use server-side banking integrations and verified logistics APIs to securely fulfill transactions.
            </p>
            <p>
              Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a
              subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
            </p>

            <h3 className="text-base font-serif font-bold text-[#18121E] mt-8 mb-4 uppercase tracking-wider">DATA RETENTION</h3>
            <p>
              When you place an order through the Site, we maintain your Order Information for accounting and fulfillment records unless and until
              you ask us to delete this information.
            </p>

            <h3 className="text-base font-serif font-bold text-[#18121E] mt-8 mb-4 uppercase tracking-wider">CONTACT US</h3>
            <p>
              For more information about our privacy practices, if you have questions, or if you would like to make a request,
              please contact our styling concierge desk by e-mail at <strong className="text-[#18121E] font-semibold">{siteConfig.email}</strong> or by phone at <strong className="text-[#18121E] font-semibold">{siteConfig.phone}</strong>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
