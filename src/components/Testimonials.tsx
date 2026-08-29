"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ScribeNote {
  id: string;
  quote: string;
  name: string;
  role: string;
  location: string;
  image: string;
  alt: string;
}

const scribeNotes: ScribeNote[] = [
  {
    id: "01",
    quote: "The Sovereign fountain pen glides with zero resistance. The balance in hand and consistent wet flow make four-hour manuscript sessions completely effortless.",
    name: "Evelyn R.",
    role: "Historical Novelist & Calligrapher",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=1200&q=85",
    alt: "Evelyn R. writing with Quillhaven fountain pen in Austin",
  },
  {
    id: "02",
    quote: "The 160 GSM milled cotton paper takes wet India and iron-gall inks with crisp, featherless edges. The Smythe-sewn binding lays completely flat on my drafting board.",
    name: "Marcus H.",
    role: "Architect & Botanical Illustrator",
    location: "Boston, MA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=85",
    alt: "Marcus H. architect sketching on Quillhaven archival journal",
  },
  {
    id: "03",
    quote: "The solid brass desk organizer suite transformed my study. It carries a tactile weight and timeless authority that elevate every letter and document I review.",
    name: "Julian V.",
    role: "Managing Partner & Rare Book Collector",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&q=85",
    alt: "Julian V. executive desk setup with brass stationery",
  },
  {
    id: "04",
    quote: "From the wax-sealed unboxing to the full-grain leather cover that is developing a rich caramel patina, Quillhaven delivers true heirloom quality.",
    name: "Clara D.",
    role: "Creative Director & Essayist",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&q=85",
    alt: "Clara D. reviewing stationery correspondence suite",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = (newIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(newIndex);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 400);
  };

  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + scribeNotes.length) % scribeNotes.length;
    handleNavigate(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % scribeNotes.length;
    handleNavigate(nextIdx);
  };

  const current = scribeNotes[currentIndex];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#FAF8F5] text-[#121820] border-t border-[#C5A059]/20" id="testimonials">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[0.68rem] font-serif uppercase tracking-[0.24em] text-[#C5A059] mb-3">
            <span>✦</span>
            Collector &amp; Scribe Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-tight text-[#121820] leading-[1.15]">
            Trusted By Authors <span className="text-[#C5A059] italic font-normal">&amp; Master Scribes</span>
          </h2>
          <p className="text-[#1A202C]/75 text-xs sm:text-sm md:text-base leading-relaxed mt-3.5 max-w-xl mx-auto font-normal">
            From daily journaling rituals to formal executive correspondence, hear directly from the creators using our fine instruments.
          </p>
        </div>

        {/* Testimonial Feature Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#C5A059]/30 shadow-md">
          
          {/* Left Column: Quote & Scribe Info */}
          <div className="lg:col-span-6 flex flex-col justify-between min-h-[280px] sm:min-h-[300px]">
            <div>
              {/* Rating stars */}
              <div className="flex items-center gap-1 text-[#C5A059] mb-4 sm:mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
                <span className="text-xs font-serif font-bold text-[#121820]/70 ml-2">5.0 Verified Patron Review</span>
              </div>

              <blockquote
                className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-[#121820] leading-snug tracking-tight transition-opacity duration-400 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                &ldquo;{current.quote}&rdquo;
              </blockquote>
            </div>

            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#C5A059]/20 flex items-center justify-between">
              <div>
                <div className="text-base sm:text-lg font-serif font-bold text-[#121820]">
                  {current.name}
                </div>
                <div className="text-xs font-semibold text-[#C5A059] tracking-wider mt-0.5 uppercase">
                  {current.role} · {current.location}
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 flex items-center justify-center text-[#121820] hover:bg-[#C5A059] hover:text-[#121820] transition-all cursor-pointer shadow-xs font-bold"
                  aria-label="Previous Testimonial"
                >
                  ←
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#C5A059]/40 flex items-center justify-center text-[#121820] hover:bg-[#C5A059] hover:text-[#121820] transition-all cursor-pointer shadow-xs font-bold"
                  aria-label="Next Testimonial"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Scribe Photograph */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-2xl bg-black/5 shadow-lg border border-[#C5A059]/25">
              {scribeNotes.map((note, idx) => (
                <div
                  key={note.id}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    currentIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={note.image}
                    alt={note.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover object-center"
                    priority={idx === 0}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
