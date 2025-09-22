import React from "react";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

// Load default Google font (Inter)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Tycoon Technology - Innovative Digital Solutions",
  description:
    "Empowering your growth with innovative digital solutions, tailored to meet your business needs. Web development, app development, social media marketing, and more.",
  generator: "Tycoon Technology",
  keywords: [
    "web development",
    "app development",
    "social media marketing",
    "digital solutions",
    "technology services",
  ],
  authors: [{ name: "Tycoon Technology" }],
  openGraph: {
    title: "Tycoon Technology - Innovative Digital Solutions",
    description:
      "Empowering your growth with innovative digital solutions, tailored to meet your business needs.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${inter.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  );
}
