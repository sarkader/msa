"use client";

import { motion } from "framer-motion";
import type React from "react";
import { AnimatedGradient } from "./animated-gradient-with-svg";

type CardProps = {
  title: string;
  value: string | number;
  subtitle?: string;
  colors: string[];
  delay: number;
};

const Card: React.FC<CardProps> = ({ title, value, subtitle, colors, delay }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: delay + 0.3 },
    },
  };
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="relative overflow-hidden h-full bg-background dark:bg-background/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      <AnimatedGradient colors={colors} speed={0.05} blur="medium" />
      <motion.div
        className="relative z-10 p-3 sm:p-5 md:p-8 text-foreground backdrop-blur-sm"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h3 className="text-sm sm:text-base md:text-lg text-foreground" variants={item}>
          {title}
        </motion.h3>
        <motion.p
          className="text-2xl sm:text-4xl md:text-5xl font-medium mb-4 text-foreground"
          variants={item}
        >
          {value}
        </motion.p>
        {subtitle && (
          <motion.p className="text-sm text-foreground/80" variants={item}>
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};

export const AnimatedGradientDemo: React.FC = () => (
  <div className="w-full bg-background h-full">
    <div className="grid grid-cols-1 md:grid-cols-3 grow h-full">
      <div className="md:col-span-2">
        <Card
          title="Total Revenue Generated"
          value="$205k+"
          subtitle="Revenue scaled across all partners"
          colors={["#1e3a8a", "#1e40af", "#3b82f6"]}
          delay={0.2}
        />
      </div>
      <Card
        title="Companies Scaled"
        value="12+"
        subtitle="Active partners we've helped"
        colors={["#1e40af", "#3b82f6", "#60a5fa"]}
        delay={0.4}
      />
      <Card
        title="Average ROI"
        value="2.7×"
        subtitle="Revenue growth multiplier"
        colors={["#2563eb", "#3b82f6", "#93c5fd"]}
        delay={0.6}
      />
      <div className="md:col-span-2">
        <Card
          title="90-Day Guarantee"
          value="100%"
          subtitle="Double revenue or fee back"
          colors={["#1e3a8a", "#3b82f6", "#a8b4e6"]}
          delay={0.8}
        />
      </div>
      <div className="md:col-span-3">
        <Card
          title="Success Rate"
          value="100%"
          subtitle="All partners who completed the 90-day program"
          colors={["#1b3380", "#1e40af", "#60a5fa"]}
          delay={1}
        />
      </div>
    </div>
  </div>
);
