"use client";

import { useEffect, useRef } from "react";

type Props = {
  url: string;
  height?: number;
};

// Global flag to track if Calendly script is loaded
let calendlyScriptLoaded = false;

export default function CalendlyInline({ url, height = 820 }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check if script is already in DOM
    if (document.querySelector('script[src*="calendly.com"]')) {
      calendlyScriptLoaded = true;
      return;
    }

    // Load script only once
    if (!calendlyScriptLoaded) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
      calendlyScriptLoaded = true;
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget"
      data-url={url}
      style={{ minWidth: "320px", height: `${height}px` }}
    />
  );
}
