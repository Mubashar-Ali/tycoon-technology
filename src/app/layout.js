import React from "react";
import { Inter, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

// Load modern Google fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${inter.variable} ${poppins.variable} antialiased bg-background text-foreground`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
