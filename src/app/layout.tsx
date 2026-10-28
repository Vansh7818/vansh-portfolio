import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0e15" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Vansh Jain | Software Development Engineer & Full-Stack Developer",
  description:
    "Portfolio of Vansh Jain — Software Development Intern at KyronDataTech and B.Tech CSE undergraduate. Specializing in React, Next.js 14, Java REST APIs, Spring Boot, and scalable system architecture.",
  keywords: [
    "Vansh Jain",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Java Developer",
    "Spring Boot",
    "SDE Intern",
    "Parul University",
    "KyronDataTech",
    "LeetCode DSA",
    "Portfolio",
  ],
  authors: [{ name: "Vansh Jain", url: "https://github.com/Vansh7818" }],
  creator: "Vansh Jain",
  metadataBase: new URL("https://vansh-portfolio-three-eta.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vansh-portfolio-three-eta.vercel.app",
    title: "Vansh Jain | Software Development Engineer & Full-Stack Developer",
    description:
      "Software Development Intern at KyronDataTech & B.Tech CSE. Building production-grade web systems with React, Next.js, Java, and Node.js.",
    siteName: "Vansh Jain Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Vansh Jain — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vansh Jain | Software Development Engineer & Full-Stack Developer",
    description:
      "Software Development Intern at KyronDataTech & B.Tech CSE. Building production-grade web systems with React, Next.js, Java, and Node.js.",
    images: ["/images/profile.jpg"],
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
    <html lang="en" className="h-full scroll-smooth antialiased dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('vansh-theme');if(t==='light'){document.documentElement.classList.remove('dark')}else if(t==='dark'){document.documentElement.classList.add('dark')}else if(window.matchMedia('(prefers-color-scheme: light)').matches){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary/30 selection:text-foreground">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
