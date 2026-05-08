import { Outlet, createFileRoute } from '@tanstack/react-router';
import { ReactLenis } from 'lenis/react';
import { useState, useEffect } from 'react';
import { LenisScrollTriggerSync, LenisViewTransitionSync } from '@/lib/lenis-utils';
import NavMenuToggle from '@/components/nav/NavMenuToggle';
import NavMenu from '@/components/nav/NavMenu';
import Footer from '@/components/Footer';
import BackgroundParticles from '@/components/BackgroundParticles';
import BackgroundCanvas from '@/components/BackgroundGrid';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';

export const Route = createFileRoute('/_portfolio')({
  component: LayoutComponent,
});

function LayoutComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const el = document.documentElement;
    el.dataset.theme = 'dark';
    el.dataset.themeLocked = '';
    el.dataset.hideScrollbar = '';
    return () => {
      delete el.dataset.themeLocked;
      delete el.dataset.hideScrollbar;
      const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
      el.dataset.theme = saved ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    };
  }, []);

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
