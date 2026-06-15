import { Link, createFileRoute, notFound } from '@tanstack/react-router';
import { useEffect } from 'react';
import { useLenis } from 'lenis/react';
import 'prismjs/themes/prism-tomorrow.css';
import Prism from 'prismjs';
import { FaArrowLeft } from 'react-icons/fa';
import type { MarkdownModule } from '@/lib/markdown';

const postFiles = import.meta.glob<MarkdownModule>('../../../posts/*.md', {
  eager: true,
});

const posts = Object.entries(postFiles)
  .map(([path, mod]) => {
    const slug = path.split('/').pop()!.replace('.md', '');
    return { ...mod.attributes, html: mod.html, slug };
  })
  .filter(post => post.published === 'true');

function formatDate(dateString: string) {
  if (dateString === 'TBD') return dateString;
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export const Route = createFileRoute('/_portfolio/blog/$slug')({
  component: BlogPostPage,
  loader: ({ params }) => {
    const post = posts.find(p => p.slug === params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const articleJsonLd = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: loaderData.title,
      description: loaderData.summary,
      datePublished: loaderData.date,
      url: `https://jacobmaynard.dev/blog/${loaderData.slug}`,
      author: {
        '@type': 'Person',
        name: 'Jacob Maynard',
        url: 'https://jacobmaynard.dev',
      },
    });
    return {
      meta: [
        { title: `${loaderData.title} | Jacob Maynard` },
        { name: 'description', content: loaderData.summary },
        { property: 'og:title', content: loaderData.title },
        { property: 'og:description', content: loaderData.summary },
        { property: 'og:type', content: 'article' },
        {
          property: 'og:url',
          content: `https://jacobmaynard.dev/blog/${loaderData.slug}`,
        },
        { property: 'article:published_time', content: loaderData.date },
        { property: 'article:author', content: 'Jacob Maynard' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: loaderData.title },
        { name: 'twitter:description', content: loaderData.summary },
      ],
      links: [
        {
          rel: 'canonical',
          href: `https://jacobmaynard.dev/blog/${loaderData.slug}`,
        },
      ],
      scripts: [{ type: 'application/ld+json', children: articleJsonLd }],
    };
  },
});

function BlogPostPage() {
  const post = Route.useLoaderData();
  const lenis = useLenis();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [lenis, post.slug]);

  useEffect(() => {
    Prism.highlightAll();
  }, [post.html]);

  return (
    <>
      <Link
        to='/blog'
        viewTransition
        className='m-4 mb-10 flex items-center gap-1 transition-colors hover:text-blue-300'
      >
        <FaArrowLeft className='h-4 w-4' /> <span>Back</span>
      </Link>
      <article className='xs:max-w-md prose prose-invert border-accent mx-auto mb-8 min-h-screen max-w-sm rounded-lg border p-8 shadow-md backdrop-blur-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl'>
        <h1
          className='mb-4 w-fit text-4xl font-extrabold text-zinc-100 drop-shadow-lg'
          style={{ viewTransitionName: `blog-title-${post.slug}` }}
        >
          {post.title}
        </h1>
        <hr className='bg-muted relative bottom-1 m-0! h-0.5 w-10 border-0 p-0!' />
        <span>{formatDate(post.date)}</span>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </>
  );
}
