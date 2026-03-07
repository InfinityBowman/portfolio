import { Link, createFileRoute } from '@tanstack/react-router'
import type { MarkdownModule } from '@/lib/markdown'

const postFiles = import.meta.glob<MarkdownModule>('../../../posts/*.md', {
  eager: true,
})

const posts = Object.entries(postFiles)
  .map(([path, mod]) => {
    const slug = path.split('/').pop()!.replace('.md', '')
    return { ...mod.attributes, html: mod.html, slug }
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .filter((post) => post.published === 'true')

function formatDate(dateString: string) {
  if (dateString === 'TBD') return dateString;
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export const Route = createFileRoute('/_layout/blog/')({
  component: BlogListPage,
});

function BlogListPage() {
  return (
    <section className="min-h-screen flex flex-col gap-8 justify-center items-center py-12 px-4">
      <h2 className="text-4xl font-extrabold mb-6 text-zinc-100 drop-shadow-lg">Blog</h2>
      <ul className="w-full max-w-3xl space-y-4">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="border rounded-xl border-accent backdrop-blur-md hover:scale-[1.02] transition-all"
            style={{ viewTransitionName: `blog-card-${post.slug}` }}
          >
            <Link
              to="/blog/$slug"
              params={{ slug: post.slug }}
              viewTransition
              className="block p-4 text-left w-full text-2xl font-semibold transition-colors"
            >
              <span style={{ viewTransitionName: `blog-title-${post.slug}` }}>{post.title}</span>
              <span className="text-zinc-400 text-base font-normal"> ({formatDate(post.date)})</span>
              <div className="text-zinc-400 text-base mt-1 font-normal">{post.summary}</div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
