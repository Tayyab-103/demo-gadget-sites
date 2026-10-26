"use client";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "The socket strip mounted straight into our network rack. Eight outlets, a solid metal housing and the power switch is easy to reach.",
    name: "Sarah M.",
    role: "IT Technician",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    quote: "Installed the PV DC switch on a rooftop solar array. The housing is sturdy, the rotary handle has a positive click and it arrived well packed.",
    name: "David K.",
    role: "Solar Installer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    quote: "The rechargeable battery pack runs our LED strip lights for hours. It charges quickly and the DC lead is a good length.",
    name: "Elena R.",
    role: "Verified Purchaser",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
  },
  {
    quote: "Ordered a multi-pack of the power strips for the workshop — the bundle pricing beat what I'd pay locally and it showed up in three business days.",
    name: "Priya N.",
    role: "Workshop Owner",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
  },
  {
    quote: "Swapped an old isolator for this solar switch. Clear ON/OFF markings, easy wiring, and support answered my question the same day.",
    name: "Marcus T.",
    role: "Licensed Electrician",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    quote: "Bought two battery packs for a camping light setup. Holding charge well after several weeks of use.",
    name: "Grace L.",
    role: "Verified Purchaser",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&q=80",
  },
  {
    quote: "The power strip feels much more solid than the plastic ones I used before. The metal body and mounting ears make it easy to fix in place.",
    name: "Daniel R.",
    role: "Verified Purchaser",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    quote: "We keep the DC switches in stock for solar installs now. Consistent quality across every order makes job planning easier.",
    name: "Priya S.",
    role: "Solar Installer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    quote: "Ordered a power strip and a battery pack together. Everything arrived in one box, nicely packed, and checkout was quick.",
    name: "Tom H.",
    role: "Verified Purchaser",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&q=80",
  },
];

const columns = [
  { items: testimonials.slice(0, 3), duration: "26s" },
  { items: testimonials.slice(3, 6), duration: "32s", className: "hidden md:flex" },
  { items: testimonials.slice(6, 9), duration: "21s", className: "hidden lg:flex" },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-secondary" aria-hidden="true">
      {[...Array(5)].map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="card p-6 transition-shadow duration-300 hover:shadow-xl">
      <Stars />
      <p className="mt-4 text-sm leading-relaxed text-ink/70">&ldquo;{t.quote}&rdquo;</p>
      <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
        <img src={t.image} alt={t.name} className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-primary/20" />
        <div>
          <p className="text-sm font-bold text-ink">{t.name}</p>
          <p className="text-xs text-ink/50">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-wash relative overflow-hidden py-16 md:py-24" id="testimonials">
      <div className="mx-auto mb-12 max-w-2xl px-6 text-center md:mb-16">
        <span className="eyebrow">Customer Reviews</span>
        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink md:text-5xl">
          What our <span className="text-gradient">customers say</span>
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-ink/60 md:text-base">
          Feedback from installers, workshop owners and homeowners who&apos;ve ordered from us.
        </p>
      </div>

      <div className="container-page relative">
        <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-24 bg-linear-to-b from-wash to-transparent md:h-32" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-24 bg-linear-to-t from-wash to-transparent md:h-32" />

        <div className="grid h-140 grid-cols-1 gap-5 overflow-hidden md:h-150 md:grid-cols-2 lg:grid-cols-3">
          {columns.map((col, colIdx) => (
            <div
              key={colIdx}
              className={`animate-scroll-up flex-col gap-5 ${col.className || "flex"}`}
              style={{ animationDuration: col.duration }}
            >
              {[...col.items, ...col.items].map((t, i) => (
                <TestimonialCard key={`${colIdx}-${t.name}-${i}`} t={t} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
