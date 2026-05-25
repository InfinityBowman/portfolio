import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_portfolio/portfolio')({
  beforeLoad: () => {
    throw redirect({ to: '/' });
  },
});
