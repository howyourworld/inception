import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "How Your World — Discover, Connect, Live Anywhere",
  description: "A next-generation travel and lifestyle platform that helps users explore, connect, and live anywhere in the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
