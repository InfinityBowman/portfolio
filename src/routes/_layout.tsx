import { Outlet, createFileRoute } from '@tanstack/react-router';
import { ReactLenis } from 'lenis/react';
import { useEffect, useState } from 'react';
import NavMenuToggle from '@/components/nav/NavMenuToggle';
import NavMenu from '@/components/nav/NavMenu';
import Footer from '@/components/Footer';
import BackgroundParticles from '@/components/BackgroundParticles';
import BackgroundCanvas from '@/components/BackgroundGrid';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';

export const Route = createFileRoute('/_layout')({
  component: LayoutComponent,
});

function LayoutComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
  }, []);

  const content = (
    <>
      <NavMenuToggle onToggle={() => setIsMenuOpen((prev) => !prev)} isOpen={isMenuOpen} />
      <NavMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main className="relative z-10">
        <Outlet />
      </main>
      <Footer />
      <BackgroundParticles opacity={0.5} />
      <BackgroundCanvas opacity={0.1} />
      <ScrollProgressIndicator />
    </>
  );

  if (isTouchDevice) return content;

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
      {content}
    </ReactLenis>
  );
}
