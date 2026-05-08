import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES } from '@/lib/contracting-data';
import { useTilt } from '@/hooks/useTilt';
import TextReveal from '@/components/TextReveal';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function ServiceCard({ service }: { service: (typeof SERVICES)[number] }) {
  const tilt = useTilt(5);

  return (
    <div
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      className="h-full p-6 rounded-xl border border-border bg-background/60 backdrop-blur-sm hover:border-ring transition-all duration-200 will-change-transform"
    >
      <service.icon className="text-2xl text-peach mb-3" />
      <h3 className="text-xl font-semibold text-primary mb-2">{service.title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
    </div>
  );
}

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.service-card-wrapper', {
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
      <TextReveal
        text="What I Do"
        className="text-3xl sm:text-4xl font-bold text-center mb-4"
      />
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        From building your first website to adding AI features to your existing business. I handle the technical side so you can focus on what you do best.
      </p>
      <div className="grid gap-6 sm:grid-cols-2">
        {SERVICES.map((service) => (
          <div key={service.title} className="service-card-wrapper">
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </section>
  );
}
