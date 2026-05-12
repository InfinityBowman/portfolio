import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { MY_STACK } from '@/lib/data';
import SectionTitle from '@/components/SectionTitle';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const slideUpEl = containerRef.current?.querySelectorAll('.slide-up');

      if (!slideUpEl?.length) return;

      const isTouch = ScrollTrigger.isTouch;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
          ...(isTouch ?
            { toggleActions: 'play none none none' }
          : { end: 'bottom 80%', scrub: 0.5 }),
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
          start: 'bottom 50%',
          end: 'bottom 10%',
          scrub: 1,
        },
      });

      tl.to(containerRef.current, {
        y: -150,
        opacity: 0,
      });
    },
    { scope: containerRef },
  );

  return (
    <section id='skills' ref={containerRef} className='min-h-screen'>
      <SectionTitle title='My Stack' />

      <div className='space-y-20'>
        {Object.entries(MY_STACK).map(([key, value]) => (
          <div className='grid md:grid-cols-12' key={key}>
            <div className='md:col-span-5'>
              <h3 className='slide-up text-muted-foreground mb-4 text-5xl leading-none uppercase'>
                {key}
              </h3>
            </div>

            <div className='flex flex-wrap gap-x-11 gap-y-9 md:col-span-7'>
              {value.map(item => (
                <div
                  className='slide-up flex items-center gap-2 leading-none sm:gap-3.5'
                  key={item.name}
                >
                  <div className='h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12'>
                    <img
                      src={item.icon}
                      alt={item.name + ' icon'}
                      className='h-full w-full object-contain'
                      loading='lazy'
                    />
                  </div>
                  <span className='text-xl sm:text-2xl'>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
