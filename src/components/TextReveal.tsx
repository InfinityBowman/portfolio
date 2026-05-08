import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  as?: 'h2' | 'h3' | 'p' | 'span';
  className?: string;
}

export default function TextReveal({ text, as: Tag = 'h2', className }: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const words = containerRef.current?.querySelectorAll('.word');
      if (!words?.length) return;
      gsap.from(words, {
        opacity: 0,
        y: 24,
        stagger: 0.04,
        ease: 'power3.out',
        duration: 0.6,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
        },
      });
    },
    { scope: containerRef },
  );

  const words = text.split(' ');

  return (
    <Tag ref={containerRef as React.RefObject<never>} className={className}>
      {words.map((word, i) => (
        <span key={i} className="word inline-block">
          {word}
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  );
}
