import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Google_Sans_Code } from "next/font/google";
import "./globals.css";

const googleSansCode = Google_Sans_Code({
  subsets: ["latin"],
  variable: "--font-google-sans-code",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
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
      className={`${spaceGrotesk.variable} ${googleSansCode.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-on-surface font-sans wavy-grid">
        {children}
      </body>
    </html>
  );
}
