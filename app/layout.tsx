import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lips-rosy-site.vercel.app"),

  title: "Lips Rosy 💋",

  description:
    "Routine lèvres roses naturelle ✨ Livraison partout au Congo",

  openGraph: {
    title: "Lips Rosy 💋",
    description:
      "Routine lèvres roses naturelle ✨ Livraison partout au Congo",
    images: ["/banner-small.jpg"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lips Rosy 💋",
    description:
      "Routine lèvres roses naturelle ✨ Livraison partout au Congo",
    images: ["/banner-small.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}