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
      <main className="bg-neutral-bg py-10 sm:py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          
          <div className="text-center sm:text-left mb-8 sm:mb-10">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-neutral-text/50 block mb-2">
              LEGAL NOTICE
            </span>
            <h1 className="font-serif font-medium text-3xl sm:text-4xl md:text-5xl text-neutral-text leading-tight">
              PRIVACY POLICY
            </h1>
          </div>

          <div className="bg-neutral-bg rounded-3xl p-6 sm:p-10 md:p-12 border border-secondary/60 shadow-md leading-relaxed text-neutral-text/75 text-xs sm:text-sm space-y-6">
            <p>
              This Privacy Policy describes how your personal information is collected, used, and shared when you visit
              or make a purchase from <strong className="text-primary font-semibold">{siteConfig.websiteUrl}</strong> (the “Site”).
            </p>

            <h2 className="font-serif font-medium text-base sm:text-lg text-neutral-text pt-4 border-t border-secondary/50">
              PERSONAL INFORMATION WE COLLECT
            </h2>
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

            <h2 className="font-serif font-medium text-base sm:text-lg text-neutral-text pt-4 border-t border-secondary/50">
              HOW DO WE USE YOUR PERSONAL INFORMATION?
            </h2>
            <p>
              We use the Order Information that we collect generally to fulfill any orders placed through the Site (including
              processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).
              Additionally, we use this Order Information to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Communicate with you regarding orders and delivery milestones;</li>
              <li>Screen our orders for potential risk or fraud; and</li>
              <li>Provide you with information or updates relating to our handcrafted furnishings or services.</li>
            </ul>

            <h2 className="font-serif font-medium text-base sm:text-lg text-neutral-text pt-4 border-t border-secondary/50">
              SHARING YOUR PERSONAL INFORMATION
            </h2>
            <p>
              We share your Personal Information with trusted service providers to help us fulfill orders and deliver an optimal experience, as described above.
              For example, we use encrypted payment processors and logistics partners ({siteConfig.shippingCarrier}) to securely fulfill purchases.
            </p>
            <p>
              Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a
              subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
            </p>

            <h2 className="font-serif font-medium text-base sm:text-lg text-neutral-text pt-4 border-t border-secondary/50">
              DATA RETENTION
            </h2>
            <p>
              When you place an order through the Site, we will maintain your Order Information for our records unless and until
              you ask us to delete this information.
            </p>

            <h2 className="font-serif font-medium text-base sm:text-lg text-neutral-text pt-4 border-t border-secondary/50">
              CONTACT US
            </h2>
            <p>
              For more information about our privacy practices, if you have questions, or if you would like to make an inquiry,
              please contact our customer support team at <strong className="text-primary font-semibold">{siteConfig.email}</strong> or call <strong className="text-primary font-semibold">{siteConfig.phone}</strong>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

