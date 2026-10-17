"use client";

import React from "react";
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
      <main className="bg-[#FAF9F7] py-16 md:py-24 relative overflow-hidden">
        <div className="w-full max-w-4xl mx-auto px-6 relative z-10">
          <span className="category-subtitle mb-4 block">Legal &amp; Compliance</span>
          <h1 className="font-heading text-3xl md:text-4xl font-bold uppercase text-primary mb-8 border-b border-black/10 pb-6 tracking-tight">
            Terms &amp; Conditions
          </h1>

          <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm leading-relaxed text-neutral-text/75 text-xs md:text-sm space-y-6">
            <h3 className="font-heading text-base font-bold text-primary mt-8 mb-4 uppercase tracking-wider">OVERVIEW</h3>
            <p>
              This website is operated by <strong className="text-primary font-semibold">{siteConfig.brandName}</strong> (owned and operated by <strong className="text-primary font-semibold">{siteConfig.corpName}</strong>). Throughout the site, the terms “we”,
              “us” and “our” refer to <strong className="text-primary font-semibold">{siteConfig.brandName}</strong>. <strong className="text-primary font-semibold">{siteConfig.brandName}</strong> offers
              this website, including all information, tools and services available from this site to you, the user,
              conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
            </p>
            <p>
              By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be
              bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional
              terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of
              Service apply to all users of the site, including without limitation users who are browsers, customers,
              merchants, and/ or contributors of content.
            </p>

            <h3 className="font-heading text-base font-bold text-primary mt-8 mb-4 uppercase tracking-wider">PRODUCTS OFFERED &amp; BILLING TERMS</h3>
            <p>
              We offer premium women&apos;s fashion apparel and ready-to-wear garments (MCC 5621) through one-time purchases (Straight Sale) under the following pricing structures:
            </p>

            {/* Dynamic Price Points Display */}
            <div className="bg-[#FAF9F7] border border-black/5 rounded-2xl p-6 md:p-8 my-6">
              {products.map((product) => (
                <div key={product.id} className="mb-6 pb-6 border-b border-black/10 last:border-0 last:mb-0 last:pb-0">
                  <h4 className="font-heading text-sm md:text-base font-bold text-primary mb-3">
                    {product.name}
                  </h4>
                  <ul className="list-disc pl-5 m-0 space-y-3">
                    {product.bundles && product.bundles.map((bundle) => {
                      const totalCost = parseFloat(String(bundle.price));
                      const shippingText = product.ssShipping === "0.00" || parseFloat(product.ssShipping) === 0
                        ? "FREE Shipping & Handling"
                        : `$${product.ssShipping} Shipping & Handling`;

                      return (
                        <li key={bundle.quantity} className="text-xs md:text-sm leading-relaxed text-neutral-text/75">
                          Upon ordering <strong className="text-primary font-semibold">{bundle.quantity} {bundle.quantity > 1 ? "Pieces Bundle" : "Single Garment"}</strong>,
                          you will be charged a singular transaction fee of <strong className="text-primary font-semibold">${totalCost.toFixed(2)}</strong> (including {shippingText}) for {product.name}.
                          Your package will be delivered via {siteConfig.shippingCarrier} within {siteConfig.shippingPeriod} business days of payment.
                          The credit card charge will appear on your statement as <strong className="text-primary font-semibold">“{siteConfig.descriptor}”</strong>.
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            <h3 className="font-heading text-base font-bold text-primary mt-8 mb-4 uppercase tracking-wider">SECTION 1 - APPAREL &amp; SIZING TERMS</h3>
            <p>
              Garment sizing conforms to standard ready-to-wear proportions. We provide size measurements on each product page. Unworn, unwashed garments with tags intact qualify for complimentary size exchange or refund within 30 days of delivery.
            </p>

            <h3 className="font-heading text-base font-bold text-primary mt-8 mb-4 uppercase tracking-wider">SECTION 2 - SHIPPING &amp; DELIVERY POLICY</h3>
            <p>
              All orders are processed and shipped within 1-2 business days of payment confirmation. We ship our packages via{" "}
              {siteConfig.shippingCarrier} and delivery typically takes between {siteConfig.shippingPeriod} business days.
              You will receive a tracking number via email once your order has been dispatched.
            </p>

            <h3 className="font-heading text-base font-bold text-primary mt-8 mb-4 uppercase tracking-wider">SECTION 3 - RETURN &amp; REFUND POLICY</h3>
            <p>
              We stand behind our craftsmanship with a 30-day money-back guarantee. If you are not satisfied with your purchase,
              please contact our customer concierge at <strong className="text-primary font-semibold">{siteConfig.phone}</strong> or email us at{" "}
              <strong className="text-primary font-semibold">{siteConfig.email}</strong> to obtain return instructions.
            </p>
            <p>
              Returns must be shipped to our designated facility at: <strong className="text-primary font-semibold">{siteConfig.address}</strong>.
              Refunds will be processed back to the original payment method within 5-7 business days of receipt.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
