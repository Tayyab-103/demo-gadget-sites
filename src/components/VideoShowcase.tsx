"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";

const videos = [
  {
    src: "/videos/video1.mp4",
    title: "Stitched, Piece by Piece",
    desc: "A closer look at how every seam and fabric is checked before it ships.",
  },
  {
    src: "/videos/video2.mp4",
    title: "Worn Every Day",
    desc: "See our tees, flannels, and joggers the way families actually live in them.",
  },
];

function VideoTile({
  src,
  title,
  desc,
  className = "",
}: {
  src: string;
  title: string;
  desc: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <div className={`group relative overflow-hidden rounded-[2rem] border border-black/5 bg-primary shadow-2xl ${className}`}>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/10 to-transparent" />

      <button
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute top-4 right-4 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 hover:border-secondary hover:bg-secondary hover:text-secondary-text"
      >
        {muted ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
          </svg>
        )}
      </button>

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="mb-1 text-sm font-bold text-white md:text-base">{title}</h3>
        <p className="text-xs text-white/70">{desc}</p>
      </div>
    </div>
  );
}

export default function VideoShowcase() {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden" id="video-showcase">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            <span className="eyebrow justify-center mb-5 lg:justify-start">See It In Motion</span>
            <h2 className="mb-6 text-3xl font-black uppercase leading-[1.05] tracking-tight text-primary md:text-5xl">
              Made to Be <span className="text-secondary">Lived In</span>
            </h2>
            <p className="mx-auto mb-9 max-w-md text-sm leading-relaxed text-neutral-text/60 md:text-base lg:mx-0">
              A closer look at the fabric and stitching behind every piece we ship — and how real families actually wear it.
            </p>

            <div className="mx-auto grid max-w-sm grid-cols-2 gap-4 lg:mx-0">
              <div className="rounded-2xl border border-black/5 bg-neutral-bg p-5 text-left">
                <div className="text-2xl font-black text-primary md:text-3xl">2M+</div>
                <div className="mt-1 text-[0.62rem] font-bold uppercase tracking-widest text-neutral-text/50">Video Views</div>
              </div>
              <div className="rounded-2xl border border-black/5 bg-neutral-bg p-5 text-left">
                <div className="text-2xl font-black text-primary md:text-3xl">4.9★</div>
                <div className="mt-1 text-[0.62rem] font-bold uppercase tracking-widest text-neutral-text/50">Fabric Rating</div>
              </div>
            </div>

            <Link
              href="/shop"
              className="group mt-9 inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-primary px-9 py-4 text-center text-sm font-bold uppercase tracking-widest text-primary-text shadow-lg shadow-primary/15 transition-all duration-300 hover:bg-secondary hover:text-secondary-text"
            >
              Shop The Collection
              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
          </div>

          {/* Right: Offset video collage */}
          <div className="relative mx-auto w-full max-w-sm pb-10 lg:mx-0 lg:max-w-none lg:pb-0">
            <VideoTile {...videos[0]} className="aspect-9/16 w-full max-w-70 mx-auto lg:mx-0 lg:ml-auto lg:max-w-75" />
            <div className="absolute -bottom-6 -left-2 w-[58%] max-w-47.5 -rotate-3 rounded-4xl border-4 border-white shadow-2xl sm:-left-4 lg:left-0 lg:right-auto">
              <VideoTile {...videos[1]} className="aspect-9/16 w-full rounded-[1.6rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
