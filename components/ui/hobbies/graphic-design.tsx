'use client';
import { motion } from 'motion/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { LoaderCircle } from 'lucide-react';

const designs = [
  { id: 1, src: '/design-images/Relucent_Colors_Glow.png', alt: 'Design 1' },
  {
    id: 2,
    src: '/design-images/NotionCalendarDark.png',
    alt: 'Design 2',
  },
  { id: 3, src: '/design-images/NotionDark.png', alt: 'Design 3' },
  { id: 4, src: '/design-images/ProtonDark.png', alt: 'Design 4' },
];

export default function GraphicDesign() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-center gradient-text animate-gradient bg-clip-text text-transparent">
        Graphic Design
      </h1>
      <div className="flex justify-center">
        <motion.div
          className="flex justify-center text-left p-6 mb-6 w-2/3 shadow-glow rounded-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
        >
          I've always been interested in making cool looking graphics and over my senior year (2024-2025) I started
          picking up Photoshop. It has been an exciting journey. Since then, I've made a logo for my music artist name
          'Relucent' and some nice custom app icons for my phone.
        </motion.div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {designs.map((design) => (
          <motion.div
            key={design.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: design.id * 0.2 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              {isLoading && (
                <div className="rounded-lg absolute inset-0 flex items-center justify-center bg-gray-200">
                  <LoaderCircle
                    className="animate-spin"
                    size={36}
                  />
                </div>
              )}
              <motion.div
                whileHover={{ scale: 1.07 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <Image
                  src={design.src}
                  alt={design.alt}
                  width={400}
                  height={300}
                  className={`rounded-lg object-cover object-center h-60 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                  style={{ transform: 'scale(1.01)' }}
                  onLoad={() => setIsLoading(false)}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
