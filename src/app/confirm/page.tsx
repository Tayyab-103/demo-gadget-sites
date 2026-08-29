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
    <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#C87D3B]/30 text-center max-w-[620px] mx-auto shadow-2xl">
      {/* Success Badge */}
      <div className="w-[72px] h-[72px] rounded-full border-2 border-[#C87D3B] text-white flex items-center justify-center text-3xl mx-auto mb-6 font-bold bg-[#C87D3B] shadow-lg">
        ✓
      </div>

      <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-[#0D1B2A] mb-3 tracking-tight">Travel Order Confirmed!</h2>
      <p className="text-[#18222F]/75 text-sm md:text-base mb-8 leading-relaxed font-normal">
        Thank you for equipping with {siteConfig.brandName}. Your luggage acquisition has been scheduled for multi-point inspection and priority dispatch from our Austin, TX hangar.
      </p>

      {/* Order Info Table */}
      <div className="bg-[#F8F6F0] border border-[#C87D3B]/20 rounded-2xl p-6 text-left mb-8 text-xs md:text-sm shadow-inner">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[#18222F]/50 uppercase tracking-wider text-[0.68rem] font-bold">Flight Order ID:</span>
          <strong className="text-[#0D1B2A] font-extrabold">{orderId}</strong>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-[#18222F]/50 uppercase tracking-wider text-[0.68rem] font-bold">Order Date:</span>
          <span className="text-[#0D1B2A] font-semibold">{today}</span>
        </div>
        <div className="flex justify-between items-center mb-3">
          <span className="text-[#18222F]/50 uppercase tracking-wider text-[0.68rem] font-bold">Carrier:</span>
          <span className="text-[#0D1B2A] font-semibold">{siteConfig.shippingCarrier} Priority Air Tracked</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#18222F]/50 uppercase tracking-wider text-[0.68rem] font-bold">Estimated Dispatch:</span>
          <span className="text-[#C87D3B] font-extrabold">{siteConfig.shippingPeriod} Business Days</span>
        </div>
      </div>

      <p className="text-[0.72rem] md:text-xs text-[#18222F]/65 leading-relaxed mb-8 font-normal">
        A dispatch confirmation email containing your tracking itinerary will be sent to your registered inbox shortly.
        For flight concierge assistance, contact our team at <strong className="text-[#0D1B2A] font-bold">{siteConfig.email}</strong> or call <strong className="text-[#0D1B2A] font-bold">{siteConfig.phone}</strong>.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/shop"
          className="group inline-flex items-center justify-center gap-2.5 font-extrabold text-center whitespace-nowrap bg-[#C87D3B] text-white hover:bg-[#D98745] transition-all duration-300 py-4 px-8 rounded-full text-xs uppercase tracking-widest shadow-lg hover:shadow-xl w-full sm:w-auto hover:scale-105"
        >
          Explore More Gear
          <span className="transition-transform duration-300 group-hover:translate-x-1 text-sm">→</span>
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center font-bold text-center whitespace-nowrap bg-[#F8F6F0] border border-[#C87D3B]/40 text-[#0D1B2A] hover:bg-[#C87D3B]/10 transition-all duration-300 py-3.5 px-8 rounded-full text-xs uppercase tracking-widest w-full sm:w-auto"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default function Confirm() {
  return (
    <>
      <Header />
      <main className="bg-[#F8F6F0] pt-28 pb-16 md:pt-32 md:pb-24 min-h-[85vh] flex items-center relative overflow-hidden">
        {/* Background decorative glow spot */}
        <div className="glow-bg absolute top-[10%] left-[-250px] opacity-35 pointer-events-none" />
        
        <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
          <Suspense fallback={
            <div className="text-center py-12">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#0D1B2A]">Loading Order Confirmation...</h4>
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
