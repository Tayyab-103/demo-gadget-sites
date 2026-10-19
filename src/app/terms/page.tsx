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
      <main className="bg-neutral-bg text-ink py-16 md:py-24 relative overflow-hidden border-t border-line min-h-screen">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          
          {/* Breadcrumb & Navigation */}
          <div className="mb-6 flex items-center gap-2 text-xs text-muted">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <span>/</span>
            <span className="text-secondary">Terms &amp; Conditions</span>
          </div>

          <div className="mb-10">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-secondary">
                Customer Terms of Service
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black uppercase text-ink tracking-tight leading-tight">
              Terms &amp; Conditions
            </h1>
            <p className="text-muted text-xs sm:text-sm mt-3">
              Last Updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })} &bull; {siteConfig.brandName}
            </p>
          </div>

          <div className="bg-surface rounded-2xl p-6 sm:p-10 border border-line shadow-sm leading-relaxed text-ink/80 text-xs sm:text-sm space-y-8">
            
            {/* Overview */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black text-secondary uppercase tracking-widest">01</span>
                <h2 className="text-sm sm:text-base font-extrabold text-ink uppercase tracking-wider">
                  Overview &amp; Agreement
                </h2>
              </div>
              <p className="mb-3">
                This website is operated by <strong className="text-ink font-semibold">{siteConfig.brandName}</strong>. Throughout the site, the terms &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo; refer to <strong className="text-ink font-semibold">{siteConfig.brandName}</strong>. By accessing our site and purchasing our culinary tools, you agree to comply with and be bound by the terms, conditions, and policies stated herein.
              </p>
            </div>

            {/* Products & Pricing */}
            <div className="pt-6 border-t border-line">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black text-secondary uppercase tracking-widest">02</span>
                <h2 className="text-sm sm:text-base font-extrabold text-ink uppercase tracking-wider">
                  Products Offered &amp; Straight-Sale Billing Terms
                </h2>
              </div>
              <p className="mb-4">
                We offer everyday kitchen tools — a balloon whisk, a digital kitchen scale and kitchen shears — via transparent straight-sale transactions. There are no recurring subscriptions or hidden recurring charges.
              </p>

              <div className="bg-neutral-bg border border-line rounded-xl p-5 sm:p-6 space-y-6">
                {products.map((product) => (
                  <div key={product.id} className="border-b border-line pb-5 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-xs sm:text-sm font-bold text-ink uppercase">
                        {product.name}
                      </h3>
                      <span className="bg-neutral-bg border border-line text-secondary text-[0.65rem] font-bold uppercase px-2 py-0.5 rounded">
                        Straight Sale
                      </span>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-xs text-ink/80">
                      {product.bundles && product.bundles.map((bundle) => {
                        const totalCost = parseFloat(String(bundle.price));
                        return (
                          <li key={bundle.quantity}>
                            Ordering a <strong className="text-ink">{bundle.quantity > 1 ? `${bundle.quantity}-Pack` : "Single Unit"}</strong> incurs a one-time charge of <strong className="text-secondary">${totalCost.toFixed(2)}</strong> (FREE Shipping) for {product.name}. Delivery arrives within {siteConfig.shippingPeriod} business days via {siteConfig.shippingCarrier}. Statement descriptor: <strong className="text-ink">&ldquo;{siteConfig.descriptor}&rdquo;</strong>.
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping & Delivery */}
            <div className="pt-6 border-t border-line">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black text-secondary uppercase tracking-widest">03</span>
                <h2 className="text-sm sm:text-base font-extrabold text-ink uppercase tracking-wider">
                  Shipping &amp; Fulfillment
                </h2>
              </div>
              <p>
                All orders are packed at our Austin, TX facility and dispatched within 1 to 2 business days. We partner with <strong className="text-ink">{siteConfig.shippingCarrier}</strong> to ensure prompt, insured delivery within {siteConfig.shippingPeriod} business days. Tracking details are automatically dispatched to your email address upon shipment.
              </p>
            </div>

            {/* Guarantees & Returns */}
            <div className="pt-6 border-t border-line">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black text-secondary uppercase tracking-widest">04</span>
                <h2 className="text-sm sm:text-base font-extrabold text-ink uppercase tracking-wider">
                  {siteConfig.trialPeriod}-Day Return Policy
                </h2>
              </div>
              <p className="mb-3">
                Every purchase is a one-time charge and is covered by the following policy:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-ink/80">
                <li><strong className="text-ink">Return window:</strong> If a tool isn&rsquo;t right for you, contact us at {siteConfig.email} or {siteConfig.phone} within {siteConfig.trialPeriod} days of delivery to arrange a return.</li>
                <li><strong className="text-ink">Refunds:</strong> Once the returned item is received, your refund is issued to the original payment method. Items damaged in transit are replaced at no cost if reported within the return window.</li>
              </ul>
            </div>

            {/* Support Contact */}
            <div className="pt-6 border-t border-line">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-black text-secondary uppercase tracking-widest">05</span>
                <h2 className="text-sm sm:text-base font-extrabold text-ink uppercase tracking-wider">
                  Customer Support &amp; Inquiries
                </h2>
              </div>
              <div className="bg-neutral-bg border border-line rounded-xl p-5 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-secondary">Contact our support team:</div>
                <div className="text-ink text-xs">Email: <span className="font-semibold text-ink">{siteConfig.email}</span></div>
                <div className="text-ink text-xs">Phone: <span className="font-semibold text-ink">{siteConfig.phone}</span></div>
                <div className="text-muted text-xs">Address: {siteConfig.address}</div>
              </div>
            </div>

          </div>

          <div className="mt-8 text-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center font-bold text-xs uppercase tracking-widest text-primary-text bg-primary hover:bg-primary-dark transition-all px-8 py-3.5 rounded-lg shadow-sm"
            >
              &larr; Back to home
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
