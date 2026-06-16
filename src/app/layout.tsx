import type { Metadata, Viewport } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Rut Koticha | Software Developer Portfolio",
  description: "Personal portfolio of Rut Koticha, a Software Developer specializing in clean code, robust backend services, and interactive web layouts. Discover my skills, projects, and achievements.",
  keywords: ["Rut Koticha", "Software Developer", "Web Developer", "DDU Dharmsinh Desai", "Portfolio", "C++", "Java", "React", "Next.js"],
  authors: [{ name: "Rut Koticha" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${firaCode.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-on-surface font-sans dot-grid">
        {children}
      </body>
    </html>
  );
}
