"use client";
import { motion } from "motion/react";

export default function AboutMe() {
  return (
    <motion.div
      className="p-6 text-center shadow-lg rounded-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className="text-3xl font-bold mb-4 gradient-text animate-gradient bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-lg text-muted-foreground max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        Hello! I'm Jacob Maynard, a senior at university majoring in Computer Science with a Certificate in Data
        Science. I love blending programming with design to solve complex problems in beautiful ways. My journey in tech
        has been driven by curiosity and a desire to innovate, and I'm excited to continue building amazing things!
      </motion.p>
    </motion.div>
  );
}

/**
 * ==============   Styles   ================
 */

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#f5f5f5",
  borderRadius: 5,
};
