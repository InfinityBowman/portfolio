"use client";
import { motion } from "motion/react";
import Image from "next/image";
import React, { useState, Suspense, lazy } from "react";
import { LoadingSpinner } from "@/components/spinner";
import { LoaderCircle } from "lucide-react";

const TopTrack = lazy(() => import("@/components/ui/hobbies/top-track"));
const MyTracks = lazy(() => import("@/components/ui/hobbies/my-tracks"));

const designs = [
  { id: 1, src: "/design-images/Relucent_Colors_Glow.png", alt: "Design 1" },
  {
    id: 2,
    src: "/design-images/NotionCalendarDark.png",
    alt: "Design 2",
  },
  { id: 3, src: "/design-images/NotionDark.png", alt: "Design 3" },
  { id: 4, src: "/design-images/ProtonDark.png", alt: "Design 4" },
];

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center gradient-text animate-gradient bg-clip-text text-transparent">
        Graphic Design
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {designs.map((design) => (
          <motion.div
            key={design.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: design.id * 0.2 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {isLoading && (
                <div className="rounded-lg absolute inset-0 flex items-center justify-center bg-gray-200">
                  <LoaderCircle className="animate-spin" size={36} />
                </div>
              )}
              <motion.div whileHover={{ scale: 1.07 }} transition={{ duration: 0.5, ease: "easeOut" }}>
                <Image
                  src={design.src}
                  alt={design.alt}
                  width={400}
                  height={300}
                  className={`rounded-lg object-cover object-center h-60 ${isLoading ? "opacity-0" : "opacity-100"}`}
                  style={{ transform: "scale(1.01)" }}
                  onLoad={() => setIsLoading(false)}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <Suspense fallback={<LoadingSpinner />}>
        <MyTracks />
        <TopTrack />
      </Suspense>
    </div>
  );
}
