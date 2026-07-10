import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import RibbonsOverlay from "@/components/overlay/RibbonsOverlay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divyesh Nandanwar | Software Engineer & Full Stack Developer",
  description: "Portfolio of Divyesh Nandanwar, a Software Engineer and Full Stack Developer with 2 years of experience building modern web applications using React, Next.js, Node.js, and TypeScript. Showcasing projects and solutions that solve real-world problems with clean and efficient software.",
  keywords: ["Divyesh Nandanwar",
    "Full Stack Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "MongoDB",
    "Express.js",
    "REST API",
    "Portfolio",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Tailwind CSS Developer",
    "MongoDB Developer",
    "Express.js Developer",
    "REST API Developer",
    "Full Stack Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Tailwind CSS Developer",
    "MongoDB Developer",
    "Express.js Developer",
    "REST API Developer"],
  authors: [{ name: "Divyesh Nandanwar" }],
  creator: "Divyesh Nandanwar",
  viewport: "width=device-width, initial-scale=1",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://divyeshnandanwar.vercel.app",
    title: "Divyesh Nandanwar | Software Engineer & Full Stack Developer",
    description: "Portfolio of Divyesh Nandanwar, a Software Engineer and Full Stack Developer with 2 years of experience building modern web applications using React, Next.js, Node.js, and TypeScript. Showcasing projects and solutions that solve real-world problems with clean and efficient software.",
    images: [
      {
        url: "https://divyeshnandanwar.vercel.app/images/profile-image.png",
        width: 1200,
        height: 630,
        alt: "Divyesh Nandanwar - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Divyesh Nandanwar | Software Engineer & Full Stack Developer",
    description: "Portfolio of Divyesh Nandanwar, a Software Engineer and Full Stack Developer with 2 years of experience building modern web applications using React, Next.js, Node.js, and TypeScript. Showcasing projects and solutions that solve real-world problems with clean and efficient software.",
    images: ["https://divyeshnandanwar.vercel.app/images/profile-image.png"],
    creator: "@Divyesh_43",
  },
  metadataBase: new URL("https://divyeshnandanwar.vercel.app"),
  alternates: {
    canonical: "https://divyeshnandanwar.vercel.app",
  },
   icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/profile-image.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Divyesh Nandanwar",
  "jobTitle": "Software Engineer & Full Stack Developer",
  "description": "Software Engineer and Full Stack Developer with 2 years of experience building modern web applications using React, Next.js, Node.js, TypeScript, and AI integration.",
  "url": "https://divyeshnandanwar.vercel.app",
  "image": "https://divyeshnandanwar.vercel.app/images/profile-image.png",
  "sameAs": [
    "https://twitter.com/Divyesh_43",
    "https://www.linkedin.com/in/divyesh-nandanwar",
    "https://github.com/D1vyeshN"
  ],
  "knowsAbout": [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Redux Toolkit",
    "Ant Design",
    "HTML5",
    "CSS3",
    "shadcn/ui",
    "Framer Motion",
    "Node.js",
    "Express.js",
    "MongoDB",
    "REST API",
    "JWT & OAuth",
    "Jest",
    "React Testing Library",
    "Supertest",
    "Docker",
    "GitHub Actions",
    "Git",
    "Postman",
    "Vercel",
    "OWASP Top 10",
    "Burp Suite",
    "Penetration Testing",
    "SSR & SSG",
    "Core Web Vitals",
    "Code Splitting",
    "Lazy Loading",
    "AI / LLM APIs",
    "Artificial Intelligence",
    "Machine Learning",
    "AI Integration"
  ],
  "skills": [
    "Full Stack Development",
    "Frontend Development",
    "Backend Development",
    "Web Development",
    "AI Development",
    "Software Engineering",
    "React Development",
    "Next.js Development",
    "TypeScript Development",
    "JavaScript Development",
    "Node.js Development",
    "API Development",
    "Database Management",
    "Testing",
    "DevOps",
    "Security Testing",
    "Performance Optimization"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <RibbonsOverlay />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
