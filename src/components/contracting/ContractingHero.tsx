import { motion } from 'motion/react';
import { useLenis } from 'lenis/react';
import ParticleText from '@/components/ParticleText';

export default function ContractingHero() {
  const lenis = useLenis();

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    window.plausible('CTA Click');
    const el = document.getElementById('contact');
    if (el) {
      if (lenis) lenis.scrollTo(el);
      else el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id='hero'
      className='relative flex min-h-[85vh] flex-col items-center justify-center gap-6 text-center'
    >
      <h1 className='sr-only'>Jacob Maynard - Web Development and AI Solutions</h1>

      <motion.div
        className='-mb-2 w-full max-w-2xl sm:mb-0 xl:max-w-4xl'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <ParticleText text='Jacob Maynard' />
      </motion.div>

      <motion.p
        className='text-muted-foreground max-w-2xl text-lg sm:text-xl'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        I turn your ideas into software that works.
      </motion.p>

      <motion.button
        className='bg-ring hover:shadow-glow mt-2 rounded-lg px-8 py-3 font-medium text-white transition-all duration-200 hover:brightness-110'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        onClick={scrollToContact}
      >
        Let's Talk
      </motion.button>
    </section>
  );
}
