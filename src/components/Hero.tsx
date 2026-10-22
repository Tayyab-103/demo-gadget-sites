"use client";

import React from "react";
import Link from "next/link";
import { ScallopTop, ScallopBottom, WhimsicalStar } from "./ScallopBorders";

const heroImages = [
  {
    src: "/img/herosection.png",
    alt: "Happy Girl Holding Teddy Bear Toy",
    fallback: "/img/kiddex_hero_banner.png",
  },
  {
    src: "/img/hero-slide-2.jpg",
    alt: "Smiling Boy Playing with Toy Robot",
    fallback: "/img/herosection.png",
  },
  {
    src: "/img/hero-slide-3.jpg",
    alt: "Laughing Girl Hugging Soft Plush Bunny",
    fallback: "/img/herosection.png",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-[#fde599] font-sans pt-24 sm:pt-28 md:pt-32 pb-0 overflow-hidden select-none">
      {/* Top Scalloped Cloud Fringe */}
      <ScallopTop color="#fde599" />

      {/* Floating Animated Cartoon Elements */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Floating Twinkling Stars */}
        <WhimsicalStar className="absolute top-16 left-12 w-6 h-6 text-white/90 zoom-fade" />
        <WhimsicalStar className="absolute top-28 left-[45%] w-5 h-5 text-white/95 zoom-fade" />
        <WhimsicalStar className="absolute top-14 right-1/3 w-6 h-6 text-white/90 zoom-fade" />
        <WhimsicalStar className="absolute bottom-16 right-1/4 w-5 h-5 text-white/95 zoom-fade" />
        <WhimsicalStar className="absolute bottom-24 left-1/4 w-4 h-4 text-white/80 zoom-fade" />

        {/* Floating Pink Butterfly */}
        <div className="absolute top-8 sm:top-12 left-[36%] sm:left-[38%] md:left-[40%] w-16 sm:w-20 md:w-24 float-bob-y">
          <img
            src="/img/anim-butterfly.png"
            alt="Cartoon Butterfly"
            className="w-full h-auto drop-shadow-sm"
          />
        </div>

        {/* Floating Car on Cloud - Bottom Left */}
        <div className="absolute bottom-4 sm:bottom-8 left-2 sm:left-6 md:left-12 w-20 sm:w-24 md:w-28 float-bob-x">
          <img
            src="/img/anim-car-cloud.png"
            alt="Toy Car on Cloud"
            className="w-full h-auto drop-shadow-sm"
          />
        </div>

        {/* Floating Blossom Flower on Cloud - Top Right */}
        <div className="absolute top-10 sm:top-14 right-4 sm:right-10 md:right-16 w-16 sm:w-20 md:w-24 float-bob-y">
          <img
            src="/img/anim-flower-cloud.png"
            alt="Flower on Cloud"
            className="w-full h-auto drop-shadow-sm"
          />
        </div>

        {/* Floating Bumblebee - Mid Right */}
        <div className="absolute top-1/2 -translate-y-1/2 right-6 sm:right-12 md:right-24 w-10 sm:w-12 md:w-14 float-bob-x">
          <img
            src="/img/anim-bee.png"
            alt="Cute Bee"
            className="w-full h-auto drop-shadow-sm"
          />
        </div>

        {/* Soft Pastel Rainbow - Bottom Right */}
        <div className="absolute bottom-0 right-0 w-32 sm:w-44 md:w-56 opacity-90">
          <img
            src="/img/anim-rainbow.png"
            alt="Pastel Rainbow"
            className="w-full h-auto"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-4 pb-12 sm:pb-16 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Circular Hero Carousel with Kids and Toys */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start items-center relative">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
              {/* Concentric Halo Rings */}
              <div className="absolute inset-0 rounded-full border-2 border-white/60 -scale-x-100 rotate-12 pointer-events-none" />
              <div className="absolute -inset-3 rounded-full border border-white/40 pointer-events-none" />

              {/* Circular Slideshow Frame */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-84 md:h-84 rounded-full overflow-hidden bg-white shadow-xl border-4 border-white flex items-center justify-center">
                {heroImages.map((image, index) => {
                  const isActive = index === currentSlide;
                  return (
                    <div
                      key={image.src}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        isActive
                          ? "opacity-100 scale-105 pointer-events-auto z-10"
                          : "opacity-0 scale-100 pointer-events-none z-0"
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = image.fallback;
                        }}
                      />
                    </div>
                  );
                })}

                {/* Slideshow Indicator Dots */}
                <div className="absolute bottom-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/25 backdrop-blur-xs">
                  {heroImages.map((_, dotIndex) => (
                    <button
                      key={dotIndex}
                      type="button"
                      onClick={() => setCurrentSlide(dotIndex)}
                      aria-label={`Go to slide ${dotIndex + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        dotIndex === currentSlide
                          ? "w-4 bg-white"
                          : "w-1.5 bg-white/60 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Title, Price, & View Shop Button */}
          <div className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-[#1e293b] leading-[1.12] tracking-tight">
              The Best Kids Toy<br />Store in the City
            </h1>

            <div className="mt-6 sm:mt-8">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-10 py-3.5 sm:px-12 sm:py-4 rounded-full bg-white text-[#ff4370] font-black text-sm sm:text-base tracking-wide border-2 border-dashed border-[#ff4370] hover:bg-[#ff4370] hover:text-white hover:border-solid hover:scale-105 transition-all duration-200 shadow-md shadow-[#ff4370]/10 cursor-pointer"
              >
                View Shop
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Scalloped Cloud Fringe */}
      <ScallopBottom color="#fde599" />
    </section>
  );
}
