import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContactForm from '@/components/ContactForm';
import TextReveal from '@/components/TextReveal';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ContractingContact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.contact-fade', {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        ease: 'power2.out',
        duration: 0.6,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section id='contact' ref={containerRef} className='pb-16'>
      <TextReveal text="Let's Talk" className='mb-4 text-center text-3xl font-bold sm:text-4xl' />
      <p className='contact-fade text-muted-foreground mx-auto mb-10 max-w-xl text-center'>
        Tell me what you're working on and I'll get back to you. No commitment, no pressure.
      </p>

      <div className='contact-fade border-border bg-background/60 mx-auto max-w-2xl rounded-xl border p-6 backdrop-blur-sm'>
        <ContactForm
          showProjectType
          ctaLabel='Send Message'
          messagePlaceholder='Tell me about your project...'
        />
      </div>
    </section>
  );
}
