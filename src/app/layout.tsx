import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import LivingBackground from "@/components/background/LivingBackground";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/motion/SmoothScroll";
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
  themeColor: "#030712",
};

export const metadata: Metadata = {
  title: "Aymen Derouiche — Étudiant polyvalent à Mons | CV & Portfolio",
  description:
    "Étudiant polyvalent à Mons, disponible pour des opportunités en vente, caisse, horeca, service client, logistique et informatique.",
  keywords: [
    "Aymen Derouiche",
    "Étudiant polyvalent",
    "Job étudiant Mons",
    "Vente",
    "Caisse",
    "Horeca",
    "Service client",
    "Logistique",
    "Mons",
    "Belgique",
    "Next.js",
    "Software Engineer",
  ],
  authors: [{ name: "Aymen Derouiche", url: "https://github.com/aymexn" }],
  creator: "Aymen Derouiche",
  metadataBase: new URL("https://portfolio-pi-five-bykqu64adi.vercel.app"),
  openGraph: {
    title: "Aymen Derouiche — Étudiant polyvalent à Mons | CV & Portfolio",
    description:
      "Étudiant polyvalent à Mons, disponible pour des opportunités en vente, caisse, horeca, service client, logistique et informatique.",
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
    title: "Aymen Derouiche — Étudiant polyvalent à Mons | CV & Portfolio",
    description:
      "Étudiant polyvalent disponible immédiatement à Mons : Vente, Caisse, Horeca, Service client, Logistique et Tech.",
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
      <body className="min-h-full flex flex-col bg-[#030712] text-[#F8FAFC] relative selection:bg-[#19D7FF]/20 selection:text-[#19D7FF]">
        {/* Site-wide Smooth Scrolling on Desktop */}
        <SmoothScroll>
          {/* Dynamic Living 3D Background with Aurora Mesh, Grain & Cursor Tracking */}
          <LivingBackground />

          {/* Top/Side Scroll Progress Indicator */}
          <ScrollProgress />

          <Header />
          <main className="flex-1 pb-20 sm:pb-12 relative z-10">{children}</main>
          <Footer />

          {/* Persistent Global Floating WhatsApp Button */}
          <FloatingWhatsApp />

          {/* Mobile Bottom Navigation Bar */}
          <MobileBottomNav />
        </SmoothScroll>
      </body>
    </html>
  );
}
