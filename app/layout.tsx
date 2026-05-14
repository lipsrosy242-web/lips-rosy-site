import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lips Rosy 💋",
  description:
    "Routine lèvres roses naturelle ✨ Livraison à domicile partout au Congo",

  openGraph: {
    title: "Lips Rosy 💋",
    description:
      "Découvrez nos routines lèvres roses naturelles ✨",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}