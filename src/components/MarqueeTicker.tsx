"use client";

import React from "react";

const items = [
  "Toy Car",
  "Girls Doll",
  "Board Games",
  "STEM Puzzles",
  "Action Figures",
  "Building Cubes",
  "Plush Bunny",
  "RC Racers",
  "Water Toys",
  "Magnetic Tiles",
  "Musical Toys",
  "Family Games",
];

export default function MarqueeTicker() {
  return (
    <div className="bg-[#ff4370] text-white py-3.5 overflow-hidden whitespace-nowrap border-y-2 border-white/20 select-none shadow-sm font-sans">
      <div className="flex animate-marquee items-center gap-8 text-sm sm:text-base font-black uppercase tracking-widest">
        {items.concat(items).map((text, idx) => (
          <span key={idx} className="flex items-center gap-6">
            <span>{text}</span>
            <span className="text-[#ffb703] text-lg">★</span>
          </span>
        ))}
      </div>
    </div>
  );
}
