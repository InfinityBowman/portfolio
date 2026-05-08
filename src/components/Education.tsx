import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { MY_EDUCATION } from '@/lib/data';
import SectionTitle from '@/components/SectionTitle';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const slideUpEl = containerRef.current?.querySelectorAll('.slide-up');

      if (!slideUpEl?.length) return;

      const isTouch = ScrollTrigger.isTouch;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          ...(isTouch ?
            { toggleActions: 'play none none none' }
          : { end: 'bottom 100%', scrub: 0.5 }),
        },
      });

      tl.from('.slide-up', {
        opacity: 0,
        y: 40,
        ease: 'none',
        stagger: 0.4,
      });
    },
    { scope: containerRef },
  );

  useGSAP(
    () => {
      if (ScrollTrigger.isTouch) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 0%',
          end: 'bottom 0%',
          scrub: 0.5,
        },
      });

      tl.to('.slide-up', {
        opacity: 0,
        y: -20,
        ease: 'none',
        stagger: 0.4,
      });
    },
    { scope: containerRef },
  );

  return (
    <section id='education' ref={containerRef} className=''>
      <SectionTitle title='Education' />

      <div className='space-y-12'>
        {MY_EDUCATION.map((edu, index) => (
          <div
            className='slide-up border-accent flex rounded-xl border p-4 backdrop-blur-md'
            key={index}
          >
            <div className='text-md text-muted-foreground/90 space-y-2 sm:text-lg'>
              <p>{edu.institution}</p>
              <h3 className='text-muted-foreground text-3xl leading-none sm:text-4xl md:text-5xl'>
                {edu.degree}
              </h3>
              <p>{edu.duration}</p>
              {edu.description ?
                <p className='text-muted-foreground/80'>{edu.description}</p>
              : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
