import { motion } from 'motion/react';
import { useLenis } from 'lenis/react';
import ParticleText from '@/components/ParticleText';

export default function ContractingHero() {
  const lenis = useLenis();

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      if (lenis) lenis.scrollTo(el);
      else el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-[85vh] relative flex flex-col gap-6 justify-center items-center text-center">
      <div className="sr-only">Jacob Maynard - Web Development and AI Solutions</div>

      <motion.div
        className="w-full max-w-2xl xl:max-w-4xl -mb-2 sm:mb-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <ParticleText text="Jacob Maynard" />
      </motion.div>

      <motion.p
        className="text-lg sm:text-xl text-muted-foreground max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        I turn your ideas into software that works.
      </motion.p>

      <motion.button
        onClick={scrollToContact}
        className="mt-2 px-8 py-3 rounded-lg border border-muted bg-background text-primary font-medium hover:bg-secondary hover:border-primary transition-colors"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
      >
        Let's Talk
      </motion.button>
    </section>
  );
}
