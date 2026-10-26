"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteConfigData from "../../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

function ConfirmContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id") || "N/A";
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 border border-primary/8 text-center max-w-[620px] mx-auto shadow-xl">
      {/* Success Badge */}
      <div className="w-[72px] h-[72px] rounded-full border-2 border-secondary text-gold-ink flex items-center justify-center text-3xl mx-auto mb-6 font-black bg-secondary/20 shadow-md">
        ✓
      </div>

      <h2 className="text-2xl md:text-3xl font-black uppercase text-ink mb-3 tracking-tight">
        Order confirmed!
      </h2>
      <p className="text-ink/70 text-sm md:text-base mb-8 leading-relaxed">
        Thank you for shopping with {siteConfig.brandName}. Your order has been received and is being prepared for shipping.
      </p>

      {/* Order Info Table */}
      <div className="bg-mist border border-primary/5 rounded-2xl p-6 text-left mb-8 text-xs md:text-sm shadow-inner">
        <div className="flex justify-between items-center mb-3">
          <span className="text-ink/50 uppercase tracking-wider text-[0.68rem] font-black">Order ID:</span>
          <strong className="text-ink font-black">{orderId}</strong>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-ink/50 uppercase tracking-wider text-[0.68rem] font-black">Order Date:</span>
          <span className="text-ink/80 font-bold">{today}</span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-ink/50 uppercase tracking-wider text-[0.68rem] font-black">Carrier:</span>
          <span className="text-ink/80 font-bold">{siteConfig.shippingCarrier}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-ink/50 uppercase tracking-wider text-[0.68rem] font-black">Estimated delivery:</span>
          <span className="text-gold-ink font-black">{siteConfig.shippingPeriod} Business Days</span>
        </div>
      </div>

      <p className="text-[0.72rem] md:text-xs text-ink/60 leading-relaxed mb-8">
        You will receive an email with your tracking number once your order ships.
        For help with your order, reach our team at <strong className="text-ink font-bold">{siteConfig.email}</strong> or call <strong className="text-ink font-bold">{siteConfig.phone}</strong>.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/shop"
          className="group inline-flex items-center justify-center gap-2.5 font-black text-center whitespace-nowrap bg-primary text-white hover:bg-primary-dark transition-all duration-300 py-4 px-8 rounded-full text-xs uppercase tracking-widest shadow-md hover:shadow-lg w-full sm:w-auto"
        >
          Keep shopping
          <span className="transition-transform duration-300 group-hover:translate-x-1 text-sm">→</span>
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center font-black text-center whitespace-nowrap bg-mist border border-primary/10 text-ink hover:bg-black/5 transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-widest w-full sm:w-auto"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}

export default function Confirm() {
  return (
    <>
      <Header />
      <main className="bg-neutral-bg pt-32 pb-16 md:pt-44 md:pb-24 min-h-[85vh] flex items-center relative overflow-hidden border-b border-primary/6">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Suspense
            fallback={
              <div className="text-center py-12">
                <h4 className="text-sm font-black uppercase tracking-wider text-ink">
                  Loading order confirmation...
                </h4>
              </div>
            }
          >
            <ConfirmContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
