"use client";

import React, { useState } from "react";

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
    quote: "The fabric breathes well during workouts and retains its shape and comfort wash after wash.",
    name: "Sarah T.",
    role: "Track & Field Coach",
    location: "Austin, TX",
    image: "/img/testimonialsec1.jpg",
    alt: "Sarah T. training in athletic activewear",
  },
  {
    id: "02",
    quote: "The compression top fits comfortably with great range of motion and zero underarm chafing.",
    name: "Marcus R.",
    role: "Fitness & Conditioning Coach",
    location: "Dallas, TX",
    image: "/img/testimonialsec2.jpg",
    alt: "Marcus R. in technical training apparel",
  },
  {
    id: "03",
    quote: "The hoodie is lightweight yet warm for morning warmups without feeling restrictive.",
    name: "Elena V.",
    role: "Endurance Runner",
    location: "Boulder, CO",
    image: "/img/testimonialsec3.jpg",
    alt: "Elena V. runner training outdoors",
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
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0d3b2e] leading-[1.08]">
            Customer <span className="text-[#0d4a36]">Reviews</span>
          </h2>
          <p className="text-black/65 text-xs sm:text-sm md:text-base leading-relaxed mt-3 max-w-lg mx-auto font-normal">
            Feedback from athletes and fitness enthusiasts wearing our apparel.
          </p>
        </div>

        {/* Testimonial Feature Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#f2f7f4] rounded-3xl p-6 sm:p-10 border border-black/8 shadow-sm">
          
          {/* Left Column: Quote & Athlete Info */}
          <div className="lg:col-span-6 flex flex-col justify-between min-h-[260px]">
            <div>
              <blockquote
                className={`text-xl sm:text-2xl md:text-3xl font-black text-[#0d3b2e] uppercase leading-snug tracking-tight transition-opacity duration-400 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                &ldquo;{current.quote}&rdquo;
              </blockquote>
            </div>

            <div className="mt-8 pt-6 border-t border-black/10 flex items-center justify-between">
              <div>
                <div className="text-base font-black text-[#0d3b2e] uppercase tracking-tight">
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
                  className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center text-[#0d3b2e] hover:bg-[#0d4a36] hover:text-white transition-all cursor-pointer shadow-xs font-bold"
                  aria-label="Previous Testimonial"
                >
                  ←
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center text-[#0d3b2e] hover:bg-[#0d4a36] hover:text-white transition-all cursor-pointer shadow-xs font-bold"
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
                  <img
                    src={note.image}
                    alt={note.alt}
                    className="w-full h-full object-cover object-center"
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
