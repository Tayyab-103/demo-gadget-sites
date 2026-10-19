"use client";

import React from "react";

/**
 * Top scalloped border: White semicircles pointing into the colored banner
 */
export function ScallopTop({ color = "#fde69c" }: { color?: string }) {
  return (
    <div className="w-full overflow-hidden leading-none z-20 pointer-events-none select-none">
      <svg
        className="w-full h-4 sm:h-5 md:h-6 block"
        viewBox="0 0 1200 24"
        preserveAspectRatio="none"
        fill="#ffffff"
      >
        <path d="M0,0 L0,24 C15,24 15,0 30,0 C45,0 45,24 60,24 C75,24 75,0 90,0 C105,0 105,24 120,24 C135,24 135,0 150,0 C165,0 165,24 180,24 C195,24 195,0 210,0 C225,0 225,24 240,24 C255,24 255,0 270,0 C285,0 285,24 300,24 C315,24 315,0 330,0 C345,0 345,24 360,24 C375,24 375,0 390,0 C405,0 405,24 420,24 C435,24 435,0 450,0 C465,0 465,24 480,24 C495,24 495,0 510,0 C525,0 525,24 540,24 C555,24 555,0 570,0 C585,0 585,24 600,24 C615,24 615,0 630,0 C645,0 645,24 660,24 C675,24 675,0 690,0 C705,0 705,24 720,24 C735,24 735,0 750,0 C765,0 765,24 780,24 C795,24 795,0 810,0 C825,0 825,24 840,24 C855,24 855,0 870,0 C885,0 885,24 900,24 C915,24 915,0 930,0 C945,0 945,24 960,24 C975,24 975,0 990,0 C1005,0 1005,24 1020,24 C1035,24 1035,0 1050,0 C1065,0 1065,24 1080,24 C1095,24 1095,0 1110,0 C1125,0 1125,24 1140,24 C1155,24 1155,0 1170,0 C1185,0 1185,24 1200,24 L1200,0 Z" />
      </svg>
    </div>
  );
}

/**
 * Bottom scalloped border: Cloud arcs of the banner color bulging down into white
 */
export function ScallopBottom({ color = "#fde69c" }: { color?: string }) {
  return (
    <div className="w-full overflow-hidden leading-none z-20 pointer-events-none select-none -mb-[1px]">
      <svg
        className="w-full h-5 sm:h-7 md:h-8 block"
        viewBox="0 0 1200 28"
        preserveAspectRatio="none"
        fill={color}
      >
        <path d="M0,0 L0,12 C15,12 15,28 30,28 C45,28 45,12 60,12 C75,12 75,28 90,28 C105,28 105,12 120,12 C135,12 135,28 150,28 C165,28 165,12 180,12 C195,12 195,28 210,28 C225,28 225,12 240,12 C255,12 255,28 270,28 C285,28 285,12 300,12 C315,12 315,28 330,28 C345,28 345,12 360,12 C375,12 375,28 390,28 C405,28 405,12 420,12 C435,12 435,28 450,28 C465,28 465,12 480,12 C495,12 495,28 510,28 C525,28 525,12 540,12 C555,12 555,28 570,28 C585,28 585,12 600,12 C615,12 615,28 630,28 C645,28 645,12 660,12 C675,12 675,28 690,28 C705,28 705,12 720,12 C735,12 735,28 750,28 C765,28 765,12 780,12 C795,12 795,28 810,28 C825,28 825,12 840,12 C855,12 855,28 870,28 C885,28 885,12 900,12 C915,12 915,28 930,28 C945,28 945,12 960,12 C975,12 975,28 990,28 C1005,28 1005,12 1020,12 C1035,12 1035,28 1050,28 C1065,28 1065,12 1080,12 C1095,12 1095,28 1110,28 C1125,28 1125,12 1140,12 C1155,12 1155,28 1170,28 C1185,28 1185,12 1200,12 L1200,0 Z" />
      </svg>
    </div>
  );
}

/**
 * 4-Point Whimsical Star SVG
 */
export function WhimsicalStar({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12,0 C12.8,7.2 16.8,11.2 24,12 C16.8,12.8 12.8,16.8 12,24 C11.2,16.8 7.2,12.8 0,12 C7.2,11.2 11.2,7.2 12,0 Z" />
    </svg>
  );
}
