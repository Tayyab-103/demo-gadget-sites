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
    quote: "The soil-release finish and double stitching hold up remarkably well through heavy industrial laundry cycles. Our entire facility crew looks sharp and uniform.",
    name: "Sarah J.",
    role: "Plant Operations Director",
    location: "Dallas, TX",
    image: "/img/testimonialsec1.jpg",
    alt: "Sarah J. Plant Operations Director in commercial work shirt",
  },
  {
    id: "02",
    quote: "The cargo pants have practical tool pockets and comfortable flex stretch. Switching our fleet technicians to Pro Work Uniform Supply was our best procurement decision this year.",
    name: "Marcus V.",
    role: "Fleet Maintenance Supervisor",
    location: "Chicago, IL",
    image: "/img/testimonialsec2.jpg",
    alt: "Marcus V. Fleet Maintenance Supervisor on facility floor",
  },
  {
    id: "03",
    quote: "Ordering bundle packs made outfitting our fulfillment warehouse fast and affordable. Prompt UPS delivery and top-tier fabric durability across every shift.",
    name: "Elena R.",
    role: "Logistics Operations Lead",
    location: "Atlanta, GA",
    image: "/img/testimonialsec3.jpg",
    alt: "Elena R. Logistics Operations Lead in quality uniform facility",
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0f2b48] leading-[1.08]">
            Customer <span className="text-[#f59e0b]">Reviews</span>
          </h2>
          <p className="text-black/70 text-xs sm:text-sm md:text-base leading-relaxed mt-3 max-w-lg mx-auto font-normal">
            Feedback from operations managers, facility supervisors, and teams wearing our commercial uniforms.
          </p>
        </div>

        {/* Testimonial Feature Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#f8fafc] rounded-3xl p-6 sm:p-10 border border-black/8 shadow-sm">
          
          {/* Left Column: Quote & Client Info */}
          <div className="lg:col-span-6 flex flex-col justify-between min-h-[260px]">
            <div>
              <blockquote
                className={`text-xl sm:text-2xl md:text-3xl font-black text-[#0f2b48] uppercase leading-snug tracking-tight transition-opacity duration-400 ${
                  isTransitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                &ldquo;{current.quote}&rdquo;
              </blockquote>
            </div>

            <div className="mt-8 pt-6 border-t border-black/10 flex items-center justify-between">
              <div>
                <div className="text-base font-black text-[#0f2b48] uppercase tracking-tight">
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
                  className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center text-[#0f2b48] hover:bg-[#0f2b48] hover:text-white transition-all cursor-pointer shadow-xs font-bold"
                  aria-label="Previous Testimonial"
                >
                  ←
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center text-[#0f2b48] hover:bg-[#0f2b48] hover:text-white transition-all cursor-pointer shadow-xs font-bold"
                  aria-label="Next Testimonial"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Photograph */}
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
