"use client";

import React from "react";

const guarantees = [
  {
    icon: "🚚",
    title: "Free Shipping",
    subtitle: "On all orders, tracked nationwide",
    bg: "bg-purple-50",
  },
  {
    icon: "🔄",
    title: "Easy Returns",
    subtitle: "30-day love-it guarantee",
    bg: "bg-violet-50",
  },
  {
    icon: "🛡️",
    title: "Secure Payment",
    subtitle: "256-bit SSL encrypted checkout",
    bg: "bg-indigo-50",
  },
  {
    icon: "🎧",
    title: "24/7 Support",
    subtitle: "Nursery care team always ready",
    bg: "bg-purple-50",
  },
];

export default function QualityPromise() {
  return (
    <section className="py-8 sm:py-12 bg-white" id="promise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="rounded-3xl border border-purple-100 bg-gradient-to-r from-purple-50/40 via-white to-violet-50/40 p-5 sm:p-7 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-purple-100">
            {guarantees.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 px-2 sm:px-4 pt-3 sm:pt-0 first:pt-0">
                <div className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center text-2xl flex-shrink-0 shadow-sm`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-black text-[#1E1040]">{item.title}</h4>
                  <p className="text-[0.7rem] text-gray-500 font-medium mt-0.5">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}