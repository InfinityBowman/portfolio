import { LoaderCircle } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <LoaderCircle
        className="animate-spin"
        size={48}
      />
    </div>
  );
}
