import { motion } from 'motion/react';
import { useLenis } from 'lenis/react';
import ParticleText from '@/components/ParticleText';

export default function ContractingHero() {
  const lenis = useLenis();

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    window.plausible("CTA Click");
    const el = document.getElementById('contact');
    if (el) {
      if (lenis) lenis.scrollTo(el);
      else el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-[85vh] relative flex flex-col gap-6 justify-center items-center text-center">
      <h1 className="sr-only">Jacob Maynard - Web Development and AI Solutions</h1>

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
        className="mt-2 px-8 py-3 rounded-lg bg-ring text-white font-medium hover:brightness-110 hover:shadow-glow transition-all duration-200"
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
