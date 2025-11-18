"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type AnimatedCTAProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

export function AnimatedCTA({
  href,
  children,
  className = "",
  variant = "primary",
}: AnimatedCTAProps) {
  const baseClasses =
    "relative inline-flex items-center justify-center text-lg px-8 py-4 font-semibold rounded-full overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A8B4E6] focus:ring-offset-white";

  const variantClasses =
    variant === "primary"
      ? "bg-[#1E3A8A] hover:bg-[#1E40AF] text-white shadow-lg hover:shadow-xl animate-pulse-glow"
      : "bg-white hover:bg-white/95 text-[#1E3A8A] border-2 border-white shadow-lg hover:shadow-xl font-bold";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
      style={{ willChange: "transform" }}
    >
      <Link
        href={href}
        className={`${baseClasses} ${variantClasses} ${className} group`}
      >
        {/* Shimmer effect overlay - optimized with CSS animation */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-transparent ${
            variant === "primary" ? "via-white/30" : "via-[#1E3A8A]/20"
          } to-transparent -skew-x-12 animate-shimmer`}
          style={{ willChange: "transform" }}
        />

        {/* Pulse ring animation - reduced to 1 ring for performance */}
        <div
          className={`absolute inset-0 rounded-full border-2 ${
            variant === "primary" ? "border-white/40" : "border-[#1E3A8A]/30"
          } animate-pulse-ring`}
          style={{ willChange: "transform, opacity" }}
        />

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
          <span className="inline-block animate-arrow-bounce">
            <ArrowRight className="w-5 h-5" />
          </span>
        </span>
      </Link>
    </motion.div>
  );
}

