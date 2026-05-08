import { CREDENTIALS } from '@/lib/contracting-data';

export default function CredibilityBar() {
  return (
    <div className='text-muted-foreground flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm'>
      {CREDENTIALS.map(c => (
        <span key={c} className='flex items-center gap-2'>
          <span className='bg-muted-foreground/50 h-1.5 w-1.5 rounded-full' />
          {c}
        </span>
      ))}
    </div>
  );
}
