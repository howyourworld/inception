import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#007AFF',
};

export const metadata: Metadata = {
  title: {
    default: "How Your World — Discover, Connect, Live Anywhere",
    template: "%s | How Your World"
  },
  description: "A next-generation travel and lifestyle platform that helps users explore, connect, and live anywhere in the world. Get AI-powered guidance for visas, housing, banking, and more.",
  keywords: ["travel", "expat", "digital nomad", "relocation", "visa guide", "international living", "city guides"],
  authors: [{ name: "How Your World" }],
  creator: "How Your World",
  publisher: "How Your World",
  metadataBase: new URL('https://howyourworld.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://howyourworld.com',
    siteName: 'How Your World',
    title: 'How Your World — Discover, Connect, Live Anywhere',
    description: 'The smartest way to live, travel, and connect anywhere on Earth. AI-powered guidance for international living.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'How Your World',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Your World — Discover, Connect, Live Anywhere',
    description: 'The smartest way to live, travel, and connect anywhere on Earth.',
    images: ['/og-image.jpg'],
    creator: '@howyourworld',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
