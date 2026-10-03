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
      <main className="bg-[#FAFAFA] py-16 md:py-24 relative overflow-hidden">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 text-[#4C0519] font-extrabold text-xs tracking-widest uppercase mb-3 border border-rose-200 shadow-xs">
            <span>📖 Privacy &amp; Data</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black uppercase text-[#000000] mb-8 border-b border-rose-100 pb-6 tracking-tight">
            Privacy Policy
          </h1>

          <div className="bg-[#FDFDFD] rounded-3xl p-6 sm:p-10 border border-rose-100 shadow-md leading-relaxed text-gray-700 text-xs md:text-sm space-y-6 font-medium">
            <p>
              This Privacy Policy describes how your personal information is collected, used, and shared when you visit
              or make a book purchase from <strong className="text-[#000000] font-bold">{siteConfig.websiteUrl}</strong> (the “Site”).
            </p>

            <h3 className="text-base font-black text-[#4C0519] mt-8 mb-4 uppercase tracking-wider">PERSONAL INFORMATION WE COLLECT</h3>
            <p>
              When you visit the Site, we automatically collect certain information about your device, including information
              about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
              Additionally, as you browse the Site, we collect information about the individual books, collections, or journals that you view.
            </p>
            <p>
              Additionally, when you make a purchase or attempt to make a purchase through the Site, we collect certain information
              from you, including your name, billing address, shipping address, payment information (including credit card numbers),
              email address, and phone number. We refer to this information as “Order Information.”
            </p>

            <h3 className="text-base font-black text-[#4C0519] mt-8 mb-4 uppercase tracking-wider">HOW DO WE USE YOUR PERSONAL INFORMATION?</h3>
            <p>
              We use the Order Information that we collect generally to fulfill any orders placed through the Site (including
              processing your payment information, arranging for insured courier dispatch, and providing you with invoices and/or order confirmations).
            </p>

            <h3 className="text-base font-black text-[#4C0519] mt-8 mb-4 uppercase tracking-wider">DATA SECURITY &amp; RETENTION</h3>
            <p>
              When you place an order through the Site, we maintain your Order Information for our records using industry-standard 256-bit encryption unless and until
              you ask us to delete this information.
            </p>

            <h3 className="text-base font-black text-[#4C0519] mt-8 mb-4 uppercase tracking-wider">CONTACT US</h3>
            <p>
              For more information about our privacy practices, if you have questions, or if you would like to make an inquiry,
              please contact our reader concierge team by e-mail at <strong className="text-[#000000] font-bold">{siteConfig.email}</strong> or by phone at <strong className="text-[#000000] font-bold">{siteConfig.phone}</strong>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
