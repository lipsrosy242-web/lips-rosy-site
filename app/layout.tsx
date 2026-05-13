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

export const metadata = {
  title: "Lips Rosy 💋",
  description: "Routine lèvres roses naturelle ✨ Livraison à domicile au Congo.",
  openGraph: {
    title: "Lips Rosy 💋",
    description: "Découvrez nos routines lèvres roses naturelles ✨",
    url: "https://lips-rosy-site.vercel.app",
    siteName: "Lips Rosy",
    images: [
      {
        url: "/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Lips Rosy",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
}