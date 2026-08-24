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
      <main className="bg-[#FAF7F2] py-12 sm:py-20 relative overflow-hidden min-h-[80vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-[#FF6B8B] block mb-1">
              Legal &amp; Security
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E2330] tracking-tight">
              Privacy Policy
            </h1>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xs leading-relaxed text-gray-600 text-xs sm:text-sm space-y-6">
            <p>
              This Privacy Policy describes how your personal information is collected, used, and shared when you visit
              or make a purchase from <strong className="text-[#1E2330]">{siteConfig.websiteUrl}</strong> (the “Site”).
            </p>

            <h3 className="text-sm font-black text-[#1E2330] uppercase tracking-wider">Personal Information We Collect</h3>
            <p>
              When you visit the Site, we automatically collect certain information about your device, including information
              about your web browser, IP address, time zone, and some of the cookies installed on your device.
            </p>
            <p>
              Additionally, when you make a purchase or attempt to make a purchase through the Site, we collect certain information
              from you, including your name, billing address, shipping address, payment information (including credit card numbers),
              email address, and phone number. We refer to this information as “Order Information.”
            </p>

            <h3 className="text-sm font-black text-[#1E2330] uppercase tracking-wider">How Do We Use Your Personal Information?</h3>
            <p>
              We use the Order Information that we collect generally to fulfill any orders placed through the Site (including
              processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Communicate with you regarding order delivery and nursery care;</li>
              <li>Screen our orders for potential risk or fraud; and</li>
              <li>Provide you with information relating to our baby products or services.</li>
            </ul>

            <h3 className="text-sm font-black text-[#1E2330] uppercase tracking-wider">Sharing Your Personal Information</h3>
            <p>
              We share your Personal Information with third parties to help us fulfill orders, as described above.
              For example, we use secure payment gateways to capture order information and facilitate card transactions.
            </p>

            <h3 className="text-sm font-black text-[#1E2330] uppercase tracking-wider">Data Retention</h3>
            <p>
              When you place an order through the Site, we will maintain your Order Information for our records unless and until
              you ask us to delete this information.
            </p>

            <h3 className="text-sm font-black text-[#1E2330] uppercase tracking-wider">Contact Us</h3>
            <p>
              For more information about our privacy practices, if you have questions, or if you would like to make a complaint,
              please contact our support team at <strong className="text-[#1E2330]">{siteConfig.email}</strong> or call <strong className="text-[#1E2330]">{siteConfig.phone}</strong>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
