import type { Metadata } from "next";
import { Newsreader, Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samuelconant.com"),
  title: {
    default: "Sam Conant — Sr. Principal Product Designer & AI Design Lead, Yahoo",
    template: "%s — Sam Conant",
  },
  description:
    "Sam Conant leads design strategy for products used by hundreds of millions of people. Work at the intersection of narrative, systems thinking, and clarity.",
  openGraph: {
    title: "Sam Conant — Sr. Principal Product Designer & AI Design Lead, Yahoo",
    description:
      "Design strategy for products used by hundreds of millions. Narrative, systems thinking, and the clarity that makes ideas carry themselves forward.",
    url: "https://samuelconant.com",
    siteName: "Sam Conant",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${instrument.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">{children}</body>
    </html>
  );
}
