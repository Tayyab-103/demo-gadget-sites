import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { brandParts } from "@/lib/brand";

const tag = `#${brandParts.main.replace(/[^A-Za-z0-9]/g, "")}Pack`;

// Bento layout: [src, alt, grid classes]
const photos: [string, string, string][] = [
  ["/img/hero3.png", "Golden pup sitting on a garden path", "col-span-2 row-span-2"],
  ["/img/hero5.jpg", "Black and white cat peeking over a ledge", "col-span-2"],
  ["/img/QualityPromise4.png", "Two guinea pigs sharing a carrot snack", "col-span-1"],
  ["/img/about2.png", "French bulldog in a yellow sweater", "col-span-1"],
  ["/img/how_step3.png", "Wrinkly puppy resting on a box", "col-span-2"],
  ["/img/about1.png", "Fluffy dog getting a scratch from its owner", "col-span-2"],
];

/** Community photo mosaic — "meet the pack". */
export default function PetGallery() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={tag}
          title={<>Meet the <span className="text-gradient">pack</span></>}
          description={`Dogs, cats and the occasional guinea pig — every pet deserves good gear. Share your pet's adventures with ${tag}.`}
          className="mb-10 sm:mb-14"
        />

        <div className="grid grid-cols-2 md:grid-cols-6 auto-rows-[150px] sm:auto-rows-[190px] gap-3 sm:gap-4">
          {photos.map(([src, alt, span]) => (
            <div key={src} className={`group relative overflow-hidden rounded-3xl bg-primary-soft ${span}`}>
              <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-3 left-3 text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
