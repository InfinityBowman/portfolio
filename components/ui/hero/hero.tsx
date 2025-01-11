"use client";
import { motion } from "motion/react";
import { ParticlesBackground } from "./particles";
import { Phrases } from "./phrases";

export const Hero = () => {
  return (
    <div className="relative flex flex-col gap-8 items-center text-center py-20">
      <ParticlesBackground />
      <div className="sr-only">Jacob Maynard Portfolio Website</div>
      <motion.h2
        className="text-5xl lg:text-6xl font-bold gradient-text animate-gradient opacity-90 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Jacob Maynard
      </motion.h2>
      <motion.p
        className="text-2xl lg:text-3xl opacity-80"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Creative Development & Design
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Phrases />
      </motion.div>
    </div>
  );
};
