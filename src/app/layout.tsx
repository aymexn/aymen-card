import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0B1B2B",
};

export const metadata: Metadata = {
  title: "Aymen Derouiche — AI Systems & Product Engineer",
  description:
    "A personal digital profile for Aymen Derouiche — software, AI, design, e-commerce, operations and life in Belgium.",
  keywords: [
    "Aymen Derouiche",
    "AI Systems Engineer",
    "Full-Stack Developer",
    "Mons",
    "Belgique",
    "Next.js",
    "Product Engineer",
    "Operations",
  ],
  authors: [{ name: "Aymen Derouiche", url: "https://github.com/aymexn" }],
  creator: "Aymen Derouiche",
  metadataBase: new URL("https://aymenderouiche.com"),
  openGraph: {
    title: "Aymen Derouiche — AI Systems & Product Engineer",
    description:
      "A personal digital profile for Aymen Derouiche — software, AI, design, e-commerce, operations and life in Belgium.",
    url: "https://aymenderouiche.com",
    siteName: "Aymen Derouiche",
    images: [
      {
        url: "/photo.jpg",
        width: 800,
        height: 800,
        alt: "Aymen Derouiche",
      },
    ],
    locale: "fr_BE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aymen Derouiche — AI Systems & Product Engineer",
    description:
      "Aymen Derouiche — Bâtir, apprendre, créer, travailler, explorer. Tech, opérations, vie à Mons, Belgique.",
    images: ["/photo.jpg"],
  },
  icons: {
    icon: "/photo.jpg",
    apple: "/photo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0B1B2B] text-[#F7F5F0]">
        <Header />
        <main className="flex-1 pb-20 sm:pb-8">{children}</main>
        <Footer />
        <MobileBottomNav />
      </body>
    </html>
  );
}
