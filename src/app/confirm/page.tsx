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
    day: "numeric"
  });

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 text-center max-w-[600px] mx-auto shadow-sm">
      {/* Success Badge */}
      <div className="w-[64px] h-[64px] rounded-full border-2 border-green-500 text-green-600 flex items-center justify-center text-3xl mx-auto mb-6 font-black bg-green-50 shadow-sm">
        ✓
      </div>

      <h2 className="text-2xl md:text-3xl font-black uppercase text-gray-900 mb-4 tracking-tight">Order Confirmed!</h2>
      <p className="text-gray-600 text-sm md:text-base mb-8">
        Thank you for your purchase. Your payment was processed successfully.
      </p>

      {/* Order Info Table */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-left mb-8 text-xs md:text-sm">
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-400 uppercase tracking-wider text-[0.65rem] font-bold">Order ID:</span>
          <strong className="text-gray-900 font-bold">{orderId}</strong>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-400 uppercase tracking-wider text-[0.65rem] font-bold">Date:</span>
          <span className="text-gray-900 font-semibold">{today}</span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-gray-400 uppercase tracking-wider text-[0.65rem] font-bold">Shipping Carrier:</span>
          <span className="text-gray-900 font-semibold">{siteConfig.shippingCarrier}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400 uppercase tracking-wider text-[0.65rem] font-bold">Estimated Delivery:</span>
          <span className="text-gray-900 font-semibold">{siteConfig.shippingPeriod} Business Days</span>
        </div>
      </div>

      <p className="text-[0.7rem] md:text-xs text-gray-500 leading-relaxed mb-6">
        A confirmation email containing your tracking information will be sent to your registered address shortly.
        For support, contact us at <strong className="text-gray-800 font-semibold">{siteConfig.email}</strong> or call <strong className="text-gray-800 font-semibold">{siteConfig.phone}</strong>.
      </p>

      <div className="mt-8">
        <Link
          href="/"
          className="group inline-flex items-center justify-center gap-2.5 font-black text-center whitespace-nowrap bg-red-600 hover:bg-red-700 text-white transition-all duration-300 py-4 px-8 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-red-600/30"
        >
          Back to Home
          <span className="transition-transform duration-300 group-hover:translate-x-1.5 text-sm">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}

export default function Confirm() {
  return (
    <>
      <Header />
      <main className="bg-[#fafafa] py-16 md:py-24 min-h-[85vh] flex items-center relative overflow-hidden font-sans border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Suspense fallback={
            <div className="text-center py-12">
              <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900">Loading Order Details...</h4>
            </div>
          }>
            <ConfirmContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
