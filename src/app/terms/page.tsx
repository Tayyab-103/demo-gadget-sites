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
      <main className="bg-neutral-bg py-16 md:py-24 relative overflow-hidden">
        {/* Background decorative glow spot */}
        <div className="glow-bg absolute top-[10%] left-[-250px] opacity-35 pointer-events-none" />

        <div className="w-full max-w-4xl mx-auto px-6 relative z-10">
          <span className="eyebrow mb-4">Legal</span>
          <h1 className="text-3xl md:text-4xl font-black uppercase text-primary mb-8 border-b border-black/5 pb-6 tracking-tight">
            Terms &amp; Conditions
          </h1>

          <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-md leading-relaxed text-neutral-text/75 text-xs md:text-sm space-y-6">
            <h3 className="text-base font-bold text-primary mt-8 mb-4 uppercase tracking-wider">OVERVIEW</h3>
            <p>
              This website is operated by <strong className="text-primary font-semibold">{siteConfig.brandName}</strong>. Throughout the site, the terms “we”,
              “us” and “our” refer to <strong className="text-primary font-semibold">{siteConfig.brandName}</strong>. <strong className="text-primary font-semibold">{siteConfig.brandName}</strong> offers
              this website, including all information, tools and services available from this site to you, the user,
              conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
            </p>
            <p>
              By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be
              bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional
              terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of
              Service apply to all users of the site, including without limitation users who are browsers, vendors,
              customers, merchants, and/ or contributors of content.
            </p>
            <p>
              Please read these Terms of Service carefully before accessing or using our website. By accessing or using
              any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the
              terms and conditions of this agreement, then you may not access the website or use any services.
            </p>

            <h3 className="text-base font-bold text-primary mt-8 mb-4 uppercase tracking-wider">PRODUCTS OFFERED &amp; BILLING TERMS</h3>
            <p>
              We offer hand-forged carbon steel garden tools, precision bypass pruning shears, and heirloom horticultural instruments through one-time purchases (Straight Sale) under the following pricing structures:
            </p>

            {/* Dynamic Price Points Display */}
            <div className="bg-neutral-bg border border-black/5 rounded-2xl p-6 md:p-8 my-6 shadow-inner">
              {products.map((product) => (
                <div key={product.id} className="mb-6 pb-6 border-b border-black/5 last:border-0 last:mb-0 last:pb-0">
                  <h4 className="text-sm md:text-base font-bold text-primary mb-3">
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
                          Upon ordering a <strong className="text-primary font-semibold">{bundle.quantity} {bundle.quantity > 1 ? "Tools Multi-Pack" : "Tool"}</strong>,
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

            <h3 className="text-base font-bold text-primary mt-8 mb-4 uppercase tracking-wider">SECTION 1 - ONLINE STORE TERMS</h3>
            <p>
              By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state
              or province of residence, or that you are the age of majority in your state or province of residence and you
              have given us your consent to allow any of your minor dependents to use this site.
            </p>
            <p>
              You may not use our garden tools or instruments for any illegal or unauthorized purpose nor may you, in the use of the Service,
              violate any laws in your jurisdiction (including but not limited to safety, trade, or copyright laws).
            </p>

            <h3 className="text-base font-bold text-primary mt-8 mb-4 uppercase tracking-wider">SECTION 2 - SHIPPING &amp; DELIVERY POLICY</h3>
            <p>
              All orders are hand-inspected, packed with plastic-free recyclable materials, and shipped within 1-2 business days of payment confirmation. We ship our tool shipments via{" "}
              {siteConfig.shippingCarrier} and delivery typically takes between {siteConfig.shippingPeriod} business days.
              You will receive a tracking number via email once your order has been dispatched from our foundry facility.
            </p>

            <h3 className="text-base font-bold text-primary mt-8 mb-4 uppercase tracking-wider">SECTION 3 - 60-DAY FIELD TRIAL &amp; RETURN POLICY</h3>
            <p>
              We stand behind our metallurgical craftsmanship with a 60-day garden field trial and satisfaction guarantee. If you are not completely satisfied with your tool's performance in the garden,
              please contact our workshop support team at <strong className="text-primary font-semibold">{siteConfig.phone}</strong> or email us at{" "}
              <strong className="text-primary font-semibold">{siteConfig.email}</strong> to obtain a Return Merchandise Authorization (RMA) number.
            </p>
            <p>
              Returns must be safely packaged and shipped to our designated workshop facility at: <strong className="text-primary font-semibold">{siteConfig.address}</strong>.
              Refunds will be processed back to the original payment method within 5-7 business days of receiving the returned item.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
