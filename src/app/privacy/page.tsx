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
      <main className="bg-[#fffafb] pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden border-b border-black/6 font-sans">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl md:text-4xl font-black text-[#1e293b] mb-8 border-b border-black/8 pb-6 tracking-tight">
            Privacy Policy
          </h1>

          <div className="bg-white rounded-3xl p-8 md:p-10 border border-black/8 shadow-sm leading-relaxed text-black/75 text-xs md:text-sm space-y-6">
            <p>
              This Privacy Policy describes how your personal information is collected, used, and shared when you visit
              or make a toy purchase from <strong className="text-[#1e293b] font-semibold">{siteConfig.websiteUrl}</strong> (the “Site”), operated by <strong className="text-[#1e293b] font-semibold">{siteConfig.corpName}</strong>.
            </p>

            <h3 className="text-base font-black text-[#ff4370] mt-8 mb-4 uppercase tracking-wider">
              PERSONAL INFORMATION WE COLLECT
            </h3>
            <p>
              When you visit the Site, we automatically collect certain technical information about your device, including information
              about your web browser, IP address, time zone, and some of the cookies installed on your device.
              Additionally, as you browse the Site, we collect information about the individual toy items or board games that you view,
              what websites or search terms referred you to the Site, and information about how you interact with the Site.
            </p>
            <p>
              Additionally, when you place an order for toys, puzzles, board games, or plush animals through the Site, we collect certain information
              from you, including your name, billing address, delivery address, payment information (including encrypted credit card numbers processed via PCI-DSS certified gateways),
              email address, and phone number. We refer to this information as “Order Information.”
            </p>

            <h3 className="text-base font-black text-[#ff4370] mt-8 mb-4 uppercase tracking-wider">
              HOW DO WE USE YOUR PERSONAL INFORMATION?
            </h3>
            <p>
              We use the Order Information that we collect generally to fulfill any orders placed through the Site (including
              processing your payment information, arranging for tracked {siteConfig.shippingCarrier} carrier shipping, and providing you with invoices and order confirmations).
              Additionally, we use this Order Information to:
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Communicate with you regarding delivery updates and real-time tracking numbers;</li>
              <li>Screen our orders for potential risk or payment fraud; and</li>
              <li>Provide you with information or toy promotional releases when aligned with your preferences.</li>
            </ul>

            <h3 className="text-base font-black text-[#ff4370] mt-8 mb-4 uppercase tracking-wider">
              SHARING YOUR PERSONAL INFORMATION
            </h3>
            <p>
              We share your Personal Information only with authorized third-party service providers (such as payment processing processors and shipping carriers like {siteConfig.shippingCarrier}) to assist us in fulfilling orders as described above. We never sell or rent your personal information to third-party data brokers.
            </p>

            <h3 className="text-base font-black text-[#ff4370] mt-8 mb-4 uppercase tracking-wider">
              CONTACT US
            </h3>
            <p>
              For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <strong className="text-[#1e293b] font-semibold">{siteConfig.email}</strong> or by mail using the details provided below:
            </p>
            <p className="p-4 bg-[#f8fafc] rounded-2xl border border-black/5 text-xs">
              <strong>{siteConfig.corpName}</strong><br />
              Attn: Privacy Officer - {siteConfig.brandName}<br />
              {siteConfig.address}<br />
              Toll-Free Hotline: {siteConfig.phone}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
