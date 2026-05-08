import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROCESS_STEPS } from '@/lib/contracting-data';
import TextReveal from '@/components/TextReveal';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      });

      tl.from('.step-circle-1', {
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
        ease: 'back.out(1.7)',
      })
        .from('.step-text-1', { opacity: 0, y: 16, duration: 0.3, ease: 'power2.out' }, '-=0.12')
        .from('.line-r1', { scaleX: 0, duration: 0.15, ease: 'none' }, '-=0.08')
        .from('.line-l2', { scaleX: 0, duration: 0.15, ease: 'none' })
        .from(
          '.step-circle-2',
          { opacity: 0, scale: 0.5, duration: 0.3, ease: 'back.out(1.7)' },
          '-=0.04',
        )
        .from('.step-text-2', { opacity: 0, y: 16, duration: 0.3, ease: 'power2.out' }, '-=0.12')
        .from('.line-r2', { scaleX: 0, duration: 0.15, ease: 'none' }, '-=0.08')
        .from('.line-l3', { scaleX: 0, duration: 0.15, ease: 'none' })
        .from(
          '.step-circle-3',
          { opacity: 0, scale: 0.5, duration: 0.3, ease: 'back.out(1.7)' },
          '-=0.04',
        )
        .from('.step-text-3', { opacity: 0, y: 16, duration: 0.3, ease: 'power2.out' }, '-=0.12');
    },
    { scope: containerRef },
  );

  return (
    <section id='process' ref={containerRef}>
      <TextReveal
        text='How It Works'
        className='mb-12 text-center text-3xl font-bold sm:text-4xl'
      />
      <div className='grid sm:grid-cols-3'>
        {PROCESS_STEPS.map((step, i) => (
          <div key={step.number} className='text-center'>
            <div className='mb-4 flex items-center justify-center'>
              {i > 0 ?
                <div
                  className={`line-l${i + 1} bg-ring/40 hidden h-px flex-1 origin-left sm:block`}
                />
              : <div className='hidden flex-1 sm:block' />}

              <div
                className={`step-circle-${step.number} bg-ring/10 border-ring/30 text-ring flex size-12 shrink-0 items-center justify-center rounded-full border text-lg font-semibold`}
              >
                {step.number}
              </div>

              {i < PROCESS_STEPS.length - 1 ?
                <div
                  className={`line-r${i + 1} bg-ring/40 hidden h-px flex-1 origin-left sm:block`}
                />
              : <div className='hidden flex-1 sm:block' />}
            </div>
            <div className={`step-text-${step.number} sm:px-4`}>
              <h3 className='text-primary mb-2 text-lg font-semibold'>{step.title}</h3>
              <p className='text-muted-foreground text-sm leading-relaxed'>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
