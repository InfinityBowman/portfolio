import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/urbanstl')({
  beforeLoad: () => {
    throw redirect({
      href: 'https://urban-stl-analytics.jacobamaynard.workers.dev/explore',
    });
  },
});
