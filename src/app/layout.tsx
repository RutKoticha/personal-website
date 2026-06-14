import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
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
      className={`${inter.variable} ${montserrat.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg-main text-txt-main font-sans">
        {children}
      </body>
    </html>
  );
}
