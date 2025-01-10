"use client";
import { motion } from "motion/react";
import Image from "next/image";
import AudioPlayer from "@/components/ui/hobbies/audio-player";

const designs = [
  {
    id: 1,
    src: "/design-images/NotionCalendarDark.png",
    alt: "Design 1",
  },
  { id: 2, src: "/design-images/NotionDark.png", alt: "Design 2" },
  { id: 3, src: "/design-images/ProtonDark.png", alt: "Design 3" },
  { id: 4, src: "/design-images/Relucent_Colors_Glow.png", alt: "Design 4" },
];

export default function Page() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Music Production and Graphic Design</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {designs.map((design) => (
          <motion.div
            key={design.id}
            className="relative overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={design.src}
              alt={design.alt}
              width={400}
              height={300}
              className="object-cover object-center h-44"
              style={{ transform: "scale(1.01)" }}
            />{" "}
          </motion.div>
        ))}
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Listen to My Music</h2>
        <AudioPlayer url="/audio/LiquidCaverns.mp3" />
      </div>
    </div>
  );
}
