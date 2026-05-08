import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { TESTIMONIALS } from '@/lib/contracting-data';

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
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">What People Say</h2>
      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className="testimonial-card p-6 rounded-xl border border-border bg-background/60 backdrop-blur-sm text-center"
          >
            <div className="text-6xl leading-none text-muted-foreground/50 font-serif select-none">&ldquo;</div>
            <blockquote className="text-lg text-primary mb-4 -mt-4">
              {t.quote}
            </blockquote>
            <div className="text-sm text-muted-foreground">
              <span className="font-medium text-secondary-foreground">{t.name}</span>
              {t.role && <span>, {t.role}</span>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
