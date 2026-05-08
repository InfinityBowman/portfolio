import { CREDENTIALS } from '@/lib/contracting-data';

export default function CredibilityBar() {
  return (
    <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
      {CREDENTIALS.map((c) => (
        <span key={c} className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
          {c}
        </span>
      ))}
    </div>
  );
}
