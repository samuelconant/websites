import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import TickerFooter from "@/components/TickerFooter";
import InlineScript from "@/components/InlineScript";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Harrison Conant",
    template: "%s — Harrison Conant",
  },
  description:
    "Portfolio of Harrison Conant — digital artist working in Procreate. Process-first: every piece leads with how it was made.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      // The inline script below adds `js` before first paint
      suppressHydrationWarning
    >
      <head>
        {/* Marks JS as available so Reveal may hide content before it
            animates in. Without JS everything stays visible. */}
        <InlineScript html="document.documentElement.classList.add('js')" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-paper text-ink">
        <header className="border-b border-rule">
          <div className="page-container py-4 flex items-center justify-between mono-label">
            <Link
              href="/"
              className="flex items-center gap-2 hover:text-accent-ink focus-visible:text-accent-ink transition-colors"
            >
              <span className="inline-block w-2 h-2 bg-accent" />
              Harrison Conant
            </Link>
            <nav className="flex gap-8">
              <Link
                href="/"
                className="text-muted hover:text-ink focus-visible:text-ink transition-colors"
              >
                Work
              </Link>
              <Link
                href="/about"
                className="text-muted hover:text-ink focus-visible:text-ink transition-colors"
              >
                About
              </Link>
            </nav>
          </div>
        </header>

        <div className="flex-1 w-full pb-24">{children}</div>

        <TickerFooter />
      </body>
    </html>
  );
}
