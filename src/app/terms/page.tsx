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
      <main className="bg-[#FAF8F5] py-16 md:py-24 relative overflow-hidden">
        {/* Background decorative glow spot */}
        <div className="glow-bg absolute top-[10%] left-[-250px] opacity-25 pointer-events-none" />

        <div className="w-full max-w-4xl mx-auto px-6 relative z-10">
          <span className="eyebrow mb-3">Mercantile Policies</span>
          <h1 className="text-3xl md:text-4xl font-black uppercase text-primary mb-8 border-b border-black/[0.06] pb-6 tracking-tight">
            Terms &amp; Conditions
          </h1>

          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-black/[0.06] shadow-sm leading-relaxed text-neutral-text/80 text-xs md:text-sm space-y-6">
            <h3 className="text-base font-black text-primary uppercase tracking-wider">OVERVIEW</h3>
            <p>
              This website is operated by <strong className="text-primary font-bold">{siteConfig.brandName}</strong>. Throughout the site, the terms “we”,
              “us” and “our” refer to <strong className="text-primary font-bold">{siteConfig.brandName}</strong>. <strong className="text-primary font-bold">{siteConfig.brandName}</strong> offers
              this website, including all information, tools and services available from this site to you, the user,
              conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
            </p>
            <p>
              By visiting our site and/or purchasing pet essentials from us, you engage in our “Service” and agree to be
              bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional
              terms and conditions and policies referenced herein and/or available by hyperlink.
            </p>

            <h3 className="text-base font-black text-primary uppercase tracking-wider">PRODUCTS OFFERED &amp; BILLING TERMS</h3>
            <p>
              We offer premium, veterinarian-approved pet products and essentials through one-time purchases (Straight Sale) under the following transparent pricing structures:
            </p>

            {/* Dynamic Price Points Display */}
            <div className="bg-[#FAF8F5] border border-black/[0.06] rounded-2xl p-6 sm:p-8 my-6 shadow-inner">
              {products.map((product) => (
                <div key={product.id} className="mb-6 pb-6 border-b border-black/[0.06] last:border-0 last:mb-0 last:pb-0">
                  <h4 className="text-sm md:text-base font-black text-primary mb-3">
                    {product.name}
                  </h4>
                  <ul className="list-disc pl-5 m-0 space-y-2.5">
                    {product.bundles && product.bundles.map((bundle) => {
                      const totalCost = parseFloat(String(bundle.price));
                      const shippingText = product.ssShipping === "0.00" || parseFloat(product.ssShipping) === 0
                        ? "FREE Tracked Shipping & Handling"
                        : `$${product.ssShipping} Shipping & Handling`;

                      return (
                        <li key={bundle.quantity} className="text-xs md:text-sm leading-relaxed text-neutral-text/80">
                          Upon ordering a <strong className="text-primary font-bold">{bundle.quantity} {bundle.quantity > 1 ? "Units Bundle" : "Unit Pack"}</strong>,
                          you will be charged a singular transaction fee of <strong className="text-primary font-bold">${totalCost.toFixed(2)}</strong> (including {shippingText}) for {product.name}.
                          Your package will be delivered via {siteConfig.shippingCarrier} within {siteConfig.shippingPeriod} business days of payment.
                          The credit card charge will appear on your statement as <strong className="text-primary font-bold">“{siteConfig.descriptor}”</strong>.
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            <h3 className="text-base font-black text-primary uppercase tracking-wider">SECTION 1 - PET STORE &amp; USAGE TERMS</h3>
            <p>
              By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state
              or province of residence. Our pet supplies are designed specifically for domestic companion animals (dogs, cats).
            </p>

            <h3 className="text-base font-black text-primary uppercase tracking-wider">SECTION 2 - SHIPPING &amp; DELIVERY POLICY</h3>
            <p>
              All orders are processed and dispatched within 1-2 business days of payment confirmation. We ship our packages via{" "}
              {siteConfig.shippingCarrier} and delivery typically takes between {siteConfig.shippingPeriod} business days.
              You will receive a tracking number via email once your pet order is dispatched.
            </p>

            <h3 className="text-base font-black text-primary uppercase tracking-wider">SECTION 3 - 14-DAY HAPPY TAIL RETURN &amp; REFUND POLICY</h3>
            <p>
              We stand behind our quality with a {siteConfig.trialPeriod}-day Happy Tail satisfaction guarantee. If for any reason you or your pet are not completely delighted with your purchase,
              please contact our pet care concierge team at <strong className="text-primary font-bold">{siteConfig.phone}</strong> or email us at{" "}
              <strong className="text-primary font-bold">{siteConfig.email}</strong> to obtain a Return Merchandise Authorization (RMA).
            </p>
            <p>
              Returns must be shipped to our designated facility at: <strong className="text-primary font-bold">{siteConfig.address}</strong>.
              Refunds will be processed back to the original payment method within 5-7 business days of receiving the returned item.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
