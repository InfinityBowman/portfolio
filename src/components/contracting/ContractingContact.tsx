import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import ContactForm from '@/components/ContactForm';

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
    <section id="contact" ref={containerRef} className="pb-16">
      <h2 className="text-3xl sm:text-4xl font-anton text-center mb-4">Work With Me</h2>
      <p className="contact-fade text-muted-foreground text-center mb-10 max-w-xl mx-auto">
        Tell me what you need and I'll get back to you with a plan. No commitment, no jargon.
      </p>

      <div className="contact-fade max-w-2xl mx-auto p-6 rounded-xl border border-accent bg-background/60 backdrop-blur-sm">
        <ContactForm
          showProjectType
          ctaLabel="Send Message"
          messagePlaceholder="Tell me about your project..."
        />
      </div>
    </section>
  );
}
