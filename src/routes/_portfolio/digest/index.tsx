import { Link, createFileRoute } from '@tanstack/react-router';
import type { MarkdownModule } from '@/lib/markdown';

const digestFiles = import.meta.glob<MarkdownModule>('../../../digests/*.md', {
  eager: true,
});

const digests = Object.entries(digestFiles)
  .map(([path, mod]) => {
    const slug = path.split('/').pop()!.replace('.md', '');
    return { ...mod.attributes, html: mod.html, slug };
  })
  .sort((a, b) => (b.issue || 0) - (a.issue || 0))
  .filter(d => d.published === 'true');

function formatDate(dateString: string) {
  if (dateString === 'TBD') return dateString;
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export const Route = createFileRoute('/_portfolio/digest/')({
  component: DigestListPage,
  head: () => ({
    meta: [
      { title: 'Foxfire | Jacob Maynard' },
      {
        name: 'description',
        content:
          'Foxfire — a weekly signal flare from the edges of tech. AI, open source, engineering, and whatever else caught fire this week.',
      },
      { property: 'og:title', content: 'Foxfire | Jacob Maynard' },
      {
        property: 'og:description',
        content:
          'A weekly signal flare from the edges of tech. AI, open source, engineering, and whatever else caught fire this week.',
      },
      { property: 'og:url', content: 'https://jacobmaynard.dev/digest' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'Foxfire | Jacob Maynard' },
      {
        name: 'twitter:description',
        content:
          'A weekly signal flare from the edges of tech. AI, open source, engineering, and whatever else caught fire this week.',
      },
    ],
    links: [{ rel: 'canonical', href: 'https://jacobmaynard.dev/digest' }],
  }),
});

function DigestListPage() {
  return (
    <section className='flex min-h-screen flex-col items-center justify-center gap-8 px-4 py-12'>
      <div className='w-full max-w-3xl text-center'>
        <h2 className='mt-12 mb-4 text-4xl font-extrabold text-zinc-100 drop-shadow-lg'>Foxfire</h2>
        <p className='text-muted-foreground mx-auto max-w-xl text-lg'>
          A weekly signal flare from the edges of tech — AI, open source, engineering, and whatever
          else caught fire this week. Curated every Saturday by{' '}
          <a
            href='https://openclaw.org'
            target='_blank'
            rel='noopener noreferrer'
            className='text-primary hover:text-link-hover underline underline-offset-2 transition-colors'
          >
            OpenClaw
          </a>{' '}
          assistant Felix!
        </p>
      </div>
      <ul className='w-full max-w-3xl space-y-4'>
        {digests.map(digest => (
          <li
            key={digest.slug}
            className='border-accent rounded-xl border backdrop-blur-md transition-all hover:scale-[1.02]'
          >
            <Link
              to='/digest/$slug'
              params={{ slug: digest.slug }}
              viewTransition
              className='block w-full p-4 text-left text-2xl font-semibold transition-colors'
            >
              <span className='text-muted-foreground mr-2 font-mono text-base'>
                #{digest.issue}
              </span>
              <span
                className='font-anton text-xl'
                style={{ viewTransitionName: `digest-title-${digest.slug}` }}
              >
                {digest.title}
              </span>
              <span className='text-base font-normal text-zinc-400'>
                {' '}
                ({formatDate(digest.date)})
              </span>
              <div className='mt-1 text-base font-normal text-zinc-400'>{digest.summary}</div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
