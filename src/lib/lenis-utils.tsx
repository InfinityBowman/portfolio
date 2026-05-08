import { useEffect } from 'react';
import { useLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export function LenisScrollTriggerSync() {
  useLenis(() => {
    ScrollTrigger.update();
  });
  return null;
}

export function LenisViewTransitionSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis || typeof document.startViewTransition !== 'function') return;

    const original = document.startViewTransition.bind(document);
    document.startViewTransition = ((...args: [unknown]) => {
      lenis.stop();
      const transition = original(...(args as Parameters<typeof original>));
      transition.finished.finally(() => {
        lenis.start();
      });
      return transition;
    }) as typeof document.startViewTransition;

    return () => {
      document.startViewTransition = original;
    };
  }, [lenis]);

  return null;
}
