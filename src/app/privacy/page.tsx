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
        {/* Background decorative glow spot */}
        <div className="glow-bg absolute top-[10%] right-[-250px] opacity-35 pointer-events-none" />

        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="eyebrow mb-4">Legal</span>
          <h1 className="text-3xl md:text-4xl font-black uppercase text-primary mb-8 border-b border-black/5 pb-6 tracking-tight">
            Privacy Policy
          </h1>

          <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-md leading-relaxed text-neutral-text/75 text-xs md:text-sm space-y-6">
            <p>
              This Privacy Policy describes how your personal information is collected, used, and shared when you visit
              or make a purchase from <strong className="text-primary font-semibold">{siteConfig.websiteUrl}</strong> (the “Site”).
            </p>

            <h3 className="text-base font-bold text-primary mt-8 mb-4 uppercase tracking-wider">PERSONAL INFORMATION WE COLLECT</h3>
            <p>
              When you visit the Site, we automatically collect certain information about your device, including information
              about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
              Additionally, as you browse the Site, we collect information about the individual web pages or products that you view,
              what websites or search terms referred you to the Site, and information about how you interact with the Site.
            </p>
            <p>
              Additionally, when you make a purchase or attempt to make a purchase through the Site, we collect certain information
              from you, including your name, billing address, shipping address, payment information (including credit card numbers),
              email address, and phone number. We refer to this information as “Order Information.”
            </p>

            <h3 className="text-base font-bold text-primary mt-8 mb-4 uppercase tracking-wider">HOW DO WE USE YOUR PERSONAL INFORMATION?</h3>
            <p>
              We use the Order Information that we collect generally to fulfill any orders placed through the Site (including
              processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).
              Additionally, we use this Order Information to:
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Communicate with you;</li>
              <li>Screen our orders for potential risk or fraud; and</li>
              <li>Provide you with information or advertising relating to our products or services.</li>
            </ul>

            <h3 className="text-base font-bold text-primary mt-8 mb-4 uppercase tracking-wider">SHARING YOUR PERSONAL INFORMATION</h3>
            <p>
              We share your Personal Information with third parties to help us use your Personal Information, as described above.
              For example, we use server-side API integrations (CRMs) to securely capture order information and facilitate card
              payment processing.
            </p>
            <p>
              Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a
              subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
            </p>

            <h3 className="text-base font-bold text-primary mt-8 mb-4 uppercase tracking-wider">DATA RETENTION</h3>
            <p>
              When you place an order through the Site, we will maintain your Order Information for our records unless and until
              you ask us to delete this information.
            </p>

            <h3 className="text-base font-bold text-primary mt-8 mb-4 uppercase tracking-wider">CONTACT US</h3>
            <p>
              For more information about our privacy practices, if you have questions, or if you would like to make a complaint,
              please contact us by e-mail at <strong className="text-primary font-semibold">{siteConfig.email}</strong> or by phone at <strong className="text-primary font-semibold">{siteConfig.phone}</strong>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
