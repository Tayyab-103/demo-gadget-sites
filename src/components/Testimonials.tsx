"use client";

import React from "react";

const testimonials = [
  {
    date: "Aug 2026",
    quote: "These water dumbbells are perfect for my aqua-aerobics classes. The EVA foam is super buoyant and has held up for months in chlorinated water without degrading. Grips are very secure even when fully wet.",
    name: "Sarah M.",
    role: "Verified Aqua Instructor",
    handle: "@sarahm_fit",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    date: "Jul 2026",
    quote: "The genuine leather shell broke in quickly and forms a deep pocket that secures the ball perfectly. The palm pad cushioning is outstanding at absorbing high-velocity catches on the mound.",
    name: "David K.",
    role: "Verified Pitcher",
    handle: "@davidk_baseball",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    date: "Jul 2026",
    quote: "Perfect for our backyard training sessions and batting practice. They are lightweight yet extremely durable—we've hit them hundreds of times without a single crack. The mesh bag is a nice bonus.",
    name: "Elena R.",
    role: "Verified Coach",
    handle: "@elenar_coaches",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
  },
  {
    date: "Jun 2026",
    quote: "Using these dumbbells for low-impact physical therapy. They provide the perfect amount of resistance under water. Highly recommend for anyone looking to build strength without joint strain.",
    name: "Priya N.",
    role: "Verified Athlete",
    handle: "@priyan_aquafit",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
  },
  {
    date: "May 2026",
    quote: "Top-notch glove craftsmanship. The dual-welting gives the glove great structure, and the pocket depth is perfect for transitioning from catches to quick throws.",
    name: "Marcus T.",
    role: "Verified Player",
    handle: "@marcust_plays",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    date: "May 2026",
    quote: "Bought this bulk pack for youth league batting drills. Safe for backyard play, easy for kids to grip, and flies straight. It's saved us so much time at practice!",
    name: "Grace L.",
    role: "Verified Parent",
    handle: "@gracel_youth",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&q=80",
  },
];

const Card = ({ t }: { t: typeof testimonials[0] }) => (
  <div className="bg-white border border-black/5 p-4 rounded-xl mx-3 shadow hover:shadow-lg transition-all duration-200 w-[300px] xs:w-[340px] sm:w-[380px] md:w-[410px] lg:w-[430px] shrink-0 flex flex-col justify-between select-none">
    <div>
      <div className="flex gap-3">
        <img className="w-11 h-11 rounded-full object-cover flex-shrink-0" src={t.image} alt={t.name} />
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1">
            <p className="font-bold text-sm text-primary truncate">{t.name}</p>
            {/* Verification badge */}
            <svg className="flex-shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" fill="#2196F3" />
            </svg>
          </div>
          <span className="text-xs text-neutral-text/50 truncate">{t.handle}</span>
        </div>
      </div>
      <p className="text-xs sm:text-sm py-4 text-neutral-text/80 leading-relaxed font-normal">&ldquo;{t.quote}&rdquo;</p>
    </div>
    
    <div className="flex items-center justify-between text-neutral-text/50 text-[0.68rem] sm:text-[0.7rem] border-t border-black/5 pt-3 mt-1 font-semibold">
      <div className="flex items-center gap-1">
        <span>Posted on</span>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors inline-flex items-center">
          <svg width="10" height="9" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5">
            <path d="m.027 0 4.247 5.516L0 10h.962l3.742-3.926L7.727 10H11L6.514 4.174 10.492 0H9.53L6.084 3.616 3.3 0zM1.44.688h1.504l6.64 8.624H8.082z" fill="currentColor" />
          </svg>
        </a>
      </div>
      <p className="font-medium">{t.date}</p>
    </div>
  </div>
);

export default function Testimonials() {
  // Row 1: all testimonials doubled
  const row1 = [...testimonials, ...testimonials];
  
  // Row 2: offset starting order and doubled
  const row2 = [
    ...testimonials.slice(3),
    ...testimonials.slice(0, 3),
    ...testimonials.slice(3),
    ...testimonials.slice(0, 3)
  ];

  return (
    <section className="py-16 md:py-24 bg-neutral-bg relative overflow-hidden" id="testimonials">
      <style>{`
        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-inner-scroll {
          animation: marqueeScroll 35s linear infinite;
        }
        .marquee-inner-scroll:hover {
          animation-play-state: paused;
        }
        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>

      <div className="w-full relative z-10">
        <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
          <span className="eyebrow mb-4 justify-center">Customer Love</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-primary tracking-tight">
            Loved by <span className="text-secondary">15k+ Athletes</span>
          </h2>
          <p className="text-neutral-text/60 text-sm md:text-base mt-4 max-w-md mx-auto font-medium">
            Every review is proof of the quality and care we put into each piece we ship.
          </p>
        </div>

        {/* Marquee Row 1 */}
        <div className="w-full overflow-hidden relative py-3">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 h-full w-20 md:w-32 z-10 pointer-events-none bg-gradient-to-r from-neutral-bg to-transparent"></div>
          
          <div className="marquee-inner-scroll flex transform-gpu w-max">
            {row1.map((t, idx) => (
              <Card key={`row1-${idx}`} t={t} />
            ))}
          </div>

          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 h-full w-20 md:w-32 z-10 pointer-events-none bg-gradient-to-l from-neutral-bg to-transparent"></div>
        </div>

        {/* Marquee Row 2 */}
        <div className="w-full overflow-hidden relative py-3 mt-2">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 h-full w-20 md:w-32 z-10 pointer-events-none bg-gradient-to-r from-neutral-bg to-transparent"></div>
          
          <div className="marquee-inner-scroll marquee-reverse flex transform-gpu w-max">
            {row2.map((t, idx) => (
              <Card key={`row2-${idx}`} t={t} />
            ))}
          </div>

          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 h-full w-20 md:w-32 z-10 pointer-events-none bg-gradient-to-l from-neutral-bg to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
