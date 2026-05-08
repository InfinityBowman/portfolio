import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TESTIMONIALS } from '@/lib/contracting-data';
import TextReveal from '@/components/TextReveal';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.testimonial-card', {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        ease: 'power2.out',
        duration: 0.6,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef}>
      <TextReveal
        text='What People Say'
        className='mb-12 text-center text-3xl font-bold sm:text-4xl'
      />
      <div className='mx-auto grid max-w-5xl gap-6 md:grid-cols-3'>
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className='testimonial-card border-border bg-background/60 rounded-xl border p-6 text-center backdrop-blur-sm'
          >
            <div className='text-ring/30 font-serif text-6xl leading-none select-none'>&ldquo;</div>
            <blockquote className='text-primary -mt-4 mb-4 text-lg'>{t.quote}</blockquote>
            <div className='text-muted-foreground text-sm'>
              <span className='text-secondary-foreground font-medium'>{t.name}</span>
              {t.role && <span>, {t.role}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
