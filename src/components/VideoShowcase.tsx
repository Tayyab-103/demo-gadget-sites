"use client";

import React, { useRef, useState } from "react";

const videos = [
  {
    src: "/videos/video1.mp4",
    title: "Hand-Finished, Piece by Piece",
    desc: "A closer look at how every piece is inspected and finished before it ships.",
  },
  {
    src: "/videos/video2.mp4",
    title: "Worn Every Day",
    desc: "See our jewelry, watches, and clocks the way our customers actually live with them.",
  },
];

function VideoCard({ src, title, desc }: { src: string; title: string; desc: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="group relative rounded-[2.5rem] overflow-hidden border border-black/5 shadow-2xl bg-primary flex items-center justify-center h-[360px] md:h-[440px]">
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="max-h-full max-w-full w-auto h-auto"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/5 to-transparent pointer-events-none" />

      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 flex items-end justify-between gap-4">
        <div>
          <h3 className="text-white font-bold text-lg md:text-xl mb-1">{title}</h3>
          <p className="text-white/70 text-xs md:text-sm max-w-xs">{desc}</p>
        </div>

        <button
          onClick={toggleMute}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="flex-shrink-0 h-11 w-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-secondary hover:text-primary hover:border-secondary transition-all duration-300"
        >
          {muted ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <line x1="23" y1="9" x2="17" y2="15"></line>
              <line x1="17" y1="9" x2="23" y2="15"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default function VideoShowcase() {
  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden" id="video-showcase">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <span className="eyebrow justify-center mb-4">See It In Motion</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-primary mb-4 tracking-tight">
            Crafted to Be <span className="text-secondary">Seen Up Close</span>
          </h2>
          <p className="text-neutral-text/60 text-sm md:text-base">
            A closer look at the craftsmanship and detail behind every piece we ship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((v) => (
            <VideoCard key={v.src} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
}
