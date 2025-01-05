"use client";
import { useEffect, useState } from "react";
import { useMotionValue, useTransform, motion, animate, useMotionValueEvent } from "motion/react";

export const Phrases = () => {
  const phrases = [
    "I love making cool stuff!",
    "Creating awesome websites!",
    "Building sleek apps!",
    "Designing exciting interfaces!",
  ];

  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);

  useEffect(() => {
    const animation = animate(count, phrases.length - 1, {
      duration: phrases.length * 2,
      repeat: Infinity,
      ease: "easeIn",
      repeatDelay: 2,
    });

    return animation.stop;
  }, [count, phrases.length]);

  useMotionValueEvent(rounded, "change", (latest) => {
    setCurrentPhrase(phrases[latest]);
  });

  return <motion.div>{currentPhrase}</motion.div>;
};
