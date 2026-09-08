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
      <main className="bg-gradient-to-br from-[#F3EEFF] via-white to-[#EDE9FE] py-16 md:py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-[10%] right-[-250px] w-[500px] h-[500px] rounded-full bg-purple-200/20 blur-3xl pointer-events-none" />

        <div className="w-full max-w-4xl mx-auto px-6 relative z-10">

          {/* Page Header */}
          <div className="mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-[#7C3AED] font-bold text-xs uppercase tracking-widest mb-4 border border-purple-200">
              🔒 Legal
            </span>
            <h1 className="text-3xl md:text-4xl font-black text-[#1E1040] tracking-tight border-b border-purple-100 pb-6">
              Privacy Policy
            </h1>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-purple-100 shadow-lg leading-relaxed text-gray-600 text-xs md:text-sm space-y-6">

            <p>
              This Privacy Policy describes how your personal information is collected, used, and shared when you visit
              or make a purchase from <strong className="text-[#1E1040] font-semibold">{siteConfig.websiteUrl}</strong> (the &ldquo;Site&rdquo;).
            </p>

            <h3 className="text-base font-bold text-[#7C3AED] mt-8 mb-4 uppercase tracking-wider">PERSONAL INFORMATION WE COLLECT</h3>
            <p>
              When you visit the Site, we automatically collect certain information about your device, including information
              about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
              Additionally, as you browse the Site, we collect information about the individual web pages or products that you view,
              what websites or search terms referred you to the Site, and information about how you interact with the Site.
            </p>
            <p>
              Additionally, when you make a purchase or attempt to make a purchase through the Site, we collect certain information
              from you, including your name, billing address, shipping address, payment information (including credit card numbers),
              email address, and phone number. We refer to this information as &ldquo;Order Information.&rdquo;
            </p>

            <h3 className="text-base font-bold text-[#7C3AED] mt-8 mb-4 uppercase tracking-wider">HOW DO WE USE YOUR PERSONAL INFORMATION?</h3>
            <p>
              We use the Order Information that we collect generally to fulfill any orders placed through the Site (including
              processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).
              Additionally, we use this Order Information to:
            </p>
            <ul className="list-disc pl-5 mb-6 space-y-2">
              <li>Communicate with you about your order status and updates;</li>
              <li>Screen our orders for potential risk or fraud; and</li>
              <li>Provide you with information or offers relating to our products or services, where permitted by law.</li>
            </ul>

            <h3 className="text-base font-bold text-[#7C3AED] mt-8 mb-4 uppercase tracking-wider">SHARING YOUR PERSONAL INFORMATION</h3>
            <p>
              We share your Personal Information with third parties only to help us use your Personal Information as described above.
              For example, we use secure server-side API integrations to capture order information and facilitate payment processing.
            </p>
            <p>
              We may also share your Personal Information to comply with applicable laws and regulations, to respond to a
              subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
            </p>

            <h3 className="text-base font-bold text-[#7C3AED] mt-8 mb-4 uppercase tracking-wider">COOKIES</h3>
            <p>
              We use cookies to help us remember and process items in your shopping cart, understand and save your preferences
              for future visits, and compile aggregate data about site traffic and interaction. You can choose to have your computer
              warn you each time a cookie is being sent, or you can choose to turn off all cookies through your browser settings.
            </p>

            <h3 className="text-base font-bold text-[#7C3AED] mt-8 mb-4 uppercase tracking-wider">DATA RETENTION</h3>
            <p>
              When you place an order through the Site, we will maintain your Order Information for our records unless and until
              you ask us to delete this information. You may request deletion of your data at any time by contacting our support team.
            </p>

            <h3 className="text-base font-bold text-[#7C3AED] mt-8 mb-4 uppercase tracking-wider">YOUR RIGHTS</h3>
            <p>
              If you are a European resident, you have the right to access personal information we hold about you and to ask that your
              personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us
              through the contact information below.
            </p>

            <h3 className="text-base font-bold text-[#7C3AED] mt-8 mb-4 uppercase tracking-wider">CONTACT US</h3>
            <p>
              For more information about our privacy practices, if you have questions, or if you would like to make a complaint,
              please contact us by email at <strong className="text-[#1E1040] font-semibold">{siteConfig.email}</strong> or by phone at{" "}
              <strong className="text-[#1E1040] font-semibold">{siteConfig.phone}</strong>.
            </p>

            {/* Contact card */}
            <div className="mt-6 p-5 rounded-2xl bg-purple-50 border border-purple-100 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
              <div>
                <div className="text-[0.68rem] font-bold uppercase tracking-wider text-[#7C3AED] mb-0.5">Nursery Support Team</div>
                <div className="text-sm font-black text-[#1E1040]">{siteConfig.brandName}</div>
                <div className="text-xs text-gray-500 mt-0.5">{siteConfig.address}</div>
              </div>
              <div className="flex flex-col gap-1 sm:items-end text-xs text-gray-600 font-medium">
                <span>📧 {siteConfig.email}</span>
                <span>📞 {siteConfig.phone}</span>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
