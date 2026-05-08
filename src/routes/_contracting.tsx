import { Outlet, createFileRoute } from '@tanstack/react-router';
import { ReactLenis } from 'lenis/react';
import { LenisScrollTriggerSync, LenisViewTransitionSync } from '@/lib/lenis-utils';
import TopNav from '@/components/nav/TopNav';
import Footer from '@/components/Footer';

export const Route = createFileRoute('/_contracting')({
  component: ContractingLayout,
});

function ContractingLayout() {
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
      <TopNav />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </ReactLenis>
  );
}
