import { Geist } from "next/font/google";
import { Roboto } from "next/font/google";
import BeThereLogo from "@/components/bethere-logo";
import NavBarWrapper from "@/components/ui/nav/navbar-wrapper";
import { FaGithub, FaYoutube, FaTwitter } from "react-icons/fa";

import { ThemeProvider } from "next-themes";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "BeThere website",
  description: "The best experience for location based photo sharing",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="${roboto.className}" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          themes={["light", "dark", "twilight"]}
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-10 items-center">
              <nav className="w-full flex border-b border-b-foreground/10 h-16">
                <div className="w-full z-50 bg-background flex justify-between items-center text-sm p-4">
                  <NavBarWrapper />
                </div>
              </nav>
              <div className="flex flex-col gap-20 max-w-6xl">{children}</div>
            </div>

            <footer className="w-full flex bg-background z-50 items-center justify-center border-t mx-auto text-center text-xs gap-8 py-8">
              <div className="text-left">
                <p>© 2025 Jacob Maynard </p>
              </div>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/InfinityBowman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-gray-500"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://youtube.com/@infinity7585?si=g1JcDj9i_OyPNp_a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-gray-500"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://twitter.com/your-twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl hover:text-gray-500"
                >
                  <FaTwitter />
                </a>
              </div>
            </footer>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
