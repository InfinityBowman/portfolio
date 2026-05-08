import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { STATS } from '@/lib/contracting-data';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const counters = containerRef.current?.querySelectorAll('.stat-value');
      if (!counters) return;

      counters.forEach((el) => {
        const target = Number(el.getAttribute('data-value'));
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            once: true,
          },
          onUpdate: () => {
            el.textContent = Math.round(obj.val).toString();
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef}>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-primary mb-1">
              <span className="stat-value" data-value={stat.value}>
                0
              </span>
              <span className="text-ring">{stat.suffix}</span>
            </div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
