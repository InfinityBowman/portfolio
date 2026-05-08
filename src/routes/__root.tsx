import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import appCss from '../styles.css?url'
import { ThemeProvider } from '@/lib/theme'

const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://jacobmaynard.dev/#person',
      name: 'Jacob Maynard',
      url: 'https://jacobmaynard.dev',
      jobTitle: 'Software Engineer',
      description: 'Web development, AI solutions, and custom software.',
      sameAs: [
        'https://github.com/InfinityBowman',
        'https://www.linkedin.com/in/jacob-maynard-283767230/',
      ],
      knowsAbout: ['Web Development', 'Artificial Intelligence', 'React', 'TypeScript', 'Cloud Infrastructure'],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://jacobmaynard.dev/#website',
      url: 'https://jacobmaynard.dev',
      name: 'Jacob Maynard',
      publisher: { '@id': 'https://jacobmaynard.dev/#person' },
    },
  ],
});

export const Route = createRootRoute({
  headers: () => ({
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' https://plausible.jacobmaynard.dev",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      `img-src 'self' data: blob:`,
      "connect-src 'self' https://plausible.jacobmaynard.dev",
      "font-src 'self' https://fonts.gstatic.com",
      "frame-ancestors 'none'",
      "form-action 'self'",
      "base-uri 'self'",
    ].join('; '),
    'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
  }),
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
      { name: 'robots', content: 'index,follow,max-image-preview:large' },
      { title: 'Jacob Maynard | Web Development & AI Solutions' },
      {
        name: 'description',
        content:
          'I build and optimize websites, dashboards, and AI-powered tools. Custom web development, SEO, and automation solutions.',
      },
      {
        name: 'keywords',
        content:
          'Jacob Maynard, Web Developer, Freelance Developer, Website Development, AI, SEO, Saint Louis',
      },
      { name: 'author', content: 'Jacob Maynard' },
      { property: 'og:site_name', content: 'Jacob Maynard' },
      { property: 'og:title', content: 'Jacob Maynard | Web Development & AI Solutions' },
      {
        property: 'og:description',
        content:
          'I build and optimize websites, dashboards, and AI-powered tools.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://jacobmaynard.dev' },
      { property: 'og:image', content: 'https://jacobmaynard.dev/og-image.png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Jacob Maynard - Web Development & AI Solutions' },
      { property: 'og:locale', content: 'en_US' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: 'https://jacobmaynard.dev/og-image.png' },
      { name: 'twitter:title', content: 'Jacob Maynard | Web Development & AI Solutions' },
      {
        name: 'twitter:description',
        content:
          'I build and optimize websites, dashboards, and AI-powered tools.',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'canonical', href: 'https://jacobmaynard.dev' },
    ],
    scripts: [
      {
        children:
          '(function(){var t=localStorage.getItem("theme");document.documentElement.dataset.theme=t==="dark"||t==="light"?t:matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light"})()',
      },
      {
        type: 'application/ld+json',
        children: jsonLd,
      },
      {
        src: 'https://plausible.jacobmaynard.dev/js/pa-Kgv3yIBtqUtsphy9Oc7Um.js',
        async: true,
      },
      {
        children:
          'window.plausible=window.plausible||function(){(plausible.q=plausible.q||[]).push(arguments)},plausible.init=plausible.init||function(i){plausible.o=i||{}};plausible.init()',
      },
    ],
  }),

  component: RootLayout,
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
})

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-6xl font-bold gradient-text">404</h1>
      <p className="text-muted-foreground text-lg">This page doesn't exist.</p>
      <Link
        to="/"
        className="text-sm text-primary underline underline-offset-4 hover:text-primary/80"
      >
        Back home
      </Link>
    </div>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body
        className="min-h-screen bg-background text-foreground antialiased"
        style={{
          fontFamily:
            "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        {children}
        <Scripts />
      </body>
    </html>
  )
}

function RootLayout() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  )
}
