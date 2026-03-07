import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
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
      { title: 'Jacob Maynard | Software Developer' },
      {
        name: 'description',
        content:
          'Jacob Maynard - Software Developer specializing in React, TypeScript, .NET, and building high-performance web applications. Currently pursuing a Masters in AI at Saint Louis University.',
      },
      {
        name: 'keywords',
        content:
          'Jacob Maynard, Software Developer, React, TypeScript, .NET, JavaScript, Web Development, AI, Saint Louis University',
      },
      { name: 'author', content: 'Jacob Maynard' },
      { property: 'og:title', content: 'Jacob Maynard | Software Developer' },
      {
        property: 'og:description',
        content:
          'Software Developer specializing in React, TypeScript, .NET, and building high-performance web applications.',
      },
      { property: 'og:type', content: 'website' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.ico' },
    ],
    scripts: [
      {
        src: 'https://plausible.jacobmaynard.dev/js/pa-Kgv3yIBtqUtsphy9Oc7Um.js',
        async: true,
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
  return <Outlet />
}
