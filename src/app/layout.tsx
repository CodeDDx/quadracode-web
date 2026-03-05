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
  title: "QUADRA CODE — Unlimited Technology Power",
  description:
    "Quadra Code is a cutting-edge AI technology company building the next generation of commerce infrastructure. Software House, E-commerce Platforms, Business Consultancy.",
  keywords: [
    "Quadra Code",
    "AI",
    "E-commerce",
    "Software House",
    "Dubai",
    "Technology",
    "Business Consultancy",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
