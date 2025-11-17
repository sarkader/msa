"use client";

import React, { useMemo, useRef } from "react";
import { useDimensions } from "../hooks/use-debounced-dimensions";

type AnimatedGradientProps = {
  colors: string[];
  speed?: number;
  blur?: "light" | "medium" | "heavy";
};

export const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  colors,
  speed = 5,
  blur = "light",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, height } = useDimensions(containerRef as React.RefObject<HTMLElement>);
  const circleSize = useMemo(() => Math.max(width, height), [width, height]);

  const blurClass =
    blur === "light" ? "blur-2xl" : blur === "medium" ? "blur-3xl" : "blur-[100px]";

  const positions = useMemo(
    () => [
      { top: "8%", left: "6%", tx: 0.8, ty: 0.4, mult: 0.9 },
      { top: "20%", left: "42%", tx: -0.6, ty: 0.5, mult: 1.2 },
      { top: "55%", left: "18%", tx: 0.7, ty: -0.7, mult: 1.0 },
      { top: "68%", left: "60%", tx: -0.5, ty: -0.4, mult: 0.8 },
    ],
    []
  );

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div className={`absolute inset-0 ${blurClass}`}>
        {colors.map((color, i) => {
          const p = positions[i % positions.length];
          if (!p) return null;
          const size = Math.max(160, circleSize * p.mult);
          return (
            <svg
              key={i}
              className="absolute animate-background-gradient"
              style={
                {
                  top: p.top,
                  left: p.left,
                  "--background-gradient-speed": `${1 / speed}s`,
                  "--tx-1": p.tx,
                  "--ty-1": p.ty,
                  "--tx-2": -p.tx,
                  "--ty-2": p.ty,
                  "--tx-3": p.tx,
                  "--ty-3": -p.ty,
                  "--tx-4": -p.tx,
                  "--ty-4": -p.ty,
                } as React.CSSProperties
              }
              width={size}
              height={size}
              viewBox="0 0 100 100"
            >
              <circle
                cx="50"
                cy="50"
                r="50"
                fill={color}
                className="opacity-30 dark:opacity-[0.15]"
              />
            </svg>
          );
        })}
      </div>
    </div>
  );
};
