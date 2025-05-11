import { Roboto } from 'next/font/google';
import NavBarWrapper from '@/components/ui/nav/navbar-wrapper';
import Footer from '@/components/ui/footer';
import { ThemeProvider } from 'next-themes';
import './globals.css';

const defaultUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Jacob Maynard - Portfolio',
  description: 'Personal portfolio showcasing my work and experience.',
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-roboto',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} font-sans`}
    >
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          themes={['dark', 'twilight']}
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-10 items-center">
              <header className="sticky top-0 w-full h-12 z-50 bg-background border-b border-b-foreground/10 flex justify-between items-center text-sm p-4">
                <NavBarWrapper />
              </header>
              <div className="flex flex-col gap-20 max-w-6xl">{children}</div>
            </div>

            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
