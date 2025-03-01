import React, { Suspense, lazy } from 'react';
import { LoadingSpinner } from '@/components/spinner';
import BackgroundCanvas from '@/components/ui/background-canvas';

const TopTrack = lazy(() => import('@/components/ui/hobbies/top-track'));
const MyTracks = lazy(() => import('@/components/ui/hobbies/my-tracks'));
const GraphicDesign = lazy(() => import('@/components/ui/hobbies/graphic-design'));

export default function Page() {
  return (
    <>
      <BackgroundCanvas opacity={0.2} />
      <div className="p-6">
        <Suspense fallback={<LoadingSpinner />}>
          <GraphicDesign />
          <MyTracks />
          <TopTrack />
        </Suspense>
      </div>
    </>
  );
}
