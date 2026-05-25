import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const metadataBase = new URL("https://skslabs.dev");

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "SKS Labs — Digital Products, AI Solutions & Scalable Systems",
    template: "%s | SKS Labs",
  },
  description:
    "SKS Labs is a technology-focused startup studio building modern software products, AI-powered systems, and scalable digital infrastructure from Ghana to the world.",
  keywords: [
    "SKS Labs",
    "Sarfo Kelvin Senior",
    "Software Engineering",
    "AI Solutions",
    "Startup Studio",
    "RENTFLOW",
    "QUICKFIX",
    "Web Development",
    "Business Systems",
    "Ghana Tech Startup",
  ],
  authors: [
    { name: "Sarfo Kelvin Senior", url: "https://skslabs.dev" },
  ],
  creator: "SKS Labs",
  publisher: "SKS Labs",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "SKS Labs — Digital Products, AI Solutions & Scalable Systems",
    description:
      "SKS Labs is a technology-focused startup studio building modern software products, AI-powered systems, and scalable digital infrastructure from Ghana to the world.",
    type: "website",
    url: metadataBase.toString(),
    siteName: "SKS Labs",
    images: [
      {
        url: new URL("/SKS_Labs_Logo_no_text-bg.png", metadataBase).toString(),
        width: 1200,
        height: 630,
        alt: "SKS Labs logo",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SKS Labs — Digital Products, AI Solutions & Scalable Systems",
    description:
      "SKS Labs is a technology-focused startup studio building modern software products, AI-powered systems, and scalable digital infrastructure from Ghana to the world.",
    images: [new URL("/SKS_Labs_Logo_no_text-bg.png", metadataBase).toString()],
  },
  icons: {
    icon: "/SKS_Labs_Logo_no_text-bg.png",
    shortcut: "/SKS_Labs_Logo_no_text-bg.png",
    apple: "/SKS_Labs_Logo_no_text-bg.png",
  },
  alternates: {
    canonical: metadataBase.toString(),
    languages: {
      "en-US": metadataBase.toString(),
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-surface text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
