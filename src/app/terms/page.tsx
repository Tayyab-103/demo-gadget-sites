"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteConfigData from "../../../config/site-config.json";
import productsData from "../../../config/products.json";
import { SiteConfig, Product } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;
const products = productsData as unknown as Product[];

export default function Terms() {
  return (
    <>
      <Header />
      <main className="flex-grow bg-neutral-bg">
        {/* Dedicated Legal Header Banner */}
        <section className="bg-primary text-white py-14 md:py-20 relative overflow-hidden border-b border-black/10">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 relative z-10 text-left">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/50 mb-3">
              <Link href="/" className="hover:text-accent-light transition-colors">Home</Link>
              <span>/</span>
              <span className="text-accent-light">Legal</span>
            </div>
            
            <h1 className="heading-serif text-4xl sm:text-5xl md:text-6xl text-white mb-4">
              Terms &amp; <span className="text-accent-light">Conditions</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-white/80 max-w-2xl leading-relaxed">
              Purchase terms, shipping, returns and terms of service for {siteConfig.brandName}.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-20">
          <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-black/5 shadow-sm leading-relaxed text-neutral-text/75 text-xs sm:text-sm space-y-6">
              
              <div className="border-b border-black/5 pb-6">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-secondary block mb-2">
                  TERMS OF SERVICE
                </span>
                <p>
                  This website is operated by <strong className="text-neutral-text font-bold">{siteConfig.brandName}</strong>. Throughout the site, the terms “we”,
                  “us” and “our” refer to <strong className="text-neutral-text font-bold">{siteConfig.brandName}</strong>. By visiting our site and/or purchasing tools from us,
                  you agree to be bound by the following terms and conditions.
                </p>
              </div>

              <div>
                <h3 className="text-sm sm:text-base font-extrabold text-neutral-text mb-3 uppercase tracking-wider font-sans">
                  Overview &amp; Acceptance
                </h3>
                <p className="mb-3">
                  Please read these Terms of Service carefully before accessing or making a purchase on our website. By accessing or using
                  any part of the site, you agree to be bound by these terms. If you do not agree to all terms and conditions,
                  then you may not access the website or purchase our products.
                </p>
              </div>

              {/* Products & Pricing Points Card */}
              <div className="border-t border-black/5 pt-6">
                <h3 className="text-sm sm:text-base font-extrabold text-neutral-text mb-3 uppercase tracking-wider font-sans">
                  Products Offered &amp; Transparent Billing Terms
                </h3>
                <p className="mb-4">
                  We offer garden hand tools, including trowels, pruning shears and hand cultivators, through one-time purchases (Straight Sale) under the following clear terms:
                </p>

                <div className="bg-neutral-bg border border-black/5 rounded-2xl p-5 sm:p-6 space-y-6">
                  {products.map((product) => (
                    <div key={product.id} className="pb-4 border-b border-black/5 last:border-0 last:pb-0">
                      <h4 className="text-xs sm:text-sm font-extrabold text-neutral-text uppercase tracking-wider mb-2">
                        {product.name}
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-xs text-neutral-text/80">
                        {product.bundles && product.bundles.map((bundle) => {
                          const totalCost = parseFloat(String(bundle.price));
                          const shippingText = product.ssShipping === "0.00" || parseFloat(product.ssShipping) === 0
                            ? "FREE Shipping"
                            : `$${product.ssShipping} Shipping`;

                          return (
                            <li key={bundle.quantity}>
                              Upon ordering a <strong className="text-neutral-text font-bold">{bundle.quantity} {bundle.quantity > 1 ? "Tools Multi-Pack" : "Tool"}</strong>,
                              you will be charged a singular fee of <strong className="text-neutral-text font-bold">${totalCost.toFixed(2)}</strong> ({shippingText}) for {product.name}.
                              Delivery is fulfilled via {siteConfig.shippingCarrier} within {siteConfig.shippingPeriod} business days.
                              The charge on your statement will appear as <strong className="text-neutral-text font-bold">“{siteConfig.descriptor}”</strong>.
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-black/5 pt-6">
                <h3 className="text-sm sm:text-base font-extrabold text-neutral-text mb-3 uppercase tracking-wider font-sans">
                  Section 1 — Online Store Guidelines
                </h3>
                <p>
                  By agreeing to these Terms, you represent that you are at least the age of majority in your state or province of residence.
                  You may not use our garden tools or site for any unauthorized or unlawful purpose, nor violate any laws in your jurisdiction.
                </p>
              </div>

              <div className="border-t border-black/5 pt-6">
                <h3 className="text-sm sm:text-base font-extrabold text-neutral-text mb-3 uppercase tracking-wider font-sans">
                  Section 2 — Shipping &amp; Delivery
                </h3>
                <p>
                  All orders are inspected, carefully packaged, and dispatched within 1-2 business days.
                  We ship via {siteConfig.shippingCarrier} with expected delivery in {siteConfig.shippingPeriod} business days. You will receive an automated tracking code via email upon dispatch.
                </p>
              </div>

              <div className="border-t border-black/5 pt-6">
                <h3 className="text-sm sm:text-base font-extrabold text-neutral-text mb-3 uppercase tracking-wider font-sans">
                  Section 3 — {siteConfig.trialPeriod}-Day Satisfaction Trial &amp; Returns
                </h3>
                <p className="mb-3">
                  We stand behind every tool with a {siteConfig.trialPeriod}-day satisfaction trial. If you are not completely satisfied with your purchase,
                  reach our customer support team at <strong className="text-neutral-text font-bold">{siteConfig.phone}</strong> or email{" "}
                  <strong className="text-neutral-text font-bold">{siteConfig.email}</strong> to obtain an RMA return authorization.
                </p>
                <p>
                  Returns address: <strong className="text-neutral-text font-bold">{siteConfig.address}</strong>.
                  Refunds are credited to the original payment method within 5-7 business days of receipt.
                </p>
              </div>

              <div className="border-t border-black/5 pt-6 bg-neutral-bg p-6 rounded-2xl">
                <h3 className="text-sm sm:text-base font-extrabold text-neutral-text mb-2 uppercase tracking-wider font-sans">
                  Inquiries &amp; Legal Notices
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 text-xs font-bold text-neutral-text">
                  <div>
                    <span className="text-secondary uppercase text-[0.65rem] tracking-wider block">Email:</span>
                    <a href={`mailto:${siteConfig.email}`} className="hover:text-secondary transition-colors">{siteConfig.email}</a>
                  </div>
                  <div>
                    <span className="text-secondary uppercase text-[0.65rem] tracking-wider block">Phone:</span>
                    <a href={`tel:${siteConfig.phone}`} className="hover:text-secondary transition-colors">{siteConfig.phone}</a>
                  </div>
                  <div>
                    <span className="text-secondary uppercase text-[0.65rem] tracking-wider block">Address:</span>
                    <span>{siteConfig.address}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
