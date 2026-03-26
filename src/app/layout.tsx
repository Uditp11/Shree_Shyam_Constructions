import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SHREE SHYAM CONSTRUCTIONS | Premium Epoxy Flooring & Waterproofing",
  description:
    "Shree Shyam Constructions delivers premium epoxy flooring, industrial flooring, waterproofing, metallic flooring, 3D flooring, and more. Trusted, professional, and durable solutions for industrial, commercial, and residential clients.",
  keywords:
    "epoxy flooring, industrial flooring, waterproofing, 3D flooring, metallic flooring, car parking flooring, construction company, India",
  openGraph: {
    title: "SHREE SHYAM CONSTRUCTIONS",
    description:
      "Premium Epoxy Flooring & Waterproofing Solutions. Durable, Professional, Long-lasting.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen bg-[var(--color-offwhite)]">{children}</body>
    </html>
  );
}
