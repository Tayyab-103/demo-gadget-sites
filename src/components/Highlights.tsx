"use client";

import React from "react";

const highlights = [
  { icon: "🚀", title: "Same Day Dispatch", desc: "Fast handling & tracked carrier delivery" },
  { icon: "✨", title: "100% Satisfaction", desc: "14-day happiness & return guarantee" },
  { icon: "🛡️", title: "Non-Toxic & Safe", desc: "Certified child-friendly ASTM materials" },
  { icon: "⭐", title: "Premium Toy Quality", desc: "Durable builds tested for endless play" },
  { icon: "📞", title: "24/7 Customer Care", desc: "Dedicated family support hotline & chat" },
];

export default function Highlights() {
  return (
    <section className="py-12 bg-[#fff5f8] border-y border-[#ff4370]/15 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-3">
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-2xl mb-3 border border-black/5">
                {item.icon}
              </div>
              <h4 className="text-xs sm:text-sm font-black text-[#1e293b] leading-tight mb-1">
                {item.title}
              </h4>
              <p className="text-[0.68rem] text-black/60 leading-tight">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
