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
        {PROCESS_STEPS.map((step, i) => (
          <div key={step.number} className="step-item text-center">
            <div className="relative flex items-center justify-center mb-4">
              {i > 0 && (
                <div className="hidden sm:block absolute right-1/2 mr-6 w-[calc(100%-3rem)] h-px bg-ring" />
              )}
              <div className="size-12 rounded-full bg-secondary flex items-center justify-center text-lg font-semibold text-primary relative">
                {step.number}
              </div>
              {i < PROCESS_STEPS.length - 1 && (
                <div className="hidden sm:block absolute left-1/2 ml-6 w-[calc(100%-3rem)] h-px bg-ring" />
              )}
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
