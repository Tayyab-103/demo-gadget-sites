import React from "react";

export default function PawIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <circle cx="8.5" cy="5.5" r="1.9" />
      <circle cx="15.5" cy="5.5" r="1.9" />
      <circle cx="5" cy="10.2" r="1.8" />
      <circle cx="19" cy="10.2" r="1.8" />
      <path d="M12 9.6c-3.3 0-6 2.3-6 5.3 0 2.2 1.8 3.9 3.6 3.9 1.1 0 1.7-.7 2.4-.7s1.3.7 2.4.7c1.8 0 3.6-1.7 3.6-3.9 0-3-2.7-5.3-6-5.3z" />
    </svg>
  );
}
