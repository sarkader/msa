"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  url: string;
  height?: number;
};

export default function CalendlyInline({ url, height = 820 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;

    // Calendly auto-initializes widgets when script loads
    // Check if widget has loaded by observing the iframe
    const checkIfLoaded = () => {
      const iframe = containerRef.current?.querySelector("iframe");
      if (iframe && iframe.src) {
        setIsLoading(false);
      }
    };

    // Check immediately if Calendly is already loaded
    if (typeof window !== "undefined" && (window as { Calendly?: unknown }).Calendly) {
      // Give Calendly a moment to initialize
      setTimeout(checkIfLoaded, 100);
    }

    // Poll for iframe creation (Calendly creates iframe when ready)
    const interval = setInterval(() => {
      checkIfLoaded();
    }, 200);

    // Timeout after 3 seconds - hide loading even if not fully loaded
    const timeout = setTimeout(() => {
      setIsLoading(false);
      clearInterval(interval);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [url]);

  return (
    <div className="relative w-full" style={{ minHeight: `${height}px` }}>
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] to-white rounded-xl border border-[#E6EAF0] flex items-center justify-center z-10">
          <div className="text-center">
            <div className="inline-block w-12 h-12 border-4 border-[#1E3A8A] border-t-transparent rounded-full animate-spin mb-4" />
            <p className="text-[#5B6473] text-sm font-medium">Loading booking calendar...</p>
          </div>
        </div>
      )}

      {/* Calendly widget - auto-initializes when script is ready */}
      <div
        ref={containerRef}
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth: "320px", height: `${height}px` }}
      />
    </div>
  );
}
