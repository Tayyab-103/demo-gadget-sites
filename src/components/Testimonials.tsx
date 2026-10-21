import React from "react";
import SectionHeading from "@/components/SectionHeading";

const reviews = [
  {
    quote:
      "Our tabby used to bolt the second she saw a brush. This one is so gentle she now leans into it — and clicking the button to drop the fur straight in the trash is genuinely satisfying.",
    owner: "Megan T.",
    pet: "Clementine, tabby cat",
    product: "Pet Grooming Brush",
    image: "/img/QualityPromise2.png",
  },
  {
    quote:
      "Our beagle puppy goes through toys fast. These chew toys have held up for weeks and finally gave him something better to chew than my shoes.",
    owner: "Jordan P.",
    pet: "Biscuit, beagle",
    product: "Chew Toys for Small Dogs",
    image: "/img/contact2.png",
  },
  {
    quote:
      "Got the collar for our corgi pup. The slide adjuster made it easy to get a snug fit, and I can loosen it as she grows.",
    owner: "Priya S.",
    pet: "Waffles, corgi puppy",
    product: "Adjustable Pet Collar",
    image: "/img/QualityPromise.png",
  },
  {
    quote:
      "We have two dogs, so the 3-pack of chew toys made sense — the per-toy price was noticeably lower. Free shipping and it showed up right on time.",
    owner: "Chris & Dana L.",
    pet: "Scout & Juniper",
    product: "Chew Toys — 3-pack",
    image: "/img/QualityPromise3.png",
  },
];

const Stars = () => <div className="text-amber-400 text-sm tracking-wider">★★★★★</div>;

export default function Testimonials() {
  const [featured, ...rest] = reviews;

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-brand-gradient-soft relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10 sm:mb-14">
          <SectionHeading
            align="left"
            eyebrow="Pet parent reviews"
            title={<>Wagging tails, <span className="text-gradient">happy purrs</span></>}
            description="A few words from the people (and pets) who use our essentials every day."
          />
          <div className="flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-sm border border-white self-start lg:self-auto">
            <span className="font-display text-4xl font-semibold text-ink leading-none">4.9</span>
            <div>
              <Stars />
              <p className="text-xs text-muted mt-1">Average rating from verified buyers</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {/* Featured review with photo */}
          <figure className="lg:col-span-2 card overflow-hidden grid grid-cols-1 md:grid-cols-2">
            <div className="relative min-h-[260px] md:min-h-full">
              <img src={featured.image} alt={featured.pet} className="absolute inset-0 w-full h-full object-cover" />
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[0.65rem] font-bold uppercase tracking-wider text-ink px-3 py-1.5 rounded-full">
                {featured.product}
              </span>
            </div>
            <div className="p-7 sm:p-9 flex flex-col">
              <svg className="w-10 h-10 text-primary mb-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M9.6 6C6.5 7.3 4.5 10 4.5 13.4V18h6v-6H7.6c.2-2 1.4-3.4 3.2-4.2L9.6 6zm9 0c-3.1 1.3-5.1 4-5.1 7.4V18h6v-6h-2.9c.2-2 1.4-3.4 3.2-4.2L18.6 6z" />
              </svg>
              <blockquote className="font-display text-xl sm:text-2xl text-ink leading-snug flex-1">
                &ldquo;{featured.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-line flex items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-ink">{featured.owner}</p>
                  <p className="text-xs text-muted">{featured.pet}</p>
                </div>
                <Stars />
              </figcaption>
            </div>
          </figure>

          <div className="flex flex-col gap-5 sm:gap-6">
          {rest.map((r) => (
            <figure key={r.owner} className="card p-5 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-4">
                <img src={r.image} alt={r.pet} className="w-12 h-12 rounded-full object-cover ring-4 ring-primary-soft" />
                <div className="min-w-0">
                  <p className="font-bold text-ink text-sm">{r.owner}</p>
                  <p className="text-xs text-muted truncate">{r.pet}</p>
                </div>
              </div>
              <Stars />
              <blockquote className="text-sm text-muted leading-relaxed mt-2 flex-1">&ldquo;{r.quote}&rdquo;</blockquote>
              <span className="mt-4 self-start text-[0.65rem] font-bold uppercase tracking-wider text-secondary-deep bg-secondary-soft px-2.5 py-1 rounded-md">
                {r.product}
              </span>
            </figure>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
