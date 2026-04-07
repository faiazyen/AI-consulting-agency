import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "AI Consultin — AI Consulting Designed for Performance and Profit",
  description:
    "We build and implement custom AI agents that automate calls, messages, and workflows powered by your own dashboard for full visibility and control.",
  openGraph: {
    title: "AI Consultin",
    description:
      "We build and implement custom AI agents that automate calls, messages, and workflows powered by your own dashboard for full visibility and control.",
    url: "https://aiconsultin.co",
    siteName: "AI Consultin",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Consultin",
    description:
      "We build and implement custom AI agents that automate calls, messages, and workflows powered by your own dashboard for full visibility and control.",
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background">{children}</body>
    </html>
  );
}
