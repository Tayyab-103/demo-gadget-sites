"use client";

import React from "react";

const features = [
  {
    title: "100% Guaranteed Fitment",
    desc: "Strict OEM factory fitment standards with zero vehicle modification.",
    icon: (
      <svg className="w-6 h-6 stroke-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Free Express Shipping",
    desc: "Fast, tracked nationwide dispatch straight to your door.",
    icon: (
      <svg className="w-6 h-6 stroke-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="16" height="13" x="1" y="3" rx="2" />
        <path d="M16 8h4l3 3v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: "30-Day Money-Back Guarantee",
    desc: "100% risk-free guarantee with no hassle returns.",
    icon: (
      <svg className="w-6 h-6 stroke-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "24/7 Expert Support",
    desc: "Live support from certified automotive specialists.",
    icon: (
      <svg className="w-6 h-6 stroke-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
];

export default function TrustBar() {
  return (
    <section className="bg-white py-6 sm:py-8 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200/90 rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-xs hover:border-emerald-500 hover:shadow-md transition-all duration-200 group cursor-default"
            >
              <div className="p-3 bg-emerald-50/50 border border-emerald-100 rounded-xl group-hover:border-emerald-200 group-hover:bg-emerald-100/60 transition-colors flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </span>
                <span className="text-xs text-gray-500 mt-1 leading-relaxed">
                  {item.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
