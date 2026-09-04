"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteConfigData from "../../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="bg-[#E5E6EB] py-10 sm:py-16 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-neutral-text/50 font-medium">
            <Link href="/" className="hover:text-[#111] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#111]">Privacy Policy</span>
          </nav>

          {/* Hero Header Card */}
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-14 lg:p-16 shadow-[0_15px_45px_rgba(0,0,0,0.05)] border border-black/[0.04]">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#F4F4F6] border border-black/5 text-[0.65rem] font-bold uppercase tracking-widest text-[#111]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5B6BF0]" />
                Data Protection &amp; Security
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-black uppercase text-[#111] tracking-tight leading-[1.08] italic">
                Privacy Policy
              </h1>

              <p className="text-sm sm:text-base text-neutral-text/65 leading-relaxed pt-2">
                How your technical inquiries and order information are securely handled at {siteConfig.brandName}.
              </p>
            </div>
          </div>

          {/* Main Privacy Body */}
          <div className="bg-white rounded-[2.5rem] p-8 sm:p-14 lg:p-16 border border-black/[0.04] shadow-[0_15px_45px_rgba(0,0,0,0.05)] leading-relaxed text-neutral-text/75 text-xs sm:text-sm space-y-8">
            
            <div>
              <h3 className="text-sm sm:text-base font-black text-[#111] uppercase tracking-wider mb-3">
                Overview
              </h3>
              <p className="leading-relaxed">
                This Privacy Policy describes how your personal and corporate information is collected, used, and safeguarded when you visit or place equipment orders through <strong className="text-[#111] font-semibold">{siteConfig.websiteUrl}</strong>.
              </p>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-black text-[#111] uppercase tracking-wider mb-3">
                Information We Collect
              </h3>
              <p className="leading-relaxed mb-3">
                When you browse our catalog, we automatically collect basic device telemetry (browser type, IP address, operating system, and diagnostic session identifiers) to ensure site stability and secure shopping.
              </p>
              <p className="leading-relaxed">
                When purchasing diagnostic devices or requesting contractor quotes, we securely collect necessary fulfillment details: name, company name, billing/shipping address, payment tokenization records, email address, and telephone number.
              </p>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-black text-[#111] uppercase tracking-wider mb-3">
                How We Use Your Data
              </h3>
              <div className="bg-[#F8F9FB] border border-black/[0.05] rounded-2xl p-6 sm:p-8 space-y-3">
                <p className="font-bold text-[#111] text-xs sm:text-sm">Order information is utilized strictly to:</p>
                <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-neutral-text/70">
                  <li>Process credit card authorizations and deliver encrypted order invoices;</li>
                  <li>Coordinate warehouse dispatch with {siteConfig.shippingCarrier} tracked logistics;</li>
                  <li>Deliver calibration certificate archives and technical warranty records;</li>
                  <li>Screen transactions for unauthorized payment activity.</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-black text-[#111] uppercase tracking-wider mb-3">
                Data Security &amp; Retention
              </h3>
              <p className="leading-relaxed">
                We employ industry-standard 256-bit SSL encryption across all checkout endpoints. We retain transaction data strictly for accounting compliance and warranty verification periods.
              </p>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-black text-[#111] uppercase tracking-wider mb-3">
                Contact Privacy Officer
              </h3>
              <p className="leading-relaxed">
                For questions regarding our privacy standards or data deletion requests, contact our privacy desk directly at <strong className="text-[#111] font-semibold">{siteConfig.email}</strong> or call <strong className="text-[#111] font-semibold">{siteConfig.phone}</strong>.
              </p>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
