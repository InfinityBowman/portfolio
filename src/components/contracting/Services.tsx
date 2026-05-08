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
      className='border-border bg-background/60 hover:border-ring h-full rounded-xl border p-6 backdrop-blur-sm transition-all duration-200 will-change-transform'
    >
      <service.icon className='text-peach mb-3 text-2xl' />
      <h3 className='text-primary mb-2 text-xl font-semibold'>{service.title}</h3>
      <p className='text-muted-foreground text-sm leading-relaxed'>{service.description}</p>
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
    <section id='services' ref={containerRef}>
      <TextReveal text='What I Do' className='mb-4 text-center text-3xl font-bold sm:text-4xl' />
      <p className='text-muted-foreground mx-auto mb-12 max-w-2xl text-center'>
        From building your first website to adding AI features to your existing business. I handle
        the technical side so you can focus on what you do best.
      </p>
      <div className='grid gap-6 sm:grid-cols-2'>
        {SERVICES.map(service => (
          <div key={service.title} className='service-card-wrapper'>
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </section>
  );
}
