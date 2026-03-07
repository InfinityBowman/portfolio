import { createFileRoute } from '@tanstack/react-router';
import ConstellationBackground from '@/components/ConstellationBackground';

export const Route = createFileRoute('/_layout/constellation')({
  component: ConstellationPage,
});

function ConstellationPage() {
  return (
    <div style={{ position: 'fixed', inset: 0, background: '#000' }}>
      <ConstellationBackground opacity={1} />
    </div>
  );
}
