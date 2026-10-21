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
      <main className="bg-neutral-bg py-16 md:py-24 relative overflow-hidden">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <span className="eyebrow mb-4">Privacy &amp; Data</span>

          <h1 className="text-3xl md:text-4xl font-black uppercase text-neutral-text mt-4 mb-8 border-b border-line pb-6 tracking-tight">
            Privacy Policy
          </h1>

          <div className="bg-surface rounded-3xl p-6 sm:p-10 border border-line leading-relaxed text-muted text-xs md:text-sm space-y-6 font-medium">
            <p>
              This Privacy Policy describes how your personal information is collected, used, and shared when you visit
              or make a purchase from <strong className="text-neutral-text font-bold">{siteConfig.websiteUrl}</strong> (the “Site”).
            </p>

            <h3 className="text-base font-black text-primary-light mt-8 mb-4 uppercase tracking-wider">PERSONAL INFORMATION WE COLLECT</h3>
            <p>
              When you visit the Site, we automatically collect certain information about your device, including information
              about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
              Additionally, as you browse the Site, we collect information about the individual products that you view.
            </p>
            <p>
              Additionally, when you make a purchase or attempt to make a purchase through the Site, we collect certain information
              from you, including your name, billing address, shipping address, payment information (including credit card numbers),
              email address, and phone number. We refer to this information as “Order Information.”
            </p>

            <h3 className="text-base font-black text-primary-light mt-8 mb-4 uppercase tracking-wider">HOW DO WE USE YOUR PERSONAL INFORMATION?</h3>
            <p>
              We use the Order Information that we collect generally to fulfill any orders placed through the Site (including
              processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).
            </p>

            <h3 className="text-base font-black text-primary-light mt-8 mb-4 uppercase tracking-wider">DATA SECURITY &amp; RETENTION</h3>
            <p>
              When you place an order through the Site, we maintain your Order Information for our records using industry-standard 256-bit encryption unless and until
              you ask us to delete this information.
            </p>

            <h3 className="text-base font-black text-primary-light mt-8 mb-4 uppercase tracking-wider">CONTACT US</h3>
            <p>
              For more information about our privacy practices, if you have questions, or if you would like to make an inquiry,
              please contact our support team by e-mail at <strong className="text-neutral-text font-bold">{siteConfig.email}</strong> or by phone at <strong className="text-neutral-text font-bold">{siteConfig.phone}</strong>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
