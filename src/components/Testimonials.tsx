"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FieldNote {
  id: string;
  quote: string;
  name: string;
  role: string;
  location: string;
  image: string;
  alt: string;
}

const fieldNotes: FieldNote[] = [
  {
    id: "01",
    quote: "The apparel doesn't get in the way when the workout does. The AeroWeave fabric breathes under max heat without losing shape.",
    name: "Sarah T.",
    role: "Track & Field Director",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=85",
    alt: "Sarah T. track and field training in Vantage Thread activewear",
  },
  {
    id: "02",
    quote: "The ThermoFlex compression top completely changed my conditioning blocks. Zero underarm friction during 400m repeat sprint intervals.",
    name: "Marcus R.",
    role: "Head Strength & Conditioning Coach",
    location: "Dallas, TX",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1200&q=85",
    alt: "Marcus R. conditioning coach in technical training apparel",
  },
  {
    id: "03",
    quote: "The ApexKnit hoodie delivers ideal thermal regulation for crisp morning warmup runs without feeling heavy or restricting shoulder mobility.",
    name: "Elena V.",
    role: "Ultra-Endurance Triathlete",
    location: "Boulder, CO",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=85",
    alt: "Elena V. endurance triathlete training outdoors",
  },
  {
    id: "04",
    quote: "Targeted arch compression and seamless toe construction that stay locked in through two-hour turf and weight conditioning sessions.",
    name: "David K.",
    role: "Competitive Athlete & Gym Founder",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&q=85",
    alt: "David K. training in Vantage Thread performance sportswear",
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
    }, 450);
  };

  const handlePrev = () => {
    const nextIdx = (currentIndex - 1 + fieldNotes.length) % fieldNotes.length;
    handleNavigate(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % fieldNotes.length;
    handleNavigate(nextIdx);
  };

  const current = fieldNotes[currentIndex];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white text-black border-t border-black/6" id="testimonials">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Green Accent */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 text-[0.68rem] font-mono font-bold uppercase tracking-widest text-black/60 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
            Athlete Field Notes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary leading-[1.08]">
            Trusted In The <span className="text-secondary">Real World</span>
          </h2>
          <p className="text-black/65 text-xs sm:text-sm md:text-base leading-relaxed mt-3 max-w-xl mx-auto font-normal">
            From early-morning track sessions to the final rep, hear directly from athletes testing our technical sportswear.
          </p>
        </div>

        {/* Testimonial Feature Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-black/3 rounded-3xl p-6 sm:p-10 border border-black/8 shadow-sm">
          
          {/* Left Column: Quote & Athlete Info */}
          <div className="lg:col-span-6 flex flex-col justify-between min-h-[300px]">
            <div>
              {/* Rating stars */}
              <div className="flex items-center gap-1 text-amber-500 mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
                <span className="text-xs font-black text-black/60 ml-2 font-mono">5.0 Verified Review</span>
              </div>

              <blockquote
                className={`text-xl sm:text-2xl md:text-3xl font-black text-primary uppercase leading-snug tracking-tight transition-opacity duration-400 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                &ldquo;{current.quote}&rdquo;
              </blockquote>
            </div>

            <div className="mt-8 pt-6 border-t border-black/10 flex items-center justify-between">
              <div>
                <div className="text-base font-black text-primary uppercase tracking-tight">
                  {current.name}
                </div>
                <div className="text-xs font-bold text-black/50 uppercase tracking-wider mt-0.5">
                  {current.role} · {current.location}
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center text-black hover:bg-secondary hover:border-secondary transition-all cursor-pointer shadow-xs font-bold"
                  aria-label="Previous Testimonial"
                >
                  ←
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center text-black hover:bg-secondary hover:border-secondary transition-all cursor-pointer shadow-xs font-bold"
                  aria-label="Next Testimonial"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Athlete Photograph */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-2xl bg-black/5 shadow-md">
              {fieldNotes.map((note, idx) => (
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
