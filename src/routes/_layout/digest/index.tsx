import { Link, createFileRoute } from '@tanstack/react-router';
import type { MarkdownModule } from '@/lib/markdown';

const digestFiles = import.meta.glob<MarkdownModule>('../../../digests/*.md', {
  eager: true,
})

const digests = Object.entries(digestFiles)
  .map(([path, mod]) => {
    const slug = path.split('/').pop()!.replace('.md', '')
    return { ...mod.attributes, html: mod.html, slug }
  })
  .sort((a, b) => (b.issue || 0) - (a.issue || 0))
  .filter((d) => d.published === 'true')

function formatDate(dateString: string) {
  if (dateString === 'TBD') return dateString;
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export const Route = createFileRoute('/_layout/digest/')({
  component: DigestListPage,
});

function DigestListPage() {
  return (
    <section className="min-h-screen flex flex-col gap-8 justify-center items-center py-12 px-4">
      <div className="w-full max-w-3xl text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-zinc-100 drop-shadow-lg">Foxfire</h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          A weekly signal flare from the edges of tech — AI, open source, engineering, and whatever else caught fire this week. Curated every Saturday by{' '}
          <a
            href="https://openclaw.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-2 hover:text-link-hover transition-colors"
          >
            OpenClaw
          </a>{' '}
          assistant Felix, running on a homelab somewhere in the midwest.
        </p>
      </div>
      <ul className="w-full max-w-3xl space-y-4">
        {digests.map((digest) => (
          <li
            key={digest.slug}
            className="border rounded-xl border-accent backdrop-blur-md hover:scale-[1.02] transition-all"
            style={{ viewTransitionName: `digest-card-${digest.slug}` }}
          >
            <Link
              to="/digest/$slug"
              params={{ slug: digest.slug }}
              viewTransition
              className="block p-4 text-left w-full text-2xl font-semibold transition-colors"
            >
              <span className="text-muted-foreground text-base font-mono mr-2">#{digest.issue}</span>
              <span style={{ viewTransitionName: `digest-title-${digest.slug}` }}>{digest.title}</span>
              <span className="text-zinc-400 text-base font-normal"> ({formatDate(digest.date)})</span>
              <div className="text-zinc-400 text-base mt-1 font-normal">{digest.summary}</div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
