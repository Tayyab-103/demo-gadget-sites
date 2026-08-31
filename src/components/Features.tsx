"use client";

import React from "react";

const featuresData = [
  {
    title: "Field-Tested Materials",
    description: "Every component we use is selected for durability, free of cheap fillers or brittle plastics.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a15 15 0 0 0-9.3 3.5c-.3.3-.4.8-.2 1.1l2.4 4.7c.2.4.7.7 1.1.7h12c.4 0 .9-.3 1.1-.7l2.4-4.7c.2-.4.1-.9-.2-1.1A15 15 0 0 0 12 2z"></path>
        <path d="M12 12v10"></path>
        <path d="M8 22h8"></path>
      </svg>
    )
  },
  {
    title: "Quality-Controlled Production",
    description: "Our gear is manufactured under strict quality-control checkpoints before it ever ships.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    )
  },
  {
    title: "Third-Party Stress Tested",
    description: "Every batch is verified by independent testers to confirm durability, accuracy, and safety.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v7.31"></path>
        <path d="M14 2v7.31"></path>
        <path d="M8.5 2h7"></path>
        <path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path>
        <path d="M5.52 16h12.96"></path>
      </svg>
    )
  },
  {
    title: "Risk-Free Guarantee",
    description: "Not satisfied? We stand behind our quality with a 60-day money-back guarantee, no questions asked.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path>
        <path d="M12 6v12"></path>
      </svg>
    )
  }
];

export default function Features() {
  return (
    <section className="py-12 md:py-16 bg-neutral-bg" id="features">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="max-w-[600px] mb-12 md:mb-16">
          <span className="eyebrow mb-4">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 tracking-tight">Built for Real Performance</h2>
          <p className="text-neutral-text/60">
            We combine durable materials with real athlete feedback to bring you gear that actually holds up.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature, idx) => (
            <div
              className="bg-white rounded-xl p-6 border-2 border-black/10 hover:border-secondary/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              key={idx}
            >
              <div className="mb-5 w-14 h-14 rounded-xl border-2 border-primary text-primary flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary">{feature.title}</h3>
              <p className="text-xs md:text-sm text-neutral-text/60 leading-relaxed mb-0">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
