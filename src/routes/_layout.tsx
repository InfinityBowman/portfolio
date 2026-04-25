import { Outlet, createFileRoute } from '@tanstack/react-router';
import { ReactLenis, useLenis } from 'lenis/react';
import { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import NavMenuToggle from '@/components/nav/NavMenuToggle';
import NavMenu from '@/components/nav/NavMenu';
import Footer from '@/components/Footer';
import BackgroundParticles from '@/components/BackgroundParticles';
import BackgroundCanvas from '@/components/BackgroundGrid';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute('/_layout')({
  component: LayoutComponent,
});

function LenisScrollTriggerSync() {
  useLenis(() => {
    ScrollTrigger.update();
  });
  return null;
}

function LenisViewTransitionSync() {
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

function LayoutComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.4,
        smoothWheel: true,
        orientation: 'vertical',
      }}
    >
      <LenisScrollTriggerSync />
      <LenisViewTransitionSync />
      <NavMenuToggle onToggle={() => setIsMenuOpen((prev) => !prev)} isOpen={isMenuOpen} />
      <NavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
      <BackgroundParticles opacity={0.5} />
      <BackgroundCanvas opacity={0.1} />
      <ScrollProgressIndicator />
    </ReactLenis>
  );
}
