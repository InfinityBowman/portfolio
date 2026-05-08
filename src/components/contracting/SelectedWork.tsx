import { useRef } from 'react';
import { Link } from '@tanstack/react-router';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { CASE_STUDIES } from '@/lib/contracting-data';

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
    <section id="work" ref={containerRef}>
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Selected Work</h2>
      <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
        A few projects that show what I can build.{' '}
        <Link to="/portfolio" className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity">
          See the full portfolio
        </Link>
      </p>
      <div className="grid gap-5">
        {CASE_STUDIES.map((study) => (
          <div
            key={study.title}
            className="case-study grid gap-6 sm:grid-cols-2 items-start p-6 rounded-xl border border-accent bg-background/60 backdrop-blur-sm"
          >
            <div className="order-2 sm:order-1">
              <h3 className="text-xl font-semibold text-primary mb-5">{study.title}</h3>
              <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                <p><span className="font-medium text-secondary-foreground">Problem:</span> {study.problem}</p>
                <p><span className="font-medium text-secondary-foreground">Approach:</span> {study.approach}</p>
                <p><span className="font-medium text-secondary-foreground">Result:</span> {study.result}</p>
              </div>
            </div>
            <div className="order-1 sm:order-2">
              <img
                src={study.image}
                alt={study.title}
                className="w-full rounded-lg border border-accent"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
