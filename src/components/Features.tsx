"use client";

import React from "react";

const featuresData = [
  {
    title: "Hand-Selected Materials",
    description: "Every metal, stone, and movement we use is selected for durability, free of cheap fillers or brittle plating.",
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
    description: "Our pieces are crafted under strict quality-control checkpoints before they ever ship.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    )
  },
  {
    title: "Third-Party Verified",
    description: "Every batch is verified by independent inspectors to confirm materials, accuracy, and finish.",
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
    <section className="py-14 md:py-20 bg-neutral-bg border-b border-black/5" id="features">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-[650px] mb-12 md:mb-16">
          <span className="eyebrow mb-3">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 tracking-tight">
            Built to Be Kept
          </h2>
          <p className="text-neutral-text/70 text-sm sm:text-base leading-relaxed">
            We combine premium materials with meticulous craftsmanship to bring you timeless pieces that truly endure.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresData.map((feature, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl p-7 border border-black/10 hover:border-secondary/60 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-secondary/10 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                <div className="mb-6 w-14 h-14 rounded-2xl bg-neutral-bg border border-black/10 group-hover:border-secondary/40 group-hover:bg-primary group-hover:text-secondary text-primary flex items-center justify-center transition-all duration-300 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2.5 text-primary group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-text/70 leading-relaxed m-0">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-[0.7rem] font-bold uppercase tracking-wider text-secondary">
                <span>Standard 0{idx + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-secondary/60" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
