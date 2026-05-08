import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { PROCESS_STEPS } from '@/lib/contracting-data';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.step-item', {
        opacity: 0,
        y: 30,
        stagger: 0.15,
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
    <section id="process" ref={containerRef}>
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">How It Works</h2>
      <div className="grid gap-8 sm:grid-cols-3">
        {PROCESS_STEPS.map((step) => (
          <div key={step.number} className="step-item text-center">
            <div className="w-12 h-12 rounded-full border-2 border-muted flex items-center justify-center mx-auto mb-4 text-lg font-semibold text-primary">
              {step.number}
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
