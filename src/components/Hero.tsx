import { motion } from 'motion/react';
import { FaFilePdf } from 'react-icons/fa';
import Phrases from '@/components/Phrases';
import ParticleText from '@/components/ParticleText';

export default function Hero() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay,
        ease: 'easeOut' as const,
      },
    }),
  };

  return (
    <section id="hero" className="min-h-svh relative flex flex-col gap-8 justify-center items-center">
      <div className="sr-only">Jacob Maynard's Portfolio Website</div>
      <motion.div
        className="w-full max-w-2xl xl:max-w-4xl text-center -mb-4 sm:mb-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <ParticleText text="Jacob Maynard" colorScheme="dark" />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        custom={1.2}
      >
        <Phrases startDelay={1200} />
      </motion.div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        custom={1.6}
      >
        <a
          href="/Jacob Maynard Resume 2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 border border-muted p-3 px-5 text-primary bg-background rounded-lg hover:bg-secondary hover:border-primary transition-colors"
        >
          <FaFilePdf size={18} />
          <span className="text-secondary-foreground group-hover:text-primary transition-colors">View Resume</span>
        </a>
      </motion.div>
    </section>
  );
}
