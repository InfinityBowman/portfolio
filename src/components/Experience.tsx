import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useMemo, useRef, useState } from 'react';
import { MY_EXPERIENCE } from '@/lib/data';
import SectionTitle from '@/components/SectionTitle';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const hasDetails = useMemo(
    () =>
      MY_EXPERIENCE.map(item =>
        Boolean(item.description || item.highlights?.length || item.tech?.length),
      ),
    [],
  );

  useGSAP(
    () => {
      if (ScrollTrigger.isTouch) return;

      const slideUpEl = containerRef.current?.querySelectorAll('.slide-up');

      if (!slideUpEl?.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 100%',
          scrub: 0.5,
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
    <section id='experience' ref={containerRef}>
      <SectionTitle title='My Experience' />

      <div className='space-y-12'>
        {MY_EXPERIENCE.map((value, index) => {
          const isOpen = openIndex === index;
          const panelId = `experience-panel-${index}`;
          const buttonId = `experience-button-${index}`;
          const canExpand = hasDetails[index];

          return (
            <React.Fragment key={`${value.company}-${index}`}>
              <div className='slide-up border-accent rounded-xl border p-4 backdrop-blur-md'>
                {canExpand ?
                  <button
                    id={buttonId}
                    type='button'
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(prev => (prev === index ? null : index))}
                    className='flex w-full cursor-pointer items-start justify-between gap-6 text-left'
                  >
                    <div className='text-md text-muted-foreground/90 space-y-2 sm:text-lg'>
                      <p>{value.company}</p>
                      <h3 className='text-muted-foreground text-3xl leading-none sm:text-4xl md:text-5xl'>
                        {value.title}
                      </h3>
                      <p>{value.duration}</p>
                    </div>

                    <span className='text-muted-foreground/90 shrink-0 pt-1' aria-hidden='true'>
                      <svg
                        viewBox='0 0 24 24'
                        className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M6 9l6 6 6-6'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </span>
                  </button>
                : <div className='flex items-start justify-between gap-6'>
                    <div className='text-md text-muted-foreground/90 space-y-2 sm:text-lg'>
                      <p>{value.company}</p>
                      <h3 className='text-muted-foreground text-3xl leading-none sm:text-4xl md:text-5xl'>
                        {value.title}
                      </h3>
                      <p>{value.duration}</p>
                    </div>
                  </div>
                }

                {canExpand ?
                  <div
                    id={panelId}
                    role='region'
                    aria-labelledby={buttonId}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className='overflow-hidden'>
                      <div className='space-y-4 pt-4'>
                        {value.description ?
                          <p className='text-md text-muted-foreground/90 sm:text-lg'>
                            {value.description}
                          </p>
                        : null}

                        {value.highlights?.length ?
                          <ul className='text-muted-foreground/90 ml-5 list-outside list-disc space-y-2'>
                            {value.highlights.map(item => (
                              <li key={item} className='text-md pl-1 sm:text-lg'>
                                {item}
                              </li>
                            ))}
                          </ul>
                        : null}

                        {value.tech?.length ?
                          <div className='text-muted-foreground/90'>
                            <p className='text-sm sm:text-base'>Tech</p>
                            <p className='text-md sm:text-lg'>{value.tech.join(' \u2022 ')}</p>
                          </div>
                        : null}
                      </div>
                    </div>
                  </div>
                : null}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
