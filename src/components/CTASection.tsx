"use client";

import React, { useState } from "react";

export default function CTASection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF7F2] text-[#1E2330] relative overflow-hidden" id="cta">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Visual: Baby with Plush */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-xs aspect-square rounded-3xl overflow-hidden shadow-xs bg-white">
              <img
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?w=700&q=80"
                alt="Happy baby with plush teddy bear"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Form: "Join Our Baby Family" */}
          <div className="md:col-span-7 flex flex-col items-start text-left">
            
            <div className="flex items-center gap-3 mb-2.5">
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.25em] text-[#FF6B8B]">
                Stay Connected
              </span>
              <div className="h-[1px] w-12 bg-[#E5DDD0]" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E2330] tracking-tight mb-2.5">
              Join Our Baby <span className="text-[#FF6B8B]">Family</span>
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 mb-6 max-w-md font-normal leading-relaxed">
              Subscribe for exclusive offers, new arrivals and gentle baby care guidance.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-2xl bg-white border border-[#FFCCD7] text-[#FF6B8B] text-xs font-bold shadow-xs">
                🎉 Welcome to the Moonberry Little Treasures family!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 text-xs sm:text-sm border border-[#E5DDD0] rounded-full focus:outline-none focus:border-[#FF6B8B] bg-white text-[#1E2330]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[#FF6B8B] hover:bg-[#FA5679] text-white font-bold text-xs uppercase tracking-wider shadow-xs hover:scale-105 transition-all cursor-pointer whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
