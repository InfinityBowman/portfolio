import { useRef } from 'react';
import { Link } from '@tanstack/react-router';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CASE_STUDIES } from '@/lib/contracting-data';
import TextReveal from '@/components/TextReveal';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function SelectedWork() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from('.case-study', {
        opacity: 0,
        y: 40,
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
    <section id='work' ref={containerRef}>
      <TextReveal
        text='Selected Work'
        className='mb-4 text-center text-3xl font-bold sm:text-4xl'
      />
      <p className='text-muted-foreground mx-auto mb-8 max-w-2xl text-center'>
        A few projects that show what I can build.{' '}
        <Link
          to='/portfolio'
          className='text-ring underline underline-offset-2 transition-opacity hover:opacity-80'
        >
          See the full portfolio
        </Link>
      </p>
      <div className='grid gap-5'>
        {CASE_STUDIES.map(study => (
          <div
            key={study.title}
            className='case-study border-border bg-background/60 grid items-start gap-6 rounded-xl border p-6 backdrop-blur-sm sm:grid-cols-2'
          >
            <div className='order-2 sm:order-1'>
              <h3 className='text-primary mb-5 text-xl font-semibold'>{study.title}</h3>
              <div className='text-muted-foreground space-y-2 text-sm leading-relaxed'>
                <p>
                  <span className='text-secondary-foreground font-medium'>Problem:</span>{' '}
                  {study.problem}
                </p>
                <p>
                  <span className='text-secondary-foreground font-medium'>Approach:</span>{' '}
                  {study.approach}
                </p>
                <p>
                  <span className='text-secondary-foreground font-medium'>Result:</span>{' '}
                  {study.result}
                </p>
              </div>
            </div>
            <div className='order-1 sm:order-2'>
              <img
                src={study.image}
                alt={study.title}
                className='border-border w-full rounded-lg border'
                loading='lazy'
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
