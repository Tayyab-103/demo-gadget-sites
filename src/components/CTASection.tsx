"use client";

import React from "react";
import Link from "next/link";
import siteConfigData from "../../config/site-config.json";
import { SiteConfig } from "@/types";

const siteConfig = siteConfigData as unknown as SiteConfig;

/* Floating avatar positions — scattered around the edges of the card */
const avatars = [
  { src: "/img/testimonialsec1.jpg", fallback: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=200&q=80", top: "8%", left: "4%", size: "w-14 h-14 sm:w-16 sm:h-16" },
  { src: "/img/testimonialsec2.jpg", fallback: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=200&q=80", top: "5%", left: "28%", size: "w-11 h-11 sm:w-13 sm:h-13" },
  { src: "/img/herosection1.jpg", fallback: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=200&q=80", bottom: "18%", left: "6%", size: "w-12 h-12 sm:w-14 sm:h-14" },
  { src: "/img/testimonialsec3.jpg", fallback: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=200&q=80", bottom: "10%", left: "30%", size: "w-10 h-10 sm:w-12 sm:h-12" },
  { src: "/img/herosection2.jpg", fallback: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=200&q=80", top: "10%", right: "5%", size: "w-13 h-13 sm:w-15 sm:h-15" },
  { src: "/img/howitworks1.jpg", fallback: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=200&q=80", top: "6%", right: "26%", size: "w-10 h-10 sm:w-12 sm:h-12" },
  { src: "/img/herosection3.jpg", fallback: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=200&q=80", bottom: "12%", right: "4%", size: "w-14 h-14 sm:w-16 sm:h-16" },
  { src: "/img/howitworks2.jpg", fallback: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=200&q=80", bottom: "16%", right: "28%", size: "w-11 h-11 sm:w-13 sm:h-13" },
];

export default function CTASection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-black border-t border-black/6" id="cta">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* CTA Banner Card */}
        <div className="relative bg-primary-tint rounded-3xl sm:rounded-[2rem] border border-black/5 shadow-sm overflow-hidden py-16 sm:py-20 md:py-24 px-6 sm:px-10">

          {/* Floating Avatar Circles — scattered around edges */}
          <div className="hidden md:block">
            {avatars.map((avatar, idx) => (
              <div
                key={idx}
                className={`absolute ${avatar.size} rounded-full overflow-hidden border-[3px] border-white shadow-lg`}
                style={{
                  top: avatar.top,
                  left: avatar.left,
                  right: avatar.right,
                  bottom: avatar.bottom,
                }}
              >
                <img
                  src={avatar.src}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = avatar.fallback;
                  }}
                />
              </div>
            ))}
          </div>

          {/* Mobile: Stacked avatar row */}
          <div className="flex md:hidden items-center justify-center gap-2 mb-8">
            <div className="flex -space-x-3">
              {avatars.slice(0, 5).map((avatar, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 rounded-full overflow-hidden border-[3px] border-white shadow-md"
                >
                  <img
                    src={avatar.src}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = avatar.fallback;
                    }}
                  />
                </div>
              ))}
            </div>
            <span className="text-xs font-black text-primary ml-2">5,000+ Studios</span>
          </div>

          {/* Center Content */}
          <div className="relative z-10 text-center max-w-xl mx-auto">
            <div className="mb-3">
              <span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider"
                style={{
                  backgroundColor: "color-mix(in srgb, var(--secondary-color) 15%, transparent)",
                  color: "var(--secondary-color)",
                }}
              >
                Elevate Your Creative Space
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-primary tracking-tight leading-[1.08] mb-4">
              Ready To Create Your Masterpiece?
            </h2>
            <p className="text-black/65 text-xs sm:text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto font-normal">
              Equip your studio with archival canvases, vibrant artist pigments, and premium craft supplies from {siteConfig.brandName}.
            </p>

            <Link
              href="/shop"
              className="inline-flex items-center gap-2 justify-center font-black uppercase tracking-wider text-xs sm:text-sm transition-all duration-200 py-4 px-10 rounded-full shadow-lg hover:scale-105"
              style={{
                backgroundColor: "var(--primary-color)",
                color: "var(--primary-text-color)",
              }}
            >
              Explore Art Supplies
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
