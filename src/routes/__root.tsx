import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { ThemeProvider } from '@/lib/theme'
import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
      { title: 'Jacob Maynard | Web Development & AI Solutions' },
      {
        name: 'description',
        content:
          'I build and optimize websites, dashboards, and AI-powered tools for small businesses. Custom web development, SEO, and automation solutions.',
      },
      {
        name: 'keywords',
        content:
          'Jacob Maynard, Web Developer, Freelance Developer, Website Development, AI, SEO, Small Business, Saint Louis',
      },
      { name: 'author', content: 'Jacob Maynard' },
      { property: 'og:title', content: 'Jacob Maynard | Web Development & AI Solutions' },
      {
        property: 'og:description',
        content:
          'I build and optimize websites, dashboards, and AI-powered tools for small businesses.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://jacobmaynard.dev' },
      { property: 'og:image', content: 'https://jacobmaynard.dev/og-image.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: 'https://jacobmaynard.dev/og-image.png' },
      { name: 'twitter:title', content: 'Jacob Maynard | Web Development & AI Solutions' },
      {
        name: 'twitter:description',
        content:
          'I build and optimize websites, dashboards, and AI-powered tools for small businesses.',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://jacobmaynard.dev' },
    ],
    scripts: [
      {
        children:
          '(function(){var t=localStorage.getItem("theme");document.documentElement.dataset.theme=t==="dark"||t==="light"?t:matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light"})()',
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
