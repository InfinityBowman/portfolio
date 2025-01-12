"use client";
import { motion } from "motion/react";
import React, { lazy } from "react";

const AudioPlayer = lazy(() => import("@/components/ui/hobbies/audio-player"));

const tracks = [
  {
    id: 1,
    src: "/audio/LiquidCaverns.mp3",
    alt: "Liquid Caverns",
  },
  { id: 2, src: "/audio/NeuroFunStyle.mp3", alt: "NeuroFun Style" },
  { id: 3, src: "/audio/Shattered.mp3", alt: "Shattered" },
  { id: 4, src: "/audio/youjust.mp3", alt: "You just" },
];

export default function MyTracks() {
  return (
    <motion.div
      className="mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <h2 className="text-3xl font-bold mt-4 text-center gradient-text animate-gradient bg-clip-text text-transparent">
        Music
      </h2>
      {tracks.map((track) => (
        <motion.div
          key={track.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: track.id * 0.2 + 0.6 }}
        >
          <AudioPlayer url={track.src} title={track.alt} />
        </motion.div>
      ))}
    </motion.div>
  );
}
