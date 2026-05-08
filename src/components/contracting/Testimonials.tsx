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
      <h2 className="text-3xl sm:text-4xl font-anton text-center mb-12">What People Say</h2>
      <div className="grid gap-6 sm:grid-cols-1 max-w-2xl mx-auto">
        {TESTIMONIALS.map((t, i) => (
          <div
            key={i}
            className="testimonial-card p-6 rounded-xl border border-accent bg-background/60 backdrop-blur-sm text-center"
          >
            <blockquote className="text-lg text-primary italic mb-4">
              &ldquo;{t.quote}&rdquo;
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
