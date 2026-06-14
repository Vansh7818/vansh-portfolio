import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vansh Jain — Full-Stack Developer",
  description:
    "Portfolio of Vansh Jain, a B.Tech CSE student and full-stack developer building scalable web applications with React, Next.js, Java, and Node.js. Seeking software engineering internships for 2026.",
  keywords: [
    "Vansh Jain",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Java Developer",
    "Software Engineering Intern",
    "Portfolio",
    "B.Tech CSE",
  ],
  authors: [{ name: "Vansh Jain", url: "https://github.com/Vansh7818" }],
  creator: "Vansh Jain",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Vansh Jain — Full-Stack Developer",
    description:
      "B.Tech CSE student building scalable full-stack applications with React, Next.js, Java, and Node.js.",
    siteName: "Vansh Jain Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vansh Jain — Full-Stack Developer",
    description:
      "B.Tech CSE student building scalable full-stack applications with React, Next.js, Java, and Node.js.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
