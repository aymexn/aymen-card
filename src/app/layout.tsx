import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import AmbientLighting from "@/components/AmbientLighting";
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
  title: "Aymen Derouiche — Ingénieur Systèmes & Produit",
  description:
    "Profil numérique personnel d'Aymen Derouiche. Architectures logicielles SaaS, systèmes IA multi-agents et gestion opérationnelle rigoureuse à Mons, Belgique.",
  keywords: [
    "Aymen Derouiche",
    "Ingénieur Logiciel",
    "Product Engineer",
    "Full-Stack Developer",
    "Next.js",
    "Python",
    "AI Agents",
    "Retail Management",
    "Horeca",
    "Mons",
    "Belgique",
  ],
  authors: [{ name: "Aymen Derouiche", url: "https://github.com/aymexn" }],
  creator: "Aymen Derouiche",
  metadataBase: new URL("https://aymenderouiche.com"),
  openGraph: {
    title: "Aymen Derouiche — Ingénieur Systèmes & Produit",
    description:
      "Profil numérique personnel d'Aymen Derouiche. Architectures logicielles SaaS, systèmes IA multi-agents et gestion opérationnelle rigoureuse à Mons, Belgique.",
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
    title: "Aymen Derouiche — Ingénieur Systèmes & Produit",
    description:
      "Aymen Derouiche — BUILD · LEARN · CREATE · WORK · EXPLORE. Ingénierie logicielle et excellence opérationnelle.",
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
        {/* Site-wide Lenis Smooth Scrolling Wrapper */}
        <SmoothScroll>
          {/* Subtle Ambient Studio Lighting & Grid */}
          <AmbientLighting />

          {/* Top/Side Scroll Progress Indicator */}
          <ScrollProgress />

          <Header />
          <main className="flex-1 pb-16 sm:pb-10 relative z-10">{children}</main>
          <Footer />
          <MobileBottomNav />
        </SmoothScroll>
      </body>
    </html>
  );
}
