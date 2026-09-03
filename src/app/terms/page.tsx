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
      <main className="bg-neutral-bg py-10 sm:py-14 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          
          <div className="text-center sm:text-left mb-8 sm:mb-10">
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-neutral-text/50 block mb-2">
              LEGAL TERMS
            </span>
            <h1 className="font-serif font-normal text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.04em] text-primary leading-tight">
              TERMS &amp; CONDITIONS
            </h1>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-black/8 shadow-md leading-relaxed text-neutral-text/75 text-xs sm:text-sm space-y-6">
            <h2 className="font-serif font-normal text-base sm:text-lg uppercase tracking-[0.04em] text-primary">
              OVERVIEW
            </h2>
            <p>
              This website is operated by <strong className="text-primary font-semibold">{siteConfig.brandName}</strong> (operated by {siteConfig.corpName}). Throughout the site, the terms “we”,
              “us” and “our” refer to <strong className="text-primary font-semibold">{siteConfig.brandName}</strong>. <strong className="text-primary font-semibold">{siteConfig.brandName}</strong> offers
              this website, including all information, tools and services available from this site to you, the user,
              conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
            </p>
            <p>
              By visiting our site and/or purchasing something from us, you engage in our “Service” and agree to be
              bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional
              terms and conditions and policies referenced herein and/or available by hyperlink.
            </p>

            <h2 className="font-serif font-normal text-base sm:text-lg uppercase tracking-[0.04em] text-primary pt-4 border-t border-black/5">
              PRODUCTS OFFERED &amp; BILLING TERMS
            </h2>
            <p>
              We offer bespoke handcrafted home furnishings, living textiles, ambient lighting, and interior accents through one-time purchases (Straight Sale) under the following pricing structures:
            </p>

            {/* Dynamic Price Points Display */}
            <div className="bg-neutral-bg border border-black/8 rounded-2xl p-6 sm:p-8 my-6">
              {products.map((product) => (
                <div key={product.id} className="mb-6 pb-6 border-b border-black/5 last:border-0 last:mb-0 last:pb-0">
                  <h3 className="font-serif font-normal text-sm sm:text-base uppercase tracking-wider text-primary mb-3">
                    {product.name}
                  </h3>
                  <ul className="list-disc pl-5 m-0 space-y-2.5">
                    {product.bundles && product.bundles.map((bundle) => {
                      const totalCost = parseFloat(String(bundle.price));
                      const shippingText = product.ssShipping === "0.00" || parseFloat(product.ssShipping) === 0
                        ? "FREE Tracked Shipping"
                        : `$${product.ssShipping} Shipping`;

                      return (
                        <li key={bundle.quantity} className="text-xs sm:text-sm leading-relaxed text-neutral-text/75">
                          Upon selecting a <strong className="text-primary font-semibold">{bundle.quantity} {bundle.quantity > 1 ? "Piece Set" : "Single Piece"}</strong>,
                          you will be charged a singular transaction fee of <strong className="text-primary font-semibold">${totalCost.toFixed(2)}</strong> ({shippingText}) for {product.name}.
                          Your shipment will be delivered via {siteConfig.shippingCarrier} within {siteConfig.shippingPeriod} business days of order confirmation.
                          The credit card billing descriptor will appear as <strong className="text-primary font-semibold">“{siteConfig.descriptor}”</strong>.
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>

            <h2 className="font-serif font-normal text-base sm:text-lg uppercase tracking-[0.04em] text-primary pt-4 border-t border-black/5">
              SECTION 1 - ONLINE STORE TERMS
            </h2>
            <p>
              By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state
              or province of residence. You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service,
              violate any laws in your jurisdiction.
            </p>

            <h2 className="font-serif font-normal text-base sm:text-lg uppercase tracking-[0.04em] text-primary pt-4 border-t border-black/5">
              SECTION 2 - SHIPPING &amp; DELIVERY POLICY
            </h2>
            <p>
              All orders are processed and dispatched within 1-2 business days of payment verification. We ship our packages via{" "}
              {siteConfig.shippingCarrier} and delivery typically takes between {siteConfig.shippingPeriod} business days.
              You will receive tracking information via email once your order has been dispatched.
            </p>

            <h2 className="font-serif font-normal text-base sm:text-lg uppercase tracking-[0.04em] text-primary pt-4 border-t border-black/5">
              SECTION 3 - 60-DAY IN-HOME TRIAL &amp; RETURN POLICY
            </h2>
            <p>
              We stand behind our quality with a 60-day in-home satisfaction guarantee. If you are not completely satisfied with your purchase,
              please contact our concierge customer support center at <strong className="text-primary font-semibold">{siteConfig.phone}</strong> or email us at{" "}
              <strong className="text-primary font-semibold">{siteConfig.email}</strong> to obtain a Return Merchandise Authorization (RMA) number.
            </p>
            <p>
              Returns must be shipped to our designated facility at: <strong className="text-primary font-semibold">{siteConfig.address}</strong>.
              Refunds will be processed back to the original payment method within 5-7 business days of receiving the returned item.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

