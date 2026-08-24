"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteConfigData from "../../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

export default function Terms() {
  return (
    <>
      <Header />
      <main className="bg-[#FAF7F2] py-12 sm:py-20 relative overflow-hidden min-h-[80vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-6">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-[#FF6B8B] block mb-1">
              Legal Disclosures
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E2330] tracking-tight">
              Terms of Service
            </h1>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xs leading-relaxed text-gray-600 text-xs sm:text-sm space-y-6">
            <p>
              Welcome to <strong className="text-[#1E2330]">{siteConfig.brandName}</strong>. This website is operated by <strong className="text-[#1E2330]">{siteConfig.corpName}</strong>. Throughout the site, the terms &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; refer to <strong className="text-[#1E2330]">{siteConfig.brandName}</strong>.
            </p>

            <h3 className="text-sm font-black text-[#1E2330] uppercase tracking-wider">Online Store Terms</h3>
            <p>
              By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence.
              You may not use our baby products for any unauthorized or illegal purpose.
            </p>

            <h3 className="text-sm font-black text-[#1E2330] uppercase tracking-wider">Products &amp; Pricing</h3>
            <p>
              Prices for our organic baby products and multi-pack bundles are subject to change without notice. We reserve the right at any time to modify or discontinue any product.
            </p>

            <h3 className="text-sm font-black text-[#1E2330] uppercase tracking-wider">Billing &amp; Accuracy</h3>
            <p>
              We reserve the right to refuse any order you place with us. You agree to provide current, complete, and accurate purchase and account information for all purchases made at our store.
            </p>
            <p>
              Your bank or credit card transaction will appear as: <strong className="text-[#1E2330]">{siteConfig.descriptor}</strong>.
            </p>

            <h3 className="text-sm font-black text-[#1E2330] uppercase tracking-wider">Returns &amp; 30-Day Guarantee</h3>
            <p>
              We offer a 30-day satisfaction guarantee on our organic baby products. For returns or support, contact <strong className="text-[#1E2330]">{siteConfig.email}</strong> or call <strong className="text-[#1E2330]">{siteConfig.phone}</strong>.
            </p>

            <h3 className="text-sm font-black text-[#1E2330] uppercase tracking-wider">Contact Information</h3>
            <p>
              Questions about the Terms of Service should be sent to us at <strong className="text-[#1E2330]">{siteConfig.email}</strong> or by mail to: <br />
              <strong className="text-[#1E2330]">{siteConfig.corpName}</strong>, {siteConfig.address}.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
