import GetAppButton from "@/components/get-app-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Geist } from "next/font/google";
import { Roboto } from "next/font/google";
import BeThereLogo from "@/components/bethere-logo";
import NavBar from "@/components/ui/navbar";
import HeaderAuth from "@/components/header-auth";

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
    <html lang="en" className={roboto.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-5xl flex justify-between items-center px-5 text-sm">
                  <NavBar />
                  <HeaderAuth />
                </div>
              </nav>
              <div className="flex flex-col gap-20 max-w-5xl p-5">{children}</div>

              <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
                <div className="text-left">
                  <p>© 2024 Jacob Maynard </p>
                </div>
                <div className="flex justify-center gap-4">
                  <a href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </a>
                  <a href="/terms" className="hover:underline">
                    Terms
                  </a>
                </div>
                <ThemeSwitcher />
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
