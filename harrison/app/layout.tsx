import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import TickerFooter from "@/components/TickerFooter";
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
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-zinc-950">
        <header className="border-b border-zinc-200">
          <div className="max-w-6xl w-full mx-auto px-6 py-4 flex items-center justify-between font-mono text-xs uppercase tracking-widest">
            <Link
              href="/"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <span className="inline-block w-2 h-2 bg-accent" />
              Harrison Conant
            </Link>
            <nav className="flex gap-8">
              <Link
                href="/"
                className="text-zinc-500 hover:text-zinc-950 transition-colors"
              >
                Work
              </Link>
              <Link
                href="/about"
                className="text-zinc-500 hover:text-zinc-950 transition-colors"
              >
                About
              </Link>
            </nav>
          </div>
        </header>

        <div className="flex-1 w-full pb-32">{children}</div>

        <TickerFooter />
      </body>
    </html>
  );
}
