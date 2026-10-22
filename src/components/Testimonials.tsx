"use client";

import { siteConfig } from "@/lib/brandIcon";

interface TestimonialCard {
  name: string;
  location: string;
  product: string;
  quote: string;
}

const row1Cards: TestimonialCard[] = [
  {
    name: "Marcus R.",
    location: "Denver, CO",
    product: "Weighted Training Vest",
    quote: "I use the vest for weekend rucks and hill repeats. The side straps lock it down so it doesn't bounce, and the grab handle is handier than I expected.",
  },
  {
    name: "Elena V.",
    location: "Portland, OR",
    product: "Roll-Top Gear Backpack",
    quote: "Rode to work through a full morning of rain and my laptop and gym clothes stayed completely dry. The roll-top is simple and it just works.",
  },
  {
    name: "David K.",
    location: "Columbus, OH",
    product: "Home Strength Kit",
    quote: "Perfect for my small apartment. Dumbbells and the band cover presses, rows and curls, and everything fits in a drawer when I'm done.",
  },
  {
    name: "Sarah T.",
    location: "Raleigh, NC",
    product: "Weighted Training Vest",
    quote: "Bought a multi-pack for my bootcamp group. Easy to adjust between people and the padded shoulders are comfortable for long sessions.",
  },
];

const row2Cards: TestimonialCard[] = [
  {
    name: "James T.",
    location: "Austin, TX",
    product: "Roll-Top Gear Backpack",
    quote: "Arrived quickly with tracking the whole way. Mesh straps are comfortable even with a full load of gear for a lake day.",
  },
  {
    name: "Chloe M.",
    location: "Boise, ID",
    product: "Home Strength Kit",
    quote: "I travel for work and toss the band in my carry-on. Having a real workout option in a hotel room has kept me consistent.",
  },
  {
    name: "Brandon H.",
    location: "Phoenix, AZ",
    product: "Weighted Training Vest",
    quote: "Solid build, heavy-duty webbing and straps that hold. It's made my bodyweight circuits feel brand new again.",
  },
  {
    name: "Rachel C.",
    location: "Madison, WI",
    product: "Home Strength Kit",
    quote: "Customer support helped me pick the right bundle for our home gym. Friendly, quick to answer, and the gear has held up great.",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .replace(".", "");
}

function CardItem({ card }: { card: TestimonialCard }) {
  return (
    <figure className="mx-2.5 w-[19rem] sm:w-[23rem] shrink-0 flex flex-col justify-between rounded-2xl border border-line bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-0.5 text-secondary" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" className="text-primary/10" aria-hidden="true">
            <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
          </svg>
        </div>
        <blockquote className="text-sm text-neutral-text/85 leading-relaxed">&ldquo;{card.quote}&rdquo;</blockquote>
      </div>

      <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-black text-secondary">
          {initials(card.name)}
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-black text-primary">{card.name}</span>
          <span className="block text-xs text-muted truncate">
            {card.location} · {card.product}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  // Duplicate arrays to create continuous infinite marquee loop
  const row1Repeated = [...row1Cards, ...row1Cards, ...row1Cards];
  const row2Repeated = [...row2Cards, ...row2Cards, ...row2Cards];

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-surface overflow-hidden" id="testimonials">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="eyebrow mb-3 justify-center">Customer Stories</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-primary leading-[1.05]">
            Out In The Real <span className="text-secondary">World</span>
          </h2>
          <p className="text-muted text-sm md:text-base mt-3 leading-relaxed">
            {`What customers say after taking ${siteConfig.brandName} gear on trails, commutes and home workouts.`}
          </p>
        </div>
      </div>

      {/* Marquee Row 1 */}
      <div className="w-full overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-12 sm:w-28 md:w-40 z-10 pointer-events-none bg-gradient-to-r from-surface to-transparent" />
        <div className="marquee-inner flex transform-gpu pt-2 pb-3">
          {row1Repeated.map((card, idx) => (
            <CardItem key={`row1-${idx}`} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-12 sm:w-28 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-surface to-transparent" />
      </div>

      {/* Marquee Row 2 (Reverse) */}
      <div className="w-full overflow-hidden relative mt-3">
        <div className="absolute left-0 top-0 h-full w-12 sm:w-28 md:w-40 z-10 pointer-events-none bg-gradient-to-r from-surface to-transparent" />
        <div className="marquee-inner marquee-reverse flex transform-gpu pt-3 pb-2">
          {row2Repeated.map((card, idx) => (
            <CardItem key={`row2-${idx}`} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-12 sm:w-28 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-surface to-transparent" />
      </div>
    </section>
  );
}
