"use client";

import React, { useState } from "react";

interface TestimonialItem {
  id: string;
  statNumber: string;
  statLabel: string;
  statFootnote?: string;
  quote: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  organization: string;
}

const testimonialsData: TestimonialItem[] = [
  {
    id: "01",
    statNumber: "96%",
    statLabel: "Patrons reporting zero bleed or ghosting across wet inks³",
    quote:
      "The paper handles wet fountain pen ink without any ghosting. The 180° flat binding makes drafting daily manuscripts effortless... easy to use for hours.",
    authorName: "Julian Vance",
    authorRole: "Architect & Author, Austin Design Guild",
    authorAvatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
    organization: "Austin Design Guild",
  },
  {
    id: "02",
    statNumber: "160 GSM",
    statLabel: "Milled archival cotton paper with smooth capillary ink flow¹",
    quote:
      "The German iridium nib glides cleanly with no scratching or skipping. Having both a piston converter and archival cartridges makes it my daily writer.",
    authorName: "Marcus Henderson",
    authorRole: "Technical Writer & Calligrapher",
    authorAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    organization: "Scribe Collective",
  },
  {
    id: "03",
    statNumber: "88%",
    statLabel: "Patrons who made this their exclusive daily journal & desk suite²",
    quote:
      "The full-grain leather cover is aging into a deep caramel patina. It opens completely flat on the desk, making morning reflection a genuine ritual.",
    authorName: "Evelyn Reed",
    authorRole: "Essayist & Creative Director",
    authorAvatar:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?w=150&q=80",
    organization: "Patron Scribes",
  },
  {
    id: "04",
    statNumber: "100%",
    statLabel: "Solid brass casting and Smyth-sewn archival durability standard⁴",
    quote:
      "The solid brass weight feels substantial on the desk without being bulky. A rare example of stationery made to last years rather than months.",
    authorName: "David Chen",
    authorRole: "Managing Partner & Collector",
    authorAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    organization: "Atelier Executive",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = testimonialsData[currentIndex];

  return (
    <section
      className="py-16 sm:py-20 md:py-24 bg-[#FAF8F5] text-[#121820] border-t border-[#C5A059]/20"
      id="testimonials"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Testimonial Split Component (Matching Reference) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* LEFT BLOCK: Deep Charcoal & Gold Brand Stat Card */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#18202A] to-[#121820] text-[#FAF8F5] border border-[#C5A059]/40 p-7 sm:p-9 md:p-10 shadow-lg transition-all duration-300 relative overflow-hidden">
            {/* Subtle Gold Ambient Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              {/* Stat Number with Gold Accent */}
              <div className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold tracking-tight text-[#C5A059] mb-6 sm:mb-8 leading-none">
                {current.statNumber}
              </div>

              {/* Stat Label */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-[#FAF8F5] leading-snug tracking-tight max-w-sm">
                {current.statLabel}
              </h3>
            </div>

            {/* Bottom Dots Navigation for Left Card */}
            <div className="relative z-10 flex items-center gap-2 mt-8 pt-4">
              {testimonialsData.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx
                      ? "w-8 bg-[#C5A059]"
                      : "w-2.5 bg-white/30 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* RIGHT BLOCK: Quote + Author Info + Guild Mark */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-white border border-[#C5A059]/25 p-7 sm:p-9 md:p-10 shadow-xs">
            {/* Quote */}
            <div className="mb-8">
              <blockquote className="text-base sm:text-lg md:text-xl font-serif text-[#121820] leading-relaxed tracking-tight">
                &ldquo;{current.quote}&rdquo;
              </blockquote>
            </div>

            {/* Bottom Row: Author details on left, Guild mark on right */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#C5A059]/15">
                {/* Author Info */}
                <div className="flex items-center gap-3.5">
                  <img
                    src={current.authorAvatar}
                    alt={current.authorName}
                    className="w-12 h-12 rounded-xl object-cover border border-[#C5A059]/30 shadow-xs flex-shrink-0"
                  />
                  <div>
                    <div className="font-serif font-bold text-sm sm:text-base text-[#121820]">
                      {current.authorName}
                    </div>
                    <div className="text-xs text-[#1A202C]/65 font-normal">
                      — {current.authorRole}
                    </div>
                  </div>
                </div>

                {/* Organization Emblem */}
                <div className="flex items-center gap-2 text-right self-start sm:self-center">
                  <div className="flex flex-col">
                    <span className="text-xs font-serif font-bold tracking-wider text-[#121820]">
                      {current.organization}
                    </span>
                    <span className="text-[0.62rem] uppercase tracking-widest text-[#C5A059] font-bold">
                      Verified Patron
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] text-xs font-serif font-bold">
                    ✦
                  </div>
                </div>
              </div>

              {/* Bottom Dots Navigation for Right Card */}
              <div className="flex items-center gap-2 mt-6 pt-2">
                {testimonialsData.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentIndex === idx
                        ? "w-7 bg-[#C5A059]"
                        : "w-2 bg-[#121820]/20 hover:bg-[#121820]/40"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
