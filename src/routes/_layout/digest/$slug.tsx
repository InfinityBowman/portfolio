import { Link, createFileRoute, notFound } from '@tanstack/react-router';
import { useEffect } from 'react';
import 'prismjs/themes/prism-tomorrow.css';
import Prism from 'prismjs';
import { FaArrowLeft } from 'react-icons/fa';
import type { MarkdownModule } from '@/lib/markdown';

const digestFiles = import.meta.glob<MarkdownModule>('../../../digests/*.md', {
  eager: true,
})

const digests = Object.entries(digestFiles)
  .map(([path, mod]) => {
    const slug = path.split('/').pop()!.replace('.md', '')
    return { ...mod.attributes, html: mod.html, slug }
  })
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

export const Route = createFileRoute('/_layout/digest/$slug')({
  component: DigestPostPage,
  loader: ({ params }) => {
    const digest = digests.find((d) => d.slug === params.slug);
    if (!digest) throw notFound();
    return digest;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    return {
      meta: [
        { title: `${loaderData.title} | Foxfire` },
        { name: 'description', content: loaderData.summary },
        { property: 'og:title', content: loaderData.title },
        { property: 'og:description', content: loaderData.summary },
        { property: 'og:type', content: 'article' },
        { property: 'og:url', content: `https://jacobmaynard.dev/digest/${loaderData.slug}` },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: loaderData.title },
        { name: 'twitter:description', content: loaderData.summary },
      ],
      links: [
        { rel: 'canonical', href: `https://jacobmaynard.dev/digest/${loaderData.slug}` },
      ],
    };
  },
});

function DigestPostPage() {
  const digest = Route.useLoaderData();

  useEffect(() => {
    Prism.highlightAll();
  }, [digest.html]);

  return (
    <>
      <Link
        to="/digest"
        viewTransition
        className="m-4 mb-10 hover:text-blue-300 flex items-center gap-1 transition-colors"
      >
        <FaArrowLeft className="w-4 h-4" /> <span>Back</span>
      </Link>
      <article
        className="min-h-screen max-w-sm xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl prose prose-invert mx-auto p-8 mb-8 rounded-lg shadow-md border border-accent backdrop-blur-md"
      >
        <h1
          className="mb-4 w-fit text-4xl font-extrabold text-zinc-100 drop-shadow-lg"
          style={{ viewTransitionName: `digest-title-${digest.slug}` }}
        >
          {digest.title}
        </h1>
        <hr className="relative bottom-1 w-10 h-0.5 bg-muted border-0 m-0! p-0!" />
        <span>{formatDate(digest.date)}</span>
        <div dangerouslySetInnerHTML={{ __html: digest.html }} />
      </article>
    </>
  );
}
