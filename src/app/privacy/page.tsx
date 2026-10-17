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
      <main className="bg-[#FAF9F7] py-16 md:py-24 relative overflow-hidden">
        <div className="w-full max-w-4xl mx-auto px-6 relative z-10">
          <span className="category-subtitle mb-4 block">Privacy &amp; Data Protection</span>
          <h1 className="font-heading text-3xl md:text-4xl font-bold uppercase text-primary mb-8 border-b border-black/10 pb-6 tracking-tight">
            Privacy Policy
          </h1>

          <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm leading-relaxed text-neutral-text/75 text-xs md:text-sm space-y-6">
            <p>
              This Privacy Policy describes how your personal information is collected, used, and shared when you visit
              or make a purchase from <strong className="text-primary font-semibold">{siteConfig.websiteUrl}</strong> (operated by <strong className="text-primary font-semibold">{siteConfig.corpName}</strong> d/b/a <strong className="text-primary font-semibold">{siteConfig.brandName}</strong>).
            </p>

            <h3 className="font-heading text-base font-bold text-primary mt-8 mb-4 uppercase tracking-wider">PERSONAL INFORMATION WE COLLECT</h3>
            <p>
              When you visit the Site, we automatically collect certain information about your device, including information
              about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
              Additionally, as you browse the Site, we collect information about the individual web pages or apparel products that you view,
              what websites or search terms referred you to the Site, and information about how you interact with the Site.
            </p>
            <p>
              Additionally, when you make a purchase or attempt to make a purchase through the Site, we collect certain information
              from you, including your name, billing address, shipping address, payment information (including credit card numbers),
              email address, and phone number. We refer to this information as “Order Information.”
            </p>

            <h3 className="font-heading text-base font-bold text-primary mt-8 mb-4 uppercase tracking-wider">HOW DO WE USE YOUR PERSONAL INFORMATION?</h3>
            <p>
              We use the Order Information that we collect generally to fulfill any orders placed through the Site (including
              processing your payment information through our merchant gateway, arranging for shipping via {siteConfig.shippingCarrier}, and providing you with invoices and/or order confirmations).
              Transactions will reflect the billing descriptor <strong className="text-primary font-semibold">&ldquo;{siteConfig.descriptor}&rdquo;</strong>.
              Additionally, we use this Order Information to:
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Communicate with you regarding garment orders, sizing, and shipping updates;</li>
              <li>Screen our orders for potential risk or fraud; and</li>
              <li>Provide you with information or seasonal releases relating to our collections.</li>
            </ul>

            <h3 className="font-heading text-base font-bold text-primary mt-8 mb-4 uppercase tracking-wider">SHARING YOUR PERSONAL INFORMATION</h3>
            <p>
              We share your Personal Information with trusted third parties to help us fulfill and process orders as described above.
              For example, we use encrypted payment gateway integrations to capture transactions securely.
            </p>
            <p>
              Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a
              subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
            </p>

            <h3 className="font-heading text-base font-bold text-primary mt-8 mb-4 uppercase tracking-wider">DATA RETENTION</h3>
            <p>
              When you place an order through the Site, we will maintain your Order Information for our records unless and until
              you ask us to delete this information.
            </p>

            <h3 className="font-heading text-base font-bold text-primary mt-8 mb-4 uppercase tracking-wider">CONTACT US</h3>
            <p>
              For more information about our privacy practices, or if you have questions, please contact us by e-mail at <strong className="text-primary font-semibold">{siteConfig.email}</strong>, by phone at <strong className="text-primary font-semibold">{siteConfig.phone}</strong>, or by mail at:
            </p>
            <p className="font-medium text-primary">
              {siteConfig.corpName}<br />
              Attn: Privacy Compliance<br />
              {siteConfig.address}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
