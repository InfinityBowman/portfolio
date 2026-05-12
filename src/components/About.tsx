import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { Link } from '@tanstack/react-router';
import SOCIAL_LINKS from '@/lib/socials';
import { ABOUT } from '@/lib/data';
import SectionTitle from '@/components/SectionTitle';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const slideOverEl = containerRef.current?.querySelectorAll('.slide-over');

      if (!slideOverEl?.length) return;

      const isTouch = ScrollTrigger.isTouch;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          ...(isTouch ?
            { toggleActions: 'play none none none' }
          : { end: 'top 30%', scrub: 1 }),
        },
      });

      tl.from('.slide-over', {
        opacity: 0,
        x: -300,
        ease: 'none',
        stagger: 0.2,
      });

      tl.from('.slide-in', { opacity: 0, x: 200 });
      tl.from('.pop-in', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 60%',
          ...(isTouch ?
            { toggleActions: 'play none none none' }
          : { end: 'top 30%', scrub: 1 }),
        },
        scale: 0,
        opacity: 0,
        y: 50,
        stagger: 0.3,
      });
    },
    { scope: containerRef },
  );

  useGSAP(
    () => {
      if (ScrollTrigger.isTouch) return;

      const revealLineEl = containerRef.current?.querySelectorAll('.reveal-line');

      if (!revealLineEl?.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
          end: 'top 30%',
          scrub: 0.5,
        },
      });

      tl.to('.reveal-line', {
        x: 0,
        ease: 'power2.out',
      });
    },
    { scope: containerRef },
  );

  return (
    <section id='about' ref={containerRef} className=''>
      <SectionTitle title='whoami' />

      <div className='space-y-6 sm:space-y-10'>
        <div className='mx-2 overflow-hidden'>
          <hr className='text-secondary-foreground/70 reveal-line -translate-x-full transform' />
        </div>
        <div className='grid flex-wrap gap-x-16 gap-y-6 sm:gap-y-9 md:grid-cols-12'>
          <h3 className='slide-over text-4xl whitespace-nowrap sm:text-5xl md:col-span-5'>
            {ABOUT.title}
          </h3>
          <p className='slide-in text-md text-muted-foreground sm:mr-2 sm:text-xl md:col-span-7'>
            {ABOUT.description}
          </p>
        </div>
        <div className='flex flex-wrap gap-2 sm:gap-4'>
          {SOCIAL_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className={`${link.className} group border-muted text-primary bg-background hover:bg-secondary focus:border-primary pop-in flex items-center gap-2 rounded-lg border p-1.5 px-2`}
              aria-label={link.label}
            >
              <span className='text-secondary-foreground group-hover:text-primary transition-colors'>
                {link.label}
              </span>
              {link.icon}
            </a>
          ))}
          <Link
            to='/blog'
            viewTransition
            className='group border-muted text-primary bg-background hover:bg-secondary focus:border-primary pop-in flex items-center gap-2 rounded-lg border p-1.5 px-2'
          >
            <span className='text-secondary-foreground group-hover:text-primary transition-colors'>
              My Blog
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
