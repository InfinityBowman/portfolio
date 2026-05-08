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
    <section
      id='hero'
      className='relative flex min-h-svh flex-col items-center justify-center gap-8'
    >
      <h1 className='sr-only'>Jacob Maynard's Portfolio Website</h1>
      <motion.div
        className='-mb-4 w-full max-w-2xl text-center sm:mb-0 xl:max-w-4xl'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <ParticleText text='Jacob Maynard' colorScheme='dark' />
      </motion.div>
      <motion.div initial='hidden' animate='visible' variants={fadeUpVariants} custom={1.2}>
        <Phrases startDelay={1200} />
      </motion.div>
      <motion.div initial='hidden' animate='visible' variants={fadeUpVariants} custom={1.6}>
        <a
          href='/Jacob Maynard Resume 2026.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='group border-muted text-primary bg-background hover:bg-secondary hover:border-primary flex items-center gap-2 rounded-lg border p-3 px-5 transition-colors'
        >
          <FaFilePdf size={18} />
          <span className='text-secondary-foreground group-hover:text-primary transition-colors'>
            View Resume
          </span>
        </a>
      </motion.div>
    </section>
  );
}
