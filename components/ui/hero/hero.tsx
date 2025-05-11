'use client';
import { motion } from 'motion/react';
import { Phrases } from './phrases';
import { Button } from '../button';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import BackgroundCanvas from '@/components/ui/background-particles';

export const Hero = () => {
  const { theme } = useTheme();

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className="relative flex flex-col gap-8 items-center text-center py-20">
      <BackgroundCanvas opacity={1} />
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
        className="text-xl sm:text-2xl lg:text-3xl opacity-80"
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        custom={0.4}
      >
        Creative Development & Design
      </motion.p>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        custom={0.6}
      >
        <Phrases />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        custom={0.8}
      >
        <Link
          href="/about"
          passHref
          legacyBehavior
        >
          <Button
            className={`text-lg ${
              theme !== 'light' ? 'shadow-glow' : 'border'
            } text-primary bg-background/80 hover:bg-secondary transition-colors`}
          >
            Learn More
          </Button>
        </Link>
      </motion.div>
    </section>
  );
};
