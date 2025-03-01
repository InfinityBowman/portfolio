import React, { Suspense, lazy } from 'react';
import BackgroundCanvas from '@/components/ui/background-grid';

const AboutMe = lazy(() => import('@/components/ui/about/about-me'));
const Projects = lazy(() => import('@/components/ui/about/projects'));
import { LoadingSpinner } from '@/components/spinner';

export default function Page() {
  return (
    <>
      <BackgroundCanvas opacity={0.2} />
      <div className="flex flex-col items-center mx-4 mb-4 gap-2">
        <Suspense fallback={<LoadingSpinner />}>
          <AboutMe />
        </Suspense>
        <Suspense>
          <Projects />
        </Suspense>
      </div>
    </>
  );
}
