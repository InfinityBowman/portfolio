import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { SERVICES } from '@/lib/contracting-data';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.service-card', {
        opacity: 0,
        y: 40,
        stagger: 0.1,
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
    <section id="services" ref={containerRef}>
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">What I Do</h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        From building your first website to adding AI features to your existing business. I handle the technical side so you can focus on what you do best.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="service-card p-6 rounded-xl border border-accent bg-background/60 backdrop-blur-sm hover:border-muted-hover transition-colors"
          >
            <service.icon className="text-2xl text-muted-foreground mb-3" />
            <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
