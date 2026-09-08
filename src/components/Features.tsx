"use client";

import React from "react";

export default function Features() {
  return (
    <section className="bg-[#FAF9F6] py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-black/5" id="features">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-14">
          <span className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#265C1E] bg-white rounded-full px-6 py-2 shadow-xs border border-black/5 inline-block">
            FOUNDRY FEATURES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#11281A] mt-5 tracking-tight font-sans">
            Engineered for a Lifetime of Growing
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-neutral-text/75 max-w-lg mx-auto mt-3 leading-relaxed">
            Drop-forged carbon metallurgy, lathe-turned hardwoods, and surgical Japanese cutting blades crafted to endure generations.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="flex flex-col gap-5">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-5">
            {/* Row 1 - Left: 60% with Image */}
            <div className="md:w-[60%] md:h-64 bg-white rounded-2xl border border-black/5 hover:border-[#265C1E]/30 hover:shadow-md transition-all duration-300 p-5 flex flex-col md:flex-row gap-5">
              <img
                src="/img/how_it_works_1.jpg"
                alt="Drop-forged carbon steel garden trowel in soil"
                className="w-full h-48 md:h-full md:w-[45%] object-cover rounded-xl"
                onError={(e) => {
                  e.currentTarget.src = "/img/products/garden_tools/trowel_1.jpg";
                }}
              />
              <div className="flex flex-col justify-center flex-1">
                <div className="w-11 h-11 bg-[#132B1C] rounded-lg flex items-center justify-center mb-4 text-white flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2a15 15 0 0 0-9.3 3.5c-.3.3-.4.8-.2 1.1l2.4 4.7c.2.4.7.7 1.1.7h12c.4 0 .9-.3 1.1-.7l2.4-4.7c.2-.4.1-.9-.2-1.1A15 15 0 0 0 12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 12v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 22h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-base font-extrabold text-[#11281A] tracking-tight">58 HRC Forged Steel</h3>
                <p className="text-xs sm:text-[0.82rem] text-neutral-text/75 mt-2 leading-relaxed">
                  High-carbon manganese steel oil-quenched for extreme soil impact resistance and zero blade flex under heavy leverage.
                </p>
              </div>
            </div>

            {/* Row 1 - Right: 40% Card */}
            <div className="md:w-[40%] bg-white rounded-2xl border border-black/5 hover:border-[#265C1E]/30 hover:shadow-md transition-all duration-300 px-6 py-6 md:pt-7 flex flex-col justify-center">
              <div className="w-11 h-11 bg-[#132B1C] rounded-lg flex items-center justify-center mb-4 text-white flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-base font-extrabold text-[#11281A] tracking-tight">Japanese SK5 Steel</h3>
              <p className="text-xs sm:text-[0.82rem] text-neutral-text/75 mt-2 leading-relaxed">
                Titanium nitride-coated bypass pruners delivering clean 1-inch branch cuts without crushing delicate botanical vascular fibers.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-5">
            {/* Row 2 - Left: 40% Card */}
            <div className="md:w-[40%] bg-white rounded-2xl border border-black/5 hover:border-[#265C1E]/30 hover:shadow-md transition-all duration-300 px-6 py-6 md:pt-7 flex flex-col justify-center">
              <div className="w-11 h-11 bg-[#132B1C] rounded-lg flex items-center justify-center mb-4 text-white flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="9 12 11.5 14.5 15 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-base font-extrabold text-[#11281A] tracking-tight">Solid Ash Hardwood</h3>
              <p className="text-xs sm:text-[0.82rem] text-neutral-text/75 mt-2 leading-relaxed">
                Turned on traditional wood lathes and sealed with botanical linseed oil. Naturally absorbs vibration and molds to your grip.
              </p>
            </div>

            {/* Row 2 - Right: 60% with Image */}
            <div className="md:w-[60%] md:h-64 bg-white rounded-2xl border border-black/5 hover:border-[#265C1E]/30 hover:shadow-md transition-all duration-300 p-5 flex flex-col md:flex-row gap-5">
              <img
                src="/img/how_it_works_3.jpg"
                alt="3-prong claw cultivator aerating garden soil"
                className="w-full h-48 md:h-full md:w-[45%] object-cover rounded-xl"
                onError={(e) => {
                  e.currentTarget.src = "/img/products/garden_tools/cultivator_1.jpg";
                }}
              />
              <div className="flex flex-col justify-center flex-1">
                <div className="w-11 h-11 bg-[#132B1C] rounded-lg flex items-center justify-center mb-4 text-white flex-shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-base font-extrabold text-[#11281A] tracking-tight">Lifetime Foundry Warranty</h3>
                <p className="text-xs sm:text-[0.82rem] text-neutral-text/75 mt-2 leading-relaxed">
                  Every tool is backed by our unconditional lifetime guarantee against metallurgical defects, accompanied by a 60-day garden soil trial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
