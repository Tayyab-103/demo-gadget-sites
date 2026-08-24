"use client";

import React from "react";

const guarantees = [
  {
    icon: "🚚",
    title: "Free Shipping",
    subtitle: "On all orders nationwide",
    bg: "bg-[#FFF0F4]",
  },
  {
    icon: "🔄",
    title: "Easy Returns",
    subtitle: "Within 30 days love-it guarantee",
    bg: "bg-[#FFF9E6]",
  },
  {
    icon: "🛡️",
    title: "Secure Payment",
    subtitle: "100% safe & 256-bit encrypted",
    bg: "bg-[#F0EAFF]",
  },
  {
    icon: "🎧",
    title: "24/7 Support",
    subtitle: "We're here to help anytime",
    bg: "bg-[#EBF7FF]",
  },
];

export default function QualityPromise() {
  return (
    <section className="py-8 sm:py-12 bg-white" id="promise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Horizontal 4-Point Guarantee Strip (Exact Reference Style) */}
        <div className="rounded-3xl border border-gray-100 bg-[#FAF7F2]/60 p-5 sm:p-7 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-200/60">
            {guarantees.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 px-2 sm:px-4 pt-3 sm:pt-0 first:pt-0"
              >
                <div
                  className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center text-2xl flex-shrink-0 shadow-xs`}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#1E2330]">
                    {item.title}
                  </h4>
                  <p className="text-[0.7rem] text-gray-500 font-medium mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}