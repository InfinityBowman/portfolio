import { Outlet, createFileRoute } from '@tanstack/react-router';
import { ReactLenis } from 'lenis/react';
import { useEffect, useState } from 'react';
import { LenisScrollTriggerSync, LenisViewTransitionSync } from '@/lib/lenis-utils';
import TopNav from '@/components/nav/TopNav';
import Footer from '@/components/Footer';

export const Route = createFileRoute('/_contracting')({
  component: ContractingLayout,
});

function ContractingLayout() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  const content = (
    <>
      {!isTouch && <LenisScrollTriggerSync />}
      {!isTouch && <LenisViewTransitionSync />}
      <TopNav />
      <main className='pt-16'>
        <Outlet />
      </main>
      <Footer />
    </>
  );

  if (isTouch) return content;

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
