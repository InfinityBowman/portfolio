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

      <div className='-mb-2 w-full max-w-2xl sm:mb-0 xl:max-w-4xl animate-fade-in [animation-delay:200ms]'>
        <ParticleText text='Jacob Maynard' />
      </div>

      <p className='text-muted-foreground max-w-2xl text-lg sm:text-xl animate-fade-up [animation-delay:1000ms] opacity-0 [animation-fill-mode:forwards]'>
        I turn your ideas into software that works.
      </p>

      <button
        className='bg-ring hover:shadow-glow mt-2 rounded-lg px-8 py-3 font-medium text-white transition-all duration-200 hover:brightness-110 animate-fade-up [animation-delay:1300ms] opacity-0 [animation-fill-mode:forwards]'
        onClick={scrollToContact}
      >
        Let's Talk
      </button>
    </section>
  );
}
